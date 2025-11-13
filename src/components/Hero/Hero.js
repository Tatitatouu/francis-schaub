import React, { useState, useEffect, useRef } from 'react';
import Header from '../Header';
import './Hero.css';
import heroImage from '../../assets/image/sdbia.webp';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroBgRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageLoaded(true);
          // Stop observing once image is triggered to load
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '50px' }
    );

    const currentRef = heroBgRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const bgStyle = imageLoaded ? { backgroundImage: `url(${heroImage})` } : undefined;

  return (
    <section className="hero">
      <div 
        ref={heroBgRef}
        className={`hero-bg ${imageLoaded ? 'has-image' : ''}`} 
        style={bgStyle} 
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