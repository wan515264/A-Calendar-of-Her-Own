import { Link } from 'react-router-dom';
import { Thinker } from '../data/thinkers';
import Tag from './Tag';

type ThinkerCardProps = {
  thinker: Thinker;
};

export default function ThinkerCard({ thinker }: ThinkerCardProps) {
  return (
    <Link className="thinker-card" to={`/thinkers/${thinker.id}`}>
      <h2>{thinker.name}</h2>
      <p className="name-zh">{thinker.nameZh}</p>
      <p className="years">{thinker.birthDeath}</p>
      <p>{thinker.shortBioZh}</p>
      <div className="tag-row">
        {thinker.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </Link>
  );
}
