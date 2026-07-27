export type DailyCard = {
  id: string;
  date: string;
  type: "thinker" | "writer" | "artist" | "photographer" | "concept" | "text" | "quote" | "debate" | "criticism" | "theory" | "performance" | "installation" | "sculpture" | "novel" | "book" | "essay";
  personId?: string;
  title: string;
  titleZh?: string;
  titleSeparator?: " " | "：";
  years?: string;
  role?: string;
  author?: string;
  creator?: string;
  creatorZh?: string;
  focusTitle?: string;
  focusTitleZh?: string;
  summaryEn?: string;
  summaryZh?: string;
  highlightEn?: string;
  highlightZh?: string;
  highlightNote?: string;
  focusSentenceEn?: string;
  focusSentenceZh?: string;
  introduction?: Array<{
    en?: string;
    zh?: string;
  }>;
  introEn?: string;
  introZh?: string;
  sections?: Array<{
    id?: string;
    title: string;
    titleZh?: string;
    chapterReference?: string;
    chapterReferenceZh?: string;
    paragraphs?: Array<{
      en?: string;
      zh?: string;
    }>;
    quoteEn?: string;
    quoteZh?: string;
    attribution?: string;
    closingEn?: string;
    closingZh?: string;
    closingNote?: string;
  }>;
  articleSections?: Array<{
    id?: string;
    title: string;
    titleZh?: string;
    en?: string;
    zh?: string;
  }>;
  location?: string;
  theoryFramework?: string;
  tags: string[];
  tagsZh?: string[];
  relatedWorks?: Array<string | {
    title: string;
    titleZh?: string;
    relationEn?: string;
    relationZh?: string;
  }>;
  sourceText?: string;
  quote?: string;
  quoteSource?: string;
  quoteReadingEn?: string;
  quoteReadingZh?: string;
  quotesTitle?: string;
  quotesTitleZh?: string;
  quotes?: Array<{
    en: string;
    zh?: string;
  }>;
  quoteSelections?: Array<{
    en: string;
    zh?: string;
    source?: string;
  }>;
  researchLens?: {
    title: string;
    titleZh?: string;
    citation?: string;
    summaryEn?: string;
    summaryZh?: string;
  };
  sourceNote?: string;
  sources?: Array<{
    label: string;
    url: string;
  }>;
  status?: "published" | "draft";
};

// Add one new daily card here each day.
//
// Copy this template, paste it into dailyCards, and fill in your card.
// Draft cards stay private until status is changed to "published".
//
// {
//   id: "2026-07-05-example-slug",
//   date: "2026-07-05",
//   type: "thinker",
//   personId: "optional-existing-person-id",
//   title: "Card title",
//   titleZh: "中文标题",
//   titleSeparator: "：",
//   years: "Optional years",
//   role: "Optional display role",
//   creator: "Optional author / artist / source creator",
//   creatorZh: "可选中文作者名",
//   focusTitle: "Short interpretive focus",
//   focusTitleZh: "中文焦点",
//   summaryEn: "One short English paragraph for the teaser and detail page.",
//   summaryZh: "一段简短中文说明。",
//   introEn: "Longer English introduction for the detail page.",
//   introZh: "详细介绍页使用的中文介绍。",
//   location: "Optional display location",
//   theoryFramework: "focus: 中文 / English\ninherit: 中文 / English",
//   tags: ["feminism", "theory"],
//   relatedWorks: ["Optional work title"],
//   sourceText: "Optional source note",
//   quote: "Optional short quote",
//   quoteSource: "Optional quote source",
//   quoteReadingEn: "Optional English quote reading.",
//   quoteReadingZh: "可选中文引文精读。",
//   researchLens: {
//     title: "Optional research lens title",
//     titleZh: "可选研究视角中文标题",
//     citation: "Optional citation note",
//     summaryEn: "Optional English research summary.",
//     summaryZh: "可选中文研究总结。"
//   },
//   status: "draft"
// }

export const dailyCards: DailyCard[] = [
  {
    id: "2026-07-01-mary-wollstonecraft",
    date: "2026-07-01",
    type: "thinker",
    personId: "wollstonecraft-1792",
    title: "Mary Wollstonecraft",
    titleZh: "玛丽·沃斯通克拉夫特",
    focusTitle: "Education Against Dependence",
    focusTitleZh: "反对依附的教育",
    summaryEn: "Mary Wollstonecraft argued that women were not naturally weak or frivolous. They were made so by an education that trained them to please, depend, and seek power indirectly.",
    summaryZh: "玛丽·沃斯通克拉夫特指出，女性并非天生软弱或轻浮。她们之所以如此，是因为社会教育她们取悦他人、依附他人，并只能以间接方式获得权力。",
    introEn: `Mary Wollstonecraft was an eighteenth-century writer and political thinker whose work joined the debates on revolution, rights, education, and human freedom. Before writing A Vindication of the Rights of Woman, she had already worked as a companion, teacher, governess, translator, reviewer, and author. These experiences mattered. She had seen women’s dependence not as an abstract philosophical problem, but as something lived through family violence, limited work, marriage laws, class hierarchy, and the narrow education offered to girls. The Norton introduction notes that women in her time had no political rights, were confined to a few low-status occupations, and became legally and economically dependent on husbands after marriage.

A Vindication of the Rights of Woman was published in 1792, partly as a response to the political contradictions of revolutionary France. Wollstonecraft addressed the work to Talleyrand, after the French National Assembly denied women the rights of citizens while celebrating universal rights. Her argument was simple but radical: if the “rights of man” could be defended by reason, then the rights of woman should not be excluded from the same test. To deny women civil and political rights, while still expecting them to be virtuous, was inconsistent and unjust.

What makes the book powerful is that Wollstonecraft does not merely ask men to be kinder to women. She attacks the whole system that manufactures feminine weakness. She argues that women are taught to value beauty over strength, charm over understanding, and dependence over judgment. In the book’s introduction, she writes that women are made “weak and wretched” by a false system of education, and that writers on female education have often treated women “rather as women than human creatures.”

For Wollstonecraft, education is therefore not decoration. It is liberation from dependency. A woman should not be trained as an alluring object, a perpetual child, or an obedient companion. She should be educated as a rational creature capable of virtue, friendship, work, and public responsibility. This is why her feminism begins with reason: not because feeling is unimportant, but because without cultivated judgment, women are forced to survive through pleasing, cunning, and indirect power.`,
    introZh: `玛丽·沃斯通克拉夫特是十八世纪的作家与政治思想家，她的写作参与了关于革命、权利、教育与人类自由的讨论。在写作《为女权辩护》之前，她做过陪伴女伴、教师、家庭教师、译者、书评人和作家。这些经历很重要。她并不是在抽象地谈论女性依附，而是从家庭暴力、有限职业、婚姻法律、阶级等级，以及女孩所接受的狭窄教育中，亲眼看见了女性如何被迫依赖他人。

《为女权辩护》出版于 1792 年，部分回应了法国革命政治中的矛盾。沃斯通克拉夫特把这本书题献给塔列朗，因为法国国民议会一边宣称普遍权利，一边却否认女性的公民权利。她的主张简单但激进：如果“人的权利”可以接受理性的讨论与辩护，那么“女性的权利”也不应被排除在同一套理性检验之外。一边剥夺女性的公民与政治权利，一边又期待她们有德性，这是不一致也不公正的。

这本书的力量在于，沃斯通克拉夫特并不只是要求男性“更善待女性”。她攻击的是一整套制造女性柔弱的制度。她指出，女性被教育得重视美貌胜过力量，重视魅力胜过理解力，重视依附胜过判断。在原文导言中，她写道，女性之所以变得“软弱而悲惨”，来自一种错误的教育体系；那些写女性教育的人，往往把女性看作“女人”，而不是“人”。

因此，对沃斯通克拉夫特来说，教育不是装饰，而是摆脱依附的方式。女性不应被训练成迷人的物品、永远长不大的孩子，或顺从的伴侣。她应当作为有理性的存在接受教育，能够拥有德性、友谊、工作能力与公共责任。这也是为什么她的女性主义从“理性”开始：并不是因为情感不重要，而是因为如果没有被培养出来的判断力，女性就只能靠取悦、算计和间接权力来生存。`,
    location: "London, England",
    theoryFramework: `focus: 女性教育、理性、依附、德性与公民权利。 / Women’s education, reason, dependence, virtue, and civil rights.
inherit: 沃斯通克拉夫特继承了启蒙与革命话语中关于理性、权利与人类完善的语言，但她坚持：所谓“普遍”权利不能把女性排除在外。 / Wollstonecraft inherits Enlightenment and revolutionary language about reason, rights, and human improvement, but insists that “universal” rights cannot exclude women.
critique: 她批判一种社会教育：它先把女性塑造成装饰性的、依附性的、孩子般的存在，然后又把这种被制造出来的软弱当作“女性天性”的证据。 / She critiques the social education that makes women ornamental, dependent, and childish, then treats that manufactured weakness as proof of female nature.
transform: 她把教育从婚姻市场上的才艺装饰，转化为关于自由、判断力与道德主体性的政治问题。 / She transforms education from a set of accomplishments for the marriage market into a political question about freedom, judgment, and moral agency.
propose: 她提出，女性应当被视为理性的人，而不是被奉承为柔弱的依附者；女性的尊严应建立在德性与理解力之上，而不是美貌或顺从之上。 / She proposes that women should be treated as rational human creatures, not flattered as delicate dependents; their dignity should rest on virtue and understanding, not beauty or obedience.`,
    quote: "My own sex, I hope, will excuse me, if I treat them like rational creatures, instead of flattering their fascinating graces.",
    quoteSource: "Mary Wollstonecraft, A Vindication of the Rights of Woman, Introduction",
    quoteReadingEn: `This sentence is a clear entrance into Wollstonecraft’s feminist project. She refuses the language of flattering women as beautiful, delicate, or charming. Such praise may sound kind, but for Wollstonecraft it keeps women in a state of dependence. To treat women seriously is not to idealize them. It is to address them as rational beings.

The line also shows why her tone can feel severe. She is not writing to comfort women with prettier versions of femininity. She is asking them to give up the small rewards of being pleasing in order to claim something harder and more durable: strength of mind, moral character, and respect.`,
    quoteReadingZh: `这句话非常清楚地进入了沃斯通克拉夫特的女性主义计划。她拒绝用“美丽、柔弱、迷人”这类语言奉承女性。这种赞美听起来温和，但在她看来，它使女性持续停留在依附状态。真正严肃地对待女性，并不是理想化女性，而是把女性当作有理性的人来对话。

这句话也解释了为什么她的语气有时显得严厉。她并不是为了用更漂亮的女性气质来安慰女性而写作。她要求女性放弃“讨人喜欢”所带来的小小奖赏，去争取更困难也更持久的东西：心智力量、道德人格与尊重。`,
    tags: ["education", "reason", "dependence", "virtue", "women’s rights", "citizenship", "false refinement"],
    relatedWorks: [
      "A Vindication of the Rights of Woman",
      "A Vindication of the Rights of Men",
      "Thoughts on the Education of Daughters",
      "Mary, a Fiction",
      "The Wrongs of Woman"
    ],
    sourceText: "A Vindication of the Rights of Woman, Introduction",
    status: "published"
  },
  {
    id: "2026-07-02-mary-shelley",
    date: "2026-07-02",
    type: "writer",
    title: "Mary Shelley",
    titleZh: "玛丽·雪莱",
    years: "1797–1851",
    role: "Writer｜作家",
    focusTitle: "The Mother of Science Fiction",
    focusTitleZh: "科幻小说之母",
    summaryEn: "Mary Shelley’s Frankenstein is not only a story of scientific creation. It is also a story about abandonment, social exclusion, and the violence that grows when a living being is denied care.",
    summaryZh: "玛丽·雪莱的《弗兰肯斯坦》并不只是关于科学创造的故事。它也是关于遗弃、社会排斥，以及一个生命在被拒绝照护后如何走向暴力的故事。",
    introEn: `Mary Shelley was a nineteenth-century English writer best known for Frankenstein; or, The Modern Prometheus, first published in 1818. In Outsiders: Five Women Writers Who Changed the World, Lyndall Gordon presents Shelley not simply as the young woman who had a sudden dream in the company of famous male poets, but as a prodigy whose imagination was shaped by loss, reading, rebellion, and social exile.

Gordon’s account is especially helpful because it moves beyond the familiar myth of the novel’s origin. Frankenstein is often remembered as the result of a ghost-story challenge near Lake Geneva, but Gordon reminds us that the deeper story begins earlier: with Mary’s family, her mother Mary Wollstonecraft’s absence, her father William Godwin’s intellectual world, her own exclusion from respectable society after eloping with Percy Shelley, and her observations of human cruelty during travel.

In this reading, Frankenstein is not just about a scientist who makes a monster. It is about a created being who is left without parents, affection, or social recognition. The creature becomes violent, but the novel asks whether that violence is innate, or whether it is produced by emotional deprivation, rejection, and discrimination. This question is one of Shelley’s most powerful inventions: she gives a human voice to the one everyone calls a monster.

This is why Mary Shelley can be called the mother of science fiction. She does not merely imagine a new scientific possibility; she asks what ethical and emotional responsibilities follow from creation. In her hands, speculative fiction becomes a way to think about life, care, abandonment, violence, and the cost of refusing responsibility for what one brings into the world.`,
    introZh: `玛丽·雪莱是十九世纪英国作家，以 1818 年首次出版的《弗兰肯斯坦；或现代普罗米修斯》闻名。在《破局者：改变世界的五位女作家》中，林德尔·戈登并没有把雪莱简单写成那个在著名男性诗人身边突然做梦、由梦获得灵感的年轻女性，而是把她呈现为一位“天才”：她的想象力由丧母、阅读、反叛与社会放逐共同塑造。

戈登的叙述特别有价值，因为它超越了《弗兰肯斯坦》诞生神话中最熟悉的版本。人们常把这部小说理解为日内瓦湖畔一次鬼故事挑战的产物，但戈登提醒我们，更深层的故事开始得更早：开始于玛丽的家庭，开始于母亲玛丽·沃斯通克拉夫特的缺席，开始于父亲威廉·戈德温的思想世界，也开始于她与珀西·雪莱私奔后被体面社会排斥的处境，以及她在旅途中对人类残酷的观察。

在这样的阅读中，《弗兰肯斯坦》并不只是关于一个科学家制造怪物的故事。它写的是一个被创造出来的生命，却没有父母、没有爱，也没有社会承认。造物后来走向暴力，但小说追问的是：这种暴力是天生的吗？还是由情感匮乏、拒绝与歧视诱发出来的？这是雪莱最有力量的创造之一：她把人的声音赋予了那个被所有人称作“怪物”的存在。

这也是为什么玛丽·雪莱可以被称为“科幻小说之母”。她并不只是想象一种新的科学可能性，而是追问：创造之后，随之而来的伦理与情感责任是什么？在她笔下，推想性小说成为一种思考生命、照护、遗弃、暴力，以及拒绝为自己带到世界上的生命负责所造成代价的方式。`,
    location: "London, England",
    researchLens: {
      title: "Creation Without Care: Birth, Science, and Abandonment",
      titleZh: "没有照护的创造：出生、科学与遗弃",
      citation: "Ellen Moers, “Female Gothic: The Monster’s Mother”; Anne K. Mellor, “Frankenstein: A Feminist Critique of Science”; Bette London, “Mary Shelley, Frankenstein, and the Spectacle of Masculinity.”",
      summaryEn: `Ellen Moers’s classic reading helps us see Frankenstein as a female Gothic birth myth. The novel is not only about a scientist who creates life; it is also about the fear, pain, and danger surrounding birth, motherhood, and the arrival of a vulnerable being into the world.

Anne Mellor’s feminist critique of science shifts the focus from creation itself to the conditions of creation. Victor Frankenstein does not simply discover knowledge; he tries to create life without women, without relationship, and without care. His failure is therefore not only scientific, but ethical and social.

Bette London’s reading of masculinity helps us see that the novel repeatedly displays the fragility of masculine authority. Victor wants the glory of creation, but not the vulnerability of dependence or responsibility. The creature becomes the visible sign of what this masculine fantasy refuses to acknowledge.

Together, these research lenses help us read the creature not simply as a monster, but as an abandoned life. Frankenstein asks what happens when creation is separated from care, and when a living being is brought into the world without recognition, kinship, or responsibility.`,
      summaryZh: `Ellen Moers 的经典解读帮助我们把《弗兰肯斯坦》读作一个女性哥特式的出生神话。小说并不只是关于一个科学家创造生命，也关于围绕出生、母职，以及一个脆弱生命来到世界时所产生的恐惧、痛苦与危险。

Anne Mellor 对科学的女性主义批评，把重点从“创造本身”转向“创造的条件”。Victor Frankenstein 并不只是发现知识；他试图在没有女性、没有关系、没有照护的情况下创造生命。因此，他的失败不只是科学上的，也是伦理与社会关系上的。

Bette London 关于男性气质的研究帮助我们看到，小说反复展示男性权威的脆弱性。Victor 想要创造的荣耀，却不愿承认依赖与责任中的脆弱。造物于是成为这个男性幻想所拒绝承认之物的可见标记。

这些研究视角合在一起，帮助我们把造物读作不只是怪物，而是一个被遗弃的生命。《弗兰肯斯坦》追问的是：当创造与照护被分离，当一个生命来到世界却没有承认、亲属关系与责任时，会发生什么？`
    },
    quote: "Remember, that I am thy creature: I ought to be thy Adam; but I am rather the fallen angel, whom thou drivest from joy for no misdeed.",
    quoteSource: "Mary Shelley, Frankenstein; or, The Modern Prometheus, Chapter 10",
    quoteReadingEn: `This sentence captures the novel’s central wound: the creature is not simply a monster, but an abandoned life speaking back to its creator. By saying “I ought to be thy Adam,” he imagines himself as a first being who should have been recognized, guided, and cared for. But he immediately turns the image into “the fallen angel,” a figure driven away from joy before he has been granted a place in the world.

The power of the line lies in its accusation. Victor Frankenstein wants the glory of creation, but not the burden of relation. The creature’s speech exposes this failure: creation without care is not progress, but abandonment. Shelley’s novel therefore turns the birth of artificial life into a moral question about responsibility.`,
    quoteReadingZh: `这句话抓住了小说最核心的伤口：造物并不只是一个怪物，而是一个被遗弃的生命在向创造者说话。当他说“我本该是你的亚当”时，他把自己想象成一个最初的生命，一个本应被承认、被引导、被照护的存在。但他立刻又把这个形象转向“堕落天使”——一个在尚未获得世界中的位置之前，就已经被驱逐出幸福的存在。

这句话的力量在于它的控诉。维克多·弗兰肯斯坦想要创造的荣耀，却不愿承担关系的负担。造物的发言揭示了这种失败：没有照护的创造并不是进步，而是遗弃。因此，雪莱把人工生命的诞生转化为一个关于责任的道德问题。`,
    relatedWorks: [
      "Frankenstein; or, The Modern Prometheus",
      "The Last Man",
      "Mathilda",
      "Ellen Moers, Female Gothic: The Monster’s Mother",
      "Anne K. Mellor, Frankenstein: A Feminist Critique of Science",
      "Bette London, Mary Shelley, Frankenstein, and the Spectacle of Masculinity"
    ],
    tags: ["science fiction", "creation", "abandonment", "monster", "care", "responsibility", "outsider", "female gothic"],
    sourceText: "Frankenstein; or, The Modern Prometheus, Chapter 10",
    status: "published"
  },
  {
    id: "2026-07-03-jane-eyre",
    date: "2026-07-03",
    type: "text",
    title: "Jane Eyre",
    titleZh: "简·爱",
    titleSeparator: " ",
    creator: "Charlotte Brontë",
    creatorZh: "夏洛蒂·勃朗特",
    focusTitle: "A Free Human Being",
    focusTitleZh: "一个自由的人",
    summaryEn: "Jane Eyre gives voice to a woman who is poor, plain, socially powerless, and yet refuses to be treated as an object without soul, feeling, or will.",
    summaryZh: "《简·爱》让一个贫穷、平凡、缺乏社会权力的女性发出声音：她拒绝被当作没有灵魂、没有情感、没有意志的物品。",
    introEn: `Charlotte Brontë’s Jane Eyre, first published in 1847, is one of the most powerful nineteenth-century novels about female selfhood. Jane begins life as an orphaned, unwanted child: dependent on relatives who despise her, later sent to Lowood, and then employed as a governess at Thornfield. She has little money, no family protection, no beauty privilege, and very limited social power. Yet the novel gives her something crucial: a first-person voice that insists on being heard.

The novel is often remembered through its love story, but its deeper force lies in Jane’s struggle to remain a person under conditions that repeatedly try to reduce her. In Chapter XII, before the central romance fully unfolds, Jane reflects that women are often expected to be calm, confined, and satisfied with domestic tasks. But she insists that “women feel just as men feel” and need exercise for their faculties and a field for their efforts. This is one of the novel’s clearest statements that women’s inner lives are not smaller than men’s.

By the time Jane speaks to Rochester in Chapter XXIII, her demand is no longer abstract. She refuses to be treated as a dependent object or emotional possession. When she says, “I am no bird; and no net ensnares me,” she rejects the image of the woman as something delicate, capturable, and ornamental. Her freedom is not based on wealth, beauty, or status. It comes from the insistence that she has an independent will.

This is why Jane Eyre remains so important for feminist reading. Jane does not only want love. She wants a form of love that does not require self-erasure. She wants to be loved without becoming less than herself. Later, in Chapter XXVII, when she tells herself “I care for myself,” the sentence becomes a severe and necessary form of self-respect: even when no one else protects her, she must not abandon herself.`,
    introZh: `夏洛蒂·勃朗特的《简·爱》首次出版于 1847 年，是十九世纪关于女性自我最有力量的小说之一。Jane 一开始是一个无依无靠、不被欢迎的孤女：她依附于厌恶她的亲戚，后来被送往 Lowood 学校，再成为 Thornfield 的家庭教师。她没有金钱，没有家庭保护，没有美貌特权，社会权力也极其有限。然而，小说给予她一样关键的东西：一个坚持被听见的第一人称声音。

这部小说常常被当作爱情故事来记忆，但它更深层的力量在于：Jane 在一次次试图缩小她的处境中，努力保持自己作为“人”的完整性。在第十二章，在核心爱情线真正展开之前，Jane 反思女性常被期待安静、受限，并满足于家务式的生活。但她坚持说，女性和男性一样有感受，也同样需要能力的施展与努力的空间。这是小说中最清晰的女性主义表达之一：女性的内在生命并不比男性狭小。

到了第二十三章，当 Jane 对 Rochester 说出那段著名的话时，她的要求已经不再是抽象的。她拒绝被当作依附的物品，或被当作他人的情感财产。当她说“我不是鸟，也没有网能捕住我”时，她拒绝的是那种把女性想象成脆弱的、可捕获的、装饰性的存在的目光。她的自由并不来自财富、美貌或地位，而来自她对自己拥有独立意志的坚持。

这也是为什么《简·爱》对女性主义阅读仍然如此重要。Jane 想要的不只是爱情。她想要的是一种不要求她抹除自我的爱。她想被爱，但不想在爱中变得比自己更小。后来在第二十七章，当她对自己说“我关心我自己”时，这句话成为一种严厉却必要的自尊：即使没有别人保护她，她也不能遗弃自己。`,
    quote: "I am no bird; and no net ensnares me; I am a free human being with an independent will.",
    quoteSource: "Charlotte Brontë, Jane Eyre, Chapter XXIII",
    quoteReadingEn: `This line is one of the novel’s clearest declarations of female selfhood. Jane refuses Rochester’s image of her as a desperate, trapped bird. By saying she is “no bird,” she rejects the fantasy that women exist to be captured, kept, admired, or possessed. She names herself instead as “a free human being.”

The force of the sentence lies in its moral clarity. Jane is poor, plain, and socially unequal to Rochester, but she refuses to let those facts define the value of her soul. Her freedom is not a social privilege; it is an inward claim. She has an independent will, and she insists on using it.`,
    quoteReadingZh: `这句话是小说中最清晰的女性自我宣言之一。Jane 拒绝 Rochester 把她想象成一只绝望、受困的鸟。当她说“我不是鸟”时，她拒绝了那种认为女性可以被捕获、被圈养、被欣赏、被占有的幻想。她把自己命名为“一个自由的人”。

这句话的力量在于它的道德清晰。Jane 贫穷、平凡，在社会地位上也不如 Rochester，但她拒绝让这些事实决定自己灵魂的价值。她的自由不是一种社会特权，而是一种内在主张。她拥有独立意志，并坚持使用它。`,
    tags: ["voice", "dignity", "will", "self-respect", "feminist fiction", "independence", "governess"],
    relatedWorks: [
      "Jane Eyre",
      "Villette",
      "Shirley"
    ],
    sourceText: "Jane Eyre, Chapter XXIII",
    status: "published"
  },
  {
    id: "2026-07-04-wuthering-heights",
    date: "2026-07-04",
    type: "text",
    title: "Wuthering Heights",
    titleZh: "《呼啸山庄》",
    years: "1818–1848",
    role: "Text｜文本",
    creator: "Emily Brontë",
    creatorZh: "艾米莉·勃朗特",
    focusTitle: "Wildness, Love, and the Unsettled Self",
    focusTitleZh: "荒原、爱与不安的自我",
    summaryEn: "Wuthering Heights is more than a tragic romance. It is a novel about wild feeling, social constraint, and a woman’s divided sense of self within family, class, and marriage.",
    summaryZh: "《呼啸山庄》不只是悲剧爱情。它也是一部关于强烈情感、社会约束，以及女性在家庭、阶级与婚姻中如何感到自我分裂的小说。",
    introEn: `Emily Brontë’s Wuthering Heights was first published in 1847 and remains her only novel. It is often remembered as an intense love story between Catherine Earnshaw and Heathcliff, but its emotional world is much wider than romance. The novel is shaped by landscape, childhood intimacy, class difference, family pressure, inheritance, and the difficulty of finding a livable place for unruly feeling.

Gilbert and Gubar’s feminist reading of Wuthering Heights helps us notice how the novel questions the forms of femininity made available to women. Catherine is not easily contained by the ideal of the calm, obedient, domestic woman. Her attachment to the moors, to childhood freedom, and to Heathcliff suggests a self that does not fit comfortably into the polite order of marriage, property, and social respectability.

This does not mean that Heathcliff should be romanticized, or that cruelty and revenge should be treated as proof of love. A gentler feminist reading can hold both truths together: Catherine’s longing expresses a desire for a wider, wilder self, while the world of the novel also shows how love can become entangled with injury, possession, and social exclusion.

In this sense, Wuthering Heights can be read as a novel about the difficulty of living as a divided self. Catherine is drawn toward social security and respectability, but she also remembers another part of herself that belongs to the moors, to childhood intensity, and to a form of attachment that cannot be easily translated into marriage. The novel does not offer a simple model of liberation. Instead, it lets us feel the cost of a world where women’s inner wildness has no safe language.`,
    introZh: `艾米莉·勃朗特的《呼啸山庄》首次出版于 1847 年，也是她唯一的小说。它常常被记忆为 Catherine Earnshaw 与 Heathcliff 之间强烈的爱情故事，但它的情感世界远不止爱情。小说由荒原风景、童年亲密、阶级差异、家庭压力、继承制度，以及难以安放的强烈情感共同塑造。

Gilbert 与 Gubar 对《呼啸山庄》的女性主义阅读，帮助我们注意到这部小说如何质疑社会提供给女性的那些固定女性气质。Catherine 很难被安放进“安静、顺从、家庭化”的女性理想之中。她对荒原、童年自由以及 Heathcliff 的依恋，暗示着一种无法完全适应婚姻、财产与社会体面秩序的自我。

这并不意味着我们应该浪漫化 Heathcliff，也不意味着残酷与复仇可以被当作爱情的证明。更温和的女性主义阅读可以同时保留两点：Catherine 的渴望表达了一种对更宽阔、更狂野自我的向往，而小说世界也展示了爱如何与伤害、占有和社会排斥纠缠在一起。

从这个意义上说，《呼啸山庄》可以被读作一部关于“分裂自我如何生活”的小说。Catherine 被社会安全与体面吸引，但她也记得自己的另一部分：那一部分属于荒原、童年的强烈情感，以及一种无法轻易被翻译成婚姻的依恋。小说并没有提供一个简单的解放模式。它让我们感受到：当女性内在的狂野没有安全语言时，会付出怎样的代价。`,
    researchLens: {
      title: "Feminist Wildness and the Divided Self",
      titleZh: "女性主义荒原与分裂自我",
      citation: "Sandra M. Gilbert and Susan Gubar, “Looking Oppositely: Emily Brontë’s Bible of Hell,” in The Madwoman in the Attic; Patsy Stoneman, “Feminist criticism of Wuthering Heights.”",
      summaryEn: `Gilbert and Gubar’s reading helps us approach Wuthering Heights not simply as a love story, but as a feminist rewriting of domestic femininity, family order, and literary inheritance. Their chapter “Looking Oppositely: Emily Brontë’s Bible of Hell” reads Brontë’s novel as a work that turns toward wildness, rebellion, and anti-domestic energy in order to expose the limits of respectable social order.

Through this lens, Catherine Earnshaw is not only a romantic heroine divided between Heathcliff and Edgar. She becomes a figure of unsettled selfhood. Her attachment to the moors, to childhood freedom, and to Heathcliff suggests a part of herself that cannot be fully translated into marriage, property, or polite femininity.

Patsy Stoneman’s work on feminist criticism of Wuthering Heights also reminds us that feminist readings of the novel should be careful and layered. Catherine’s longing can be read as a challenge to domesticated womanhood, but the novel should not be reduced to a simple celebration of passion. Love in Wuthering Heights is entangled with injury, class pressure, possession, and social exclusion.

Together, these research perspectives help us read Wuthering Heights as a novel about the difficulty of living with a self that exceeds the roles available to it. Catherine’s wildness is not a simple form of freedom; it is a feeling for which her world offers no safe language, no stable home, and no livable form.`,
      summaryZh: `Gilbert 与 Gubar 的解读帮助我们把《呼啸山庄》读作不只是爱情故事，而是对家庭化女性气质、家庭秩序与文学传统的一种女性主义重写。她们在《反向凝视：艾米莉·勃朗特的地狱圣经》一章中，把这部小说理解为一种转向荒原、反叛与反家庭化能量的写作，用来揭示体面社会秩序的限制。

通过这一视角，Catherine Earnshaw 不只是一个在 Heathcliff 与 Edgar 之间摇摆的爱情女主角。她成为一种不安自我的形象。她对荒原、童年自由与 Heathcliff 的依恋，暗示着她身上有一部分无法被完全翻译成婚姻、财产或体面女性气质。

Patsy Stoneman 关于《呼啸山庄》女性主义批评的研究也提醒我们，对这部小说的女性主义阅读应当保持细致与多层次。Catherine 的渴望可以被读作对家庭化女性身份的挑战，但这部小说不能被简化成对激情的单纯赞美。《呼啸山庄》中的爱始终与伤害、阶级压力、占有和社会排斥纠缠在一起。

这些研究视角合在一起，帮助我们把《呼啸山庄》读作一部关于“如何与一个大于既有角色的自我共同生活”的小说。Catherine 的狂野并不是一种简单的自由；它是一种在她的世界里没有安全语言、没有稳定住所、也没有可生活形式的感受。`
    },
    quote: "Whatever our souls are made of, his and mine are the same.",
    quoteSource: "Emily Brontë, Wuthering Heights",
    quoteReadingEn: `This sentence is often quoted as a romantic declaration, but it can also be read as a statement of self-recognition. Catherine does not simply say that she loves Heathcliff. She says that their souls are made of the same substance. The language of love becomes a language of likeness, memory, and identity.

A feminist reading makes this line especially complex. Heathcliff is not only a beloved figure; he is also connected to Catherine’s memory of a self before social expectation fully takes hold. Through him, she names a part of herself that cannot be made polite, domestic, or easily acceptable.

The tragedy is that this recognition does not become freedom. It becomes confusion, loss, and harm, because the world of the novel offers Catherine few ways to live with such intensity. The sentence is therefore not only about love; it is also about the pain of having a self too large for the roles available to it.`,
    quoteReadingZh: `这句话常常被当作浪漫爱情宣言来引用，但它也可以被读作一种自我认同的表达。Catherine 并不只是说她爱 Heathcliff。她说他们的灵魂由同一种材料构成。爱的语言在这里变成了相似、记忆与身份的语言。

女性主义阅读会让这句话变得更加复杂。Heathcliff 不只是被爱的人；他也连接着 Catherine 对另一个自我的记忆：那是一个尚未完全被社会期待塑造之前的自我。通过 Heathcliff，她说出了自己身上无法被变得礼貌、家庭化或轻易被社会接受的部分。

悲剧在于，这种自我认同并没有转化为自由。它变成了混乱、失去与伤害，因为小说中的世界几乎没有给 Catherine 提供可以安放这种强烈情感的方式。因此，这句话不只是关于爱，也关于一种痛苦：一个自我太大，而可供它生活的角色太小。`,
    tags: ["gothic", "desire", "class", "wildness", "selfhood", "Catherine Earnshaw", "feminist reading"],
    relatedWorks: [
      "Wuthering Heights",
      "Sandra M. Gilbert and Susan Gubar, Looking Oppositely: Emily Brontë’s Bible of Hell",
      "The Madwoman in the Attic",
      "Patsy Stoneman, Feminist criticism of Wuthering Heights"
    ],
    sourceText: "Wuthering Heights",
    status: "published"
  },
  {
    id: "2026-07-05-jane-austen",
    date: "2026-07-05",
    type: "writer",
    title: "Jane Austen",
    titleZh: "简·奥斯汀",
    years: "1775–1817",
    focusTitle: "Desire in the Material World",
    focusTitleZh: "物质世界中的欲望",
    summaryEn: "Jane Austen rarely makes sex visible, but desire is everywhere in her novels: in houses, incomes, gifts, letters, clothes, reputations, and the fragile material conditions under which women choose.",
    summaryZh: "简·奥斯汀很少直接呈现性，但欲望并没有消失。它存在于房屋、收入、礼物、信件、衣服、名誉，以及女性作出选择时脆弱的物质条件之中。",
    introEn: `Jane Austen’s fiction is often remembered for courtship, irony, and moral judgment, but it is also deeply attentive to material culture. Pride and Prejudice, first published in January 1813, follows Elizabeth Bennet through a world where love is never separate from property, inheritance, reputation, family pressure, and the question of where a woman can safely live.

Austen’s novels do not usually make sex explicit. But this does not mean that desire is absent. Instead, desire is displaced into the material world: houses, rooms, incomes, carriages, letters, clothes, pianos, gifts, meals, and estates. These things place characters socially, reveal taste, expose dependence, and shape what choices are available to women.

This is why Austen’s restraint matters. If sex is not shown directly, the social conditions around desire become more visible. A woman’s choice is never purely romantic or psychological. It is shaped by whether she has money, whether she can refuse a proposal, whether she can travel, whether her family can protect her, and whether marriage is affection, security, or survival.

In this reading, Austen’s quietness is not weakness. Her novels make visible the material life of choice. They ask how a woman can judge clearly in a world where even love passes through property, objects, manners, and money.`,
    introZh: `简·奥斯汀的小说常常被记作求爱、讽刺与道德判断的小说，但它们也非常关注物质文化。《傲慢与偏见》首次出版于 1813 年 1 月，讲述 Elizabeth Bennet 如何在一个爱情从不脱离财产、继承、名誉、家庭压力，以及女性能否安全生活的问题的世界中周旋。

奥斯汀的小说通常不直接呈现性。但这并不意味着欲望缺席。相反，欲望被转移到物质世界中：房屋、房间、收入、马车、信件、衣服、钢琴、礼物、餐食与庄园。这些物品标记人物的社会位置，暴露品味与依附，也塑造女性能够作出哪些选择。

这就是为什么奥斯汀的克制很重要。如果性没有被直接展示，欲望周围的社会条件反而变得更加可见。女性的选择从来不是纯粹浪漫或纯粹心理的。它受到许多条件塑造：她是否有钱，是否能拒绝求婚，是否能旅行，家庭是否能保护她，以及婚姻究竟是爱情、安全感，还是生存方式。

在这样的阅读中，奥斯汀的安静并不是软弱。她的小说让“选择的物质生活”变得可见。它们追问的是：在一个连爱情都必须穿过财产、物品、礼仪与金钱的世界里，女性如何保持清醒的判断？`,
    location: "Hampshire, England",
    researchLens: {
      title: "Sexual Silence and Material Culture in Jane Austen",
      titleZh: "简·奥斯汀小说中的性沉默与物质文化",
      citation: "Susan Morgan, “Why There’s No Sex in Jane Austen’s Fiction”; Sandie Byrne, Jane Austen’s Possessions and Dispossessions; Emma Peace, “Of Things in Austen”",
      summaryEn: `Susan Morgan’s argument helps us read Austen’s sexual silence not as emptiness, but as a literary strategy. Austen refuses to let women’s lives be organized only through seduction, exposure, scandal, or sexual punishment. Instead, she moves the drama into judgment, conversation, reputation, consent, and the economics of marriage.

Sandie Byrne’s work helps us see Austen as a writer of objects. In Austen’s novels, who owns, buys, gives, notices, or lacks objects matters. Objects are not decorative background; they help place characters socially and symbolically.

Emma Peace pushes this further by asking what happens if we privilege objects over subjects in Austen’s fiction. Her essay argues that objects in Austen do not simply sit quietly in the background; they help script and choreograph the worlds they furnish.`,
      summaryZh: `Susan Morgan 的观点帮助我们把奥斯汀小说中的“性沉默”读作一种文学策略，而不是空白。奥斯汀拒绝让女性生命只通过诱惑、暴露、丑闻或性惩罚来组织。相反，她把戏剧性转移到判断力、谈话、名誉、同意与婚姻经济之中。

Sandie Byrne 的研究帮助我们把奥斯汀看作一位书写“物”的作家。在奥斯汀小说中，谁拥有物品，谁购买物品，谁赠送物品，谁注意到物品，谁缺少物品，都很重要。物品不是装饰性背景，而是在社会与象征层面放置人物。

Emma Peace 则进一步追问：如果我们在奥斯汀小说中把物放到人之前，会发生什么？她的文章指出，奥斯汀小说中的物品并不是安静地待在背景里，而是在编写、安排、调度它们所在的世界。`
    },
    quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    quoteSource: "Jane Austen, Pride and Prejudice, Chapter 1",
    quoteReadingEn: `This opening sentence is one of Austen’s most famous acts of irony. On the surface, it sounds like a universal truth about men and marriage. But the sentence immediately reveals the material structure behind courtship: fortune comes first, wife comes second. Desire enters the novel already attached to income, property, and social expectation.

Seen through the research lens of sexual silence and material culture, the sentence becomes even sharper. Austen does not need to show sex directly in order to write about desire. She shows the world that organizes desire: who has fortune, who needs security, who is expected to marry, and who must learn to judge under pressure.`,
    quoteReadingZh: `这句开篇是奥斯汀最著名的讽刺之一。表面上，它像是在陈述一个关于男性与婚姻的普遍真理。但这句话立刻揭示出求爱背后的物质结构：财富先出现，妻子随后出现。欲望一进入小说，就已经和收入、财产与社会期待绑定在一起。

如果通过“性沉默”与“物质文化”的研究视角来看，这句话会变得更尖锐。奥斯汀并不需要直接描写性，才能书写欲望。她书写的是组织欲望的世界：谁拥有财富，谁需要安全，谁被期待结婚，谁必须在压力之下学会判断。`,
    tags: ["material culture", "desire", "marriage", "objects", "judgment", "sexual silence", "property"],
    relatedWorks: [
      "Pride and Prejudice",
      "Sense and Sensibility",
      "Emma",
      "Persuasion",
      "Susan Morgan, Why There’s No Sex in Jane Austen’s Fiction",
      "Sandie Byrne, Jane Austen’s Possessions and Dispossessions",
      "Emma Peace, Of Things in Austen"
    ],
    sourceText: "Pride and Prejudice, Chapter 1",
    status: "published"
  },
  {
    id: "2026-07-06-the-madwoman-in-the-attic",
    date: "2026-07-06",
    type: "criticism",
    title: "The Madwoman in the Attic",
    titleZh: "阁楼上的疯女人",
    creator: "Sandra M. Gilbert & Susan Gubar",
    focusTitle: "Angel, Monster, and the Woman Writer",
    focusTitleZh: "天使、怪物与女性写作者",
    summaryEn: "Gilbert and Gubar argue that patriarchal literary history often traps women between two images: the angelic, obedient woman and the monstrous, rebellious woman.",
    summaryZh: "Gilbert 与 Gubar 指出，父权文学传统常常把女性困在两种形象之间：顺从、纯洁的“天使”，以及危险、反叛的“怪物”。",
    introEn: `Sandra M. Gilbert and Susan Gubar’s The Madwoman in the Attic is one of the landmark works of feminist literary criticism. Its full title, The Madwoman in the Attic: The Woman Writer and the Nineteenth-Century Literary Imagination, already shows its central concern: how nineteenth-century women writers wrote inside a literary tradition largely shaped by male authors, male authority, and male images of women. In the book’s opening chapter, Gilbert and Gubar examine the connection between literary creativity, male authorship, and what they call the metaphor of literary paternity. Writing has often been imagined as a masculine act of creation, while women appear inside literature as figures produced by male imagination.

The book’s famous argument is that patriarchal literature repeatedly divides women into two opposing images. On one side is the angel: pure, selfless, obedient, silent, and devoted to others. On the other side is the monster: angry, excessive, rebellious, sexual, mad, or destructive. These images seem opposite, but they work together. Both prevent women from appearing as complex human beings. A woman is either idealized into purity or demonized when she resists.

This framework is especially important for reading Jane Eyre. Gilbert and Gubar’s title itself points to Bertha Mason, Rochester’s wife, locked in the attic. Bertha becomes the “madwoman” who carries the rage, confinement, and violence that polite Victorian femininity cannot openly express. In a feminist reading, Bertha is not simply a Gothic obstacle to Jane’s romance. She can be read as Jane’s dark double: the figure who reveals what happens to female anger when it is imprisoned, racialized, pathologized, and pushed out of the heroine’s respectable self-image.`,
    introZh: `Sandra M. Gilbert 与 Susan Gubar 的《阁楼上的疯女人》是女性主义文学批评的经典作品之一。它的完整标题是 The Madwoman in the Attic: The Woman Writer and the Nineteenth-Century Literary Imagination，也就是《阁楼上的疯女人：女性写作者与十九世纪文学想象》。这个标题已经揭示了它的核心问题：十九世纪女性作家如何在一个主要由男性作者、男性权威与男性女性形象所塑造的文学传统中写作。书的开篇章节讨论了文学创造、男性作者身份与“文学父权”隐喻之间的关系：写作常常被想象成一种男性创造行为，而女性则在文学中作为男性想象制造出来的形象出现。

这本书最著名的观点是：父权文学反复把女性分裂成两种对立形象。一边是“天使”：纯洁、无私、顺从、沉默，为他人而活；另一边是“怪物”：愤怒、过度、反叛、具有性欲、疯狂或具有破坏性。这两种形象看似相反，却共同运作。它们都阻止女性作为复杂的人出现。女性要么被理想化为纯洁的圣母/天使，要么在她反抗时被妖魔化为疯女人/怪物。

这个框架对于重读《简·爱》尤其重要。Gilbert 与 Gubar 的书名本身就指向 Bertha Mason——Rochester 被关在阁楼里的妻子。Bertha 成为那个“疯女人”，承载着体面的维多利亚女性气质无法公开表达的愤怒、囚禁与暴力。从女性主义阅读来看，Bertha 并不只是阻碍 Jane 爱情的哥特障碍。她也可以被读作 Jane 的黑暗替身：她揭示了当女性愤怒被囚禁、被种族化、被病理化，并被排除在女主人公体面自我之外时，会发生什么。`,
    quote: "Before we women can write, women writers must confront the male-made images of angel and monster.",
    quoteSource: "Condensed reading from Gilbert and Gubar, The Madwoman in the Attic",
    quoteReadingEn: `This is not a long direct quotation, but a condensed reading of the book’s argument. In the PDF, Gilbert and Gubar discuss how women writers encounter the mythic images that male artists have imposed on them: the angelic ideal and the monstrous opposite. Their point is not simply that male writers describe women unfairly. It is that these images shape the conditions under which women write, imagine themselves, and are read.

The “angel” is dangerous because she looks beautiful and virtuous. She teaches women to disappear into service, silence, purity, and self-sacrifice. The “monster” is dangerous in another way: she turns female anger, desire, ambition, and refusal into signs of madness or evil. Together, these two images leave little room for an ordinary, thinking, desiring woman.

For Jane Eyre, this creates a sharp feminist problem. Jane is allowed to become the speaking heroine, but Bertha is locked away as the madwoman. The novel gives Jane voice, dignity, and moral selfhood, yet it also displaces a more violent female rage onto Bertha. Gilbert and Gubar help us see that feminist reading does not simply celebrate Jane’s freedom; it must also ask who has to be silenced, racialized, or imprisoned for that freedom to appear respectable.`,
    quoteReadingZh: `这不是一段长引文，而是对书中论点的压缩性表述。Gilbert 与 Gubar 讨论女性作家如何遭遇男性艺术家强加给她们的神话形象：天使化的理想女性，以及与之相对的怪物化女性。她们的重点并不只是说男性作家“不公平地描写女性”。更重要的是，这些形象塑造了女性写作、想象自身、以及被读者理解的条件。

“天使”之所以危险，是因为她看起来美丽而高尚。她教导女性消失在服务、沉默、纯洁与自我牺牲之中。“怪物”则以另一种方式危险：她把女性的愤怒、欲望、野心与拒绝变成疯狂或邪恶的标志。这两种形象合在一起，使普通的、会思考的、有欲望的女性几乎没有容身之处。

对于《简·爱》来说，这构成了一个尖锐的女性主义问题。Jane 被允许成为能够说话的女主人公，但 Bertha 却被关在阁楼里，成为疯女人。小说给予 Jane 声音、尊严与道德主体性，却也把更暴烈的女性愤怒转移到了 Bertha 身上。Gilbert 与 Gubar 帮助我们看到：女性主义阅读不能只是庆祝 Jane 的自由，也必须追问——为了让这种自由显得体面，谁被沉默、被种族化、被囚禁了？`,
    tags: ["literary criticism", "angel", "monster", "madwoman", "Jane Eyre", "Bertha Mason", "feminist reading"],
    relatedWorks: [
      "The Madwoman in the Attic",
      "Charlotte Brontë, Jane Eyre",
      "Virginia Woolf, A Room of One’s Own"
    ],
    sourceText: "The Madwoman in the Attic",
    status: "published"
  },
  {
    id: "2026-07-07-qiu-jin",
    date: "2026-07-07",
    type: "writer",
    title: "Qiu Jin",
    titleZh: "秋瑾",
    years: "1875–1907",
    role: "Writer｜作家 / Revolutionary｜革命者",
    location: "Shaoxing, Zhejiang｜浙江绍兴",
    focusTitle: "A Woman Who Refused the Dark",
    focusTitleZh: "拒绝黑暗的女子",
    summaryEn: "Qiu Jin wrote as a poet, feminist, and revolutionary. Her work turns women’s awakening into a public language of freedom, education, courage, and collective self-rescue.",
    summaryZh: "秋瑾既是诗人、女性主义者，也是革命者。她的写作把女性觉醒转化为一种公共语言：关于自由、教育、勇气，也关于女性彼此唤醒、共同自救。",
    introEn: `Qiu Jin was a late Qing poet, feminist, and revolutionary. She is often remembered as “Jianhu Nüxia,” the Woman Knight of Mirror Lake, a name that already shows how she imagined herself outside the narrow roles assigned to women. Sources differ slightly in how they present her biographical details, but the main outline is clear: she grew up in eastern China, wrote poetry, encountered new ideas of freedom and equality, studied in Japan, joined anti-Qing revolutionary circles, and was executed in 1907 after the failure of a revolutionary uprising.

What makes Qiu Jin important for a feminist calendar is not only that she died for revolution, but that she turned women’s liberation into an urgent public question. In the preface to China Women’s Journal / Zhongguo nübao, founded in Shanghai in January 1907, she writes of “darkness” and “danger,” asking women to awaken from a world where danger is not even recognized as danger. This is a powerful feminist image: oppression is not only suffering, but also the condition of being taught not to see one’s own suffering clearly.

Her writing moves between poetry, journalism, and revolutionary speech. In Manjianghong, she writes, “身不得，男儿列，心却比，男儿烈” — her body is not counted among men, but her heart is fiercer than theirs. This line should not be read simply as “wanting to become a man.” It is a refusal of the social rule that courage, public action, and historical responsibility belong only to men.

Qiu Jin’s feminism is therefore not quiet self-improvement alone. It is awakening, education, and collective address. She speaks not only as an individual woman seeking freedom, but as someone calling other women to see the darkness around them and to become subjects of history. Her writing asks: if women have been told to stay silent, who will light the lamp? If women have been kept in the dark, who will call them sisters and ask them to rise?`,
    introZh: `秋瑾是晚清诗人、女性主义者与革命者。她常被记作“鉴湖女侠”——这个名字本身就显示出，她如何把自己想象在传统女性角色之外。不同资料对她生平细节的呈现略有差异，但基本线索是清楚的：她成长于中国东部，能诗文，接触自由与平等的新思想，曾赴日本留学，加入反清革命团体，并在 1907 年起义失败后被处决。

对于女性主义日历来说，秋瑾的重要性不只在于她为革命牺牲，也在于她把女性解放变成了一个紧迫的公共问题。在 1907 年 1 月创刊于上海的《中国女报》发刊词中，她反复写到“黑暗”与“危险”，呼唤女性从一种连危险都无法识别为危险的处境中醒来。这是一个极有力量的女性主义意象：压迫不只是痛苦本身，也包括被教育得无法清楚看见自己的痛苦。

她的写作在诗词、报刊文字与革命言说之间移动。在《满江红》中，她写下“身不得，男儿列，心却比，男儿烈”。这句话不应被简单理解为“想成为男性”。它拒绝的是一种社会规则：仿佛勇气、公共行动与历史责任只属于男性。秋瑾把这些被男性垄断的品质重新夺回，放进女性身体与女性声音之中。

因此，秋瑾的女性主义并不只是安静的自我完善。它是觉醒、教育与集体呼唤。她说话时，不只是一个寻求自由的女性个体，也是在呼唤其他女性看见周围的黑暗，并成为历史的主体。她的写作追问的是：如果女性一直被要求沉默，谁来点灯？如果女性一直被困在黑暗里，谁来称她们为姐妹，并请她们站起来？`,
    researchLens: {
      title: "Women’s Awakening in Qiu Jin’s Own Writings",
      titleZh: "秋瑾原文中的女性觉醒",
      citation: "Qiu Jin, “Zhongguo Nübao Fa Kan Ci”; Qiu Jin, “Manjianghong”; Qiu Jin, Jingwei Shi.",
      summaryEn: `Qiu Jin’s own writings are the main research lens for this page. In China Women’s Journal, she turns women’s awakening into a public and collective task. In Manjianghong, she refuses the idea that courage, public action, and historical responsibility belong only to men.

Her writing moves between poetry, journalism, and revolutionary speech. Through these forms, Qiu Jin speaks not only for herself, but outward toward other women, asking them to recognize danger, name the darkness, and become subjects of history.`,
      summaryZh: `秋瑾自己的写作是这一页最重要的研究视角。在《中国女报》中，她把女性觉醒变成公共的、集体的任务。在《满江红》中，她拒绝勇气、公共行动与历史责任只属于男性的观念。

她的写作在诗词、报刊文字与革命言说之间移动。通过这些形式，秋瑾不仅为自己发声，也朝向其他女性发声，呼唤她们识别危险、命名黑暗，并成为历史的主体。`
    },
    quote: "身不得，男儿列，心却比，男儿烈！",
    quoteSource: "秋瑾，《满江红》",
    quoteReadingEn: `This line is one of Qiu Jin’s most famous declarations of gendered selfhood. It begins from a social fact: her body is not placed among men. In late Qing society, this meant exclusion from many forms of public action, education, mobility, and political recognition. But the second half of the line overturns that exclusion. Her heart, courage, and will are not smaller than men’s.

The line is powerful because it does not politely ask for permission. It refuses the measure by which society decides who may become heroic. Qiu Jin does not simply imitate masculine heroism; she exposes how “heroism” has been gendered, and then claims courage as something women can also possess.

Read beside China Women’s Journal, this line becomes even sharper. Qiu Jin’s courage is not only personal. It is addressed outward, toward other women. Her writing turns private discontent into a shared awakening: women must learn to see the darkness, name it, and walk out of it together.`,
    quoteReadingZh: `这句话是秋瑾最著名的性别自我宣言之一。它从一个社会事实开始：她的身体“不在男儿列”。在晚清社会，这意味着女性被排除在许多公共行动、教育、流动与政治承认之外。但后半句立刻翻转了这种排除：她的心、勇气与意志并不比男性小。

这句话有力量，是因为它并没有礼貌地请求许可。它拒绝了社会用来判断“谁可以成为英雄”的尺度。秋瑾并不只是模仿男性英雄气概；她揭示出“英雄”这个概念如何被性别化，然后把勇气重新声明为女性也可以拥有的东西。

如果把这句话与《中国女报》放在一起读，它会变得更加尖锐。秋瑾的勇气不只是个人的。它向外发出，朝向其他女性。她的写作把私人的不满转化为共同的觉醒：女性必须学会看见黑暗，命名黑暗，并一起走出黑暗。`,
    relatedWorks: [
      "《满江红》",
      "《中国女报发刊词》",
      "《精卫石》",
      "《剑歌》",
      "《秋瑾诗词》",
      "《秋女士遗稿》"
    ],
    tags: [
      "women’s awakening",
      "freedom",
      "education",
      "revolution",
      "poetry",
      "courage",
      "sisterhood"
    ],
    status: "published"
  },
  {
    id: "2026-07-08-orlando",
    date: "2026-07-08",
    type: "text",
    title: "Orlando",
    titleZh: "《奥兰多》",
    years: "1882–1941",
    role: "Text｜文本 / Novel｜小说",
    creator: "Virginia Woolf",
    creatorZh: "弗吉尼亚·伍尔夫",
    focusTitle: "A Biography for a Woman Who Could Not Be Contained",
    focusTitleZh: "一部写给无法被容纳之人的传记",
    summaryEn: "Virginia Woolf turns biography inside out: at a time when public life and literary history often centered men, Orlando gives a long, playful, impossible life to a figure who crosses gender, centuries, bodies, and histories.",
    summaryZh: "弗吉尼亚·伍尔夫把传记翻转过来：在公共生活与文学史长期以男性为中心的时代，《奥兰多》把一个漫长、戏谑、不可思议的一生，写给了一个跨越性别、世纪、身体与历史的人。",
    introEn: `Orlando: A Biography was published in 1928. Its subtitle is important: Woolf calls it a biography, but the life she writes is impossible by ordinary biographical rules. Orlando begins as a young nobleman in the Elizabethan age, lives for centuries without growing old in the usual way, becomes a woman, moves through different historical periods, writes, loves, inherits, loses, changes clothes, changes social positions, and finally reaches Woolf’s own present.

This form is already a quiet rebellion. Biography had long been associated with public achievement, lineage, property, politics, and the lives of men considered worthy of record. Woolf takes that serious, masculine form and gives it to a fictional figure whose life refuses stability. Orlando is not a statesman, conqueror, or official hero. Orlando is a changing body, a writer, a lover, a reader of history, and a person who cannot be held inside one gendered category.

The story of Orlando is playful, magical, and strange. Orlando first appears as a boy in a noble household, encounters court life, falls in love, becomes a poet, and later travels abroad. One day, Orlando wakes and is a woman. The novel does not treat this transformation as a tragedy or a medical problem. Orlando remains Orlando. What changes is the world’s response: clothes, laws, inheritance, social expectation, and sexual danger begin to press differently upon the same person.

This is why Orlando’s life can be read as a kind of women’s history. Through one impossible biography, Woolf shows how history enters the body. As Orlando moves from one century to another, we see how gender is made by clothing, property, literary tradition, marriage, respectability, and public recognition. A person may feel continuous inside, but the world names, limits, and reads that person differently according to gender.

In this sense, Orlando asks a beautiful and radical question: what would biography look like if it did not only record the lives of great men? What if a life could include transformation, ambiguity, private feeling, literary desire, and the long hidden history of women? Orlando’s life is not only one person’s fantasy. It becomes a playful archive of those lives that official history has often failed to hold.`,
    introZh: `《奥兰多：一部传记》出版于 1928 年。它的副标题非常重要：伍尔夫称它为一部传记，但她所书写的人生并不符合普通传记的规则。奥兰多一开始是伊丽莎白时代的一位年轻贵族男子，后来以不寻常的方式活过数个世纪，成为女性，穿越不同历史时期，写作，恋爱，继承，失去，改变衣着，改变社会位置，最后抵达伍尔夫自己的当下。

这种形式本身就是一种温柔的反叛。传记长期与公共成就、血统、财产、政治，以及那些被认为“值得记录”的男性人生联系在一起。伍尔夫拿起这种严肃的、男性化的形式，却把它交给一个拒绝稳定的虚构人物。奥兰多不是政治家、征服者或官方英雄。奥兰多是一个变化中的身体，一个写作者，一个恋人，一个历史的阅读者，也是一个无法被固定在单一性别分类中的人。

《奥兰多》的故事是轻盈的、魔法般的、奇异的。奥兰多最初以贵族少年身份出现，经历宫廷生活，坠入爱情，成为诗人，后来前往异国。有一天，奥兰多醒来，成为女性。小说并没有把这个转变写成悲剧或医学问题。奥兰多仍然是奥兰多。真正改变的是世界对她的回应：衣服、法律、继承、社会期待与性别危险，开始以不同方式压向同一个人。

这也是为什么奥兰多的一生可以被读作一种女性历史。通过这一部不可能的传记，伍尔夫展示了历史如何进入身体。当奥兰多从一个世纪走向另一个世纪，我们看见性别如何被衣着、财产、文学传统、婚姻、体面与公共承认制造出来。一个人在内在感受上或许是连续的，但世界会根据性别，以不同方式命名、限制和阅读这个人。

从这个意义上说，《奥兰多》提出了一个美丽而激进的问题：如果传记不只记录伟大男性的人生，它会是什么样子？如果一生可以包含变形、暧昧、私人感受、文学欲望，以及长期被遮蔽的女性历史呢？奥兰多的一生并不只是一个人的幻想。它成为一个游戏般的档案，保存那些官方历史常常无法容纳的人生。`,
    researchLens: {
      title: "Biography, Gender, and Women’s Historical Time",
      titleZh: "传记、性别与女性历史时间",
      citation: "Jane de Gay, “Rewriting Literary History in Orlando”; Jessica Seidel, “Trans Times”; Moslehi & Niazi, “A Study of Gender Performativity in Virginia Woolf’s Orlando.”",
      summaryEn: `Jane de Gay’s reading helps us see Orlando not simply as a playful fantasy, but as Woolf’s experiment with biography and literary history. Woolf borrows the serious form of biography, a form long associated with public men, lineage, property, achievement, and historical record. But she gives this form to a fictional figure whose life cannot be contained by ordinary biographical rules.

In this sense, Orlando rewrites literary history from the margins. Dates, documents, portraits, noble houses, and literary reputation all appear in the novel, but they never fully capture Orlando’s life. Woolf gently mocks the authority of official history and asks what kind of life is allowed to become record.

Jessica Seidel’s work extends this reading into queer and trans temporality. Orlando does not live according to a normal biological timeline or a conventional life script. Their life crosses centuries, gender categories, and historical periods, refusing the expectation that a person should move through time in a fixed, gender-stable, socially legible way.

Moslehi and Niazi’s study of gender performativity helps explain why clothes, bodies, and social readings matter so much in the novel. Orlando remains Orlando, but the world responds differently once Orlando is read as a woman. The novel therefore shows that gender is not only an inner identity, but also something repeatedly made through clothing, law, desire, inheritance, and public recognition.

Together, these research lenses help us read Orlando’s life as more than one person’s strange biography. Orlando’s life becomes a playful archive of women’s history: a way to ask who has been allowed to have a life worth recording, and whose lives have been pushed into the margins of official history.`,
      summaryZh: `Jane de Gay 的研究帮助我们把《奥兰多》读作不只是一个轻盈的幻想故事，而是伍尔夫对传记与文学史形式的实验。伍尔夫借用了严肃的传记形式——这种形式长期与公共男性、血统、财产、成就和历史记录联系在一起。但她却把这种形式交给一个虚构人物，一个无法被普通传记规则容纳的人。

从这个意义上说，《奥兰多》是从边缘重写文学史。日期、文件、画像、贵族宅邸与文学名声都出现在小说中，但它们从来无法完全捕捉奥兰多的一生。伍尔夫温柔地嘲弄官方历史的权威，并追问：什么样的人生才被允许成为记录？

Jessica Seidel 的研究则把这一点延伸到酷儿与跨性别时间性。奥兰多并不按照正常的生物时间线或传统人生脚本生活。ta 的一生跨越世纪、性别分类与历史时期，拒绝了那种认为一个人必须以固定性别、稳定身份、社会可读方式穿过时间的期待。

Moslehi 与 Niazi 对性别表演的研究，也帮助我们理解为什么服装、身体与社会阅读在小说中如此重要。奥兰多仍然是奥兰多，但当奥兰多被作为女性来阅读时，世界对 ta 的回应发生了变化。因此，小说展示出：性别不只是内在身份，也是在衣着、法律、欲望、继承与公共承认中被不断制造出来的东西。

这些研究视角合在一起，使我们看见奥兰多的一生不只是某个人奇异的传记。奥兰多的一生成为一种游戏般的女性历史档案：它追问谁被允许拥有一部值得记录的人生，谁的人生又一直被推到官方历史的边缘。`
    },
    quote: "Different though the sexes are, they intermix.",
    quoteSource: "Virginia Woolf, Orlando",
    quoteReadingEn: `This line offers a key to the novel’s understanding of gender. Woolf does not present gender as a simple switch from one fixed identity to another. Orlando becomes a woman, but the novel keeps showing how masculinity and femininity overlap, echo, borrow from, and disturb each other. Gender is not a sealed room. It is a shifting arrangement of body, clothes, habits, law, desire, and social reading.

The line also helps us understand why Orlando’s biography feels like women’s history. Once Orlando is read as a woman, the world changes around her. Her body is interpreted differently; her freedom is managed differently; her relation to property, movement, and desire becomes newly constrained. The same life becomes another history when gender changes.

This is the quiet power of Woolf’s fiction. She does not simply tell us that gender is constructed by society. She lets us feel it through a life: through what Orlando may wear, inherit, write, desire, and become. The novel turns biography into a question: who has been allowed to have a life worth recording, and whose lives have been hidden inside history’s margins?`,
    quoteReadingZh: `这句话提供了理解小说性别观的关键。伍尔夫并没有把性别写成从一种固定身份切换到另一种固定身份。奥兰多成为女性，但小说不断展示男性气质与女性气质如何重叠、回响、借用并扰动彼此。性别不是一间封闭的房间。它是身体、衣着、习惯、法律、欲望与社会阅读共同组成的流动安排。

这句话也帮助我们理解，为什么奥兰多的传记读起来像女性历史。一旦奥兰多被作为女性来阅读，她周围的世界就改变了。她的身体被不同地解释；她的自由被不同地管理；她与财产、行动和欲望的关系也受到新的限制。同一个人生，在性别改变之后，变成了另一种历史。

这就是伍尔夫小说安静的力量。她并不只是告诉我们性别由社会建构。她让我们通过一生感受到这一点：通过奥兰多可以穿什么、继承什么、书写什么、欲望什么、成为什么。小说把传记变成一个问题：谁被允许拥有值得记录的一生？又是谁的人生一直被藏在历史边缘？`,
    relatedWorks: [
      "Orlando: A Biography",
      "A Room of One’s Own",
      "Mrs Dalloway",
      "To the Lighthouse",
      "Three Guineas",
      "Virginia Woolf’s essays on biography and women’s writing"
    ],
    tags: [
      "biography",
      "gender",
      "women’s history",
      "queer temporality",
      "fiction",
      "queer reading",
      "literary history",
      "Virginia Woolf"
    ],
    status: "published"
  },
  {
    id: "2026-07-09-a-room-of-ones-own",
    date: "2026-07-09",
    type: "text",
    title: "A Room of One’s Own",
    titleZh: "《一间自己的房间》",
    titleSeparator: " ",
    years: "1882–1941",
    role: "Text｜文本",
    creator: "Virginia Woolf",
    creatorZh: "弗吉尼亚·伍尔夫",
    focusTitle: "A Room of Her Own",
    focusTitleZh: "一个属于她自己的空间",
    summaryEn: "Virginia Woolf’s A Room of One’s Own is not only about having a physical room. It is a thought experiment about what happens when women’s intelligence is constantly interrupted by poverty, domestic responsibility, emotional labour, and the expectation to care for others.",
    summaryZh: "弗吉尼亚·伍尔夫的《一间自己的房间》并不只是关于拥有一个房间。它是一场思想实验：当女性的智慧不断被贫困、家庭责任、情感劳动，以及照顾他人的期待打断时，会发生什么。",
    introEn: `Virginia Woolf’s A Room of One’s Own, published in 1929, is one of the most influential feminist essays of the twentieth century. Based on lectures she delivered at women’s colleges at Cambridge, Woolf transforms a simple question — why are there so few women writers in history? — into a larger investigation of gender, money, space, and intellectual freedom.

Woolf’s famous argument is often simplified as “a woman needs money and a room of her own to write fiction.” But behind this statement is a much deeper thought experiment.

She asks us to imagine a woman with the same intelligence, creativity, and ambition as Shakespeare. What would happen if this woman were denied education, financial independence, privacy, and the freedom to develop her own mind?

Woolf creates the fictional figure of Judith Shakespeare, Shakespeare’s equally talented sister. Judith has the same artistic potential as her brother, but she is trapped by social expectations. She cannot receive the same education, cannot move freely, and cannot pursue writing without punishment.

The tragedy is not that Judith lacks genius. The tragedy is that genius requires conditions to survive.

For Woolf, the greatest obstacle to women’s creativity is not only direct oppression. It is also the invisible labour expected from women every day.

Women are expected to manage homes, maintain relationships, absorb emotional conflicts, care for children and family members, and constantly place others’ needs before their own.

This emotional and domestic labour consumes the very time and mental energy that could become intellectual creation.

A Room of One’s Own is therefore not only a feminist argument about writing. It is an argument about time, space, and the right to develop a self.`,
    introZh: `弗吉尼亚·伍尔夫的《一间自己的房间》出版于1929年，是二十世纪最重要的女性主义散文之一。它源于她在剑桥女子学院发表的演讲。伍尔夫从一个看似简单的问题开始——为什么文学史中女性作家如此少？——却将问题扩展为关于性别、金钱、空间与思想自由的深刻探索。

伍尔夫最著名的观点常被简单理解为：“女性需要钱和自己的房间才能写小说。”但这个观点背后，其实是一场更深刻的思想实验。

她让我们想象：如果有一个女性拥有与莎士比亚同样的智慧、创造力与抱负，但她被剥夺教育、经济独立、私人空间，以及发展思想的自由，她的一生会发生什么？

伍尔夫创造了一个虚构人物——朱迪斯·莎士比亚（Judith Shakespeare），莎士比亚同样具有天赋的妹妹。她拥有与哥哥一样的艺术潜能，但被社会期待困住：她无法获得同样的教育，无法自由行动，也无法在不受惩罚的情况下追求写作。

悲剧不是朱迪斯没有天赋，而是天赋需要条件才能存活。

对于伍尔夫来说，女性创造力最大的阻碍不仅来自直接压迫，也来自每天被期待承担的隐形劳动。

女性被期待管理家庭、维持关系、吸收情绪冲突、照顾孩子与家人，并不断把他人的需要放在自己的需要之前。

这种情感劳动与家庭劳动，消耗的正是原本可以转化为思想创造的时间与精神能量。

《一间自己的房间》因此不仅是一篇关于女性写作的女性主义文章，也是一篇关于时间、空间，以及一个人发展自我的权利的文章。`,
    researchLens: {
      title: "Emotional Labour and the Conditions of Genius",
      titleZh: "情感劳动与天才产生的条件",
      citation: "Virginia Woolf, A Room of One’s Own (1929); Elaine Showalter, A Literature of Their Own (1977); Hermione Lee, Virginia Woolf (1996); Silvia Federici, Revolution at Point Zero (2012).",
      summaryEn: `Woolf’s essay can be read as an early exploration of what feminist theory later describes as emotional labour and reproductive labour.

She reveals that creativity does not exist separately from material conditions. The ability to write, think, and produce knowledge depends on having time, privacy, money, and freedom from constant care work.

The room Woolf asks for is not simply a physical room. It represents intellectual autonomy: the right to think without interruption, create without apology, and exist beyond service to others.`,
      summaryZh: `伍尔夫的文章可以被看作对后来女性主义理论中“情感劳动”和“再生产劳动”的早期探索。

她揭示创造力并不是脱离物质条件存在的。写作、思考与生产知识的能力，依赖于时间、私人空间、经济资源，以及从持续照护劳动中获得的自由。

伍尔夫要求的“房间”并不只是一个物理空间，它代表思想自主：不被打断地思考、不需要道歉地创造，以及不必永远服务于他人的存在权。`
    },
    quote: "A woman must have money and a room of her own if she is to write fiction.",
    quoteSource: "Virginia Woolf, A Room of One’s Own",
    quoteReadingEn: `This sentence is often quoted as a simple demand for privacy, but Woolf’s argument is much larger.

Money represents independence. It allows women to exist beyond dependence on fathers, husbands, or institutions.

The room represents mental freedom. The ability to close a door means the ability to protect one’s thoughts.

For Woolf, creativity requires not only talent but conditions. A society that takes women’s time, labour, and emotional energy cannot later claim that women produced fewer works.`,
    quoteReadingZh: `这句话常被理解为对私人空间的要求，但伍尔夫真正讨论的问题更加广阔。

金钱代表独立。它让女性能够不依附于父亲、丈夫或其他权力结构而存在。

房间代表思想自由。能够关上一扇门，意味着能够保护自己的思想。

对于伍尔夫来说，创造不仅需要天赋，也需要条件。一个消耗女性时间、劳动与情感能量的社会，不能再反过来说女性创造得更少。`,
    relatedWorks: [
      "A Room of One’s Own",
      "Three Guineas",
      "Mrs Dalloway",
      "To the Lighthouse",
      "Orlando"
    ],
    tags: [
      "women’s writing",
      "emotional labour",
      "creativity",
      "domestic work",
      "feminist theory"
    ],
    sourceText: "A Room of One’s Own",
    status: "published"
  },
  {
    id: "2026-07-10-wages-against-housework",
    date: "2026-07-10",
    type: "theory",
    personId: "federici-1975",
    title: "Wages Against Housework",
    titleZh: "《反对家务劳动》",
    titleSeparator: " ",
    years: "b. 1942",
    role: "Theory｜理论 / Essay｜文章",
    creator: "Silvia Federici",
    creatorZh: "西尔维娅·费代里奇",
    focusTitle: "To Name Love as Work",
    focusTitleZh: "把爱命名为劳动",
    summaryEn: "Silvia Federici argues that housework is not a natural expression of women’s love. It is unwaged labour that reproduces workers, families, and capitalism itself.",
    summaryZh: "Silvia Federici 指出，家务并不是女性之爱的自然表达。它是一种无偿劳动，生产并维持着工人、家庭，以及资本主义本身。",
    introEn: `Wages Against Housework is one of Silvia Federici’s most influential feminist essays. Written in the context of the 1970s Wages for Housework movement, it challenges one of the deepest assumptions of modern society: that cooking, cleaning, raising children, caring for husbands, managing emotions, and maintaining daily life are not “real work,” but women’s natural duty.

Federici’s argument begins from a reversal. They say it is love; she says it is work. The home is often imagined as a private space outside the economy, but Federici shows that the household is central to the economy. Domestic labour reproduces the worker every day: feeding, cleaning, comforting, repairing, and making it possible for wage labour to continue.

This is why the demand for wages is not simply a demand for a paycheck. Federici does not ask women to celebrate housework or become better housewives. She asks us to make visible what capitalism hides: that women’s unpaid labour has been treated as a free resource. To demand wages is to refuse the idea that women’s exhaustion is natural, loving, or outside politics.

For A Calendar of Her Own, this essay connects directly to Virginia Woolf’s question about women’s intellectual freedom. Woolf asks what conditions a woman needs in order to write. Federici asks why women so often lack those conditions in the first place. If women’s time, attention, body, and emotional energy are consumed by unpaid reproductive labour, then the problem is not individual failure. It is a social organization of work.`,
    introZh: `《反对家务劳动》是 Silvia Federici 最有影响力的女性主义文章之一。它写作于 1970 年代“家务有偿”运动的背景之中，挑战了现代社会中一个极深的假设：做饭、打扫、养育孩子、照顾丈夫、管理情绪、维持日常生活，并不被看作“真正的劳动”，而被说成女性天然的责任。

Federici 的论证从一个反转开始。社会说这是爱，她说这是劳动。家庭常被想象成经济之外的私人空间，但 Federici 指出，家庭正是经济的核心。家务劳动每天都在再生产劳动力：喂养、清洁、安慰、修复，使有薪劳动能够继续发生。

这也是为什么“工资”的要求并不只是要求一张薪水单。Federici 并不是要求女性赞美家务，或成为更好的家庭主妇。她要求我们看见资本主义隐藏起来的东西：女性的无偿劳动一直被当作免费的资源。要求工资，是拒绝把女性的疲惫说成自然、爱或政治之外的事情。

对于 A Calendar of Her Own｜她自己的日历 来说，这篇文章与 Virginia Woolf 关于女性思想自由的问题直接相连。Woolf 问：女性需要什么条件才能写作？Federici 则追问：为什么女性一开始就如此缺少这些条件？如果女性的时间、注意力、身体与情感能量都被无偿再生产劳动消耗，那么问题就不是个人失败，而是劳动的社会组织方式。`,
    quote: "They say it is love. We say it is unwaged work.",
    quoteSource: "Silvia Federici, Wages Against Housework",
    quoteReadingEn: `This sentence is the clearest entrance into Federici’s argument. It does not deny that love can exist inside families. Instead, it refuses the use of love as a mask for exploitation. When labour is called love, it becomes harder to count, refuse, redistribute, or politicize.

To name housework as work is therefore a form of feminist visibility. Cooking, cleaning, caring, listening, soothing, arranging, remembering, and repairing are not minor background tasks. They are the hidden infrastructure of everyday life.

Federici’s point remains powerful because it changes the question. Instead of asking why women are tired, she asks who benefits from women’s exhaustion. Instead of asking women to manage time better, she asks why their time has been treated as endlessly available.`,
    quoteReadingZh: `这句话是进入 Federici 论证最清楚的入口。它并不是否认家庭中可以存在爱。它拒绝的是把爱用作剥削的面具。当劳动被称作爱，它就更难被计算、拒绝、重新分配，也更难被政治化。

因此，把家务命名为劳动，是一种女性主义的可见化。做饭、打扫、照护、倾听、安抚、安排、记忆与修复，并不是微不足道的背景任务。它们是日常生活隐藏的基础设施。

Federici 的观点至今有力，是因为它改变了问题的方向。她不是问女性为什么疲惫，而是问谁从女性的疲惫中获益。她不是要求女性更好地管理时间，而是追问为什么女性的时间一直被当作可以无限索取的资源。`,
    relatedWorks: [
      "Wages Against Housework",
      "Revolution at Point Zero",
      "Caliban and the Witch",
      "Mariarosa Dalla Costa and Selma James, The Power of Women and the Subversion of the Community",
      "Wages for Housework movement writings"
    ],
    tags: [
      "housework",
      "unwaged labour",
      "care",
      "capitalism",
      "feminist theory",
      "social reproduction",
      "emotional labour"
    ],
    sourceText: "Wages Against Housework",
    status: "published"
  },
  {
    id: "2026-07-13-a-womans-story",
    date: "2026-07-13",
    type: "text",
    title: "A Woman's Story",
    titleZh: "《一个女人的故事》",
    titleSeparator: " ",
    years: "b. 1940",
    role: "Text｜文本 / Memoir｜回忆录",
    creator: "Annie Ernaux",
    creatorZh: "安妮·埃尔诺",
    focusTitle: "The Woman Beyond the Mother",
    focusTitleZh: "母亲之外的那个女人",
    summaryEn: "Annie Ernaux writes about her mother not as a timeless symbol of motherhood, but as a woman shaped by labour, class, ambition, aging, and the desire to escape the life assigned to her.",
    summaryZh: "安妮·埃尔诺书写母亲，却没有把她变成一个永恒的母亲形象。她写的是一个被劳动、阶级、抱负、衰老与逃离命定生活的渴望共同塑造的女人。",
    introEn: `Annie Ernaux's A Woman's Story begins after the death of her mother. Rather than writing a private memorial, Ernaux sets herself a more difficult task: to recover the woman who existed before and beyond her role as "my mother."

Her mother was born into a working-class family in Normandy. She first worked as a factory labourer and later became a small shopkeeper, always hoping that education and hard work would allow her daughter to live a different life.

The relationship between mother and daughter is inseparable from class. Ernaux enters the educated middle class, gaining another language, another culture, and another way of understanding the world. Her social mobility fulfils her mother's dream while quietly creating a distance between them.

A Woman's Story therefore becomes more than a memoir of grief. It records how one ordinary woman's life was shaped by work, marriage, motherhood, aging, and the expectations placed upon women throughout the twentieth century.

The title itself is significant. Ernaux does not simply write "My Mother." She writes A Woman's Story. Before this woman belonged to her daughter, she belonged to herself. By restoring her mother's individuality, Ernaux also restores countless women whose lives disappeared behind the role of "mother."`,
    introZh: `安妮·埃尔诺的《一个女人的故事》从母亲去世之后开始。她并不满足于写一篇私人悼念，而是为自己设下一个更困难的任务：寻找那个在“我的母亲”这一身份之前、也在这一身份之外真实存在过的女人。

她的母亲出生于诺曼底的劳动阶级家庭，年轻时做过工人，后来经营一家小店。她始终相信，教育与努力能够让女儿拥有不同于自己的人生。

母女关系始终无法脱离阶级。埃尔诺进入受教育的中产阶级，拥有了另一种语言、另一种文化，以及另一种理解世界的方式。她完成了母亲对她的期待，却也在两人之间慢慢形成了一道距离。

因此，《一个女人的故事》不仅是一部哀悼母亲的回忆录，也记录了一位普通女性如何被劳动、婚姻、母职、衰老，以及二十世纪社会赋予女性的期待共同塑造。

书名本身就意义重大。埃尔诺没有把它命名为《我的母亲》，而是《一个女人的故事》。在成为女儿的母亲之前，她首先属于她自己。通过重新找回母亲作为一个女人的独立生命，埃尔诺也重新找回了无数被“母亲”这一身份掩盖的女性。`,
    quote: "I believe I am writing about my mother because it is my turn to bring her into the world.",
    quoteSource: "Annie Ernaux, A Woman's Story",
    quoteReadingEn: `This sentence reverses the ordinary direction of birth. Once, the mother brought the daughter into the world. Now the daughter brings the mother into language. Writing becomes a second birth, preserving the life that history might otherwise forget.

Ernaux refuses to idealize motherhood. She does not portray her mother as a perfect figure of sacrifice, but as a complicated woman who could be ambitious, proud, anxious, loving, and contradictory. To remember her truthfully is itself an act of love.

The memoir also asks readers to reconsider how women's histories are written. Mothers are often remembered only through the families they cared for, while their own dreams, labour, and identities disappear. Ernaux restores those forgotten lives to history.`,
    quoteReadingZh: `这句话反转了通常意义上的出生。曾经，是母亲把女儿带到世界上；如今，女儿把母亲重新带入语言之中。写作因此成为第二次出生，让那个可能被历史遗忘的人重新获得存在。

埃尔诺拒绝神圣化母亲。她没有把母亲塑造成完美的奉献者，而是写她的抱负、骄傲、焦虑、爱与矛盾。真正的爱，并不是神化一个人，而是真实地记住她。

这部作品也邀请读者重新思考女性历史如何被书写。母亲常常只因照顾家庭而被记住，她们自己的梦想、劳动与身份却逐渐消失。埃尔诺试图把这些被遗忘的人生重新写回历史。`,
    relatedWorks: [
      "A Woman's Story",
      "A Man's Place",
      "I Remain in Darkness",
      "The Years",
      "A Frozen Woman",
      "The Other Girl"
    ],
    tags: [
      "motherhood",
      "class",
      "memory",
      "social mobility",
      "aging",
      "women's history",
      "working-class life"
    ],
    sourceText: "A Woman's Story",
    status: "published"
  },
  {
    id: "2026-07-14-linda-nochlin",
    date: "2026-07-14",
    type: "criticism",
    title: "Why Have There Been No Great Women Artists?",
    titleZh: "《为什么没有伟大的女性艺术家？》",
    titleSeparator: " ",
    years: "1931–2017",
    role: "Criticism｜艺术史批评 / Essay｜文章",
    creator: "Linda Nochlin",
    creatorZh: "琳达·诺克林",
    focusTitle: "The Question Is the Institution",
    focusTitleZh: "问题不在女性，而在制度",
    summaryEn: "Linda Nochlin asks us to stop treating women’s absence from the canon as proof of insufficient talent. The real question is how education, institutions, professional training, patronage, and social expectations determined who was allowed to become a “great artist.”",
    summaryZh: "琳达·诺克林要求我们停止把女性在艺术史经典中的缺席，当作她们缺乏天赋的证明。真正的问题是：教育、制度、专业训练、赞助体系与社会期待，如何决定了谁能够成为所谓的“伟大艺术家”。",
    introEn: `Linda Nochlin was an art historian, critic, and curator whose work helped establish feminist art history as a field of study. Her landmark essay “Why Have There Been No Great Women Artists?” was published in 1971 and challenged the methods through which Western art history had defined talent, achievement, and greatness.

The title appears to ask why women failed to produce artists equal to Michelangelo or Rembrandt. But Nochlin shows that the question already contains a misleading answer: it encourages us to assume that women were absent because they lacked genius. Rather than defending women by producing a short list of forgotten exceptions, she examines the assumptions that make the question seem natural in the first place.

Nochlin rejects the romantic myth of the Great Artist as an isolated genius whose gift naturally overcomes every obstacle. Art is not produced outside society. Becoming a professional artist requires education, time, materials, access to studios and models, relationships with other artists, patronage, exhibition opportunities, and recognition from institutions. Historically, these resources were distributed unequally.

One of Nochlin’s clearest examples is access to training from the nude model. For centuries, studying the nude was treated as essential preparation for prestigious forms such as history painting. Yet women were often prevented from receiving this training because viewing and drawing the naked body was considered improper for them. Women were then judged by standards they had been institutionally prevented from mastering.

Women’s artistic activity was also frequently defined as an accomplishment rather than a profession. Drawing or painting might be encouraged as evidence of refinement in a young lady, but serious ambition, sustained training, competition, and public recognition conflicted with expectations that women should become wives, mothers, and caretakers. The distinction between an accomplishment and a profession helped preserve male authority within art.

Nochlin therefore changes the direction of the investigation. Instead of asking what is wrong with women, she asks how institutions manufacture success and failure. The absence of women from the canon is not a neutral record of natural ability. It is evidence of who was educated, supported, admitted, exhibited, collected, and remembered.

Her argument also changes what feminist art history must do. Recovering neglected women artists remains important, but adding a few names to an unchanged canon is not enough. The standards of greatness, the organisation of artistic education, and the stories art history tells about individual genius must themselves be examined and rewritten.`,
    introZh: `琳达·诺克林是一位艺术史学家、批评家与策展人，她的研究推动女性主义艺术史成为一个重要领域。她发表于1971年的经典文章《为什么没有伟大的女性艺术家？》，挑战了西方艺术史定义天赋、成就与“伟大”的方式。

这个标题表面上像是在追问：为什么女性没有产生可与米开朗琪罗或伦勃朗比肩的艺术家？但诺克林指出，这个问题本身已经暗含了误导性的答案——它诱导我们认为，女性之所以缺席，是因为她们缺乏天才。她没有仅仅列举几位被遗忘的女性作为反例，而是反过来审视：究竟是什么假设，让这个问题显得如此理所当然？

诺克林拒绝了关于“伟大艺术家”的浪漫神话：仿佛天才是一个孤立的个体，其天赋必然能够战胜一切障碍。艺术并不是在社会之外产生的。成为专业艺术家需要教育、时间、材料、画室与模特，需要与其他艺术家的联系，也需要赞助、展览机会和制度承认。这些资源在历史上从未被平等分配。

诺克林最清楚的例子之一，是女性能否接受裸体模特写生训练。几个世纪以来，裸体写生被视为历史画等高级艺术门类的重要基础，但女性常因观看和描绘裸体被认为“不合体面”，而无法获得同样的训练。随后，艺术制度却又用她们被禁止掌握的标准来评判她们。

女性的艺术活动也经常被定义为一种“才艺”，而不是一种职业。绘画可以被鼓励，因为它能够证明一位年轻女士有教养；但严肃的抱负、持续训练、专业竞争与公共成就，却与女性应成为妻子、母亲和照护者的期待发生冲突。“才艺”与“职业”之间的区分，帮助艺术界继续维持男性权威。

因此，诺克林改变了问题的方向。她不再追问女性究竟“哪里不足”，而是追问制度如何制造成功与失败。女性在经典中的缺席，并不是关于自然能力的中立记录；它反映的是谁曾经获得教育与支持，谁被允许进入学院、参加展览、进入收藏，并最终被历史记住。

她的论证也改变了女性主义艺术史的任务。重新发现被忽视的女性艺术家当然重要，但仅仅把几个名字补进一个没有改变的经典仍然不够。关于伟大的标准、艺术教育的组织方式，以及艺术史围绕个人天才讲述的故事，都必须被重新审视与改写。`,
    quote: "The fault lies not in our stars … but in our institutions and our education.",
    quoteSource: "Linda Nochlin, Why Have There Been No Great Women Artists?",
    quoteReadingEn: `This sentence condenses Nochlin’s central reversal. Women’s historical exclusion cannot be explained by biology, destiny, hormones, or a mysterious absence of genius. It must be examined through the material and institutional conditions that made artistic development possible for some people and nearly impossible for others.

The word “institutions” moves responsibility away from individual women. A woman excluded from academies, professional training, patronage, and public life cannot be fairly judged as though she competed under the same conditions as a man who possessed all of them.

The sentence also challenges how history interprets achievement. Once success is understood as socially produced, the image of the self-made genius begins to dissolve. Greatness is no longer only a quality hidden inside an individual; it is also a result of access, permission, community, opportunity, and recognition.

Nochlin does not replace one simple story with another. She does not claim that every excluded woman would necessarily have become a celebrated artist. Instead, she asks us to stop presenting unequal outcomes as proof of natural inequality.`,
    quoteReadingZh: `这句话浓缩了诺克林最核心的反转。女性在历史上的缺席，不能用生理、命运、荷尔蒙，或某种神秘的“天才缺失”来解释。我们必须考察具体的物质与制度条件：它们如何让一些人能够发展艺术才能，却让另一些人几乎无法开始。

“制度”这个词把责任从女性个人身上移开。一个被排除在学院、专业训练、赞助体系与公共生活之外的女性，不能被假装成与拥有这一切的男性处于同等条件下，再接受所谓公平的评价。

这句话也挑战了历史解释成就的方式。一旦我们认识到成功由社会条件共同生产，“完全凭借自己成为天才”的形象便开始瓦解。伟大不再只是藏在个人内部的品质；它也是机会、准入、共同体、资源与承认共同作用的结果。

诺克林并没有用另一个简单故事取代旧故事。她并不是说每一位受到排斥的女性都必然会成为著名艺术家。她要求我们停止把不平等条件造成的结果，当作天生不平等的证明。`,
    relatedWorks: [
      "Why Have There Been No Great Women Artists?",
      "Women, Art, and Power and Other Essays",
      "Representing Women",
      "The Politics of Vision",
      "Linda Nochlin and Ann Sutherland Harris, Women Artists: 1550–1950"
    ],
    tags: [
      "feminist art history",
      "institutions",
      "artistic education",
      "genius",
      "women artists",
      "the nude",
      "art canon",
      "structural inequality"
    ],
    sourceText: "Why Have There Been No Great Women Artists?",
    status: "published"
  },
  {
    id: "2026-07-15-yoko-ono-cut-piece",
    date: "2026-07-15",
    type: "performance",
    personId: "ono-1964",
    title: "Cut Piece",
    titleZh: "《切片》",
    titleSeparator: " ",
    years: "b. 1933",
    role: "Performance｜行为艺术 / Conceptual Art｜观念艺术",
    creator: "Yoko Ono",
    creatorZh: "小野洋子",
    focusTitle: "What Will the Audience Take?",
    focusTitleZh: "观众会从她身上拿走什么？",
    summaryEn: "In Cut Piece, Yoko Ono sits silently while audience members approach with scissors and cut away parts of her clothing. The work does not simply expose the artist’s body; it exposes the choices, hesitation, restraint, and violence of the audience.",
    summaryZh: "在《切片》中，小野洋子沉默地坐着，观众依次拿起剪刀，剪下她身上的衣物。作品所暴露的不只是艺术家的身体，也包括观众的选择、犹豫、克制与暴力。",
    introEn: `Yoko Ono is a Japanese artist whose practice has moved across conceptual art, performance, film, music, installation, and written instructions. She was already developing instruction-based and participatory art before becoming widely known through her relationship with John Lennon. In 1964, she also published Grapefruit, a collection of instructions written between the 1950s and 1964.

Cut Piece was first performed in Japan in 1964. Ono sat almost motionless onstage with a pair of scissors placed before her. Members of the audience were invited to approach one by one and cut away pieces of her clothing. She later performed the work in other cities, including New York, where its 1965 Carnegie Recital Hall presentation was filmed.

At first, the action appears simple. One person approaches, chooses a place to cut, removes a small fragment, and returns to the audience. But with every cut, the atmosphere changes. Some participants act cautiously; others become bolder. The clothing grows thinner, the artist becomes more exposed, and the audience must decide not only whether to participate, but how far to go.

The work therefore transfers part of artistic authorship to the audience. Ono establishes the instruction and places her body within it, but she cannot fully control what follows. The final form of the performance is produced collectively through the participants’ decisions. MoMA describes her early works as performative structures whose meaning emerges through interaction and change rather than through a fixed object.

A feminist reading of Cut Piece notices the vulnerability of a female body made publicly available to looking and cutting. Ono remains composed and largely silent, while the audience gains physical power over her clothing. The piece can evoke objectification, sexual threat, and violence against women—but it also complicates a simple division between passive victim and active aggressor. Ono created the score, invited participation, and retained the option to bring the performance to an end.

Yet gender is not the work’s only possible frame. Jieun Rhee’s study warns that Cut Piece has been too narrowly interpreted only through the female body and male gaze. Because Ono performed it before different audiences in Japan, the United States, and Europe, the meaning of each performance was also shaped by cultural, national, and ethnic contexts. The audience was not a neutral mass: every audience brought its own rules about bodies, shame, spectacle, gender, and participation.

The title Cut Piece also matters. A “piece” can mean an artwork, but it can also mean a fragment taken away. Each spectator leaves with a piece of the artist’s clothing, while the artist remains behind with the consequences of everyone’s actions. The work asks what it means to receive something from another person—and when receiving becomes taking.

Cut Piece does not tell the audience what to feel. It creates a situation in which spectators must watch themselves becoming participants. The scissors reveal less about the fabric than about the person holding them.`,
    introZh: `小野洋子是一位日本艺术家，她的创作横跨观念艺术、行为艺术、电影、音乐、装置与文字指令。早在因为与约翰·列侬的关系广为人知之前，她就已经开始发展以指令和观众参与为核心的艺术。1964年，她还出版了《葡萄柚》，收录了从20世纪50年代至1964年间创作的指令作品。

《切片》于1964年在日本首次演出。小野洋子几乎一动不动地坐在舞台上，面前放着一把剪刀。观众被邀请逐一上台，剪下她衣服的一部分。此后她又在其他城市表演这件作品，其中包括1965年在纽约卡内基演奏厅的演出，并留下了影像记录。

最初，这个行为看起来非常简单。一个人走上台，选择一个位置剪下衣物，再带着碎片回到观众席。但随着每一次剪切，现场气氛都在改变。有些参与者十分谨慎，有些人则越来越大胆。衣物逐渐减少，艺术家越来越暴露，而观众必须决定的不只是是否参与，也包括究竟要进行到什么程度。

因此，这件作品把一部分艺术创作权交给了观众。小野洋子设定指令，也把自己的身体置于其中，却无法完全控制接下来会发生什么。表演的最终形态由参与者的每一次决定共同产生。纽约现代艺术博物馆对她早期作品的讨论也指出，这些作品的意义来自互动与变化，而不是一个固定不变的物件。

女性主义阅读会注意到，《切片》将一个女性身体置于公共凝视与剪切之下时产生的脆弱。小野洋子保持沉着，几乎始终沉默，而观众却获得了改变她衣物的实际权力。作品令人联想到物化、性威胁与针对女性的暴力，但它也使“被动受害者”和“主动施害者”之间的区分变得复杂：指令由小野洋子制定，参与由她邀请，而她也保留结束表演的权利。

然而，性别并不是理解这件作品的唯一框架。Jieun Rhee 的研究提醒我们，《切片》常被过于狭窄地只从女性身体和男性凝视来解释。由于小野洋子曾在日本、美国与欧洲面对不同观众演出，每一次表演的意义也受到文化、国家与族裔语境的塑造。观众并不是中立的人群；不同观众都带着各自关于身体、羞耻、观看、性别与参与的规则进入现场。

《切片》这个标题本身也很重要。“Piece”既可以指一件艺术作品，也可以指被剪下并带走的碎片。每位参与者都可能带走艺术家衣服的一部分，而艺术家则留在原地，承受所有行为累积起来的后果。作品因此追问：从另一个人那里获得某物意味着什么？而获得又在什么时候变成了索取？

《切片》并不告诉观众应该感受什么。它创造了一个情境，使观看者不得不看见自己如何成为参与者。剪刀最终揭示的，与其说是衣料之下的身体，不如说是握着剪刀的人。`,
    relatedWorks: [
      "Cut Piece",
      "Grapefruit",
      "Bag Piece",
      "Painting to Be Stepped On",
      "Film No. 4 (Bottoms)",
      "Wish Tree",
      "Half-A-Room"
    ],
    tags: [
      "performance art",
      "participation",
      "vulnerability",
      "violence",
      "audience",
      "body",
      "consent",
      "feminist art",
      "Fluxus",
      "conceptual art"
    ],
    sourceText: "Cut Piece",
    status: "published"
  },
  {
    id: "2026-07-16-judy-chicago-the-dinner-party",
    date: "2026-07-16",
    type: "installation",
    personId: "chicago-1979",
    title: "The Dinner Party",
    titleZh: "《晚宴》",
    titleSeparator: " ",
    years: "b. 1939",
    role: "Installation｜装置艺术 / Feminist Art｜女性主义艺术",
    creator: "Judy Chicago",
    creatorZh: "朱迪·芝加哥",
    focusTitle: "Who Gets a Seat at History’s Table?",
    focusTitleZh: "谁能在历史的餐桌上拥有一个席位？",
    summaryEn: "Judy Chicago’s The Dinner Party imagines women’s history as a monumental banquet. Around a triangular table, women who were forgotten, marginalized, or erased from dominant historical narratives are given a place, a name, and a seat at the table.",
    summaryZh: "朱迪·芝加哥的《晚宴》把女性历史想象成一场纪念碑式的宴会。在一张巨大的三角形餐桌旁，那些曾被主流历史遗忘、边缘化或抹去的女性，重新获得了位置、名字，以及属于自己的席位。",
    introEn: `Judy Chicago is an American artist whose work has played an important role in the development of feminist art. Created between 1974 and 1979, The Dinner Party is her best-known work and has become an icon of feminist art. The monumental installation takes the form of a large triangular banquet table, transforming the familiar space of eating and gathering into a symbolic history of women.

The table is set for thirty-nine mythical and historical women. Each place setting is dedicated to a particular figure, while the Heritage Floor beneath the table carries the names of another 999 women. Together, the installation represents 1,038 women. The work stretches across centuries, attempting to make visible a history of women whose achievements have too often been marginalized or erased.

The question at the centre of The Dinner Party is deceptively simple: who gets invited to history? Traditional histories often appear to be neutral accounts of the past, but Chicago’s work asks us to notice whose names repeatedly occupy the table. Kings, generals, philosophers, and male artists have been given monuments, biographies, museums, and textbooks. Women were often present in history, but presence did not necessarily lead to remembrance.

Chicago therefore does not simply add women to an existing history. She creates another architecture for remembering them. The triangular table has no single position at its head: symbolically, there is no solitary patriarch presiding over the banquet. Instead, history is arranged through relationships between women, with one name leading toward hundreds of others.

The materials of The Dinner Party are equally important. Its place settings incorporate richly decorated textiles, embroidery, needlework, and painted and sculpted ceramic plates. These materials resonate with practices historically associated with women and frequently dismissed as “craft” rather than elevated to the status of “fine art.” Chicago brings these forms of making into a monumental museum installation, challenging the hierarchy that separates celebrated art from devalued forms of women’s creative labour.

In this sense, the dinner table itself becomes political. Historically, women have spent enormous amounts of time preparing food, setting tables, washing dishes, sewing cloth, and caring for others around domestic spaces. Chicago takes the familiar image of the table—a place connected to women’s often invisible labour—and transforms it into a place where women themselves become the guests of honour. Chicago described the work as a reinterpretation of The Last Supper from the perspective of those who had historically done the cooking.

There is a beautiful reversal here. The women who have so often been imagined as preparing the table are now invited to sit at it. They are no longer serving history. They are the subjects of history.

Yet The Dinner Party also raises difficult questions about any attempt to create a shared “women’s history.” Which women are selected? Which cultures and experiences are represented? Can one monumental artwork speak for the enormous differences between women across race, class, nationality, sexuality, and historical period? These questions do not necessarily diminish the work. Instead, they remind us that recovering women’s history is never a finished project. Every archive creates new questions about who remains outside it.

Perhaps this is why The Dinner Party remains such a powerful image. It does not simply ask us to remember individual women. It asks us to reconsider the structure of historical memory itself. Who writes the guest list? Who decides where someone sits? Who is remembered by name, and who disappears into the anonymous labour that made the banquet possible?

The Dinner Party answers historical absence with an invitation: pull out a chair, write down a name, and make the table larger.`,
    introZh: `朱迪·芝加哥是一位美国艺术家，她的创作在女性主义艺术的发展中具有重要地位。创作于1974年至1979年的《晚宴》是她最著名的作品之一，也成为女性主义艺术的标志性作品。这件大型装置以一张巨大的三角形宴会桌为中心，把人们熟悉的进餐与聚会空间，转化成一部象征性的女性历史。

餐桌为39位神话与历史中的女性设置了席位。每一个席位都献给一位特定的女性，而餐桌下方的“Heritage Floor｜遗产地板”则写有另外999位女性的名字。整件作品因此纪念了1,038位女性。作品跨越漫长的历史时期，试图让那些成就经常被边缘化或抹去的女性重新变得可见。

《晚宴》中心的问题看起来非常简单：谁会收到历史的邀请？传统历史常常看起来像是对过去的中立记录，但芝加哥的作品要求我们注意，究竟是谁的名字反复占据着历史的餐桌。国王、将军、哲学家与男性艺术家拥有纪念碑、传记、博物馆与教科书。女性并非不存在于历史之中，但存在并不意味着会被记住。

因此，芝加哥并不只是把女性添加进一部已经存在的历史。她创造了另一种记忆她们的结构。三角形的餐桌没有唯一的“主位”：在象征意义上，这场宴会没有一个孤立的父权人物坐在桌首。相反，历史通过女性之间的关系被重新排列，一个名字又通向另外数百个名字。

《晚宴》使用的材料同样重要。作品中的席位包含丰富的纺织品、刺绣、针线工艺，以及绘制和塑形的陶瓷餐盘。这些媒介长期与女性的创作和劳动联系在一起，却又经常被归入“手工艺”，无法获得与所谓“纯艺术”同等的地位。芝加哥把这些创作形式带进纪念碑式的博物馆装置中，从而挑战了“伟大艺术”与被贬低的女性创造性劳动之间的等级关系。

从这个意义上说，餐桌本身成为了政治性的空间。在历史上，女性花费了大量时间准备食物、摆放餐桌、清洗餐具、缝制织物，并在家庭空间中照顾他人。芝加哥拿起这个与女性隐形劳动紧密相连的日常物件，把它转变成一个女性自己成为贵宾的地方。芝加哥曾把这件作品构想为从历史上那些一直负责做饭的人的角度，对《最后的晚餐》进行重新想象。

这里发生了一次漂亮的反转。那些长期被想象为负责准备餐桌的女性，现在终于被邀请坐到桌前。她们不再只是服务历史的人。她们成为了历史的主体。

然而，《晚宴》也让我们面对一个更困难的问题：任何试图建立共同“女性历史”的项目，都必须决定哪些女性会被选择，哪些文化与经验会被代表。一件纪念碑式的艺术作品，是否能够容纳不同种族、阶级、国家、性取向与历史时期女性之间巨大的差异？这些问题并不一定削弱《晚宴》的意义。相反，它们提醒我们，重新寻找女性历史永远不会是一项已经完成的工程。每建立一个档案，我们都需要继续追问：还有谁留在它的外面？

或许这正是《晚宴》至今仍具有力量的原因。它不只是要求我们记住一个个具体的女性，也要求我们重新思考历史记忆本身的结构：谁书写宾客名单？谁决定一个人坐在哪里？谁能够留下名字？又是谁消失在让整场宴会成为可能的无名劳动之中？

《晚宴》用一份邀请回应历史中的缺席：拉开一把椅子，写下一个名字，然后让这张桌子变得更大。`,
    relatedWorks: [
      "The Dinner Party",
      "Womanhouse",
      "Through the Flower",
      "The Birth Project",
      "PowerPlay",
      "The Holocaust Project: From Darkness into Light"
    ],
    tags: [
      "feminist art",
      "women’s history",
      "the canon",
      "craft",
      "memory",
      "collective history",
      "women’s work",
      "domestic labour",
      "historical erasure",
      "feminist archive"
    ],
    sourceText: "The Dinner Party",
    status: "published"
  },
  {
    id: "2026-07-17-meret-oppenheim-object",
    date: "2026-07-17",
    type: "sculpture",
    title: "Object",
    titleZh: "《物体》",
    titleSeparator: " ",
    years: "1913–1985",
    role: "Surrealism｜超现实主义 / Sculpture｜雕塑",
    creator: "Meret Oppenheim",
    creatorZh: "梅雷特·奥本海姆",
    focusTitle: "When Everyday Objects Refuse to Behave",
    focusTitleZh: "当日常物件拒绝服从日常",
    summaryEn: "Meret Oppenheim covered a teacup, saucer, and spoon with fur, transforming an ordinary object of comfort into something intimate, absurd, and unsettling. The work asks what happens when familiar things no longer behave as we expect them to.",
    summaryZh: "梅雷特·奥本海姆用皮毛覆盖了茶杯、茶托与茶匙，把一件与舒适和日常习惯有关的器具，变成了既亲密、荒诞又令人不安的物体。作品追问：当熟悉的事物不再按照我们的期待发挥作用，会发生什么？",
    introEn: `Meret Oppenheim was a Swiss artist born in Berlin whose practice moved across sculpture, painting, drawing, jewellery, furniture, poetry, and costume. Although she became closely associated with Surrealism in 1930s Paris, her work never belonged neatly to a single movement. She combined ordinary materials in unexpected ways, allowing familiar objects to become strange, humorous, erotic, or disturbing.

Created in Paris in 1936, Object consists of a teacup, saucer, and spoon covered in fur. Oppenheim purchased the ordinary tableware from a shop and transformed it by wrapping its hard porcelain surfaces in something soft, warm, and animal-like. The Museum of Modern Art acquired the work in the same year, and it quickly became one of the most recognizable objects associated with Surrealism.

The idea emerged through a joke. Oppenheim was wearing a metal bracelet covered with fur when Pablo Picasso remarked that almost anything could be covered in fur. Looking at her teacup, she playfully suggested that the cup itself might need fur to keep warm. What began as a casual exchange became an object in which two incompatible sensations—smooth porcelain and animal hair—were forced together.

A teacup usually invites touch. We lift it toward the mouth, feel its rim against the lips, and associate it with warmth, hospitality, and domestic routine. Fur also invites touch, but in a different way. It suggests skin, animals, clothing, intimacy, and bodily warmth. Once these materials are joined, however, the invitation becomes difficult to accept. The cup looks soft, yet the thought of drinking from it may produce disgust.

The work does not make the object entirely unfamiliar. We can still recognize every part of the tea service. Its strangeness comes from the fact that it remains almost usable while becoming impossible to use. The handle can still be held, the spoon can still be lifted, and the cup can still be brought toward the mouth—but each familiar gesture now feels wrong.

In this way, Object interrupts the quiet obedience of everyday things. A cup is expected to contain liquid. A spoon is expected to enter the mouth. A saucer is expected to protect the table beneath it. Oppenheim preserves their shapes while taking away their functions. The objects have not been destroyed; they have simply stopped cooperating.

The tea service also belongs to a domestic world historically associated with women: serving drinks, receiving guests, arranging a table, and maintaining an atmosphere of comfort. Yet Oppenheim does not present this domestic object as useful, welcoming, or well behaved. She turns it into something excessive and resistant. It can no longer perform the task for which it was designed.

This does not mean that Object has one fixed feminist message. Oppenheim resisted the expectation that women artists should be understood only through their gender. Yet her position within Surrealism remains important. Women in the movement were often represented as muses, models, dreams, or objects of male desire. Oppenheim instead became the maker of the object: the person who determined how desire, humour, attraction, and discomfort would be arranged.

The extraordinary fame of Object later created another difficulty. Oppenheim produced a varied body of work over more than five decades, but the fur-covered cup often overshadowed everything else she made. She became known through a single youthful work, as though one surprising object could explain an entire artistic life. Recent exhibitions have worked to restore the breadth of her practice beyond this one famous image.

Perhaps the enduring power of Object lies in how little it changes and how much it disturbs. A cup remains a cup. Fur remains fur. Yet once they meet, neither can be experienced in quite the same way again.

Oppenheim does not lead us into an imaginary world far from everyday life. She makes everyday life itself behave strangely. The object has not lost its identity. It has lost its obedience.`,
    introZh: `梅雷特·奥本海姆是一位出生于柏林的瑞士艺术家，她的创作横跨雕塑、绘画、素描、珠宝、家具、诗歌与服装。尽管她与20世纪30年代巴黎的超现实主义关系密切，她的作品却始终难以被完整归入某一种艺术运动。她常常以出人意料的方式组合日常材料，让熟悉的物件变得陌生、幽默、情色或令人不安。

创作于1936年巴黎的《物体》，由一个覆盖皮毛的茶杯、茶托与茶匙组成。奥本海姆从商店购买了这些普通餐具，再用柔软、温暖而近似动物身体的材料，包裹它们原本坚硬的瓷质表面。纽约现代艺术博物馆在作品完成的同年将其收藏，它也很快成为超现实主义最具辨识度的作品之一。

这件作品的构想来自一句玩笑。当时，奥本海姆戴着一只由金属与皮毛制成的手镯，巴勃罗·毕加索开玩笑说，几乎任何东西都可以覆盖皮毛。奥本海姆看着面前的茶杯，随即提出，或许杯子也需要皮毛来保暖。一次随意的交谈，由此变成了一件让光滑瓷器与动物毛发这两种不相容触感彼此相遇的作品。

茶杯通常邀请我们触摸。我们会把它举向嘴边，让杯沿接触嘴唇，并把它与温暖、招待和日常生活联系在一起。皮毛也会邀请触摸，却以另一种方式让人想到皮肤、动物、衣物、亲密与身体的温度。然而，当这两种材料结合在一起时，这份邀请却变得难以接受。杯子看起来柔软，但从中饮水的想象却可能引起厌恶。

作品并没有让这个物体变得完全陌生。我们依然能够认出茶具的每一个部分。它的奇异之处正在于，它似乎仍然可以使用，却又已经无法真正被使用。杯柄依旧可以握住，茶匙依旧可以拿起，杯子也依旧可以被送到嘴边，但每一个熟悉的动作此刻都显得不再正确。

从这个意义上说，《物体》打断了日常器具安静而顺从的秩序。杯子应该盛放液体，茶匙应该进入口中，茶托应该保护下面的桌面。奥本海姆保留了这些物件的形状，却拿走了它们的功能。它们没有遭到破坏，只是不再配合我们的使用。

茶具也属于一个长期与女性联系在一起的家庭世界：端送饮品、接待客人、布置餐桌，并维持舒适得体的氛围。然而，奥本海姆并没有把这个家庭物件表现为实用、友好或举止妥当的器具。她让它变得过度而抗拒，使它再也无法完成原本被设计去执行的任务。

这并不意味着《物体》拥有一个固定不变的女性主义寓意。奥本海姆曾拒绝让女性艺术家只能通过性别获得解释。但她在超现实主义中的位置依然重要。在这一运动中，女性常常被表现为缪斯、模特、梦境，或男性欲望的对象。奥本海姆却成为了制造物体的人：由她来决定欲望、幽默、吸引与不适应该如何被组合。

《物体》巨大的名声后来也制造了另一个难题。奥本海姆在五十多年的创作生涯中留下了形式多样的作品，但覆盖皮毛的茶杯却常常遮蔽了她的其他创作。她通过一件年轻时期的作品被不断辨认，仿佛一个令人惊讶的物体就足以解释一位艺术家的全部人生。近年来的回顾展则试图重新呈现她在这件著名作品之外更为广阔的创作实践。

或许，《物体》持久的力量正在于：它改变得如此之少，却造成了如此强烈的不安。杯子依然是杯子，皮毛依然是皮毛。然而，当它们彼此相遇之后，我们便再也无法以完全相同的方式感受其中任何一个。

奥本海姆并没有把我们带入一个远离日常生活的幻想世界。她让日常生活本身变得异常。这个物体并没有失去它的身份，它失去的是它的服从。`,
    relatedWorks: [
      "Object",
      "Ma gouvernante—My Nurse—Mein Kindermädchen",
      "Fur Gloves with Wooden Fingers",
      "Table with Bird’s Feet",
      "Stone Woman",
      "Spring Banquet",
      "The Couple"
    ],
    tags: [
      "surrealism",
      "object",
      "desire",
      "discomfort",
      "domesticity",
      "transformation",
      "touch",
      "material",
      "body",
      "women artists",
      "function",
      "everyday life"
    ],
    sourceText: "Object",
    status: "published"
  },
  {
    id: "2026-07-18-olga-tokarczuk-flights",
    date: "2026-07-18",
    type: "novel",
    title: "Flights",
    titleZh: "《云游》",
    titleSeparator: " ",
    years: "b. 1962",
    role: "Novel｜小说 / Fragmentary Fiction｜碎片化叙事",
    creator: "Olga Tokarczuk",
    creatorZh: "奥尔加·托卡尔丘克",
    focusTitle: "Can We Ever Stay in One Place?",
    focusTitleZh: "我们真的能够停留在一个地方吗？",
    summaryEn: "In Flights, Olga Tokarczuk moves between airports, hotel rooms, maps, preserved bodies, lost travellers, and stories separated by centuries. Rather than treating travel as a route from one destination to another, the novel asks what constant movement does to memory, identity, and the body.",
    summaryZh: "在《云游》中，奥尔加·托卡尔丘克穿行于机场、旅馆、地图、被保存的身体、失踪的旅人，以及彼此相隔数百年的故事之间。小说并不把旅行理解为从一个目的地前往另一个目的地的路线，而是追问：持续移动会如何改变记忆、身份与身体？",
    introEn: `Olga Tokarczuk is a Polish novelist, essayist, and psychologist whose writing often crosses the boundaries between fiction, history, myth, philosophy, and scientific inquiry. She was awarded the 2018 Nobel Prize in Literature for a body of work that treats the crossing of boundaries as a way of understanding life. Flights was first published in Polish in 2007 under the title Bieguni and appeared in English in Jennifer Croft’s translation in 2017. The novel and its translator received the 2018 International Booker Prize.

Flights does not unfold as a single continuous journey. It is composed of brief observations, longer fictional narratives, historical episodes, maps, lectures, memories, and reflections on airports, museums, anatomy, and migration. Some passages last only a few lines; others follow characters across countries and centuries. The book refuses to settle into one genre just as its travellers refuse—or are unable—to remain in one place.

Its fragmented form resembles the experience of contemporary travel. A journey is rarely one uninterrupted movement. It is made of departures, delays, security checks, waiting rooms, unfamiliar beds, announcements, misplaced belongings, and brief encounters with strangers. Tokarczuk turns these transitional spaces into the true landscape of the novel. Airports and hotels are not merely places passed through on the way somewhere else; they become temporary worlds with their own rhythms and rules.

The travellers in Flights are not always moving toward discovery or freedom. Some are escaping; some are lost; some carry bodies, organs, memories, or grief across borders. Movement may offer possibility, but it can also produce disorientation. To travel is to loosen the connection between identity and place. The person who leaves is not always the same person who arrives.

This uncertainty is reflected in the novel’s unnamed narrator. She observes the world from stations, terminals, rented rooms, and temporary addresses, collecting stories without fully belonging to any of them. Her identity emerges through movement rather than through a stable home. She does not present herself as an explorer who conquers distant places. Instead, she becomes a listener, a passenger, and a collector of fragments.

Yet Flights is as concerned with the body as it is with geography. Alongside airports and maps, Tokarczuk writes about anatomy, preserved specimens, amputated limbs, organs separated from bodies, and attempts to resist physical decay. The human body appears as another kind of territory: it can be examined, divided, transported, labelled, mapped, and preserved.

Maps promise order. They reduce distance to lines, colours, names, and borders. Anatomical drawings make a similar promise: they transform the interior of the body into a system that can be observed and understood. But neither map can fully contain what it represents. A geographical map cannot show what it feels like to leave home, while an anatomical diagram cannot explain what it feels like to inhabit a body.

The novel repeatedly brings movement and preservation into tension. Its characters travel across continents, yet they are fascinated by museums, collections, relics, and preserved bodies—things removed from the movement of time. To preserve something is to try to keep it in place. To travel is to accept that place will change. Flights moves between these two desires: the wish to continue and the wish to prevent disappearance.

For women, movement has never been entirely neutral. To travel alone, occupy public space, enter unfamiliar rooms, or move without explanation can become a form of independence, but it can also involve danger, scrutiny, and restriction. Tokarczuk does not turn the woman traveller into a simple emblem of liberation. Instead, she shows mobility as unevenly distributed: some people cross borders easily, while others are detained, displaced, watched, or made to justify their presence.

The original Polish title, Bieguni, refers to a group described in the novel as believing that evil gains power over whatever remains still. Their response is perpetual motion. Whether or not movement can truly protect anyone, the idea gives the novel one of its central tensions: perhaps remaining still makes us vulnerable, but constant movement may also prevent us from forming attachments, accepting mortality, or understanding where we are.

The English title Flights contains several meanings at once. It suggests aeroplanes and journeys, but also escape, disappearance, and the movement of thought. A story may take flight from another story; an idea may leave its expected path. The novel travels in this way, not by following one straight road, but by making unexpected connections between distant places, bodies, and lives.

Perhaps this is why the book’s fragments do not feel incomplete. Each one resembles a traveller glimpsed briefly through a window or across a departure hall. We may never learn everything about that person, but the encounter alters the shape of the journey. Meaning does not come from reaching a final destination. It accumulates through crossings.

Flights asks us to imagine identity not as a fixed address, but as a pattern made by movement. We are shaped by the places we leave, the borders we cross, the bodies we inhabit, and the stories we carry with us. Perhaps we never stay entirely still. Even when the body rests, memory continues to travel.`,
    introZh: `奥尔加·托卡尔丘克是一位波兰小说家、散文家与心理学家。她的写作常常穿越小说、历史、神话、哲学与科学研究之间的边界。她凭借一种把跨越边界视为生命形式的叙事想象，获得2018年诺贝尔文学奖。《云游》最初于2007年以波兰语出版，原名为 Bieguni；2017年，詹妮弗·克罗夫特的英译本问世。小说与译者共同获得了2018年国际布克奖。

《云游》并不沿着一段连续的旅程展开。它由短暂的观察、较长的虚构故事、历史片段、地图、讲座、记忆，以及关于机场、博物馆、解剖学与迁徙的思考组成。有些章节只有寥寥数行，有些则跟随人物跨越国家与世纪。正如书中的旅人拒绝——或无法——停留在一个地方，这本书也拒绝安顿在一种固定的文学类型之中。

小说的碎片结构很像当代旅行的真实经验。一段旅程很少是一次毫无中断的移动。它由出发、延误、安检、候机室、陌生的床铺、广播、遗失的物品，以及与陌生人的短暂相遇构成。托卡尔丘克把这些过渡性的空间变成了小说真正的风景。机场与旅馆不再只是前往别处时经过的地点，而是拥有自身节奏与规则的临时世界。

《云游》中的旅人并不总是在走向发现或自由。有些人在逃离，有些人已经迷失，有些人则带着身体、器官、记忆或悲伤穿越边界。移动可以带来可能，也可能制造迷失。旅行意味着松动身份与地点之间的联系。离开的人，并不总是抵达时的那个人。

这种不确定性也体现在小说那位没有名字的叙述者身上。她从车站、航站楼、租来的房间与临时地址观察世界，收集故事，却不完全属于其中任何一个。她的身份通过移动形成，而不是由一个稳定的家来定义。她并不把自己表现为征服远方的探险者，而更像一名倾听者、乘客与碎片的收集者。

然而，《云游》对身体的关注并不亚于它对地理空间的关注。在机场与地图之外，托卡尔丘克还书写解剖学、保存下来的标本、被截除的肢体、脱离身体的器官，以及人们抵抗肉身腐败的尝试。人的身体因此成为另一种领土：它可以被检查、切分、运输、标记、绘制和保存。

地图承诺秩序。它把距离缩减成线条、颜色、名称与边界。解剖图也作出类似的承诺：它把身体内部转化为一个可以被观察和理解的系统。但任何地图都无法完整容纳它所代表的事物。地理地图无法表现离开家园时的感受，解剖图也无法解释居住在一具身体之中究竟意味着什么。

小说不断让移动与保存彼此对峙。人物穿越大陆，却又被博物馆、收藏、遗物与保存下来的身体所吸引——这些事物仿佛被从时间的流动中取出。保存某物，就是试图让它停留在原处；旅行则意味着接受地点与自身都将发生变化。《云游》在这两种欲望之间移动：继续前行的欲望，以及阻止某物消失的欲望。

对女性而言，移动从来不是完全中性的。独自旅行、占据公共空间、进入陌生房间，或在无需解释的情况下自由行动，都可能成为一种独立，同时也可能伴随危险、审视与限制。托卡尔丘克没有把女性旅人塑造成一个简单的解放象征。她让我们看见，移动的权利从来分配不均：有些人可以轻易越过边境，有些人却会被扣留、驱逐、监视，或被迫为自己的出现作出解释。

波兰语原题 Bieguni 指向小说中一个相信邪恶能够控制静止之物的群体。他们的应对方式是永不停息地移动。无论移动是否真的能够保护任何人，这一观念都构成了小说最重要的张力之一：停留也许会使人变得脆弱，但持续移动同样可能让我们无法建立联系、接受死亡，或理解自己究竟身在何处。

英文书名 Flights 同时包含多重含义。它让人想到航班与旅程，也意味着逃离、消失，以及思想的飞行。一个故事可能从另一个故事中起飞，一个念头也可能离开预设的路径。小说正是以这种方式旅行：它不沿着一条笔直的道路前进，而是在遥远的地点、身体与生命之间建立出人意料的联系。

也许正因如此，书中的碎片并不会让人觉得残缺。每一个片段都像一个隔着车窗或候机大厅短暂看见的旅人。我们或许永远无法了解那个人的全部，但这次相遇已经改变了旅程的形状。意义并不来自抵达最终目的地，而是在一次次穿越之中逐渐累积。

《云游》邀请我们不要把身份想象成一个固定地址，而把它理解为移动所留下的图案。塑造我们的，是那些被我们离开的地方、被我们跨越的边界、被我们居住的身体，以及被我们随身携带的故事。也许我们从未真正静止。即使身体停下，记忆仍在继续旅行。`,
    quote: "HERE I AM｜我在这里",
    quoteSource: "Olga Tokarczuk, Flights｜奥尔加·托卡尔丘克《云游》",
    quoteReadingEn: `I’m a few years old. I’m sitting on the window sill, surrounded by strewn toys and toppled-over block towers and dolls with bulging eyes. It’s dark in the house, and the air in the rooms slowly cools, dims. There’s no one else here; they’ve left, they’re gone, though you can still hear their voices dying down, that shuffling, the echoes of their footsteps, some distant laughter. Out the window the courtyard is empty. Darkness spreads softly from the sky, settling on everything like black dew.

The worst part is the stillness, visible, dense—a chilly dusk and the sodium-vapour lamps’ frail light already mired in darkness just a few feet from its source.

Nothing happens—the march of darkness halts at the door to the house, and all the clamour of fading falls silent, makes a thick skin like on hot milk cooling. The contours of the buildings against the backdrop of the sky stretch out into infinity, slowly lose their sharp angles, corners, edges. The dimming light takes the air with it—there’s nothing left to breathe. Now the dark soaks into my skin. Sounds have curled up inside themselves, withdrawn their snail’s eyes; the orchestra of the world has departed, vanishing into the park.

That evening is the limit of the world, and I’ve just happened upon it, by accident, while playing, not in search of anything. I’ve discovered it because I was left unsupervised for a bit. I’ve clearly found myself in a trap now, and I can’t get out. I’m a few years old, I’m sitting on the window sill, and I’m looking out onto the chilled courtyard. The lights in the school’s kitchen are extinguished; everyone has left—there’s nothing anyone can do now, here I am.`,
    quoteReadingZh: `我很小。我坐在窗台上，身边尽是乱扔一气的玩具、被推倒的积木高塔、眼珠凸出来的洋娃娃。屋里很黑，房间里的空气慢慢冷下来，暗下来。这里没别人；他们都走了，不见了，但你仍可以听到他们的言语声渐渐消失，踢踢踏踏的脚步的回音，几声遥远的笑声。窗外的庭院里空无一人。黑暗从天而降，轻柔地弥漫开来，像黑色露水般落在一切物事上。

那种寂静是最让人难受的，稠密，几乎肉眼可见——阴寒的暮光、钠蒸气灯的昏暗灯光都已沉入黑暗，灯光只能照出几英尺远。

没有任何事发生——黑暗的蔓延止于家门，所有的喧嚣渐息，归于静默，就像热牛奶冷掉后凝成的那层厚厚的膜。房屋映衬在天空的背景里，渐渐失去了鲜明的边缘、分明的棱角，那种轮廓似乎能弥漫到无限远。越来越暗的天光带走了空气——没有剩下可供呼吸的空气。现在，黑暗已浸透我的皮肤。各种声音兀自蜷曲，把自己裹在里面，收起蜗牛般的小眼睛；世界的盛大乐队已离去，消失在公园里了。

那天傍晚是世界的边界，我在玩耍中偶然发现了这一点，并不是刻意去探寻的。只是因为我被单独留下了，几乎无人照管，我才发现了这一点。我意识到自己陷入了一种困境，很清楚自己现在进退不得。我很小，坐在窗台上，望着窗外暗冷下来的庭院。学校厨房里的灯都灭了；大家都走了。所有的门都关上了，门闩落下，百叶窗低垂。我很愿意离开，但我无处可去。我自己的存在，就是眼下唯一具有鲜明轮廓的物事，一圈颤抖又起伏的轮廓，让人痛楚的颤抖和起伏。猛然间，我明白了：现在，我在这里，仅此而已。`,
    relatedWorks: [
      "Flights",
      "Primeval and Other Times",
      "House of Day, House of Night",
      "Drive Your Plow Over the Bones of the Dead",
      "The Books of Jacob",
      "The Lost Soul",
      "The Empusium"
    ],
    tags: [
      "movement",
      "travel",
      "body",
      "fragments",
      "maps",
      "borders",
      "identity",
      "migration",
      "anatomy",
      "memory",
      "displacement",
      "belonging"
    ],
    sourceText: "Flights",
    status: "published"
  },
  {
    id: "2026-07-19-chiharu-shiota-absence-embodied",
    date: "2026-07-19",
    type: "installation",
    title: "Absence Embodied",
    titleZh: "《缺席的实体》",
    titleSeparator: " ",
    years: "b. 1972",
    role: "Installation｜装置艺术",
    creator: "Chiharu Shiota",
    creatorZh: "盐田千春",
    focusTitle: "Can Absence Take Up Space?",
    focusTitleZh: "缺席也能占据空间吗？",
    summaryEn: "In Absence Embodied, Chiharu Shiota fills the gallery with a dense web of red wool, transforming empty space into something almost physical. Thread becomes blood, memory, distance, and human connection, while the casts of hands and feet suggest bodies that are no longer fully present.",
    summaryZh: "在《缺席的实体》中，盐田千春以密集的红色羊毛线填满展厅，将原本空无一物的空间变成一种近乎具有实体的存在。线既像血液，也像记忆、距离与人与人之间的联系；散落其中的手脚翻模，则暗示着那些已经无法完整出现的身体。",
    introEn: `Chiharu Shiota is a Japanese performance and installation artist born in Osaka in 1972. Her work frequently uses thread, wool, blood, metal, earth, and everyday objects to explore memory, the body, motherhood, life cycles, migration, and human relationships. Since moving away from Japan as a young adult and settling in Berlin, displacement and belonging have remained central to her practice.

Absence Embodied was created in 2018 as a site-specific installation for Gallery 14 at the Art Gallery of South Australia. The work consists of a vast three-dimensional labyrinth made from red wool, together with bronze and plaster casts of the artist’s own hands and feet and those of members of her family.

The red wool spreads across the room in thousands of overlapping lines. It does not simply decorate the gallery; it changes how the body moves through it. Visitors are no longer looking at an object placed at a distance. They enter a space that feels tangled, suspended, and alive.

Thread is one of the simplest materials imaginable. It can bind, repair, measure, connect, or trap. In Shiota’s installations, it becomes a way of drawing in space. Instead of making lines on paper, she stretches them across walls, floors, ceilings, objects, and bodies.

The colour red carries several meanings at once. Shiota connects it to blood, the body, and the invisible ties between people. In Japanese culture, the idea of a red thread can describe two lives that are bound together. Within the installation, however, these connections are never neat or simple. They overlap, tighten, loosen, disappear, and begin again.

The work’s title brings together two apparently opposite ideas: absence and embodiment. Absence usually suggests emptiness, loss, or the disappearance of a person. To embody something is to give it a body, a shape, or a physical presence. Shiota asks what happens when something missing becomes the most visible thing in the room.

The casts of hands and feet make this tension more intimate. They are fragments of the body, but they are also traces of touch, movement, and family connection. They suggest people who once occupied space and whose presence is now reduced to an imprint.

A hand can hold, touch, wave goodbye, or reach toward another person. A foot carries the body from one place to another. When separated from the whole body, these forms become both familiar and unsettling. They seem present, yet the person to whom they belong is absent.

This is why Absence Embodied is not simply about loss. It is also about the persistence of relationships. Even when a person is no longer physically present, the ties connected to them may remain. Memory continues to occupy space.

Shiota has compared thread to human relationships. A thread may become tangled, lose tension, or be cut, just as a relationship may become complicated, weakened, or severed. Yet even a broken thread leaves evidence that a connection once existed.

The installation also reflects the experience of migration. Shiota’s life between Japan and Germany informs her interest in geographical displacement. To migrate is to carry memories from one place into another, while never being able to transfer the whole of a former life.

The web of red lines resembles a map without fixed borders. It records movement but offers no clear route. There is no single beginning or destination. Every line meets another, creating a network in which individual paths become difficult to separate.

This may be why the installation feels both protective and suffocating. The threads can resemble a nest, a shelter, or a womb, but they can also feel like a trap. Connection gives us belonging, yet it may also restrict movement.

The body remains central even when no complete body appears. The viewer’s own body must navigate the work, becoming part of its system of distance, tension, and proximity. In this way, absence is not empty. It is something encountered physically.

Absence Embodied suggests that what is gone does not necessarily disappear. It may survive as a thread, a footprint, a gesture, a memory, or the space left behind by a body.

The body may leave.

The connection remains.`,
    introZh: `盐田千春是一位出生于1972年日本大阪的行为与装置艺术家。她常常使用线、羊毛、血液、金属、泥土以及日常物件，探讨记忆、身体、母性、生命循环、迁徙与人际关系。年轻时离开日本并定居柏林之后，流离、归属与地理位移也始终成为她创作的重要主题。

《缺席的实体》创作于2018年，是盐田千春为南澳大利亚美术馆第14号展厅制作的一件场域特定装置。作品由大规模的红色羊毛线构成一个三维迷宫，同时加入了艺术家本人及其家人的手脚青铜与石膏翻模。

红色羊毛线以成千上万条交叠的轨迹蔓延在展厅之中。它并不只是装饰空间，而是改变了身体在空间中移动的方式。观众不再只是站在远处观看一件物体，而是进入一个纠缠、悬浮、仿佛仍在呼吸的场域。

线是最简单的材料之一。它可以连接、修补、测量，也可以束缚与困住。在盐田千春的装置中，线成为一种在空间中绘画的方式。她不再把线条留在纸面上，而是让它们跨越墙壁、地面、天花板、物件与身体。

红色同时承载着多重含义。盐田千春把它与血液、身体，以及人与人之间不可见的联系联系起来。在日本文化中，红线也可以指向两段被命运连接的生命。然而，在这件装置里，联系从来不是整齐而简单的。它们交叠、收紧、松弛、消失，然后重新开始。

作品的标题把两个看似相反的观念放在一起：缺席与实体化。缺席通常意味着空白、失去，或某个人的消失；而实体化则意味着赋予某物身体、形状与物质存在。盐田千春提出的问题是：当消失之物反而成为空间中最醒目的存在时，会发生什么？

手脚的翻模让这种张力变得更加私人。它们是身体的碎片，也是触摸、移动与亲缘关系留下的痕迹。它们让人想到那些曾经占据某个空间的人，而他们的存在如今只剩下一道印记。

手可以握住、触摸、挥别，也可以伸向另一个人；脚则带着身体从一个地点走向另一个地点。当手与脚脱离完整身体时，它们既熟悉又令人不安。它们仿佛仍然在场，但它们所属的人却已经缺席。

因此，《缺席的实体》并不只是关于失去。它同样在讨论关系如何持续存在。即使某个人已经不再以身体形式出现，与她相关的联系仍可能留下。记忆依然占据空间。

盐田千春曾将线与人际关系相比。线会纠缠、失去张力，也会被剪断；关系同样可能变得复杂、松动，或彻底中止。但即使一根线已经断裂，它仍会留下某种证据，证明连接曾经存在。

这件装置也回应了迁徙经验。盐田千春在日本与德国之间的人生，使她持续关注地理位移。迁徙意味着把一个地方的记忆带入另一个地方，但人永远无法把过去的生活完整地搬走。

红线织成的网络像一张没有固定边界的地图。它记录移动，却不提供清晰路线。这里没有唯一的起点，也没有明确的终点。每一条线都与另一条线相遇，使个体路径最终难以被单独区分。

也正因如此，这件装置同时让人感到被保护与被压迫。红线可以像巢穴、庇护所或子宫，也可以像一张无法逃脱的网。连接给予我们归属，却也可能限制我们的行动。

即使作品中没有出现完整身体，身体仍然是核心。观众必须用自己的身体穿行其中，成为距离、张力与接近关系的一部分。于是，缺席不再是空无，而成为一种可以被身体真实遭遇的存在。

《缺席的实体》提醒我们：已经离去之物，并不一定真正消失。它可能继续存在于一根线、一道足迹、一个动作、一段记忆，或一具身体曾经留下的空间之中。

身体也许会离开。

但连接仍然存在。`,
    quote: "In making the work, sometimes the string gets tangled, or loses tension, or is cut, much like human relationships. Relationships can become tangled, lost or severed. Red string symbolises the body, blood or relationships between humans.",
    quoteSource: "Chiharu Shiota｜盐田千春",
    quoteReadingZh: "在创作过程中，线有时会纠缠、失去张力，或者被剪断，就像人与人之间的关系一样。关系也会变得纠缠、失落，或被切断。红线象征着身体、血液，以及人与人之间的关系。",
    relatedWorks: [
      "Absence Embodied",
      "The Key in the Hand",
      "Uncertain Journey",
      "In Silence",
      "Accumulation: Searching for the Destination",
      "The Soul Trembles",
      "State of Being"
    ],
    tags: [
      "absence",
      "memory",
      "body",
      "thread",
      "connection",
      "migration",
      "displacement",
      "belonging",
      "family",
      "blood",
      "installation",
      "traces",
      "relationships",
      "red thread"
    ],
    sourceText: "Absence Embodied",
    status: "published"
  },
  {
    id: "2026-07-20-riane-eisler-the-chalice-and-the-blade",
    date: "2026-07-20",
    type: "novel",
    title: "The Chalice and the Blade",
    titleZh: "《圣杯与剑》",
    titleSeparator: " ",
    years: "b. 1931",
    role: "Book｜著作",
    creator: "Riane Eisler",
    creatorZh: "瑞安·艾斯勒",
    focusTitle: "Who Writes the Story of Civilization?",
    focusTitleZh: "谁定义了文明的故事？",
    summaryEn: "For centuries, history has often been told through conquest, rulers, war, and the rise and fall of empires. In The Chalice and the Blade, Riane Eisler asks whether human societies must always be organised through domination—or whether another way of living together is possible.",
    summaryZh: "几个世纪以来，历史常常被讲述为征服、统治者、战争，以及帝国兴衰的故事。在《圣杯与剑》中，瑞安·艾斯勒提出：人类社会是否必然建立在统治之上？我们是否可能以另一种方式共同生活？",
    introEn: `Published in 1987, The Chalice and the Blade: Our History, Our Future is a widely read work of feminist cultural history and social theory. Drawing on archaeology, anthropology, mythology, religion, and social history, Riane Eisler reconsiders the origins of social inequality and asks whether war, hierarchy, and gender domination are inevitable features of human civilization.

Rather than dividing history into a simple opposition between patriarchy and matriarchy, Eisler proposes a broader framework. She describes societies as moving along a spectrum between two orientations: the domination system and the partnership system. These are not two perfectly separate categories, but patterns that can appear in different degrees within families, institutions, cultures, and political systems.

In a domination system, power is maintained through rigid rankings, fear, coercion, and the threat or use of violence. One group is placed above another: men above women, adults above children, rulers above subjects, or one race, class, religion, or nation above others.

A partnership system is organised differently. It places greater value on mutual respect, cooperation, care, shared responsibility, and relations that do not depend on one side controlling the other. Partnership does not mean the absence of disagreement or difference. It means that difference need not become a justification for domination.

The title of the book turns these two orientations into symbols. In Eisler’s framework, the blade represents coercive power, conquest, destruction, and domination. The chalice represents the giving, sustaining, and nurturing of life. The contrast is not simply between two objects, but between two ways of imagining power.

The blade expresses power over others. It asks who is strong enough to command, punish, or conquer. The chalice suggests another form of power: the capacity to sustain relationships, protect life, share resources, and create conditions in which people can flourish.

This distinction is central to Eisler’s argument. She does not claim that women are naturally peaceful or that men are naturally violent. Nor does she propose replacing male domination with female domination. A society ruled by women through fear and hierarchy would still belong to the domination system.

Her question is therefore not simply: Who should rule?

It is: Why must human relationships be organised through ruling and being ruled at all?

To support her argument, Eisler turns to interpretations of prehistoric societies, particularly those associated with Neolithic Europe. Drawing on archaeological theories available when the book was written, she argues that some early communities may have been more egalitarian, less war-oriented, and more centred on life-giving and regenerative symbols than many later hierarchical societies.

She gives particular importance to female figurines, images of birth and regeneration, and religious symbols connected with the body and the cycles of nature. She interprets these materials as evidence that women and life-sustaining activities may once have held a different cultural status.

These archaeological interpretations should not be treated as uncontested historical fact. The meaning of prehistoric figurines, religious practices, gender roles, and social structures remains debated. It is therefore more accurate to understand this section of the book as Eisler’s reconstruction of the past rather than as a definitive account accepted by all archaeologists.

Yet the importance of the book does not depend entirely on whether every claim about prehistory can be proven. Its broader intervention lies in challenging the assumption that hierarchy and violence are natural, universal, and unchangeable.

Traditional histories often present domination as the engine of civilization. Empires expand through conquest. Kings establish order through force. Heroes are remembered for winning battles. Political change is narrated through wars, revolutions, and the transfer of power between rulers.

Within this version of history, care work is easily pushed to the margins. Raising children, preparing food, maintaining households, healing the sick, preserving community knowledge, and sustaining relationships may make collective life possible, yet these activities are rarely treated as the central achievements of civilization.

The chalice asks us to look again at these neglected forms of labour. What if the ability to sustain life is as historically important as the ability to conquer territory? What if caregiving, cooperation, and mutual dependence are not signs of weakness, but foundations of social survival?

This is also why gender remains central to Eisler’s analysis. In domination-oriented societies, traits associated with masculinity—such as aggression, control, and emotional hardness—are often ranked above traits culturally associated with femininity, including care, empathy, and vulnerability.

The problem is not simply that women are devalued. Activities, emotions, and forms of knowledge associated with women are also devalued. In this way, gender hierarchy shapes the values of an entire society, affecting both women and men.

A partnership model attempts to break this ranking. It does not require everyone to become identical. Instead, it refuses the idea that qualities such as care, cooperation, or vulnerability are inferior to competition, control, and force.

For feminist readers, this framework offers a different historical imagination. If domination is a social arrangement rather than an unavoidable law of nature, then inequality can be challenged. Institutions are created and maintained through choices, customs, stories, and systems of reward. They can therefore be questioned and reorganised.

Eisler later extended the partnership framework beyond the historical argument of The Chalice and the Blade. Her subsequent work applies it to education, economics, caregiving, childhood, gender relations, environmental questions, and social transformation.

The Chalice and the Blade does not offer a simple blueprint for an ideal society. Its argument is better understood as an invitation to recognise the patterns through which power operates.

Where do we see fear being used to enforce obedience?

Whose work is valued, and whose work remains invisible?

Which qualities are rewarded as strength, and which are dismissed as weakness?

Who is permitted to speak, decide, remember, and define the meaning of civilization?

The book’s continuing question is therefore not whether the chalice once defeated the blade, or whether one symbol can permanently replace the other.

It asks what kinds of relationships we choose to reproduce—in our homes, schools, economies, institutions, and histories.

What kind of civilization do we choose to build?`,
    introZh: `《圣杯与剑：我们的历史，我们的未来》出版于1987年，是一部受到广泛阅读与讨论的女性主义文化史及社会理论著作。瑞安·艾斯勒结合考古学、人类学、神话、宗教与社会史，重新思考社会不平等的起源，并追问战争、等级制度与性别统治是否真的是人类文明不可避免的组成部分。

艾斯勒并没有简单地把历史划分为父权社会与母权社会，而是提出了一个更广泛的分析框架。她将社会理解为处在一个连续谱之中，其两端分别是统治体系与伙伴体系。它们并不是两种完全分离的社会类型，而是可能以不同程度存在于家庭、制度、文化与政治结构中的关系模式。

在统治体系中，权力通过严格的等级、恐惧、强制，以及暴力的威胁或使用得以维持。一部分人被置于另一部分人之上：男性高于女性，成年人高于儿童，统治者高于被统治者，或者某种种族、阶级、宗教与国家高于其他群体。

伙伴体系则以不同的方式组织关系。它更重视相互尊重、合作、照护、共同责任，以及不依赖一方控制另一方的社会关系。伙伴关系并不意味着不存在分歧或差异，而是意味着差异不必成为统治的理由。

书名将这两种社会取向转化为象征。在艾斯勒的理论框架中，剑代表强制性权力、征服、毁灭与统治；圣杯则代表生命的给予、维系与滋养。它们之间的对照并不只是两件物品的对照，而是两种理解权力的方式之间的对照。

剑所表现的是凌驾于他人之上的权力。它追问谁足够强大，可以命令、惩罚或征服他人。圣杯则暗示另一种力量：维系关系、保护生命、共享资源，并创造使人能够成长的条件。

这种区分是艾斯勒论述的核心。她并不认为女性天生和平，也不认为男性天生暴力；她同样没有主张以女性统治取代男性统治。一个由女性通过恐惧与等级进行统治的社会，依然属于统治体系。

因此，她提出的问题并不只是：谁应该统治？

而是：为什么人类关系必须被组织成统治与被统治？

为了支持这一论点，艾斯勒转向了对史前社会，尤其是新石器时代欧洲的解释。她依据本书写作时期已有的考古理论提出，一些早期社群可能比后来的许多等级社会更加平等，较少以战争为中心，也更重视与生命、滋养和再生相关的象征。

她尤其重视女性塑像、有关出生与再生的图像，以及与身体和自然循环相关的宗教象征。她将这些材料解释为一种证据，认为女性以及维系生命的活动，曾经可能拥有不同于后来父权社会的文化地位。

这些考古解释不能被视为毫无争议的历史事实。史前塑像的含义、宗教实践、性别角色与社会结构至今仍存在讨论。因此，更准确的阅读方式，是把这一部分理解为艾斯勒对过去所作的理论重构，而不是所有考古学者都认可的最终历史结论。

然而，这本书的意义并不完全取决于它对史前社会的每一项主张是否都能得到证实。它更重要的介入，在于挑战一种长期存在的假设：等级与暴力是自然的、普遍的，也是无法改变的。

传统历史常常把统治描述为文明发展的动力。帝国通过征服扩张，国王通过武力建立秩序，英雄因赢得战争而被铭记，政治变化则通过战争、革命与统治权的转移来叙述。

在这种历史叙事中，照护劳动很容易被推到边缘。抚育儿童、准备食物、维持家庭、照料病人、保存共同体知识以及维系关系，使集体生活得以持续，却很少被视为文明的核心成就。

圣杯要求我们重新注视这些被忽略的劳动形式。维系生命的能力，是否与征服领土的能力同样具有历史意义？照护、合作与相互依赖，是否并非软弱的表现，而是社会得以存续的基础？

这也是为什么性别始终处于艾斯勒分析的中心。在统治取向的社会中，与男性气质相关的特征，例如攻击性、控制与情感上的强硬，往往被置于与女性气质相关的照护、同理心与脆弱之上。

问题并不只是女性受到贬低。那些与女性相关的活动、情感和知识形式，同样会被贬低。于是，性别等级影响的不只是女性的社会地位，也塑造了整个社会的价值体系，并同时限制女性与男性。

伙伴模式试图打破这种价值排序。它并不要求所有人变得相同，而是拒绝把照护、合作与脆弱视为低于竞争、控制与武力的品质。

对于女性主义读者而言，这一框架提供了一种不同的历史想象。如果统治是一种社会安排，而不是不可避免的自然法则，那么不平等就可以受到挑战。制度通过选择、习俗、叙事与奖惩系统被建立和维持，因此也可以被质疑与重新组织。

此后，艾斯勒又将伙伴关系框架延伸到《圣杯与剑》的历史论述之外。她在后续研究中将这一理论应用于教育、经济、照护、儿童成长、性别关系、环境问题与社会转型。

《圣杯与剑》并没有为理想社会提供一套简单的蓝图。它更像是一份邀请，让人们辨认权力在社会中运作的不同模式。

我们在哪里看到恐惧被用来制造服从？

谁的劳动得到重视？谁的劳动仍然不可见？

哪些品质被赞扬为力量？哪些品质又被贬低为软弱？

谁被允许发言、决定、记忆，并定义文明的意义？

因此，这本书持续提出的问题，并不是圣杯是否曾经战胜剑，也不是一种象征能否永远取代另一种象征。

它追问的是：在家庭、学校、经济、制度与历史叙事之中，我们选择不断复制怎样的关系？

我们究竟选择建立怎样的文明？`,
    researchLens: {
      title: "Editorial Reflection",
      titleZh: "编辑札记",
      citation: "This is an editorial summary based on Eisler’s partnership–domination framework, not a direct quotation from the author.",
      summaryEn: "Eisler’s central concern is not whether women should rule men, but whether human relationships can be organised without placing one group above another.",
      summaryZh: "艾斯勒真正关心的并不是女性是否应该统治男性，而是人类关系能否不再建立在一方高于另一方的等级之上。"
    },
    relatedWorks: [
      "The Chalice and the Blade",
      "Sacred Pleasure",
      "The Power of Partnership",
      "The Real Wealth of Nations",
      "Tomorrow’s Children",
      "Nurturing Our Humanity"
    ],
    tags: [
      "partnership",
      "domination",
      "feminism",
      "archaeology",
      "civilization",
      "history",
      "gender",
      "equality",
      "caregiving",
      "social change",
      "power",
      "cooperation"
    ],
    sourceText: "The Chalice and the Blade",
    sourceNote: "This entry is based primarily on the 1987 bibliographic record, the official HarperCollins book description, and Riane Eisler’s public explanations of the partnership–domination framework. The sections on prehistory are explicitly presented as Eisler’s interpretation rather than as uncontested archaeological fact. An unverified direct quotation from the earlier draft has been removed.｜本篇主要依据1987年初版书目信息、HarperCollins官方书籍介绍，以及瑞安·艾斯勒关于“伙伴体系—统治体系”的公开说明整理。有关史前社会的段落已明确写成艾斯勒的理论解释，而不是无争议的考古事实；原稿中无法确认出处的直接引文也已删除。",
    sources: [
      {
        label: "HarperCollins official book page",
        url: "https://www.harpercollins.com/products/the-chalice-and-the-blade-riane-eisler"
      },
      {
        label: "Riane Eisler partnership–domination framework",
        url: "https://rianeeisler.com/wp-content/uploads/2021/09/WPPartnershipDominatorDominationSocieties.pdf"
      },
      {
        label: "WorldCat bibliographic record",
        url: "https://search.worldcat.org/title/The-chalice-and-the-blade-%3A-our-history-our-future/oclc/15222627"
      },
      {
        label: "The Power of Partnership",
        url: "https://rianeeisler.com/the-power-of-partnership-seven-relationships-that-will-change-your-life/"
      }
    ],
    status: "published"
  },
  {
    id: "2026-07-21-sianne-ngai-our-aesthetic-categories",
    date: "2026-07-21",
    type: "essay",
    title: "Our Aesthetic Categories",
    titleZh: "《我们的审美范畴》",
    titleSeparator: " ",
    years: "Published 2010",
    role: "Essay｜论文",
    creator: "Sianne Ngai",
    creatorZh: "Sianne Ngai",
    focusTitle: "How Has Capitalism Changed Aesthetics?",
    focusTitleZh: "资本主义如何改变了审美？",
    summaryEn: "For centuries, aesthetics revolved around beauty and the sublime. Sianne Ngai argues that these are no longer the concepts through which we most often experience everyday life. Instead, contemporary culture is increasingly organised around three ordinary judgments: cute, interesting, and zany.",
    summaryZh: "几个世纪以来，美学始终围绕着“美”与“崇高”展开。Sianne Ngai认为，在当代生活中，我们真正不断使用的审美判断已经发生改变。今天，我们越来越通过三个普通的词理解世界：可爱（cute）、有趣（interesting）和疯癫（zany）。",
    introEn: `When people think about aesthetics, they often think about beauty. Since the eighteenth century, Western aesthetic theory has been shaped by concepts such as the beautiful and the sublime. Philosophers from Immanuel Kant onward asked why certain objects move us, how aesthetic judgment works, and whether beauty carries universal meaning.

Yet Sianne Ngai begins from a different observation. She notices that these are not the words people use most often in everyday life. Instead of constantly saying that something is beautiful or sublime, we are much more likely to describe it as cute, interesting, or zany.

Rather than dismissing these words as trivial, Ngai argues that they deserve serious theoretical attention. They are not merely casual expressions. They are aesthetic categories through which contemporary culture understands itself.

Together, these three categories form a new map of aesthetics. Instead of asking what art means in isolation, Ngai asks how aesthetic judgments reveal the structures of late capitalist life.

Ngai reminds us that aesthetic judgments are never merely personal preferences. When we describe something as cute, interesting, or zany, we are also describing how we work, consume, communicate, and relate to one another.

Perhaps the most important aesthetic question today is no longer: What is beautiful? But: What kinds of life do our aesthetic judgments make visible?`,
    introZh: `当人们谈论美学时，首先想到的往往是“美”。自十八世纪以来，西方美学理论一直围绕“美”与“崇高”等概念展开。从康德开始，哲学家不断追问：为什么某些事物会打动我们？审美判断如何发生？美是否具有普遍意义？

然而，Sianne Ngai 从另一个观察开始。她发现，人们在日常生活中其实很少不断说某件事“很美”或“很崇高”。相反，我们更常说的是：它很可爱、很有趣，或者很疯癫。

Ngai 并没有把这些词视为轻浮的口头表达。相反，她认为，它们正是当代文化理解自身的重要审美范畴，而值得严肃研究。

它们共同组成了一张新的审美地图。Ngai 不再孤立地讨论艺术意味着什么，而是追问：审美判断如何揭示晚期资本主义的社会结构。

Ngai 提醒我们，审美判断从来不仅仅是个人喜好。当我们说某件事“可爱”“有趣”或“疯癫”时，我们也在描述自己如何工作、消费、交流，以及如何与他人建立关系。

也许，今天最重要的美学问题已经不再是：什么是美？而是：我们的审美判断，让怎样的生活方式变得可见？`,
    theoryFramework: `focus: 当代文化中的日常审美判断：可爱、有趣与疯癫 / Everyday aesthetic judgments in contemporary culture: cute, interesting, and zany.
inherit: Ngai 并没有否定经典美学，而是在经典美学之上继续思考。她与康德、施莱格尔、本雅明、阿伦特、布迪厄、卡维尔以及詹明信等思想家对话，尤其继承康德的审美判断理论与詹明信关于晚期资本主义文化逻辑的分析。 / Ngai does not reject classical aesthetics; her essay is built upon it. She enters into conversation with thinkers such as Immanuel Kant, Friedrich Schlegel, Walter Benjamin, Hannah Arendt, Pierre Bourdieu, Stanley Cavell, and Fredric Jameson, especially inheriting Kantian aesthetic judgment and Jameson's Marxist analysis of late capitalist culture.
critique: Ngai 的批判指向传统美学与文学批评：为什么美学理论仍围绕美与崇高，而这些已经不是现代人最常使用的审美词汇？她也指出，当代批评常把作品化约为历史或意识形态的体现，却忽略了审美范畴本身如何在解释开始之前调节我们的感受。 / Ngai critiques both classical aesthetics and literary criticism: why do aesthetic theories continue to focus on beauty and the sublime when these are no longer the concepts people most frequently use? She also observes that contemporary criticism often reduces artworks to history or ideology while neglecting how aesthetic categories mediate experience before interpretation begins.
transform: Ngai 最重要的介入在于指出资本主义改变的不只是艺术，而是审美本身。工作越来越依赖表演与情感劳动，信息持续流通，消费塑造商品与身份；因此问题不再只是“它为什么美”，而是“这种审美表达了怎样的社会关系”。 / Ngai's key intervention is to argue that capitalism has transformed aesthetics itself. Work has become performative, information circulates constantly, and consumption shapes objects and identities; the question is no longer simply "Why is this beautiful?" but "What kind of social relation does this aesthetic express?"
propose: Ngai 提出三个理解当代社会的审美范畴：Cute 对应消费，Interesting 对应流通，Zany 对应生产。 / Ngai proposes three aesthetic categories for understanding contemporary life: cute as consumption, interesting as circulation, and zany as production.`,
    researchLens: {
      title: "Cute, Interesting, Zany",
      titleZh: "可爱、有趣、疯癫",
      citation: "Sianne Ngai, “Our Aesthetic Categories,” PMLA, Vol. 125, No. 4, October 2010, pp. 948–958.",
      summaryEn: `Cute is connected to consumption. It reflects our contradictory feelings toward small, vulnerable, and seemingly harmless objects. Cuteness invites affection, yet it may also encourage possession, control, or even aggression.

Interesting belongs to circulation. It emerges in a world saturated by information, communication, and endless commentary. To call something “interesting” often postpones judgment rather than completing it.

Zany belongs to production. It is the aesthetic of performance, frantic activity, multitasking, emotional labour, and exhausting flexibility. The zany body is always working, entertaining, adapting, and performing.`,
      summaryZh: `Cute（可爱）对应消费。它反映了人们面对脆弱、小巧、无害事物时复杂而矛盾的情感。可爱激发照护欲，却也可能伴随着占有、控制，甚至攻击。

Interesting（有趣）对应流通。它属于一个被信息、媒介与持续讨论充满的世界。说某件事“很有趣”，往往并不是结束判断，而是延迟判断，让讨论继续传播。

Zany（疯癫）对应生产。它是一种关于表演、忙碌、多工、情感劳动以及持续适应的审美。疯癫的人始终在工作、娱乐、协调与表演。`
    },
    relatedWorks: [
      "Our Aesthetic Categories (2010)",
      "Ugly Feelings (2005)",
      "Our Aesthetic Categories: Zany, Cute, Interesting (2012)",
      "Theory of the Gimmick (2020)"
    ],
    tags: [
      "aesthetics",
      "cultural theory",
      "literary criticism",
      "capitalism",
      "cute",
      "interesting",
      "zany",
      "affect",
      "labor",
      "consumption",
      "media",
      "everyday life"
    ],
    sourceText: "Our Aesthetic Categories",
    sourceNote: "This entry is based on Sianne Ngai’s essay “Our Aesthetic Categories,” published in PMLA, Vol. 125, No. 4, October 2010, pp. 948–958.｜本篇依据 Sianne Ngai 发表于《PMLA》2010年10月第125卷第4期、948–958页的论文《Our Aesthetic Categories》整理。",
    status: "published"
  },
  {
    id: "2026-07-22-annie-ernaux-simple-passion",
    date: "2026-07-22",
    type: "novel",
    personId: "annie-ernaux",

    title: "Simple Passion",
    titleZh: "《简单的激情》",

    author: "Annie Ernaux｜安妮·埃尔诺",
    years: "Published 1991",
    role: "Novel / Autofiction｜小说 / 自传体写作",

    focusTitle: "What Brings Us Closer to the World?",
    focusTitleZh: "是什么让我们更接近世界？",

    focusSentenceEn:
      "Some experiences end. The life they awaken does not.",
    focusSentenceZh:
      "有些经验会结束。它们唤醒的生命，不会。",

    summaryEn:
      "Simple Passion begins with an affair, but its deepest subject is not romance. Annie Ernaux records what happens when one experience reorganises time, sharpens the body, suspends judgment, and makes life feel unusually intense. The person at its centre may disappear. What remains is a newly awakened capacity to enter the world.",

    summaryZh:
      "《简单的激情》从一段情事开始，但它最深层的主题并不是爱情。安妮·埃尔诺记录了一种经验如何重新组织时间、唤醒身体、悬置判断，并让生命变得异常强烈。处于经验中心的人或许会消失，留下来的，却是一种重新进入世界的能力。",

    highlightEn:
      "What changes us is not always the person or event itself, but the life that becomes possible through it.",

    highlightZh:
      "真正改变我们的，未必是某个人或某件事本身，而是我们通过它所抵达的那种生命状态。",

    introduction: [
      {
        en: "Most of our lives are organised by habit. We wake, work, eat, sleep, and repeat. Then, sometimes, something interrupts that rhythm.",
        zh: "大多数时候，我们的生活由习惯组成。起床、工作、吃饭、睡觉，日复一日。但偶尔，会有某种经验闯入，打断原有的节奏。"
      },
      {
        en: "It rearranges time, the body, attention, and judgment. Ordinary life continues, yet everything is felt differently.",
        zh: "它重新安排时间、身体、注意力与判断。日常生活仍在继续，但一切都开始以不同的方式被感受。"
      },
      {
        en: "Annie Ernaux calls this interruption passion. In Simple Passion, passion is not simply desire for another person. It is a state in which life becomes radically alert.",
        zh: "安妮·埃尔诺把这种闯入称为激情。在《简单的激情》中，激情并不只是对另一个人的欲望，而是一种生命突然变得极度敏锐的状态。"
      },
      {
        en: "The man matters because he occasions this transformation. But the book finally exceeds him. Its real subject is the self that becomes capable of feeling more, risking more, and understanding more of what human beings can endure.",
        zh: "那个男人之所以重要，是因为他触发了这种变化。但这本书最终超越了他。它真正书写的，是一个人如何开始感受得更多、承担得更多，并理解人能够经历什么。"
      }
    ],

    sections: [
      {
        id: "passion-larger-than-love",
        title: "Passion Is Larger Than Love",
        titleZh: "激情比爱情更大",
        paragraphs: [
          {
            en: "At first, Simple Passion appears to describe a woman consumed by an affair. Her days revolve around a telephone call, a visit, an absence, and the possibility of return.",
            zh: "最初，《简单的激情》像是在描写一个被情事占据的女人。她的日子围绕一通电话、一次来访、一场缺席，以及重返的可能性展开。"
          },
          {
            en: "Yet Ernaux is not interested in turning this condition into a romance. She does not ask whether the man deserves such devotion, whether the relationship is healthy, or whether the narrator should have resisted it.",
            zh: "但埃尔诺并不打算把这种状态写成浪漫故事。她不追问那个男人是否值得，不判断这段关系是否健康，也不要求叙述者本应抵抗。"
          },
          {
            en: "Her attention is elsewhere: what does total absorption do to a life? What becomes visible when one experience occupies the whole field of perception?",
            zh: "她真正关注的是：一种彻底的投入会对生命做什么？当某种经验占据整个感知领域时，什么会因此显现？"
          },
          {
            en: "Passion, in this sense, is larger than love. It is concentration without remainder. The world is not erased; it is intensified, reorganised, and read through a single point of feeling.",
            zh: "在这个意义上，激情比爱情更大。它是一种毫无保留的专注。世界并没有消失，而是被增强、被重组，并从一个单一而强烈的感受点重新被阅读。"
          },
          {
            en: "The occasion might be a person. It might also be art, work, travel, faith, grief, political commitment, or a book. What matters is the force with which life is suddenly gathered into focus.",
            zh: "触发它的可以是一个人，也可以是艺术、工作、旅行、信仰、失去、政治投入，或一本书。真正重要的，是生命突然被聚拢、被照亮的强度。"
          }
        ]
      },
      {
        id: "different-experience-of-time",
        title: "A Different Experience of Time",
        titleZh: "另一种时间经验",
        paragraphs: [
          {
            en: "Passion first reveals itself by changing time. Hours no longer have equal weight. A day of waiting may feel endless; a brief encounter may contain an entire world.",
            zh: "激情最先通过改变时间显现出来。小时与小时不再拥有相同的重量。等待的一天可能漫长无尽，一次短暂的相见却可能容纳整个世界。"
          },
          {
            en: "The narrator does not experience time as a neutral sequence. She measures it through anticipation, bodily tension, memory, and return.",
            zh: "叙述者不再把时间经历为中性的连续过程。她通过期待、身体的紧绷、记忆与重返来丈量它。"
          },
          {
            en: "This is why the body becomes a clock. It knows before the mind does. It registers possibility, delay, danger, and absence long before thought can explain them.",
            zh: "因此，身体成为了一只钟。它总是先于理性知晓。它在思想能够解释之前，已经感受到可能、延迟、危险与缺席。"
          },
          {
            en: "To say that she measures time with her whole body is to say that life has ceased to be abstract. Time is no longer counted from outside; it is lived from within.",
            zh: "所谓用整个身体丈量时间，意味着生命不再抽象。时间不再从外部被计算，而是在内部被真正经历。"
          }
        ]
      },
      {
        id: "body-awakens",
        title: "The Body Awakens Before the Mind",
        titleZh: "身体先于思想醒来",
        paragraphs: [
          {
            en: "Ernaux’s writing refuses to separate feeling from the body that carries it. Passion appears in sleeplessness, clothing, rooms, gestures, appetite, anticipation, and the charged silence before a telephone rings.",
            zh: "埃尔诺拒绝把感受与承载感受的身体分开。激情出现在失眠、衣服、房间、动作、食欲、期待，以及电话响起前充满电流的沉默里。"
          },
          {
            en: "The body is not merely the site of desire. It is the instrument through which reality becomes more vivid.",
            zh: "身体不只是欲望发生的场所，也是现实变得更加鲜明的媒介。"
          },
          {
            en: "Under passion, ordinary objects acquire unusual force. A door, a street, a television programme, or a piece of music can become saturated with meaning.",
            zh: "在激情之中，普通事物获得了异常的力量。一扇门、一条街、一档电视节目或一段音乐，都可能被意义浸透。"
          },
          {
            en: "This heightened sensitivity is not necessarily pleasant. It can be humiliating, exhausting, and painful. But it is also evidence that the self has become radically available to experience.",
            zh: "这种高度敏感并不一定令人愉悦。它可能屈辱、疲惫，甚至痛苦。但它也证明，自我已经彻底向经验敞开。"
          }
        ]
      },
      {
        id: "beyond-dignity-and-judgment",
        title: "Beyond Dignity and Judgment",
        titleZh: "越过体面与判断",
        paragraphs: [
          {
            en: "One of the book’s most unsettling gestures is its refusal to preserve the narrator’s dignity. Ernaux does not edit experience into a version that will be easier to admire.",
            zh: "这本书最令人不安的动作之一，是它拒绝替叙述者保存体面。埃尔诺没有把经验修整成更容易被欣赏的版本。"
          },
          {
            en: "She writes the loss of self-command, the dependence, the repetition, and the thoughts she once considered absurd in other people.",
            zh: "她写下失去自我控制、依赖、反复，以及那些她曾经认为只会出现在别人身上的荒谬念头。"
          },
          {
            en: "This is not confession for its own sake. It is a method of knowledge. By refusing self-defence, she discovers that the distance between herself and others is smaller than she believed.",
            zh: "这并不是为了忏悔而忏悔，而是一种认识的方法。通过拒绝为自己辩护，她发现自己与他人之间的距离，比她曾以为的更小。"
          },
          {
            en: "She comes to understand that human beings are capable of almost anything: sublimity, degradation, irrational hope, fatal attachment, and astonishing endurance.",
            zh: "她开始理解，人几乎什么都能够做：高尚、堕落、非理性的希望、致命的依恋，以及惊人的承受。"
          },
          {
            en: "Passion therefore becomes ethical as well as personal. It destroys the comfort of standing outside other people’s lives and judging them from a safe distance.",
            zh: "因此，激情不仅是一种私人经验，也具有伦理意义。它摧毁了那种站在他人的生命之外、从安全距离进行判断的舒适。"
          }
        ]
      },
      {
        id: "closer-to-other-people",
        title: "Closer to Other People",
        titleZh: "更接近他人",
        paragraphs: [
          {
            en: "The book’s deepest movement is not toward possession, but toward recognition. The narrator does not finally gain the man. She gains access to forms of vulnerability she had previously observed only from the outside.",
            zh: "这本书最深的运动，并不是走向占有，而是走向理解。叙述者最终并没有得到那个男人，却进入了她过去只能从外部观看的脆弱经验。"
          },
          {
            en: "Once she has waited, submitted, hoped, and lost judgment herself, the behaviour of others no longer appears merely ridiculous.",
            zh: "当她亲自等待、屈从、希望，并失去判断之后，别人的行为便不再只是荒谬。"
          },
          {
            en: "Experience breaks the frontier between the self and the lives of strangers. It gives her not a theory of humanity, but an embodied knowledge of it.",
            zh: "经验打破了自我与陌生人生命之间的边界。它给予她的并不是一套关于人的理论，而是一种身体化的认识。"
          },
          {
            en: "To be brought closer to the world is, here, to lose the illusion that one is exempt from the extremities of human feeling.",
            zh: "在这里，被带得更接近世界，意味着失去一种幻觉：以为自己可以置身于人类情感的极端之外。"
          }
        ]
      },
      {
        id: "closer-to-the-world",
        title: "Closer to the World",
        titleZh: "更接近世界",
        paragraphs: [
          {
            en: "The sentence ‘Without knowing it, he brought me closer to the world’ appears to be about a man. Yet its force lies in how quickly it exceeds him.",
            zh: "“他并不知道，他将我和世界更加紧密地联系在了一起”这句话看似关于一个男人，但它的力量恰恰在于，它迅速超越了他。"
          },
          {
            en: "He is the occasion, not the final meaning. Through the experience attached to him, the narrator enters time, the body, humiliation, longing, and the lives of others more fully than before.",
            zh: "他是触发经验的契机，却不是最终的意义。通过与他相连的这段经验，叙述者比从前更深地进入时间、身体、屈辱、渴望，以及他人的生命。"
          },
          {
            en: "The ‘he’ could almost be replaced by anything capable of awakening a life. What matters is not the identity of the source, but the transformation it makes possible.",
            zh: "这个“他”几乎可以被任何能够唤醒生命的事物替代。真正重要的，不是源头的身份，而是它所促成的变化。"
          },
          {
            en: "What disappears is the occasion. What remains is the life it awakened.",
            zh: "消失的只是那次相遇。留下来的，是它唤醒的生命。"
          }
        ]
      },
      {
        id: "what-writing-preserves",
        title: "What Writing Preserves",
        titleZh: "写作保存了什么",
        paragraphs: [
          {
            en: "Ernaux does not write in order to preserve a relationship intact. She knows that memory alters, distance grows, and the person who once occupied everything will eventually become remote.",
            zh: "埃尔诺写作，并不是为了完整保存一段关系。她知道记忆会改变，距离会增长，那个曾经占据一切的人终将变得遥远。"
          },
          {
            en: "What writing can preserve is not the event itself, but its pressure on a life: the way it changed perception, exposed vulnerability, and opened a passage toward others.",
            zh: "写作能够保存的，并不是事件本身，而是它施加在生命上的压力：它如何改变感知、暴露脆弱，又如何打开一条通向他人的路径。"
          },
          {
            en: "She is not preserving him. She is preserving a state of being.",
            zh: "她保存的不是他，而是一种存在状态。"
          },
          {
            en: "The passion ends. The occasion recedes. But the capacity for aliveness that emerged through it becomes part of what the self now knows.",
            zh: "激情会结束，契机会退远。但那种从经验中浮现的鲜活能力，已经成为自我所知的一部分。"
          },
          {
            en: "Some experiences end. The life they awaken does not.",
            zh: "有些经验会结束。它们唤醒的生命，不会。"
          }
        ]
      }
    ],

    quotesTitle: "Selected Passages",
    quotesTitleZh: "书中引文",

    quotes: [
      {
        en: "Whether or not he was \"worth it\" is of no consequence. And the fact that all this is gradually slipping away from me, as if it concerned another woman, does not change this one truth: thanks to him, I was able to approach the frontier separating me from others, to the extent of actually believing that I could sometimes cross over it.",
        zh: "他是否“值得”显然已经没有任何意义。即便这一切已经开始变得陌生，如同是另一个女人的故事，也不会改变一点：多亏了他，我接近了把我与他人分隔开来的边界，以至于有时我甚至想过穿越这一边界。"
      },
      {
        en: "I measured time differently, with all my body.",
        zh: "我用另一种方式丈量时间，用我的身体。"
      },
      {
        en: "I discovered what people are capable of, in other words, anything: sublime or deadly desires, lack of dignity, attitudes and beliefs I had found absurd in others until I myself turned to them. Without knowing it, he brought me closer to the world.",
        zh: "我发现了我们所能做的，换句话说，我们什么都能做。高尚的或致命的欲望，自尊的泯灭，信仰和行为，在他人那里我曾认为这些都很荒谬，直到我也转向他们。他并不知道，他将我和世界更加紧密地联系在了一起。"
      },
      {
        en: "He had said, \"You won't write a book about me.\" But I haven't written a book about him, neither have I written a book about myself. All I have done is translate into words—words he will probably never read; they are not intended for him—the way in which his existence has affected my life. An offering of a sort, bequeathed to others.",
        zh: "他曾经对我说过，“你不要写关于我的书”。但是我写的不是关于他的书，甚至不是关于我的书。我只是用文字——也许他不会读到，而且也不是写给他的——将关于他的存在，将只是通过他的存在带给我的东西还原出来。在某种程度上是一份保留下来的礼物。"
      },
      {
        en: "When I was a child, luxury was fur coats, evening dresses, and villas by the sea. Later on, I thought it meant leading the life of an intellectual. Now I feel that it is also being able to live out a passion for a man or a woman.",
        zh: "小的时候，在我看来，奢侈品是毛皮大衣，是长裙，是海边的别墅。后来，我又觉得是一种知识分子的生活。而现在，我觉得是可以对某个男人或者女人抱有一种激情。"
      }
    ],

    relatedWorks: [
      {
        title: "Getting Lost",
        titleZh: "《迷失》",
        relationEn:
          "The diary written during the affair, revealing the raw duration behind the distilled form of Simple Passion.",
        relationZh:
          "记录这段情事期间的日记，呈现《简单的激情》凝练形式背后未经提炼的漫长时间。"
      },
      {
        title: "The Years",
        titleZh: "《悠悠岁月》",
        relationEn:
          "Another Ernaux work in which private memory becomes a passage into collective life.",
        relationZh:
          "埃尔诺另一部把私人记忆转化为通往集体生活之入口的作品。"
      },
      {
        title: "Happening",
        titleZh: "《事件》",
        relationEn:
          "A work about recovering an embodied experience that social judgment had pushed into silence.",
        relationZh:
          "一部重新追索被社会判断压入沉默的身体经验之作。"
      },
      {
        title: "A Woman's Story",
        titleZh: "《一个女人的故事》",
        relationEn:
          "A study of how writing can preserve a life without turning it into sentimentality.",
        relationZh:
          "探讨写作如何保存一个人的生命，同时拒绝把它变成感伤叙事。"
      }
    ],

    tags: [
      "passion",
      "vitality",
      "intensity",
      "time",
      "memory",
      "body",
      "attention",
      "experience",
      "vulnerability",
      "connection",
      "autofiction",
      "women's writing"
    ],

    status: "published"
  },
  {
    id: "2026-07-23-eva-illouz-why-love-hurts",
    date: "2026-07-23",
    type: "theory",
    title: "Why Love Hurts: A Sociological Explanation",
    titleZh: "《爱，为什么痛？》",
    author: "Eva Illouz｜伊娃·易洛思",
    years: "Published 2012",
    role: "Theory / Sociology｜理论 / 社会学",
    focusTitle: "Why Does Freedom Also Make Love Hurt?",
    focusTitleZh: "为什么自由也会让爱变得更痛？",
    summaryEn:
      "We often experience romantic suffering as evidence that something is wrong with us. We search our childhood, personality, appearance, and past decisions for an explanation. Eva Illouz asks us to look beyond the private self. The pain of modern love is also produced by the social conditions under which people desire, choose, compare, and commit to one another.",
    summaryZh:
      "我们常把爱情中的痛苦理解为自身出了问题。我们从童年、性格、外貌和过去的选择中寻找原因。伊娃·易洛思却邀请我们把目光移出私人自我：现代爱情的痛苦，也产生于人们学习欲望、选择、比较与承诺的社会条件之中。",
    highlightEn:
      "Love may feel entirely personal. Yet the conditions under which we love are social.",
    highlightZh:
      "爱情或许是一种极其私人的感受，但我们如何去爱，始终受到社会条件的塑造。",
    introduction: [
      {
        en: "Heartbreak is usually narrated in the first person. Why was I rejected? Why was I not enough? Why did I choose the wrong person? Contemporary culture encourages us to answer these questions through psychology: perhaps we are emotionally damaged, afraid of intimacy, or repeating patterns learned in childhood.",
        zh: "心碎通常以第一人称被讲述：为什么我被拒绝？为什么我不够好？为什么我选择了错误的人？当代文化往往引导我们从心理层面寻找答案：也许我们曾经受过伤，也许我们害怕亲密，也许我们正在重复童年形成的模式。"
      },
      {
        en: "Illouz does not deny that personal history matters. But she argues that psychological explanations become misleading when they hide the institutions, markets, gender relations, and cultural ideals that organise intimate life.",
        zh: "易洛思并不否认个人经历的重要性。但她指出，当心理解释遮蔽了组织亲密生活的制度、市场、性别关系与文化理想时，它就会误导我们。"
      },
      {
        en: "Her question is therefore not simply why a particular relationship failed. It is why uncertainty, self-doubt, unequal commitment, and disappointment have become recurring features of modern love.",
        zh: "因此，她所追问的并不只是某一段关系为何失败，而是：为什么不确定、自我怀疑、不平等的承诺与失望，会成为现代爱情中反复出现的经验？"
      }
    ],
    sections: [
      {
        id: "romantic-freedom",
        title: "Romantic Freedom Has a History",
        titleZh: "浪漫自由也有它的历史",
        paragraphs: [
          {
            en: "Modern love is built around ideals that earlier societies did not organise in quite the same way: individual freedom, emotional authenticity, sexual autonomy, and the right to choose one’s own partner.",
            zh: "现代爱情建立在一些过去的社会并未以相同方式组织的理想之上：个人自由、情感真实、性自主，以及自行选择伴侣的权利。"
          },
          {
            en: "These freedoms were historically significant, especially for women. They weakened the authority of family, religion, and community over marriage. Yet liberation did not remove power from intimate life. It reorganised it.",
            zh: "这些自由具有重要的历史意义，尤其对女性而言。它们削弱了家庭、宗教与共同体对婚姻的支配。但解放并没有让权力从亲密关系中消失，而是重新组织了权力。"
          },
          {
            en: "Once partners must be freely chosen, the question of who is desirable, who has more options, and who can define the terms of a relationship becomes increasingly consequential.",
            zh: "当伴侣必须通过自由选择产生时，谁更有吸引力、谁拥有更多选择，以及谁有能力决定关系的条件，便变得越来越重要。"
          },
          {
            en: "Freedom expands the possibility of love. It also makes the social inequalities hidden inside choice more difficult to see.",
            zh: "自由扩大了爱情的可能性，却也让隐藏在“选择”之中的社会不平等更难被察觉。"
          }
        ]
      },
      {
        id: "marriage-markets",
        title: "The Emergence of Marriage Markets",
        titleZh: "婚姻市场如何形成",
        paragraphs: [
          {
            en: "Illouz describes modern partner selection as taking place within a market-like structure. This does not mean that people literally purchase one another, or that love is unreal. It means that potential partners meet within fields organised by competition, comparison, scarcity, and unequal forms of value.",
            zh: "易洛思将现代伴侣选择描述为一种类似市场的结构。这并不是说人们真的在购买彼此，也不是说爱情并不真实，而是说：潜在伴侣相遇的场域受到竞争、比较、稀缺与不平等价值的组织。"
          },
          {
            en: "Appearance, education, class, income, cultural competence, sexuality, and lifestyle can all become criteria through which people are evaluated.",
            zh: "外貌、教育、阶级、收入、文化能力、性吸引力与生活方式，都可能成为人们评价彼此的标准。"
          },
          {
            en: "The language of romantic freedom suggests that everyone chooses as an autonomous individual. Yet choices are never made on equal ground. Some people possess more social, sexual, or economic resources and therefore have greater power to attract, delay, compare, or refuse.",
            zh: "浪漫自由的语言仿佛意味着，每个人都作为自主个体进行选择。但选择从来不是在平等的基础上发生的。有些人拥有更多社会、性或经济资源，因此也拥有更大的吸引、拖延、比较或拒绝他人的能力。"
          },
          {
            en: "Love circulates through a social world in which not everyone has the same power to determine how they will be loved.",
            zh: "爱情流通于一个并不平等的社会世界。在这个世界里，并不是每个人都同样有能力决定自己将以何种方式被爱。"
          }
        ]
      },
      {
        id: "choice-and-uncertainty",
        title: "Too Much Choice, Too Little Certainty",
        titleZh: "选择越多，确定反而越困难",
        paragraphs: [
          {
            en: "Modern romantic choice is expected to be both free and correct. We are asked not only to find someone, but to identify the person who best satisfies an expanding list of emotional, intellectual, sexual, and social expectations.",
            zh: "现代爱情要求我们的选择既自由又正确。我们不仅要找到一个人，还要从不断扩张的情感、智识、性与社会标准中，辨认出最适合自己的那个人。"
          },
          {
            en: "But an abundance of possibilities can make commitment harder rather than easier. Every choice preserves the thought of alternatives: perhaps someone more compatible, more attractive, or more fulfilling remains elsewhere.",
            zh: "然而，可能性的增加未必让承诺变得更容易。每一次选择都保留着对其他可能的想象：也许在别处，还有一个更合适、更有吸引力，或更能满足自己的人。"
          },
          {
            en: "The problem is not simply that modern people are selfish or immature. The very architecture of choice encourages comparison, evaluation, and the postponement of final decisions.",
            zh: "问题并不只是现代人更加自私或不成熟。选择本身的结构就在鼓励比较、评估，以及对最终决定的不断延迟。"
          },
          {
            en: "Commitment becomes difficult when freedom is understood as the permanent preservation of options.",
            zh: "当自由被理解为永远保留其他选项时，承诺便会变得格外困难。"
          }
        ]
      },
      {
        id: "commitment-and-power",
        title: "Commitment Is Also a Question of Power",
        titleZh: "承诺也是一个权力问题",
        paragraphs: [
          {
            en: "Illouz treats commitment not only as a feeling, but as a social act. To commit is to reduce one’s alternatives, bind one’s future to another person, and accept a measure of dependence.",
            zh: "易洛思并不只把承诺视为一种感受，也把它视为一种社会行动。承诺意味着减少自己的其他选择，把未来与另一个人联系起来，并接受一定程度的依赖。"
          },
          {
            en: "The person who can remain uncertain, delay definition, or withdraw emotional investment often occupies the stronger position. The person who waits for clarity bears more of the anxiety.",
            zh: "能够保持不确定、推迟定义关系或撤回情感投入的人，往往处于更有力量的位置；而等待明确答案的人，则承担了更多焦虑。"
          },
          {
            en: "In the heterosexual relationships analysed in the book, Illouz argues that sexual freedom continued to operate within persistent gender inequalities. Men and women did not necessarily enter the romantic field with the same opportunities, expectations, or consequences.",
            zh: "在书中分析的异性恋关系里，易洛思认为，性自由依然运行于持续存在的性别不平等之中。男性与女性进入爱情场域时，未必拥有相同的机会、期待与后果。"
          },
          {
            en: "She uses the term “emotional inequality” to describe structures in which one group has a greater capacity to withhold emotion or avoid commitment, while another is more likely to seek continuity and recognition through the relationship.",
            zh: "她使用“情感不平等”一词，描述这样一种结构：一方拥有更大的能力撤回情感或回避承诺，另一方则更可能通过关系寻求持续性与承认。"
          },
          {
            en: "This is not a universal description of every man, woman, or relationship. It is an account of patterned inequalities within the particular heterosexual field the book examines.",
            zh: "这并不是对每一个男人、女人或每一段关系的普遍判断，而是对本书所研究的特定异性恋场域中，反复出现的结构性不平等的分析。"
          }
        ]
      },
      {
        id: "recognition",
        title: "Why Being Loved Feels Like Proof of Our Worth",
        titleZh: "为什么被爱会成为自我价值的证明？",
        paragraphs: [
          {
            en: "In modern societies, identity is expected to come from within. We are told to know our worth independently of other people’s judgment. Yet our sense of value remains deeply dependent on recognition.",
            zh: "现代社会要求身份来自内在。我们被告知，应当独立于他人的判断确认自己的价值。然而，我们的价值感依然深深依赖他人的承认。"
          },
          {
            en: "Romantic love has become one of the most powerful sites where this recognition is sought. To be chosen by someone desirable can feel like confirmation that we ourselves are valuable.",
            zh: "浪漫爱情已经成为人们寻求承认的最重要场域之一。被一个具有吸引力的人选择，可能让我们觉得，自己的价值也因此获得了确认。"
          },
          {
            en: "For this reason, rejection rarely feels like the loss of a single possibility. It can be experienced as a judgment on the whole self.",
            zh: "正因如此，被拒绝很少只意味着失去一种可能。它可能被体验为对整个自我的判决。"
          },
          {
            en: "We do not merely ask, “Why did this relationship end?” We ask, “What does its ending reveal about me?”",
            zh: "我们不仅会问：“这段关系为什么结束？”还会问：“它的结束说明了我是一个怎样的人？”"
          },
          {
            en: "The modern self is required to appear autonomous, yet love makes visible how dependent self-worth remains on the gaze and choice of others.",
            zh: "现代自我被要求表现得自主独立，但爱情却揭示了：我们的价值感依然多么依赖他人的目光与选择。"
          }
        ]
      },
      {
        id: "rationalised-passion",
        title: "Passion Has Been Rationalised",
        titleZh: "激情如何被理性化",
        paragraphs: [
          {
            en: "Modern culture celebrates intense feeling, but it also asks us to examine, manage, and justify it. We assess compatibility, identify emotional needs, establish boundaries, calculate risks, and look for warning signs.",
            zh: "现代文化一方面赞美强烈的情感，另一方面又要求我们审视、管理并证明这些情感的合理性。我们评估契合度、辨认情感需求、设定边界、计算风险，并寻找危险信号。"
          },
          {
            en: "Illouz does not argue that reason has simply destroyed passion. Her subtler claim is that rationality now works from inside emotional life.",
            zh: "易洛思并不是简单地认为理性摧毁了激情。她更细致的观点是：理性如今从情感生活的内部发挥作用。"
          },
          {
            en: "We are expected to feel spontaneously and, at the same time, to monitor whether those feelings are healthy, reciprocal, efficient, and compatible with our long-term interests.",
            zh: "我们既被要求自发地感受，又必须持续监控这些感受是否健康、互惠、有效，以及是否符合自身的长期利益。"
          },
          {
            en: "Love is therefore caught between surrender and self-protection. We are invited to lose ourselves in feeling, while remaining sufficiently detached to evaluate it.",
            zh: "因此，爱情被置于投入与自我保护之间。我们被邀请沉浸于情感，同时又必须保持足够的距离，对它进行评估。"
          },
          {
            en: "This tension can produce irony: we desire belief in love, yet remain suspicious of our own desire to believe.",
            zh: "这种张力会产生一种反讽：我们渴望相信爱情，却又怀疑自己为何如此渴望相信。"
          }
        ]
      },
      {
        id: "romantic-imagination",
        title: "Romantic Imagination and Disappointment",
        titleZh: "浪漫想象如何制造失望",
        paragraphs: [
          {
            en: "Love never begins with two people alone. It also begins with stories, images, songs, films, advertisements, memories, and fantasies about what love should feel like.",
            zh: "爱情从来不只始于两个人。它也始于故事、图像、歌曲、电影、广告、记忆，以及关于爱情应当是什么感觉的幻想。"
          },
          {
            en: "Modern consumer culture does not merely sell objects. It provides scenes in which intimacy can be imagined: travel, beauty, privacy, luxury, transformation, and escape from ordinary life.",
            zh: "现代消费文化出售的并不只是物品，也提供了想象亲密关系的场景：旅行、美、私密、奢华、改变，以及对日常生活的逃离。"
          },
          {
            en: "These images give desire a form before a real relationship has begun. We may therefore compare lived intimacy not only with other possible partners, but with an imagined emotional experience.",
            zh: "在真实关系开始之前，这些图像就已经赋予欲望某种形式。因此，我们不仅会把眼前的伴侣与其他可能对象比较，也会把实际的亲密关系与想象中的情感经验比较。"
          },
          {
            en: "Disappointment emerges from the distance between the intensity promised by fantasy and the unevenness of ordinary life.",
            zh: "失望便产生于两者之间的距离：一边是幻想所承诺的强烈体验，另一边是普通生活不可避免的琐碎与不均衡。"
          },
          {
            en: "The problem is not that imagination is false. It is that imagination has become institutionalised, repeated, and connected to systems of consumption that continually renew longing.",
            zh: "问题不在于想象是虚假的，而在于想象已经被制度化、被反复复制，并与不断更新欲望的消费体系联系在一起。"
          }
        ]
      },
      {
        id: "sociological-question",
        title: "Sociology Changes the Question",
        titleZh: "社会学改变了我们提问的方式",
        paragraphs: [
          {
            en: "Illouz does not claim that social analysis can make love painless. Nor does she argue that every failed relationship is caused by capitalism, patriarchy, or the abundance of choice.",
            zh: "易洛思并不认为社会分析能够让爱情从此不再痛苦，也没有把每一段失败的关系都简单归因于资本主义、父权制或选择过剩。"
          },
          {
            en: "Her intervention is more precise: experiences that feel uniquely personal often follow social patterns. Our most intimate emotions are shaped by institutions and histories that existed before us.",
            zh: "她的介入更加准确：那些看起来只属于个人的经验，往往遵循着社会模式。我们最私密的情感，也受到早于我们存在的制度与历史塑造。"
          },
          {
            en: "This recognition does not erase responsibility. But it interrupts the habit of interpreting every wound as proof of a defective self.",
            zh: "这种认识并不会消除个人责任，却能够打断一种习惯：不再把每一道伤口都解释为自我存在缺陷的证据。"
          },
          {
            en: "Instead of asking only, “What is wrong with me?”, we can also ask, “What kind of social world has made this pain so common?”",
            zh: "我们不再只问“是不是我出了问题？”，也可以进一步问：“是什么样的社会世界，让这种痛苦变得如此普遍？”"
          },
          {
            en: "The question shifts from private failure to shared conditions.",
            zh: "问题由个人失败，转向了共同的社会条件。"
          },
          {
            en: "And sometimes, understanding that difference is the beginning of treating ourselves with greater clarity—and less shame.",
            zh: "有时，理解这一差别，正是我们更清醒地看待自己，并减少羞耻感的开始。"
          }
        ]
      },
      {
        id: "closing",
        title: "Closing Thought",
        titleZh: "结语",
        paragraphs: [
          {
            en: "Romantic pain is lived by individuals, but it is not produced by individuals alone.",
            zh: "爱的痛苦由个人亲身承受，却从来不只由个人制造。"
          }
        ]
      }
    ],
    quote: "My aim is to do to love what Marx did to commodities.",
    quoteSource:
      "Eva Illouz, Why Love Hurts, Chapter 1｜伊娃·易洛思，《爱，为什么痛？》，第1章",
    quoteReadingEn:
      "This sentence summarises the book’s sociological method. Illouz examines love as something shaped by concrete social relations, circulated within unequal fields, and experienced by people who do not possess equal power to define the terms under which they are loved.",
    quoteReadingZh:
      "这句话概括了全书的社会学方法：易洛思把爱情视为一种由具体社会关系塑造的经验。它流通于不平等的场域之中，而身处其中的人，并不拥有同等的能力决定自己将在何种条件下被爱。",
    relatedWorks: [
      "Eva Illouz, Cold Intimacies: The Making of Emotional Capitalism｜《冷亲密：情感资本主义的形成》",
      "Eva Illouz, Consuming the Romantic Utopia｜《消费浪漫乌托邦》",
      "Eva Illouz, The End of Love｜《爱的终结》",
      "Arlie Russell Hochschild, The Managed Heart｜《心灵的整饰》",
      "bell hooks, All About Love｜《关于爱的一切》"
    ],
    tags: [
      "love",
      "sociology",
      "romantic freedom",
      "choice",
      "recognition",
      "commitment",
      "emotional inequality",
      "gender",
      "capitalism",
      "imagination"
    ],
    sourceText: "Why Love Hurts",
    sourceNote:
      "This entry was rewritten and verified against Eva Illouz, Why Love Hurts: A Sociological Explanation, Polity Press, 2012. The chapter references follow the uploaded edition. Except for the explicitly marked verified passage, all sentences are editorial summaries rather than direct quotations.｜本篇依据伊娃·易洛思《爱，为什么痛？：一种社会学解释》2012年Polity版本重写并核实。章节标注依据上传版本。除明确标出的核实引文外，其余内容均为编辑性概括，并非作者原句。",
    status: "published"
  },
  {
    id: "2026-07-24-women-in-the-picture",
    date: "2026-07-24",
    type: "book",
    title: "Who Gets to Look?",
    titleZh: "谁拥有观看的权力？",
    author: "Catherine McCormack｜凯瑟琳·麦考马克",
    role: "Art History / Feminist Criticism｜艺术史 / 女性主义批评",
    focusTitle: "Who Gets to Look?",
    focusTitleZh: "谁拥有观看的权力？",
    summaryEn:
      "Pictures do more than represent women. They also teach us what kinds of women deserve admiration, sympathy, fear, or silence.",
    summaryZh:
      "图像不仅描绘女性。它们也教会我们：哪些女性值得赞美，哪些女性值得同情，哪些女性令人恐惧，又有哪些女性应该保持沉默。",
    highlightEn: "Every image teaches a way of seeing.",
    highlightZh: "每一幅图像，都在教会我们一种观看世界的方式。",
    introduction: [
      {
        en: "Women in the Picture begins with a visit to the National Gallery in London. Walking through the museum with her young child, Catherine McCormack notices that the paintings around her tell remarkably similar stories about women.",
        zh: "《画框中的女性》从作者带着年幼孩子参观伦敦国家美术馆开始。凯瑟琳·麦考马克发现，展厅里的绘画不断重复着相似的女性故事。"
      },
      {
        en: "Again and again, women appear as objects of beauty, desire, sacrifice, punishment, grief, or death. The book asks what we have learned from seeing such images repeated across centuries.",
        zh: "女性一次又一次以美丽、欲望、牺牲、惩罚、悲伤或死亡的形象出现。这本书追问：当这些图像在数个世纪中反复出现时，我们究竟从中学会了什么？"
      }
    ],
    sections: [
      {
        id: "looking-is-never-neutral",
        title: "Looking Is Never Neutral",
        titleZh: "观看从来不是中立的",
        paragraphs: [
          {
            en: "Every image carries assumptions about gender, power, beauty, virtue, and violence. Looking is not simply a private act between a viewer and an artwork; it is shaped by habits, institutions, and inherited cultural expectations.",
            zh: "每一幅图像都携带着关于性别、权力、美、德性与暴力的观念。观看并不只是观者与作品之间的私人行为，它也受到习惯、制度与文化传统的塑造。"
          },
          {
            en: "Museums do not simply preserve paintings. They also preserve ways of seeing.",
            zh: "美术馆保存的不只是绘画，也保存了一种观看方式。"
          }
        ]
      },
      {
        id: "beautiful-suffering",
        title: "Beautiful Suffering",
        titleZh: "被美化的受苦",
        paragraphs: [
          {
            en: "Across centuries of Western art, women repeatedly appear within similar narratives. Some are praised for obedience, some are punished for desire, some are admired in moments of vulnerability, while others are remembered through violence done to their bodies.",
            zh: "纵观数个世纪的西方艺术，女性不断出现在相似的叙事之中。有些女性因顺从而受到赞美，有些因欲望而受到惩罚；有些在脆弱时刻被欣赏，而另一些则因身体遭受暴力而被历史记住。"
          },
          {
            en: "Figures such as Griselda, Lucretia, Susanna, and Procris are not isolated examples. Together, they reveal a recurring cultural pattern in which female suffering is transformed into moral virtue, emotional drama, or aesthetic beauty.",
            zh: "格里塞尔达、卢克丽霞、苏珊娜与普罗克里斯并不是彼此孤立的例子。她们共同揭示了一种反复出现的文化模式：女性的受苦被转化为道德美德、情感戏剧，甚至审美对象。"
          }
        ]
      },
      {
        id: "museum-story",
        title: "The Museum Is Also a Story",
        titleZh: "美术馆也是一种叙事",
        paragraphs: [
          {
            en: "The meaning of an artwork is shaped not only by what is painted, but also by where it is displayed, how it is named, what the label explains, and which works are placed beside it.",
            zh: "一件作品的意义不仅由画面内容决定，也由它被陈列在哪里、如何命名、标签如何解释，以及哪些作品与它并置共同塑造。"
          },
          {
            en: "A museum tells two stories at once: the story inside the image, and the story of why this image continues to be displayed, admired, and remembered.",
            zh: "每一座美术馆都同时讲述两个故事：一个发生在图像之中，另一个则关于为什么这幅图像会一直被展出、被欣赏、被记住。"
          }
        ]
      },
      {
        id: "explanation-power",
        title: "Who Gets to Explain?",
        titleZh: "谁拥有解释权？",
        paragraphs: [
          {
            en: "One of the book's most revealing moments occurs when a stranger begins explaining the artworks to McCormack without invitation. The encounter is ordinary, but it exposes how authority over interpretation is reproduced through everyday behaviour.",
            zh: "本书最具揭示性的场景之一，是一位陌生人在未经邀请的情况下开始向麦考马克解释作品。这个场景看似普通，却暴露了解释权如何在日常行为中被不断复制。"
          },
          {
            en: "The question 'Who gets to look?' therefore leads to another: who is assumed to possess the knowledge and confidence to tell others what they are seeing?",
            zh: "因此，“谁拥有观看的权力？”也引出了另一个问题：谁被默认拥有知识与自信，能够告诉别人他们正在看什么？"
          }
        ]
      },
      {
        id: "look-again",
        title: "Learning to Look Again",
        titleZh: "学会重新观看",
        paragraphs: [
          {
            en: "Women in the Picture does not ask us to stop looking at canonical art. It asks us to notice what centuries of looking have trained us to accept as natural.",
            zh: "《画框中的女性》并没有要求我们停止观看经典艺术。它要求我们意识到，数个世纪的观看已经把哪些观念训练成了理所当然。"
          },
          {
            en: "To look again is not to reject art. It is to recover the stories that art has taught us not to see.",
            zh: "重新观看，并不是拒绝艺术，而是重新看见那些艺术曾经教会我们忽略的故事。"
          }
        ]
      }
    ],
    relatedWorks: [
      "Women in the Picture: What Culture Does with Female Bodies",
      "Katy Hessel, The Story of Art Without Men",
      "John Berger, Ways of Seeing",
      "Rozsika Parker and Griselda Pollock, Old Mistresses: Women, Art and Ideology",
      "Griselda Pollock, Vision and Difference"
    ],
    tags: [
      "art history",
      "representation",
      "museums",
      "looking",
      "women",
      "feminist criticism",
      "visual culture",
      "gender",
      "power",
      "images"
    ],
    sourceText: "Women in the Picture",
    sourceNote: "This entry is based on Catherine McCormack’s Women in the Picture: What Culture Does with Female Bodies.｜本篇依据 Catherine McCormack《画框中的女性》整理。",
    status: "published"
  },
  {
    id: "2026-07-25-rebecca-traister-good-and-mad",
    date: "2026-07-25",
    type: "theory",
    title: "Good and Mad: The Revolutionary Power of Women’s Anger",
    titleZh: "《好不愤怒：女性愤怒的革命力量》",
    author: "Rebecca Traister｜丽贝卡·特雷斯特",
    years: "Published 2018",
    role: "Theory / Feminism｜理论 / 女性主义",
    focusTitle: "Who Gets to Be Angry?",
    focusTitleZh: "谁有资格愤怒？",
    summaryEn:
      "Some emotions are treated as signs of authority. Others are treated as signs of instability. Rebecca Traister asks why anger has so often strengthened men’s authority while undermining women’s credibility. Rather than seeing women’s anger as a personal failing, she argues that it can reveal structures of inequality that have long been ignored.",
    summaryZh:
      "有些情绪会被理解为权威的象征，有些情绪却会被理解为失控的证据。丽贝卡·特雷斯特追问：为什么愤怒常常强化男性的权威，却削弱女性的可信度？她认为，女性的愤怒并不是一种个人缺陷，而是一种揭示长期不平等结构的力量。",
    highlightEn:
      "Anger does not always destroy relationships. Sometimes, it destroys silence.",
    highlightZh:
      "愤怒未必摧毁关系。它有时摧毁的是沉默。",
    introduction: [
      {
        en: "Anger is one of the most common human emotions, yet not everyone is allowed to express it in the same way.",
        zh: "愤怒是人类最普遍的情绪之一，但并不是每个人都被允许以同样的方式表达它。"
      },
      {
        en: "When men display anger, it is often interpreted as confidence, conviction, or leadership. When women display the same emotion, it is more likely to be described as irrational, emotional, unstable, or unlikeable.",
        zh: "当男性表现出愤怒时，人们往往将它理解为自信、坚定或领导力；而当女性表现出同样的情绪时，它却更容易被描述为不理性、情绪化、不稳定，甚至“不讨人喜欢”。"
      },
      {
        en: "Rebecca Traister argues that this difference is not accidental. It reflects a long history in which women’s anger has been discouraged, dismissed, or punished rather than understood.",
        zh: "丽贝卡·特雷斯特认为，这种差异并非偶然，而是长期历史的结果：女性的愤怒不断被压抑、忽视或惩罚，而不是被理解。"
      }
    ],
    sections: [
      {
        id: "anger-is-political",
        title: "Anger Is Political",
        titleZh: "愤怒从来不是私人情绪",
        paragraphs: [
          {
            en: "Good and Mad begins from a simple observation: women have always been angry. What changes across history is not the existence of that anger, but whether it becomes visible.",
            zh: "《好不愤怒》从一个简单的观察开始：女性一直都在愤怒。历史真正改变的，不是愤怒是否存在，而是它是否能够被看见。"
          },
          {
            en: "Anger is often treated as a personal emotion, but Traister argues that it is also shaped by political conditions. When large numbers of people encounter similar forms of exclusion, violence, or inequality, their anger reflects more than individual experience.",
            zh: "愤怒常被视为一种私人情绪，但特雷斯特指出，它同样受到政治条件塑造。当大量的人经历相似的排斥、暴力或不平等时，她们的愤怒已经不仅仅属于个人。"
          },
          {
            en: "Women’s anger therefore becomes evidence that something larger than individual frustration is taking place.",
            zh: "因此，女性的愤怒也成为一种证据：它表明，正在发生的并不仅仅是个人的不满，而是更大的社会问题。"
          }
        ]
      },
      {
        id: "cost-of-being-pleasant",
        title: "The Cost of Being Pleasant",
        titleZh: "温柔的代价",
        paragraphs: [
          {
            en: "Many women learn from an early age that they should remain pleasant, accommodating, patient, and emotionally controlled.",
            zh: "许多女性从小便学会：要保持温柔、体贴、耐心，并管理好自己的情绪。"
          },
          {
            en: "They are encouraged to smooth over conflict, protect other people’s feelings, and avoid appearing difficult.",
            zh: "她们被鼓励缓和冲突、照顾他人的感受，并避免显得“难相处”。"
          },
          {
            en: "These expectations do not eliminate anger. They often force it inward.",
            zh: "这些期待并不会消除愤怒，反而常常迫使愤怒向内转化。"
          },
          {
            en: "The effort required to remain agreeable can become another form of invisible labour.",
            zh: "不断维持“讨人喜欢”的状态，本身也成为一种隐形劳动。"
          },
          {
            en: "Traister suggests that the demand for constant pleasantness has long limited women’s ability to speak publicly about injustice.",
            zh: "特雷斯特指出，对女性持续保持温和的要求，长期限制了她们公开表达不公的能力。"
          }
        ]
      },
      {
        id: "collective-anger",
        title: "When Anger Becomes Collective",
        titleZh: "当愤怒成为集体经验",
        paragraphs: [
          {
            en: "One of the book’s central insights is that anger changes when it is recognised as shared.",
            zh: "本书最重要的观点之一是：当愤怒被发现是共同经验时，它便发生了改变。"
          },
          {
            en: "A woman may initially believe that her frustration belongs only to her own life. But when many people describe similar experiences, private emotion becomes collective knowledge.",
            zh: "一个女性最初可能以为自己的愤怒只属于自己。但当越来越多人讲述相似经历时，私人情绪便转化为共同知识。"
          },
          {
            en: "Movements such as #MeToo demonstrated that what had been experienced as isolated incidents were often parts of larger social patterns.",
            zh: "像 #MeToo 这样的运动显示，那些曾被视为孤立事件的经历，其实属于更大的社会模式。"
          },
          {
            en: "Recognition transforms anger. It is no longer only something one feels. It becomes something people can think with, organise around, and act upon together.",
            zh: "承认改变了愤怒。它不再只是个人的感受，而成为一种能够帮助人们共同思考、组织行动并推动改变的力量。"
          }
        ]
      },
      {
        id: "anger-creates-knowledge",
        title: "Anger Creates Knowledge",
        titleZh: "愤怒创造知识",
        paragraphs: [
          {
            en: "Anger is often contrasted with reason, as though one excludes the other.",
            zh: "愤怒常常被放在理性的对立面，仿佛两者无法共存。"
          },
          {
            en: "Traister challenges this assumption.",
            zh: "特雷斯特对这种假设提出质疑。"
          },
          {
            en: "People become angry because they notice patterns of unfairness that have too often been normalised or ignored.",
            zh: "人们之所以愤怒，正是因为她们看见了那些长期被正常化、被忽视的不公。"
          },
          {
            en: "Anger can therefore become a way of recognising injustice before society has found the language to describe it.",
            zh: "因此，愤怒也可能成为一种认识不公的方式，在社会尚未拥有完整语言之前，它已经提醒人们：某些事情出了问题。"
          },
          {
            en: "In this sense, anger is not the opposite of knowledge. It can be one of its beginnings.",
            zh: "从这个意义上说，愤怒并不是知识的反面，它可能正是知识的起点。"
          }
        ]
      },
      {
        id: "beyond-niceness",
        title: "Beyond Niceness",
        titleZh: "超越“做好女人”",
        paragraphs: [
          {
            en: "Traister does not argue that anger is always virtuous, nor that every expression of anger produces justice.",
            zh: "特雷斯特并没有认为愤怒天然正确，也没有认为每一次愤怒都会带来正义。"
          },
          {
            en: "Her argument is more careful.",
            zh: "她真正的观点更加谨慎。"
          },
          {
            en: "A democratic society should not ask only whether women are angry.",
            zh: "一个民主社会不应只问：女性为什么愤怒。"
          },
          {
            en: "It should also ask why that anger has so often been dismissed before anyone has listened to what it says.",
            zh: "它更应该追问：为什么在人们真正倾听这些愤怒之前，它们就已经被否定了。"
          },
          {
            en: "The question is therefore not whether women should be allowed to feel anger.",
            zh: "因此，真正的问题并不是女性是否应该愤怒。"
          },
          {
            en: "The question is whether society is willing to hear what anger reveals.",
            zh: "真正的问题是：社会是否愿意倾听愤怒所揭示的现实。"
          }
        ]
      }
    ],
    quote: "Remember, all men would be tyrants if they could.",
    quoteSource:
      "Abigail Adams, quoted in the epigraph to Good and Mad｜Abigail Adams，引自《好不愤怒》题辞",
    relatedWorks: [
      "Rebecca Traister, Good and Mad: The Revolutionary Power of Women’s Anger｜《好不愤怒：女性愤怒的革命力量》",
      "Rebecca Traister, All the Single Ladies｜《单身女性》"
    ],
    tags: [
      "anger",
      "feminism",
      "emotion",
      "power",
      "patriarchy",
      "public life",
      "collective action",
      "gender",
      "politics",
      "social change"
    ],
    sourceText: "Good and Mad",
    status: "published"
  },
  {
    id: "2026-07-26-reading-the-romance",
    date: "2026-07-26",
    type: "book",
    title: "Reading the Romance: Women, Patriarchy, and Popular Literature",
    titleZh: "《阅读浪漫小说：女性、父权制和通俗文学》",
    author: "Janice A. Radway｜珍妮斯·A. 拉德威",
    years: "First published 1984｜初版于1984年",
    role: "Cultural Studies / Feminist Criticism｜文化研究 / 女性主义批评",
    focusTitle: "A Room Made of Reading",
    focusTitleZh: "一间由阅读构成的房间",
    summaryEn:
      "A woman opens a romance novel and, for a while, becomes unavailable to everyone around her. Janice A. Radway asks us to look beyond the stories inside these books and notice the act of reading itself: the privacy it creates, the demands it suspends, and the emotional care it offers to women who are usually expected to care for others.",
    summaryZh:
      "一个女人打开一本浪漫小说，并在一段时间里不再随时为身边的人待命。珍妮斯·A. 拉德威提醒我们，不应只关注书中的爱情故事，也要看见阅读行为本身：它创造的私人空间、它暂时中止的家庭要求，以及它给予那些总被期待照顾他人的女性的情感补给。",
    highlightEn:
      "Sometimes, reading is not an escape from life. It is a brief refusal to remain available to everyone.",
    highlightZh:
      "有时，阅读并不是逃离生活。它只是短暂地拒绝继续随时为所有人待命。",
    highlightNote:
      "Editorial summary for this calendar entry; not a direct quotation from the book.｜以上为日历概括文案，并非原书引文。",
    tags: [
      "reading",
      "romance",
      "privacy",
      "emotional care",
      "patriarchy",
      "popular culture"
    ],
    introduction: [
      {
        en: "Why do women read romance novels?",
        zh: "女性为什么阅读浪漫小说？"
      },
      {
        en: "For a long time, critics answered this question by analysing the books alone. They examined repetitive plots, idealised heroes, heterosexual marriage, and happy endings, then treated readers as passive recipients of whatever ideology the stories contained.",
        zh: "长期以来，批评者主要通过分析文本本身来回答这个问题。他们研究重复的情节、理想化的男主人公、异性恋婚姻与幸福结局，并把读者视为被动接受故事意识形态的人。"
      },
      {
        en: "Janice A. Radway changes the question. She does not ask only what romance novels mean. She asks what women are doing when they read them.",
        zh: "珍妮斯·A. 拉德威改变了提问方式。她不仅追问浪漫小说意味着什么，也追问女性在阅读这些小说时究竟在做什么。"
      },
      {
        en: "Her study follows a group of romance readers whom she calls the women of “Smithton.” By listening to their reading habits, preferences, frustrations, and interpretations, Radway shows that reading is not a simple transfer of meaning from a book into a reader’s mind.",
        zh: "她的研究关注一群被称作“史密斯顿女性”的浪漫小说读者。通过倾听她们的阅读习惯、偏好、不满与解释，拉德威表明，阅读并不是文本意义被简单灌输进读者头脑的过程。"
      },
      {
        en: "Reading is an activity embedded in everyday life. Its meaning depends on who reads, where she reads, what she temporarily refuses, and what she hopes the experience will provide.",
        zh: "阅读是一种嵌入日常生活的活动。它的意义取决于谁在阅读、她在哪里阅读、她暂时拒绝了什么，以及她希望从阅读中获得什么。"
      }
    ],
    sections: [
      {
        id: "reading-is-an-event",
        title: "Reading Is an Event",
        titleZh: "阅读本身就是一个事件",
        chapterReference:
          "Chapter 2: The Readers and Their Romances; Chapter 3: The Act of Romance Reading: Escape and Instruction",
        chapterReferenceZh:
          "第二章“读者和她们的浪漫小说”；第三章“阅读浪漫小说的行为：逃避和教化”",
        paragraphs: [
          {
            en: "One of Radway’s most important methodological choices is to distinguish between the meaning of the romance narrative and the meaning of the act of reading it.",
            zh: "拉德威最重要的方法之一，是区分浪漫小说叙事的意义与阅读这一行为本身的意义。"
          },
          {
            en: "The story may end by reaffirming heterosexual marriage and traditional gender roles. Yet the act of picking up the book may have a different significance in the reader’s domestic life.",
            zh: "故事可能最终重新确认异性恋婚姻与传统性别角色，但在读者的家庭生活中，拿起一本书这个动作却可能拥有完全不同的意义。"
          },
          {
            en: "For the women Radway interviewed, reading announced a temporary withdrawal from the social roles of wife and mother.",
            zh: "对于拉德威访谈的女性来说，阅读意味着暂时退出妻子与母亲的社会角色。"
          },
          {
            en: "A woman absorbed in a book was physically present in the home, but her attention was no longer freely available to her family.",
            zh: "一个沉浸在书中的女人，身体仍然留在家中，但她的注意力不再可以被家人随意调用。"
          },
          {
            en: "The book created a boundary around her.",
            zh: "书在她周围建立了一道边界。"
          },
          {
            en: "In this sense, reading became what Radway describes as a small declaration of independence.",
            zh: "从这个意义上说，阅读成为拉德威所描述的一种微小的“独立宣言”。"
          }
        ]
      },
      {
        id: "temporary-refusal",
        title: "A Temporary Refusal",
        titleZh: "一次短暂的拒绝",
        paragraphs: [
          {
            en: "The women in Radway’s study lived within households where they were expected to remain responsive to the physical and emotional needs of others.",
            zh: "拉德威研究中的女性生活在这样的家庭结构中：她们被期待持续回应他人的身体需求与情感需求。"
          },
          {
            en: "They prepared food, cared for children, maintained relationships, anticipated problems, and helped restore husbands and family members after the pressures of the outside world.",
            zh: "她们准备食物、照顾孩子、维持关系、预见问题，也帮助丈夫与家庭成员从外部世界的压力中恢复过来。"
          },
          {
            en: "But within this arrangement, no equivalent role was clearly responsible for restoring the wife and mother.",
            zh: "然而，在这种安排中，却没有一个与之对应的角色，专门负责帮助妻子与母亲恢复精力。"
          },
          {
            en: "Reading allowed her to say, without always speaking the words: For this moment, I am doing something for myself.",
            zh: "阅读让她无需真正说出口，也能表达：在这一刻，我所做的事情只为了我自己。"
          },
          {
            en: "The refusal was limited. It did not necessarily reorganise the division of labour in the family. But it interrupted the assumption that her time and attention belonged naturally to everyone else.",
            zh: "这种拒绝是有限的。它未必会重新组织家庭中的劳动分工，却能够短暂打断一个根深蒂固的假设：她的时间与注意力天然属于其他所有人。"
          },
          {
            en: "The simple act of opening a book exposed the personal cost hidden inside the ideal of the endlessly available wife and mother.",
            zh: "打开一本书这个简单的动作，使“永远随时待命的妻子与母亲”这一理想背后的个人代价变得可见。"
          }
        ]
      },
      {
        id: "escape-two-meanings",
        title: "Escape Has Two Meanings",
        titleZh: "“逃避”有两层含义",
        chapterReference:
          "Chapter 3: The Act of Romance Reading: Escape and Instruction",
        chapterReferenceZh:
          "第三章“阅读浪漫小说的行为：逃避和教化”",
        paragraphs: [
          {
            en: "Romance reading is frequently dismissed as escapism.",
            zh: "浪漫小说阅读常被贬低为一种逃避。"
          },
          {
            en: "Radway refuses to treat the word so simply.",
            zh: "拉德威拒绝如此简单地理解“逃避”。"
          },
          {
            en: "Escape can mean withdrawing from an oppressive or exhausting environment. But it can also mean imagining a different future—one in which needs that remain unmet in ordinary life might finally be recognised.",
            zh: "逃避可以意味着离开一种压迫性或令人疲惫的环境，也可以意味着想象另一种未来：在那里，日常生活中无法得到满足的需求终于能够被承认。"
          },
          {
            en: "The women Radway interviewed were aware that romance novels were fantasies. Their reading did not depend on confusing fiction with reality.",
            zh: "拉德威访谈的女性知道浪漫小说是幻想。她们的阅读并不建立在把虚构误认为现实的基础上。"
          },
          {
            en: "What mattered was the distance the books created between ordinary life and another possible emotional world.",
            zh: "真正重要的，是这些书在日常生活与另一种可能的情感世界之间创造出的距离。"
          },
          {
            en: "In that distance, the reader could refuse the present and rehearse a wish for something else.",
            zh: "在这段距离中，读者既可以拒绝当下，也可以预演对另一种生活的渴望。"
          },
          {
            en: "Escape was therefore both a withdrawal and a utopian gesture.",
            zh: "因此，逃避既是一种退离，也是一种乌托邦式的动作。"
          }
        ]
      },
      {
        id: "compensatory-literature",
        title: "Compensatory Literature",
        titleZh: "补偿性文学",
        paragraphs: [
          {
            en: "Radway finds that romance reading often functions as emotional restoration.",
            zh: "拉德威发现，浪漫小说阅读常常发挥着情感恢复的作用。"
          },
          {
            en: "The women in her study did not always read because they had nothing else to do. They often made deliberate space for reading within already busy lives.",
            zh: "她研究中的女性并不总是因为无事可做才读书。相反，她们常常在已经十分忙碌的生活中，有意识地为阅读腾出时间。"
          },
          {
            en: "Some reread familiar novels when they felt pressured, exhausted, or depressed because they already knew what emotional effect the ending would produce.",
            zh: "有些女性会在感到压力、疲惫或低落时重读熟悉的小说，因为她们已经知道故事的结局会带来怎样的情绪效果。"
          },
          {
            en: "The predictable movement toward safety and happiness could calm anxiety, restore optimism, and return the reader to everyday life feeling temporarily renewed.",
            zh: "故事可以预期地走向安全与幸福，这能够舒缓焦虑、恢复乐观，并让读者带着短暂恢复的精神重新进入日常生活。"
          },
          {
            en: "In this sense, romance fiction did not merely entertain. It supplied forms of emotional attention missing from the reader’s own environment.",
            zh: "从这个意义上说，浪漫小说并不只是提供娱乐，也替读者补充了她们自身环境中缺失的情感关怀。"
          }
        ]
      },
      {
        id: "desire-to-be-cared-for",
        title: "The Desire to Be Cared For",
        titleZh: "被照顾的渴望",
        chapterReference:
          "Chapter 3; Chapter 4: The Ideal Romance: The Promise of Patriarchy",
        chapterReferenceZh:
          "第三章；第四章“理想的浪漫小说：父权制的承诺”",
        paragraphs: [
          {
            en: "Radway’s readers did not simply want stories of sexual passion.",
            zh: "拉德威研究中的读者并不只是想阅读有关性激情的故事。"
          },
          {
            en: "Again and again, they preferred narratives in which a distant, difficult, or emotionally restrained man eventually learned to recognise the heroine, understand her needs, and care for her tenderly.",
            zh: "她们反复偏爱的，是这样的叙事：一个疏离、难以接近或不善表达情感的男人，最终学会承认女主人公、理解她的需求，并温柔地照顾她。"
          },
          {
            en: "The fantasy was therefore not only about being desired.",
            zh: "因此，这种幻想并不只是关于被欲望。"
          },
          {
            en: "It was also about receiving care.",
            zh: "它同样是关于接受照护。"
          },
          {
            en: "The reader could identify with a heroine who was finally valued, protected, listened to, and emotionally replenished by another person.",
            zh: "读者可以认同这样的女主人公：她最终被珍视、被保护、被倾听，也终于从另一个人那里得到情感补给。"
          },
          {
            en: "This is especially significant because the reader’s ordinary role required her to provide precisely this kind of attention to others.",
            zh: "这一点尤其重要，因为在日常生活中，读者自己的社会角色恰恰要求她把这种关注不断给予他人。"
          },
          {
            en: "The romance reversed the direction of care.",
            zh: "浪漫小说暂时倒转了照护的方向。"
          },
          {
            en: "The woman who habitually nurtured everyone else could imagine herself as the person being nurtured.",
            zh: "那个习惯于照顾所有人的女性，终于可以想象自己成为被照顾的人。"
          }
        ]
      },
      {
        id: "hero-must-learn-to-read-her",
        title: "The Hero Must Learn to Read Her",
        titleZh: "男主人公必须学会理解她",
        paragraphs: [
          {
            en: "In the romance novels preferred by Radway’s readers, the heroine is often misunderstood at first.",
            zh: "在拉德威研究中的读者所偏爱的浪漫小说里，女主人公最初常常遭到误解。"
          },
          {
            en: "The hero may appear cold, arrogant, emotionally unavailable, or even threatening. Much of the narrative is organised around the heroine’s attempt to interpret his contradictory behaviour.",
            zh: "男主人公可能显得冷漠、傲慢、情感封闭，甚至带有威胁性。故事的大部分内容都围绕女主人公如何解释他矛盾的行为展开。"
          },
          {
            en: "But the desired ending requires more than marriage.",
            zh: "然而，读者所期待的结局并不只是婚姻。"
          },
          {
            en: "The hero must be transformed.",
            zh: "男主人公必须发生改变。"
          },
          {
            en: "He must reveal that beneath his distance lies tenderness, loyalty, and the capacity to care.",
            zh: "他必须证明，在疏离的外表之下，存在着温柔、忠诚与照护他人的能力。"
          },
          {
            en: "The heroine’s emotional labour is rewarded when the man finally becomes capable of reading her as carefully as she has been required to read him.",
            zh: "当这个男人终于能够像女主人公一直被要求理解他那样，细致地理解她时，她付出的情感劳动才算得到回报。"
          },
          {
            en: "The fantasy promises that a powerful man can be converted into an attentive partner without the woman having to abandon heterosexual love or marriage.",
            zh: "这种幻想承诺：一个拥有权力的男人可以转变为体贴的伴侣，而女性无需因此放弃异性恋爱情或婚姻。"
          }
        ]
      },
      {
        id: "contradiction-of-romance",
        title: "The Contradiction of Romance",
        titleZh: "浪漫小说的矛盾",
        paragraphs: [
          {
            en: "Radway does not describe romance reading as simply liberating or simply oppressive.",
            zh: "拉德威并没有把浪漫小说阅读描述成纯粹的解放，也没有把它描述成纯粹的压迫。"
          },
          {
            en: "The act of reading can be resistant.",
            zh: "阅读行为本身可以具有抵抗性。"
          },
          {
            en: "It gives women private time, emotional restoration, pleasure, and a temporary refusal of self-sacrifice.",
            zh: "它给予女性私人时间、情感恢复、快乐，以及对自我牺牲的短暂拒绝。"
          },
          {
            en: "Yet the narratives often resolve women’s dissatisfaction within the very structures that helped produce it.",
            zh: "然而，故事往往又在最初制造女性不满的同一套结构中解决这些不满。"
          },
          {
            en: "The heroine receives care not because domestic and emotional labour has been redistributed across society, but because one exceptional man has learned to care for her.",
            zh: "女主人公之所以获得照护，并不是因为社会重新分配了家庭劳动与情感劳动，而是因为一个不同寻常的男人终于学会照顾她。"
          },
          {
            en: "The reader’s desire is acknowledged, but its fulfilment remains attached to heterosexual monogamy and patriarchal marriage.",
            zh: "读者的欲望得到了承认，但这种欲望的满足仍然依附于异性恋一夫一妻制与父权婚姻。"
          },
          {
            en: "The books therefore offer relief without necessarily transforming the conditions that made relief necessary.",
            zh: "因此，这些书提供了安慰，却未必改变了使这种安慰成为必要的现实条件。"
          }
        ]
      },
      {
        id: "resistance-and-recontainment",
        title: "Resistance and Recontainment",
        titleZh: "抵抗与重新收编",
        paragraphs: [
          {
            en: "Radway’s analysis remains powerful because she refuses a simple answer.",
            zh: "拉德威的分析之所以仍然有力量，正是因为她拒绝给出简单答案。"
          },
          {
            en: "If we study only the content of romance novels, we may conclude that the genre reinforces patriarchal values.",
            zh: "如果我们只研究浪漫小说的文本内容，可能会认为这一文类强化了父权价值。"
          },
          {
            en: "If we study only the readers’ experience, we may conclude that reading offers autonomy, pleasure, and resistance.",
            zh: "如果我们只研究读者的经验，又可能认为阅读提供了自主、快乐与抵抗。"
          },
          {
            en: "Radway insists that both can be true at once.",
            zh: "拉德威坚持认为，这两种判断可以同时成立。"
          },
          {
            en: "A cultural practice can resist one part of a social order while reproducing another.",
            zh: "一种文化实践可以抵抗某一部分社会秩序，同时又复制它的另一部分。"
          },
          {
            en: "The reading act may challenge the family’s claim over a woman’s time, while the story may reassure her that emotional fulfilment will eventually arrive through the right man.",
            zh: "阅读行为可能挑战家庭对女性时间的占有，但故事又可能安慰她：情感满足终究会通过那个“正确的男人”到来。"
          },
          {
            en: "The contradiction cannot be resolved simply by calling the reader liberated or deceived.",
            zh: "这种矛盾无法通过把读者称作“获得解放”或“受到欺骗”来解决。"
          },
          {
            en: "It must be understood as part of the complexity of living, reading, and seeking pleasure within structures one has not freely chosen.",
            zh: "我们必须把它理解为一种复杂处境：人们生活在并非由自己自由选择的结构中，却仍然试图在其中阅读、感受并寻找快乐。"
          }
        ]
      },
      {
        id: "limits-of-study",
        title: "The Limits of the Study",
        titleZh: "这项研究的边界",
        paragraphs: [
          {
            en: "Radway is careful not to present the women of Smithton as representatives of all romance readers.",
            zh: "拉德威谨慎地避免把史密斯顿女性当作所有浪漫小说读者的代表。"
          },
          {
            en: "They formed a relatively small and socially similar group, and their reading practices cannot automatically be generalised to women of different classes, races, educational backgrounds, generations, or sexual identities.",
            zh: "她们是一个规模较小且社会背景相对相似的群体。她们的阅读实践不能被自动推广到不同阶级、种族、教育背景、世代或性身份的女性身上。"
          },
          {
            en: "This limitation is not a weakness to be hidden. It is part of the book’s method.",
            zh: "这种局限并不是需要掩盖的缺陷，而是本书研究方法的一部分。"
          },
          {
            en: "Radway shows that meanings cannot be assumed in advance. They must be studied in relation to particular readers, social positions, institutions, and habits.",
            zh: "拉德威表明，意义不能被预先假定，而必须结合具体的读者、社会位置、制度与习惯进行研究。"
          },
          {
            en: "Different women may use the same genre in different ways.",
            zh: "不同的女性可能以完全不同的方式使用同一种文类。"
          },
          {
            en: "The lesson is not that romance always liberates or always confines, but that criticism must listen to readers before deciding what reading does to them.",
            zh: "真正的结论并不是浪漫小说总能解放女性，或总会限制女性，而是：在判断阅读对人产生何种影响之前，批评必须首先倾听读者。"
          }
        ]
      },
      {
        id: "room-made-of-reading",
        title: "A Room Made of Reading",
        titleZh: "一间由阅读构成的房间",
        paragraphs: [
          {
            en: "Virginia Woolf argued that a woman needed money and a room of her own in order to write.",
            zh: "弗吉尼亚·伍尔夫曾指出，女性若要写作，需要金钱与一间自己的房间。"
          },
          {
            en: "The women in Radway’s study did not always possess such a room.",
            zh: "拉德威研究中的女性未必真正拥有这样一间房间。"
          },
          {
            en: "Instead, they sometimes made one through reading.",
            zh: "于是，她们有时通过阅读制造出这样一间房间。"
          },
          {
            en: "The room was not built from walls. It was built from attention.",
            zh: "这间房间不是由墙壁构成，而是由注意力构成。"
          },
          {
            en: "It existed when a woman opened a book, withdrew from the demands surrounding her, and claimed a portion of time as her own.",
            zh: "当一个女人打开一本书，从周围的要求中暂时退出，并把一段时间认作属于自己时，这间房间便出现了。"
          },
          {
            en: "But it was fragile.",
            zh: "然而，它十分脆弱。"
          },
          {
            en: "It depended on the book remaining open.",
            zh: "它依赖那本书始终保持打开。"
          },
          {
            en: "When the story ended, the reader often returned to the same household arrangements, the same emotional obligations, and the same uneven distribution of care.",
            zh: "当故事结束，读者往往重新回到原有的家庭安排、原有的情感义务，以及原有的不平等照护分工之中。"
          }
        ],
        closingEn:
          "The book gives her a room. But when the book closes, the room disappears.",
        closingZh:
          "书为她提供了一间房间。但当书合上，那间房间也随之消失。"
      },
      {
        id: "quote-reading",
        title: "Quote Reading",
        titleZh: "引文精读",
        chapterReference: "Selected Passage",
        chapterReferenceZh: "书中引文",
        quoteEn:
          "Romance novels are a form of compensatory literature. They provide women with an important channel for emotional release, one that is forbidden in everyday life, because the social roles with which they identify make it almost impossible for them to pursue personal pleasure solely for their own desire and without guilt.",
        quoteZh:
          "浪漫小说是一种补偿性文学（compensatory literature）。它为她们提供了一种重要的、但在日常生活中被禁止的情感释放渠道，因为她们自己所认同的社会角色让她们几乎无法毫无愧疚、只为一己之欲地去追求个人的快乐。",
        attribution:
          "Janice A. Radway, Reading the Romance, Chapter 3｜珍妮斯·A. 拉德威，《阅读浪漫小说》，第三章“阅读浪漫小说的行为：逃避和教化”"
      }
    ],
    tagsZh: [
      "阅读",
      "浪漫小说",
      "私人空间",
      "情感恢复",
      "照护",
      "家庭劳动",
      "父权制",
      "通俗文学",
      "受众研究",
      "女性主义批评"
    ],
    sourceText: "Reading the Romance",
    sourceNote:
      "This entry is based on Janice A. Radway, Reading the Romance: Women, Patriarchy, and Popular Literature. The Related Works section has been intentionally omitted.｜本篇依据珍妮斯·A. 拉德威《阅读浪漫小说：女性、父权制和通俗文学》整理，并按要求删除“相关作品”部分。",
    status: "published"
  },
  {
    id: "2026-07-27-beautiful-world-where-are-you",
    date: "2026-07-27",
    type: "book",
    title: "Beautiful World, Where Are You",
    titleZh: "《美丽的世界，你在哪里》",
    author: "Sally Rooney｜萨莉·鲁尼",
    role: "Novel / Contemporary Fiction｜小说 / 当代文学",
    focusTitle: "Can Friendship Survive Unequal Lives?",
    focusTitleZh: "当生活不再平等，友谊还能继续吗？",
    summaryEn:
      "Alice and Eileen were once young women moving through the same world. Now their lives have begun to separate. Alice is a famous novelist living alone in an enormous house by the sea. Eileen works for a literary magazine in Dublin, living within the ordinary limits of wages, rent, work, and family. They still write to one another about love, politics, beauty, work, and the future—but money and success have changed what each of them can imagine. Their friendship does not exist outside class. It carries admiration, resentment, shame, tenderness, and the fear that one woman’s life has moved beyond the other’s reach. Yet they continue to write.",
    summaryZh:
      "艾莉丝与艾琳曾经是生活在同一个世界里的年轻女性。如今，她们的人生已经开始分离。艾莉丝成为知名小说家，独自住在海边一座巨大的房子里。艾琳则在都柏林的一本文学杂志工作，生活仍受到工资、房租、工作与家庭的日常限制。她们继续在邮件中讨论爱情、政治、美、工作与未来，但金钱和成功已经改变了她们能够想象的生活。她们的友谊并不位于阶级之外。羡慕、怨恨、羞耻、温柔，以及害怕对方已经走入自己无法抵达的生活，都存在于这段关系之中。但她们仍然继续写信。",
    highlightEn:
      "Friendship does not make two lives equal. It asks whether they can remain connected after they have become unequal.",
    highlightZh:
      "友谊不会让两种生活变得平等。它追问的是：当生活已经不再平等，我们是否仍能保持联系。",
    sections: [
      {
        title: "The Friendship at the Centre",
        titleZh: "位于小说中心的女性友谊",
        paragraphs: [
          {
            en: "At first glance, Beautiful World, Where Are You appears to be organised around two heterosexual relationships: Alice and Felix, Eileen and Simon.",
            zh: "乍看之下，《美丽的世界，你在哪里》似乎围绕两组异性恋关系展开：艾莉丝与费里克斯，艾琳与西蒙。"
          },
          {
            en: "But the novel’s deepest continuity lies elsewhere. It is sustained by the emails Alice and Eileen send to one another.",
            zh: "但真正贯穿小说的关系存在于别处：它由艾莉丝与艾琳持续写给彼此的邮件维系。"
          },
          {
            en: "They talk about the men they desire, but the men are not the only subjects of their correspondence. They also discuss work, religion, beauty, climate anxiety, capitalism, family, fame, children, and whether it remains possible to live a good life in a damaged world.",
            zh: "她们会谈论自己爱上的男人，但男人并不是通信中唯一的主题。她们也谈工作、宗教、美、气候焦虑、资本主义、家庭、名声、孩子，以及在一个已经受损的世界里，人是否仍能过一种好的生活。"
          },
          {
            en: "Their friendship gives both women something their romantic relationships cannot entirely provide: another woman with whom life itself can be interpreted.",
            zh: "这段友谊给予她们一种爱情关系无法完全提供的东西：一个可以共同解释生活的女性。"
          }
        ]
      },
      {
        title: "When Friendship Becomes Unequal",
        titleZh: "当友谊开始变得不平等",
        paragraphs: [
          {
            en: "Alice and Eileen’s friendship was formed before Alice became wealthy and famous. The emotional language of their relationship still belongs partly to that earlier time, when their futures seemed more comparable.",
            zh: "艾莉丝与艾琳的友谊形成于艾莉丝获得财富与名声之前。她们之间的情感语言仍然部分属于那个更早的时期——当时，两人的未来似乎仍然可以相互比较。"
          },
          {
            en: "But by the beginning of the novel, their material circumstances have diverged.",
            zh: "但小说开始时，她们的物质处境已经出现了明显分化。"
          },
          {
            en: "Alice can leave Dublin, withdraw from ordinary employment, travel internationally, and live alone in a house so large that it seems to contain rooms she has not yet discovered. Eileen continues to work for a literary magazine, sell copies at poorly attended readings, and calculate her life within much narrower economic limits.",
            zh: "艾莉丝可以离开都柏林，退出普通的工作生活，前往国外旅行，也可以独自住进一座巨大到仿佛不断出现新房间的房子。艾琳则继续在文学杂志工作，在乏人问津的朗读会上卖杂志，并在更加有限的经济条件里安排自己的生活。"
          },
          {
            en: "The novel does not treat this difference as background information. Class enters the women’s friendship through invitations, travel, work, success, embarrassment, and the futures available to each of them.",
            zh: "小说并没有把这种差异当作无关紧要的背景。阶级通过邀请、旅行、工作、成功、尴尬，以及两人各自能够拥有的未来，进入了女性友谊内部。"
          }
        ]
      },
      {
        title: "A House That Makes Class Visible",
        titleZh: "一座让阶级差异显形的房子",
        paragraphs: [
          {
            en: "The first time Felix visits Alice’s home, the difference between their lives becomes immediately visible.",
            zh: "费里克斯第一次来到艾莉丝家时，两种生活之间的差异立刻变得可见。"
          },
          {
            en: "Felix works in a warehouse and rents a house with friends. Alice is a celebrated novelist living alone in an enormous former rectory overlooking the sea.",
            zh: "费里克斯在仓库工作，与朋友合租。艾莉丝则是一位成名的小说家，独自住在一座能够望见大海的巨大旧牧师住宅里。"
          },
          {
            en: "When Alice opens the small gate, Felix stops and looks up at the building. He already knows what it is.",
            zh: "当艾莉丝推开小门时，费里克斯停下来，抬头看着那座房子。他知道这是什么地方。"
          },
          {
            en: "The house does not need to be explained. Its scale has already said something about Alice’s access to money, space, privacy, and freedom.",
            zh: "这栋房子并不需要任何解释。它的规模已经说明了艾莉丝能够拥有的金钱、空间、隐私与自由。"
          },
          {
            en: "Inside, Felix observes the hall, the kitchen, the staircase, the bedrooms, and the fact that one person occupies so much space. Alice wants to show the house off; Felix walks through it more cautiously.",
            zh: "进入房子后，费里克斯观察门厅、厨房、楼梯、卧室，也意识到一个人竟然占据了如此巨大的空间。艾莉丝想向他展示这栋房子；费里克斯却更加谨慎地穿行其中。"
          },
          {
            en: "Before either character names their class difference, architecture has already made it visible.",
            zh: "在两个人用语言说出阶级差异之前，建筑已经先替他们把它呈现出来。"
          }
        ]
      },
      {
        title: "The Familiar Scene, Reversed",
        titleZh: "一个被完全颠倒的传统场景",
        paragraphs: [
          {
            en: "This scene reverses one of the most familiar arrangements in the history of romantic fiction.",
            zh: "这个场景颠倒了爱情小说史中最熟悉的结构之一。"
          },
          {
            en: "Traditionally, it is the young woman who first enters the wealthy man’s home. She looks at the height of the ceilings, the expensive furniture, the library, the grounds, and the rooms that reveal the scale of his wealth.",
            zh: "在传统小说中，通常是年轻女性第一次进入富有男性的家。她抬头看高高的天花板、昂贵的家具、藏书室、庭院，以及那些显示男主人财富规模的房间。"
          },
          {
            en: "The house establishes his authority. She enters both a physical building and a social world controlled by him.",
            zh: "房屋建立了男性的权威。女性所进入的不只是一栋建筑，也是一个由男性控制的社会世界。"
          },
          {
            en: "Rooney reverses every part of this arrangement.",
            zh: "鲁尼把这一安排的每个部分都颠倒了。"
          },
          {
            en: "The woman has the large house. The woman issues the invitation. The woman possesses cultural status and economic freedom. The man is the one who enters, looks around, and becomes conscious of his relative lack of power.",
            zh: "拥有巨大房屋的是女性，发出邀请的是女性，拥有文化地位与经济自由的也是女性。进入房屋、观察四周，并意识到自己相对弱势位置的，则是男性。"
          },
          {
            en: "But Rooney does not simply replace male power with female power.",
            zh: "然而，鲁尼并没有只是用女性权力取代男性权力。"
          },
          {
            en: "Alice’s house gives her social advantage, but it does not give her emotional control. Felix’s position is vulnerable, but he is not reduced to a passive object of fascination.",
            zh: "艾莉丝的房屋赋予她社会优势，却没有赋予她情感上的控制权。费里克斯处于更加脆弱的位置，却也没有被简化为一个被观看、被诱惑的被动对象。"
          },
          {
            en: "The reversal exposes the old pattern rather than merely reproducing it with the genders exchanged.",
            zh: "这种颠倒不是简单地交换男女位置，而是让原有的叙事模式本身变得可见。"
          }
        ]
      },
      {
        title: "And Then Nothing Happens",
        titleZh: "然后，什么也没有发生",
        paragraphs: [
          {
            en: "Alice takes Felix upstairs and shows him her bedroom.",
            zh: "艾莉丝带费里克斯上楼，向他展示自己的卧室。"
          },
          {
            en: "The scene contains everything a conventional novel might use to prepare a sexual encounter: drinking, an invitation home, an enormous house, a private bedroom, mutual attraction, and the awareness that both characters know what might happen next.",
            zh: "这个场景包含了传统小说中所有用来铺垫性关系的元素：饮酒、回家邀请、巨大的住宅、私密的卧室、相互吸引，以及两个人都知道接下来可能发生什么的意识。"
          },
          {
            en: "But they do not have sex.",
            zh: "然而，他们没有发生关系。"
          },
          {
            en: "Felix looks around the bedroom, thanks Alice for showing him the house, and leaves.",
            zh: "费里克斯看了看卧室，感谢艾莉丝带他参观，然后离开。"
          },
          {
            en: "This interruption is what makes the scene so revealing.",
            zh: "正是这一中断，使这个场景如此意味深长。"
          },
          {
            en: "Had they slept together, the house could have become merely an erotic setting—a luxurious backdrop for a familiar romantic development.",
            zh: "如果他们发生了关系，这栋房子就可能沦为一个单纯的情色场景，成为熟悉爱情发展中的奢华背景。"
          },
          {
            en: "Because nothing happens, the house retains its social meaning.",
            zh: "但正因为什么也没有发生，这栋房子才保留了它的社会意义。"
          },
          {
            en: "It remains an uncomfortable fact between them: Alice has access to a form of life Felix does not share, and attraction cannot immediately dissolve that knowledge.",
            zh: "它仍然作为一个令人不适的事实存在于两人之间：艾莉丝能够进入费里克斯并不拥有的生活，而吸引力无法立即消除这种认知。"
          }
        ]
      },
      {
        title: "Desire Does Not Erase Class",
        titleZh: "欲望无法抹去阶级",
        paragraphs: [
          {
            en: "The scene refuses the fantasy that sexual attraction makes social inequality irrelevant.",
            zh: "这个场景拒绝了一种常见幻想：只要两个人彼此吸引，社会不平等就会失去意义。"
          },
          {
            en: "Alice and Felix are interested in one another, but they are also evaluating one another. Attraction exists beside embarrassment, suspicion, pride, curiosity, and resentment.",
            zh: "艾莉丝与费里克斯对彼此感兴趣，但他们也在彼此衡量。吸引与尴尬、怀疑、骄傲、好奇和怨恨同时存在。"
          },
          {
            en: "Felix does not encounter Alice only as a woman. He encounters her as someone whose money and fame have given her access to a world radically different from his own.",
            zh: "费里克斯所面对的不只是作为女性的艾莉丝。他也面对一个因金钱与名声而进入了与自己截然不同世界的人。"
          },
          {
            en: "Alice, meanwhile, cannot be certain whether Felix sees her as herself, as a wealthy woman, as a famous novelist, or as someone whose privilege should be challenged.",
            zh: "与此同时，艾莉丝也无法确定，费里克斯看到的究竟是她本人、一个富有的女人、一位著名小说家，还是一个其特权理应受到挑战的人。"
          },
          {
            en: "Their relationship begins not by transcending class, but by becoming conscious of it.",
            zh: "他们的关系并不是从超越阶级开始，而是从意识到阶级开始。"
          }
        ]
      },
      {
        title: "Women Who Think Together",
        titleZh: "一起思考世界的女性",
        paragraphs: [
          {
            en: "Alice and Eileen’s correspondence offers a different form of intimacy.",
            zh: "艾莉丝与艾琳的通信提供了另一种亲密形式。"
          },
          {
            en: "With Felix and Simon, desire often makes language unstable. Characters conceal what they want, pretend not to care, test one another, or wait for the other person to speak first.",
            zh: "在费里克斯和西蒙面前，欲望常常让语言变得不稳定。人物会隐藏自己的愿望，假装并不在意，试探对方，或者等待对方先开口。"
          },
          {
            en: "In their emails, Alice and Eileen can write at length. They attempt to give form to experiences that remain difficult to express face to face.",
            zh: "而在邮件里，艾莉丝与艾琳可以长篇写作。她们试图为那些难以当面表达的经验赋予形式。"
          },
          {
            en: "They do not merely report what has happened. They interpret it together.",
            zh: "她们不只是向彼此汇报发生了什么，也一起解释发生的一切。"
          },
          {
            en: "Their friendship becomes a place where the private and political can meet: a date with a warehouse worker leads to questions about class; anxiety about motherhood leads to questions about the future; romantic disappointment leads to reflections on capitalism, beauty, and the meaning of a good life.",
            zh: "她们的友谊成为私人经验与政治问题相遇的地方：一次与仓库工人的约会通向阶级问题；对母职的焦虑通向关于未来的疑问；爱情中的失望则通向对资本主义、美，以及何为美好生活的思考。"
          }
        ]
      },
      {
        title: "Friendship Is Not Automatically Equal",
        titleZh: "女性友谊并不天然平等",
        paragraphs: [
          {
            en: "Rooney does not idealise female friendship as a relationship untouched by power.",
            zh: "鲁尼并没有把女性友谊理想化为一种不受权力影响的关系。"
          },
          {
            en: "Alice and Eileen love one another, but they also misunderstand, judge, envy, and wound one another.",
            zh: "艾莉丝与艾琳彼此相爱，却也会误解、评判、嫉妒和伤害对方。"
          },
          {
            en: "Alice’s fame changes the emotional balance of the friendship. Her suffering attracts public attention, while Eileen’s difficulties remain ordinary and largely invisible.",
            zh: "艾莉丝的名声改变了友谊中的情感平衡。她的痛苦会获得公众关注，而艾琳的困境则仍然普通，几乎无人看见。"
          },
          {
            en: "Money also changes the meaning of generosity. An invitation that feels spontaneous to Alice may remind another person of everything they cannot afford.",
            zh: "金钱也改变了慷慨的意义。对艾莉丝而言随意自然的邀请，对另一个人来说，却可能提醒他自己无法负担的一切。"
          },
          {
            en: "Even affection can become entangled with comparison: Who has succeeded? Who has remained behind? Whose pain appears more important? Who is expected to understand whom?",
            zh: "即使是爱，也可能与比较纠缠在一起：谁获得了成功？谁留在了原地？谁的痛苦看起来更值得重视？谁被期待去理解谁？"
          }
        ]
      },
      {
        title: "Remaining Friends Without Pretending",
        titleZh: "不再假装平等，仍然继续做朋友",
        paragraphs: [
          {
            en: "The novel does not suggest that Alice and Eileen can restore the simpler friendship of their youth.",
            zh: "小说并没有暗示艾莉丝与艾琳可以恢复年轻时那种更简单的友谊。"
          },
          {
            en: "Their circumstances have changed too much. Fame, money, work, illness, romantic attachment, and geographic distance have all entered the relationship.",
            zh: "她们的处境已经发生了太多变化。名声、金钱、工作、疾病、爱情与地理距离，都已经进入这段关系。"
          },
          {
            en: "What remains possible is not a return to innocence, but a more difficult form of recognition.",
            zh: "仍然可能发生的，并不是回到纯真状态，而是一种更加困难的彼此承认。"
          },
          {
            en: "They must learn to see each other not as symbols of success or failure, privilege or ordinariness, but as people whose lives have become unequal without becoming entirely separate.",
            zh: "她们必须学会不把彼此只看作成功或失败、特权或平凡的象征，而是看作两个生活已经不再平等、却仍未完全分离的人。"
          },
          {
            en: "The strength of their friendship lies not in overcoming every difference.",
            zh: "这段友谊的力量，并不在于克服所有差异。"
          },
          {
            en: "It lies in their repeated attempts to speak across those differences without denying that they exist.",
            zh: "它存在于她们一次次试图跨越差异继续说话，同时又不否认差异真实存在。"
          }
        ]
      },
      {
        title: "Where Is the Beautiful World?",
        titleZh: "美丽的世界在哪里？",
        paragraphs: [
          {
            en: "The novel’s title appears to ask for a lost place—a world untouched by exploitation, inequality, ecological collapse, and disappointment.",
            zh: "小说的标题似乎在寻找一个已经失去的地方：一个尚未被剥削、不平等、生态崩溃与失望破坏的世界。"
          },
          {
            en: "But the novel never discovers such a place.",
            zh: "但小说从未找到这样的地方。"
          },
          {
            en: "The enormous house by the sea is beautiful, but it also exposes class difference. Romantic love offers intimacy, but it also reproduces insecurity and power. Female friendship offers understanding, but it cannot exist outside money, success, and resentment.",
            zh: "海边的巨大房屋很美，却也暴露了阶级差异。爱情提供亲密，却也再生产不安全感与权力。女性友谊提供理解，却同样无法脱离金钱、成功与怨恨。"
          },
          {
            en: "The beautiful world is therefore not a perfect space beyond inequality.",
            zh: "因此，美丽的世界并不是一个位于不平等之外的完美空间。"
          },
          {
            en: "It appears briefly whenever people remain attentive to one another without pretending that love has made their differences disappear.",
            zh: "它短暂地出现在这样的时刻：人们继续认真地看见彼此，同时不假装爱已经让所有差异消失。"
          }
        ]
      }
    ],
    relatedWorks: [
      "Conversations with Friends — Sally Rooney",
      "Normal People — Sally Rooney"
    ],
    tags: [
      "female friendship",
      "class inequality",
      "money",
      "houses",
      "work",
      "intimacy",
      "desire",
      "writing",
      "success",
      "contemporary fiction"
    ],
    tagsZh: [
      "女性友谊",
      "阶级不平等",
      "金钱",
      "房屋",
      "工作",
      "亲密关系",
      "欲望",
      "写作",
      "成功",
      "当代小说"
    ],
    sourceText: "Beautiful World, Where Are You",
    sourceNote: "以上为日历编辑性概括，并非原书引文。",
    status: "published"
  }
];
