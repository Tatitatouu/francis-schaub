import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import useGoogleTagManager from './hooks/useGoogleTagManager';

import ActivitySelection from './pages/ActivitySelection';
import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import Chauffage from './pages/Chauffage';
import EnergiesRenouvelables from './pages/EnergiesRenouvelables';
import Sanitaire from './pages/Sanitaire';
import SalleDeBains from './pages/SalleDeBains';
import Realisations from './pages/Realisations/Realisations';
import CarrelageHome from './pages/Carrelage';
import MentionsLegales from './pages/MentionsLegales';
import Confidentialite from './pages/Confidentialite';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';

function App() {
  // Initialiser Google Tag Manager
  useGoogleTagManager();

  return (
    <HelmetProvider>
      <div className="App">
        <Router>
          <ScrollToTop />
          <CookieBanner />
          <Analytics />
          <Routes>
          {/* Page de sélection d'activité */}
          <Route path="/" element={<ActivitySelection />} />
          
          {/* Routes section Sanitaire */}
          <Route path="/sanitaire" element={<HomePage />} />
          <Route path="/sanitaire/contact" element={<ContactPage />} />
          <Route path="/sanitaire/chauffage" element={<Chauffage />} />
          <Route path="/sanitaire/energies-renouvelables" element={<EnergiesRenouvelables />} />
          <Route path="/sanitaire/plomberie" element={<Sanitaire />} />
          <Route path="/sanitaire/salle-de-bains" element={<SalleDeBains />} />
          <Route path="/sanitaire/realisations" element={<Realisations />} />

          {/* Routes section Carrelage */}
          <Route path="/carrelage" element={<CarrelageHome />} />
          <Route path="/carrelage/contact" element={<ContactPage />} />
          
          {/* Routes de compatibilité (anciennes URLs) */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/chauffage" element={<Chauffage />} />
          <Route path="/energies-renouvelables" element={<EnergiesRenouvelables />} />
          <Route path="/plomberie" element={<Sanitaire />} />
          <Route path="/salle-de-bains" element={<SalleDeBains />} />
          <Route path="/realisations" element={<Realisations />} />

          {/* Page Mentions Légales */}
          <Route path="/mentions-legales" element={<MentionsLegales />} />

          {/* Page Confidentialité */}
          <Route path="/confidentialite" element={<Confidentialite />} />
        </Routes>
      </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;
