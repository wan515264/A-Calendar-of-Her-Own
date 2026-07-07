export type CalendarScheduleItem = {
  id: string;
  date: string;
  personId: string;
  cardType: "thinker" | "writer" | "artist" | "photographer" | "concept" | "text" | "quote" | "debate";
  focusTitle?: string;
  focusTitleZh?: string;
  status?: "published" | "scheduled";
};

// Editable daily schedule. people.ts remains the content source; this file only decides who appears on which day.
export const calendarSchedule: CalendarScheduleItem[] = [
  {
    "id": "2026-07-01-cameron-1864",
    "date": "2026-07-01",
    "personId": "cameron-1864",
    "cardType": "photographer",
    "focusTitle": "Photography as Self-Invention",
    "focusTitleZh": "摄影作为自我创造",
    "status": "published"
  },
  {
    "id": "2026-07-02-wollstonecraft-1792",
    "date": "2026-07-02",
    "personId": "wollstonecraft-1792",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-07-03-kahlo-1930",
    "date": "2026-07-03",
    "personId": "kahlo-1930",
    "cardType": "artist",
    "focusTitle": "Art as Embodied Critique",
    "focusTitleZh": "艺术作为身体化批评",
    "status": "published"
  },
  {
    "id": "2026-07-04-cahun-1930",
    "date": "2026-07-04",
    "personId": "cahun-1930",
    "cardType": "photographer",
    "focusTitle": "Photography as Self-Invention",
    "focusTitleZh": "摄影作为自我创造",
    "status": "published"
  },
  {
    "id": "2026-07-05-beauvoir-1949",
    "date": "2026-07-05",
    "personId": "beauvoir-1949",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-07-06-ono-1964",
    "date": "2026-07-06",
    "personId": "ono-1964",
    "cardType": "artist",
    "focusTitle": "Art as Embodied Critique",
    "focusTitleZh": "艺术作为身体化批评",
    "status": "published"
  },
  {
    "id": "2026-07-07-chicago-1979",
    "date": "2026-07-07",
    "personId": "chicago-1979",
    "cardType": "artist",
    "focusTitle": "Art as Embodied Critique",
    "focusTitleZh": "艺术作为身体化批评",
    "status": "published"
  },
  {
    "id": "2026-07-08-lorde-1984",
    "date": "2026-07-08",
    "personId": "lorde-1984",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-07-09-goldin-1986",
    "date": "2026-07-09",
    "personId": "goldin-1986",
    "cardType": "photographer",
    "focusTitle": "Photography as Self-Invention",
    "focusTitleZh": "摄影作为自我创造",
    "status": "published"
  },
  {
    "id": "2026-07-10-guerrilla-1985",
    "date": "2026-07-10",
    "personId": "guerrilla-1985",
    "cardType": "artist",
    "focusTitle": "Art as Embodied Critique",
    "focusTitleZh": "艺术作为身体化批评",
    "status": "published"
  },
  {
    "id": "2026-07-11-mohanty-1988",
    "date": "2026-07-11",
    "personId": "mohanty-1988",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-07-12-butler-1990",
    "date": "2026-07-12",
    "personId": "butler-1990",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-07-13-sherman-1990",
    "date": "2026-07-13",
    "personId": "sherman-1990",
    "cardType": "photographer",
    "focusTitle": "Photography as Self-Invention",
    "focusTitleZh": "摄影作为自我创造",
    "status": "published"
  },
  {
    "id": "2026-07-14-kusama-2000",
    "date": "2026-07-14",
    "personId": "kusama-2000",
    "cardType": "artist",
    "focusTitle": "Art as Embodied Critique",
    "focusTitleZh": "艺术作为身体化批评",
    "status": "published"
  },
  {
    "id": "2026-07-15-neshat-2000",
    "date": "2026-07-15",
    "personId": "neshat-2000",
    "cardType": "photographer",
    "focusTitle": "Photography as Self-Invention",
    "focusTitleZh": "摄影作为自我创造",
    "status": "published"
  },
  {
    "id": "2026-07-16-muholi-2010",
    "date": "2026-07-16",
    "personId": "muholi-2010",
    "cardType": "photographer",
    "focusTitle": "Photography as Self-Invention",
    "focusTitleZh": "摄影作为自我创造",
    "status": "published"
  },
  {
    "id": "2026-07-17-ahmed-2017",
    "date": "2026-07-17",
    "personId": "ahmed-2017",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-07-18-kristeva-1974",
    "date": "2026-07-18",
    "personId": "kristeva-1974",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-07-19-cixous-1975",
    "date": "2026-07-19",
    "personId": "cixous-1975",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-07-20-mulvey-1975",
    "date": "2026-07-20",
    "personId": "mulvey-1975",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-07-21-wittig-1980",
    "date": "2026-07-21",
    "personId": "wittig-1980",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-07-22-duras-1984",
    "date": "2026-07-22",
    "personId": "duras-1984",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-07-23-irigaray-1974",
    "date": "2026-07-23",
    "personId": "irigaray-1974",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-07-24-braidotti-1994",
    "date": "2026-07-24",
    "personId": "braidotti-1994",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-07-25-rich-1976",
    "date": "2026-07-25",
    "personId": "rich-1976",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-07-26-anzaldua-1987",
    "date": "2026-07-26",
    "personId": "anzaldua-1987",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-07-27-halberstam-1998",
    "date": "2026-07-27",
    "personId": "halberstam-1998",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-07-28-hooks-1981",
    "date": "2026-07-28",
    "personId": "hooks-1981",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-07-29-davis-1981",
    "date": "2026-07-29",
    "personId": "davis-1981",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-07-30-friedan-1963",
    "date": "2026-07-30",
    "personId": "friedan-1963",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-07-31-wolf-1990",
    "date": "2026-07-31",
    "personId": "wolf-1990",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-08-01-morgan-1970",
    "date": "2026-08-01",
    "personId": "morgan-1970",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-08-02-gilbert-gubar-1979",
    "date": "2026-08-02",
    "personId": "gilbert-gubar-1979",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-08-03-adichie-2012",
    "date": "2026-08-03",
    "personId": "adichie-2012",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-08-04-frye-1983",
    "date": "2026-08-04",
    "personId": "frye-1983",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-08-05-criado-perez-2019",
    "date": "2026-08-05",
    "personId": "criado-perez-2019",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-08-06-olufemi-2020",
    "date": "2026-08-06",
    "personId": "olufemi-2020",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-08-07-bates-2014",
    "date": "2026-08-07",
    "personId": "bates-2014",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-08-08-federici-1975",
    "date": "2026-08-08",
    "personId": "federici-1975",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-08-09-alsaji-2014",
    "date": "2026-08-09",
    "personId": "alsaji-2014",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-08-10-watson-2009",
    "date": "2026-08-10",
    "personId": "watson-2009",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-08-11-liddle-2020",
    "date": "2026-08-11",
    "personId": "liddle-2020",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-08-12-ien-ang-2001",
    "date": "2026-08-12",
    "personId": "ien-ang-2001",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-08-13-huggins-1994",
    "date": "2026-08-13",
    "personId": "huggins-1994",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  },
  {
    "id": "2026-08-14-connell-1987",
    "date": "2026-08-14",
    "personId": "connell-1987",
    "cardType": "thinker",
    "focusTitle": "Feminist Thought in Context",
    "focusTitleZh": "处境中的女性主义思想",
    "status": "published"
  }
];
