import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CookieBanner.css';

function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà accepté/refusé les cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    
    // Recharger la page pour activer GTM
    window.location.reload();
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    console.log('Cookies refusés');
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-content">
        <div className="cookie-banner-text">
          <h3 className="cookie-banner-title">🍪 Gestion des cookies</h3>
          <p className="cookie-banner-description">
            Nous utilisons des cookies et Google Tag Manager pour améliorer votre expérience 
            et analyser l'utilisation du site. Les cookies essentiels sont toujours actifs.
            <Link to="/confidentialite" className="cookie-link"> En savoir plus</Link>
          </p>
        </div>

        <div className="cookie-banner-actions">
          <button 
            className="cookie-btn cookie-btn-reject"
            onClick={handleReject}
          >
            Refuser
          </button>
          <button 
            className="cookie-btn cookie-btn-accept"
            onClick={handleAccept}
          >
            Accepter
          </button>
        </div>

        <button 
          className="cookie-banner-close"
          onClick={handleReject}
          aria-label="Fermer la banneau"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}

export default CookieBanner;
