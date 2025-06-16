import React from 'react';

export default function Douleurs() {
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
          La douleur
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
          Pourquoi traiter les souffrances physiques par l'hypnose antalgique ?
        </h2>
        <p>L'état de transe est un outil supplémentaire qui peut se rajouter au traitement antalgique. Des études scientifiques montrent que l'hypnose a un effet plus durable dans le temps par rapport aux autres traitements médicamenteux. L'état de l'hypnose permet à la personne souffrant de douleur de modifier son ressenti. Avec l'hypnose, il est ainsi possible de modifier les sensations perçues dans le corps grâce à l'imaginaire. Les suggestions et les fables permettent de modifier les perceptions sensorielles. En cabinet, expérimenter l'état de conscience modifiée permet à la personne de réaliser qu'elle peut se sentir mieux dans son corps en modifiant son rapport au message du corps ou en propageant son affect pour se réparer. Travailler sur les traumatismes en lien avec la douleur, ou les douleurs, est essentiel pour diminuer la douleur physique.</p>
        <p>Les techniques d'hypnose antalgique aident fortement à mobiliser ces ressources internes et à les développer et à réduire la douleur. Lors d'un premier entretien, nous définirons ensemble les traumatismes à libérer en lien avec vos douleurs. Cela servira à comprendre comment vous appréhendez la douleur et à clarifier vos attentes.</p>
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