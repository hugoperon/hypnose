import React from 'react';

export default function StressAnxiete() {
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
          Stress & anxiété
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
          Le stress et l'anxiété font partie de la vie moderne, mais lorsqu'ils deviennent envahissants, ils peuvent impacter la santé, le sommeil, la confiance en soi et le bien-être général.<br /><br />
          L'hypnose permet d'apprendre à se détendre, à prendre du recul, à modifier ses réactions face aux situations stressantes et à retrouver un apaisement durable. Grâce à des techniques de relaxation profonde et de reprogrammation positive, il est possible de :
        </p>
        <ul style={{ margin: '18px 0 28px 0', lineHeight: '1.7' }}>
          <li>Réduire les tensions et l'agitation intérieure</li>
          <li>Apprendre à mieux gérer ses émotions</li>
          <li>Retrouver un sommeil de qualité</li>
          <li>Renforcer la confiance en soi et l'estime de soi</li>
          <li>Développer des ressources pour faire face aux imprévus</li>
        </ul>
        <p>
          L'accompagnement est personnalisé, respectueux de votre rythme et de vos besoins. L'objectif est de vous aider à retrouver sérénité, énergie et équilibre au quotidien.<br /><br />
          <strong>Vous n'êtes pas seul(e) : il est possible de changer, et l'hypnose peut vous y aider.</strong>
        </p>
        <p style={{ color: 'crimson', fontWeight: 'bold', marginTop: '32px', textAlign: 'center' }}>
          Important : L'accompagnement ne peut en aucun cas se substituer à un avis médical ou à un traitement médical.
        </p>
      </div>
    </div>
  );
} 