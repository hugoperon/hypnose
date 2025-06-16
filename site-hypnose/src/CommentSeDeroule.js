import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function CommentSeDeroule() {
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
          Comment se déroule une séance&nbsp;?
        </h1>
      </div>
      {/* Contenu */}
      <div style={{
        maxWidth: 1000,
        margin: '48px auto 0 auto',
        padding: '0 24px',
        fontSize: '1.13em',
        lineHeight: 1.7,
        background: 'transparent',
      }}>
        <h2 style={{ textAlign: 'center', fontWeight: 400, fontSize: '1.3em', marginBottom: 32 }}>
          Les grandes étapes de votre accompagnement
        </h2>
        <p style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 40px auto', fontSize: '1.1em', lineHeight: 1.7 }}>
          L'accompagnement proposé varie selon la personne et ses objectifs.<br />
          La première séance dure environ 1h30 et selon la nature et les difficultés rencontrées, le nombre de séances utiles varie.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '32px',
          flexWrap: 'wrap',
          marginBottom: 40
        }}>
          {/* Étape 1 */}
          <div style={{
            background: '#f8fafd',
            borderRadius: 16,
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
            padding: '32px 24px',
            minWidth: 260,
            maxWidth: 320,
            flex: '1 1 260px',
            textAlign: 'center'
          }}>
            <CalendarMonthIcon style={{ fontSize: 48, color: '#1976d2', marginBottom: 12 }} />
            <h3 style={{ color: '#1976d2', margin: '12px 0 8px 0' }}>01 Rendez-vous</h3>
            <div style={{ color: '#444', fontSize: '1.08em', lineHeight: 1.6 }}>
              Vous prenez rendez-vous en me contactant directement soit par téléphone/sms soit par mail.
            </div>
          </div>
          {/* Étape 2 */}
          <div style={{
            background: '#f8fafd',
            borderRadius: 16,
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
            padding: '32px 24px',
            minWidth: 260,
            maxWidth: 320,
            flex: '1 1 260px',
            textAlign: 'center'
          }}>
            <PhoneInTalkIcon style={{ fontSize: 48, color: '#1976d2', marginBottom: 12 }} />
            <h3 style={{ color: '#1976d2', margin: '12px 0 8px 0' }}>02 Appel</h3>
            <div style={{ color: '#444', fontSize: '1.08em', lineHeight: 1.6 }}>
              Je vous appelle quelques jours avant votre première séance afin d'échanger quelques minutes ensemble sur ce qui vous amène à l'hypnose.
            </div>
          </div>
          {/* Étape 3 */}
          <div style={{
            background: '#f8fafd',
            borderRadius: 16,
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
            padding: '32px 24px',
            minWidth: 260,
            maxWidth: 320,
            flex: '1 1 260px',
            textAlign: 'center'
          }}>
            <AccessTimeIcon style={{ fontSize: 48, color: '#1976d2', marginBottom: 12 }} />
            <h3 style={{ color: '#1976d2', margin: '12px 0 8px 0' }}>03 Séance</h3>
            <div style={{ color: '#444', fontSize: '1.08em', lineHeight: 1.6 }}>
              Votre première séance dure environ 1h30, nous prenons le temps de poser les choses afin que vous puissiez définir le plus clairement possible votre objectif et comment l'hypnose va vous permettre de l'atteindre.<br />
              <br />
              Souvent, la première séance permet de changer considérablement, une page se tourne et c'est déjà le début d'une nouvelle histoire.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
