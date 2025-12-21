const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Imágenes pesadas que necesitan recompresión
const heavyImages = [
  'movilizacion-vagones-ferrocarril.webp',
  'movilizacion-vagones-metro.webp',
  'movilizacion-topas-metro-caracas.webp',
  'trabajo grua 800 ton.webp',
  'trabajo estadio copa america.webp',
  'trabajo gruas de 600 ton demag.webp',
];

const imagesDir = path.join(__dirname, '../public/images');

async function recompressImage(filename) {
  const inputPath = path.join(imagesDir, filename);
  const backupPath = path.join(imagesDir, filename.replace('.webp', '.webp.backup'));
  
  try {
    // Crear backup antes de recomprimir
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(inputPath, backupPath);
      console.log(`✅ Backup creado: ${filename}.backup`);
    }
    
    const stats = fs.statSync(inputPath);
    const originalSize = (stats.size / 1024).toFixed(2);
    
    // Recomprimir con mayor calidad pero menor tamaño
    await sharp(inputPath)
      .webp({
        quality: 75,  // Reducir de 85 a 75
        effort: 6,     // Más esfuerzo en compresión
        smartSubsample: true,
        nearLossless: false,
      })
      .toFile(inputPath + '.tmp');
    
    // Reemplazar original con versión comprimida
    fs.renameSync(inputPath + '.tmp', inputPath);
    
    const newStats = fs.statSync(inputPath);
    const newSize = (newStats.size / 1024).toFixed(2);
    const savings = ((1 - newStats.size / stats.size) * 100).toFixed(1);
    
    console.log(`✅ ${filename}:`);
    console.log(`   Antes: ${originalSize} KB`);
    console.log(`   Después: ${newSize} KB`);
    console.log(`   Ahorro: ${savings}%`);
    console.log('');
    
    return {
      filename,
      originalSize: parseFloat(originalSize),
      newSize: parseFloat(newSize),
      savings: parseFloat(savings)
    };
  } catch (error) {
    console.error(`❌ Error procesando ${filename}:`, error.message);
    return null;
  }
}

async function recompressAllImages() {
  console.log('📊 RECOMPRESIÓN DE IMÁGENES PESADAS');
  console.log('==========================================\n');
  
  const results = [];
  
  for (const filename of heavyImages) {
    const result = await recompressImage(filename);
    if (result) {
      results.push(result);
    }
  }
  
  // Resumen
  console.log('\n🎯 RESUMEN FINAL');
  console.log('==========================================');
  
  const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
  const totalNew = results.reduce((sum, r) => sum + r.newSize, 0);
  const totalSavings = ((1 - totalNew / totalOriginal) * 100).toFixed(1);
  
  console.log(`Imágenes procesadas: ${results.length}`);
  console.log(`Tamaño total original: ${totalOriginal.toFixed(2)} KB`);
  console.log(`Tamaño total nuevo: ${totalNew.toFixed(2)} KB`);
  console.log(`Ahorro total: ${(totalOriginal - totalNew).toFixed(2)} KB (${totalSavings}%)`);
  console.log('\n✅ Recompresión completada!');
}

recompressAllImages().catch(console.error);
