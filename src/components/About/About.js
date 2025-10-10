import React from 'react';
import { MapPin, Users, Award, Leaf } from 'lucide-react';
import { certificationLogos } from '../../assets/certifications';
import './About.css';

const About = () => {
  const certifications = [
    { name: 'Qualibois', color: '#8B4513', logo: certificationLogos.qualibois },
    { name: 'QualiPV', color: '#1E40AF', logo: certificationLogos.qualipv },
    { name: 'QualiSol', color: '#F59E0B', logo: certificationLogos.qualisol },
    { name: 'QualiPac', color: '#7C3AED', logo: certificationLogos.qualipac },
    { name: 'RGE Qualibat', color: '#1976D2', logo: certificationLogos.rgequalibat }
  ];

  const stats = [
    { icon: <Users />, value: '25+', label: 'Années d\'expérience' },
    { icon: <Award />, value: '25+', label: 'Professionnels' },
    { icon: <MapPin />, value: 'Haut-Rhin', label: 'Zone d\'intervention' },
    { icon: <Leaf />, value: 'RGE', label: 'Certifié environnement' }
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">
              Plus de 25 ans d'expertise en énergies renouvelables
            </h2>
            <p className="about-description">
              Basé à Baldersheim dans le Haut-Rhin, SCHAUB Francis ETS 
              est votre partenaire de confiance pour tous vos projets de chauffage écologique 
              et d'aménagement de salles de bains clés en main.
            </p>
            
            <div className="about-highlights">
              <h3>Notre expertise</h3>
              <p>
                Entreprise familiale composée de plus de 25 professionnels compétents, nous mettons 
                notre savoir-faire au service de particuliers et professionnels dans tous
                les secteurs du Haut-Rhin.
              </p>
              
              <p>
                Spécialisés dans les solutions de chauffage à énergies renouvelables, nous 
                vous accompagnons dans la réduction de votre consommation énergétique tout 
                en vous faisant bénéficier des dernières innovations technologiques.
              </p>

              <h3>Salle de bains clés en main</h3>
              <p>
                Vous avez un projet de rénovation ou de création de salle de bains ? 
                Notre équipe s'occupe de tout, de la conception à la réalisation, pour 
                vous offrir un espace personnalisé qui correspond parfaitement à vos besoins.
              </p>
            </div>
            
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon">
                    {stat.icon}
                  </div>
                  <div className="stat-content">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-certifications">
            <h3 className="certifications-title">Nos certifications et garanties</h3>
            <p className="certifications-intro">
              En tant qu'artisan sérieux, nous détenons de multiples certifications qui 
              témoignent de notre engagement qualité et environnemental :
            </p>
            
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="certification-badge"
                  style={{ '--cert-color': cert.color }}
                >
                  <img 
                    src={cert.logo} 
                    alt={cert.name}
                    className="cert-logo"
                  />
                  <span className="cert-name">{cert.name}</span>
                </div>
              ))}
            </div>
            
            <div className="rge-benefits">
              <h4>Avantages du label RGE</h4>
              <p>
                Le label RGE (Reconnu Garant de l'Environnement) vous garantit notre capacité 
                à effectuer des travaux de qualité dans le domaine des énergies renouvelables. 
                Ce label vous donne également accès à :
              </p>
              <ul className="benefits-list">
                <li>L'éco-prêt à taux zéro</li>
                <li>Le Crédit d'Impôt Transition Énergétique</li>
                <li>Les aides de l'ANAH et des collectivités locales</li>
                <li>Un service après-vente réactif et performant</li>
              </ul>
            </div>
            
            <p className="certifications-note">
              Ces certifications sont votre garantie d'un travail professionnel et d'économies 
              durables sur vos factures énergétiques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;