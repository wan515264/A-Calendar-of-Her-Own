import { ReactNode } from 'react';
import BottomNav from './BottomNav';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="app-shell">
      <main className="app-main">{children}</main>
      <BottomNav />
    </div>
  );
}
