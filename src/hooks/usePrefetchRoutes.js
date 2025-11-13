// src/hooks/usePrefetchRoutes.js
// Prefetch des routes pour améliorer la navigation

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ROUTE_PREFETCH_MAP = {
  '/': ['/sanitaire', '/carrelage', '/contact'],
  '/sanitaire': ['/sanitaire/plomberie', '/sanitaire/chauffage', '/sanitaire/salle-de-bains', '/realisations'],
  '/carrelage': ['/carrelage/contact', '/realisations'],
  '/sanitaire/plomberie': ['/sanitaire/realisations'],
  '/sanitaire/chauffage': ['/sanitaire/realisations'],
  '/sanitaire/salle-de-bains': ['/realisations'],
  '/realisations': ['/contact'],
};

/**
 * Hook pour prefetch les routes associées à la page actuelle
 */
export const usePrefetchRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    // Vérifier si le navigateur supporte le prefetch
    if (!navigator.permissions) {
      return;
    }

    const currentPath = location.pathname;
    const routesToPrefetch = ROUTE_PREFETCH_MAP[currentPath] || [];

    // Prefetch les routes avec link[rel="prefetch"]
    routesToPrefetch.forEach((route) => {
      // Créer un lien prefetch (ne pas charger, juste indiquer au navigateur)
      const linkElement = document.createElement('link');
      linkElement.rel = 'prefetch';
      linkElement.href = route;
      linkElement.as = 'document';
      document.head.appendChild(linkElement);

      if (process.env.NODE_ENV === 'development') {
        console.log(`Prefetching route: ${route}`);
      }
    });
  }, [location.pathname]);
};

export default usePrefetchRoutes;
