const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Imágenes recomprimidas que necesitan regeneración de versiones responsive
const recompressedImages = [
  'movilizacion-vagones-ferrocarril.webp',
  'movilizacion-vagones-metro.webp',
  'movilizacion-topas-metro-caracas.webp',
  'trabajo grua 800 ton.webp',
  'trabajo estadio copa america.webp',
  'trabajo gruas de 600 ton demag.webp',
];

const widths = [400, 800, 1200, 1600];
const imagesDir = path.join(__dirname, '../public/images');

async function generateResponsiveVersions(filename) {
  const inputPath = path.join(imagesDir, filename);
  const baseName = filename.replace('.webp', '');
  
  console.log(`\n🖼️  Procesando: ${filename}`);
  
  try {
    const metadata = await sharp(inputPath).metadata();
    console.log(`   Dimensiones originales: ${metadata.width}x${metadata.height}`);
    
    for (const width of widths) {
      if (width >= metadata.width) {
        console.log(`   ⏭️  Saltando ${width}w (mayor que original)`);
        continue;
      }
      
      const outputPath = path.join(imagesDir, `${baseName}-${width}w.webp`);
      
      await sharp(inputPath)
        .resize(width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({
          quality: 80,
          effort: 6,
          smartSubsample: true,
        })
        .toFile(outputPath);
      
      const stats = fs.statSync(outputPath);
      const size = (stats.size / 1024).toFixed(2);
      console.log(`   ✅ ${width}w.webp - ${size} KB`);
    }
    
    console.log(`   ✅ Versiones responsive regeneradas`);
  } catch (error) {
    console.error(`   ❌ Error:`, error.message);
  }
}

async function regenerateAll() {
  console.log('🔄 REGENERACIÓN DE VERSIONES RESPONSIVE');
  console.log('============================================');
  
  for (const filename of recompressedImages) {
    await generateResponsiveVersions(filename);
  }
  
  console.log('\n✅ Regeneración completada!');
}

regenerateAll().catch(console.error);
