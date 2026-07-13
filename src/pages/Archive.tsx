import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { getPublishedScheduledCards } from '../utils/getScheduledCard';

const monthStart = '2026-07-01';
const monthEnd = '2026-07-31';
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

type CalendarCell = {
  key: string;
  date: string;
  label: string;
  weekday: string;
  cardId: string;
  title: string;
  titleZh?: string;
  byline: string;
};

export default function Archive() {
  const archivedCards = getPublishedScheduledCards().filter((card) => card.date >= monthStart && card.date <= monthEnd);
  const calendarCells: CalendarCell[] = archivedCards.map((card) => {
    const dateValue = new Date(`${card.date}T00:00:00`);
    const day = card.date.slice(-2);
    const title = card.cardTitle ?? card.title ?? card.concept;
    const titleZh = card.cardTitleZh ?? card.titleZh;
    const byline = card.creator ?? card.person?.name ?? card.thinkerName;

    return {
      key: card.date,
      date: card.date,
      label: `07/${day}`,
      weekday: weekdays[dateValue.getDay()],
      cardId: card.id,
      title,
      titleZh,
      byline
    };
  });

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

        <div className="archive-calendar__grid">
          {calendarCells.map((cell) => (
            <Link key={cell.key} className="archive-day archive-day--has-card" to={`/cards/${cell.cardId}`} aria-label={`Open daily card for ${cell.date}`}>
              <span className="archive-day__date">{cell.label}</span>
              <small className="archive-day__weekday">{cell.weekday}</small>
              <strong>{cell.title}</strong>
              {cell.titleZh && <em>{cell.titleZh}</em>}
              <b>{cell.byline}</b>
              <i aria-hidden="true">✦</i>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
