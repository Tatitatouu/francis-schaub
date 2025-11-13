import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import BackToTop from '../../components/BackToTop';
import { SEO_PAGES, getServiceSchema, getBreadcrumbSchema } from '../../config/seoConfig';
import './SalleDeBains.css';

const SalleDeBains = () => {
  const [visibleNumbers, setVisibleNumbers] = useState([]);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timeline = timelineRef.current;
      const items = timeline.querySelectorAll('.timeline-item');
      const windowHeight = window.innerHeight;
      const newVisibleNumbers = [];

      items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const itemMiddle = itemRect.top + itemRect.height / 2;
        
        // L'élément est visible quand il est dans les 70% de l'écran
        const isVisible = itemMiddle < windowHeight * 0.7 && itemRect.bottom > 0;
        
        if (isVisible) {
          newVisibleNumbers.push(index + 1);
        }
      });

      // Met à jour uniquement si le tableau a changé
      setVisibleNumbers(prev => {
        const prevSorted = prev.sort((a, b) => a - b).join(',');
        const newSorted = newVisibleNumbers.sort((a, b) => a - b).join(',');
        
        if (prevSorted !== newSorted) {
          return newVisibleNumbers;
        }
        return prev;
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial pour vérifier la position au chargement

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{SEO_PAGES.salleDeBains.title}</title>
        <meta name="description" content={SEO_PAGES.salleDeBains.description} />
        <link rel="canonical" href="https://www.francis-schaub.fr/salle-de-bains" />
        <script type="application/ld+json">
          {JSON.stringify(getServiceSchema('Rénovation de Salle de Bains', SEO_PAGES.salleDeBains.description))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(getBreadcrumbSchema([
            { name: 'Accueil', url: '/' },
            { name: 'Services', url: '/services' },
            { name: 'Salle de Bains', url: '/salle-de-bains' }
          ]))}
        </script>
      </Helmet>
      <div className="salle-bains-page page-with-hero">
      <Header variant="salledebains" />
      
      <main className="salle-bains-main page-content">
        <section className="salle-bains-hero">
          <div className="salle-bains-container">
            <div className="salle-bains-hero-content">
              <h1 className="salle-bains-hero-title">
                Succombez au confort de la salle de bains clé en main !
              </h1>
              <p className="salle-bains-hero-subtitle">
                Rénovation complète et aménagements sur mesure à Baldersheim
              </p>
              <div className="salle-bains-hero-features">
                <div className="hero-feature">
                  <span className="feature-icon">🔑</span>
                  <span>Projet clé en main</span>
                </div>
                <div className="hero-feature">
                  <span className="feature-icon">🎨</span>
                  <span>Design personnalisé</span>
                </div>
                <div className="hero-feature">
                  <span className="feature-icon">♿</span>
                  <span>Aménagements PMR</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="salle-bains-sections-wrapper">
          {/* Section Introduction */}
          <section className="salle-bains-section intro">
            <div className="salle-bains-container">
              <div className="salle-bains-intro-content">
                <div className="intro-text">
                  <p>
                    Votre <strong>salle de bains</strong> a pris un coup de vieux ? Vous rêvez d'un espace plus 
                    <strong> fonctionnel, mieux agencé</strong>, sans devoir faire appel à trois corps de métiers
                    différents ? Ou vous souhaitez une <strong>rénovation adaptée à une personne à mobilité réduite</strong> ?
                  </p>
                  <p>
                    Les <strong>équipes de SCHAUB Francis ETS</strong> allient <strong>polyvalence et expertise </strong> 
                    pour gérer votre projet de <strong>de A à Z</strong>. Du <strong>conseil à la réalisation</strong>, nous
                    assurons une <strong>rénovation complète</strong>, soignée et parfaitement coordonnée.
                  </p>
                </div>
                
                <div className="intro-highlight">
                  <div className="highlight-icon">💡</div>
                  <div className="highlight-content">
                    <h3>Notre Engagement</h3>
                    <p>
                      Une fois contactés, nous venons à votre rencontre pour étudier la nature de votre besoin. 
                      Nous collectons des paramètres tels que : les dimensions de la pièce à rénover, 
                      la configuration des infrastructures existantes, le type d'équipements souhaités, 
                      vos envies esthétiques : style recherché, coloris souhaités, etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Services Clé en Main */}
          <section className="salle-bains-section services">
            <div className="salle-bains-container">
              <div className="salle-bains-section-header">
                <h2 className="salle-bains-section-title">
                  Salle de bains clé en main : SCHAUB Francis ETS s'occupe de tout !
                </h2>
                <p className="salle-bains-section-subtitle">
                  Un interlocuteur unique pour votre projet complet
                </p>
              </div>
              
              <div className="services-intro">
                <p>
                  En nous choisisant pour votre <strong>salle de bains clé en main</strong>, vous bénéficiez d'un interlocuteur
                  unique du début à la fin. Nous vous accompagnons <strong>de l'étude de votre projet à la livraison du chantier</strong>, 
                  avec un suivi clair, simple et sans intermédiaire.
                </p>
              </div>
              
              <div className="services-timeline" ref={timelineRef}>
                <div className={`timeline-item ${visibleNumbers.includes(1) ? 'visible' : ''}`}>
                  <div className="timeline-number">1</div>
                  <div className="timeline-content">
                    <h4>Réseaux et Infrastructures</h4>
                    <p>Pose et rénovation des réseaux d'eau et d'évacuation.</p>
                  </div>
                </div>
                
                <div className={`timeline-item ${visibleNumbers.includes(2) ? 'visible' : ''}`}>
                  <div className="timeline-number">2</div>
                  <div className="timeline-content">
                    <h4>Équipements Sanitaires</h4>
                    <p>Douche, baignoire, vasque, WC...  On installe tout !</p>
                  </div>
                </div>
                
                <div className={`timeline-item ${visibleNumbers.includes(3) ? 'visible' : ''}`}>
                  <div className="timeline-number">3</div>
                  <div className="timeline-content">
                    <h4>Revêtements</h4>
                    <p>Pose de placo hydrofuge et finitions de plâtrerie.</p>
                  </div>
                </div>
                
                <div className={`timeline-item ${visibleNumbers.includes(4) ? 'visible' : ''}`}>
                  <div className="timeline-number">4</div>
                  <div className="timeline-content">
                    <h4>Carrelage</h4>
                    <p>Pose soignée de carrelage mural et au sol.</p>
                  </div>
                </div>
                
                <div className={`timeline-item ${visibleNumbers.includes(5) ? 'visible' : ''}`}>
                  <div className="timeline-number">5</div>
                  <div className="timeline-content">
                    <h4>Finitions</h4>
                    <p>Peinture, miroirs... On peaufine chaque détail.</p>
                  </div>
                </div>
              </div>
              
              <div className="services-conclusion">
                <div className="conclusion-highlight">
                  <h3>Notre promesse</h3>
                  <p>
                  Nous créons des salles de bains fonctionnelles, élégantes et pensées pour votre confort au quotidien.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section PMR */}
          <section className="salle-bains-section pmr">
            <div className="salle-bains-container">
              <div className="salle-bains-section-header">
                <h2 className="salle-bains-section-title">Focus sur les aménagements PMR</h2>
                <p className="salle-bains-section-subtitle">
                  Accessibilité et sécurité pour tous
                </p>
              </div>
              
              <div className="pmr-intro">
                <div className="pmr-context">
                  <p>
                    Le temps qui passe impacte parfois la mobilité des personnes âgées. De même, les accidents de la vie 
                    peuvent mettre à mal la capacité d'un individu à se mouvoir. Afin de <strong>permettre aux Personnes à 
                    Mobilité Réduite de se maintenir à domicile en toute sécurité</strong>, il est primordial d'aménager 
                    leur lieu de vie en conséquence.
                  </p>
                  <p>
                    Dans ce contexte, la salle d'eau est souvent une des pièces qu'il convient de transformer en priorité.
                  </p>
                </div>

              </div>
              
              <div className="pmr-services">
                <div className="pmr-service-card">
                  <div className="pmr-service-icon">🚿</div>
                  <div className="pmr-service-content">
                    <h4>Barres de maintien</h4>
                    <p>Installation de barres de sécurité pour faciliter les déplacements</p>
                  </div>
                </div>
                
                <div className="pmr-service-card">
                  <div className="pmr-service-icon">🪑</div>
                  <div className="pmr-service-content">
                    <h4>Siège de douche escamotable</h4>
                    <p>Confort et sécurité pour la toilette quotidienne</p>
                  </div>
                </div>
                
                <div className="pmr-service-card">
                  <div className="pmr-service-icon">🚿</div>
                  <div className="pmr-service-content">
                    <h4>Douche avec receveur extra plat</h4>
                    <p>Accès facilité et réduction des risques de chute</p>
                  </div>
                </div>

                <div className="pmr-service-card">
                  <div className="pmr-service-icon">🛡️</div>
                  <div className="pmr-service-content">
                    <h4>Revêtement anti-dérapant</h4>
                    <p>Sécurité maximale pour éviter les glissades</p>
                  </div>
                </div>
              </div>
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

export default SalleDeBains;