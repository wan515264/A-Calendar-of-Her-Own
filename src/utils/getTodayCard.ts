import { TheoryCard, theoryCards } from '../data/theoryCards';

function toDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getTodayCard(cards: TheoryCard[] = theoryCards, today = new Date()) {
  const todayKey = toDateKey(today);
  const exactMatch = cards.find((card) => card.date === todayKey);

  if (exactMatch) return exactMatch;

  const sortedCards = [...cards].sort((a, b) => a.date.localeCompare(b.date));
  const closestPast = [...sortedCards].reverse().find((card) => card.date <= todayKey);

  return closestPast ?? sortedCards[0];
}

export function formatDateDisplay(dateKey: string) {
  const date = new Date(`${dateKey}T00:00:00`);
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'short'
  }).format(date);
}
