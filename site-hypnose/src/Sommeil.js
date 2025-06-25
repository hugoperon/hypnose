import React from 'react';

export default function Sommeil() {
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
          src={process.env.PUBLIC_URL + "/dodo.jpg"}
          alt="Sommeil"
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
        Sommeil
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
        <br />
      </div>
    </div>
  );
} 