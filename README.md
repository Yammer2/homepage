# 山本陸 研究ホームページ

Astro製の研究者向け個人ホームページです。

## セットアップ

```bash
npm install
```

## 開発サーバー起動

```bash
npm run dev
```

http://localhost:4321/homepage/ でアクセスできます。

## ビルド（ORCID論文取得 + 静的サイト生成）

```bash
npm run build
```

## カスタマイズ

### プロフィール・経歴の編集
`src/data/cv.ts` を編集してください。

- メールアドレス・GitHub・Google Scholar URLを追加
- 学歴・経歴・受賞歴を追加
- 研究分野を追加（日英両方）

### 翻訳テキストの編集
`src/i18n/translations.ts` を編集してください。

### GitHub Pages の設定
`astro.config.mjs` の以下を変更してください：

```js
site: 'https://YOUR_GITHUB_USERNAME.github.io',
base: '/homepage',  // リポジトリ名に合わせて変更
```

## GitHub Pages へのデプロイ

1. GitHubにリポジトリを作成
2. `git push` するだけで自動デプロイされます（GitHub Actions）
3. GitHub Settings → Pages → Source を **GitHub Actions** に設定

## ORCIDからの論文自動取得

ビルド時に `scripts/fetch-orcid.mjs` が実行され、ORCID API から論文情報を自動取得します。
取得結果は `src/data/publications.json` に保存されます。
