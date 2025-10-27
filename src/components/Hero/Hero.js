import React from 'react';
import Header from '../Header';
import './Hero.css';
import heroImage from '../../assets/image/sdbia.png';

const Hero = () => {
  const hasImage = true; 
  const bgStyle = hasImage ? { backgroundImage: `url(${heroImage})` } : undefined;
  return (
    <section className="hero">
      <div className={`hero-bg ${hasImage ? 'has-image' : ''}`} style={bgStyle} />
      <Header variant="hero" />
      <div className="hero-media-overlay" />
      <div className="hero-gradient-left" />
      <div className="hero-overlay"></div>
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              CHAUFFAGE & SANITAIRE
              <br />
              À BALDERSHEIM (68)
            </h1>
            <p className="hero-subtitle">
              Votre confort, notre priorité
            </p>
            <p className="hero-description">
              Installation, rénovation & dépannage dans tout le Haut-Rhin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;