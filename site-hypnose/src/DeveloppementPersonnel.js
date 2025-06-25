import React from 'react';

export default function DeveloppementPersonnel() {
  return (
    <div style={{ width: '100%' }}>
      {/* Image illustrative */}
      <div
        style={{
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 0,
          marginBottom: 0,
          height: '500px',
          overflow: 'hidden'
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/devperso.jpg"}
          alt="Développement personnel"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '0 0 18px 18px',
            boxShadow: '0 8px 32px rgba(25, 118, 210, 0.10), 0 2px 8px rgba(0,0,0,0.07)'
          }}
        />
      </div>
      <h1 style={{
        fontSize: '2.7rem',
        fontWeight: 800,
        color: '#1976d2',
        textAlign: 'center',
        margin: '38px 0 18px 0',
        fontFamily: 'Montserrat, Inter, Arial, sans-serif',
        letterSpacing: '1px'
      }}>
        Développement personnel
      </h1>
      {/* Contenu */}
      <div style={{
        maxWidth: 900,
        margin: '48px auto 0 auto',
        padding: '0 24px',
        fontSize: '1.13em',
        lineHeight: 1.7,
        background: 'transparent',
      }}>
        <p>
          Le développement personnel, c'est l'art de mieux se connaître, de dépasser ses blocages et de s'épanouir pleinement dans sa vie personnelle et professionnelle.<br /><br />
          L'hypnose est un outil puissant pour :
        </p>
        <ul style={{ margin: '18px 0 28px 0', lineHeight: '1.7' }}>
          <li>Renforcer la confiance en soi et l'estime de soi</li>
          <li>Dépasser les croyances limitantes</li>
          <li>Développer la motivation et la créativité</li>
          <li>Se libérer des schémas répétitifs ou auto-sabotages</li>
          <li>Préparer un projet, un changement de vie, une prise de parole</li>
          <li>Retrouver du sens et de l'énergie au quotidien</li>
        </ul>
        <p>
          Chaque accompagnement est personnalisé, respectueux de votre histoire et de vos objectifs. L'hypnose vous aide à révéler vos ressources et à avancer vers une version plus épanouie de vous-même.<br /><br />
          <strong>Osez le changement, osez vous révéler !</strong>
        </p>
        <br />
      </div>
    </div>
  );
} 