import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, AlertCircle, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    'Chauffage',
    'Plomberie/Sanitaire',
    'Climatisation',
    'Énergies renouvelables',
    'Réhabilitation',
    'Autre'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Préparation des données pour Web3Forms
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '32ae221a-0e2c-43b5-bac3-cf762e053602');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('service', formData.service);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('subject', `Nouvelle demande de devis - ${formData.service || 'Service non spécifié'}`);
      formDataToSend.append('from_name', formData.name);
      formDataToSend.append('redirect', 'false');

      // Envoi vers Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Erreur lors de l\'envoi du formulaire');
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Erreur:', error);
      }
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">
            Une question ? Un projet ?
          </h2>
          <p className="contact-subtitle">
            Nous sommes à votre disposition pour étudier votre projet et vous proposer une solution adaptée
          </p>
        </div>

        <div className="contact-content">
          {/* Section principale avec les deux cartes côte à côte */}
          <div className="contact-main">
            {/* Informations de contact */}
            <div className="contact-info">
              <div className="contact-card">
                <h3 className="contact-card-title">Nos coordonnées</h3>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <Phone />
                    </div>
                    <div className="contact-text">
                      <h4>Téléphone</h4>
                      <p>03 89 57 61 62</p>
                      <span className="contact-note">Urgences - Réservé aux clients</span>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <Mail />
                    </div>
                    <div className="contact-text">
                      <h4>Email</h4>
                      <p>contact@francis-schaub.fr</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <MapPin />
                    </div>
                    <div className="contact-text">
                      <h4>Adresse</h4>
                      <p>4 Rue de Battenheim<br />68270 Baldersheim</p>
                      <span className="contact-note">Zone d'intervention : Alsace</span>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <Clock />
                    </div>
                    <div className="contact-text">
                      <h4>Horaires</h4>
                      <p>Lun - Ven : 8h-12h / 14h-18h</p>
                    </div>
                  </div>
                </div>

                <div className="certifications-reminder">
                  <h4>Entreprise certifiée</h4>
                  <p>Bénéficiez des aides de l'État pour vos travaux</p>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="contact-form-container">
              <div className="contact-form-card">
                <h3 className="form-title">Demande de devis gratuit</h3>
                <p className="form-subtitle">
                  Décrivez votre projet et nous vous recontactons rapidement
                </p>

                <form onSubmit={handleSubmit} className="contact-form">
                  {/* Champ caché pour Web3Forms */}
                  <input type="hidden" name="access_key" value="32ae221a-0e2c-43b5-bac3-cf762e053602" />
                  <input type="hidden" name="subject" value={`Nouvelle demande de devis - ${formData.service || 'Service non spécifié'}`} />
                  <input type="hidden" name="from_name" value={formData.name} />
                  <input type="hidden" name="redirect" value="false" />
                  
                  {/* Protection anti-spam (honeypot) */}
                  <input type="checkbox" name="botcheck" style={{display: 'none'}} />
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Nom complet *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Votre nom et prénom"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Téléphone *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="votre.email@exemple.com"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="service">Type de prestation</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                      >
                        <option value="">Sélectionnez un service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Décrivez votre projet *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      placeholder="Décrivez votre projet, vos besoins, la localisation des travaux, etc."
                    ></textarea>
                  </div>

                  <div className="form-consent">
                    <input type="checkbox" id="consent" required />
                    <label htmlFor="consent">
                      J'accepte d'être contacté par Francis Schaub concernant ma demande *
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send />
                        Envoyer ma demande
                      </>
                    )}
                  </button>
                </form>

                {submitStatus && (
                  <div className={`submit-message ${submitStatus}`}>
                    {submitStatus === 'success' ? (
                      <>
                        <CheckCircle />
                        <span>Message envoyé avec succès ! Nous vous recontactons rapidement.</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle />
                        <span>Erreur lors de l'envoi. Veuillez réessayer ou nous appeler directement.</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Carte Google Maps centrée en bas */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.234567890123!2d7.5234567890123!3d47.8123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791b8c9d2345678%3A0x2345678901bcdefg!2s4%20Rue%20de%20Battenheim%2C%2068270%20Baldersheim%2C%20France!5e0!3m2!1sfr!2sfr!4v1640000000000!5m2!1sfr!2sfr"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Francis Schaub - 4 Rue de Battenheim, 68270 Baldersheim"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;