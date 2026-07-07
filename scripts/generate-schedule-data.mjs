import fs from 'node:fs';

const people = JSON.parse(fs.readFileSync('src/data/extracted-people.json', 'utf8'));

const peopleTs = `export type Person = {
  id: string;
  name: string;
  category: "thinker" | "writer" | "artist" | "photographer" | string;
  originalCategory?: string;
  originalType?: string;
  city?: string;
  country?: string;
  locationName?: string;
  latitude?: number;
  longitude?: number;
  year?: number;
  schools?: string[];
  themes?: string[];
  tags?: string[];
  keyWorks?: string[];
  originalSourceFile?: string;
  shortBioZh?: string;
  shortBioEn?: string;
  summaryZh?: string;
  summaryEn?: string;
  image?: string;
  imageCredit?: string;
  detailImage?: string;
  detailImageCredit?: string;
  sourceLinks?: string[];
  theoryFramework?: string;
  relatedPersonIds?: string[];
};

// Internal content database for the daily calendar. Do not render this whole array as a public Library list.
export const people = ${JSON.stringify(people, null, 2)} satisfies Person[];
`;

fs.writeFileSync('src/data/people.ts', peopleTs);

const start = new Date(Date.UTC(2026, 6, 1));
const labelZh = {
  thinker: '思想家',
  writer: '女作家',
  artist: '艺术家',
  photographer: '摄影师'
};

const schedule = people.map((person, index) => {
  const dateValue = new Date(start);
  dateValue.setUTCDate(start.getUTCDate() + index);
  const date = dateValue.toISOString().slice(0, 10);
  const cardType = ['thinker', 'writer', 'artist', 'photographer'].includes(person.category)
    ? person.category
    : 'thinker';

  return {
    date,
    cardType,
    personId: person.id,
    title: person.name,
    titleZh: `每日人物：${person.name}`,
    concept: `${person.name} as ${cardType}`,
    conceptZh: `${labelZh[cardType] ?? '人物'}：${person.name}`,
    sourceText: person.keyWorks?.[0],
    tags: person.tags ?? [],
    reflectionQuestion: `What does ${person.name} help you notice about feminist theory today?`
  };
});

const scheduleTs = `export type CalendarScheduleItem = {
  date: string;
  cardType: "thinker" | "writer" | "artist" | "photographer" | "concept" | "text" | "quote" | "debate" | "reflection";
  personId?: string;
  title?: string;
  titleZh?: string;
  concept?: string;
  conceptZh?: string;
  sourceText?: string;
  tags?: string[];
  reflectionQuestion?: string;
};

// Editable daily schedule. It reveals one card per day while reusing people.ts as an internal database.
export const calendarSchedule = ${JSON.stringify(schedule, null, 2)} satisfies CalendarScheduleItem[];
`;

fs.writeFileSync('src/data/calendarSchedule.ts', scheduleTs);
