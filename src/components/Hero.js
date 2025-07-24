import React from 'react';
import './Hero.css';
import greenImage from '../assets/green.png';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">Noah Cavallito</span> 
          </h1>
          <p className="hero-subtitle">
            A marketing professional with a strong background in
            social media strategy, fashion-focused content creation,
            and team leadership, driven by a passion for visual branding.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToPortfolio}>
              View My Work
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={greenImage} alt="Marketing Professional" className="hero-svg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
