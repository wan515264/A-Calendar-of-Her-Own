import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

const Archive = lazy(() => import('./pages/Archive'));
const CardDetail = lazy(() => import('./pages/CardDetail'));
const Favorites = lazy(() => import('./pages/Favorites'));
const Home = lazy(() => import('./pages/Home'));
const KeywordDetail = lazy(() => import('./pages/KeywordDetail'));
const Keywords = lazy(() => import('./pages/Keywords'));
const Library = lazy(() => import('./pages/Library'));
const PersonDetail = lazy(() => import('./pages/PersonDetail'));
const ThinkerDetail = lazy(() => import('./pages/ThinkerDetail'));
const Thinkers = lazy(() => import('./pages/Thinkers'));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="route-loading" role="status">Loading｜正在载入</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/cards/:id" element={<CardDetail />} />
          <Route path="/library" element={<Library />} />
          <Route path="/people/:id" element={<PersonDetail />} />
          <Route path="/thinkers" element={<Thinkers />} />
          <Route path="/thinkers/:id" element={<ThinkerDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/keywords" element={<Keywords />} />
          <Route path="/keywords/:tag" element={<KeywordDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
