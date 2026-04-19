import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Clock, MapPin } from 'lucide-react';
import './Sobre.css';

const team = [
  { name: 'João Silva', role: 'Fundador & Técnico Sênior', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
  { name: 'Marcos Oliveira', role: 'Técnico Especialista', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80' },
  { name: 'Rafael Santos', role: 'Técnico de Campo', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
];

export default function Sobre() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Sobre a ClimaFrio</h1>
          <p>Mais de 8 anos levando conforto térmico para residências e empresas em São Paulo.</p>
        </div>
      </section>

      <section className="section about-story">
        <div className="container about-story-inner">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=700&q=80" alt="Equipe ClimaFrio" />
          </div>
          <div className="about-text">
            <h2 className="section-title">Nossa história</h2>
            <p>A ClimaFrio nasceu em 2016 com o objetivo de oferecer serviços de climatização de alta qualidade para moradores e empresas de São Paulo. Começamos com dois técnicos e hoje somos uma equipe dedicada a garantir o conforto térmico dos nossos clientes.</p>
            <p>Ao longo dos anos, desenvolvemos expertise em instalação de sistemas split, multi-split e cassete, além de manutenção preventiva e corretiva de todas as marcas do mercado.</p>
            <p>Nossa missão é simples: fazer o trabalho certo na primeira visita, com honestidade, pontualidade e preço justo.</p>
            <div className="about-highlights">
              <div className="highlight">
                <Users size={20} />
                <span>Equipe treinada e certificada</span>
              </div>
              <div className="highlight">
                <Award size={20} />
                <span>Autorizada pelas principais marcas</span>
              </div>
              <div className="highlight">
                <Clock size={20} />
                <span>Pontualidade garantida</span>
              </div>
              <div className="highlight">
                <MapPin size={20} />
                <span>Toda a Grande São Paulo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Nossa equipe</h2>
          <p className="section-subtitle">Técnicos qualificados, prontos para atender você.</p>
          <div className="team-grid">
            {team.map(t => (
              <div key={t.name} className="team-card">
                <img src={t.img} alt={t.name} />
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-cta-strip">
        <div className="container cta-strip-inner">
          <h2>Vamos trabalhar juntos?</h2>
          <Link to="/contato" className="btn-primary">Solicitar orçamento <ArrowRight size={18} /></Link>
        </div>
      </section>
    </main>
  );
}
