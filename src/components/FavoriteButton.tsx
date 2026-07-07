import { Heart } from 'lucide-react';
import { useFavorites } from '../hooks/useFavorites';

type FavoriteButtonProps = {
  cardId: string;
  compact?: boolean;
};

export default function FavoriteButton({ cardId, compact = false }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(cardId);

  return (
    <button
      className={`button ${compact ? 'button--icon' : 'button--soft'} ${active ? 'is-favorite' : ''}`}
      type="button"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleFavorite(cardId);
      }}
      aria-pressed={active}
    >
      <Heart size={compact ? 18 : 17} fill={active ? 'currentColor' : 'none'} />
      {!compact && <span>{active ? '已收藏' : '收藏'}</span>}
    </button>
  );
}
