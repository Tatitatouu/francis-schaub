import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import './Sanitaire.css';

const Sanitaire = () => {
  return (
    <div className="sanitaire-page">
      <Header variant="sanitaire" />
      
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
                
                <div className="sanitaire-service-item">
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
                  Nous travaillons avec une large gamme de <strong>matériaux adaptés à chaque chantier : PVC, PER, cuivre, multicouche,</strong> selon les besoins du terrain. 
                  Côté équipements sanitaires, nous privilégions le <strong>beau, solide et le durable </strong> - pas question de faire dans l'éphemère.
                </p>
                <p>
                  Nos plombiers, eux, sont du genre <strong>soigneux</strong> : ils interviennent avec précision, 
                  respectent l'existant et repartent <strong>en laissant les lieux propres</strong>.
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
                  Vous êtes rentré chez vous et découvrez une <strong>flaque d'eau sous votre ballon d'eau chaude</strong> ? 
                  Le <strong>mitigeur capricieux</strong> ou une <strong>chasse d'eau rebelle</strong> ? Pas de panique.
                </p>
                <p>
                  Chez <strong>SCHAUB Francis ETS</strong>, nos <strong>plombiers dépanneurs</strong> ont le coup d'oeil et le bon réflexe pour identifier rapidement l'origine de votre problème.
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
                  Nos <strong>dépanneurs</strong> savent qu’une panne de plomberie tombe toujours au <strong>mauvais moment</strong>. 
                  C’est pourquoi ils font tout leur possible pour <strong>intervenir rapidement</strong>, s’adapter à l’urgence et rétablir la situation sans tarder.
                </p>
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