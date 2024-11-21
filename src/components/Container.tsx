import React from 'react';
import './Container.css';

const Container: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Aumente Suas Vendas com Nossa Solução</h1>
        <p>O sistema ideal para otimizar seu processo de vendas e alcançar mais leads.</p>
        <button className="hero-btn">Solicite uma Demonstração</button>
      </div>
    </section>
  );
};

export default Container;
