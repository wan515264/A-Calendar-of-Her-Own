import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import CardDetailContent from '../components/CardDetailContent';
import EmptyState from '../components/EmptyState';
import { people } from '../data/people';
import { getAppearedPeople, getPublishedScheduledCards } from '../utils/getScheduledCard';

export default function PersonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const appearedIds = new Set(getAppearedPeople().map((person) => person.id));
  const person = people.find((item) => item.id === id);

  if (!person || !appearedIds.has(person.id)) {
    return <EmptyState title="这位人物还未在日历中出现" description="人物数据库会随着每日卡片逐步开放。" />;
  }

  const relatedCard = getPublishedScheduledCards().find((card) => card.person?.id === person.id);

  if (!relatedCard) {
    return <EmptyState title="这位人物还没有对应卡片" description="人物详情会通过每日卡片逐步开放。" />;
  }

  return (
    <>
      <button className="back-button" type="button" onClick={() => navigate(-1)}>
        <ArrowLeft size={18} /> 返回
      </button>
      <CardDetailContent card={relatedCard} />
    </>
  );
}
