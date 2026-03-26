import React, { useState } from 'react';

function UploadPage({ onBack }) {
  const [dragActive, setDragActive] = useState(false);
  const [formData, setFormData] = useState({
    team: 'Alpha',
    name: '',
    role: 'Broker',
    sendTo: 'Anna'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDrag = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handled Drop Files
      alert(`Sent ${e.dataTransfer.files.length} file(s) to ${formData.sendTo} from Team ${formData.team} - ${formData.role} ${formData.name || 'Unknown'}`);
    }
  };

  const handleChange = function(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // Handled Selected Files
      alert(`Sent ${e.target.files.length} file(s) to ${formData.sendTo} from Team ${formData.team} - ${formData.role} ${formData.name || 'Unknown'}`);
    }
  };

  return (
    <div className="landing-container fade-in-up" style={{ position: 'relative' }}>
      <button onClick={onBack} className="back-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>
      <header>
        <img src="./Breighton Flat Logo FC-8.png" alt="Breighton" className="main-logo" style={{ marginBottom: '20px' }} />
      </header>
      
      <h2 className="estate-title">Broker's Accreditation</h2>
      <p style={{ color: '#666', marginBottom: '30px', fontSize: '0.9rem' }}>Upload your Broker/Seller forms and IDs below</p>
      
      <form 
        className="upload-form" 
        onDragEnter={handleDrag} 
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="form-group">
          <label htmlFor="team" className="form-label">Team</label>
          <select 
            id="team" 
            name="team" 
            className="text-input select-input" 
            value={formData.team} 
            onChange={handleInputChange}
          >
            <option value="Alpha">Alpha</option>
            <option value="Optimum">Optimum</option>
            <option value="Catalyst">Catalyst</option>
            <option value="Phoenix">Phoenix</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="text-input" 
            value={formData.name} 
            onChange={handleInputChange}
            placeholder="Enter your name" 
            required 
          />
        </div>

        <div className="form-group radio-group">
          <label className="radio-label">
            <input 
              type="radio" 
              name="role" 
              value="Broker" 
              checked={formData.role === 'Broker'} 
              onChange={handleInputChange} 
            />
            <span>Broker</span>
          </label>
          <label className="radio-label">
            <input 
              type="radio" 
              name="role" 
              value="Seller" 
              checked={formData.role === 'Seller'} 
              onChange={handleInputChange} 
            />
            <span>Seller</span>
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="sendTo" className="form-label">Send Uploads To</label>
          <select 
            id="sendTo" 
            name="sendTo" 
            className="text-input select-input" 
            value={formData.sendTo} 
            onChange={handleInputChange}
          >
            <option value="Anna">Anna</option>
            <option value="Erich">Erich</option>
            <option value="Ma'am Gem">Ma'am Gem</option>
            <option value="Sir Ernes">Sir Ernes</option>
          </select>
        </div>

        <input 
          type="file" 
          id="file-upload" 
          className="file-input" 
          multiple 
          onChange={handleChange} 
        />
        <label 
          htmlFor="file-upload" 
          className={dragActive ? "upload-label drag-active" : "upload-label"}
        >
          <div className="upload-content">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '15px', color: '#004a7c' }}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            <p style={{ margin: 0 }}><strong>Click to upload</strong> or drag and drop</p>
            <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '8px', marginBottom: 0 }}>PDF, PNG, JPG or DOCX</p>
          </div>
        </label>
        {dragActive && <div className="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}
      </form>
    </div>
  );
}

export default UploadPage;
