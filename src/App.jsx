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
    url: 'https://breighton-land-inc.github.io/Carmona-Estates-Materials/'
  },
];

// Single button configuration for the accreditation portal
const AccreditationConfig = {
  id: 'accreditation',
  name: "Broker's Accreditation"
};

// Global Maintenance Mode flag - set to false to disable
const isMaintenance = false;

function MaintenancePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f9f9f9', color: '#333', textAlign: 'center', padding: '20px' }}>
      <img src="./Breighton Flat Logo FC-8.png" alt="Breighton Logo" style={{ maxWidth: '250px', marginBottom: '30px' }} />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Under Maintenance</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', lineHeight: '1.6', opacity: 0.9 }}>
        The system is under maintenance for more improvement. We'll be back online shortly. Thank you for your patience!
      </p>
    </div>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showUpload, setShowUpload] = useState(false);

  useEffect(() => {
    // Timer for the "Welcome Brokers & Sellers" intro screen
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3500); 
    return () => clearTimeout(timer);
  }, []);

  const handleSelection = (url) => {
    if (url) {
      // Opens the link in a new tab for a better user experience
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  if (isMaintenance) {
    return <MaintenancePage />;
  }

  return (
    <div className="landing-wrapper">
      {/* 1. INTRODUCTION OVERLAY */}
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

      {/* 2. MAIN LANDING PAGE (Reveals after Intro) */}
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
                onClick={() => handleSelection(estate.url)} // Triggers redirect
              >
                <img src={estate.logo} alt={estate.name} className="estate-logo" />
              </div>
            ))}
          </div>

          <h2 className="estate-title" style={{ marginTop: '50px' }}>Broker & Seller Upload</h2>
          
          <div className="button-grid" style={{ flexDirection: 'row', gap: '20px', justifyContent: 'center' }}>
            <button 
              className="person-btn" 
              onClick={() => alert("this page is undermaintenace making improvement for you")}
            >
              {AccreditationConfig.name}
            </button>
          </div>
        </div>
      )}

      {/* 3. UPLOAD PAGE */}
      {showUpload && !showIntro && (
        <UploadPage 
          onBack={() => setShowUpload(false)} 
        />
      )}
    </div>
  );
}

export default App;