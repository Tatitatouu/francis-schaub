import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import BackToTop from '../../components/BackToTop';
import { SEO_PAGES, getBreadcrumbSchema } from '../../config/seoConfig';
import './Realisations.css';

const Carousel = ({ realisations, current, setCurrent, theme = '' }) => {
  const nextSlide = () => setCurrent((current + 1) % realisations.length);
  const prevSlide = () => setCurrent((current - 1 + realisations.length) % realisations.length);
  const goToSlide = (index) => setCurrent(index);
  
  // Précharger toutes les images du carousel (WebP + fallback)
  useEffect(() => {
    realisations.forEach((real) => {
      // Précharger WebP
      const webpLink = document.createElement('link');
      webpLink.rel = 'preload';
      webpLink.as = 'image';
      webpLink.href = real.image;
      webpLink.type = 'image/webp';
      document.head.appendChild(webpLink);
      
      // Précharger fallback si disponible
      if (real.fallback) {
        const fallbackLink = document.createElement('link');
        fallbackLink.rel = 'preload';
        fallbackLink.as = 'image';
        fallbackLink.href = real.fallback;
        document.head.appendChild(fallbackLink);
      }
    });
  }, [realisations]);
  
  const currentReal = realisations[current];
  
  return (
    <div className="carousel-container">
      <button 
        className="carousel-btn prev" 
        onClick={prevSlide}
        aria-label="Projet précédent"
      >
        ‹
      </button>
      
      <div className="carousel-content">
        <div className={`realisation-card-large ${theme}`}>
          <div className={`realisation-image-container ${theme}`}>
            <picture>
              <source srcSet={currentReal.image} type="image/webp" />
              <img 
                src={currentReal.fallback || currentReal.image} 
                alt={currentReal.title}
                className="realisation-image"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="realisation-content">
            <h3>{currentReal.title}</h3>
            <p>{currentReal.description}</p>
            <div className="realisation-tags">
              {currentReal.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <button 
        className="carousel-btn next" 
        onClick={nextSlide}
        aria-label="Projet suivant"
      >
        ›
      </button>
      
      <div className="carousel-indicators">
        {realisations.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === current ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Aller au projet ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const salleDeBainsRealisations = [
  {
    image: '/images/contemporaine.webp',
    fallback: '/images/contemporaine.jpeg',
    title: 'Salle de bains contemporaine',
    description: 'Rénovation complète avec douche italienne, carrelage grand format et vasque design',
    tags: ['Douche italienne', 'Moderne']
  },
  {
    image: '/images/salle-bains-4.webp',
    fallback: '/images/salle-bains-4.jpg',
    title: 'Aménagement PMR',
    description: 'Transformation adaptée avec receveur extra-plat, barres de maintien et siège escamotable',
    tags: ['PMR', 'Sécurité']
  },
  {
    image: '/images/salle-bain-familiale.webp',
    fallback: '/images/salle-bain-familiale.jpeg',
    title: 'Salle de bains familiale',
    description: 'Espace optimisé avec baignoire, double vasque et rangements sur mesure',
    tags: ['Familiale', 'Optimisation']
  },
  {
    image: '/images/salle-bains-4.webp',
    fallback: '/images/salle-bains-4.jpg',
    title: 'Salle d\'eau zen',
    description: 'Ambiance spa avec matériaux naturels, éclairage tamisé et finitions raffinées',
    tags: ['Zen', 'Naturel']
  }
];

const chauffageRealisations = [
  {
    image: '/images/chauffage-1.webp',
    fallback: '/images/chauffage-1.jpg',
    title: 'Chaudière à condensation',
    description: 'Installation complète avec remplacement de l\'ancienne chaudière et optimisation du circuit',
    tags: ['Condensation', 'Économique']
  },
  {
    image: '/images/chauffage-2.webp',
    fallback: '/images/chauffage-2.jpg',
    title: 'Pompe à chaleur air/eau',
    description: 'Système complet avec radiateurs basse température pour un confort optimal',
    tags: ['PAC', 'Écologique']
  },
  {
    image: '/images/chauffage-3.webp',
    fallback: '/images/chauffage-3.jpg',
    title: 'Plancher chauffant',
    description: 'Installation de plancher chauffant hydraulique dans une maison neuve',
    tags: ['Confort', 'Neuf']
  }
];

const sanitaireRealisations = [
  {
    image: '/images/sanitaire-1.webp',
    fallback: '/images/sanitaire-1.jpg',
    title: 'Rénovation complète sanitaire',
    description: 'Remplacement de toute la plomberie avec mise aux normes et installation de nouveaux équipements',
    tags: ['Rénovation', 'Normes']
  },
  {
    image: '/images/suspendu.webp',
    fallback: '/images/suspendu.jpeg',
    title: 'Installation de WC suspendus',
    description: 'Pose de WC suspendus avec bâti-support et optimisation de l\'espace',
    tags: ['Design', 'Gain de place']
  },
  {
    image: '/images/sanitaire-3.webp',
    fallback: '/images/sanitaire-3.jpg',
    title: 'Adoucisseur d\'eau',
    description: 'Installation d\'un système d\'adoucissement pour protéger les équipements et améliorer le confort',
    tags: ['Confort', 'Protection']
  }
];

const Realisations = () => {
  const [currentSalleDeBains, setCurrentSalleDeBains] = useState(0);
  const [currentChauffage, setCurrentChauffage] = useState(0);
  const [currentSanitaire, setCurrentSanitaire] = useState(0);

  return (
    <>
      <Helmet>
        <title>{SEO_PAGES.realisations.title}</title>
        <meta name="description" content={SEO_PAGES.realisations.description} />
        <link rel="canonical" href="https://www.francis-schaub.fr/realisations" />
        <script type="application/ld+json">
          {JSON.stringify(getBreadcrumbSchema([
            { name: 'Accueil', url: '/' },
            { name: 'Réalisations', url: '/realisations' }
          ]))}
        </script>
      </Helmet>
      <div className="realisations-page page-with-hero">
        <Header variant="realisations" />
        
        <main className="realisations-main page-content">
          <section className="realisations-hero">
            <div className="realisations-container">
              <div className="realisations-hero-content">
                <h1 className="realisations-hero-title">
                  Nos Réalisations
                </h1>
                <p className="realisations-hero-subtitle">
                  Découvrez nos projets de chauffage, sanitaire et salles de bains clé en main
                </p>
              </div>
            </div>
          </section>

          <div className="realisations-sections-wrapper">
            {/* Section Salles de Bains */}
            <section className="realisations-section salle-bains">
              <div className="realisations-container">
                <div className="section-header">
                  <h2 className="section-title">🛁 Salles de Bains</h2>
                  <p className="section-subtitle">
                    Des espaces transformés avec soin et expertise
                  </p>
                </div>
                
                <Carousel 
                  realisations={salleDeBainsRealisations}
                  current={currentSalleDeBains}
                  setCurrent={setCurrentSalleDeBains}
                  theme="sdb-bg"
                />
              </div>
            </section>

            {/* Section Chauffage */}
            <section className="realisations-section chauffage">
              <div className="realisations-container">
                <div className="section-header">
                  <h2 className="section-title">🔥 Chauffage</h2>
                  <p className="section-subtitle">
                    Des installations performantes et économiques
                  </p>
                </div>
                
                <Carousel 
                  realisations={chauffageRealisations}
                  current={currentChauffage}
                  setCurrent={setCurrentChauffage}
                  theme="chauffage-bg"
                />
              </div>
            </section>

            {/* Section Sanitaire */}
            <section className="realisations-section sanitaire">
              <div className="realisations-container">
                <div className="section-header">
                  <h2 className="section-title">🔧 Sanitaire</h2>
                  <p className="section-subtitle">
                    Installations et rénovations de qualité
                  </p>
                </div>
                
                <Carousel 
                  realisations={sanitaireRealisations}
                  current={currentSanitaire}
                  setCurrent={setCurrentSanitaire}
                  theme="sanitaire-bg"
                />
              </div>
            </section>
          </div>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Realisations;