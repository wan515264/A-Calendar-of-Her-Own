import { Person } from './people';

export type TheoryCardKind =
  | 'thinker'
  | 'writer'
  | 'artist'
  | 'photographer'
  | 'concept'
  | 'text'
  | 'quote'
  | 'debate'
  | 'criticism'
  | 'theory'
  | 'performance'
  | 'installation'
  | 'sculpture'
  | 'novel'
  | 'reflection'
  | 'classic-text'
  | 'quote-reading'
  | 'keyword'
  | 'theory-debate'
  | 'reflection-question';

export type TheoryCard = {
  id: string;
  date: string;
  cardType?: TheoryCardKind;
  cardTitle?: string;
  cardTitleZh?: string;
  titleSeparator?: ' ' | '：';
  years?: string;
  role?: string;
  creator?: string;
  creatorZh?: string;
  focusTitle?: string;
  focusTitleZh?: string;
  thinkerId: string;
  thinkerName: string;
  thinkerNameZh: string;
  birthDeath: string;
  concept: string;
  conceptZh: string;
  tags: string[];
  quote: string;
  quoteSource: string;
  quoteReadingEn?: string;
  quoteReadingZh?: string;
  explanationEn: string;
  explanationZh: string;
  reflectionQuestion: string;
  relatedWorks: string[];
  person?: Person;
  personId?: string;
  sourceText?: string;
  image?: string;
  imageCredit?: string;
  introZh?: string;
  introEn?: string;
  location?: string;
  theoryFramework?: string;
  researchLens?: {
    title: string;
    titleZh?: string;
    citation?: string;
    summaryEn?: string;
    summaryZh?: string;
  };
};

// Add new daily almanac cards here. Keep dates in YYYY-MM-DD format so the Today page can match them.
// cardType lets a day feature a thinker, concept, classic text, quote reading, keyword, debate, or reflection prompt.
export const theoryCards: TheoryCard[] = [
  {
    id: '2026-07-04-audre-lorde',
    date: '2026-07-04',
    cardType: 'concept',
    cardTitle: 'The Erotic as Power',
    cardTitleZh: '情色作为力量',
    thinkerId: 'audre-lorde',
    thinkerName: 'Audre Lorde',
    thinkerNameZh: '奥德丽·洛德',
    birthDeath: '1934-1992',
    concept: 'The Erotic as Power',
    conceptZh: '情色作为力量',
    tags: ['body', 'erotic', 'power', 'feminism'],
    quote: 'Paraphrased idea: the erotic can be a deep source of knowledge, joy, and political power.',
    quoteSource: 'Paraphrased from Sister Outsider',
    explanationEn: 'Lorde reclaims the erotic from narrow sexualization and names it as a felt capacity for aliveness, creativity, and refusal.',
    explanationZh: '洛德将“情色”从狭隘的性化理解中夺回，视其为生命感、创造力与拒绝被压抑的内在力量。',
    reflectionQuestion: 'Where do you feel your own power in your body today?',
    relatedWorks: ['Sister Outsider', 'Uses of the Erotic: The Erotic as Power']
  },
  {
    id: '2026-07-01-simone-de-beauvoir',
    date: '2026-07-01',
    cardType: 'thinker',
    cardTitle: 'Simone de Beauvoir',
    cardTitleZh: '西蒙娜·德·波伏娃',
    thinkerId: 'simone-de-beauvoir',
    thinkerName: 'Simone de Beauvoir',
    thinkerNameZh: '西蒙娜·德·波伏娃',
    birthDeath: '1908-1986',
    concept: 'Becoming Woman',
    conceptZh: '成为女人',
    tags: ['gender', 'body', 'embodiment'],
    quote: 'Paraphrased idea: womanhood is made through history, relation, and social formation.',
    quoteSource: 'Paraphrased from The Second Sex',
    explanationEn: 'Beauvoir argues that gender is not a simple destiny but a social and existential process through which subjects are made.',
    explanationZh: '波伏娃指出，性别不是简单命运，而是在社会、历史与存在处境中被塑造出来的过程。',
    reflectionQuestion: 'Which habits taught you what womanhood should mean?',
    relatedWorks: ['The Second Sex', 'The Ethics of Ambiguity']
  },
  {
    id: '2026-07-02-bell-hooks',
    date: '2026-07-02',
    cardType: 'quote-reading',
    cardTitle: 'Reading the Oppositional Gaze',
    cardTitleZh: '阅读“对抗性凝视”',
    thinkerId: 'bell-hooks',
    thinkerName: 'bell hooks',
    thinkerNameZh: '贝尔·胡克斯',
    birthDeath: '1952-2021',
    concept: 'Oppositional Gaze',
    conceptZh: '对抗性凝视',
    tags: ['gender', 'care', 'intersectionality'],
    quote: 'Paraphrased idea: looking can become a site of resistance when spectators refuse imposed images.',
    quoteSource: 'Paraphrased from Black Looks',
    explanationEn: 'hooks describes how Black women spectators develop critical ways of seeing against racist and sexist visual regimes.',
    explanationZh: '胡克斯讨论黑人女性观众如何形成批判性的观看方式，以抵抗种族主义与性别主义的视觉制度。',
    reflectionQuestion: 'What image have you learned to look back at critically?',
    relatedWorks: ['Black Looks', 'Ain’t I a Woman']
  },
  {
    id: '2026-07-03-donna-haraway',
    date: '2026-07-03',
    cardType: 'keyword',
    cardTitle: 'Situated Knowledge',
    cardTitleZh: '情境知识',
    thinkerId: 'donna-haraway',
    thinkerName: 'Donna Haraway',
    thinkerNameZh: '唐娜·哈拉维',
    birthDeath: '1944-',
    concept: 'Situated Knowledge',
    conceptZh: '情境知识',
    tags: ['technology', 'posthumanism', 'situated knowledge'],
    quote: 'Paraphrased idea: all knowledge is located, embodied, partial, and accountable.',
    quoteSource: 'Paraphrased from Situated Knowledges',
    explanationEn: 'Haraway challenges the fantasy of a neutral view from nowhere and asks knowledge-makers to name their positions.',
    explanationZh: '哈拉维批判“无处之眼”的中立幻象，要求知识生产者承认自身位置与责任。',
    reflectionQuestion: 'What does your position let you see, and what might it obscure?',
    relatedWorks: ['Situated Knowledges', 'A Cyborg Manifesto']
  },
  {
    id: '2026-07-08-judith-butler',
    date: '2026-07-08',
    cardType: 'theory-debate',
    cardTitle: 'Is Gender an Essence or an Act?',
    cardTitleZh: '性别是本质，还是行动？',
    thinkerId: 'judith-butler',
    thinkerName: 'Judith Butler',
    thinkerNameZh: '朱迪斯·巴特勒',
    birthDeath: '1956-',
    concept: 'Gender Performativity',
    conceptZh: '性别表演性',
    tags: ['gender', 'queer theory', 'performativity'],
    quote: 'Paraphrased idea: gender is produced through repeated acts rather than expressed from an original essence.',
    quoteSource: 'Paraphrased from Gender Trouble',
    explanationEn: 'Butler argues that gender appears natural because repeated norms sediment into recognizable identity.',
    explanationZh: '巴特勒认为，性别之所以显得自然，是因为重复的规范沉积为可识别的身份形式。',
    reflectionQuestion: 'Which repeated gesture in your life feels less natural when you slow it down?',
    relatedWorks: ['Gender Trouble', 'Bodies That Matter']
  },
  {
    id: '2026-07-09-sara-ahmed',
    date: '2026-07-09',
    cardType: 'reflection-question',
    cardTitle: 'When Discomfort Becomes Knowledge',
    cardTitleZh: '当不适成为知识',
    thinkerId: 'sara-ahmed',
    thinkerName: 'Sara Ahmed',
    thinkerNameZh: '萨拉·艾哈迈德',
    birthDeath: '1969-',
    concept: 'Feminist Killjoy',
    conceptZh: '女性主义扫兴者',
    tags: ['affect', 'feminist killjoy', 'body'],
    quote: 'Paraphrased idea: refusing happiness scripts can reveal how power asks some people to stay agreeable.',
    quoteSource: 'Paraphrased from Living a Feminist Life',
    explanationEn: 'Ahmed turns the figure of the killjoy into a method for noticing how comfort can depend on silencing complaint.',
    explanationZh: '艾哈迈德将“扫兴者”转化为一种方法，用来识别舒适感如何依赖于压制投诉与异议。',
    reflectionQuestion: 'When has your discomfort carried important knowledge?',
    relatedWorks: ['Living a Feminist Life', 'The Promise of Happiness']
  },
  {
    id: '2026-07-10-lauren-berlant',
    date: '2026-07-10',
    cardType: 'concept',
    cardTitle: 'Cruel Optimism',
    cardTitleZh: '残酷乐观',
    thinkerId: 'lauren-berlant',
    thinkerName: 'Lauren Berlant',
    thinkerNameZh: '劳伦·贝兰特',
    birthDeath: '1957-2021',
    concept: 'Cruel Optimism',
    conceptZh: '残酷乐观',
    tags: ['affect', 'care', 'embodiment'],
    quote: 'Paraphrased idea: an attachment becomes cruel when what we desire also blocks our flourishing.',
    quoteSource: 'Paraphrased from Cruel Optimism',
    explanationEn: 'Berlant studies attachments that sustain people while also binding them to impossible or exhausting promises.',
    explanationZh: '贝兰特研究那些既支撑我们、又把我们绑在不可能承诺上的情感依附。',
    reflectionQuestion: 'What promise are you still attached to, even when it wears you down?',
    relatedWorks: ['Cruel Optimism', 'The Female Complaint']
  },
  {
    id: '2026-07-13-gayatri-spivak',
    date: '2026-07-13',
    thinkerId: 'gayatri-spivak',
    thinkerName: 'Gayatri Chakravorty Spivak',
    thinkerNameZh: '佳亚特里·斯皮瓦克',
    birthDeath: '1942-',
    concept: 'Subalternity',
    conceptZh: '底层性',
    tags: ['decolonial feminism', 'gender', 'labor'],
    quote: 'Paraphrased idea: representation can speak for others while also preventing them from being heard.',
    quoteSource: 'Paraphrased from Can the Subaltern Speak?',
    explanationEn: 'Spivak asks how colonial and elite systems structure who can appear as a speaking subject.',
    explanationZh: '斯皮瓦克追问殖民与精英制度如何决定谁能够作为“说话主体”出现。',
    reflectionQuestion: 'When you speak for justice, whose voice might still be missing?',
    relatedWorks: ['Can the Subaltern Speak?', 'A Critique of Postcolonial Reason']
  },
  {
    id: '2026-07-14-angela-davis',
    date: '2026-07-14',
    thinkerId: 'angela-davis',
    thinkerName: 'Angela Davis',
    thinkerNameZh: '安吉拉·戴维斯',
    birthDeath: '1944-',
    concept: 'Abolition Feminism',
    conceptZh: '废奴女性主义',
    tags: ['intersectionality', 'labor', 'care'],
    quote: 'Paraphrased idea: freedom requires building life-giving institutions beyond punishment.',
    quoteSource: 'Paraphrased from Are Prisons Obsolete?',
    explanationEn: 'Davis links feminist politics to prison abolition, racial justice, labor histories, and collective care.',
    explanationZh: '戴维斯将女性主义政治与监狱废除、种族正义、劳动史和集体照护联系起来。',
    reflectionQuestion: 'What would repair look like if punishment were not the center?',
    relatedWorks: ['Women, Race & Class', 'Are Prisons Obsolete?']
  },
  {
    id: '2026-07-15-gloria-anzaldua',
    date: '2026-07-15',
    thinkerId: 'gloria-anzaldua',
    thinkerName: 'Gloria Anzaldúa',
    thinkerNameZh: '格洛丽亚·安萨尔杜阿',
    birthDeath: '1942-2004',
    concept: 'Borderlands',
    conceptZh: '边境地带',
    tags: ['queer theory', 'decolonial feminism', 'embodiment'],
    quote: 'Paraphrased idea: borderlands are psychic, linguistic, sexual, and political spaces of crossing.',
    quoteSource: 'Paraphrased from Borderlands/La Frontera',
    explanationEn: 'Anzaldúa treats the border as a lived condition that produces pain, hybridity, creativity, and new consciousness.',
    explanationZh: '安萨尔杜阿把边境视为一种生活处境，它制造痛苦、混杂、创造力与新的意识形式。',
    reflectionQuestion: 'Which border do you carry inside your language or body?',
    relatedWorks: ['Borderlands/La Frontera', 'This Bridge Called My Back']
  },
  {
    id: '2026-07-16-helene-cixous',
    date: '2026-07-16',
    thinkerId: 'helene-cixous',
    thinkerName: 'Hélène Cixous',
    thinkerNameZh: '埃莱娜·西苏',
    birthDeath: '1937-',
    concept: 'Écriture Féminine',
    conceptZh: '女性书写',
    tags: ['body', 'psychoanalysis', 'embodiment'],
    quote: 'Paraphrased idea: writing can return the body to language and unsettle inherited forms.',
    quoteSource: 'Paraphrased from The Laugh of the Medusa',
    explanationEn: 'Cixous imagines writing as a practice that interrupts patriarchal language and lets embodied difference speak.',
    explanationZh: '西苏将写作想象为打断父权语言的实践，使身体化的差异得以发声。',
    reflectionQuestion: 'What would your body write if it did not need permission?',
    relatedWorks: ['The Laugh of the Medusa', 'Three Steps on the Ladder of Writing']
  },
  {
    id: '2026-07-17-luce-irigaray',
    date: '2026-07-17',
    thinkerId: 'luce-irigaray',
    thinkerName: 'Luce Irigaray',
    thinkerNameZh: '露西·伊利格瑞',
    birthDeath: '1930-',
    concept: 'Sexual Difference',
    conceptZh: '性差异',
    tags: ['psychoanalysis', 'body', 'gender'],
    quote: 'Paraphrased idea: Western thought often treats masculine subjectivity as the universal measure.',
    quoteSource: 'Paraphrased from This Sex Which Is Not One',
    explanationEn: 'Irigaray critiques philosophical and psychoanalytic systems that erase feminine difference by making man the norm.',
    explanationZh: '伊利格瑞批判哲学与精神分析体系把男性设为规范，从而抹去女性差异。',
    reflectionQuestion: 'Where do you notice the universal quietly wearing a masculine face?',
    relatedWorks: ['Speculum of the Other Woman', 'This Sex Which Is Not One']
  },
  {
    id: '2026-07-18-julia-kristeva',
    date: '2026-07-18',
    thinkerId: 'julia-kristeva',
    thinkerName: 'Julia Kristeva',
    thinkerNameZh: '朱莉娅·克里斯蒂娃',
    birthDeath: '1941-',
    concept: 'Abjection',
    conceptZh: '卑贱物',
    tags: ['psychoanalysis', 'body', 'affect'],
    quote: 'Paraphrased idea: the abject disturbs boundaries between self and other, clean and unclean.',
    quoteSource: 'Paraphrased from Powers of Horror',
    explanationEn: 'Kristeva analyzes abjection as the charged response to what identity must expel in order to feel coherent.',
    explanationZh: '克里斯蒂娃分析卑贱物如何引发强烈反应，因为身份必须排除某些东西才能显得完整。',
    reflectionQuestion: 'What boundary feels most fragile when you encounter disgust?',
    relatedWorks: ['Powers of Horror', 'Revolution in Poetic Language']
  },
  {
    id: '2026-07-19-kimberle-crenshaw',
    date: '2026-07-19',
    thinkerId: 'kimberle-crenshaw',
    thinkerName: 'Kimberlé Crenshaw',
    thinkerNameZh: '金伯莉·克伦肖',
    birthDeath: '1959-',
    concept: 'Intersectionality',
    conceptZh: '交叉性',
    tags: ['intersectionality', 'gender', 'labor'],
    quote: 'Paraphrased idea: single-axis frameworks can miss people harmed at the intersections of power.',
    quoteSource: 'Paraphrased from Demarginalizing the Intersection of Race and Sex',
    explanationEn: 'Crenshaw names how race and gender discrimination can overlap in ways law and policy often fail to recognize.',
    explanationZh: '克伦肖指出，种族与性别歧视会以重叠方式发生，而法律和政策常常无法识别这种处境。',
    reflectionQuestion: 'Which category is too small for the fullness of someone’s experience?',
    relatedWorks: ['Demarginalizing the Intersection of Race and Sex', 'Mapping the Margins']
  },
  {
    id: '2026-07-20-eve-sedgwick',
    date: '2026-07-20',
    thinkerId: 'eve-kosofsky-sedgwick',
    thinkerName: 'Eve Kosofsky Sedgwick',
    thinkerNameZh: '伊芙·科索夫斯基·塞奇威克',
    birthDeath: '1950-2009',
    concept: 'Reparative Reading',
    conceptZh: '修复式阅读',
    tags: ['queer theory', 'affect', 'body'],
    quote: 'Paraphrased idea: critique can also gather, nourish, and repair rather than only expose.',
    quoteSource: 'Paraphrased from Touching Feeling',
    explanationEn: 'Sedgwick contrasts paranoid habits of suspicion with reparative practices that seek sustenance and possibility.',
    explanationZh: '塞奇威克将偏执式怀疑与修复式阅读区分开来，后者寻找滋养、可能性与修复。',
    reflectionQuestion: 'What would change if your critique also tried to nourish?',
    relatedWorks: ['Touching Feeling', 'Epistemology of the Closet']
  },
  {
    id: '2026-07-21-adrienne-rich',
    date: '2026-07-21',
    thinkerId: 'adrienne-rich',
    thinkerName: 'Adrienne Rich',
    thinkerNameZh: '阿德里安娜·里奇',
    birthDeath: '1929-2012',
    concept: 'Compulsory Heterosexuality',
    conceptZh: '强制异性恋',
    tags: ['compulsory heterosexuality', 'queer theory', 'gender'],
    quote: 'Paraphrased idea: heterosexuality is maintained as an institution, not merely chosen as a preference.',
    quoteSource: 'Paraphrased from Compulsory Heterosexuality and Lesbian Existence',
    explanationEn: 'Rich examines how social, economic, and symbolic systems make heterosexuality appear natural and inevitable.',
    explanationZh: '里奇分析社会、经济与象征系统如何让异性恋显得自然且不可避免。',
    reflectionQuestion: 'Which desire has culture taught you to treat as obvious?',
    relatedWorks: ['Compulsory Heterosexuality and Lesbian Existence', 'On Lies, Secrets, and Silence']
  },
  {
    id: '2026-07-22-silvia-federici',
    date: '2026-07-22',
    thinkerId: 'silvia-federici',
    thinkerName: 'Silvia Federici',
    thinkerNameZh: '西尔维娅·费代里奇',
    birthDeath: '1942-',
    concept: 'Reproductive Labor',
    conceptZh: '再生产劳动',
    tags: ['reproductive labor', 'labor', 'care'],
    quote: 'Paraphrased idea: capitalism depends on care and housework even when it refuses to value them.',
    quoteSource: 'Paraphrased from Revolution at Point Zero',
    explanationEn: 'Federici shows how cooking, cleaning, childrearing, and care reproduce the labor force and sustain economic life.',
    explanationZh: '费代里奇指出，烹饪、清洁、育儿与照护再生产劳动力，也支撑经济生活，却常被贬值。',
    reflectionQuestion: 'What invisible labor made your day possible?',
    relatedWorks: ['Caliban and the Witch', 'Revolution at Point Zero']
  },
  {
    id: '2026-07-23-rosi-braidotti',
    date: '2026-07-23',
    thinkerId: 'rosi-braidotti',
    thinkerName: 'Rosi Braidotti',
    thinkerNameZh: '罗西·布拉伊多蒂',
    birthDeath: '1954-',
    concept: 'Nomadic Subjectivity',
    conceptZh: '游牧主体性',
    tags: ['posthumanism', 'embodiment', 'technology'],
    quote: 'Paraphrased idea: subjectivity is mobile, relational, embodied, and open to transformation.',
    quoteSource: 'Paraphrased from Nomadic Subjects',
    explanationEn: 'Braidotti’s nomadic subject resists fixed identity and thinks ethics through movement, relation, and becoming.',
    explanationZh: '布拉伊多蒂的游牧主体抵抗固定身份，通过移动、关系与生成来思考伦理。',
    reflectionQuestion: 'What part of you is becoming through relation rather than identity?',
    relatedWorks: ['Nomadic Subjects', 'The Posthuman']
  }
];
