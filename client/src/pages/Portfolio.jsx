import { useState } from 'react';
import { useApi } from '../hooks/useApi';
import './Portfolio.css';

const categories = ['Todos', 'Residencial', 'Comercial'];

export default function Portfolio() {
  const { data: projects, loading } = useApi('/projects');
  const [filter, setFilter] = useState('Todos');

  const filtered = filter === 'Todos'
    ? (projects || [])
    : (projects || []).filter(p => p.category === filter);

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Portfólio de Projetos</h1>
          <p>Conheça alguns dos projetos que realizamos em São Paulo e região.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-bar">
            {categories.map(c => (
              <button
                key={c}
                className={`filter-btn ${filter === c ? 'active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="loading">Carregando projetos...</div>
          ) : (
            <div className="portfolio-grid">
              {filtered.map(p => (
                <div key={p.id} className="project-card">
                  <div className="project-image">
                    <img src={p.imageUrl} alt={p.title} loading="lazy" />
                    <span className="project-category">{p.category}</span>
                  </div>
                  <div className="project-info">
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <span className="project-city">📍 {p.city}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
