import React from 'react';

export default function QuHypnosePourquoi() {
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
          L'hypnose&nbsp;: pourquoi consulter&nbsp;?
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
          L'hypnose est une approche thérapeutique moderne, naturelle et respectueuse de la personne. Elle permet d'accéder à ses ressources intérieures pour dépasser des blocages, changer des comportements ou retrouver un mieux-être durable.<br /><br />
          <strong>Pourquoi consulter en hypnose&nbsp;?</strong>
        </p>
        <ul style={{ margin: '18px 0 28px 0', lineHeight: '1.7' }}>
          <li>Pour se libérer d'une addiction (tabac, alcool, sucre, jeux, écrans...)</li>
          <li>Pour mieux gérer ses émotions (stress, anxiété, colère, tristesse...)</li>
          <li>Pour dépasser un traumatisme ou une période difficile</li>
          <li>Pour retrouver confiance en soi, estime de soi</li>
          <li>Pour préparer un événement important (examen, compétition, accouchement...)</li>
          <li>Pour améliorer la qualité du sommeil</li>
          <li>Pour soulager certaines douleurs chroniques</li>
          <li>Pour accompagner un changement de vie ou de projet</li>
        </ul>
        <p>
          L'hypnose s'adresse à toute personne désireuse d'évoluer, de se sentir mieux ou de sortir d'une impasse. Elle ne remplace pas un avis médical mais peut être un formidable complément dans de nombreux domaines.<br /><br />
          <strong>Les bénéfices de l'hypnose&nbsp;:</strong>
        </p>
        <ul style={{ margin: '18px 0 28px 0', lineHeight: '1.7' }}>
          <li>Un accompagnement personnalisé, respectueux de votre rythme</li>
          <li>Des résultats souvent rapides et durables</li>
          <li>Une meilleure connaissance de soi et de ses ressources</li>
          <li>Un espace sécurisé pour avancer sereinement</li>
        </ul>
        <p style={{ color: 'crimson', fontWeight: 'bold', marginTop: '32px', textAlign: 'center' }}>
          Important : L'accompagnement ne peut en aucun cas se substituer à un avis médical ou à un traitement médical.
        </p>
      </div>
    </div>
  );
} 