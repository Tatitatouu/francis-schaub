import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer/Footer';
import { SEO_PAGES, getBreadcrumbSchema } from '../../config/seoConfig';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>{SEO_PAGES.contact.title}</title>
        <meta name="description" content={SEO_PAGES.contact.description} />
        <link rel="canonical" href="https://www.francis-schaub.fr/contact" />
        <script type="application/ld+json">
          {JSON.stringify(getBreadcrumbSchema([
            { name: 'Accueil', url: '/' },
            { name: 'Contact', url: '/contact' }
          ]))}
        </script>
      </Helmet>
      <div className="contact-page">
        <Header variant="contact" />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;