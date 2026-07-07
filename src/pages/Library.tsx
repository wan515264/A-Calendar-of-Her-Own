import { useMemo, useState } from 'react';
import { BookOpen, Tags } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import PageHeader from '../components/PageHeader';
import { getPublishedScheduledCards } from '../utils/getScheduledCard';

type LibraryFilter = 'all' | 'thinker' | 'writer' | 'artist';

const filters: Array<{ key: LibraryFilter; label: string }> = [
  { key: 'all', label: 'All' },
  { key: 'thinker', label: 'Thinkers' },
  { key: 'writer', label: 'Writers' },
  { key: 'artist', label: 'Artists' }
];

function matchesFilter(cardType: string | undefined, filter: LibraryFilter) {
  if (filter === 'all') return true;
  if (filter === 'artist') return cardType === 'artist' || cardType === 'photographer';
  return cardType === filter;
}

export default function Library() {
  const publishedCards = getPublishedScheduledCards();
  const [activeFilter, setActiveFilter] = useState<LibraryFilter>('all');
  const [selectedTag, setSelectedTag] = useState<string | undefined>();

  const filteredCards = publishedCards.filter((card) => matchesFilter(card.cardType, activeFilter));
  const tags = useMemo(
    () => Array.from(new Set(publishedCards.flatMap((card) => card.tags))).sort((a, b) => a.localeCompare(b)),
    [publishedCards]
  );
  const taggedCards = selectedTag
    ? publishedCards.filter((card) => card.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase()))
    : [];

  return (
    <>
      <PageHeader
        title="Library"
        eyebrow="书库"
        description="A reading room for unlocked calendar cards. 这里只收录已经在日历中出现过的内容。"
      />

      {publishedCards.length === 0 ? (
        <EmptyState title="还没有已发布内容" description="发布每日卡片后，书库会自动显示已解锁内容。" />
      ) : (
        <div className="library-grid">
          <nav className="library-tabs" aria-label="Library filters">
            {filters.map((filter) => (
              <button
                key={filter.key}
                className={activeFilter === filter.key ? 'is-active' : ''}
                type="button"
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </nav>

          <section className="library-section library-section--collection">
            <BookOpen size={20} />
            <div>
              <p className="eyebrow">Unlocked Collection｜已解锁馆藏</p>
              <div className="library-card-list">
                {filteredCards.map((card) => (
                  <Link key={card.id} className="library-card-link" to={`/cards/${card.id}`}>
                    <div>
                      <strong>{card.title}</strong>
                      {card.cardTitleZh && card.cardTitleZh !== card.title && <span>{card.cardTitleZh}</span>}
                      <em>{[card.cardType, card.date].filter(Boolean).join(' · ')}</em>
                      {(card.focusTitle || card.focusTitleZh) && <p>{card.focusTitle ?? card.focusTitleZh}</p>}
                    </div>
                    <small>{card.tags.slice(0, 3).join(' · ')}</small>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {tags.length > 0 && (
            <section className="library-section library-section--keywords">
              <Tags size={20} />
              <div>
                <p className="eyebrow">Unlocked Keywords｜已出现关键词</p>
                <div className="library-keyword-cloud">
                  {tags.map((tag) => (
                    <button
                      key={tag}
                      className={selectedTag === tag ? 'tag is-active' : 'tag'}
                      type="button"
                      onClick={() => setSelectedTag(selectedTag === tag ? undefined : tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                {selectedTag && (
                  <div className="library-keyword-results">
                    <p>Cards with: {selectedTag}</p>
                    <div className="library-result-list">
                      {taggedCards.map((card) => (
                        <Link key={card.id} to={`/cards/${card.id}`}>
                          {card.title} <span>· {card.date}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}
        </div>
      )}
    </>
  );
}
