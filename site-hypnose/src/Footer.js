import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      background: '#f5f5f5',
      borderTop: '1px solid #e0e0e0',
      marginTop: '60px',
      padding: '32px 0 0 0',
      textAlign: 'center',
      fontSize: '1rem',
      color: '#444',
    }}>
      <div style={{ marginBottom: '12px', fontWeight: 'bold', fontSize: '1.1rem' }}>
        Cécile Vacher – Hypnose & Thérapies brèves
      </div>
      <div style={{ marginBottom: '10px' }}>
        <Link to="/" style={{ margin: '0 12px', color: '#1976d2', textDecoration: 'none' }}>Accueil</Link>
        <Link to="/faq" style={{ margin: '0 12px', color: '#1976d2', textDecoration: 'none' }}>FAQ</Link>
        <Link to="/politique-confidentialite" style={{ margin: '0 12px', color: '#1976d2', textDecoration: 'none' }}>Politique de confidentialité</Link>
        {/* <Link to="/mentions-legales" style={{ margin: '0 12px', color: '#1976d2', textDecoration: 'none' }}>Mentions légales</Link> */}
      </div>
      <div style={{ fontSize: '0.95em', color: '#888' }}>
        &copy; {new Date().getFullYear()} CécileVacher.hypnose . Tous droits réservés.
      </div>
      <hr style={{ margin: '32px 0 20px 0', border: 'none', borderTop: '1px solid #ddd' }} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: '#222', fontSize: '1em', marginBottom: '10px' }}>
        <div>Vous souhaitez un site web professionnel&nbsp;?</div>
        <div>
          Développé par Hugo Peron&nbsp;
          <a
            href="mailto:peron.h92@outlook.fr?subject=Demande%20de%20création%20de%20site%20web&body=Bonjour%20Hugo%2C%0A%0AJe%20suis%20int%C3%A9ress%C3%A9(e)%20par%20la%20cr%C3%A9ation%20d'un%20site%20web%20professionnel.%0A%0AMerci%20de%20me%20recontacter%20pour%20en%20discuter.%0A"
            style={{
              background: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '18px',
              padding: '6px 18px',
              marginLeft: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1em',
              boxShadow: '0 2px 8px rgba(25, 118, 210, 0.08)',
              transition: 'background 0.2s',
              display: 'inline-block',
            }}
          >
            Me contacter
          </a>
        </div>
      </div>
    </footer>
  );
} 