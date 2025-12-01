import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../components/Hero';
import ProjectCard from '../../components/ProjectCard';
import InfiniteScroller, { brandsData } from '../../components/InfiniteScroller';
import Services from '../../components/Services';
import About from '../../components/About';
import Footer from '../../components/Footer/Footer';
import BackToTop from '../../components/BackToTop';
import { SEO_PAGES, getServiceSchema } from '../../config/seoConfig';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>{SEO_PAGES.sanitaire.title}</title>
        <meta name="description" content={SEO_PAGES.sanitaire.description} />
        <link rel="canonical" href="https://www.francis-schaub.fr/sanitaire" />
        <script type="application/ld+json">
          {JSON.stringify(getServiceSchema('Sanitaire & Chauffage', SEO_PAGES.sanitaire.description))}
        </script>
      </Helmet>
      <div className="homepage">
        <main>
          <Hero />
        </main>
        <About />
        <ProjectCard />
        <InfiniteScroller brands={brandsData} />
        <Services />
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}

export default HomePage;