import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './Footer.css';
import logo from '../../assets/branding/logo.svg';

const Footer = () => {
  const location = useLocation();
  const isOnSelectionPage = location.pathname === '/';

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Lien retour au choix - visible uniquement sur les pages sanitaire/carrelage */}
        {!isOnSelectionPage && (
          <div className="footer-back-to-choice">
            <Link to="/" className="footer-back-link">
              <ArrowLeft size={18} />
              <span>Revenir au choix d'activité</span>
            </Link>
          </div>
        )}
        
        {/* Section principale */}
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo-wrapper">
              <img src={logo} alt="Francis Schaub" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">
              Expert en sanitaire, chauffage et climatisation depuis plus de 30 ans
            </p>
          </div>

          <div className="footer-services">
            <h4 className="footer-title">Nos Services</h4>
            <ul className="footer-links">
              <li><Link to="/sanitaire/plomberie">Plomberie générale</Link></li>
              <li><Link to="/sanitaire/chauffage">Chauffage & PAC</Link></li>
              <li><Link to="/sanitaire/salle-de-bains">Salle de bains</Link></li>
              <li><Link to="/carrelage">Carrelage</Link></li>
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
              <Link to="/mentions-legales">Mentions légales</Link>
              <Link to="/confidentialite">Confidentialité</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;