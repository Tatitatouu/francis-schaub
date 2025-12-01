#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const LOGOS_TO_OPTIMIZE = [
  // Certifications - affichées à ~60x40px
  {
    input: 'src/assets/certifications/logo-qualibois.png',
    maxWidth: 150,
    quality: 75,
    name: 'Qualibois'
  },
  {
    input: 'src/assets/certifications/logo-qualisol.png',
    maxWidth: 150,
    quality: 75,
    name: 'QualiSol'
  },
  {
    input: 'src/assets/certifications/rgequalibat.png',
    maxWidth: 100,
    quality: 75,
    name: 'RGE Qualibat'
  },
  {
    input: 'src/assets/certifications/logo-qualiPV.png',
    maxWidth: 150,
    quality: 75,
    name: 'QualiPV'
  },
  {
    input: 'src/assets/certifications/logo-qualipac.png',
    maxWidth: 150,
    quality: 75,
    name: 'QualiPac'
  },
  // Brand logos - affichées à ~100x30-40px
  {
    input: 'public/images/logo_froeling.png',
    maxWidth: 250,
    quality: 80,
    name: 'Froeling'
  },
  {
    input: 'public/images/mitsubishi.png',
    maxWidth: 250,
    quality: 80,
    name: 'Mitsubishi'
  },
  {
    input: 'public/images/vaillant_logo.png',
    maxWidth: 250,
    quality: 80,
    name: 'Vaillant'
  }
];

async function optimizeLogos() {
  console.log('🏷️  Optimisation des logos...\n');
  
  let totalBefore = 0;
  let totalAfter = 0;
  
  for (const logo of LOGOS_TO_OPTIMIZE) {
    try {
      const inputPath = path.join(process.cwd(), logo.input);
      
      // Vérifier que le fichier existe
      if (!fs.existsSync(inputPath)) {
        console.log(`❌ ${logo.name}: Fichier non trouvé: ${logo.input}`);
        continue;
      }
      
      // Obtenir l'info du fichier original
      const stat = fs.statSync(inputPath);
      const originalSize = stat.size / 1024; // en KB
      totalBefore += originalSize;
      
      // Créer un fichier temporaire
      const tempPath = inputPath + '.tmp.webp';
      
      // Optimiser l'image
      await sharp(inputPath)
        .resize(logo.maxWidth, logo.maxWidth, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({ quality: logo.quality })
        .toFile(tempPath);
      
      // Obtenir la taille optimisée
      const optimized = fs.statSync(tempPath);
      const optimizedSize = optimized.size / 1024; // en KB
      const savings = originalSize - optimizedSize;
      const percent = ((savings / originalSize) * 100).toFixed(1);
      
      totalAfter += optimizedSize;
      
      console.log(`✅ ${logo.name}`);
      console.log(`   📦 Avant: ${originalSize.toFixed(1)} KB`);
      console.log(`   📦 Après: ${optimizedSize.toFixed(1)} KB`);
      console.log(`   💾 Économies: ${savings.toFixed(1)} KB (${percent}%)`);
      console.log(`   📁 Temp: ${path.basename(tempPath)}\n`);
      
    } catch (err) {
      console.error(`❌ Erreur optimisant ${logo.name}:`, err.message);
    }
  }
  
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📊 TOTAUX`);
  console.log(`   Avant: ${totalBefore.toFixed(1)} KB`);
  console.log(`   Après: ${totalAfter.toFixed(1)} KB`);
  console.log(`   💾 Total économies: ${(totalBefore - totalAfter).toFixed(1)} KB (${((totalBefore - totalAfter) / totalBefore * 100).toFixed(1)}%)`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
  console.log('✨ Les fichiers .tmp.webp ont été créés.');
  console.log('   Exécute: node replace-logos.js');
}

optimizeLogos();
