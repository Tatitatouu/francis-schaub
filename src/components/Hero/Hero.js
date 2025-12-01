import React, { useState, useEffect, useRef } from 'react';
import Header from '../Header';
import './Hero.css';
import heroImage from '../../assets/image/sdbia.webp';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(true);
  const heroBgRef = useRef(null);

  return (
    <section className="hero">
      <img
        ref={heroBgRef}
        src={heroImage}
        alt="Hero Background"
        className="hero-bg-image"
        fetchPriority="high"
        decoding="async"
      />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;