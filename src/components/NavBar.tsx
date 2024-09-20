import React from 'react';
import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">MarketingSite</a>
      </div>
      <ul className="navbar-menu">
        <li><a href="#about">Sobre Nós</a></li>
        <li><a href="#solutions">Soluções</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
      <button className="navbar-btn">Solicite uma Demonstração</button>
    </nav>
  );
};

export default NavBar;

