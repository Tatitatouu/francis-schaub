import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import './SalleDeBains.css';

const SalleDeBains = () => {
  return (
    <div className="salle-bains-page page-with-hero">
      <Header />
      
      <main className="salle-bains-main page-content">
        <section className="salle-bains-hero">
          <div className="salle-bains-container">
            <div className="salle-bains-hero-content">
              <h1 className="salle-bains-hero-title">
                Succombez au Confort de la Salle de Bains Clé en Main !
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
                    Votre salle de bains n'a pas changé depuis de nombreuses années et n'est plus fonctionnelle ? 
                    Vous aimeriez <strong>revoir la configuration de votre salle d'eau</strong> sans pour autant devoir 
                    mobiliser plusieurs artisans ? Vous souhaitez <strong>rénover une salle de bains</strong> pour 
                    l'adapter à une personne à mobilité réduite ?
                  </p>
                  <p>
                    Les équipes de SCHAUB Francis ETS font preuve d'une grande <strong>polyvalence</strong>. 
                    Grâce à la richesse de leurs savoir-faire, nous pouvons <strong>prendre en charge des projets de 
                    rénovation de salle de bains dans leur intégralité</strong>.
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
                  Lorsque vous faites appel à nous pour votre <strong>salle de bains clé en main</strong>, 
                  vous êtes pris en charge par un <strong>interlocuteur unique</strong>. Nous vous accompagnons 
                  <strong> depuis l'étude préalable jusqu'à la livraison finale du chantier</strong> :
                </p>
              </div>
              
              <div className="services-timeline">
                <div className="timeline-item">
                  <div className="timeline-number">1</div>
                  <div className="timeline-content">
                    <h4>Réseaux et Infrastructures</h4>
                    <p>Pose / transformation des réseaux d'arrivée d'eau et des évacuations</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-number">2</div>
                  <div className="timeline-content">
                    <h4>Équipements Sanitaires</h4>
                    <p>Installation des équipements sanitaires : douche avec receveur, douche à l'italienne, baignoire, vasque simple ou double vasque, WC, robinetterie, paroi de douche, meuble sous vasque, colonne de douche, etc.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-number">3</div>
                  <div className="timeline-content">
                    <h4>Revêtements</h4>
                    <p>Travaux de plâtrerie (placo hydrofuge)</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-number">4</div>
                  <div className="timeline-content">
                    <h4>Carrelage</h4>
                    <p>Pose de carrelage professionnel</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-number">5</div>
                  <div className="timeline-content">
                    <h4>Finitions</h4>
                    <p>Travaux de peinture, pose des miroirs, luminaires, etc.</p>
                  </div>
                </div>
              </div>
              
              <div className="services-conclusion">
                <div className="conclusion-highlight">
                  <h3>Notre Promesse</h3>
                  <p>
                    Nous sommes fiers de livrer des <strong>salles de bains fonctionnelles, esthétiques, où il fait bon vivre</strong>.
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
                
                <div className="pmr-expertise">
                  <h3>Notre Expertise PMR</h3>
                  <p>
                    À Baldersheim et dans le Haut-Rhin, les équipes de SCHAUB Francis ETS placent leurs compétences à votre service pour 
                    <strong> procéder à l'aménagement PMR de votre salle de bains</strong> :
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
                  <div className="pmr-service-icon">🚿</div>
                  <div className="pmr-service-content">
                    <h4>Douche italienne</h4>
                    <p>Solution idéale pour l'accessibilité sans obstacle</p>
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
              
              <div className="pmr-quality">
                <div className="quality-badge">
                  <div className="badge-icon">⭐</div>
                  <div className="badge-content">
                    <h3>Qualité & Fiabilité</h3>
                    <p>
                      Nous travaillons avec soin et sommes particulièrement <strong>attentifs à la solidité et à la fiabilité 
                      des équipements que nous installons</strong>.
                    </p>
                  </div>
                </div>
                
                <div className="contact-cta">
                  <p>
                    <strong>Contactez-nous pour toute demande de renseignement ou de devis gratuit.</strong>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SalleDeBains;