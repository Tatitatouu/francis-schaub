import { useEffect } from 'react';

const GTM_ID = 'GTM-KCD9XXHP';

export const useGoogleTagManager = () => {
  useEffect(() => {
    // Vérifier le consentement cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    // Charger GTM seulement si l'utilisateur a accepté les cookies
    if (cookieConsent === 'accepted') {
      // Script GTM (noscript fallback)
      const noscript = document.createElement('noscript');
      noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.insertBefore(noscript, document.body.firstChild);

      // Script GTM (head)
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`;
      document.head.insertBefore(script, document.head.firstChild);

      // Initialiser gtag
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', GTM_ID, {
        'allow_google_signals': true,
        'allow_ad_personalization_signals': true
      });

      console.log('Google Tag Manager chargé');
    } else if (cookieConsent === 'rejected') {
      console.log('Google Tag Manager désactivé (cookies refusés)');
    }
  }, []);
};

export default useGoogleTagManager;
