import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, Phone } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import './Home.css';

const ICON_MAP = {
  wind: '🌬️', tool: '🔧', settings: '⚙️',
  filter: '🔍', building: '🏢', clipboard: '📋',
};

const stats = [
  { value: '500+', label: 'Projetos Concluídos' },
  { value: '8 anos', label: 'de Experiência' },
  { value: '98%', label: 'Clientes Satisfeitos' },
  { value: '24h', label: 'Atendimento Rápido' },
];

const testimonials = [
  { name: 'Ricardo Almeida', text: 'Serviço rápido e profissional. O ar-condicionado foi instalado no mesmo dia da visita técnica.', stars: 5 },
  { name: 'Fernanda Costa', text: 'Equipe muito competente. Fizeram a manutenção e o aparelho voltou a funcionar perfeitamente.', stars: 5 },
  { name: 'Carlos Mendes', text: 'Preço justo e trabalho impecável. Recomendo a todos que precisam de instalação em SP.', stars: 5 },
];

export default function Home() {
  const { data: services } = useApi('/services');

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <span className="hero-badge">São Paulo e Grande SP</span>
            <h1>Conforto térmico com qualidade e eficiência</h1>
            <p>Instalação, manutenção e limpeza de ar-condicionado para residências e empresas. Atendemos em toda a Grande São Paulo.</p>
            <div className="hero-actions">
              <Link to="/contato" className="btn-primary">
                Solicitar Orçamento <ArrowRight size={18} />
              </Link>
              <a href="tel:+5511987654321" className="btn-outline">
                <Phone size={18} /> (11) 98765-4321
              </a>
            </div>
            <ul className="hero-checks">
              <li><CheckCircle size={16} /> Instalação no mesmo dia</li>
              <li><CheckCircle size={16} /> Garantia nos serviços</li>
              <li><CheckCircle size={16} /> Técnicos certificados</li>
            </ul>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&q=80"
              alt="Técnico instalando ar-condicionado"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bar">
        <div className="container stats-grid">
          {stats.map(s => (
            <div key={s.label} className="stat-item">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="section services-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nossos Serviços</h2>
            <p className="section-subtitle">Soluções completas em climatização para todos os tipos de ambiente.</p>
          </div>
          <div className="services-grid">
            {(services || []).slice(0, 3).map(s => (
              <div key={s.id} className="service-card">
                <span className="service-icon">{ICON_MAP[s.icon] || '❄️'}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/servicos" className="btn-outline">Ver todos os serviços <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">O que nossos clientes dizem</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <div key={t.name} className="testimonial-card">
                <div className="stars">{Array(t.stars).fill(null).map((_, i) => <Star key={i} size={16} fill="#facc15" stroke="#facc15" />)}</div>
                <p>"{t.text}"</p>
                <strong>{t.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <div>
            <h2>Precisa de ar-condicionado em São Paulo?</h2>
            <p>Solicite um orçamento gratuito e sem compromisso agora mesmo.</p>
          </div>
          <Link to="/contato" className="btn-primary">Falar com especialista <ArrowRight size={18} /></Link>
        </div>
      </section>
    </main>
  );
}
