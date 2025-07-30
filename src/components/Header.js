import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header style={{ padding: '1rem', background: '#eee' }}>
      <div className="container">
        <div className="nav-brand">
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#home" onClick={() => scrollToSection('home')} style={{ marginRight: 20 }}>Home</a>
          <a href="#portfolio" onClick={() => scrollToSection('portfolio')} style={{ marginRight: 20 }}>Portfolio</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
        </nav>
        <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
