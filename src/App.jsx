import React, { useState, useEffect } from 'react';
import './App.css';
import UploadPage from './UploadPage';

const ESTATES = [
  { 
    id: 'bellefort', 
    name: 'Bellefort Estates', 
    logo: './Bellefort_Logo (1).png',
    url: 'https://breighton-land-inc.github.io/Bellefort-Materials/' 
  },
  { 
    id: 'victoria', 
    name: 'Victoria', 
    logo: './Victoria wide no SA.png',
    url: 'https://breighton-land-inc.github.io/Victoria-Materials/' 
  },
  { 
    id: 'montefaro', 
    name: 'Montefaro', 
    logo: './Montefaro.png',
    url: 'https://breighton-land-inc.github.io/Montefaro-Materials/' 
  },
  {
    id: 'carmona estates',
    name: 'Carmona Estates',
    logo: './Carmona Estates.jpg',
    url: '#' 
  },
];

const AccreditationConfig = {
  id: 'accreditation',
  name: "Broker's Accreditation"
};

function MaintenancePage({ onBack }) {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onBack();
    }
  }, [countdown, onBack]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f9f9f9', color: '#333', textAlign: 'center', padding: '20px' }}>
      <img src="./Breighton Flat Logo FC-8.png" alt="Breighton Logo" style={{ maxWidth: '250px', marginBottom: '30px' }} />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Under Maintenance</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', lineHeight: '1.6', opacity: 0.9, marginBottom: '30px' }}>
        This page is under maintenance. making more improvement for your needs.
      </p>
      <p style={{ fontSize: '1.5rem', color: '#666', marginBottom: '20px' }}>
        Auto redirecting in <span style={{ color: '#004a7c', fontWeight: 'bold', fontSize: '2rem' }}>{countdown}</span>s
      </p>
      <button 
        onClick={onBack}
        style={{
          background: 'linear-gradient(135deg, #004a7c 0%, #006eb4 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '14px',
          padding: '14px 28px',
          fontSize: '1.1rem',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 8px 20px rgba(0,74,124,0.3)'
        }}
      >
        Go Back Now
      </button>
    </div>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showUpload, setShowUpload] = useState(false);
  const [showMaintenance, setShowMaintenance] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3500); 
    return () => clearTimeout(timer);
  }, []);

  const handleSelection = (url) => {
    if (url === '#') {
      setShowMaintenance(true);
    } else if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const goBackFromMaintenance = () => {
    setShowMaintenance(false);
  };

  if (showMaintenance) {
    return <MaintenancePage onBack={goBackFromMaintenance} />;
  }

  return (
    <div className="landing-wrapper">
      {showIntro && (
        <div className="intro-overlay">
          <div className="intro-content">
            <div className="logo-glow">
              <img src="./Breighton Flat Logo FC-8.png" alt="Logo" className="intro-logo" />
            </div>
            <h1 className="intro-text">Welcome</h1>
            <p className="intro-subtext">Brokers & Sellers</p>
          </div>
        </div>
      )}

      {!showUpload && (
        <div className={`landing-container ${!showIntro ? 'fade-in-up' : 'hidden'}`}>
          <header>
            <img src="./Breighton Flat Logo FC-8.png" alt="Breighton" className="main-logo" />
          </header>

          <h2 className="estate-title">Estate Material</h2>
          
          <div className="button-grid">
            {ESTATES.map((estate) => (
              <div 
                key={estate.id} 
                className="brand-card" 
                onClick={() => handleSelection(estate.url)}
              >
                <img src={estate.logo} alt={estate.name} className="estate-logo" />
              </div>
            ))}
          </div>

          <h2 className="estate-title" style={{ marginTop: '50px' }}>Broker & Seller Upload</h2>
          
          <div className="button-grid" style={{ flexDirection: 'row', gap: '20px', justifyContent: 'center' }}>
            <button 
              className="person-btn" 
              onClick={() => setShowMaintenance(true)}
            >
              {AccreditationConfig.name}
            </button>
          </div>
        </div>
      )}

      {showUpload && !showIntro && (
        <UploadPage 
          onBack={() => setShowUpload(false)} 
        />
      )}
    </div>
  );
}

export default App;
