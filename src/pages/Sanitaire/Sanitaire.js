import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import './Sanitaire.css';

const Sanitaire = () => {
  return (
    <div className="sanitaire-page">
      <Header />
      
      <main className="sanitaire-main">
        <section className="sanitaire-hero">
          <div className="sanitaire-container">
            <div className="sanitaire-hero-content">
              <h1 className="sanitaire-hero-title">
                Votre Spécialiste de la Plomberie et de l'Installation Sanitaire à Baldersheim (68)
              </h1>
              <p className="sanitaire-hero-subtitle">
                Équipe expérimentée pour tous vos projets sanitaires dans le Haut-Rhin
              </p>
            </div>
          </div>
        </section>

        <div className="sanitaire-sections-wrapper">
          {/* Section Installation et Rénovation */}
          <section className="sanitaire-section installation">
            <div className="sanitaire-container">
              <div className="sanitaire-section-header">
                <h2 className="sanitaire-section-title">Installation et Rénovation Sanitaire</h2>
                <p className="sanitaire-section-subtitle">
                  Solutions complètes pour moderniser vos équipements sanitaires
                </p>
              </div>
              
              <div className="sanitaire-intro">
                <p>
                  Le <strong>réseau d'eau</strong> de la maison que vous rénovez n'est plus adapté à vos besoins ? 
                  Les <strong>vieilles évacuations en fonte</strong> de votre bâtiment doivent être remplacées ? 
                  Vous recherchez un professionnel expérimenté pour <strong>moderniser vos vieux équipements sanitaires</strong> ?
                </p>
                <p>
                  SCHAUB Francis ETS emploie une équipe de <strong>plombiers - installateurs sanitaires aguerris</strong> capables de 
                  <strong> prendre en charge vos projets dans le Haut-Rhin</strong> :
                </p>
              </div>
              
              <div className="sanitaire-services">
                <div className="sanitaire-service-item">
                  <div className="sanitaire-service-icon">🔧</div>
                  <div className="sanitaire-service-content">
                    <h4>Rénovation de réseau d'eau</h4>
                    <p>Réhabilitation de la tuyauterie, remplacement / déplacement des arrivées d'eau, remplacement / déplacement des évacuations d'eau</p>
                  </div>
                </div>
                
                <div className="sanitaire-service-item">
                  <div className="sanitaire-service-icon">🗑️</div>
                  <div className="sanitaire-service-content">
                    <h4>Dépose des anciens équipements sanitaires</h4>
                    <p>Retrait professionnel de vos anciens équipements</p>
                  </div>
                </div>
                
                <div className="sanitaire-service-item">
                  <div className="sanitaire-service-icon">🚿</div>
                  <div className="sanitaire-service-content">
                    <h4>Pose des nouveaux équipements sanitaires</h4>
                    <p>Lavabo (simple vasque / double vasque), douche, baignoire, robinetterie, etc.</p>
                  </div>
                </div>
                
                <div className="sanitaire-service-item">
                  <div className="sanitaire-service-icon">♨️</div>
                  <div className="sanitaire-service-content">
                    <h4>Remplacement / pose de chauffe-eau</h4>
                    <p>Installation d'équipements modernes et efficaces</p>
                  </div>
                </div>
                
                <div className="sanitaire-service-item highlighted">
                  <div className="sanitaire-service-icon">🛁</div>
                  <div className="sanitaire-service-content">
                    <h4>Création complète de salle de bains</h4>
                    <p>Conception et réalisation de votre nouvelle salle de bains</p>
                  </div>
                </div>
                
                <div className="sanitaire-service-item">
                  <div className="sanitaire-service-icon">⚙️</div>
                  <div className="sanitaire-service-content">
                    <h4>Etc.</h4>
                    <p>Et bien d'autres services sanitaires sur mesure</p>
                  </div>
                </div>
              </div>
              
              <div className="sanitaire-materials">
                <p>
                  Nous travaillons avec une <strong>large variété de matériaux</strong>, en fonction de la nature du chantier et de l'intervention demandée : 
                  PVC, PER, cuivre, multicouche. De même, nous employons des <strong>équipements sanitaires de qualité, esthétiques et durables</strong>.
                </p>
                <p>
                  Nos plombiers sont méticuleux, ils interviennent en prenant soin de l'existant et restituent des 
                  <strong> chantiers en parfait état de propreté</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Section Dépannage */}
          <section className="sanitaire-section depannage">
            <div className="sanitaire-container">
              <div className="sanitaire-section-header">
                <h2 className="sanitaire-section-title">Nos Dépanneurs en Plomberie Répondent Présent !</h2>
              </div>
              
              <div className="sanitaire-urgence-intro">
                <p>
                  Vous êtes rentré chez vous et avez découvert une flaque d'eau sous votre ballon d'eau chaude ? 
                  Le mitigeur de la salle de bains goutte et a besoin d'être remplacé ? Votre chasse d'eau coule encore et encore ?
                </p>
                <p>
                  SCHAUB Francis ETS a la chance de pouvoir compter sur des <strong>plombiers dépanneurs perspicaces et très efficaces</strong>. 
                  À la lumière de leur expérience, ils sauront <strong>identifier l'origine de votre panne</strong> en plomberie et y apporter la solution qui s'impose.
                </p>
              </div>
              
              <div className="sanitaire-intervention">
                <p>
                  <strong>Ils sont mobiles depuis Baldersheim (68)</strong> pour dépanner les installations de plomberie réalisées par nos soins. 
                  Ils sont compétents pour :
                </p>
                
                <div className="sanitaire-competences">
                  <div className="sanitaire-competence-item">
                    <span className="sanitaire-bullet">•</span>
                    <span>La recherche et la réparation de fuite</span>
                  </div>
                  <div className="sanitaire-competence-item">
                    <span className="sanitaire-bullet">•</span>
                    <span>Le remplacement d'équipements défectueux : robinetterie, chasse d'eau, groupe de sécurité sur chauffe-eau, etc.</span>
                  </div>
                  <div className="sanitaire-competence-item">
                    <span className="sanitaire-bullet">•</span>
                    <span>Le débouchage d'évacuation</span>
                  </div>
                  <div className="sanitaire-competence-item">
                    <span className="sanitaire-bullet">•</span>
                    <span>Etc.</span>
                  </div>
                </div>
                
                <p>
                  Nos dépanneurs savent combien il peut être contraignant de faire face à un dysfonctionnement en plomberie. 
                  Aussi, ils mettent tout en œuvre pour s'adapter à l'urgence de votre situation et pour y remédier dans les plus brefs délais.
                </p>
              </div>
              
              <div className="sanitaire-pricing">
                <div className="sanitaire-price-highlight">
                  <p><strong>Nos prestations de dépannage sont accessibles à partir de 54 € HT / heure.</strong></p>
                  <p>
                    Nous intervenons en faisant preuve d'une grande <strong>transparence</strong>. 
                    Nous vous informons de manière claire sur toutes les actions qui vont être entreprises pour vous dépanner. 
                    Avec SCHAUB Francis ETS, aucune mauvaise surprise :
                  </p>
                </div>
                
                <div className="sanitaire-quote">
                  <blockquote>
                    « Chez nous, on dit ce qu'on fait et on fait ce qu'on dit. »
                  </blockquote>
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

export default Sanitaire;