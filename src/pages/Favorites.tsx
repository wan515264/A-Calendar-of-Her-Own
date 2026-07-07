import EmptyState from '../components/EmptyState';
import PageHeader from '../components/PageHeader';
import TheoryCard from '../components/TheoryCard';
import { useFavorites } from '../hooks/useFavorites';
import { getPublishedScheduledCardById, getPublishedScheduledCards } from '../utils/getScheduledCard';

export default function Favorites() {
  const { favoriteIds } = useFavorites();
  const publishedCards = getPublishedScheduledCards();
  const favoriteCards = favoriteIds
    .map((id) => getPublishedScheduledCardById(id) ?? publishedCards.find((card) => card.id === id))
    .filter((card): card is NonNullable<typeof card> => Boolean(card));

  return (
    <>
      <PageHeader title="Saved" eyebrow="收藏" description="保存那些今天还想再读一遍的理论卡片。" />
      {favoriteCards.length === 0 ? (
        <EmptyState title="还没有保存卡片" description="遇到让你停下来的卡片时，轻点心形按钮，它会留在这里。" />
      ) : (
        <div className="stack">
          {favoriteCards.map((card) => (
            <TheoryCard key={card.id} card={card} mode="compact" />
          ))}
        </div>
      )}
    </>
  );
}
