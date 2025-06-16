import React from 'react';

export default function PolitiqueConfidentialite() {
  return (
    <div style={{ width: '100%' }}>
      {/* Bandeau titre */}
      <div
        style={{
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          background: '#1976d2',
          padding: 0,
          marginTop: '0px',
          marginBottom: 0,
        }}
      >
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#fff',
          textAlign: 'center',
          margin: 0,
          padding: '38px 0 38px 0',
          letterSpacing: '1px',
          fontFamily: 'Montserrat, Inter, Arial, sans-serif',
        }}>
          Politique de confidentialité
        </h1>
      </div>
      {/* Contenu */}
      <div style={{
        maxWidth: 900,
        margin: '48px auto 0 auto',
        padding: '0 24px',
        fontSize: '1.13em',
        lineHeight: 1.7,
        background: 'transparent',
      }}>
        <div>
          <h2>1. Collecte des informations</h2>
          <p>Les informations personnelles collectées peuvent inclure votre nom, prénom, adresse e-mail, numéro de téléphone, et toute information transmise via le formulaire de contact ou de prise de rendez-vous. Aucune donnée sensible n'est collectée sans votre consentement explicite.</p>
          <h2>2. Utilisation des données</h2>
          <p>Les données collectées sont utilisées uniquement pour répondre à vos demandes, organiser des rendez-vous, assurer le suivi thérapeutique, ou vous transmettre des informations relatives à l'activité du cabinet. Vos données ne sont jamais cédées ou vendues à des tiers.</p>
          <h2>3. Conservation des données</h2>
          <p>Les données sont conservées pendant la durée strictement nécessaire à la gestion de la relation thérapeutique ou administrative, conformément à la législation en vigueur.</p>
          <h2>4. Sécurité</h2>
          <p>Toutes les précautions sont prises pour protéger vos données personnelles contre la perte, l'accès non autorisé, la divulgation ou la modification. Le site utilise des protocoles sécurisés (HTTPS).</p>
          <h2>5. Vos droits</h2>
          <p>Conformément à la loi Informatique et Libertés et au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant vos données personnelles. Pour exercer ces droits, contactez-moi à l'adresse indiquée sur le site.</p>
          <h2>6. Cookies</h2>
          <p>Le site peut utiliser des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visite. Vous pouvez à tout moment refuser ou supprimer les cookies via les paramètres de votre navigateur.</p>
          <h2>7. Contact</h2>
          <p>Pour toute question relative à la protection de vos données personnelles, vous pouvez me contacter via le formulaire de contact du site ou par e-mail.</p>
          <p style={{ fontSize: '0.95em', color: '#888', marginTop: '32px' }}>
            Dernière mise à jour : juin 2025
          </p>
        </div>
        <p style={{
          color: 'crimson',
          fontWeight: 'bold',
          marginTop: '32px',
          textAlign: 'center'
        }}>
          Important : L'accompagnement ne peut en aucun cas se substituer à un avis médical ou à un traitement médical.
        </p>
      </div>
    </div>
  );
} 