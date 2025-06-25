import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    // Met à jour la valeur du champ caché avant l'envoi
    const consentInput = form.current.querySelector('input[name="consentement"]');
    if (consentInput) {
      consentInput.value = consentChecked ? 'Oui' : 'Non';
    }
    emailjs.sendForm(
      'service_q64t3i7',      // à remplacer
      'template_q7squ7r',     // à remplacer
      form.current,
      'QkuPuLl52g6SG9z-U'        // à remplacer
    )
    .then(() => {
      setSent(true);
    }, () => {
      setError(true);
    });
  };

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
          fontSize: '2.7rem',
          fontWeight: 800,
          color: '#fff',
          textAlign: 'center',
          margin: 0,
          padding: '44px 0 38px 0',
          letterSpacing: '1px',
          fontFamily: 'Montserrat, Inter, Arial, sans-serif',
        }}>
          Contact & Prise de rendez-vous
        </h1>
      </div>
      {/* Carte + infos */}
      <div style={{
        maxWidth: 950,
        margin: '48px auto 0 auto',
        padding: '0 24px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}>
        {/* Carte Google Maps */}
        <div style={{ flex: '1 1 340px', minWidth: 320, maxWidth: 420 }}>
          <iframe
            title="Carte cabinet hypnose"
            src="https://www.google.com/maps?q=144+av.+Victor+Basch,+91360+Villemoisson+s%2FOrge&output=embed"
            width="100%"
            height="260"
            style={{ border: 0, borderRadius: 12, boxShadow: '0 2px 8px rgba(25,118,210,0.08)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div style={{ marginTop: 18, fontWeight: 600, fontSize: '1.15em', color: '#1976d2' }}>
            144 av. Victor Basch<br />91360 Villemoisson s/Orge
          </div>
        </div>
        {/* Infos et coordonnées */}
        <div style={{ flex: '2 1 340px', minWidth: 320, maxWidth: 480 }}>
          <div style={{ fontSize: '1.25em', marginBottom: 24, lineHeight: 1.7 }}>
            Pour prendre rendez-vous ou pour toute question, n'hésitez pas à me contacter&nbsp;:
          </div>
          <div style={{ fontSize: '1.35em', fontWeight: 700, color: '#1976d2', marginBottom: 12 }}>
            Tél&nbsp;: <a href="tel:0607869462" style={{ color: '#1976d2', textDecoration: 'none' }}>06 07 86 94 62</a>
          </div>
          <div style={{ fontSize: '1.18em', fontWeight: 600, marginBottom: 12 }}>
            Email&nbsp;: <a href="mailto:cecilevacher.hypnose@gmail.com" style={{ color: '#1976d2', textDecoration: 'none' }}>cecilevacher.hypnose@gmail.com</a>
          </div>
          <div style={{ fontSize: '1.08em', color: '#444', marginBottom: 18 }}>
            Vous pouvez aussi envoyer un SMS ou utiliser le formulaire ci-dessous.
          </div>
        </div>
      </div>
      {/* Formulaire de contact */}
      <div style={{ maxWidth: 600, margin: '56px auto 0 auto', padding: '0 24px' }}>
        <h2 style={{ color: '#1976d2', fontWeight: 700, fontSize: '1.35em', marginBottom: 18, textAlign: 'center' }}>Formulaire de contact</h2>
        {sent ? (
          <div style={{ color: 'green', fontWeight: 'bold', margin: '32px 0', textAlign: 'center' }}>
            Merci, votre message a bien été envoyé !
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
              background: '#f8fafd',
              borderRadius: 12,
              padding: '28px 20px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
            }}
          >
            <label>
              Nom :
              <input type="text" name="user_name" required style={inputStyle} />
            </label>
            <label>
              Email :
              <input type="email" name="user_email" required style={inputStyle} />
            </label>
            <label>
              Téléphone :
              <input type="tel" name="user_phone" style={inputStyle} />
            </label>
            <label>
              Message :
              <textarea name="message" required rows={5} style={{ ...inputStyle, resize: 'vertical' }} />
            </label>
            <label style={{ display: 'flex', alignItems: 'center', fontSize: '0.98em' }}>
              <input
                type="checkbox"
                style={{ marginRight: 8 }}
                checked={consentChecked}
                onChange={e => setConsentChecked(e.target.checked)}
              />
              J'accepte d'être recontacté(e)
            </label>
            {/* Champ caché pour envoyer Oui ou Non */}
            <input type="hidden" name="consentement" value={consentChecked ? 'Oui' : 'Non'} />
            <button
              type="submit"
              style={{
                background: '#1976d2',
                color: 'white',
                border: 'none',
                borderRadius: 18,
                padding: '10px 28px',
                fontWeight: 'bold',
                fontSize: '1.1em',
                marginTop: 10,
                cursor: 'pointer'
              }}
            >
              Envoyer
            </button>
            {error && (
              <div style={{ color: 'crimson', fontWeight: 'bold' }}>
                Une erreur est survenue, veuillez réessayer.
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '8px 10px',
  borderRadius: 6,
  border: '1px solid #ccc',
  marginTop: 4,
  fontSize: '1em',
  boxSizing: 'border-box'
};
