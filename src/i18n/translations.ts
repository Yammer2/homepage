export const languages = {
  en: 'English',
  ja: '日本語',
} as const;

export type Lang = keyof typeof languages;

export const translations = {
  en: {
    nav: {
      home: 'Home',
      publications: 'Publications',
      cv: 'CV',
    },
    home: {
      name: 'Riku Yamamoto',
      position: 'PhD Student',
      affiliation: 'Kyushu Institute of Technology',
      department: 'Department of Creative Informatics',
      bio: 'I am a doctoral student at the Kyushu Institute of Technology. My research interests include ...',
      researchInterests: 'Research Interests',
      recentPublications: 'Recent Publications',
      viewAll: 'View all publications →',
      contact: 'Contact',
    },
    publications: {
      title: 'Publications',
      subtitle: 'Academic papers and conference proceedings',
      noPublications: 'No publications found.',
      authors: 'Authors',
      venue: 'Venue',
      year: 'Year',
      doi: 'DOI',
      pdf: 'PDF',
    },
    cv: {
      title: 'Curriculum Vitae',
      education: 'Education',
      experience: 'Experience',
      awards: 'Awards & Honors',
      skills: 'Skills',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with Astro',
    },
  },
  ja: {
    nav: {
      home: 'ホーム',
      publications: '論文',
      cv: '経歴',
    },
    home: {
      name: '山本 陸',
      position: '博士後期課程',
      affiliation: '九州工業大学',
      department: '情報工学府 情報創成工学専攻',
      bio: '九州工業大学 情報工学府 情報創成工学専攻 博士後期課程に在籍しています。研究分野は…',
      researchInterests: '研究分野',
      recentPublications: '最近の論文',
      viewAll: '論文一覧を見る →',
      contact: 'コンタクト',
    },
    publications: {
      title: '論文一覧',
      subtitle: '学術論文・国際会議発表',
      noPublications: '論文が見つかりません。',
      authors: '著者',
      venue: '掲載誌・会議',
      year: '年',
      doi: 'DOI',
      pdf: 'PDF',
    },
    cv: {
      title: '経歴',
      education: '学歴',
      experience: '職歴・研究歴',
      awards: '受賞・表彰',
      skills: 'スキル',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Astro で構築',
    },
  },
} as const;

export function t(lang: Lang) {
  return translations[lang];
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'en' ? 'ja' : 'en';
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return 'en';
}
