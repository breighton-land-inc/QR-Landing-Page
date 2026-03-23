import React, { useState, useEffect } from 'react';
import './App.css';

const ESTATES = [
  { 
    id: 'bellefort', 
    name: 'Bellefort Estates', 
    logo: '/Bellefort_Logo (1).png',
    url: 'https://breighton-land-inc.github.io/Bellefort-Materials/' 
  },
  { 
    id: 'victoria', 
    name: 'Victoria', 
    logo: '/Victoria wide no SA.png',
    url: 'https://www.breighton.com.ph/victoria' 
  },
  { 
    id: 'montefaro', 
    name: 'Montefaro', 
    logo: '/Montefaro.png',
    url: 'https://breighton-land-inc.github.io/Montefaro-Materials/' 
  }
];

function App() {
  const [showIntro, setShowIntro] = useState(true);

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

  return (
    <div className="landing-wrapper">
      {/* 1. INTRODUCTION OVERLAY */}
      {showIntro && (
        <div className="intro-overlay">
          <div className="intro-content">
            <div className="logo-glow">
              <img src="/Breighton Flat Logo FC-8.png" alt="Logo" className="intro-logo" />
            </div>
            <h1 className="intro-text">Welcome</h1>
            <p className="intro-subtext">Brokers & Sellers</p>
          </div>
        </div>
      )}

      {/* 2. MAIN LANDING PAGE (Reveals after Intro) */}
      <div className={`landing-container ${!showIntro ? 'fade-in-up' : 'hidden'}`}>
        <header>
          <img src="/Breighton Flat Logo FC-8.png" alt="Breighton" className="main-logo" />
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
      </div>
    </div>
  );
}

export default App;