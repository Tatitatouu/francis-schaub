import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Grid3x3, ArrowRight, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Logo from '../../assets/branding/logo.svg';
import { SEO_PAGES, getBreadcrumbSchema } from '../../config/seoConfig';
import './ActivitySelection.css';

function ActivitySelection() {
  const [hoveredSection, setHoveredSection] = useState(null);

  const sections = [
    {
      id: 'sanitaire',
      title: 'Sanitaire & Chauffage',
      subtitle: 'Plomberie, chauffage et salles de bains',
      features: ['Installation', 'Rénovation'],
      icon: <Droplets size={70} strokeWidth={1.3} />,
      link: '/sanitaire',
      arrow: <ArrowLeft size={32} strokeWidth={2} />,
    },
    {
      id: 'carrelage',
      title: 'Carrelage & Faïence',
      subtitle: 'Pose et rénovation par des professionnels',
      features: ['Intérieur', 'Extérieur'],
      icon: <Grid3x3 size={70} strokeWidth={1.3} />,
      link: '/carrelage',
      arrow: <ArrowRight size={32} strokeWidth={2} />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>{SEO_PAGES.home.title}</title>
        <meta name="description" content={SEO_PAGES.home.description} />
        <link rel="canonical" href="https://www.francis-schaub.fr/" />
        <script type="application/ld+json">
          {JSON.stringify(getBreadcrumbSchema([{ name: 'Accueil', url: '/' }]))}
        </script>
      </Helmet>

      <div className="activity-selection">
        <div className="activity-selection__header">
          <img src={Logo} alt="Francis Schaub" className="activity-selection__logo" />
          <p className="activity-selection__subtitle">
            Choisissez votre domaine
          </p>
        </div>

        <div className="activity-selection__sections">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.link}
              className={`activity-section ${
                hoveredSection === section.id ? 'hovered' : ''
              }`}
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className="activity-section__gradient"></div>
              <div className="activity-section__content">
                <div className="activity-section__icon">{section.icon}</div>
                <h2 className="activity-section__title">{section.title}</h2>
                <p className="activity-section__subtitle">{section.subtitle}</p>
                <div className="activity-section__features">
                  {section.features.map((f) => (
                    <span key={f} className="feature-pill">
                      {f}
                    </span>
                  ))}
                </div>
                <div className="activity-section__arrow">
                  {section.arrow}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default ActivitySelection;
