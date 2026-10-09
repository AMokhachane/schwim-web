import React from 'react';

export default function Home() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Law that understands what matters to you.</h1>
        <p>Clear advice. Considered action. A personal relationship from first conversation to final signature.</p>
        <div className="hero-cta">
          <a 
            href="#contact" 
            className="btn-primary" 
            onClick={(e) => handleScroll(e, 'contact')}
          >
            Begin the Conversation
          </a>
          <a 
            href="#services" 
            className="btn-secondary" 
            onClick={(e) => handleScroll(e, 'services')}
          >
            Explore Our Practice
          </a>
        </div>
      </div>
    </div>
  );
}