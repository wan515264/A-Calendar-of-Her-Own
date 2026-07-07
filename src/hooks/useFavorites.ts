import { useCallback, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'her-theory-calendar:favorites';

function readFavorites(): string[] {
  if (typeof window === 'undefined') return [];

  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value ? JSON.parse(value) : [];
  } catch {
    return [];
  }
}

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(readFavorites);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const favoriteSet = useMemo(() => new Set(favoriteIds), [favoriteIds]);

  const isFavorite = useCallback((cardId: string) => favoriteSet.has(cardId), [favoriteSet]);

  const addFavorite = useCallback((cardId: string) => {
    setFavoriteIds((current) => (current.includes(cardId) ? current : [...current, cardId]));
  }, []);

  const removeFavorite = useCallback((cardId: string) => {
    setFavoriteIds((current) => current.filter((id) => id !== cardId));
  }, []);

  const toggleFavorite = useCallback((cardId: string) => {
    setFavoriteIds((current) =>
      current.includes(cardId) ? current.filter((id) => id !== cardId) : [...current, cardId]
    );
  }, []);

  return { favoriteIds, isFavorite, addFavorite, removeFavorite, toggleFavorite };
}
