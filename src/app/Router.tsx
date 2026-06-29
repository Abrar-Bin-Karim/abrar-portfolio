import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import Home from '@pages/Home';
import About from '@pages/About';
import Projects from '@pages/Projects';
import Research from '@pages/Research';
import Resume from '@pages/Resume';
import Contact from '@pages/Contact';
import NotFound from '@pages/NotFound';
import ScrollToTop from './ScrollToTop';

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
