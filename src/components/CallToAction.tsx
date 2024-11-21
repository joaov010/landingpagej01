import React from 'react';
import './CallToAction.css';

const CallToAction: React.FC = () => {
  return (
    <section className="cta">
      <h2>Transforme Suas Vendas Hoje!</h2>
      <p>Solicite uma demonstração e veja como nossa solução pode te ajudar a crescer.</p>
      <button className="cta-btn">Solicite uma Demonstração</button>
    </section>
  );
};

export default CallToAction;
