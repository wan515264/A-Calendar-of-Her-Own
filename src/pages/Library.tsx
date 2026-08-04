import { useState } from 'react';
import { Archive, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import PageHeader from '../components/PageHeader';
import { getPublishedScheduledCards } from '../utils/getScheduledCard';

type LibraryFilter = 'all' | 'art' | 'text-novel' | 'theory-criticism';

const filters: Array<{ key: LibraryFilter; label: string }> = [
  { key: 'all', label: 'All｜全部' },
  { key: 'art', label: 'Art｜艺术' },
  { key: 'text-novel', label: 'Texts & Novels｜文本与小说' },
  { key: 'theory-criticism', label: 'Theory & Criticism｜理论与批评' }
];

function matchesFilter(cardType: string | undefined, filter: LibraryFilter) {
  if (filter === 'all') return true;
  if (filter === 'art') return ['artist', 'photographer', 'installation', 'performance', 'sculpture'].includes(cardType ?? '');
  if (filter === 'text-novel') return ['text', 'novel'].includes(cardType ?? '');
  if (filter === 'theory-criticism') return ['theory', 'criticism', 'essay'].includes(cardType ?? '');
  return cardType === filter;
}

export default function Library() {
  const publishedCards = getPublishedScheduledCards();
  const [activeFilter, setActiveFilter] = useState<LibraryFilter>('all');

  const filteredCards = publishedCards.filter((card) => matchesFilter(card.cardType, activeFilter));

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
                <span>{publishedCards.filter((card) => matchesFilter(card.cardType, filter.key)).length}</span>
              </button>
            ))}
          </nav>

          <section className="library-section library-section--collection">
            <BookOpen size={20} />
            <div>
              <p className="eyebrow">Unlocked Collection｜已解锁馆藏</p>
              <div className="library-card-list">
                {filteredCards.map((card) => (
                  <article key={card.id} className="library-card-link">
                    <Link className="library-card-link__content" to={`/cards/${card.id}`}>
                      <strong>{card.title}</strong>
                      {card.cardTitleZh && card.cardTitleZh !== card.title && <span>{card.cardTitleZh}</span>}
                      <em>{[card.cardType, card.date].filter(Boolean).join(' · ')}</em>
                      {(card.focusTitle || card.focusTitleZh) && <p>{card.focusTitle ?? card.focusTitleZh}</p>}
                    </Link>
                    <small>{card.tags.slice(0, 3).join(' · ')}</small>
                    <Link className="library-card-link__archive" to={`/archive#archive-${card.id}`}>
                      <Archive size={13} /> View in Archive｜在归档中查看
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>

        </div>
      )}
    </>
  );
}
