import { Archive, BookOpen, CalendarDays, Compass, Heart } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { DAILY_COMPASS_URL } from '../constants/links';

const navItems = [
  { to: '/', label: 'Today｜今日', icon: CalendarDays },
  { to: '/archive', label: 'Archive｜归档', icon: Archive },
  { to: '/library', label: 'Library｜书库', icon: BookOpen },
  { to: '/favorites', label: 'Saved｜收藏', icon: Heart }
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      {navItems.map(({ to, label, icon: Icon }) => (
        <NavLink key={to} to={to} className={({ isActive }) => `bottom-nav__link ${isActive ? 'is-active' : ''}`} end={to === '/'}>
          <Icon size={19} strokeWidth={1.8} />
          <span>{label}</span>
        </NavLink>
      ))}
      <a
        className="bottom-nav__link"
        href={DAILY_COMPASS_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open The Daily Compass in a new tab"
      >
        <Compass size={19} strokeWidth={1.8} />
        <span>Daily Compass｜每日罗盘</span>
      </a>
    </nav>
  );
}
