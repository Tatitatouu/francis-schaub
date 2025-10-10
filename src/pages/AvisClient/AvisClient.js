import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import './AvisClient.css';

const AvisClient = () => {
  return (
    <div className="avis-client-page page-with-fixed-header">
      <Header />
      
      <main className="avis-client-main">
        <div className="construction-container">
          {/* Animated Pipe System */}
          <div className="pipe-system">
            <div className="pipe horizontal-pipe pipe-1">
              <div className="water-flow"></div>
            </div>
            <div className="pipe vertical-pipe pipe-2">
              <div className="water-flow vertical"></div>
            </div>
            <div className="pipe horizontal-pipe pipe-3">
              <div className="water-flow"></div>
            </div>
            <div className="pipe-joint joint-1"></div>
            <div className="pipe-joint joint-2"></div>
            <div className="pipe-joint joint-3"></div>
          </div>

          {/* Main Content */}
          <div className="construction-content">
            <div className="construction-icon">
              🚿
            </div>
            
            <h1 className="construction-title">
              Rénovation en cours...
            </h1>
            
            <div className="construction-subtitle">
              <span className="wrench-icon">🔧</span>
              Cette page est actuellement en travaux
              <span className="wrench-icon">🔧</span>
            </div>
            
            <div className="construction-message">
              <p>
                Comme une salle de bains qui se transforme, cette section 
                <strong> "Avis Clients" </strong> est en cours de rénovation pour vous offrir 
                une expérience encore plus fluide !
              </p>
              
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span>Installation des témoignages en cours...</span>
              </div>
            </div>

            {/* Interactive Elements */}
            <div className="construction-features">
              <div className="feature-card">
                <div className="feature-icon">💧</div>
                <h3>Avis authentiques</h3>
                <p>Témoignages vérifiés de nos clients</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">⭐</div>
                <h3>Évaluations détaillées</h3>
                <p>Notes et commentaires par projet</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">📸</div>
                <h3>Photos avant/après</h3>
                <p>Galerie de nos réalisations</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="construction-cta">
              <p>En attendant, découvrez nos réalisations :</p>
              <div className="cta-buttons">
                <Link to="/sanitaire" className="cta-button primary">
                  Nos services sanitaires
                  <span className="button-icon">🚿</span>
                </Link>
                <Link to="/salle-de-bains" className="cta-button secondary">
                  Rénovations salles de bains
                  <span className="button-icon">🛁</span>
                </Link>
                <Link to="/contact" className="cta-button tertiary">
                  Nous contacter
                  <span className="button-icon">📞</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="floating-elements">
            <div className="floating-bubble bubble-1">💧</div>
            <div className="floating-bubble bubble-2">🔧</div>
            <div className="floating-bubble bubble-3">🚿</div>
            <div className="floating-bubble bubble-4">💧</div>
            <div className="floating-bubble bubble-5">⚙️</div>
            <div className="floating-bubble bubble-6">🛁</div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AvisClient;