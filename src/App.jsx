import './App.css'

function App() {
  const company = {
    name: 'Breghton Land Inc.',
    logo: 'Breighton Flat Logo FC-8.png'
  }

  const estates = [
    { 
      id: 'bellefort', 
      name: 'Bellefort Estates', 
      logo: 'Bellefort_Logo (1).png',
      link: '#' 
    },
    { 
      id: 'victoria', 
      name: 'Victoria', 
      logo: 'Victoria wide no SA.png',
      link: '#'
    },
    { 
      id: 'montefaro', 
      name: 'Montefaro', 
      logo: 'Montefaro.jpg',
      link: '#'
    }
  ]

  const handleClick = (link, name) => {
    console.log(`Redirect to ${name} materials: ${link}`);
    // Later: window.location.href = link;
  }

  return (
    <div className="app">
      <header className="company-header">
        <img 
          src={`/img/${company.logo}`} 
          alt={company.name}
          className="company-logo"
        />
      </header>
      <main className="landing">
        <section className="hero-section">
          <h1 className="title">Estate Materials</h1>
          <p className="subtitle">Choose your project</p>
        </section>
        <section className="estates-grid">
          {estates.map((estate) => (
            <button
              key={estate.id}
              className="estate-button"
              onClick={() => handleClick(estate.link, estate.name)}
              aria-label={`Go to ${estate.name}`}
              title={estate.name}
            >
              <img 
                src={`/logo/${estate.logo}`} 
                alt={estate.name}
                className="estate-logo"
              />
            </button>
          ))}
        </section>
      </main>
    </div>
  )
}

export default App

