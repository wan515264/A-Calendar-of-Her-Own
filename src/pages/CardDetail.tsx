import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import CardDetailContent from '../components/CardDetailContent';
import EmptyState from '../components/EmptyState';
import { getScheduledCardById } from '../utils/getScheduledCard';

function toDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default function CardDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const card = id ? getScheduledCardById(id, toDateKey(new Date())) : undefined;

  if (!card) {
    return <EmptyState title="这张卡片还未发布" description="未来日历内容会在对应日期后开放。" />;
  }

  return (
    <>
      <button className="back-button" type="button" onClick={() => navigate(-1)}>
        <ArrowLeft size={18} /> 返回
      </button>
      <CardDetailContent card={card} />
    </>
  );
}
