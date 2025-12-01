#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_TO_OPTIMIZE = [
  {
    input: 'public/images/carrelage-int.webp',
    maxWidth: 600,
    quality: 75,
    name: 'Carrelage intérieur'
  },
  {
    input: 'public/images/carrelage.webp',
    maxWidth: 600,
    quality: 75,
    name: 'Carrelage extérieur'
  },
  {
    input: 'public/images/mosaique.webp',
    maxWidth: 600,
    quality: 75,
    name: 'Mosaïque'
  },
  {
    input: 'public/images/salle-bain-familiale.webp',
    maxWidth: 600,
    quality: 75,
    name: 'Salle de bain familiale'
  }
];

async function optimizeImages() {
  console.log('🖼️  Optimisation des images...\n');
  
  for (const img of IMAGES_TO_OPTIMIZE) {
    try {
      const inputPath = path.join(process.cwd(), img.input);
      
      // Vérifier que le fichier existe
      if (!fs.existsSync(inputPath)) {
        console.log(`❌ ${img.name}: Fichier non trouvé: ${img.input}`);
        continue;
      }
      
      // Obtenir l'info du fichier original
      const stat = fs.statSync(inputPath);
      const originalSize = stat.size / 1024; // en KB
      
      // Créer un fichier temporaire
      const tempPath = inputPath + '.tmp.webp';
      
      // Optimiser l'image
      await sharp(inputPath)
        .resize(img.maxWidth, img.maxWidth, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({ quality: img.quality })
        .toFile(tempPath);
      
      // Obtenir la taille optimisée
      const optimized = fs.statSync(tempPath);
      const optimizedSize = optimized.size / 1024; // en KB
      const savings = originalSize - optimizedSize;
      const percent = ((savings / originalSize) * 100).toFixed(1);
      
      console.log(`✅ ${img.name}`);
      console.log(`   📦 Avant: ${originalSize.toFixed(1)} KB`);
      console.log(`   📦 Après: ${optimizedSize.toFixed(1)} KB`);
      console.log(`   💾 Économies: ${savings.toFixed(1)} KB (${percent}%)`);
      console.log(`   📁 Fichier temp créé: ${path.basename(tempPath)}\n`);
      
    } catch (err) {
      console.error(`❌ Erreur optimisant ${img.name}:`, err.message);
    }
  }
  
  console.log('✨ Les fichiers ont été créés avec suffix .tmp.webp');
  console.log('   Tu devras les renommer manuellement après.');
}

optimizeImages();
