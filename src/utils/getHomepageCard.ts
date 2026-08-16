import { dailyCardIndex, type DailyCardPreview } from '../data/dailyCardIndex.generated';
import type { TheoryCard, TheoryCardKind } from '../data/theoryCards';

function toDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function splitAuthor(author?: string) {
  const [en, zh] = author?.split('｜') ?? [];
  return { en: en?.trim(), zh: zh?.trim() };
}

function toTheoryCard(card: DailyCardPreview): TheoryCard {
  const author = splitAuthor(card.author);

  return {
    id: card.id,
    date: card.date,
    cardType: card.type as TheoryCardKind,
    cardTitle: card.title,
    cardTitleZh: card.titleZh,
    years: card.years,
    role: card.role,
    creator: card.creator ?? author.en,
    creatorZh: card.creatorZh ?? author.zh,
    focusTitle: card.focusTitle,
    focusTitleZh: card.focusTitleZh,
    thinkerId: card.personId ?? card.id,
    thinkerName: card.creator ?? author.en ?? card.title,
    thinkerNameZh: card.creatorZh ?? author.zh ?? card.titleZh ?? card.title,
    birthDeath: card.years ?? card.date,
    concept: card.focusTitle ?? card.title,
    conceptZh: card.focusTitleZh ?? card.titleZh ?? card.title,
    tags: card.tags,
    quote: '',
    quoteSource: '',
    explanationEn: card.summaryEn ?? '',
    explanationZh: card.summaryZh ?? '',
    highlightEn: card.highlightEn,
    highlightZh: card.highlightZh,
    sourceNote: card.sourceNote,
    reflectionQuestion: '',
    relatedWorks: [],
    personId: card.personId,
    image: card.image,
    imageCredit: card.imageCredit
  };
}

export function getHomepageCard(currentDate: string = toDateKey(new Date())) {
  const published = dailyCardIndex
    .filter((card) => card.status === 'published' && card.date <= currentDate)
    .sort((a, b) => a.date.localeCompare(b.date));

  const exact = published.find((card) => card.date === currentDate);
  const card = exact ?? published[published.length - 1];
  return card ? toTheoryCard(card) : undefined;
}
