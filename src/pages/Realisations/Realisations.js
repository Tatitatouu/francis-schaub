import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import BackToTop from '../../components/BackToTop';
import { SEO_PAGES, getBreadcrumbSchema } from '../../config/seoConfig';
import './Realisations.css';

const Realisations = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const realisations = [
    { id: 1, image: '/images/nosréalisations (1).png', category: 'salle-bains' },
    { id: 2, image: '/images/nosréalisations (2).png', category: 'chauffage' },
    { id: 3, image: '/images/nosréalisations (3).png', category: 'sanitaire' },
    { id: 4, image: '/images/nosréalisations (4).png', category: 'carrelage' },
    { id: 5, image: '/images/nosréalisations (5).png', category: 'salle-bains' },
    { id: 6, image: '/images/nosréalisations (6).png', category: 'chauffage' },
    { id: 7, image: '/images/nosréalisations (7).png', category: 'sanitaire' },
    { id: 8, image: '/images/nosréalisations (8).png', category: 'carrelage' },
    { id: 9, image: '/images/nosréalisations (9).png', category: 'salle-bains' },
    { id: 10, image: '/images/nosréalisations (10).png', category: 'chauffage' },
    { id: 11, image: '/images/nosréalisations (11).png', category: 'sanitaire' },
    { id: 12, image: '/images/nosréalisations (12).png', category: 'carrelage' },
    { id: 13, image: '/images/nosréalisations (13).png', category: 'salle-bains' },
    { id: 14, image: '/images/nosréalisations (14).png', category: 'chauffage' },
    { id: 15, image: '/images/nosréalisations (15).png', category: 'sanitaire' },
    { id: 16, image: '/images/nosréalisations (16).jpeg', category: 'carrelage' },
    { id: 17, image: '/images/nosréalisations (17).jpeg', category: 'salle-bains' },
    { id: 18, image: '/images/nosréalisations (18).jpeg', category: 'chauffage' },
    { id: 19, image: '/images/nosréalisations (19).jpeg', category: 'sanitaire' },
    { id: 20, image: '/images/nosréalisations (20).jpeg', category: 'carrelage' },
    { id: 21, image: '/images/nosréalisations (21).jpeg', category: 'salle-bains' },
    { id: 22, image: '/images/nosréalisations (22).jpeg', category: 'chauffage' },
    { id: 23, image: '/images/nosréalisations (23).jpeg', category: 'sanitaire' },
    { id: 24, image: '/images/nosréalisations (24).jpeg', category: 'carrelage' },
    { id: 25, image: '/images/nosréalisations (25).jpeg', category: 'salle-bains' },
    { id: 26, image: '/images/nosréalisations (26).jpeg', category: 'chauffage' },
    { id: 27, image: '/images/nosréalisations2.jpeg', category: 'sanitaire' },
  ];

  // Lightbox navigation
  const currentIndex = selectedImage ? realisations.findIndex(r => r.id === selectedImage.id) : -1;
  
  const handlePrevImage = () => {
    if (currentIndex > 0) {
      setSelectedImage(realisations[currentIndex - 1]);
    }
  };
  
  const handleNextImage = () => {
    if (currentIndex < realisations.length - 1) {
      setSelectedImage(realisations[currentIndex + 1]);
    }
  };

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
      <div className="realisations-page">
        <Header variant="realisations" />
        
        <main className="realisations-main">
          {/* Hero Section */}
          <section className="realisations-hero">
            <div className="realisations-hero-content">
              <h1 className="realisations-hero-title">Nos Réalisations</h1>
              <p className="realisations-hero-subtitle">
                Découvrez nos projets de chauffage, sanitaire, carrelage et salles de bains
              </p>
            </div>
          </section>

          {/* Gallery Section */}
          <section className="realisations-gallery-section">
            <div className="realisations-container">
              <div className="gallery-grid">
                {realisations.map((real) => (
                  <div 
                    key={real.id} 
                    className="gallery-item"
                    onClick={() => setSelectedImage(real)}
                  >
                    <img 
                      src={real.image} 
                      alt={`Réalisation ${real.id}`}
                      className="gallery-image"
                      loading="lazy"
                    />
                    <div className="gallery-overlay">
                      <button className="view-btn">Voir en détail</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="lightbox" onClick={() => setSelectedImage(null)}>
            <button 
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Fermer"
            >
              ✕
            </button>
            
            <button 
              className="lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              disabled={currentIndex === 0}
              aria-label="Image précédente"
            >
              ‹
            </button>

            <div className="lightbox-content">
              <img 
                src={selectedImage.image} 
                alt={`Réalisation ${selectedImage.id}`}
                className="lightbox-image"
              />
            </div>

            <button 
              className="lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              disabled={currentIndex === realisations.length - 1}
              aria-label="Image suivante"
            >
              ›
            </button>

            <div className="lightbox-counter">
              {currentIndex + 1} / {realisations.length}
            </div>
          </div>
        )}
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Realisations;