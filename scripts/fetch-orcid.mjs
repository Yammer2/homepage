/**
 * ORCID Publication Fetcher
 * ビルド前にORCID Public APIから論文情報を取得し、
 * src/data/publications.json に保存します。
 *
 * Usage: node scripts/fetch-orcid.mjs
 */

import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ORCID_ID = '0009-0001-9468-7282';
const OUTPUT_PATH = join(__dirname, '../src/data/publications.json');

async function fetchORCID() {
  console.log(`📡 Fetching publications from ORCID: ${ORCID_ID}`);

  try {
    // 1. works summaryを取得
    const worksRes = await fetch(
      `https://pub.orcid.org/v3.0/${ORCID_ID}/works`,
      { headers: { Accept: 'application/json' } }
    );

    if (!worksRes.ok) {
      throw new Error(`ORCID API error: ${worksRes.status} ${worksRes.statusText}`);
    }

    const worksData = await worksRes.json();
    const groups = worksData.group ?? [];

    if (groups.length === 0) {
      console.log('⚠️  No publications found on ORCID. Writing empty array.');
      writeFileSync(OUTPUT_PATH, JSON.stringify([], null, 2), 'utf-8');
      return;
    }

    // 2. 各論文の詳細を取得（put-codeを使用）
    const publications = [];

    for (const group of groups) {
      // 最初のwork-summaryから情報を取得
      const summary = group['work-summary']?.[0];
      if (!summary) continue;

      const putCode = summary['put-code'];

      try {
        const detailRes = await fetch(
          `https://pub.orcid.org/v3.0/${ORCID_ID}/work/${putCode}`,
          { headers: { Accept: 'application/json' } }
        );

        if (!detailRes.ok) continue;
        const work = await detailRes.json();

        // タイトル
        const title = work.title?.title?.value ?? '';

        // 著者
        const contributors = work.contributors?.contributor ?? [];
        const authors = contributors
          .filter((c) => c['contributor-attributes']?.['contributor-role'] === 'AUTHOR' ||
                         c['contributor-attributes']?.['contributor-role'] === 'first-author' ||
                         !c['contributor-attributes']?.['contributor-role'])
          .map((c) => c['credit-name']?.value ?? '')
          .filter(Boolean);

        // 掲載誌・会議
        const venue = work['journal-title']?.value ?? '';

        // 年
        const year = work['publication-date']?.year?.value
          ? parseInt(work['publication-date'].year.value)
          : null;

        // DOI / URL
        let doi = null;
        let url = null;
        const externalIds = work['external-ids']?.['external-id'] ?? [];
        for (const id of externalIds) {
          if (id['external-id-type'] === 'doi') {
            doi = id['external-id-value'];
          }
          if (id['external-id-url']?.value && !url) {
            url = id['external-id-url'].value;
          }
        }
        if (doi && !url) url = `https://doi.org/${doi}`;

        // タイプ
        const typeMap = {
          'journal-article': 'Journal Article',
          'conference-paper': 'Conference Paper',
          'book-chapter': 'Book Chapter',
          'book': 'Book',
          'other': 'Other',
        };
        const type = typeMap[work.type] ?? work.type ?? 'Other';

        if (title) {
          publications.push({ title, authors, venue, year, doi, url, type });
        }
      } catch (err) {
        console.warn(`  ⚠️  Skipping put-code ${putCode}: ${err.message}`);
      }
    }

    // 年の降順でソート
    publications.sort((a, b) => (b.year ?? 0) - (a.year ?? 0));

    writeFileSync(OUTPUT_PATH, JSON.stringify(publications, null, 2), 'utf-8');
    console.log(`✅ Saved ${publications.length} publications to src/data/publications.json`);

  } catch (err) {
    console.error(`❌ Failed to fetch ORCID data: ${err.message}`);
    console.error('   Keeping existing publications.json unchanged.');
    process.exit(1);
  }
}

fetchORCID();
