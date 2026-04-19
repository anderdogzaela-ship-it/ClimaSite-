import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import './Servicos.css';

const ICON_MAP = {
  wind: '🌬️', tool: '🔧', settings: '⚙️',
  filter: '🔍', building: '🏢', clipboard: '📋',
};

export default function Servicos() {
  const { data: services, loading } = useApi('/services');

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Nossos Serviços</h1>
          <p>Soluções completas em climatização para residências e empresas em São Paulo e Grande SP.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {loading ? (
            <div className="loading">Carregando...</div>
          ) : (
            <div className="services-full-grid">
              {(services || []).map(s => (
                <div key={s.id} className="service-full-card">
                  <span className="service-icon-lg">{ICON_MAP[s.icon] || '❄️'}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section why-section">
        <div className="container">
          <h2 className="section-title">Por que escolher a ClimaFrio?</h2>
          <div className="why-grid">
            {[
              { title: 'Técnicos Certificados', desc: 'Nossa equipe possui treinamento especializado e certificação das principais marcas do mercado.' },
              { title: 'Garantia nos Serviços', desc: 'Todos os serviços têm garantia. Qualquer problema após a visita, voltamos sem custo adicional.' },
              { title: 'Atendimento Rápido', desc: 'Agendamento em até 24h. Para urgências, atendemos no mesmo dia sempre que possível.' },
              { title: 'Preço Justo', desc: 'Orçamento gratuito e transparente, sem cobranças surpresa. O preço combinado é o que você paga.' },
            ].map(w => (
              <div key={w.title} className="why-card">
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-cta-strip">
        <div className="container cta-strip-inner">
          <h2>Pronto para solicitar um orçamento?</h2>
          <Link to="/contato" className="btn-primary">Entrar em contato <ArrowRight size={18} /></Link>
        </div>
      </section>
    </main>
  );
}
