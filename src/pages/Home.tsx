import DateHeader from '../components/DateHeader';
import EmptyState from '../components/EmptyState';
import SisterProjectCard from '../components/SisterProjectCard';
import TheoryCard from '../components/TheoryCard';
import { getTodayScheduledCard } from '../utils/getScheduledCard';

export default function Home() {
  const todayCard = getTodayScheduledCard();

  return (
    <div className="home-page">
      <header className="home-hero">
        <p className="home-hero__spark">A Calendar of Her Own ✦ 她自己的日历</p>
        <p>读女性如何理解世界。</p>
      </header>

      {todayCard ? (
        <>
          <DateHeader date={todayCard.date} />
          <div className="calendar-card-divider" aria-hidden="true">
            <span />
            <b>✦</b>
            <span />
          </div>
          <TheoryCard card={todayCard} mode="today" />
        </>
      ) : (
        <EmptyState title="还没有发布卡片" description="在 dailyCards.ts 中添加 status 为 published 的每日卡片后，这里会自动显示。" />
      )}

      <SisterProjectCard />
    </div>
  );
}
