import React from 'react';

export default function DeveloppementPersonnel() {
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
          Développement personnel
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
        <p style={{ color: 'crimson', fontWeight: 'bold', marginTop: '32px', textAlign: 'center' }}>
          Important : L'accompagnement ne peut en aucun cas se substituer à un avis médical ou à un traitement médical.
        </p>
      </div>
    </div>
  );
} 