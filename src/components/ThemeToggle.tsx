import { Moon, Sun } from 'lucide-react';
import { useLayoutEffect, useState } from 'react';

type ThemeMode = 'dark' | 'light';

const STORAGE_KEY = 'a-calendar-theme';

function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'dark';

  const savedTheme = window.localStorage.getItem(STORAGE_KEY);
  if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;

  return 'dark';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const isLight = theme === 'light';

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      aria-label={isLight ? 'Switch to night library theme' : 'Switch to paper calendar theme'}
      title={isLight ? 'Night Library｜夜间书库' : 'Paper Calendar｜纸上日历'}
    >
      {isLight ? <Moon size={17} /> : <Sun size={17} />}
      <span>{isLight ? 'Night｜夜间' : 'Paper｜纸上'}</span>
    </button>
  );
}
