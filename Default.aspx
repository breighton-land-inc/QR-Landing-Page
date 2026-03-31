<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Breighton - Broker & Seller Portal</title>
    <link href="styles.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
</head>
<body>
    <div class="landing-wrapper">
        <!-- 1. INTRODUCTION OVERLAY -->
        <div id="intro-overlay" class="intro-overlay">
            <div class="intro-content">
                <div class="logo-glow">
                    <img src="public/Breighton Flat Logo FC-8.png" alt="Logo" class="intro-logo" />
                </div>
                <h1 class="intro-text">Welcome</h1>
                <p class="intro-subtext">Brokers & Sellers</p>
            </div>
        </div>

        <!-- 2. MAIN LANDING PAGE -->
        <div id="main-container" class="landing-container hidden">
            <header>
                <img src="public/Breighton Flat Logo FC-8.png" alt="Breighton" class="main-logo" />
            </header>

            <h2 class="estate-title">Estate Material</h2>
            
            <div class="button-grid">
                <div class="brand-card" onclick="handleSelection('https://breighton-land-inc.github.io/Bellefort-Materials/')">
                    <img src="public/Bellefort_Logo (1).png" alt="Bellefort Estates" class="estate-logo" />
                </div>
                <div class="brand-card" onclick="handleSelection('https://breighton-land-inc.github.io/Victoria-Materials/')">
                    <img src="public/Victoria wide no SA.png" alt="Victoria" class="estate-logo" />
                </div>
                <div class="brand-card" onclick="handleSelection('https://breighton-land-inc.github.io/Montefaro-Materials/')">
                    <img src="public/Montefaro.png" alt="Montefaro" class="estate-logo" />
                </div>
            </div>

            <h2 class="estate-title" style="margin-top: 50px;">Broker & Seller Upload</h2>
            
            <div class="button-grid" style="flex-direction: row; gap: 20px; justify-content: center;">
                <button class="person-btn" type="button" onclick="openUpload('Anna')">Anna</button>
                <button class="person-btn" type="button" onclick="openUpload('Erich')">Erich</button>
            </div>
        </div>

        <!-- 3. UPLOAD PAGE -->
        <div id="upload-container" class="landing-container hidden" style="position: relative;">
            <button onclick="closeUpload()" class="back-btn" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
            </button>
            <header>
                <img src="public/Breighton Flat Logo FC-8.png" alt="Breighton" class="main-logo" style="margin-bottom: 20px;" />
            </header>
            
            <h2 id="upload-title" class="estate-title">Portal</h2>
            <p style="color: #666; margin-bottom: 30px; font-size: 0.9rem;">Upload your Broker/Seller forms and IDs below</p>
            
            <form id="upload-form" class="upload-form" onsubmit="event.preventDefault()">
                <div class="form-group">
                    <label for="uploader-name" class="form-label">Name</label>
                    <input type="text" id="uploader-name" name="name" class="text-input" placeholder="Enter your name" required />
                </div>

                <div class="form-group radio-group">
                    <label class="radio-label">
                        <input type="radio" name="role" value="Broker" checked onchange="updateRole('Broker')" />
                        <span>Broker</span>
                    </label>
                    <label class="radio-label">
                        <input type="radio" name="role" value="Seller" onchange="updateRole('Seller')" />
                        <span>Seller</span>
                    </label>
                </div>

                <input type="file" id="file-upload" class="file-input" multiple onchange="handleFileChange(event)" />
                <label id="drop-area" for="file-upload" class="upload-label">
                    <div class="upload-content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 15px; color: #004a7c;">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="17 8 12 3 7 8"></polyline>
                            <line x1="12" y1="3" x2="12" y2="15"></line>
                        </svg>
                        <p style="margin: 0;"><strong>Click to upload</strong> or drag and drop</p>
                        <p style="font-size: 0.8rem; color: #999; margin-top: 8px; margin-bottom: 0;">PDF, PNG, JPG or DOCX</p>
                    </div>
                </label>
            </form>
        </div>
    </div>

    <script>
        let currentRole = 'Broker';
        let currentPerson = ''; 

        document.addEventListener('DOMContentLoaded', () => {
            // Intro Timer
            setTimeout(() => {
                document.getElementById('intro-overlay').classList.add('hidden');
                document.getElementById('main-container').classList.remove('hidden');
                document.getElementById('main-container').classList.add('fade-in-up');
            }, 3500);

            // Drag and Drop Logic
            const dropArea = document.getElementById('drop-area');

            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                dropArea.addEventListener(eventName, preventDefaults, false);
            });

            function preventDefaults(e) {
                e.preventDefault();
                e.stopPropagation();
            }

            ['dragenter', 'dragover'].forEach(eventName => {
                dropArea.addEventListener(eventName, () => dropArea.classList.add('drag-active'), false);
            });

            ['dragleave', 'drop'].forEach(eventName => {
                dropArea.addEventListener(eventName, () => dropArea.classList.remove('drag-active'), false);
            });

            dropArea.addEventListener('drop', handleDrop, false);
        });

        function handleSelection(url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }

        function openUpload(personName) {
            currentPerson = personName;
            document.getElementById('upload-title').innerText = personName + "'s Portal";
            document.getElementById('main-container').classList.add('hidden');
            document.getElementById('upload-container').classList.remove('hidden');
            document.getElementById('upload-container').classList.add('fade-in-up');
        }

        function closeUpload() {
            document.getElementById('upload-container').classList.add('hidden');
            document.getElementById('upload-container').classList.remove('fade-in-up');
            document.getElementById('main-container').classList.remove('hidden');
        }

        function updateRole(role) {
            currentRole = role;
        }

        function handleDrop(e) {
            const dt = e.dataTransfer;
            const files = dt.files;
            handleFiles(files);
        }

        function handleFileChange(e) {
            const files = e.target.files;
            handleFiles(files);
        }

        function handleFiles(files) {
            if (files && files.length > 0) {
                const uploaderName = document.getElementById('uploader-name').value || 'Unknown';
                alert('Received ' + files.length + ' file(s) for ' + currentPerson + ' from ' + currentRole + ' ' + uploaderName);
            }
        }
    </script> 
</body>
</html>
