import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Grid3x3, Home, Ruler, Package, CheckCircle } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import BackToTop from '../../components/BackToTop';
import ProjectCard from '../../components/ProjectCard';
import { SEO_PAGES, getServiceSchema, getBreadcrumbSchema } from '../../config/seoConfig';
import './CarrelageHome.css';

function CarrelageHome() {
  return (
    <>
      <Helmet>
        <title>{SEO_PAGES.carrelage.title}</title>
        <meta name="description" content={SEO_PAGES.carrelage.description} />
        <link rel="canonical" href="https://www.francis-schaub.fr/carrelage" />
        <script type="application/ld+json">
          {JSON.stringify(getServiceSchema('Carrelage et Faïence', SEO_PAGES.carrelage.description))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(getBreadcrumbSchema([
            { name: 'Accueil', url: '/' },
            { name: 'Services', url: '/services' },
            { name: 'Carrelage', url: '/carrelage' }
          ]))}
        </script>
      </Helmet>
      <div className="carrelage-home">
      <Header />

      <section className="carrelage-hero">
        <div className="carrelage-hero__content">
          <h1 className="carrelage-hero__title">Artisan Carreleur</h1>
          <p className="carrelage-hero__subtitle">
            Un savoir-faire artisanal au service de vos projets de carrelage, 
            faïence et mosaïque pour l'intérieur comme l'extérieur
          </p>
          <div className="carrelage-hero__cta">
            <Link to="/carrelage/contact" className="carrelage-hero__btn carrelage-hero__btn--secondary">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* INTÉRIEUR */}
      <section id="interieur" className="carrelage-detail">
        <div className="carrelage-detail__container">
          <div className="carrelage-detail__content">
            <h3 className="carrelage-detail__title">
              <Home size={32} strokeWidth={1.5} />
              Carrelage intérieur
            </h3>
            <p className="carrelage-detail__description">
              Pose de carrelage pour tous les espaces de votre habitation. Du sol au mur, 
              nous transformons vos pièces avec des finitions impeccables et durables.
            </p>
            <ul className="carrelage-detail__list">
              <li><CheckCircle size={20} /> Cuisine : sols et crédences</li>
              <li><CheckCircle size={20} /> Salon et séjour</li>
              <li><CheckCircle size={20} /> Chambres</li>
              <li><CheckCircle size={20} /> Halls d'entrée</li>
              <li><CheckCircle size={20} /> Escaliers</li>
            </ul>
          </div>
          <div className="carrelage-detail__visual">
            <img 
              src="/images/carrelage-int.jpeg" 
              alt="Carrelage intérieur" 
              className="carrelage-detail__image"
            />
          </div>
        </div>
      </section>

      {/* EXTÉRIEUR */}
      <section id="exterieur" className="carrelage-section carrelage-detail carrelage-detail--reverse">
        <div className="carrelage-detail__container">
          <div className="carrelage-detail__visual">
            <img 
              src="/images/carrelage-ext.webp" 
              alt="Carrelage extérieur" 
              className="carrelage-detail__image"
            />
          </div>
          <div className="carrelage-detail__content">
            <h3 className="carrelage-detail__title">
              <Package size={32} strokeWidth={1.5} />
              Carrelage extérieur
            </h3>
            <p className="carrelage-detail__description">
              Aménagement et embellissement de vos espaces extérieurs avec des matériaux 
              résistants aux intempéries et adaptés aux contraintes climatiques.
            </p>
            <ul className="carrelage-detail__list">
              <li><CheckCircle size={20} /> Terrasses et balcons</li>
              <li><CheckCircle size={20} /> Allées et cours</li>
              <li><CheckCircle size={20} /> Plages de piscine</li>
              <li><CheckCircle size={20} /> Façades</li>
              <li><CheckCircle size={20} /> Traitement antidérapant</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAÏENCE & MOSAÏQUE */}
      <section id="faience" className="carrelage-section carrelage-detail">
        <div className="carrelage-detail__container">
          <div className="carrelage-detail__content">
            <h3 className="carrelage-detail__title">
              <Grid3x3 size={32} strokeWidth={1.5} />
              Faïence & Mosaïque
            </h3>
            <p className="carrelage-detail__description">
              Création de décors uniques et personnalisés. La faïence et la mosaïque apportent 
              une touche d'élégance et de raffinement à vos espaces.
            </p>
            <ul className="carrelage-detail__list">
              <li><CheckCircle size={20} /> Faïence murale salles de bains</li>
              <li><CheckCircle size={20} /> Mosaïque décorative</li>
              <li><CheckCircle size={20} /> Crédences cuisine</li>
              <li><CheckCircle size={20} /> Motifs et frises personnalisés</li>
            </ul>
          </div>
          <div className="carrelage-detail__visual">
            <img 
              src="/images/mosaique.jpg" 
              alt="Faïence et mosaïque" 
              className="carrelage-detail__image"
            />
          </div>
        </div>
      </section>

      {/* SUR MESURE */}
      <section id="sur-mesure" className="carrelage-section carrelage-detail carrelage-detail--reverse">
        <div className="carrelage-detail__container">
          <div className="carrelage-detail__visual">
            <img 
              src="/images/surmesure.webp" 
              alt="Travaux sur mesure" 
              className="carrelage-detail__image"
            />
          </div>
          <div className="carrelage-detail__content">
            <h3 className="carrelage-detail__title">
              <Ruler size={32} strokeWidth={1.5} />
              Travaux sur mesure
            </h3>
            <p className="carrelage-detail__description">
              Chaque projet est unique. Nous réalisons des travaux personnalisés avec 
              des découpes spéciales et des finitions soignées pour des résultats exceptionnels.
            </p>
            <ul className="carrelage-detail__list">
              <li><CheckCircle size={20} /> Découpes complexes et angles</li>
              <li><CheckCircle size={20} /> Associations de matériaux</li>
              <li><CheckCircle size={20} /> Restauration de carrelages anciens</li>
              <li><CheckCircle size={20} /> Conseils personnalisés</li>
            </ul>
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="carrelage-avantages">
        <div className="container">
          <div className="carrelage-avantages__banner">
            <div className="carrelage-avantages__item">
              <CheckCircle size={24} />
              <span>30 ans d'expertise</span>
            </div>
            <div className="carrelage-avantages__item">
              <CheckCircle size={24} />
              <span>Finition impeccable</span>
            </div>
            <div className="carrelage-avantages__item">
              <CheckCircle size={24} />
              <span>Conseil personnalisé</span>
            </div>
            <div className="carrelage-avantages__item">
              <CheckCircle size={24} />
              <span>Garantie qualité</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ProjectCard />
      <BackToTop />
      </div>
    </>
  );
}

export default CarrelageHome;
