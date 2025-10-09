import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Droplets, Wrench, ArrowRight, Leaf } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Flame />,
      title: "Chauffage",
      description: "Installation/entretien de systèmes de chauffage performants",
      features: ["Chaudières gaz/fioul", "Pompes à chaleur", "Radiateurs", "Plancher chauffant"],
      link: "/chauffage"
    },
    {
      icon: <Droplets />,
      title: "Sanitaire", 
      description: "Solutions complètes pour votre salle de bain et cuisine",
      features: ["Plomberie complète", "Salles de bain", "Robinetterie", "Adoucisseurs"],
      link: "/contact"
    },
    {
      icon: <Wrench />,
      title: "Dépannage",
      description: "Intervention rapide 7j/7 dans tout le Haut-Rhin",
      features: ["Urgences 24h/24", "Maintenance", "Réparations", "Contrats entretien"],
      link: "/contact"
    },
    {
      icon: <Leaf />,
      title: "Énergies renouvelables",
      description: "Solutions écologiques pour un avenir durable",
      features: ["Pompes à chaleur", "Panneaux solaires", "Chauffe-eau thermodynamiques", "Systèmes hybrides"],
      link: "/energies-renouvelables"
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <span className="services-label">NOS EXPERTISES</span>
          <h2 className="services-title">
            Des solutions adaptées à vos besoins
          </h2>
          <p className="services-subtitle">
            Plus de 25 ans d'expérience à votre service dans le Haut-Rhin
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                <div className="service-icon">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="service-feature">
                    <span className="feature-bullet"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to={service.link} className="service-cta">
                En savoir plus
                <ArrowRight className="cta-arrow" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;