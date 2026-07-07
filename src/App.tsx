import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Archive from './pages/Archive';
import CardDetail from './pages/CardDetail';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import KeywordDetail from './pages/KeywordDetail';
import Keywords from './pages/Keywords';
import Library from './pages/Library';
import PersonDetail from './pages/PersonDetail';
import ThinkerDetail from './pages/ThinkerDetail';
import Thinkers from './pages/Thinkers';

export default function App() {
  return (
    <Layout>
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
    </Layout>
  );
}
