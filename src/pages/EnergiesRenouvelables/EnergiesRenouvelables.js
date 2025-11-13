import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import BackToTop from '../../components/BackToTop';
import { SEO_PAGES, getServiceSchema, getBreadcrumbSchema } from '../../config/seoConfig';
import './EnergiesRenouvelables.css';

const EnergiesRenouvelables = () => {
  return (
    <>
      <Helmet>
        <title>{SEO_PAGES.energiesRenouvelables.title}</title>
        <meta name="description" content={SEO_PAGES.energiesRenouvelables.description} />
        <link rel="canonical" href="https://www.francis-schaub.fr/energies-renouvelables" />
        <script type="application/ld+json">
          {JSON.stringify(getServiceSchema('Énergies Renouvelables', SEO_PAGES.energiesRenouvelables.description))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(getBreadcrumbSchema([
            { name: 'Accueil', url: '/' },
            { name: 'Services', url: '/services' },
            { name: 'Énergies Renouvelables', url: '/energies-renouvelables' }
          ]))}
        </script>
      </Helmet>
      <div className="energies-page">
      <Header />
      
      <main className="energies-main">
        <section className="energies-hero">
          <div className="energies-container">
            <div className="energies-hero-content">
              <h1 className="energies-hero-title">
                Installateur pompe à chaleur & panneaux solaires à Baldersheim (Haut-Rhin)
              </h1>
              <p className="energies-hero-subtitle">
                Pour se chauffer autrement et durablement
              </p>
            </div>
          </div>
        </section>

        <div className="energies-sections-wrapper">
          {/* Section Introduction */}
          <section className="energies-section intro">
            <div className="energies-container">
              <div className="energies-section-header">
                <h2 className="energies-section-title">Énergies Renouvelables en Alsace</h2>
                <p className="energies-section-subtitle">Des solutions durables pour votre habitat</p>
              </div>
              
              <div className="energies-intro-content">
                <div className="energies-intro-text">
                  <p>
                    Installée à Baldersheim, la <strong>société SCHAUB Francis ETS</strong> cultive depuis des années une vraie expertise dans <strong>les énergies renouvelables
                    : pompes à chaleur, panneaux solaires</strong> et <strong>solutions de chauffage écologiques</strong>.
                    En <strong>Alsace</strong>, le soleil n’est peut-être pas en vacances tous les jours, mais il reste un excellent allié 
                    : grâce aux <strong>aides de l’État</strong> et à la baisse des coûts d’installation, le solaire y est plus rentable qu’on ne le pense.
                  </p>
                  <p>
                    En <strong>Alsace</strong>, malgré un ensoleillement modéré, les installations solaires restent très rentables grâce 
                    aux <strong>aides de l'État</strong> et à la baisse continue des coûts d'installation, le solaire y est plus rentable qu’on ne le pense.
                  </p>
                </div>
                <div className="energies-intro-stats">
                  <div className="energies-stat">
                    <div className="energies-stat-number">+20 ans</div>
                    <div className="energies-stat-label">d'expérience</div>
                  </div>
                  <div className="energies-stat">
                    <div className="energies-stat-number">RGE</div>
                    <div className="energies-stat-label">Certification</div>
                  </div>
                  <div className="energies-stat">
                    <div className="energies-stat-number">500+</div>
                    <div className="energies-stat-label">installations</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Pompes à Chaleur */}
          <section className="energies-section pac">
            <div className="energies-container">
              <div className="energies-section-header">
                <h2 className="energies-section-title">Pompes à Chaleur</h2>
                <p className="energies-section-subtitle">
                  Solutions écologiques et économiques pour chauffer votre logement
                </p>
              </div>
              
              <div className="energies-pac-intro">
                <p>
                  Les <strong>pompes à chaleur</strong> figurent parmi les solutions de chauffage les plus performantes du marché. 
                  Avec un <strong>COP (coefficient de performance)</strong> pouvant atteindre 4 à 5, 
                  elles restaurent jusqu’à cinq fois plus d’énergie qu’elles n’en consomment.
                </p>
              </div>
              
              <div className="energies-pac-grid">
                <div className="energies-pac-card">
                  <div className="energies-pac-icon">🌬️</div>
                  <h4>PAC Air-Eau</h4>
                  <p>Capte les calories de l’air pour chauffer votre habitat</p>
                  <ul>
                    <li>Installation simple</li>
                    <li>Idéale pour la rénovation</li>
                    <li>Compatible radiateurs existants</li>
                    <li>COP jusqu'à 4,5</li>
                  </ul>
                </div>
                
                <div className="energies-pac-card">
                  <div className="energies-pac-icon">🌍</div>
                  <h4>PAC Géothermique</h4>
                  <p>Exploite l’énergie du sol pour un confort constant</p>
                  <ul>
                    <li>Performance constante</li>
                    <li>Indépendante du climat</li>
                    <li>Très faible consommation</li>
                    <li>Durée de vie 25+ ans</li>
                  </ul>
                </div>
                
                <div className="energies-pac-card">
                  <div className="energies-pac-icon">❄️</div>
                  <h4>PAC Air-Air</h4>
                  <p>S’adapte aux saisons : chauffe l’hiver, rafraîchit l’été</p>
                  <ul>
                    <li>Chauffage et climatisation</li>
                    <li>Installation rapide</li>
                    <li>Contrôle zone par zone</li>
                    <li>Technologie Inverter</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section Solaire */}
          <section className="energies-section solaire">
            <div className="energies-container">
              <div className="energies-section-header">
                <h2 className="energies-section-title">Solutions Solaires</h2>
                <p className="energies-section-subtitle">
                  Exploitez l'énergie gratuite du soleil pour votre habitation
                </p>
              </div>
              
              <div className="energies-solaire-intro">
                <p>
                  Le soleil alsacien n’est peut-être pas tropical, 
                  mais il suffit largement pour rentabiliser une installation solaire.
                </p>
              </div>
              
              <div className="energies-solaire-grid">
                <div className="energies-solaire-card">
                  <div className="energies-solaire-header">
                    <div className="energies-solaire-icon">⚡</div>
                    <h4>Panneaux Photovoltaïques</h4>
                    <p>Électricité pour consommation ou revente</p>
                  </div>
                  <div className="energies-solaire-content">
                    <div className="energies-solaire-benefits">
                      <span>✓ Réduction de la facture électrique</span>
                      <span>✓ Revente du surplus possible</span>
                      <span>✓ Entretien minimal</span>
                    </div>
                    <div className="energies-solaire-specs">
                      <div className="energies-spec-item">
                        <strong>3 kWc</strong> : ~ 2 700 kWh/an <span className="energies-price"> ~ 10 000€</span>
                      </div>
                      <div className="energies-spec-item">
                        <strong>6 kWc</strong> : ~ 5 200 kWh/an <span className="energies-price"> ~ 13 500 €</span>
                      </div>
                      <div className="energies-spec-item">
                        <strong>9 kWc</strong> : ~ 8 500 kWh/an <span className="energies-price"> ~ 17 500 €</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="energies-solaire-card">
                  <div className="energies-solaire-header">
                    <div className="energies-solaire-icon">🔥</div>
                    <h4>Chauffe-eau Solaire</h4>
                    <p>Eau chaude grâce au solaire</p>
                  </div>
                  <div className="energies-solaire-content">
                    <div className="energies-solaire-benefits">
                      <span>✓ 50 à 70% d'économies sur l'eau chaude</span>
                      <span>✓ Complément idéal à votre chauffage</span>
                      <span>✓ Aides financières importantes</span>
                    </div>
                    <div className="energies-solaire-specs">
                      <div className="energies-spec-item">
                        <strong>200L</strong> : 3-4 personnes ~<span className="energies-price">5 500 €</span>
                      </div>
                      <div className="energies-spec-item">
                        <strong>300L</strong> : 5-6 personnes ~<span className="energies-price">7 000 €</span>
                      </div>
                      <div className="energies-spec-item">
                        <strong>500L</strong> : 7+ personnes ~<span className="energies-price">9 000 €</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="energies-solaire-card">
                  <div className="energies-solaire-header">
                    <div className="energies-solaire-icon">🔄</div>
                    <h4>Système Combiné</h4>
                    <p>Chauffage et eau chaude solaire</p>
                  </div>
                  <div className="energies-solaire-content">
                    <div className="energies-solaire-benefits">
                      <span>✓ Solution complète</span>
                      <span>✓ Optimisation de l'installation</span>
                      <span>✓ Rentabilité maximisée</span>
                    </div>
                    <div className="energies-solaire-specs systeme-combine-ameliore">
                      <div className="systeme-details">
                        <div className="systeme-detail-item">
                          <span className="systeme-label">Amortissement</span>
                          <span className="systeme-valeur">7-10 ans</span>
                        </div>
                        <div className="systeme-detail-item">
                          <span className="systeme-label">Prix</span>
                          <span className="systeme-prix-badge">Sur devis</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Aides et Accompagnement */}
          <section className="energies-section aides">
            <div className="energies-container">
              <div className="energies-section-header">
                <h2 className="energies-section-title">Aides et Financements</h2>
                <p className="energies-section-subtitle">
                  Profitez des nombreuses aides disponibles pour vos projets
                </p>
              </div>
              
              <div className="energies-aides-intro">
                <p>
                  <strong>Entreprise certifiée RGE (Reconnu Garant de l'Environnement), SCHAUB Francis ETS</strong>,  
                  vous permet de profiter de <strong>toutes les aides disponibles</strong>. 
                </p>
                <p>Pour les démarches administratives :
                  <strong> pas de stress : on s'en occupe entièrement, vous n'avez rien à faire.</strong>.

                </p>
              </div>
              
              <div className="energies-aides-grid">
                <div className="energies-aide-card">
                  <div className="energies-aide-icon">🏠</div>
                  <h4>MaPrimeRénov'</h4>
                  <p>Aide de l'État pouvant couvrir jusqu'à 90% des travaux selon vos revenus</p>
                </div>
                
                <div className="energies-aide-card">
                  <div className="energies-aide-icon">⚡</div>
                  <h4>Certificats d'Économie d'Énergie</h4>
                  <p>Prime versée par les fournisseurs d'énergie pour vos équipements performants</p>
                </div>
                
                <div className="energies-aide-card">
                  <div className="energies-aide-icon">💰</div>
                  <h4>TVA Réduite</h4>
                  <p>Taux de TVA à 5,5% au lieu de 20% pour vos travaux de rénovation énergétique</p>
                </div>
                
                <div className="energies-aide-card">
                  <div className="energies-aide-icon">🏦</div>
                  <h4>Éco-Prêt à Taux Zéro</h4>
                  <p>Prêt sans intérêt pour financer vos travaux de rénovation énergétique</p>
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

export default EnergiesRenouvelables;