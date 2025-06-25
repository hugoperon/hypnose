import React from 'react';

export default function Douleurs() {
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
          height: '800px',
          overflow: 'hidden'
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/aie.jpg"}
          alt="Douleur"
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
        La douleur
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
      </div>
      <br />
    </div>
  );
} 