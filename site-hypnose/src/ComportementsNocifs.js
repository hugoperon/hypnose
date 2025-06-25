import React from 'react';

export default function ComportementsNocifs() {
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
          src={process.env.PUBLIC_URL + "/addiction.jpg"}
          alt="Addictions et comportements nocifs"
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
        Se libérer des addictions et comportements nocifs grâce à l'hypnose
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
        <p style={{ marginTop: '32px' }}>
          Certains comportements ou habitudes peuvent devenir <strong style={{ color: '#1976d2' }}>envahissants</strong>, difficiles à contrôler, voire nuire à votre <strong style={{ color: '#1976d2' }}>bien-être</strong> et à votre <strong style={{ color: '#1976d2' }}>santé</strong>. L'hypnose est une approche puissante pour vous aider à reprendre le contrôle, à vous <strong style={{ color: '#1976d2' }}>libérer</strong> de ces automatismes et à retrouver une vie plus <strong style={{ color: '#1976d2' }}>sereine</strong>.
        </p>
        {/* Addictions toxiques */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 36, marginBottom: 12 }}>
          <span style={{
            display: 'inline-block',
            width: 10,
            height: 10,
            background: '#1976d2',
            borderRadius: '50%',
            marginRight: 4
          }} />
          <span style={{
            color: '#1976d2',
            fontWeight: 800,
            fontSize: '1.35em',
            fontFamily: 'Montserrat, Inter, Arial, sans-serif'
          }}>
            Addictions toxiques
          </span>
        </div>
        <ul style={{ marginTop: '0', marginBottom: '12px', lineHeight: '1.7' }}>
          <li><strong style={{ color: '#1976d2' }}>Arrêt du tabac</strong></li>
          <li>Arrêter de fumer du cannabis, de l'herbe.</li>
          <li>Arrêter la consommation abusive <strong style={{ color: '#1976d2' }}>d'alcool</strong>.</li>
          <li>Arrêter les <strong style={{ color: '#1976d2' }}>substances diverses</strong>.</li>
        </ul>
        {/* Addictions non toxiques et comportements compulsifs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 32, marginBottom: 12 }}>
          <span style={{
            display: 'inline-block',
            width: 10,
            height: 10,
            background: '#1976d2',
            borderRadius: '50%',
            marginRight: 4
          }} />
          <span style={{
            color: '#1976d2',
            fontWeight: 800,
            fontSize: '1.25em',
            fontFamily: 'Montserrat, Inter, Arial, sans-serif'
          }}>
            Addictions non toxiques et comportements compulsifs
          </span>
        </div>
        <p>
          L'hypnose permet également de travailler sur des <strong style={{ color: '#1976d2' }}>addictions non toxiques</strong> (aliments, comportements) et des <strong style={{ color: '#1976d2' }}>compulsions</strong>, par exemple&nbsp;:
        </p>
        <ul style={{ marginTop: '0', marginBottom: '24px', lineHeight: '1.7' }}>
          <li>Réduire les problèmes <strong style={{ color: '#1976d2' }}>d'addiction </strong>au sucre</li>
          <li><strong style={{ color: '#1976d2' }}>Achats compulsifs</strong></li>
          <li>Les <strong style={{ color: '#1976d2' }}>excès </strong>de sport ou de travail</li>
          <li>La relation amoureuse <strong style={{ color: '#1976d2' }}>aliénante</strong></li>
          <li><strong style={{ color: '#1976d2' }}>Accoutumance</strong> aux jeux de hasard et aux jeux vidéo</li>
          <li>Modifier vos <strong style={{ color: '#1976d2' }}>comportements alimentaires</strong> (boulimie, hyperphagie...)</li>
          <li><strong style={{ color: '#1976d2' }}>Sexualité compulsive</strong></li>
        </ul>
        {/* Autres comportements nocifs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 32, marginBottom: 12 }}>
          <span style={{
            display: 'inline-block',
            width: 10,
            height: 10,
            background: '#1976d2',
            borderRadius: '50%',
            marginRight: 4
          }} />
          <span style={{
            color: '#1976d2',
            fontWeight: 800,
            fontSize: '1.15em',
            fontFamily: 'Montserrat, Inter, Arial, sans-serif'
          }}>
            Autres comportements nocifs
          </span>
        </div>
        <ul style={{ marginTop: '0', marginBottom: '24px', lineHeight: '1.7' }}>        
          <li>Vous libérer de <strong style={{ color: '#1976d2' }}>comportements compulsifs</strong> (écrans, jeux, pornographie...)</li>
          <li>En finir avec les <strong style={{ color: '#1976d2' }}>insomnies</strong></li>
          <li>Arrêter de se <strong style={{ color: '#1976d2' }}>ronger les ongles</strong></li>
          <li>Apprendre à canaliser les <strong style={{ color: '#1976d2' }}>T.O.C.</strong></li>
        </ul>
        <br />
      </div>
    </div>
  );
} 