import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClassesPage from './pages/ClassesPage';
import ClassPage from './pages/ClassPage';
import ChapterPage from './pages/ChapterPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import SearchResultsPage from './pages/SearchResultsPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/class/:classId" element={<ClassPage />} />
        <Route path="/chapter/:chapterId" element={<ChapterPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
      </Routes>
    </>
  );
}

export default App;
