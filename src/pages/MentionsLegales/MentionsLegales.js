import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SITE_CONFIG } from '../../config/seoConfig';
import './MentionsLegales.css';

function MentionsLegales() {
  const navigate = useNavigate();
  const canonicalUrl = `${SITE_CONFIG.siteUrl}/mentions-legales`;

  return (
    <>
      <Helmet>
        <title>Mentions Légales - Francis Schaub</title>
        <meta name="description" content="Mentions légales, conditions d'utilisation et informations légales du site francis-schaub.fr" />
        <meta name="keywords" content="mentions légales, conditions d'utilisation, informations légales, Francis Schaub" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Mentions Légales - Francis Schaub" />
        <meta property="og:description" content="Mentions légales et conditions d'utilisation" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="mentions-legales">
        <div className="mentions-container">
          <button onClick={() => navigate(-1)} className="mentions-back-link">
            <ArrowLeft size={20} />
            <span>Retour</span>
          </button>
          <h1>Mentions Légales</h1>

          {/* Identification */}
          <section className="legal-section">
            <h2>1. Identification du site</h2>
            <div className="legal-content">
              <p><strong>Nom du site :</strong> Francis Schaub</p>
              <p><strong>URL :</strong> https://www.francis-schaub.fr</p>
              <p><strong>Type d'activité :</strong> Plomberie, Chauffage, Sanitaire, Carrelage, Énergies Renouvelables</p>
            </div>
          </section>

          {/* Responsable de l'entreprise */}
          <section className="legal-section">
            <h2>2. Identification de l'entreprise</h2>
            <div className="legal-content">
              <p><strong>Raison sociale :</strong> Francis Schaub</p>
              <p><strong>Forme juridique :</strong> SARL (Société à Responsabilité Limitée)</p>
              <p><strong>Numéro SIREN :</strong> 422 622 266</p>
              <p><strong>Numéro SIRET (siège) :</strong> 422 622 266 00035</p>
              <p><strong>Numéro de TVA intracommunautaire :</strong> FR83422622266</p>
              <p><strong>Adresse du siège social :</strong> 4 Rue de Battenheim, 68270 Baldersheim, France</p>
              <p><strong>Téléphone :</strong> 03 89 57 61 62</p>
              <p><strong>Email :</strong> contact@francis-schaub.fr</p>
            </div>
          </section>

          {/* Hébergement */}
          <section className="legal-section">
            <h2>3. Hébergement</h2>
            <div className="legal-content">
              <p><strong>Hébergeur :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 440 N Barranca Ave, Covina, CA 91723, USA</p>
              <p><strong>Site web :</strong> https://vercel.com</p>
              <p><strong>Email support :</strong> support@vercel.com</p>
            </div>
          </section>

          {/* Droit d'auteur */}
          <section className="legal-section">
            <h2>4. Droit d'auteur et propriété intellectuelle</h2>
            <div className="legal-content">
              <p>L'ensemble du contenu de ce site (textes, images, vidéos, logos, marques) est la propriété exclusive de Francis Schaub ou de ses partenaires autorisés.</p>
              <p>Toute reproduction, distribution, modification ou utilisation sans autorisation écrite préalable est strictement interdite.</p>
              <p>Les droits d'auteur © 2025 Francis Schaub - Tous droits réservés.</p>
            </div>
          </section>

          {/* Responsabilité */}
          <section className="legal-section">
            <h2>5. Limitation de responsabilité</h2>
            <div className="legal-content">
              <p>Francis Schaub s'efforce de maintenir l'exactitude et la mise à jour des informations publiées sur ce site. Cependant, nous ne garantissons pas l'exactitude, l'exhaustivité ou l'actualité du contenu.</p>
              <p>L'utilisateur est seul responsable de l'utilisation qu'il fait du site et de ses contenus. Francis Schaub ne pourra être tenu responsable de :</p>
              <ul>
                <li>Les dommages directs ou indirects résultant de l'accès ou de l'utilisation du site</li>
                <li>Les interruptions d'accès au site</li>
                <li>Les virus ou logiciels malveillants pouvant infecter le matériel de l'utilisateur</li>
                <li>L'utilisation abusive du site</li>
              </ul>
            </div>
          </section>

          {/* Liens externes */}
          <section className="legal-section">
            <h2>6. Liens externes</h2>
            <div className="legal-content">
              <p>Ce site peut contenir des liens vers des sites externes. Francis Schaub n'est pas responsable du contenu de ces sites tiers. La consultation de ces liens se fait sous l'entière responsabilité de l'utilisateur.</p>
            </div>
          </section>

          {/* Données personnelles */}
          <section className="legal-section">
            <h2>7. Politique de confidentialité et traitement des données</h2>
            <div className="legal-content">
              <p>Les données collectées via les formulaires de contact sont traitées conformément à la réglementation RGPD (Règlement Général sur la Protection des Données).</p>
              <p><strong>Informations collectées :</strong> Nom, prénom, adresse email, numéro de téléphone, message de contact</p>
              <p><strong>Finalité :</strong> Répondre à votre demande de contact</p>
              <p><strong>Durée de conservation :</strong> Les données sont conservées pendant 3 ans à compter de la demande</p>
              <p><strong>Vos droits :</strong> Vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant vos données personnelles. Vous pouvez exercer ces droits en contactant : contact@francis-schaub.fr</p>
              <p><strong>Responsable du traitement :</strong> Francis Schaub - contact@francis-schaub.fr</p>
            </div>
          </section>

          {/* Cookies */}
          <section className="legal-section">
            <h2>8. Cookies</h2>
            <div className="legal-content">
              <p>Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. En continuant la navigation, vous acceptez l'utilisation de cookies.</p>
              <p>Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela pourrait affecter le fonctionnement du site.</p>
            </div>
          </section>

          {/* Conditions d'utilisation */}
          <section className="legal-section">
            <h2>9. Conditions d'utilisation</h2>
            <div className="legal-content">
              <p>L'utilisateur s'engage à :</p>
              <ul>
                <li>Respecter la législation en vigueur</li>
                <li>Ne pas utiliser le site à des fins illégales ou abusives</li>
                <li>Ne pas reproduire ou copier le contenu sans autorisation</li>
                <li>Ne pas transmettre de contenu offensant, harcelant ou discriminatoire</li>
                <li>Ne pas effectuer de tentatives de piratage ou d'accès non autorisé</li>
              </ul>
            </div>
          </section>

          {/* Modification des conditions */}
          <section className="legal-section">
            <h2>10. Modification des conditions</h2>
            <div className="legal-content">
              <p>Francis Schaub se réserve le droit de modifier à tout moment les conditions énoncées dans ces mentions légales. Les modifications sont effectives dès leur publication sur le site.</p>
            </div>
          </section>

          {/* Contact */}
          <section className="legal-section">
            <h2>11. Contact</h2>
            <div className="legal-content">
              <p>Pour toute question concernant ces mentions légales ou le site, veuillez nous contacter :</p>
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

export default MentionsLegales;
