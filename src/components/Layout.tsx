import { ReactNode } from 'react';
import BottomNav from './BottomNav';
import ThemeToggle from './ThemeToggle';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="app-shell">
      <ThemeToggle />
      <main className="app-main">{children}</main>
      <BottomNav />
    </div>
  );
}
