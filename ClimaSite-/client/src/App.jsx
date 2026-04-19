import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Portfolio from './pages/Portfolio';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
