import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SITE_CONFIG } from '../../config/seoConfig';
import './CGV.css';

function CGV() {
  const navigate = useNavigate();
  const canonicalUrl = `${SITE_CONFIG.siteUrl}/cgv`;

  return (
    <>
      <Helmet>
        <title>Conditions Générales de Vente - Francis Schaub</title>
        <meta name="description" content="Conditions générales de vente et contrats de service de Francis Schaub" />
        <meta name="keywords" content="CGV, conditions générales, conditions de vente, contrat, Francis Schaub" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Conditions Générales de Vente - Francis Schaub" />
        <meta property="og:description" content="Conditions générales de vente et contrats de service" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="cgv">
        <div className="cgv-container">
          <button onClick={() => navigate(-1)} className="cgv-back-link">
            <ArrowLeft size={20} />
            <span>Retour</span>
          </button>
          <h1>Conditions Générales de Vente</h1>

          {/* Article 1 */}
          <section className="legal-section">
            <h2>Article 1 - Objet et champ d'application</h2>
            <div className="legal-content">
              <p>Les présentes Conditions Générales de Vente (CGV) s'appliquent à tous les devis, offres et contrats de services proposés par Francis Schaub pour les prestations de plomberie, chauffage, sanitaire, carrelage et énergies renouvelables.</p>
              <p>Elles s'appliquent à tous les clients, professionnels et particuliers. Toute acceptation du devis implique l'acceptation complète de ces conditions.</p>
            </div>
          </section>

          {/* Article 2 */}
          <section className="legal-section">
            <h2>Article 2 - Établissement des devis</h2>
            <div className="legal-content">
              <p><strong>Gratuité :</strong> Les devis sont établis gratuitement à titre informatif.</p>
              <p><strong>Durée de validité :</strong> Les devis sont valables 30 jours à compter de leur date d'établissement.</p>
              <p><strong>Contenu :</strong> Les devis précisent la nature des travaux, les matériaux utilisés, le coût estimé et les délais d'intervention.</p>
              <p><strong>Révision :</strong> Francis Schaub se réserve le droit de réviser un devis si les conditions de marché ont changé.</p>
            </div>
          </section>

          {/* Article 3 */}
          <section className="legal-section">
            <h2>Article 3 - Acceptation de la commande</h2>
            <div className="legal-content">
              <p>L'acceptation du devis par le client constitue la formation du contrat entre le client et Francis Schaub.</p>
              <p>Cette acceptation peut se faire par :</p>
              <ul>
                <li>Signature du devis</li>
                <li>Email de confirmation</li>
                <li>Appel téléphonique confirmant l'acceptation</li>
              </ul>
              <p>À partir de ce moment, le client est engagé dans le contrat et ne peut le résoudre que selon les termes de l'Article 5.</p>
            </div>
          </section>

          {/* Article 4 */}
          <section className="legal-section">
            <h2>Article 4 - Prix et conditions de paiement</h2>
            <div className="legal-content">
              <p><strong>Prix TTC :</strong> Tous les prix sont exprimés en euros TTC (TVA 20% sauf exception).</p>
              <p><strong>Facturation :</strong> La facture est établie à l'issue des travaux, sauf accord différent.</p>
              <p><strong>Conditions de paiement :</strong></p>
              <ul>
                <li>Pour les petits travaux : paiement à la réception</li>
                <li>Pour les travaux importants : possibilité d'acompte (30-50%) à la signature, solde à la fin</li>
                <li>Moyens acceptés : Espèces, chèque, virement bancaire, carte bancaire</li>
              </ul>
              <p><strong>Délai de paiement :</strong> Net 30 jours à compter de la date de facture.</p>
              <p><strong>Pénalités de retard :</strong> En cas de non-paiement après 30 jours, des intérêts de retard seront facturés à 1.5% par mois ou selon la législation en vigueur.</p>
            </div>
          </section>

          {/* Article 5 */}
          <section className="legal-section">
            <h2>Article 5 - Droit de rétractation</h2>
            <div className="legal-content">
              <p>Conformément à la loi française, le consommateur disposait d'un délai de rétractation de 14 jours à compter de la signature du contrat.</p>
              <p><strong>EXCEPTION :</strong> Ce droit ne s'applique pas aux services déjà commencés ou exécutés à la demande du client avant le délai de rétractation.</p>
              <p>Pour exercer ce droit, le client doit notifier par écrit son intention d'annuler à : contact@francis-schaub.fr</p>
            </div>
          </section>

          {/* Article 6 */}
          <section className="legal-section">
            <h2>Article 6 - Exécution des travaux</h2>
            <div className="legal-content">
              <p><strong>Délais :</strong> Les délais indiqués dans le devis sont donnés à titre indicatif et n'engagent pas la responsabilité de Francis Schaub en cas de dépassement raisonnable.</p>
              <p><strong>Accès aux lieux :</strong> Le client s'engage à mettre à disposition les lieux et à faciliter l'accès au chantier.</p>
              <p><strong>Horaires :</strong> Les travaux s'effectuent selon les horaires habituels de l'entreprise (lun-ven 8h-12h et 14h-18h).</p>
              <p><strong>Nettoyage :</strong> Francis Schaub assure le nettoyage des zones de travail à la fin de chaque journée.</p>
              <p><strong>Responsabilité du chantier :</strong> Le client reste responsable des biens qui se trouvent sur le chantier, sauf dommages causés directement par l'équipe de Francis Schaub.</p>
            </div>
          </section>

          {/* Article 7 */}
          <section className="legal-section">
            <h2>Article 7 - Garanties</h2>
            <div className="legal-content">
              <p><strong>Garantie légale de conformité :</strong> Deux ans à partir de la livraison/réception des travaux.</p>
              <p><strong>Garantie de bon fonctionnement :</strong> Les équipements fournis et installés par Francis Schaub sont garantis selon la garantie du fabricant.</p>
              <p><strong>Garantie décennale :</strong> Pour tous les travaux, conformément à la loi française (10 ans).</p>
              <p><strong>Limitations :</strong> La garantie ne couvre pas :</p>
              <ul>
                <li>Les dommages causés par le client ou un tiers</li>
                <li>L'usure normale et l'entretien insuffisant</li>
                <li>Les mauvaises manipulations</li>
                <li>Les modifications non autorisées apportées à l'installation</li>
              </ul>
              <p><strong>Réclamation :</strong> Tout vice doit être signalé par écrit dans un délai de 7 jours après réception des travaux.</p>
            </div>
          </section>

          {/* Article 8 */}
          <section className="legal-section">
            <h2>Article 8 - Modification des travaux</h2>
            <div className="legal-content">
              <p><strong>Demande de modification :</strong> Toute modification des travaux prévus doit être demandée par écrit et acceptée par Francis Schaub.</p>
              <p><strong>Coûts supplémentaires :</strong> Si la modification entraîne un coût supplémentaire, un devis supplémentaire sera établi et soumis à acceptation.</p>
              <p><strong>Délais :</strong> Les délais peuvent être modifiés en conséquence.</p>
            </div>
          </section>

          {/* Article 9 */}
          <section className="legal-section">
            <h2>Article 9 - Responsabilité et assurances</h2>
            <div className="legal-content">
              <p>Francis Schaub dispose d'une assurance Responsabilité Civile Professionnelle couvrant les dommages causés par son intervention.</p>
              <p><strong>Limitation de responsabilité :</strong> La responsabilité de Francis Schaub est limitée au montant des travaux facturés, sauf en cas de faute grave ou intentionnelle.</p>
              <p><strong>Force majeure :</strong> Francis Schaub ne sera pas responsable des retards ou défaillances résultant de circonstances indépendantes de sa volonté (intempéries, grèves, catastrophes naturelles, etc.).</p>
            </div>
          </section>

          {/* Article 10 */}
          <section className="legal-section">
            <h2>Article 10 - Annulation et résiliation</h2>
            <div className="legal-content">
              <p><strong>Annulation avant commencement :</strong> Si le client annule avant le début des travaux, seuls les frais de déplacement et d'étude peuvent être facturés.</p>
              <p><strong>Annulation en cours d'exécution :</strong> L'annulation en cours de chantier entraîne la facturation des travaux réalisés, des matériaux fournis et des frais supplémentaires.</p>
              <p><strong>Résiliation par Francis Schaub :</strong> Francis Schaub se réserve le droit de résilier le contrat si le client ne respecte pas ses obligations de paiement ou crée des conditions de travail dangereuses.</p>
            </div>
          </section>

          {/* Article 11 */}
          <section className="legal-section">
            <h2>Article 11 - Propriété des matériaux</h2>
            <div className="legal-content">
              <p>Tous les matériaux fournis par Francis Schaub restent la propriété de l'entreprise jusqu'à la réception définitive de la facture.</p>
              <p>En cas de non-paiement, Francis Schaub peut reprendre possession des équipements fournis.</p>
            </div>
          </section>

          {/* Article 12 */}
          <section className="legal-section">
            <h2>Article 12 - Litiges et juridiction</h2>
            <div className="legal-content">
              <p><strong>Règlement amiable :</strong> Toute contestation sera d'abord soumise à une tentative de règlement amiable.</p>
              <p><strong>Compétence juridique :</strong> En cas de litige, seuls les tribunaux compétents du lieu du siège social de Francis Schaub seront compétents.</p>
              <p><strong>Loi applicable :</strong> Les présentes CGV sont régies par la loi française.</p>
            </div>
          </section>

          {/* Article 13 */}
          <section className="legal-section">
            <h2>Article 13 - Modifications des CGV</h2>
            <div className="legal-content">
              <p>Francis Schaub se réserve le droit de modifier ces CGV à tout moment. Les modifications entrent en vigueur dès leur publication sur le site.</p>
              <p>Les contrats en cours restent soumis aux CGV en vigueur à la date de signature.</p>
            </div>
          </section>

          {/* Contact */}
          <section className="legal-section">
            <h2>Article 14 - Contact</h2>
            <div className="legal-content">
              <p>Pour toute question concernant ces CGV :</p>
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

export default CGV;
