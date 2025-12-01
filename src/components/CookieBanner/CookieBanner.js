import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CookieBanner.css';

function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Attendre un peu pour une meilleure UX (éviter les flash)
    const timer = setTimeout(() => {
      const cookieConsent = localStorage.getItem('cookieConsent');
      if (!cookieConsent) {
        setShowBanner(true);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    setIsClosing(true);
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    localStorage.setItem('cookieConsentVersion', '1.0');
    
    setTimeout(() => {
      setShowBanner(false);
      // Déclencher un événement personnalisé pour que le hook GTM réagisse
      window.dispatchEvent(new Event('cookieConsent'));
    }, 300);
  };

  const handleReject = () => {
    setIsClosing(true);
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    localStorage.setItem('cookieConsentVersion', '1.0');
    
    setTimeout(() => {
      setShowBanner(false);
    }, 300);
  };

  if (!showBanner) return null;

  return (
    <div className={`cookie-banner ${isClosing ? 'closing' : ''}`}>
      <div className="cookie-banner-content">
        <div className="cookie-banner-text">
          <h3 className="cookie-banner-title">🍪 Gestion des cookies et données</h3>
          <p className="cookie-banner-description">
            Nous utilisons des cookies et Google Tag Manager pour analyser votre utilisation du site 
            et améliorer votre expérience. Les cookies essentiels sont toujours actifs.
            <Link to="/confidentialite" className="cookie-link"> En savoir plus sur notre politique de confidentialité</Link>
          </p>
        </div>

        <div className="cookie-banner-actions">
          <button 
            className="cookie-btn cookie-btn-reject"
            onClick={handleReject}
            aria-label="Refuser les cookies analytiques"
          >
            Refuser
          </button>
          <button 
            className="cookie-btn cookie-btn-accept"
            onClick={handleAccept}
            aria-label="Accepter tous les cookies"
          >
            Accepter tous
          </button>
        </div>

        <button 
          className="cookie-banner-close"
          onClick={handleReject}
          aria-label="Fermer la banneau des cookies"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}

export default CookieBanner;
