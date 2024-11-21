import React from 'react';
import './Benefits.css';

const Benefits: React.FC = () => {
  return (
    <section id="solutions" className="benefits">
      <h2>Nossas Soluções</h2>
      <div className="benefits-cards">
        <div className="card">
          <h3>Automação de Vendas</h3>
          <p>Reduza o tempo em tarefas manuais e foque em fechar negócios.</p>
        </div>
        <div className="card">
          <h3>Gestão de Leads</h3>
          <p>Acompanhe seus leads e mantenha controle total do funil de vendas.</p>
        </div>
        <div className="card">
          <h3>Relatórios Avançados</h3>
          <p>Obtenha insights valiosos para melhorar o desempenho.</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
