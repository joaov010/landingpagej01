import React from 'react';
import NavBar from './components/NavBar';
import Container from './components/Container';
import Benefits from './components/Benefits';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Container />
      <Benefits />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
