import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Wind } from 'lucide-react';
import './Navbar.css';

const links = [
  { to: '/', label: 'Início' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/portfolio', label: 'Portfólio' },
  { to: '/sobre', label: 'Sobre Nós' },
  { to: '/contato', label: 'Contato' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          <Wind size={28} />
          <span>ClimaFrio</span>
        </Link>

        <nav className={`navbar-links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`navbar-link ${pathname === l.to ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contato" className="btn-primary navbar-cta" onClick={() => setOpen(false)}>
            Solicitar Orçamento
          </Link>
        </nav>

        <button className="navbar-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
