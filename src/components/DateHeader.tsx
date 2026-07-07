type DateHeaderProps = {
  date: string;
};

export default function DateHeader({ date }: DateHeaderProps) {
  const dateValue = new Date(`${date}T00:00:00`);
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(dateValue).toUpperCase();
  const day = new Intl.DateTimeFormat('en-US', { day: '2-digit' }).format(dateValue);
  const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(dateValue);
  const year = new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(dateValue);

  return (
    <section className="date-header">
      <div className="date-header__binding" aria-hidden="true">
        <span />
        <span />
      </div>
      <p className="date-header__month">{month}</p>
      <strong className="date-header__day">{day}</strong>
      <div className="date-header__meta">
        <span>{weekday}</span>
        <span>{year}</span>
      </div>
      <div className="date-header__divider" aria-hidden="true">
        <span />
        <b>✦</b>
        <span />
      </div>
    </section>
  );
}
