import PageHeader from '../components/PageHeader';
import Tag from '../components/Tag';
import { getPublishedScheduledCards } from '../utils/getScheduledCard';

export default function Keywords() {
  const tags = Array.from(new Set(getPublishedScheduledCards().flatMap((card) => card.tags))).sort((a, b) => a.localeCompare(b));

  return (
    <>
      <PageHeader title="Keywords" eyebrow="关键词" description="只显示已经出现在每日卡片中的标签。" />
      <section className="keyword-cloud">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </section>
    </>
  );
}
