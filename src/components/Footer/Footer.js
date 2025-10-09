import React from 'react';
import './Footer.css';
import logo from '../../assets/branding/logo.svg';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Section principale */}
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo-wrapper">
              <img src={logo} alt="Francis Schaub" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">
              Expert en sanitaire, chauffage et climatisation depuis plus de 15 ans
            </p>
          </div>

          <div className="footer-services">
            <h4 className="footer-title">Nos Services</h4>
            <ul className="footer-links">
              <li><a href="#plomberie">Plomberie générale</a></li>
              <li><a href="#chauffage">Chauffage & PAC</a></li>
              <li><a href="#climatisation">Climatisation</a></li>
              <li><a href="#rehabilitation">Réhabilitation</a></li>
            </ul>
          </div>

          <div className="footer-hours">
            <h4 className="footer-title">Horaires</h4>
            <div className="hours-list">
              <div className="hours-item">
                <span className="day">Lun - Ven</span>
                <span className="time">8h-12h 14h-18h</span>
              </div>
              <div className="hours-item emergency">
                <span className="day">Urgences</span>
                <span className="time">Réservé aux clients</span>
              </div>
            </div>
          </div>
        </div>
        {/* Section bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>&copy; 2025 Francis Schaub. Tous droits réservés.</p>
            <div className="footer-legal">
              <a href="#mentions">Mentions légales</a>
              <a href="#confidentialite">Confidentialité</a>
              <a href="#cgv">CGV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;