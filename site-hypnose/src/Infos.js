import React from 'react';

function Infos() {
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
          Confidentialité et respect de la vie privée
        </h1>
      </div>
      {/* Contenu */}
      <div style={{
        maxWidth: 800,
        margin: '48px auto 0 auto',
        padding: '0 24px',
        fontSize: '1.15rem',
        lineHeight: 1.8,
        background: 'transparent',
        textAlign: 'justify',
      }}>
        <p>
          En tant que praticienne en hypnose, je m'engage à respecter la confidentialité la plus stricte concernant toutes les informations échangées lors de nos séances.<br /><br />
          Toutes les données personnelles, les propos, les situations et les problématiques abordées restent strictement confidentiels et ne sont jamais partagés avec des tiers, sauf obligation légale ou danger grave et imminent pour la personne ou autrui.<br /><br />
          Aucune information ne sera utilisée à des fins commerciales ou transmises à des organismes extérieurs. Vous bénéficiez d'un espace d'écoute sécurisé, bienveillant et respectueux de votre vie privée.<br /><br />
          Pour toute question concernant la gestion de vos données ou la confidentialité, n'hésitez pas à m'en parler lors de votre séance ou à me contacter directement.
        </p>
      </div>
    </div>
  );
}

export default Infos; 