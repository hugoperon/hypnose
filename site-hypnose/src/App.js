import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import GestionEmotions from './GestionEmotions';
import ComportementsNocifs from './ComportementsNocifs';
import QuEstCeQueHypnose from './QuEstCeQueHypnose';
import Douleurs from './Douleurs';
import FAQ from './FAQ';
import PolitiqueConfidentialite from './PolitiqueConfidentialite';
import Footer from './Footer';
import CommentSeDeroule from './CommentSeDeroule';
import Contact from './Contact';
import Tarifs from './Tarifs';
import QuHypnosePourquoi from './QuHypnosePourquoi';
import StressAnxiete from './StressAnxiete';
import DeveloppementPersonnel from './DeveloppementPersonnel';
import Sommeil from './Sommeil';
import Infos from './Infos';
import './App.css';
import { Helmet } from 'react-helmet';

// Composant pour remonter en haut de la page à chaque changement de route
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Home() {
  return (
    <div>
      <Helmet>
        <title>Hypnose à Villemoisson - Cécile Vacher</title>
        <meta name="description" content="Séances d'hypnose, gestion du stress, addictions, développement personnel à Villemoisson-sur-Orge. Praticienne certifiée." />
        <meta property="og:title" content="Hypnose à Villemoisson - Cécile Vacher" />
        <meta property="og:description" content="Séances d'hypnose, gestion du stress, addictions, développement personnel à Villemoisson-sur-Orge. Praticienne certifiée." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cecile91-hypnose.fr/" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Cécile Vacher - Hypnose",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "144 av. Victor Basch",
              "addressLocality": "Villemoisson-sur-Orge",
              "postalCode": "91360",
              "addressCountry": "FR"
            },
            "telephone": "0607869462",
            "url": "https://www.cecile91-hypnose.fr/"
          }
        `}</script>
      </Helmet>
      <div className="banniere-top" style={{ position: 'relative', width: '100%' }}>
        <img
          className="banniere-img"
          src={process.env.PUBLIC_URL + "/banniere.jpg"}
          alt="Bannière hypnose"
          style={{
            width: '100%',
            height: '450px',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          // textShadow: '0 4px 24px #000, 0 2px 4px #000, 0 0px 2px #000',
          pointerEvents: 'none',
        }}>
          <div style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            marginBottom: '18px',
            textAlign: 'center',
            letterSpacing: '1px'
          }}>
            Retrouvez votre équilibre intérieur
          </div>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 400,
            textAlign: 'center',
            letterSpacing: '2px'
          }}>
            hypnose&nbsp;&nbsp;-&nbsp;&nbsp;pnl&nbsp;&nbsp;-&nbsp;&nbsp;thérapies brèves
          </div>
        </div>
      </div>

      {/* Section Qui suis-je */}
      <div
        className="qui-suis-je-row"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '40px auto',
          maxWidth: '1400px',
          padding: '0 20px',
          gap: '48px'
        }}
      >
        {/* Photo de profil */}
        <div style={{ position: 'relative', width: 'max-content' }}>
          <div className="carre-bleu-profil" style={{
            width: '240px',
            height: '270px',
            background: '#1976d2',
            borderRadius: '18px',
            position: 'absolute',
            top: '-70px',
            left: '-90px',
            zIndex: 0,
            boxShadow: '0 4px 24px rgba(25, 118, 210, 0.10)'
          }}></div>
          <img
            src={process.env.PUBLIC_URL + "/photo-profil.jpg"}
            alt="Photo de profil"
            style={{
              width: '100%',
              maxWidth: '300px',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '10px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
              marginRight: '50px',
              flexShrink: 0,
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              position: 'relative',
              zIndex: 1
            }}
          />
        </div>
        {/* Texte Qui suis-je */}
        <div style={{ width: '100%' }}>
          <h2>Qui suis-je&nbsp;?</h2>
          <p style={{ textAlign: 'justify', lineHeight: '1.7' }}>
            Bonjour, je m'appelle Cécile Vacher, je suis praticienne en hypnose, maître praticienne en PNL, et j'ai été formée aux thérapies brèves et systémiques. Mon approche se fonde sur un respect profond de chaque personne, en prenant en compte son histoire, ses ressources et ses besoins spécifiques.<br /><br />
            Dans le domaine de l'accompagnement thérapeutique, trop de personnes pensent encore que c'est en comprenant leurs problèmes qu'ils vont les résoudre. Pourtant, et vous l'avez peut-être déjà expérimenté, comprendre est loin d'être suffisant dans ce type de situation.<br /><br />
            L'hypnose peut vous accompagner de manière simple et rapide, peut intervenir dans différents domaines, comme la gestion des émotions, des douleurs, des dépendances, des traumatismes et dans la préparation mentale.<br /><br />
            Mon approche, c'est l'alliance des thérapies. Les thérapies dites brèves sont des thérapies qui peuvent vous permettre de vous sentir mieux rapidement car elles sont davantage orientées sur le comment et les solutions plutôt que sur le pourquoi et les causes.<br /><br />
            Si vous êtes à la recherche d'un espace sécurisé pour avancer, retrouver équilibre et sérénité, je serais heureuse de vous accueillir et de vous guider sur votre chemin.<br /><br />
            Parce qu'une consultation, c'est aussi une rencontre. <a href="https://www.resalib.fr/praticien/110458-cecile-vacher-hypnotherapeute-villemoisson-sur-orge#newrdvmodal" target="_blank" rel="noopener noreferrer" style={{color: '#1976d2', fontWeight: 'bold', textDecoration: 'none', borderBottom: '2px solid #1976d2'}}>Contactez-moi</a>.
          </p>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>

      {/* Section Domaines d'intervention */}
      <div className="main-banner">
        <h2 style={{
          fontSize: '3rem',
          fontWeight: 700,
          color: '#fff',
          textAlign: 'center',
          margin: 0,
          padding: '38px 0 38px 0',
          letterSpacing: '1px',
        }}>
          Mes domaines d'intervention
        </h2>
      </div>
      <div className="main-content">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px',
            marginTop: '40px',
          }}
        >
          <div className="bulle-row">
            {/* Ligne 1 */}
            <Link to="/stress-anxiete" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="bulle bulle-hover">
                <img src={process.env.PUBLIC_URL + "/stress.jpg"} alt="Stress & anxiété" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '50%' }} />
              </div>
              <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.08em', color: '#222', marginTop: 12 }}>Stress & anxiété</div>
            </Link>
            <Link to="/comportements" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="bulle bulle-hover">
                <img src={process.env.PUBLIC_URL + "/addictions.jpg"} alt="Addictions" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '50%' }} />
              </div>
              <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.08em', color: '#222', marginTop: 12 }}>Addictions</div>
            </Link>
            <Link to="/emotions" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="bulle bulle-hover">
                <img src={process.env.PUBLIC_URL + "/emotions.jpg"} alt="Gestion des émotions" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '50%' }} />
              </div>
              <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.08em', color: '#222', marginTop: 12 }}>Gestion des émotions</div>
            </Link>
          </div>
          <div className="bulle-row">
            {/* Ligne 2 */}
            <Link to="/douleurs" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="bulle bulle-hover">
                <img src={process.env.PUBLIC_URL + "/douleurs.jpg"} alt="Douleurs" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '50%' }} />
              </div>
              <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.08em', color: '#222', marginTop: 12 }}>Douleurs</div>
            </Link>
            <Link to="/developpement-personnel" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="bulle bulle-hover">
                <img src={process.env.PUBLIC_URL + "/developpement.jpg"} alt="Développement personnel" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '50%' }} />
              </div>
              <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.08em', color: '#222', marginTop: 12 }}>Développement personnel</div>
            </Link>
            <Link to="/sommeil" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="bulle bulle-hover">
                <img src={process.env.PUBLIC_URL + "/sommeil.jpg"} alt="Sommeil" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '50%' }} />
              </div>
              <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.08em', color: '#222', marginTop: 12 }}>Sommeil</div>
            </Link>
          </div>
        </div>
      </div>
      {/* Section Infos pratiques */}
      <div className="infos-banner">
        <h2 style={{
          textAlign: 'center',
          margin: 0,
          fontSize: '3.2rem',
          fontWeight: 800,
          letterSpacing: '1px',
          color: '#fff',
          padding: '38px 0 38px 0',
        }}>
          Infos pratiques
        </h2>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="infos-content">
        <div className="infos-cols">
          {/* Colonne 1 */}
          <div
            style={{
              background: '#fff',
              borderRadius: '18px',
              boxShadow: '0 8px 32px rgba(25, 118, 210, 0.10), 0 2px 8px rgba(0,0,0,0.07)',
              padding: '48px 36px 40px 36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
            }}
          >
            <h3 style={{ fontSize: '2.1rem', color: '#1976d2', fontWeight: 700, marginBottom: 22, marginTop: 0, lineHeight: 1 }}>Pour venir me voir</h3>
            <ul style={{ paddingLeft: 22, margin: 0, fontSize: '1.15rem', lineHeight: 1.7 }}>
              <li>144 av. Victor Basch <br />91360 Villemoisson s/Orge</li>
              <li>RER C St-Geneviève des Bois</li>
              <li>Sortie A6, Savigny-sur-Orge</li>
              <li>Possibilité de séances en visio</li>
            </ul>
          </div>
          {/* Colonne 2 */}
          <div
            style={{
              background: '#fff',
              borderRadius: '18px',
              boxShadow: '0 8px 32px rgba(25, 118, 210, 0.10), 0 2px 8px rgba(0,0,0,0.07)',
              padding: '48px 36px 40px 36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
            }}
          >
            <h3 style={{ fontSize: '2.1rem', color: '#1976d2', fontWeight: 700, marginBottom: 22, marginTop: 0, lineHeight: 1 }}>Formations</h3>
            <ul style={{ paddingLeft: 22, margin: 0, fontSize: '1.15rem', lineHeight: 1.7 }}>
              <li>A.R.C.H.E : 1200 heures de formation en hypnose ericksonienne</li>
              <li>ARCHE : hypnose & addictologie</li>
              <li>Jordan Verot : hypnose rapide</li>
              <li>Psynapse : maître praticienne en PNL</li>
              <li>Psynapse : thérapies brèves & systémiques</li>
            </ul>
          </div>
          {/* Colonne 3 */}
          <div
            style={{
              background: '#fff',
              borderRadius: '18px',
              boxShadow: '0 8px 32px rgba(25, 118, 210, 0.10), 0 2px 8px rgba(0,0,0,0.07)',
              padding: '48px 36px 40px 36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
            }}
          >
            <h3 style={{ fontSize: '2.1rem', color: '#1976d2', fontWeight: 700, marginBottom: 22, marginTop: 0, lineHeight: 1 }}>Disponibilités</h3>
            <ul style={{ paddingLeft: 22, margin: 0, fontSize: '1.15rem', lineHeight: 1.7 }}>
              <li>Du lundi au vendredi 14h-20h (sauf mardi)</li>
              <li>Samedi de 9h à 18h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const bulleStyle = {
  width: '250px',
  height: '250px',
  borderRadius: '50%',
  background: '#f5f5f5',
  boxShadow: '0 24px 64px 0 rgba(25, 118, 210, 0.28), 0 4px 16px 0 rgba(0,0,0,0.13)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '8px',
  transition: 'transform 0.22s, box-shadow 0.22s',
  cursor: 'pointer',
};

function App() {
  return (
    <Router basename="/hypnose">
      <ScrollToTop />
      <Navbar />
      <div style={{ paddingTop: '64px' }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infos" element={<Infos />} />
        <Route path="/emotions" element={<GestionEmotions />} />
        <Route path="/comportements" element={<ComportementsNocifs />} />
        <Route path="/quest-ce-que-l-hypnose" element={<QuEstCeQueHypnose />} />
        <Route path="/hypnose-pourquoi" element={<QuHypnosePourquoi />} />
        <Route path="/douleurs" element={<Douleurs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="/comment-se-deroule-une-seance" element={<CommentSeDeroule />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/stress-anxiete" element={<StressAnxiete />} />
        <Route path="/developpement-personnel" element={<DeveloppementPersonnel />} />
        <Route path="/sommeil" element={<Sommeil />} />
        {/* Tu pourras ajouter d'autres routes ici */}
      </Routes>
      {window.location.pathname !== '/' && (
        <div className="important-message" style={{
          textAlign: 'center',
          color: 'crimson',
          fontWeight: 'bold',
          margin: '32px 0 0 0',
          fontSize: '1.08em',
        }}>
          Important : L'accompagnement ne peut en aucun cas se substituer à un avis médical ou à un traitement médical.
        </div>
      )}
      <Footer />
    </Router>
  );
}

export default App;
