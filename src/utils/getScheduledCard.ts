import { DailyCard, dailyCards } from '../data/dailyCards';
import { people, Person } from '../data/people';
import { TheoryCard, TheoryCardKind } from '../data/theoryCards';

export type ResolvedDailyCard = TheoryCard & {
  dailyCard: DailyCard;
  person?: Person;
  title: string;
  titleZh?: string;
  focusTitle?: string;
  focusTitleZh?: string;
  image?: string;
  imageCredit?: string;
  introZh?: string;
  introEn?: string;
};

function toDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getPerson(personId?: string) {
  return personId ? people.find((person) => person.id === personId) : undefined;
}

function getCategoryZh(category?: string) {
  switch (category) {
    case 'thinker':
      return '思想家';
    case 'writer':
      return '女作家';
    case 'artist':
      return '艺术家';
    case 'photographer':
      return '摄影师';
    default:
      return '理论卡片';
  }
}

function getImage(person?: Person) {
  return person?.detailImage ?? person?.image;
}

function getImageCredit(person?: Person) {
  return person?.detailImage ? person.detailImageCredit : person?.imageCredit;
}

function isPublished(card: DailyCard) {
  return card.status === 'published';
}

function sortedCards(cards: DailyCard[] = dailyCards) {
  return [...cards].sort((a, b) => a.date.localeCompare(b.date));
}

function mergeTags(card: DailyCard, person?: Person) {
  return Array.from(new Set([...(card.tags ?? []), ...(person?.tags ?? [])])).filter(Boolean);
}

function dailyCardToTheoryCard(card: DailyCard): ResolvedDailyCard {
  const person = getPerson(card.personId);
  const personLabel = getCategoryZh(person?.category ?? card.type);
  const image = getImage(person);
  const imageCredit = getImageCredit(person);
  const relatedWorks = Array.from(new Set([...(card.relatedWorks ?? []), ...(person?.keyWorks ?? [])]));
  const tags = mergeTags(card, person);

  return {
    id: card.id,
    date: card.date,
    cardType: card.type as TheoryCardKind,
    cardTitle: card.title,
    cardTitleZh: card.titleZh,
    titleSeparator: card.titleSeparator,
    years: card.years,
    role: card.role,
    creator: card.creator,
    creatorZh: card.creatorZh,
    focusTitle: card.focusTitle,
    focusTitleZh: card.focusTitleZh,
    thinkerId: card.personId ?? card.id,
    thinkerName: person?.name ?? card.creator ?? card.title,
    thinkerNameZh: person?.nameZh ?? card.creatorZh ?? personLabel,
    birthDeath: person?.year ? String(person.year) : card.date,
    concept: card.focusTitle ?? card.title,
    conceptZh: card.focusTitleZh ?? card.titleZh ?? card.title,
    tags,
    quote: card.quote ?? '',
    quoteSource: card.quoteSource ?? card.sourceText ?? '',
    quoteReadingEn: card.quoteReadingEn,
    quoteReadingZh: card.quoteReadingZh,
    explanationEn: card.summaryEn ?? '',
    explanationZh: card.summaryZh ?? '',
    reflectionQuestion: '',
    relatedWorks,
    person,
    personId: card.personId,
    sourceText: card.sourceText,
    image,
    imageCredit,
    introZh: card.introZh,
    introEn: card.introEn,
    location: card.location,
    theoryFramework: card.theoryFramework,
    researchLens: card.researchLens,
    dailyCard: card,
    title: card.title,
    titleZh: card.titleZh
  };
}

export function getPublishedDailyCards(currentDate: string = toDateKey(new Date())) {
  return sortedCards()
    .filter((card) => isPublished(card) && card.date <= currentDate)
    .map(dailyCardToTheoryCard);
}

export function getDailyCardByDate(date: string = toDateKey(new Date())) {
  const published = getPublishedDailyCards(date);
  const exact = published.find((card) => card.date === date);
  return exact ?? published[published.length - 1];
}

export function getTodayDailyCard() {
  return getDailyCardByDate(toDateKey(new Date()));
}

export function getDailyCardById(id: string, currentDate: string = toDateKey(new Date())) {
  const card = dailyCards.find((dailyCard) => dailyCard.id === id);
  if (!card || !isPublished(card) || card.date > currentDate) return undefined;
  return dailyCardToTheoryCard(card);
}

export function getAppearedPeople(currentDate: string = toDateKey(new Date())): Person[] {
  const appearedIds = new Set(getPublishedDailyCards(currentDate).map((card) => card.person?.id).filter(Boolean));
  return people.filter((person) => appearedIds.has(person.id));
}

// Backward-compatible aliases for existing page imports.
export const getPublishedScheduledCards = getPublishedDailyCards;
export const getScheduledCardByDate = getDailyCardByDate;
export const getTodayScheduledCard = getTodayDailyCard;
export const getScheduledCardById = getDailyCardById;
export const getPublishedScheduledCardById = getDailyCardById;
export const getScheduledCard = getTodayDailyCard;
