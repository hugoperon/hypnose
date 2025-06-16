import React from 'react';

export default function ComportementsNocifs() {
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
          Se libérer des addictions et comportements nocifs grâce à l'hypnose
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
        <p style={{ marginTop: '32px' }}>
          Certains comportements ou habitudes peuvent devenir envahissants, difficiles à contrôler, voire nuire à votre bien-être et à votre santé. L'hypnose est une approche puissante pour vous aider à reprendre le contrôle, à vous libérer de ces automatismes et à retrouver une vie plus sereine.
        </p>
        <h2 style={{ color: '#1976d2', fontSize: '1.35em', marginTop: '36px', marginBottom: '12px' }}>Addictions toxiques</h2>
        <ul style={{ marginTop: '0', marginBottom: '12px', lineHeight: '1.7' }}>
          <li><strong>Arrêt du tabac</strong></li>
          <li>Arrêter de fumer du cannabis, de l'herbe.</li>
          <li>Arrêter la consommation abusive <strong>d'alcool</strong>.</li>
          <li>Arrêter les substances diverses.</li>
        </ul>
        <h2 style={{ color: '#1976d2', fontSize: '1.25em', marginTop: '32px', marginBottom: '12px' }}>Addictions non toxiques et comportements compulsifs</h2>
        <p>
          L'hypnose permet également de travailler sur des addictions non toxiques (aliments, comportements) et des compulsions, par exemple&nbsp;:
        </p>
        <ul style={{ marginTop: '0', marginBottom: '24px', lineHeight: '1.7' }}>
          <li>Réduire les problèmes d'addiction au sucre</li>
          <li>Les achats compulsifs</li>
          <li>Les excès de sport ou de travail</li>
          <li>La relation amoureuse aliénante</li>
          <li>Maîtriser l'accoutumance aux jeux de hasard et aux jeux vidéo</li>
          <li>Modifier vos <strong>comportements alimentaires</strong> (boulimie, hyperphagie...)</li>
          <li>La sexualité compulsive</li>
        </ul>
        <h2 style={{ color: '#1976d2', fontSize: '1.15em', marginTop: '32px', marginBottom: '12px' }}>Autres comportements nocifs</h2>
        <ul style={{ marginTop: '0', marginBottom: '24px', lineHeight: '1.7' }}>        
          <li>Vous libérer de <strong>comportements compulsifs</strong> (écrans, jeux, pornographie...)</li>
          <li>En finir avec les <strong>insomnies</strong></li>
          <li>Arrêter de se <strong>ronger les ongles</strong></li>
          <li>Apprendre à canaliser les <strong>T.O.C.</strong></li>
        </ul>
        <p style={{
          color: 'crimson',
          fontWeight: 'bold',
          marginTop: '32px',
          textAlign: 'center'
        }}>
          Important : L'accompagnement ne peut en aucun cas se substituer à un avis médical ou à un traitement médical.
        </p>
      </div>
    </div>
  );
} 