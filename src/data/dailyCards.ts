export type DailyCard = {
  id: string;
  date: string;
  type: "thinker" | "writer" | "artist" | "photographer" | "concept" | "text" | "quote" | "debate" | "criticism";
  personId?: string;
  title: string;
  titleZh?: string;
  titleSeparator?: " " | "：";
  years?: string;
  creator?: string;
  creatorZh?: string;
  focusTitle?: string;
  focusTitleZh?: string;
  summaryEn?: string;
  summaryZh?: string;
  introEn?: string;
  introZh?: string;
  location?: string;
  theoryFramework?: string;
  tags: string[];
  relatedWorks?: string[];
  sourceText?: string;
  quote?: string;
  quoteSource?: string;
  quoteReadingEn?: string;
  quoteReadingZh?: string;
  researchLens?: {
    title: string;
    titleZh?: string;
    citation?: string;
    summaryEn?: string;
    summaryZh?: string;
  };
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
    quote: "Remember, that I am thy creature: I ought to be thy Adam; but I am rather the fallen angel, whom thou drivest from joy for no misdeed.",
    quoteSource: "Mary Shelley, Frankenstein; or, The Modern Prometheus, Chapter 10",
    quoteReadingEn: `This sentence captures the novel’s central wound: the creature is not simply a monster, but an abandoned life speaking back to its creator. By saying “I ought to be thy Adam,” he imagines himself as a first being who should have been recognized, guided, and cared for. But he immediately turns the image into “the fallen angel,” a figure driven away from joy before he has been granted a place in the world.

The power of the line lies in its accusation. Victor Frankenstein wants the glory of creation, but not the burden of relation. The creature’s speech exposes this failure: creation without care is not progress, but abandonment. Shelley’s novel therefore turns the birth of artificial life into a moral question about responsibility.`,
    quoteReadingZh: `这句话抓住了小说最核心的伤口：造物并不只是一个怪物，而是一个被遗弃的生命在向创造者说话。当他说“我本该是你的亚当”时，他把自己想象成一个最初的生命，一个本应被承认、被引导、被照护的存在。但他立刻又把这个形象转向“堕落天使”——一个在尚未获得世界中的位置之前，就已经被驱逐出幸福的存在。

这句话的力量在于它的控诉。维克多·弗兰肯斯坦想要创造的荣耀，却不愿承担关系的负担。造物的发言揭示了这种失败：没有照护的创造并不是进步，而是遗弃。因此，雪莱把人工生命的诞生转化为一个关于责任的道德问题。`,
    tags: ["science fiction", "creation", "abandonment", "monster", "care", "responsibility", "outsider"],
    relatedWorks: [
      "Frankenstein; or, The Modern Prometheus",
      "The Last Man",
      "Mathilda"
    ],
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
    titleZh: "呼啸山庄",
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
      "Sandra M. Gilbert and Susan Gubar, “Looking Oppositely: Emily Brontë’s Bible of Hell”",
      "The Madwoman in the Attic"
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
  }
];
