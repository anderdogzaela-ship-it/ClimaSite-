import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { api } from '../hooks/useApi';
import './Contato.css';

export default function Contato() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      await api.post('/contacts', form);
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Entre em Contato</h1>
          <p>Solicite um orçamento gratuito ou tire suas dúvidas. Respondemos em até 2 horas.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Fale conosco</h2>
            <p>Atendemos em São Paulo e Grande SP. Ligue, mande mensagem ou preencha o formulário.</p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon"><Phone size={20} /></div>
                <div>
                  <strong>Telefone / WhatsApp</strong>
                  <a href="tel:+5511987654321">(11) 98765-4321</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Mail size={20} /></div>
                <div>
                  <strong>E-mail</strong>
                  <a href="mailto:contato@climafrio.com.br">contato@climafrio.com.br</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><MapPin size={20} /></div>
                <div>
                  <strong>Área de Atendimento</strong>
                  <span>São Paulo e Grande SP</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Clock size={20} /></div>
                <div>
                  <strong>Horário de Atendimento</strong>
                  <span>Seg–Sex 8h–18h · Sáb 8h–13h</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/5511987654321?text=Olá! Gostaria de um orçamento."
              className="btn-primary whatsapp-contact-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chamar no WhatsApp
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Solicitar Orçamento</h2>

            {status === 'success' && (
              <div className="alert alert-success">
                ✅ Mensagem enviada! Entraremos em contato em breve.
              </div>
            )}
            {status === 'error' && (
              <div className="alert alert-error">
                ❌ Erro ao enviar. Tente novamente ou ligue para nós.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Nome *</label>
              <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required placeholder="Seu nome completo" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">E-mail *</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="seu@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Telefone</label>
                <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(11) 98765-4321" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem *</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Descreva o serviço que precisa, tipo de ambiente, quantidade de aparelhos..." />
            </div>

            <button type="submit" className="btn-primary submit-btn" disabled={loading}>
              {loading ? 'Enviando...' : <><Send size={18} /> Enviar mensagem</>}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
