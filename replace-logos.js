#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPLACEMENTS = [
  // Certifications
  {
    oldPath: 'src/assets/certifications/logo-qualibois.png',
    newPath: 'src/assets/certifications/logo-qualibois.webp',
  },
  {
    oldPath: 'src/assets/certifications/logo-qualisol.png',
    newPath: 'src/assets/certifications/logo-qualisol.webp',
  },
  {
    oldPath: 'src/assets/certifications/rgequalibat.png',
    newPath: 'src/assets/certifications/rgequalibat.webp',
  },
  {
    oldPath: 'src/assets/certifications/logo-qualiPV.png',
    newPath: 'src/assets/certifications/logo-qualiPV.webp',
  },
  {
    oldPath: 'src/assets/certifications/logo-qualipac.png',
    newPath: 'src/assets/certifications/logo-qualipac.webp',
  },
  // Brands
  {
    oldPath: 'public/images/logo_froeling.png',
    newPath: 'public/images/logo_froeling.webp',
  },
  {
    oldPath: 'public/images/mitsubishi.png',
    newPath: 'public/images/mitsubishi.webp',
  },
  {
    oldPath: 'public/images/vaillant_logo.png',
    newPath: 'public/images/vaillant_logo.webp',
  },
];

function replaceLogos() {
  console.log('🔄 Remplacement des logos...\n');
  
  for (const replacement of REPLACEMENTS) {
    try {
      const tmpPath = path.join(process.cwd(), replacement.oldPath + '.tmp.webp');
      const newPath = path.join(process.cwd(), replacement.newPath);
      const oldPath = path.join(process.cwd(), replacement.oldPath);
      
      // Vérifier que le fichier tmp existe
      if (!fs.existsSync(tmpPath)) {
        console.log(`❌ Fichier temp non trouvé: ${path.basename(tmpPath)}`);
        continue;
      }
      
      // Supprimer l'ancien fichier PNG/JPG
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
      
      // Renommer le tmp en webp
      fs.renameSync(tmpPath, newPath);
      
      console.log(`✅ ${path.basename(oldPath)} → ${path.basename(newPath)}`);
      
    } catch (err) {
      console.error(`❌ Erreur:`, err.message);
    }
  }
  
  console.log('\n✨ Fichiers remplacés!');
  console.log('⚠️  Mets à jour les imports dans les fichiers JS/TS\n');
  
  // Affiche les imports à mettre à jour
  console.log('📝 Imports à mettre à jour:\n');
  console.log('src/assets/certifications/index.js:');
  console.log('  - logo-qualibois.png → logo-qualibois.webp');
  console.log('  - logo-qualisol.png → logo-qualisol.webp');
  console.log('  - rgequalibat.png → rgequalibat.webp');
  console.log('  - logo-qualiPV.png → logo-qualiPV.webp');
  console.log('  - logo-qualipac.png → logo-qualipac.webp\n');
}

replaceLogos();
