import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import PageHeader from '../components/PageHeader';
import Tag from '../components/Tag';
import TheoryCard from '../components/TheoryCard';
import { thinkers } from '../data/thinkers';
import { getPublishedScheduledCards } from '../utils/getScheduledCard';

export default function ThinkerDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const thinker = thinkers.find((item) => item.id === id);

  if (!thinker) {
    return <EmptyState title="没有找到这位思想家" description="你可以回到思想家列表，浏览已经收录的作者。" />;
  }

  const relatedCards = getPublishedScheduledCards().filter((card) => card.thinkerId === thinker.id || card.personId === thinker.id);

  return (
    <>
      <button className="back-button" type="button" onClick={() => navigate(-1)}>
        <ArrowLeft size={18} /> 返回
      </button>
      <article className="profile-card">
        <p className="eyebrow">Thinker</p>
        <h1>{thinker.name}</h1>
        <p className="name-zh">{thinker.nameZh}</p>
        <p className="years">{thinker.birthDeath}</p>
        <p>{thinker.shortBioEn}</p>
        <p>{thinker.shortBioZh}</p>

        <div className="tag-row">
          {thinker.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </article>

      <section className="detail-section">
        <PageHeader title="Key Concepts" eyebrow="关键概念" />
        <ul className="soft-list">
          {thinker.keyConcepts.map((concept) => (
            <li key={concept}>{concept}</li>
          ))}
        </ul>
      </section>

      <section className="detail-section">
        <PageHeader title="Works" eyebrow="代表作品" />
        <ul className="soft-list">
          {thinker.relatedWorks.map((work) => (
            <li key={work}>{work}</li>
          ))}
        </ul>
      </section>

      <section className="detail-section">
        <PageHeader title="Daily Cards" eyebrow="相关日历卡片" />
        <div className="stack">
          {relatedCards.map((card) => (
            <TheoryCard key={card.id} card={card} mode="compact" />
          ))}
        </div>
      </section>
    </>
  );
}
