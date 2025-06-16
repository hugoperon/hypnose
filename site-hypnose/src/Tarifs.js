import React from 'react';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import EuroIcon from '@mui/icons-material/Euro';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ComputerIcon from '@mui/icons-material/Computer';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';

export default function Tarifs() {
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
          Les tarifs de consultation du cabinet d'hypnothérapie
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
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px',
          justifyContent: 'center',
          marginBottom: 40
        }}>
          {/* Séance au cabinet */}
          <div style={cardStyle}>
            <EventSeatIcon style={iconStyle} />
            <div style={titleStyle}>Séance au cabinet</div>
            <div style={priceStyle}>70 € par séance</div>
          </div>
          {/* Séance en visio */}
          <div style={cardStyle}>
            <HomeWorkIcon style={iconStyle} />
            <div style={titleStyle}>Séance en visio</div>
            <div style={priceStyle}>70 € par séance</div>
          </div>
          {/* Séance pour les enfants */}
          <div style={cardStyle}>
            <ChildCareIcon style={iconStyle} />
            <div style={titleStyle}>Séance pour les enfants<br /><span style={{ fontSize: '0.95em' }}>6 à 12 ans (1h)</span></div>
            <div style={priceStyle}>50 € par séance</div>
          </div>
          {/* Tarif adapté */}
          <div style={cardStyle}>
            <EuroIcon style={iconStyle} />
            <div style={titleStyle}>Tarif adapté</div>
            <div style={{ fontSize: '1em', color: '#444', marginBottom: 4 }}>Chômeur ou étudiant</div>
            <div style={priceStyle}>50 € la 1ère séance</div>
          </div>
          {/* Programme arrêt tabac */}
          <div style={cardStyle}>
            <SmokeFreeIcon style={iconStyle} />
            <div style={titleStyle}>Programme arrêt tabac</div>
            <div style={priceStyle}>250 € pour 3 séances</div>
          </div>
        </div>

        {/* Infos pratiques */}
        <h2 style={{ marginTop: 32, marginBottom: 18, textAlign: 'center' }}>Infos pratiques</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px',
          justifyContent: 'center',
          marginBottom: 32
        }}>
          <div style={infoCardStyle}>
            <AccessTimeIcon style={iconStyleSmall} />
            <div style={infoTitleStyle}>Durée de séance</div>
            <div>Environ 1h30 / 1h pour les enfants</div>
          </div>
          <div style={infoCardStyle}>
            <CreditCardIcon style={iconStyleSmall} />
            <div style={infoTitleStyle}>Moyens de paiement</div>
            <div>Chèque, espèces, virement</div>
          </div>
          <div style={infoCardStyle}>
            <ComputerIcon style={iconStyleSmall} />
            <div style={infoTitleStyle}>Séance d'hypnose à distance</div>
            <div>Zoom, Skype, Teams, WhatsApp...</div>
          </div>
        </div>

        {/* Politique d'annulation */}
        <div style={{
          background: '#f8fafd',
          borderRadius: 12,
          padding: '18px 20px',
          marginTop: 24,
          fontSize: '1.08em',
          color: '#444',
          display: 'flex',
          alignItems: 'flex-start',
          gap: 12
        }}>
          <InfoOutlinedIcon style={{ color: '#1976d2', fontSize: 32, marginTop: 2 }} />
          <div>
            <strong>Pour garantir le bon fonctionnement du cabinet :</strong><br />
            Tout rendez-vous non honoré ou non annulé 48h à l'avance est dû sauf cas de force majeure.<br />
            Veuillez prendre directement contact avec moi pour annuler ou reporter votre rendez-vous.
          </div>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: '#f8fafd',
  borderRadius: 16,
  boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
  padding: '28px 22px',
  minWidth: 220,
  maxWidth: 240,
  textAlign: 'center',
  flex: '1 1 220px'
};
const iconStyle = { fontSize: 48, color: '#1976d2', marginBottom: 10 };
const titleStyle = { fontWeight: 'bold', fontSize: '1.15em', marginBottom: 6 };
const priceStyle = { color: '#1976d2', fontWeight: 'bold', fontSize: '1.2em' };

const infoCardStyle = {
  background: '#f5f5f5',
  borderRadius: 12,
  padding: '18px 16px',
  minWidth: 200,
  maxWidth: 240,
  textAlign: 'center',
  flex: '1 1 200px'
};
const iconStyleSmall = { fontSize: 32, color: '#1976d2', marginBottom: 6 };
const infoTitleStyle = { fontWeight: 'bold', fontSize: '1.05em', marginBottom: 4 };
