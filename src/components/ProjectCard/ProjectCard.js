import React, { useState, useEffect } from 'react';
import './ProjectCard.css';

const ProjectCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Attendre 5 secondes avant de faire apparaître la carte
    const appearTimer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    // Après 5s d'apparition + 4s de visibilité = 9s total, minimiser la carte
    const minimizeTimer = setTimeout(() => {
      setIsMinimized(true);
    }, 9000);

    return () => {
      clearTimeout(appearTimer);
      clearTimeout(minimizeTimer);
    };
  }, []);

  const handleClick = () => {
    if (isMinimized) {
      // Si minimisé, on expand au lieu de rediriger
      setIsMinimized(false);
      // Re-minimiser après 8 secondes
      setTimeout(() => setIsMinimized(true), 8000);
    } else {
      // Si expanded, rediriger vers contact
      window.location.href = '/contact';
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`project-card ${isMinimized ? 'minimized' : ''}`} 
      onClick={handleClick}
    >
      <div className="project-card-content">
        <div className="project-card-text">
          <h3 className="project-card-title">
            Vous avez un projet ?
          </h3>
          <p className="project-card-subtitle">
            Discutons-en gratuitement!
          </p>
        </div>
        <div className="project-card-arrow">
          →
        </div>
      </div>
      
      {/* Version minimisée */}
      <div className="project-card-mini">
        <span className="mini-text">💬 Projet ?</span>
      </div>
    </div>
  );
};

export default ProjectCard;