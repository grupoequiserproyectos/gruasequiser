import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'public', 'images');

// Imágenes a optimizar (las que aún son grandes)
const imagesToOptimize = [
  'trabajo grua 800 ton.png',
  'movilizacion-topas-metro-caracas.png',
  'movilizacion-generador-sobredimensionado.png',
  'logo-equiser-actualizado.png',
  'logo equiser actulizado sin fondo.png',
  'trabajo estadio copa america.png',
  'trabajo gruas de 600 ton demag.png',
  'dos gruas de 600 ton.png',
  'trabajo de grua.png',
  'movilizacion-vagones-ferrocarril.jpg',
  'proyecto-seguridad-calidad.png',
  'movilizacion-vagones-metro.jpg',
  'grua de 800 ton.png',
  'gruas-oruga-terrenos-dificiles.png',
  'transporte-pieza-250-ton.png',
  'transporte-250-toneladas.png',
  'trabajo de grua de 600 ton.png',
  'grua de 600 ton y grua de 130 ton.png',
  'transporte-carga-sobredimensionada.png',
  'gantry 600 ton generador.png',
  'trabajo de gantry 600 ton.png',
  'rigging-industrial-calculos.png',
  'imagen grua.png',
  'trabajo de grua 450 ton.png'
];

async function optimizeImage(fileName: string) {
  try {
    const inputPath = path.join(imagesDir, fileName);
    const ext = path.extname(fileName);
    const nameWithoutExt = path.basename(fileName, ext);
    const outputPath = path.join(imagesDir, `${nameWithoutExt}.webp`);

    // Verificar si la imagen existe
    try {
      await fs.access(inputPath);
    } catch {
      console.log(`⚠️  Imagen no encontrada: ${fileName}`);
      return;
    }

    // Verificar si ya existe la versión optimizada
    try {
      await fs.access(outputPath);
      console.log(`✅ Ya existe optimizada: ${nameWithoutExt}.webp`);
      return;
    } catch {
      // No existe, continuar con la optimización
    }

    const stats = await fs.stat(inputPath);
    const originalSize = stats.size;

    // Optimizar a WebP con calidad 85
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);

    const newStats = await fs.stat(outputPath);
    const newSize = newStats.size;
    const savings = originalSize - newSize;
    const savingsPercent = ((savings / originalSize) * 100).toFixed(1);

    console.log(`✅ ${fileName} → ${nameWithoutExt}.webp`);
    console.log(`   ${(originalSize / 1024 / 1024).toFixed(2)} MB → ${(newSize / 1024 / 1024).toFixed(2)} MB (${savingsPercent}% ahorro)`);

    return { originalSize, newSize, savings };
  } catch (error) {
    console.error(`❌ Error optimizando ${fileName}:`, error);
    return null;
  }
}

async function main() {
  console.log('🚀 Iniciando optimización de imágenes restantes...\n');

  let totalOriginal = 0;
  let totalNew = 0;
  let processedCount = 0;

  for (const fileName of imagesToOptimize) {
    const result = await optimizeImage(fileName);
    if (result) {
      totalOriginal += result.originalSize;
      totalNew += result.newSize;
      processedCount++;
    }
    console.log('');
  }

  const totalSavings = totalOriginal - totalNew;
  const totalSavingsPercent = ((totalSavings / totalOriginal) * 100).toFixed(1);

  console.log('\n📊 RESUMEN FINAL:');
  console.log(`Imágenes procesadas: ${processedCount}`);
  console.log(`Tamaño original: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Tamaño nuevo: ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Ahorro total: ${(totalSavings / 1024 / 1024).toFixed(2)} MB (${totalSavingsPercent}%)`);
}

main().catch(console.error);
