# QR Landing Page Deployment TODO

## Deployment Steps:
- [x] 1. Verify project runs: `npm run dev` (success: http://localhost:5174)
- [x] 2. Lint code: `npm run lint` (passed)
- [x] 3. Initialize Git: `git init` (success)
- [x] 4. Add remote origin: `git remote add origin https://github.com/breighton-land-inc/QR-Landing-Page.git` (success)
- [x] 5. Add all files: `git add .` (success)
- [x] 6. Initial commit: `git commit -m \"Initial commit: Complete QR landing page with 3 estates\"` (success: 39a6e62)
- [x] 7. Push to main: `git push -u origin master` (success: https://github.com/breighton-land-inc/QR-Landing-Page/tree/master)

**Completed ✅ All deployment steps done.**

## GitHub Pages Setup (to fix 404/white screen):
1. Merge PR: https://github.com/breighton-land-inc/QR-Landing-Page/pulls (blackboxai/pages-fix)
2. Settings > Pages > Source: Branch 'master', Folder /(root). Save.
3. Wait 5-10min: https://breighton-land-inc.github.io/QR-Landing-Page/
4. Refresh - app will load with Breghton estates QR selector.

vite.config.js now has `base: '/QR-Landing-Page/'` for correct asset paths on Pages.

