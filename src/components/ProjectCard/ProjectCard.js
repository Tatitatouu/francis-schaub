import React from 'react';
import './ProjectCard.css';

const ProjectCard = () => {
  return (
    <div className="project-card" onClick={() => window.location.href = '/contact'}>
      <div className="project-card-content">
        <h3 className="project-card-title">
          Vous avez un projet ?
        </h3>
        <p className="project-card-subtitle">
          Discutons-en gratuitement!
        </p>
        <div className="project-card-arrow">
          →
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;