#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const FINAL_OPTIMIZATIONS = [
  // Remaining brand logos
  {
    input: 'public/images/atlantic_logo.webp',
    maxWidth: 200,
    quality: 75,
    name: 'Atlantic'
  },
  {
    input: 'public/images/vaillant_logo.webp',
    maxWidth: 200,
    quality: 75,
    name: 'Vaillant'
  },
  {
    input: 'public/images/weishaupt_logo.webp',
    maxWidth: 150,
    quality: 75,
    name: 'Weishaupt'
  },
  // Hero image - CRITICAL LCP element
  {
    input: 'src/assets/image/sdbia.webp',
    maxWidth: 1200,
    quality: 70,
    name: 'Hero Image (sdbia)'
  }
];

async function optimizeRemaining() {
  console.log('🎯 Optimisation FINALE des images...\n');
  
  let totalBefore = 0;
  let totalAfter = 0;
  
  for (const item of FINAL_OPTIMIZATIONS) {
    try {
      const inputPath = path.join(process.cwd(), item.input);
      
      if (!fs.existsSync(inputPath)) {
        console.log(`❌ ${item.name}: Fichier non trouvé: ${item.input}`);
        continue;
      }
      
      const stat = fs.statSync(inputPath);
      const originalSize = stat.size / 1024;
      totalBefore += originalSize;
      
      const tempPath = inputPath + '.tmp.webp';
      
      await sharp(inputPath)
        .resize(item.maxWidth, item.maxWidth, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({ quality: item.quality })
        .toFile(tempPath);
      
      const optimized = fs.statSync(tempPath);
      const optimizedSize = optimized.size / 1024;
      const savings = originalSize - optimizedSize;
      const percent = ((savings / originalSize) * 100).toFixed(1);
      
      totalAfter += optimizedSize;
      
      console.log(`✅ ${item.name}`);
      console.log(`   📦 Avant: ${originalSize.toFixed(1)} KB`);
      console.log(`   📦 Après: ${optimizedSize.toFixed(1)} KB`);
      console.log(`   💾 Économies: ${savings.toFixed(1)} KB (${percent}%)\n`);
      
    } catch (err) {
      console.error(`❌ Erreur ${item.name}:`, err.message);
    }
  }
  
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📊 RÉSUMÉ FINAL`);
  console.log(`   Avant: ${totalBefore.toFixed(1)} KB`);
  console.log(`   Après: ${totalAfter.toFixed(1)} KB`);
  console.log(`   💾 Total économies: ${(totalBefore - totalAfter).toFixed(1)} KB (${((totalBefore - totalAfter) / totalBefore * 100).toFixed(1)}%)`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
}

optimizeRemaining();
