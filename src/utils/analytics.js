/**
 * Utilitaire pour le tracking Google Analytics
 * À intégrer dans le projet pour suivre les métriques SEO
 */

// Configuration Google Analytics 4
export const GA4_ID = 'G-XXXXXXXXXX'; // À remplacer avec l'ID GA4

/**
 * Initialiser Google Analytics
 * À appeler une seule fois au lancement de l'app
 */
export const initializeGA = (gaId = GA4_ID) => {
  if (!gaId) {
    console.warn('Google Analytics ID not configured');
    return;
  }

  // Créer le script Google Analytics
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  // Initialiser gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', gaId, {
    'page_path': window.location.pathname,
    'anonymize_ip': true, // RGPD
    'cookie_flags': 'SameSite=None;Secure',
  });

  window.gtag = gtag;
};

/**
 * Tracker des événements
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

/**
 * Tracker les vues de page
 */
export const trackPageView = (path, title = '') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      'page_path': path,
      'page_title': title,
    });
  }
};

/**
 * Tracker les conversions (demande de devis, contact, etc.)
 */
export const trackConversion = (conversionType, value = null) => {
  trackEvent('conversion', {
    'conversion_type': conversionType,
    'value': value,
  });
};

/**
 * Events personnalisés utiles
 */
export const EVENTS = {
  // Service views
  SERVICE_VIEW: 'service_view',
  
  // Contact
  CONTACT_FORM_START: 'contact_form_start',
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  CONTACT_PHONE_CLICK: 'contact_phone_click',
  
  // Réalisations
  REALISATIONS_FILTER: 'realisations_filter',
  PROJECT_VIEW: 'project_view',
  
  // Scroll depth
  SCROLL_25: 'scroll_25',
  SCROLL_50: 'scroll_50',
  SCROLL_75: 'scroll_75',
  SCROLL_90: 'scroll_90',
  
  // Engagement
  FAQ_EXPAND: 'faq_expand',
  BUTTON_CLICK: 'button_click',
};

export default {
  initializeGA,
  trackEvent,
  trackPageView,
  trackConversion,
  EVENTS,
};
