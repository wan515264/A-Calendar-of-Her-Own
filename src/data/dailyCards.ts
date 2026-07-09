export type DailyCard = {
  id: string;
  date: string;
  type: "thinker" | "writer" | "artist" | "photographer" | "concept" | "text" | "quote" | "debate" | "criticism";
  personId?: string;
  title: string;
  titleZh?: string;
  titleSeparator?: " " | "：";
  years?: string;
  role?: string;
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
  }
];
