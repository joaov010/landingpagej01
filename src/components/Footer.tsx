import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 MarketingSite. Todos os direitos reservados.</p>
      <div className="footer-links">
        <a href="#privacy">Política de Privacidade</a> | <a href="#terms">Termos de Serviço</a>
      </div>
    </footer>
  );
};

export default Footer;
