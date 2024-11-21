import React, { useState } from 'react';
import './Carrossel.css';

const Carrossel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Informações sobre marketing dentro dos cards
  const items = [
    { id: 1, title: 'Marketing Digital', description: 'Utilize canais digitais como redes sociais, SEO e anúncios pagos para alcançar seu público-alvo.' },
    { id: 2, title: 'SEO e SEM', description: 'A otimização de sites para motores de busca (SEO) e marketing de busca paga (SEM) aumentam a visibilidade online.' },
    { id: 3, title: 'Publicidade Online', description: 'Campanhas publicitárias em plataformas como Google Ads e Facebook Ads geram tráfego qualificado para seu site.' },
    { id: 4, title: 'Redes Sociais', description: 'Redes sociais como Facebook, Instagram e LinkedIn são essenciais para engajamento e construção de marca.' },
  ];

  // Função para ir para o próximo item
  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // Função para ir para o item anterior
  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carrossel">
      <div className="carrossel-content">
        <div className="card">
          <h3>{items[currentIndex].title}</h3>
          <p>{items[currentIndex].description}</p>
        </div>
      </div>
      <div className="carrossel-navigation">
        <button className="prev" onClick={prevItem}>
          &lt; Anterior
        </button>
        <button className="next" onClick={nextItem}>
          Próximo &gt;
        </button>
      </div>
    </div>
  );
};

export default Carrossel;
