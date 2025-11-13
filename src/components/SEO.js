import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Composant SEO pour gérer les métadonnées dynamiques
 * @param {string} title - Titre de la page (sera complété avec le nom du site)
 * @param {string} description - Description meta pour le SEO
 * @param {string} canonical - URL canonique de la page
 * @param {object} structuredData - Données structurées JSON-LD
 * @param {string} ogImage - Image pour les réseaux sociaux
 * @param {string} ogType - Type Open Graph (article, website, etc.)
 */
export const SEO = ({
  title,
  description,
  canonical,
  structuredData = null,
  ogImage = 'https://www.francis-schaub.fr/og-image.png',
  ogType = 'website',
}) => {
  const siteName = 'Francis Schaub';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  useEffect(() => {
    // Mettre à jour le titre de la page
    if (title) {
      document.title = fullTitle;
    }
  }, [title, fullTitle]);

  return (
    <Helmet>
      {/* Métadonnées de base */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Canonique */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Données structurées */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Moteurs de recherche */}
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Langue */}
      <html lang="fr" />
    </Helmet>
  );
};

export default SEO;
