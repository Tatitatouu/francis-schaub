import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import HomePageApp from './pages/HomePageApp';
import ContactPage from './pages/ContactPage';
import Chauffage from './pages/Chauffage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePageApp />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/chauffage" element={<Chauffage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
