import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import Chauffage from './pages/Chauffage';
import EnergiesRenouvelables from './pages/EnergiesRenouvelables';
import Sanitaire from './pages/Sanitaire';
import SalleDeBains from './pages/SalleDeBains';
import Realisations from './pages/Realisations/Realisations';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/chauffage" element={<Chauffage />} />
          <Route path="/energies-renouvelables" element={<EnergiesRenouvelables />} />
          <Route path="/sanitaire" element={<Sanitaire />} />
          <Route path="/salle-de-bains" element={<SalleDeBains />} />
          <Route path="/realisations" element={<Realisations />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
