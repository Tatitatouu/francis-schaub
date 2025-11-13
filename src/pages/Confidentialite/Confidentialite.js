import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SITE_CONFIG } from '../../config/seoConfig';
import './Confidentialite.css';

function Confidentialite() {
  const navigate = useNavigate();
  const canonicalUrl = `${SITE_CONFIG.siteUrl}/confidentialite`;

  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité - Francis Schaub</title>
        <meta name="description" content="Politique de confidentialité et RGPD du site francis-schaub.fr. Découvrez comment vos données sont traitées." />
        <meta name="keywords" content="politique de confidentialité, RGPD, données personnelles, confidentialité, Francis Schaub" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Politique de Confidentialité - Francis Schaub" />
        <meta property="og:description" content="Politique de confidentialité et protection des données" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="confidentialite">
        <div className="confidentialite-container">
          <button onClick={() => navigate(-1)} className="confidentialite-back-link">
            <ArrowLeft size={20} />
            <span>Retour</span>
          </button>
          <h1>Politique de Confidentialité</h1>

          {/* Introduction */}
          <section className="legal-section">
            <h2>Introduction</h2>
            <div className="legal-content">
              <p>Chez Francis Schaub, la protection de vos données personnelles est une priorité absolue. Cette politique de confidentialité explique comment nous collectons, utilisons, protégeons et partageons vos informations conformément au Règlement Général sur la Protection des Données (RGPD).</p>
              <p>Nous nous engageons à garantir la confidentialité et la sécurité de vos données personnelles.</p>
            </div>
          </section>

          {/* Responsable du traitement */}
          <section className="legal-section">
            <h2>1. Responsable du traitement</h2>
            <div className="legal-content">
              <p><strong>Entreprise :</strong> Francis Schaub (SARL)</p>
              <p><strong>Numéro SIREN :</strong> 422 622 266</p>
              <p><strong>Adresse :</strong> 4 Rue de Battenheim, 68270 Baldersheim, France</p>
              <p><strong>Email :</strong> contact@francis-schaub.fr</p>
              <p><strong>Téléphone :</strong> 03 89 57 61 62</p>
              <p>Le responsable du traitement est le représentant légal de l'entreprise Francis Schaub.</p>
            </div>
          </section>

          {/* Données collectées */}
          <section className="legal-section">
            <h2>2. Quelles données collectons-nous ?</h2>
            <div className="legal-content">
              <h3>Données collectées via le formulaire de contact :</h3>
              <ul>
                <li><strong>Données d'identification :</strong> Nom, prénom</li>
                <li><strong>Coordonnées :</strong> Adresse email, numéro de téléphone</li>
                <li><strong>Données de contenu :</strong> Message de contact, type de service demandé</li>
              </ul>

              <h3>Données collectées automatiquement :</h3>
              <ul>
                <li><strong>Données de navigation :</strong> Adresse IP, type de navigateur, pages visitées</li>
                <li><strong>Cookies :</strong> Identifiants de session, préférences utilisateur</li>
                <li><strong>Données analytiques :</strong> Temps passé sur le site, taux de rebond</li>
              </ul>

              <h3>Données collectées si applicable :</h3>
              <ul>
                <li><strong>Géolocalisation :</strong> Si vous l'autorisez</li>
                <li><strong>Avis clients :</strong> Si vous laissez un avis</li>
              </ul>
            </div>
          </section>

          {/* Base légale */}
          <section className="legal-section">
            <h2>3. Base légale du traitement</h2>
            <div className="legal-content">
              <p>Conformément au RGPD, nous traitons vos données personnelles sur les bases légales suivantes :</p>
              <ul>
                <li><strong>Consentement :</strong> Vous avez donné votre consentement explicite (formulaire de contact)</li>
                <li><strong>Exécution d'un contrat :</strong> Nécessaire pour répondre à votre demande de devis ou service</li>
                <li><strong>Intérêt légitime :</strong> Pour améliorer notre service et sécuriser notre plateforme</li>
                <li><strong>Obligations légales :</strong> Conformité avec la législation française et européenne</li>
              </ul>
            </div>
          </section>

          {/* Finalités du traitement */}
          <section className="legal-section">
            <h2>4. À quoi servent vos données ?</h2>
            <div className="legal-content">
              <p>Vos données personnelles sont utilisées pour :</p>
              <ul>
                <li>📧 <strong>Répondre à vos demandes de contact</strong> et de devis</li>
                <li>📞 <strong>Vous recontacter</strong> pour suivre votre demande</li>
                <li>📋 <strong>Fournir le service</strong> que vous avez demandé</li>
                <li>📊 <strong>Analyser et améliorer</strong> notre site web</li>
                <li>🔒 <strong>Détecter et prévenir</strong> les fraudes et abus</li>
                <li>✉️ <strong>Vous envoyer</strong> des communications marketing (avec consentement)</li>
                <li>⚖️ <strong>Respecter les obligations légales</strong> et fiscales</li>
              </ul>
            </div>
          </section>

          {/* Durée de conservation */}
          <section className="legal-section">
            <h2>5. Combien de temps conservons-nous vos données ?</h2>
            <div className="legal-content">
              <table className="data-retention-table">
                <thead>
                  <tr>
                    <th>Type de données</th>
                    <th>Durée de conservation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Données de contact (formulaire)</td>
                    <td>3 ans à compter de la demande</td>
                  </tr>
                  <tr>
                    <td>Données clients (devis/facture)</td>
                    <td>10 ans (obligation fiscale)</td>
                  </tr>
                  <tr>
                    <td>Logs de connexion</td>
                    <td>1 an</td>
                  </tr>
                  <tr>
                    <td>Cookies</td>
                    <td>13 mois maximum</td>
                  </tr>
                  <tr>
                    <td>Données analytiques</td>
                    <td>26 mois</td>
                  </tr>
                </tbody>
              </table>
              <p style={{ marginTop: '1rem' }}>Après expiration de ces délais, vos données sont supprimées de manière sécurisée.</p>
            </div>
          </section>

          {/* Partage des données */}
          <section className="legal-section">
            <h2>6. Partage de vos données</h2>
            <div className="legal-content">
              <p>Vos données ne sont <strong>jamais vendues</strong> à des tiers. Cependant, elles peuvent être partagées avec :</p>
              <ul>
                <li><strong>Hébergeur :</strong> Vercel (USA) - données hébergées sur serveurs sécurisés</li>
                <li><strong>Prestataires de service :</strong> Email, sauvegardes, support technique</li>
                <li><strong>Autorités légales :</strong> Si obligatoire par la loi</li>
              </ul>
              <p style={{ marginTop: '1rem' }}><strong>Transferts internationaux :</strong> Certaines données peuvent être transférées hors de l'UE. Dans ce cas, nous appliquons les garanties appropriées (Clauses Contractuelles Types, Privacy Shield si applicable).</p>
            </div>
          </section>

          {/* Vos droits */}
          <section className="legal-section">
            <h2>7. Vos droits RGPD</h2>
            <div className="legal-content">
              <p>En tant que sujet de données, vous disposez des droits suivants :</p>
              <ul>
                <li><strong>🔍 Droit d'accès :</strong> Accéder à vos données personnelles</li>
                <li><strong>✏️ Droit de rectification :</strong> Corriger ou mettre à jour vos données</li>
                <li><strong>🗑️ Droit à l'oubli :</strong> Demander la suppression de vos données</li>
                <li><strong>🚫 Droit à la limitation :</strong> Limiter le traitement de vos données</li>
                <li><strong>📤 Droit à la portabilité :</strong> Récupérer vos données dans un format standard</li>
                <li><strong>⚖️ Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                <li><strong>🤖 Droit relatif aux décisions automatisées :</strong> Ne pas être soumis à une décision automatisée</li>
              </ul>
              <p style={{ marginTop: '1rem' }}><strong>Pour exercer ces droits, contactez-nous :</strong></p>
              <p>Email : contact@francis-schaub.fr<br />
              Téléphone : 03 89 57 61 62<br />
              Nous répondrons dans les 30 jours à votre demande.</p>
            </div>
          </section>

          {/* Sécurité */}
          <section className="legal-section">
            <h2>8. Sécurité de vos données</h2>
            <div className="legal-content">
              <p>Nous mettons en place des mesures de sécurité pour protéger vos données :</p>
              <ul>
                <li>🔐 <strong>Chiffrement SSL/TLS</strong> pour tous les formulaires</li>
                <li>🔒 <strong>Authentification sécurisée</strong> sur nos serveurs</li>
                <li>🛡️ <strong>Pare-feu</strong> et protection contre les attaques</li>
                <li>👥 <strong>Accès restreint</strong> aux données (personnel autorisé uniquement)</li>
                <li>🔄 <strong>Sauvegardes régulières</strong> et récupération en cas de sinistre</li>
                <li>📋 <strong>Audit de sécurité</strong> régulier</li>
              </ul>
              <p style={{ marginTop: '1rem' }}><strong>Limitation :</strong> Aucun système n'est 100% sécurisé. Nous ne pouvons garantir une sécurité absolue.</p>
            </div>
          </section>

          {/* Cookies */}
          <section className="legal-section">
            <h2>9. Cookies et technologies similaires</h2>
            <div className="legal-content">
              <p>Ce site utilise des cookies pour :</p>
              <ul>
                <li><strong>Cookies essentiels :</strong> Fonctionnement du site</li>
                <li><strong>Cookies analytiques :</strong> Comprendre le comportement des visiteurs</li>
                <li><strong>Cookies de marketing :</strong> Adapter le contenu à vos préférences</li>
              </ul>
              <p style={{ marginTop: '1rem' }}>Vous pouvez configurer votre navigateur pour refuser les cookies. Veuillez consulter l'aide de votre navigateur pour plus d'informations.</p>
            </div>
          </section>

          {/* Réclamation */}
          <section className="legal-section">
            <h2>10. Droit de réclamation auprès de l'autorité de contrôle</h2>
            <div className="legal-content">
              <p>Si vous estimez que nous ne respectons pas votre droit à la protection des données, vous pouvez déposer une plainte auprès de l'autorité de contrôle compétente :</p>
              <p><strong>CNIL (Commission Nationale de l'Informatique et des Libertés)</strong><br />
              3 Place de Fontenoy<br />
              75007 Paris, France<br />
              Téléphone : +33 (0)1 53 73 22 22<br />
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">https://www.cnil.fr</a></p>
            </div>
          </section>

          {/* Modifications */}
          <section className="legal-section">
            <h2>11. Modifications de cette politique</h2>
            <div className="legal-content">
              <p>Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications sont effectives dès leur publication sur ce site.</p>
              <p>Nous vous recommandons de consulter régulièrement cette politique pour rester informé de nos pratiques.</p>
            </div>
          </section>

          {/* Contact */}
          <section className="legal-section">
            <h2>12. Nous contacter</h2>
            <div className="legal-content">
              <p>Pour toute question concernant cette politique de confidentialité ou le traitement de vos données :</p>
              <p>
                <strong>Email :</strong> contact@francis-schaub.fr<br />
                <strong>Téléphone :</strong> 03 89 57 61 62<br />
                <strong>Adresse :</strong> 4 Rue de Battenheim, 68270 Baldersheim, France
              </p>
            </div>
          </section>

          {/* Date mise à jour */}
          <section className="legal-section">
            <p className="last-update"><em>Dernière mise à jour : 13 novembre 2025</em></p>
          </section>
        </div>
      </div>
    </>
  );
}

export default Confidentialite;
