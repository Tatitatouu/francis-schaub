import { useEffect, useState } from 'react';

const GTM_ID = 'GTM-KCD9XXHP';

export const useGoogleTagManager = () => {
  const [gtmLoaded, setGtmLoaded] = useState(false);

  useEffect(() => {
    const loadGTM = () => {
      const cookieConsent = localStorage.getItem('cookieConsent');
      
      if (cookieConsent === 'accepted' && !gtmLoaded) {
        // Initialiser la datalayer
        window.dataLayer = window.dataLayer || [];
        
        // Fonction gtag
        function gtag() {
          window.dataLayer.push(arguments);
        }
        
        // Initialiser gtag
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('consent', 'default', {
          'analytics_storage': 'granted',
          'ad_storage': 'granted',
          'ad_personalization': 'granted'
        });
        gtag('config', GTM_ID, {
          'allow_google_signals': true,
          'allow_ad_personalization_signals': true,
          'anonymize_ip': false
        });

        // Script GTM (noscript fallback)
        const noscript = document.createElement('noscript');
        noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
        document.body.insertBefore(noscript, document.body.firstChild);

        // Script GTM (head)
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`;
        
        script.onload = () => {
          if (process.env.NODE_ENV === 'development') {
            console.log('✓ Google Tag Manager chargé avec succès');
          }
          setGtmLoaded(true);
        };
        
        script.onerror = () => {
          if (process.env.NODE_ENV === 'development') {
            console.warn('✗ Erreur lors du chargement de Google Tag Manager');
          }
        };
        
        document.head.insertBefore(script, document.head.firstChild);
      } else if (cookieConsent === 'rejected') {
        // Consentement refusé
        if (process.env.NODE_ENV === 'development') {
          console.log('🚫 Consentement aux cookies refusé - GTM non chargé');
        }
      }
    };

    // Charger GTM au démarrage
    loadGTM();

    // Écouter les changements de consentement
    const handleCookieConsent = () => {
      loadGTM();
    };

    window.addEventListener('cookieConsent', handleCookieConsent);

    return () => {
      window.removeEventListener('cookieConsent', handleCookieConsent);
    };
  }, [gtmLoaded]);
};

export default useGoogleTagManager;
