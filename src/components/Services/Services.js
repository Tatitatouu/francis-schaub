import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: "🔥",
      title: "Chauffage",
      features: ["Chaudières gaz/fioul", "Pompes à chaleur", "Radiateurs", "Plancher chauffant"],
      link: "/chauffage"
    },
    {
      icon: "💧",
      title: "Sanitaire", 
      features: ["Plomberie complète", "Salles de bain", "Robinetterie", "Adoucisseurs"],
      link: "/sanitaire"
    },
    {
      icon: "🔧",
      title: "Dépannage",
      features: ["Urgences", "Maintenance", "Réparations", "Contrats entretien"],
      link: "/contact"
    },
    {
      icon: "🌱",
      title: "Énergies renouvelables",
      features: ["Pompes à chaleur", "Panneaux solaires", "Chauffe-eau thermodynamiques", "Systèmes hybrides"],
      link: "/energies-renouvelables"
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">
            Des solutions adaptées à vos besoins
          </h2>
          <p className="services-subtitle">
            Notre expertise à votre service dans le Haut-Rhin
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