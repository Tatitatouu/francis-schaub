import React from 'react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import Services from '../components/Services/Services';
import About from '../components/About';
import Rehabilitation from '../components/Rehabilitation/Rehabilitation';
import Footer from '../components/Footer/Footer';

function HomePageApp() {
  return (
    <div className="homepage">
      <main>
        <Hero />
      </main>
      <ProjectCard />
      <Services />
      <About />
      <Rehabilitation />
      <Footer />
    </div>
  );
}

export default HomePageApp;