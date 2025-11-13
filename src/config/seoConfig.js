/**
 * Constantes SEO et données structurées pour le site Francis Schaub
 */

export const SITE_CONFIG = {
  siteName: 'Francis Schaub',
  siteUrl: 'https://www.francis-schaub.fr',
  locale: 'fr_FR',
  author: 'Francis Schaub',
  description: 'Artisan plombier chauffagiste et carreleur à Baldersheim, Alsace. Services de qualité en plomberie, chauffage, salle de bains et pose de carrelage.',
  keywords: 'plombier Baldersheim, plomberie Mulhouse, chauffage Alsace, carreleur Baldersheim, salle de bains, énergies renouvelables',
  phone: '+33389576162',
  email: 'contact@francis-schaub.fr',
  address: {
    streetAddress: '4 Rue de Battenheim',
    locality: 'Baldersheim',
    region: 'Alsace',
    postalCode: '68270',
    country: 'FR',
  },
  serviceArea: 'Alsace',
  hours: {
    weekday: { opens: '08:00', closes: '12:00' },
    afternoon: { opens: '14:00', closes: '18:00' },
    closed: ['Saturday', 'Sunday'],
  },
};

/**
 * Schéma JSON-LD pour l'organisation
 */
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': SITE_CONFIG.siteUrl,
  name: 'Francis Schaub',
  alternateName: 'FS - Artisan Plombier Chauffagiste Carreleur',
  url: SITE_CONFIG.siteUrl,
  description: SITE_CONFIG.description,
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE_CONFIG.address.streetAddress,
    addressLocality: SITE_CONFIG.address.locality,
    addressRegion: SITE_CONFIG.address.region,
    postalCode: SITE_CONFIG.address.postalCode,
    addressCountry: SITE_CONFIG.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '47.8155',
    longitude: '7.5000',
  },
  image: `${SITE_CONFIG.siteUrl}/logo.png`,
  priceRange: '€€',
  areaServed: {
    '@type': 'Region',
    name: SITE_CONFIG.serviceArea,
  },
  serviceType: ['Plomberie', 'Chauffage', 'Carrelage', 'Salle de bains', 'Énergies renouvelables'],
  knowsLanguage: 'fr',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Service Client',
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    areaServed: SITE_CONFIG.address.country,
    availableLanguage: 'fr',
  },
  sameAs: [
    `https://www.google.com/search?q=Francis+Schaub+plombier+${SITE_CONFIG.address.locality}`,
    'https://www.facebook.com/search/top?q=Francis+Schaub',
    'https://www.linkedin.com/search/results/all/?keywords=Francis%20Schaub',
  ],
});

/**
 * Schéma pour la page d'accueil
 */
export const getHomePageSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Francis Schaub - Accueil',
  url: SITE_CONFIG.siteUrl,
  description: SITE_CONFIG.description,
  isPartOf: {
    '@type': 'WebSite',
    url: SITE_CONFIG.siteUrl,
    name: SITE_CONFIG.siteName,
  },
});

/**
 * Schéma pour les services
 */
export const getServiceSchema = (serviceName, serviceDescription) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: serviceName,
  description: serviceDescription,
  provider: {
    '@type': 'LocalBusiness',
    name: 'Francis Schaub',
    url: SITE_CONFIG.siteUrl,
  },
  areaServed: {
    '@type': 'City',
    name: 'Mulhouse',
  },
  availableLanguage: 'fr',
});

/**
 * Schéma pour les breadcrumbs (navigation)
 */
export const getBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${SITE_CONFIG.siteUrl}${item.url}`,
  })),
});

/**
 * SEO métadonnées pour chaque page principale
 */
export const SEO_PAGES = {
  home: {
    title: 'Francis Schaub - Artisan Plombier & Carreleur à Baldersheim',
    description: 'Découvrez les services de Francis Schaub : plomberie, chauffage, salle de bains et carrelage en Alsace. Devis gratuit - 03 89 57 61 62',
    keywords: 'plombier Baldersheim, plomberie Mulhouse, chauffagiste Alsace, carreleur Baldersheim, salle de bains',
  },
  sanitaire: {
    title: 'Sanitaire & Chauffage - Francis Schaub à Baldersheim',
    description: 'Services complets : plomberie, chauffage, salle de bains. Installation, rénovation et maintenance en Alsace. Tél : 03 89 57 61 62',
    keywords: 'plombier Baldersheim, chauffagiste Alsace, salle de bains Mulhouse, installation chauffage',
  },
  plomberie: {
    title: 'Plomberie Baldersheim - Artisan Francis Schaub',
    description: 'Services de plomberie complète : installation, maintenance et dépannage urgent à Baldersheim et Mulhouse.',
    keywords: 'plomberie Baldersheim, plombier Mulhouse, dépannage plomberie Alsace',
  },
  chauffage: {
    title: 'Chauffage Alsace - Installation & Maintenance',
    description: 'Installation et maintenance de chauffage professionnel à Baldersheim. Experts en systèmes modernes et écologiques.',
    keywords: 'chauffage Alsace, chauffagiste Baldersheim, installation chauffage Mulhouse',
  },
  salleDeBains: {
    title: 'Salle de Bains à Baldersheim - Rénovation Complète',
    description: 'Rénovation complète salle de bains : plomberie, carrelage, design. Professionnel à Baldersheim et région.',
    keywords: 'salle de bains Baldersheim, rénovation salle de bains, carrelage Mulhouse',
  },
  energiesRenouvelables: {
    title: 'Énergies Renouvelables - Alsace - Francis Schaub',
    description: 'Installation pompe à chaleur, panneaux solaires thermiques et systèmes écologiques en Alsace.',
    keywords: 'énergies renouvelables Alsace, pompe à chaleur Baldersheim, chauffage écologique',
  },
  carrelage: {
    title: 'Carrelage & Faïence - Artisan Francis Schaub',
    description: 'Pose de carrelage professionnel : intérieur, extérieur, mosaïque. Artisan spécialisé à Baldersheim.',
    keywords: 'carreleur Baldersheim, pose carrelage Mulhouse, faïence Alsace',
  },
  realisations: {
    title: 'Nos Réalisations - Portfolio Francis Schaub',
    description: 'Découvrez nos projets réussis : plomberie, chauffage, salles de bains et carrelage en Alsace.',
    keywords: 'réalisations, projets, portfolio, plomberie Alsace, carrelage Baldersheim',
  },
  contact: {
    title: 'Contact - Francis Schaub à Baldersheim',
    description: 'Contactez Francis Schaub pour vos besoins. Tél : 03 89 57 61 62 - Email : contact@francis-schaub.fr',
    keywords: 'contact Francis Schaub, devis, demande, Baldersheim, Alsace',
  },
};

export default SITE_CONFIG;
