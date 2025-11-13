import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import BackToTop from '../../components/BackToTop';
import { SEO_PAGES, getServiceSchema, getBreadcrumbSchema } from '../../config/seoConfig';
import './Chauffage.css';

const Chauffage = () => {
  return (
    <>
      <Helmet>
        <title>{SEO_PAGES.chauffage.title}</title>
        <meta name="description" content={SEO_PAGES.chauffage.description} />
        <link rel="canonical" href="https://www.francis-schaub.fr/chauffage" />
        <script type="application/ld+json">
          {JSON.stringify(getServiceSchema('Chauffage et Pompes à Chaleur', SEO_PAGES.chauffage.description))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(getBreadcrumbSchema([
            { name: 'Accueil', url: '/' },
            { name: 'Services', url: '/services' },
            { name: 'Chauffage', url: '/chauffage' }
          ]))}
        </script>
      </Helmet>
      <div className="chauffage-page">
      <Header variant="chauffage" />
      
      <main className="chauffage-main">
        <section className="chauffage-hero">
          <div className="chauffage-container">
            <div className="chauffage-hero-content">
              <h1 className="chauffage-hero-title">
                Installation de chaudières gaz, fioul & bois
              </h1>
              <p className="chauffage-hero-subtitle">
                Des chauffagistes expérimentés au service de vos projets à Baldersheim (Haut-Rhin)
              </p>
            </div>
          </div>
        </section>

        <div className="chauffage-sections-wrapper">
          {/* Section Chaudières Bois */}
          <section className="chauffage-section bois">
            <div className="chauffage-section-header">
              <h2 className="chauffage-section-title">Installation de Chaudières Bois</h2>
              <p className="chauffage-section-subtitle">
                Profitez de toutes les vertus du bois pour un chauffage économique et écologique
              </p>
            </div>
            
            <div className="chauffage-content-grid">
              <div className="chauffage-content-text">
                <p>
                  <strong>Le bois signe son grand retour dans nos foyers :</strong> qu’il se présente en bûches ou en pellets, ce combustible met tout le monde d’accord et rallume la flamme des consommateurs. 
                  Pour équiper un logement neuf ou donner une seconde jeunesse à un bâtiment en rénovation, ils sont de plus en plus nombreux à miser sur cette énergie renouvelable.
                </p>
                <p>
                  Depuis Baldersheim, nous assurons toute la pose, du tubage du conduit d’évacuation des fumées jusqu’à la mise en route de votre appareil – histoire que votre premier feu soit une réussite et pas une fumée blanche d’erreur. 
                  Et si vous voyez les choses en grand, nous installons aussi des solutions conséquentes, comme un silo d’approvisionnement, pour que votre poêle ne manque jamais de carburant.
                </p>
              </div>
              
              <div className="chauffage-advantages-list">
                <h3 className="chauffage-advantages-title">Pourquoi choisir le bois ?</h3>
                <div className="chauffage-advantage-item">
                  <span className="chauffage-advantage-icon"></span>
                  <span className="chauffage-advantage-text">Le combustible bois est l'un des plus économiques du marché</span>
                </div>
                <div className="chauffage-advantage-item">
                  <span className="chauffage-advantage-icon"></span>
                  <span className="chauffage-advantage-text">Le bois est une énergie renouvelable à faible impact environnemental</span>
                </div>
                <div className="chauffage-advantage-item">
                  <span className="chauffage-advantage-icon"></span>
                  <span className="chauffage-advantage-text">Systèmes modernes diffusant une chaleur très appréciée</span>
                </div>
                <div className="chauffage-advantage-item">
                  <span className="chauffage-advantage-icon"></span>
                  <span className="chauffage-advantage-text">Très bon rendement thermique</span>
                </div>
                <div className="chauffage-advantage-item">
                  <span className="chauffage-advantage-icon"></span>
                  <span className="chauffage-advantage-text">Systèmes programmables et simples d'entretien</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section Chaudières Gaz et Fioul */}
          <section className="chauffage-section gaz-fioul">
            <div className="chauffage-section-header">
              <h2 className="chauffage-section-title">Installation de Chaudières Gaz et Chaudières Fioul</h2>
              <p className="chauffage-section-subtitle">
                Le gaz et le fioul ont encore de beaux jours devant eux grâce aux technologies modernes
              </p>
            </div>
            
            <div className="chauffage-content-grid">
              <div className="chauffage-content-text">
                <div className="chauffage-tech-highlight">
                  <h3 className="chauffage-tech-title">Technologie à condensation</h3>
                  <p>
                    Le principe est simple mais redoutablement <strong>efficace</strong> : ces chaudières vont exploiter la vapeur d’eau contenue dans les fumées de combustion. 
                    En la condensant, elles récupèrent de précieuses calories qui, autrement, partiraient en fumée. 
                    Résultat : plus de chaleur pour votre eau de chauffage ou votre eau chaude sanitaire, et moins de gaspillage. Comme quoi, même la vapeur peut être mise à contribution !
                  </p>
                </div>
              </div>
              
              <div className="chauffage-interventions-list">
                <h3 className="chauffage-interventions-title">Nos interventions :</h3>
                <div className="chauffage-interventions-columns">
                  <ul className="chauffage-interventions-column">
                    <li>Dépose/remplacement d'ancienne chaudière fioul</li>
                    <li>Dépose/remplacement de chaudière gaz</li>
                    <li>Installation en construction neuve</li>
                  </ul>
                  <ul className="chauffage-interventions-column">
                    <li>Raccordement au réseau existant</li>
                    <li>Pose de plancher chauffant</li>
                    <li>Configuration et démonstration</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section Pompes à Chaleur */}
          <section className="chauffage-section pac">
            <div className="chauffage-section-header">
              <h2 className="chauffage-section-title">Pompes à Chaleur</h2>
              <p className="chauffage-section-subtitle">
                Solutions écologiques pour un chauffage performant et économique
              </p>
            </div>
            
            <div className="chauffage-pac-grid">
              <div className="chauffage-pac-card">
                <div className="chauffage-pac-icon">🌬️</div>
                <h3 className="chauffage-pac-title">PAC Air-Eau</h3>
                <p className="chauffage-pac-description">
                  Solution polyvalente et efficace pour chauffage et eau chaude sanitaire
                </p>
              </div>
              <div className="chauffage-pac-card">
                <div className="chauffage-pac-icon">🌍</div>
                <h3 className="chauffage-pac-title">PAC Géothermique</h3>
                <p className="chauffage-pac-description">
                  Exploitation de l'énergie du sol pour un rendement optimal
                </p>
              </div>
              <div className="chauffage-pac-card">
                <div className="chauffage-pac-icon">⚡</div>
                <h3 className="chauffage-pac-title">PAC Hybrides</h3>
                <p className="chauffage-pac-description">
                  Combinaison intelligente pour une efficacité maximale
                </p>
              </div>
            </div>
          </section>

          {/* Section Dépannage */}
          <section className="chauffage-section depannage">
            <div className="chauffage-section-header">
              <h2 className="chauffage-section-title">Dépannage et Entretien</h2>
                <div className='chauffage-section-subtitle'>
                    <p>
                        Dépannage et entretien régulier pour prolonger la durée de vie de vos équipements.
                    </p>
                </div>
            </div>
            
            <div className="chauffage-depannage-content">
              <div className="chauffage-pricing-modern">
                <div className="chauffage-price-circle">
                  <div className="chauffage-price-amount">60€</div>
                  <div className="chauffage-price-unit">HT/h</div>
                </div>
                <div className="chauffage-price-details">
                  <div className="chauffage-price-service">Intervention de dépannage</div>
                </div>
              </div>

              <div className="chauffage-content-text">
                <p>
                  Nous intervenons dans tout le Haut-Rhin depuis Baldersheim pour l’entretien, 
                  le dépannage et la maintenance préventive de vos systèmes de chauffage.
                </p>
                
                <div className="chauffage-services-simple">
                  <h3 className="chauffage-services-title">Nos services :</h3>
                  <div className="chauffage-interventions-columns">
                    <ul className="chauffage-interventions-column">
                      <li>Entretien annuel obligatoire</li>
                      <li>Dépannage</li>
                    </ul>
                    <ul className="chauffage-interventions-column">
                      <li>Maintenance préventive</li>
                      <li>Remise en service</li>
                    </ul>
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

export default Chauffage;