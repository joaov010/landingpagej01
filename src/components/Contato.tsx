import React, { useState } from 'react';
import './Contato.css';

const Contato: React.FC = () => {
  const [email, setEmail] = useState('');
  const [motivo, setMotivo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode processar os dados ou enviar para um servidor
    console.log('Email:', email);
    console.log('Motivo:', motivo);
  };

  return (
    <section className="contato">
      <h2>Entre em contato</h2>
      <form onSubmit={handleSubmit} className="contato-form">
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="motivo">Motivo do Contato</label>
          <textarea
            id="motivo"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            placeholder="Digite o motivo do seu contato"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contato;
