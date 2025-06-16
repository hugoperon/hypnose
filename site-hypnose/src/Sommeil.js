import React from 'react';

export default function Sommeil() {
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
          Sommeil
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
          Les troubles du sommeil (difficultés d'endormissement, réveils nocturnes, insomnies) peuvent avoir de lourdes conséquences sur la santé, l'humeur et la qualité de vie.<br /><br />
          L'hypnose propose des solutions naturelles pour :
        </p>
        <ul style={{ margin: '18px 0 28px 0', lineHeight: '1.7' }}>
          <li>Favoriser l'endormissement et un sommeil profond</li>
          <li>Réduire les réveils nocturnes et les ruminations</li>
          <li>Apprendre à se détendre et à lâcher prise</li>
          <li>Retrouver un rythme de sommeil naturel</li>
          <li>Gérer le stress et l'anxiété liés au coucher</li>
        </ul>
        <p>
          L'accompagnement est personnalisé, adapté à votre histoire et à vos besoins. L'objectif est de vous aider à retrouver un sommeil réparateur, une énergie renouvelée et un bien-être au quotidien.<br /><br />
          <strong>Un bon sommeil, c'est la base de l'équilibre !</strong>
        </p>
        <p style={{ color: 'crimson', fontWeight: 'bold', marginTop: '32px', textAlign: 'center' }}>
          Important : L'accompagnement ne peut en aucun cas se substituer à un avis médical ou à un traitement médical.
        </p>
      </div>
    </div>
  );
} 