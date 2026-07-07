import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { TheoryCard } from '../data/theoryCards';
import { getPublishedScheduledCards } from '../utils/getScheduledCard';

const monthStart = '2026-07-01';
const monthEnd = '2026-07-31';
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

type CalendarCell =
  | { key: string; isBlank: true }
  | { key: string; isBlank?: false; day: number; date: string; label: string; weekday: string; card?: TheoryCard };

export default function Archive() {
  const archivedCards = getPublishedScheduledCards().filter((card) => card.date >= monthStart && card.date <= monthEnd);
  const cardsByDate = new Map(archivedCards.map((card) => [card.date, card]));
  const leadingBlanks = new Date(`${monthStart}T00:00:00`).getDay();
  const calendarCells: CalendarCell[] = [
    ...Array.from({ length: leadingBlanks }, (_, index) => ({ key: `blank-${index}`, isBlank: true as const })),
    ...Array.from({ length: 31 }, (_, index) => {
      const day = index + 1;
      const date = `2026-07-${String(day).padStart(2, '0')}`;
      const dateValue = new Date(`${date}T00:00:00`);
      return { key: date, day, date, label: `07/${String(day).padStart(2, '0')}`, weekday: weekdays[dateValue.getDay()], card: cardsByDate.get(date) };
    })
  ];

  return (
    <div className="archive-page">
      <PageHeader title="Magical Archive" eyebrow="归档 · 星历档案" />

      <section className="archive-calendar">
        <header className="archive-calendar__header">
          <div>
            <span>STAR CALENDAR</span>
            <strong>JULY</strong>
          </div>
          <em>2026</em>
        </header>

        <div className="archive-calendar__weekdays">
          {weekdays.map((weekday) => (
            <span key={weekday}>{weekday}</span>
          ))}
        </div>

        <div className="archive-calendar__grid">
          {calendarCells.map((cell) => {
            if (cell.isBlank) {
              return <div key={cell.key} className="archive-day archive-day--blank" />;
            }

            if (!cell.card) {
              return (
                <div key={cell.key} className="archive-day">
                  <span>{cell.label}</span>
                  <small>{cell.weekday}</small>
                </div>
              );
            }

            return (
              <Link key={cell.key} className="archive-day archive-day--has-card" to={`/cards/${cell.card.id}`} aria-label={`Open daily card for ${cell.date}`}>
                <span>{cell.label}</span>
                <small>{cell.weekday}</small>
                <i aria-hidden="true">✦</i>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
