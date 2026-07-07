import { TheoryCard, theoryCards } from '../data/theoryCards';

export function getAllTags(cards: TheoryCard[] = theoryCards) {
  return Array.from(new Set(cards.flatMap((card) => card.tags))).sort((a, b) => a.localeCompare(b));
}

export function getCardsByTag(tag: string, cards: TheoryCard[] = theoryCards) {
  const normalized = decodeURIComponent(tag).toLowerCase();
  return cards.filter((card) => card.tags.some((cardTag) => cardTag.toLowerCase() === normalized));
}
