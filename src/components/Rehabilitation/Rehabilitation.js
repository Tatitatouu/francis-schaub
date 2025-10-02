import React from 'react';
import './Rehabilitation.css';

const Rehabilitation = () => {
  return (
    <section className="rehabilitation-section">
      <div className="rehabilitation-container">
        {/* Section Réhabilitation */}
        <div className="rehabilitation-content">
          <h2 className="rehabilitation-title">
            RÉHABILITATION DE SOLS, TERRASSES, ESCALIERS ET TOITURES
          </h2>
          
          <div className="rehabilitation-description">
            <p>
              Pour compléter la liste de nos prestations, nous sommes également en mesure de rénover et remettre à neuf vos sols intérieurs et extérieurs, 
              vos terrasses et escaliers, pour un <strong>rendu optimisé et durable dans le temps</strong>.
            </p>
            
            <p>
              En outre, SCHAUB Francis ETS se charge de la réfection des étanchéités de vos toitures, qu'il s'agisse d'une maison individuelle ou d'un bâtiment. 
              De nombreuses compétences que nous mettons à la disposition de tous !
            </p>
          </div>
        </div>

        {/* Section Nos Tarifs */}
        <div className="pricing-section">
          <h2 className="pricing-title">NOS TARIFS</h2>
          
          <div className="pricing-table">
            <div className="pricing-header">
              <div className="pricing-service">Service</div>
              <div className="pricing-price">Prix</div>
            </div>
            
            <div className="pricing-row">
              <div className="pricing-service">Devis</div>
              <div className="pricing-price">Gratuit et détaillé</div>
            </div>
            
            <div className="pricing-row">
              <div className="pricing-service">Taux horaire de main d'œuvre</div>
              <div className="pricing-price">46 € HT pose/installation</div>
            </div>
            
            <div className="pricing-row">
              <div className="pricing-service">Taux horaire de main d'œuvre</div>
              <div className="pricing-price">54 € HT dépannage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rehabilitation;