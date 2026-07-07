import PageHeader from '../components/PageHeader';
import ThinkerCard from '../components/ThinkerCard';
import { thinkers } from '../data/thinkers';

export default function Thinkers() {
  return (
    <>
      <PageHeader title="Thinkers" eyebrow="思想家" description="女性主义、酷儿理论、情感理论与后人类思想的每日索引。" />
      <div className="stack">
        {thinkers.map((thinker) => (
          <ThinkerCard key={thinker.id} thinker={thinker} />
        ))}
      </div>
    </>
  );
}
