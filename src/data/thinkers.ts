export type Thinker = {
  id: string;
  name: string;
  nameZh: string;
  birthDeath: string;
  shortBioEn: string;
  shortBioZh: string;
  keyConcepts: string[];
  relatedWorks: string[];
  tags: string[];
};

export const thinkers: Thinker[] = [
  {
    id: 'simone-de-beauvoir',
    name: 'Simone de Beauvoir',
    nameZh: '西蒙娜·德·波伏娃',
    birthDeath: '1908-1986',
    shortBioEn: 'French existentialist philosopher and writer whose work shaped modern feminist theory.',
    shortBioZh: '法国存在主义哲学家与作家，现代女性主义理论的重要奠基者。',
    keyConcepts: ['the Other', 'becoming woman', 'situated freedom'],
    relatedWorks: ['The Second Sex', 'The Ethics of Ambiguity'],
    tags: ['gender', 'body', 'embodiment']
  },
  {
    id: 'audre-lorde',
    name: 'Audre Lorde',
    nameZh: '奥德丽·洛德',
    birthDeath: '1934-1992',
    shortBioEn: 'Black lesbian feminist poet and theorist of difference, anger, erotic power, and survival.',
    shortBioZh: '黑人女同性恋女性主义诗人与理论家，书写差异、愤怒、情色力量与生存政治。',
    keyConcepts: ['the erotic as power', 'anger', 'difference'],
    relatedWorks: ['Sister Outsider', 'Zami: A New Spelling of My Name'],
    tags: ['body', 'erotic', 'anger']
  },
  {
    id: 'bell-hooks',
    name: 'bell hooks',
    nameZh: '贝尔·胡克斯',
    birthDeath: '1952-2021',
    shortBioEn: 'Cultural critic and feminist theorist who wrote on love, pedagogy, race, gender, and class.',
    shortBioZh: '文化批评家与女性主义理论家，关注爱、教育、种族、性别与阶级。',
    keyConcepts: ['oppositional gaze', 'love ethic', 'feminist pedagogy'],
    relatedWorks: ['Ain’t I a Woman', 'Teaching to Transgress', 'All About Love'],
    tags: ['gender', 'care', 'intersectionality']
  },
  {
    id: 'donna-haraway',
    name: 'Donna Haraway',
    nameZh: '唐娜·哈拉维',
    birthDeath: '1944-',
    shortBioEn: 'Feminist science studies scholar known for cyborg theory, situated knowledge, and multispecies thinking.',
    shortBioZh: '女性主义科学研究学者，以赛博格理论、情境知识与多物种思考闻名。',
    keyConcepts: ['cyborg', 'situated knowledge', 'companion species'],
    relatedWorks: ['A Cyborg Manifesto', 'Situated Knowledges', 'Staying with the Trouble'],
    tags: ['technology', 'posthumanism', 'situated knowledge']
  },
  {
    id: 'judith-butler',
    name: 'Judith Butler',
    nameZh: '朱迪斯·巴特勒',
    birthDeath: '1956-',
    shortBioEn: 'Philosopher whose work transformed theories of gender, performativity, precarity, and queer politics.',
    shortBioZh: '哲学家，其研究深刻影响性别、表演性、脆弱性与酷儿政治理论。',
    keyConcepts: ['gender performativity', 'precarity', 'trouble'],
    relatedWorks: ['Gender Trouble', 'Bodies That Matter', 'Precarious Life'],
    tags: ['gender', 'queer theory', 'performativity']
  },
  {
    id: 'sara-ahmed',
    name: 'Sara Ahmed',
    nameZh: '萨拉·艾哈迈德',
    birthDeath: '1969-',
    shortBioEn: 'Feminist scholar of affect, complaint, orientation, diversity work, and institutional power.',
    shortBioZh: '女性主义学者，研究情感、投诉、取向、多元工作与制度权力。',
    keyConcepts: ['feminist killjoy', 'orientation', 'complaint'],
    relatedWorks: ['The Cultural Politics of Emotion', 'Living a Feminist Life', 'Complaint!'],
    tags: ['affect', 'feminist killjoy', 'body']
  },
  {
    id: 'lauren-berlant',
    name: 'Lauren Berlant',
    nameZh: '劳伦·贝兰特',
    birthDeath: '1957-2021',
    shortBioEn: 'Affect theorist whose work explored intimacy, citizenship, attachment, and cruel optimism.',
    shortBioZh: '情感理论学者，研究亲密性、公民身份、依附与残酷乐观。',
    keyConcepts: ['cruel optimism', 'intimate publics', 'affect'],
    relatedWorks: ['Cruel Optimism', 'The Female Complaint'],
    tags: ['affect', 'care', 'embodiment']
  },
  {
    id: 'patricia-hill-collins',
    name: 'Patricia Hill Collins',
    nameZh: '帕特里夏·希尔·柯林斯',
    birthDeath: '1948-',
    shortBioEn: 'Sociologist whose Black feminist thought reframed knowledge, power, and intersecting oppression.',
    shortBioZh: '社会学家，以黑人女性主义思想重构知识、权力与交叉压迫的理解。',
    keyConcepts: ['matrix of domination', 'Black feminist thought', 'outsider within'],
    relatedWorks: ['Black Feminist Thought', 'Intersectionality as Critical Social Theory'],
    tags: ['intersectionality', 'gender', 'decolonial feminism']
  },
  {
    id: 'chandra-talpade-mohanty',
    name: 'Chandra Talpade Mohanty',
    nameZh: '钱德拉·塔尔帕德·莫汉蒂',
    birthDeath: '1955-',
    shortBioEn: 'Transnational feminist theorist critiquing colonial knowledge and universalizing images of women.',
    shortBioZh: '跨国女性主义理论家，批判殖民知识与对“第三世界女性”的同质化想象。',
    keyConcepts: ['transnational feminism', 'colonial discourse', 'solidarity'],
    relatedWorks: ['Feminism Without Borders', 'Under Western Eyes'],
    tags: ['decolonial feminism', 'labor', 'gender']
  },
  {
    id: 'gayatri-spivak',
    name: 'Gayatri Chakravorty Spivak',
    nameZh: '佳亚特里·斯皮瓦克',
    birthDeath: '1942-',
    shortBioEn: 'Literary theorist and postcolonial critic known for work on subalternity, representation, and translation.',
    shortBioZh: '文学理论家与后殖民批评家，关注底层、再现与翻译政治。',
    keyConcepts: ['subaltern', 'strategic essentialism', 'representation'],
    relatedWorks: ['Can the Subaltern Speak?', 'A Critique of Postcolonial Reason'],
    tags: ['decolonial feminism', 'gender', 'labor']
  },
  {
    id: 'angela-davis',
    name: 'Angela Davis',
    nameZh: '安吉拉·戴维斯',
    birthDeath: '1944-',
    shortBioEn: 'Abolitionist feminist philosopher and activist linking race, gender, prisons, labor, and freedom.',
    shortBioZh: '废奴女性主义哲学家与行动者，连接种族、性别、监狱、劳动与自由政治。',
    keyConcepts: ['abolition feminism', 'prison industrial complex', 'freedom'],
    relatedWorks: ['Women, Race & Class', 'Are Prisons Obsolete?'],
    tags: ['intersectionality', 'labor', 'care']
  },
  {
    id: 'gloria-anzaldua',
    name: 'Gloria Anzaldúa',
    nameZh: '格洛丽亚·安萨尔杜阿',
    birthDeath: '1942-2004',
    shortBioEn: 'Chicana feminist theorist and writer of borderlands, language, mestiza consciousness, and queer identity.',
    shortBioZh: '奇卡纳女性主义理论家与作家，书写边境、语言、混血意识与酷儿身份。',
    keyConcepts: ['borderlands', 'mestiza consciousness', 'nepantla'],
    relatedWorks: ['Borderlands/La Frontera', 'This Bridge Called My Back'],
    tags: ['queer theory', 'decolonial feminism', 'embodiment']
  },
  {
    id: 'helene-cixous',
    name: 'Hélène Cixous',
    nameZh: '埃莱娜·西苏',
    birthDeath: '1937-',
    shortBioEn: 'French feminist writer and theorist associated with écriture féminine and embodied writing.',
    shortBioZh: '法国女性主义作家与理论家，代表概念包括女性书写与身体化写作。',
    keyConcepts: ['écriture féminine', 'writing the body', 'difference'],
    relatedWorks: ['The Laugh of the Medusa', 'Three Steps on the Ladder of Writing'],
    tags: ['body', 'psychoanalysis', 'embodiment']
  },
  {
    id: 'luce-irigaray',
    name: 'Luce Irigaray',
    nameZh: '露西·伊利格瑞',
    birthDeath: '1930-',
    shortBioEn: 'Philosopher and psychoanalytic feminist critic of phallocentrism, sexual difference, and language.',
    shortBioZh: '哲学家与精神分析女性主义批评家，研究菲勒斯中心主义、性差异与语言。',
    keyConcepts: ['sexual difference', 'mimesis', 'two lips'],
    relatedWorks: ['Speculum of the Other Woman', 'This Sex Which Is Not One'],
    tags: ['psychoanalysis', 'body', 'gender']
  },
  {
    id: 'julia-kristeva',
    name: 'Julia Kristeva',
    nameZh: '朱莉娅·克里斯蒂娃',
    birthDeath: '1941-',
    shortBioEn: 'Literary theorist and psychoanalyst whose ideas include abjection, intertextuality, and the semiotic.',
    shortBioZh: '文学理论家与精神分析学者，提出卑贱物、互文性与符号态等重要概念。',
    keyConcepts: ['abjection', 'semiotic', 'intertextuality'],
    relatedWorks: ['Powers of Horror', 'Revolution in Poetic Language'],
    tags: ['psychoanalysis', 'body', 'affect']
  },
  {
    id: 'kimberle-crenshaw',
    name: 'Kimberlé Crenshaw',
    nameZh: '金伯莉·克伦肖',
    birthDeath: '1959-',
    shortBioEn: 'Legal scholar who coined intersectionality to analyze overlapping systems of discrimination.',
    shortBioZh: '法学学者，提出交叉性理论以分析重叠的歧视与权力结构。',
    keyConcepts: ['intersectionality', 'structural discrimination', 'critical race theory'],
    relatedWorks: ['Demarginalizing the Intersection of Race and Sex', 'Mapping the Margins'],
    tags: ['intersectionality', 'gender', 'labor']
  },
  {
    id: 'eve-kosofsky-sedgwick',
    name: 'Eve Kosofsky Sedgwick',
    nameZh: '伊芙·科索夫斯基·塞奇威克',
    birthDeath: '1950-2009',
    shortBioEn: 'Queer theorist whose work explored epistemology, the closet, affect, reparative reading, and sexuality.',
    shortBioZh: '酷儿理论家，研究知识论、衣柜、情感、修复式阅读与性。',
    keyConcepts: ['the closet', 'reparative reading', 'paranoid reading'],
    relatedWorks: ['Epistemology of the Closet', 'Touching Feeling'],
    tags: ['queer theory', 'affect', 'body']
  },
  {
    id: 'adrienne-rich',
    name: 'Adrienne Rich',
    nameZh: '阿德里安娜·里奇',
    birthDeath: '1929-2012',
    shortBioEn: 'Poet and feminist essayist who theorized compulsory heterosexuality, location, and women-centered knowledge.',
    shortBioZh: '诗人与女性主义散文家，讨论强制异性恋、位置政治与女性知识。',
    keyConcepts: ['compulsory heterosexuality', 'politics of location', 'lesbian continuum'],
    relatedWorks: ['Compulsory Heterosexuality and Lesbian Existence', 'On Lies, Secrets, and Silence'],
    tags: ['compulsory heterosexuality', 'queer theory', 'gender']
  },
  {
    id: 'silvia-federici',
    name: 'Silvia Federici',
    nameZh: '西尔维娅·费代里奇',
    birthDeath: '1942-',
    shortBioEn: 'Feminist scholar and activist analyzing capitalism, witch hunts, housework, and reproductive labor.',
    shortBioZh: '女性主义学者与行动者，分析资本主义、猎巫、家务劳动与再生产劳动。',
    keyConcepts: ['reproductive labor', 'wages for housework', 'commons'],
    relatedWorks: ['Caliban and the Witch', 'Revolution at Point Zero'],
    tags: ['reproductive labor', 'labor', 'care']
  },
  {
    id: 'rosi-braidotti',
    name: 'Rosi Braidotti',
    nameZh: '罗西·布拉伊多蒂',
    birthDeath: '1954-',
    shortBioEn: 'Posthuman feminist philosopher of nomadic subjectivity, ethics, embodiment, and more-than-human life.',
    shortBioZh: '后人类女性主义哲学家，研究游牧主体性、伦理、身体化与超越人类的生命。',
    keyConcepts: ['nomadic subjectivity', 'posthuman feminism', 'affirmative ethics'],
    relatedWorks: ['Nomadic Subjects', 'The Posthuman'],
    tags: ['posthumanism', 'embodiment', 'technology']
  }
];
