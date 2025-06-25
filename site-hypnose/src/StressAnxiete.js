import React from 'react';

export default function StressAnxiete() {
  return (
    <div style={{ width: '100%' }}>
      {/* Bloc horizontal titre + image */}
      <div
        style={{
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          minHeight: '340px',
          marginBottom: 32,
          overflow: 'hidden',
          flexWrap: 'wrap',
        }}
      >
        {/* Colonne titre */}
        <div
          style={{
            flex: '0 0 420px',
            minWidth: 260,
            background: '#1976d2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 24px',
            borderTopLeftRadius: '18px',
            borderBottomLeftRadius: '18px',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            minHeight: '340px',
            width: '100%',
          }}
        >
          <h1
            style={{
              color: '#fff',
              fontSize: '4rem',
              fontWeight: 800,
              textAlign: 'center',
              letterSpacing: '1px',
              fontFamily: 'Montserrat, Inter, Arial, sans-serif',
              textShadow: '0 4px 24px #000, 0 2px 4px #000, 0 0px 2px #000',
              margin: 0,
            }}
          >
            Stress <br /> anxiété
          </h1>
        </div>
        {/* Colonne image */}
        <div
          style={{
            flex: 1,
            minWidth: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            borderTopRightRadius: '18px',
            borderBottomRightRadius: '18px',
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            minHeight: '340px',
            background: '#eaf2fb',
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/stressetanxi.jpg"}
            alt="Stress et anxiété"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderTopRightRadius: '18px',
              borderBottomRightRadius: '18px',
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              minHeight: '340px',
              maxHeight: '420px',
            }}
          />
        </div>
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
        <br />
        <p>
          Le stress et l'anxiété font partie de la vie moderne, mais lorsqu'ils deviennent <strong style={{ color: '#1976d2' }}>envahissants</strong>, ils peuvent impacter la <strong style={{ color: '#1976d2' }}>santé</strong>, le <strong style={{ color: '#1976d2' }}>sommeil</strong>, la <strong style={{ color: '#1976d2' }}>confiance en soi</strong> et le <strong style={{ color: '#1976d2' }}>bien-être général</strong>.<br /><br />
          L'hypnose permet d'apprendre à se <strong style={{ color: '#1976d2' }}>détendre</strong>, à <strong style={{ color: '#1976d2' }}>prendre du recul</strong>, à <strong style={{ color: '#1976d2' }}>modifier ses réactions</strong> face aux situations stressantes et à retrouver un <strong style={{ color: '#1976d2' }}>apaisement durable</strong>. Grâce à des techniques de <strong style={{ color: '#1976d2' }}>relaxation profonde</strong> et de <strong style={{ color: '#1976d2' }}>reprogrammation positive</strong>, il est possible de :
        </p>
        <ul style={{ margin: '18px 0 28px 0', lineHeight: '1.7' }}>
          <li><strong style={{ color: '#1976d2' }}>Réduire les tensions</strong> et l'agitation intérieure</li>
          <li><strong style={{ color: '#1976d2' }}>Apprendre à mieux gérer ses émotions</strong></li>
          <li><strong style={{ color: '#1976d2' }}>Retrouver un sommeil de qualité</strong></li>
          <li><strong style={{ color: '#1976d2' }}>Renforcer la confiance en soi</strong> et l'estime de soi</li>
          <li><strong style={{ color: '#1976d2' }}>Développer des ressources</strong> pour faire face aux imprévus</li>
        </ul>
        <p>
          L'accompagnement est <strong style={{ color: '#1976d2' }}>personnalisé</strong>, respectueux de votre <strong style={{ color: '#1976d2' }}>rythme</strong> et de vos <strong style={{ color: '#1976d2' }}>besoins</strong>. L'objectif est de vous aider à retrouver <strong style={{ color: '#1976d2' }}>sérénité</strong>, <strong style={{ color: '#1976d2' }}>énergie</strong> et <strong style={{ color: '#1976d2' }}>équilibre</strong> au quotidien.<br /><br />
          <strong style={{ color: '#1976d2', fontSize: '1.2em' }}>Vous n'êtes pas seul(e) : il est possible de changer, et l'hypnose peut vous y aider.</strong>
        </p>
        <br />
      </div>
    </div>
  );
} 