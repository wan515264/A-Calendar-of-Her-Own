import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import PageHeader from '../components/PageHeader';
import TheoryCard from '../components/TheoryCard';
import { getPublishedScheduledCards } from '../utils/getScheduledCard';

export default function KeywordDetail() {
  const { tag = '' } = useParams();
  const navigate = useNavigate();
  const decodedTag = decodeURIComponent(tag);
  const cards = getPublishedScheduledCards().filter((card) =>
    card.tags.some((cardTag) => cardTag.toLowerCase() === decodedTag.toLowerCase())
  );

  return (
    <>
      <button className="back-button" type="button" onClick={() => navigate(-1)}>
        <ArrowLeft size={18} /> 返回
      </button>
      <PageHeader title={decodedTag} eyebrow="关键词" description={`与 “${decodedTag}” 相关的理论卡片。`} />
      {cards.length === 0 ? (
        <EmptyState title="暂时没有相关卡片" description="这个关键词还没有被绑定到每日卡片，你可以稍后在数据文件中添加。" />
      ) : (
        <div className="stack">
          {cards.map((card) => (
            <TheoryCard key={card.id} card={card} mode="compact" />
          ))}
        </div>
      )}
    </>
  );
}
