import { Link } from 'react-router-dom';

type TagProps = {
  label: string;
};

export default function Tag({ label }: TagProps) {
  return (
    <Link className="tag" to={`/keywords/${encodeURIComponent(label)}`}>
      {label}
    </Link>
  );
}
