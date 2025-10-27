import React from 'react';
import Hero from '../../components/Hero';
import ProjectCard from '../../components/ProjectCard';
import Services from '../../components/Services/Services';
import About from '../../components/About';
import Footer from '../../components/Footer/Footer';

function HomePage() {
  return (
    <div className="homepage">
      <main>
        <Hero />
      </main>
      <About />
      <ProjectCard />
      <Services />
      <Footer />
    </div>
  );
}

export default HomePage;