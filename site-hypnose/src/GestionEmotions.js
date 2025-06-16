import React from 'react';

export default function GestionEmotions() {
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
          Gestion des émotions
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
        <h2 style={{
          color: '#1976d2',
          fontWeight: 500,
          fontSize: '1.2em',
          marginTop: 0,
          marginBottom: 24
        }}>
          Mieux maîtriser ses émotions avec l'hypnose
        </h2>
        <p><strong>Grâce à l'hypnose, apprenez à :</strong></p>
        <ul>
          <li>maîtriser le stress,</li>
          <li>sortir du cercle vicieux des angoisses,</li>
          <li>en finir avec une phobie (avion, animaux, peur du vide),</li>
          <li>développer votre confiance et votre estime,</li>
          <li>apprivoiser la peur du regard de l'autre,</li>
          <li>vous libérer de la culpabilité,</li>
          <li>réguler la colère,</li>
          <li>faire le deuil d'un proche, d'une relation,</li>
          <li>passer sereinement une étape de vie (retraite, déménagement, changement de carrière).</li>
        </ul>
        <p>
          <strong>Vous vous noyez parfois dans des émotions que vous ne contrôlez plus ?</strong><br />
          Les émotions peuvent interférer avec notre capacité à fonctionner au quotidien et à maintenir des relations saines avec les autres. Il est important de reconnaître et de traiter ces difficultés émotionnelles avec compassion et soutien, pour favoriser la guérison et le bien-être mental. Vous pouvez apprendre à les apprivoiser sans lutter grâce à un travail en hypnothérapie.
        </p>
        <h3 style={{ color: '#1976d2', fontWeight: 600 }}>Comment l'hypnose aide à mieux maîtriser ses émotions ?</h3>
        <p>
          Les sensations, les pensées et les réactions se combinent et interagissent de manière circulaire. Elles déclenchent et entretiennent nos expériences émotionnelles. En jouant sur un ou plusieurs de ces éléments, l'hypnose permet de modifier ou d'arrêter ces boucles de réaction automatique. L'état de l'hypnose en lui-même est agréable, car il donne une sensation d'harmonie entre le corps et l'esprit. Le bien-être et la détente engendrés permettent de retrouver lucidité et créativité face aux événements. Sous l'hypnose, l'imagination est plus libre, ce qui nous permet de sortir de nos schémas limités et d'envisager de nouvelles possibilités. En hypnose, on peut apporter l'empathie nécessaire à la partie anxieuse. On ne lutte pas contre l'émotion, on l'accueille. On lui offre un espace sécurisé et le temps nécessaire pour être digérée et le surplus évacué. Pour cela, j'utilise différentes techniques de suggestion, d'évocation, de remémoration et de relaxation. Afin d'entraîner, le cerveau a créé de nouvelles connexions neuronales et des boucles émotionnelles mieux adaptées. En effet, différentes actions peuvent agir sur les maillons de l'expérience émotionnelle afin de l'améliorer. Un changement de focalisation et de l'attention vers d'autres perceptions sensorielles. Une évocation immersive de souvenirs apaisants. Une relâchement musculaire ou des sensations agréables dans le corps ou encore une invitation au relâchement musculaire.
        </p>
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
