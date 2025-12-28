import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CategoryPage from '../pages/CategoryPage';
import ArtisanDetailPage from '../pages/ArtisanDetailPage';
import LegalPage from '../pages/LegalPage';
import NotFoundPage from '../pages/NotFoundPage';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categorie/:categoryId" element={<CategoryPage />} />
          <Route path="/artisan/:id" element={<ArtisanDetailPage />} />
          <Route path="/legal/:slug" element={<LegalPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}