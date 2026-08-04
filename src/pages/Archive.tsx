import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { getPublishedScheduledCards } from '../utils/getScheduledCard';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthNames = [
  'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
  'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
];

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

type ArchiveMonth = {
  key: string;
  year: string;
  month: string;
  cells: CalendarCell[];
};

export default function Archive() {
  // The archive represents the complete published collection. Unlike the home
  // and library views, it must not hide entries based on the visitor's clock.
  const archiveMonths = getPublishedScheduledCards('9999-12-31').reduce<ArchiveMonth[]>((months, card) => {
    const monthKey = card.date.slice(0, 7);
    let group = months.find((item) => item.key === monthKey);

    if (!group) {
      const [year, month] = monthKey.split('-');
      group = { key: monthKey, year, month: monthNames[Number(month) - 1], cells: [] };
      months.push(group);
    }

    const dateValue = new Date(`${card.date}T00:00:00`);
    const title = card.cardTitle ?? card.title ?? card.concept;
    group.cells.push({
      key: card.date,
      date: card.date,
      label: `${card.date.slice(5, 7)}/${card.date.slice(-2)}`,
      weekday: weekdays[dateValue.getDay()],
      cardId: card.id,
      title,
      titleZh: card.cardTitleZh ?? card.titleZh,
      byline: card.creator ?? card.person?.name ?? card.thinkerName
    });

    return months;
  }, []);

  return (
    <div className="archive-page">
      <PageHeader
        title="Magical Archive"
        eyebrow="归档 · 星历档案"
        description="Every unlocked library entry returns to its place in the calendar. 每一篇已解锁的书库内容，都在这里回到对应的日期。"
      />

      <div className="archive-months">
        {archiveMonths.map((archiveMonth) => (
          <section className="archive-calendar" key={archiveMonth.key} id={`month-${archiveMonth.key}`}>
            <header className="archive-calendar__header">
              <div>
                <span>STAR CALENDAR</span>
                <strong>{archiveMonth.month}</strong>
              </div>
              <em>{archiveMonth.year}</em>
            </header>

            <div className="archive-calendar__grid">
              {archiveMonth.cells.map((cell) => (
                <Link
                  key={cell.key}
                  id={`archive-${cell.cardId}`}
                  className="archive-day archive-day--has-card"
                  to={`/cards/${cell.cardId}`}
                  aria-label={`Open daily card for ${cell.date}`}
                >
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
        ))}
      </div>
    </div>
  );
}
