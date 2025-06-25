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
      {/* Citation Erickson */}
      <div
        style={{
          background: '#4a6a86',
          color: 'white',
          fontStyle: 'italic',
          fontSize: '1.8em',
          textAlign: 'center',
          padding: '32px 18px 18px 18px',
          borderRadius: '18px',
          maxWidth: 900,
          margin: '48px auto 32px auto',
          fontFamily: 'Georgia, serif'
        }}
      >
        “L'inconscient est le plus grand réservoir de sagesse en comparaison avec l'esprit conscient.”<br />
        <span style={{ fontStyle: 'normal', fontWeight: 600, fontSize: '0.7em', display: 'block', marginTop: 10 }}>
          Milton Erickson
        </span>
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
          <strong style={{color:'#1976d2'}}>L'hypnose</strong> est une approche <strong style={{color:'#1976d2'}}>thérapeutique</strong> moderne, naturelle et respectueuse de la personne. Elle permet d'accéder à ses <strong style={{color:'#1976d2'}}>ressources intérieures</strong> pour dépasser des <strong style={{color:'#1976d2'}}>blocages</strong>, changer des <strong style={{color:'#1976d2'}}>comportements</strong> ou retrouver un <strong style={{color:'#1976d2'}}>mieux-être</strong> durable.<br /><br />
          <strong style={{color:'#1976d2'}}>Pourquoi consulter en hypnose&nbsp;?</strong>
        </p>
        <ul style={{ margin: '18px 0 28px 0', lineHeight: '1.7' }}>
          <li>Pour se libérer d'une <strong style={{color:'#1976d2'}}>addiction</strong> (tabac, alcool, sucre, jeux, écrans...)</li>
          <li>Pour mieux gérer ses <strong style={{color:'#1976d2'}}>émotions</strong> (<strong style={{color:'#1976d2'}}>stress</strong>, <strong style={{color:'#1976d2'}}>anxiété</strong>, colère, tristesse...)</li>
          <li>Pour dépasser un <strong style={{color:'#1976d2'}}>traumatisme</strong> ou une période difficile</li>
          <li>Pour retrouver <strong style={{color:'#1976d2'}}>confiance en soi</strong>, <strong style={{color:'#1976d2'}}>estime de soi</strong></li>
          <li>Pour préparer un <strong style={{color:'#1976d2'}}>événement important</strong> (examen, compétition, accouchement...)</li>
          <li>Pour améliorer la qualité du <strong style={{color:'#1976d2'}}>sommeil</strong></li>
          <li>Pour soulager certaines <strong style={{color:'#1976d2'}}>douleurs chroniques</strong></li>
          <li>Pour accompagner un <strong style={{color:'#1976d2'}}>changement de vie</strong> ou de projet</li>
        </ul>
        <p>
          <strong style={{color:'#1976d2'}}>L'hypnose</strong> s'adresse à toute personne désireuse d'évoluer, de se sentir mieux ou de sortir d'une impasse. Elle ne remplace pas un avis médical mais peut être un formidable complément dans de nombreux domaines.<br /><br />
          <strong style={{color:'#1976d2'}}>Les bénéfices de l'hypnose&nbsp;:</strong>
        </p>
        <ul style={{ margin: '18px 0 28px 0', lineHeight: '1.7' }}>
          <li>Un <strong style={{color:'#1976d2'}}>accompagnement personnalisé</strong>, respectueux de votre rythme</li>
          <li>Des <strong style={{color:'#1976d2'}}>résultats souvent rapides</strong> et durables</li>
          <li>Une meilleure <strong style={{color:'#1976d2'}}>connaissance de soi</strong> et de ses ressources</li>
          <li>Un <strong style={{color:'#1976d2'}}>espace sécurisé</strong> pour avancer sereinement</li>
        </ul>
        <br />
      </div>
    </div>
  );
} 