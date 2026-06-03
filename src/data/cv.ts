export const cvData = {
  education: [
    {
      degree: { en: 'Ph.D. Student, Creative Informatics', ja: '博士後期課程 情報創成工学専攻' },
      institution: { en: 'Graduate School of Computer Science and Systems Engineering, Kyushu Institute of Technology', ja: '九州工業大学 大学院情報工学府' },
      period: '2025 – Present',
    },
    {
      degree: { en: 'M.Sc., Creative Informatics', ja: '修士課程 情報創成工学専攻' },
      institution: { en: 'Graduate School of Computer Science and Systems Engineering, Kyushu Institute of Technology', ja: '九州工業大学 大学院情報工学府' },
      period: '2023 – 2025',
    },
  ],
  experience: [
    {
      role: { en: 'Student Mentor (4 undergraduate/master students)', ja: '学生指導（学部・修士 4名）' },
      organization: { en: 'Kyushu Institute of Technology', ja: '九州工業大学' },
      period: '2025 – Present',
      description: {
        en: 'Leading experiment planning, implementation support, and paper writing for junior students.',
        ja: '実験計画・実装サポート・論文執筆支援を担当。',
      },
    },
    {
      role: { en: 'Part-time Engineer', ja: 'エンジニアアルバイト' },
      organization: { en: 'Gikyo', ja: '技業' },
      period: '2023 – Present',
      description: {
        en: 'Built an inventory management system using Python and the ChatGPT API.',
        ja: 'PythonとChatGPT APIを用いた備品管理システムを開発。',
      },
    },
  ],
  awards: [
    {
      title: { en: 'Grand Prize & CyberAgent Award — Challecara 2022', ja: '最優秀賞・サイバーエージェント賞 — チャレキャラ 2022' },
      venue: { en: 'Challecara (App Contest)', ja: 'チャレキャラ（アプリコンテスト）' },
      year: 2022,
      url: 'https://challecara.org/?page_id=2950',
    },
  ],
  researchInterests: {
    en: [
      'Facial Expression Recognition',
      'Compound Expression Estimation',
      'Drowsiness / Arousal Estimation',
      'Contrastive Learning',
      'Zero-Shot Learning',
      'Computer Vision',
    ],
    ja: [
      '顔表情認識',
      '複合表情推定',
      '眠気・覚醒度推定',
      '対照学習',
      'ゼロショット学習',
      'コンピュータビジョン',
    ],
  },
  bio: {
    en: 'I am a Ph.D. student at Kyushu Institute of Technology, working on machine learning for facial expression recognition (FER) and internal state estimation (drowsiness, arousal). My research focuses on overcoming real-world bottlenecks such as data scarcity and individual differences, with a particular interest in zero-shot compound expression estimation and identity-robust contrastive learning.',
    ja: '九州工業大学 大学院情報工学府 博士後期課程に在籍しています。顔画像を用いた感情認識（FER）および内的状態（眠気・覚醒度）の推定において，データ不足や個人差といった実世界応用上のボトルネックを解決する機械学習手法の研究を行っています。特に，複合表情のゼロショット推定や対照学習による個人差の影響低減に取り組んでいます。',
  },
  skills: {
    en: [
      { category: 'Machine Learning', items: ['PyTorch', 'TensorFlow', 'Contrastive Learning', 'Metric Learning', 'CNN', 'ViT', 'GAN', 'VAE', 'CLIP'] },
      { category: 'Computer Vision', items: ['Facial Expression Recognition', 'Multimodal Emotion Recognition'] },
      { category: 'NLP', items: ['BERT', 'Attention LSTM'] },
      { category: 'Infrastructure', items: ['Linux', 'CUDA', 'LDAP', 'GPU Server Management'] },
      { category: 'Programming', items: ['Python (Advanced)', 'C/C++ (Intermediate)', 'Java (Intermediate)', 'TypeScript (Intermediate)'] },
    ],
    ja: [
      { category: '機械学習', items: ['PyTorch', 'TensorFlow', '対照学習', '距離学習', 'CNN', 'ViT', 'GAN', 'VAE', 'CLIP'] },
      { category: 'コンピュータビジョン', items: ['顔表情認識', 'マルチモーダル感情認識'] },
      { category: '自然言語処理', items: ['BERT', 'Attention付きLSTM'] },
      { category: 'インフラ', items: ['Linux', 'CUDA', 'LDAP', 'GPUサーバー管理'] },
      { category: 'プログラミング', items: ['Python（上級）', 'C/C++（中級）', 'Java（中級）', 'TypeScript（中級）'] },
    ],
  },
  social: {
    email: 'yamamoto.riku878@mail.kyutech.jp',
    orcid: '0009-0001-9468-7282',
    github: 'yammer2',
    googleScholar: '',
    researchgate: '',
  },
};
