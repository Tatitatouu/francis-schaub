import React from 'react';

const MobileBurgerMenu = ({ isOpen, onToggle }) => {
  return (
    <button
      className={`mobile-burger ${isOpen ? 'open' : ''}`}
      onClick={onToggle}
      aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      aria-expanded={isOpen}
    >
      <span className="burger-line"></span>
      <span className="burger-line"></span>
      <span className="burger-line"></span>
    </button>
  );
};

export default MobileBurgerMenu;