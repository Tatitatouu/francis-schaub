#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeRealisations() {
  console.log('🖼️  Optimisation réalisations.webp...\n');
  
  const inputPath = path.join(process.cwd(), 'public/images/réalisations.webp');
  
  if (!fs.existsSync(inputPath)) {
    console.log('❌ Fichier non trouvé');
    return;
  }
  
  const stat = fs.statSync(inputPath);
  const originalSize = stat.size / 1024;
  
  const tempPath = inputPath + '.tmp.webp';
  
  try {
    await sharp(inputPath)
      .resize(1200, 600, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 70 })
      .toFile(tempPath);
    
    const optimized = fs.statSync(tempPath);
    const optimizedSize = optimized.size / 1024;
    const savings = originalSize - optimizedSize;
    const percent = ((savings / originalSize) * 100).toFixed(1);
    
    console.log(`✅ Réalisations Hero`);
    console.log(`   📦 Avant: ${originalSize.toFixed(1)} KB`);
    console.log(`   📦 Après: ${optimizedSize.toFixed(1)} KB`);
    console.log(`   💾 Économies: ${savings.toFixed(1)} KB (${percent}%)\n`);
    
    // Replace original
    if (fs.existsSync(inputPath)) {
      fs.unlinkSync(inputPath);
    }
    fs.renameSync(tempPath, inputPath);
    console.log('✨ Fichier remplacé!');
    
  } catch (err) {
    console.error('❌ Erreur:', err.message);
  }
}

optimizeRealisations();
