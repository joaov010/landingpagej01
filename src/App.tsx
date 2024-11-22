import React from 'react';
import NavBar from './components/NavBar';
import Container from './components/Container';
import Benefits from './components/Benefits';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Contato from './components/Contato';
import Carrossel from './components/Carrossel';  // Importando o carrossel
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Container />
      <Benefits />
      <Carrossel />  {/* Adicionando o carrossel */}
      <Contato />  {/* Mantendo a seção de contato */}
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
