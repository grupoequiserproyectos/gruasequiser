import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// TOP 10 imágenes más pesadas a optimizar
const TOP_10_IMAGES = [
  'trabajo grua 800 ton.png',
  'movilizacion-topas-metro-caracas.png',
  'movilizacion-generador-sobredimensionado.png',
  'logo-equiser-actualizado.png',
  'logo equiser actulizado sin fondo.png',
  'trabajo estadio copa america.png',
  'trabajo gruas de 600 ton demag.png',
  'dos gruas de 600 ton.png',
  'trabajo de grua.png',
  'movilizacion-vagones-ferrocarril.jpg'
];

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');
const QUALITY = 85;
const WIDTHS = [768, 1200, 1600];

interface OptimizationResult {
  file: string;
  originalSize: number;
  webpSize: number;
  savings: number;
  savingsPercent: number;
}

async function getFileSize(filePath: string): Promise<number> {
  const stats = await fs.promises.stat(filePath);
  return stats.size;
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

async function optimizeImage(filename: string): Promise<OptimizationResult> {
  const inputPath = path.join(IMAGES_DIR, filename);
  const outputPath = path.join(IMAGES_DIR, filename.replace(/\.(png|jpg|jpeg)$/i, '.webp'));

  console.log(`\n🔄 Procesando: ${filename}`);

  // Obtener tamaño original
  const originalSize = await getFileSize(inputPath);
  console.log(`   Tamaño original: ${formatBytes(originalSize)}`);

  // Convertir a WebP
  await sharp(inputPath)
    .webp({ quality: QUALITY, effort: 6 })
    .toFile(outputPath);

  // Generar versiones responsive
  for (const width of WIDTHS) {
    const responsivePath = outputPath.replace('.webp', `-${width}.webp`);
    await sharp(inputPath)
      .resize(width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(responsivePath);
    console.log(`   ✅ Creado: ${path.basename(responsivePath)}`);
  }

  // Obtener tamaño WebP
  const webpSize = await getFileSize(outputPath);
  const savings = originalSize - webpSize;
  const savingsPercent = (savings / originalSize) * 100;

  console.log(`   Tamaño WebP: ${formatBytes(webpSize)}`);
  console.log(`   Ahorro: ${formatBytes(savings)} (${savingsPercent.toFixed(1)}%)`);

  return {
    file: filename,
    originalSize,
    webpSize,
    savings,
    savingsPercent
  };
}

async function main() {
  console.log('🚀 OPTIMIZACIÓN DE IMÁGENES TOP 10');
  console.log('====================================\n');

  const results: OptimizationResult[] = [];
  let totalOriginalSize = 0;
  let totalWebpSize = 0;

  for (const filename of TOP_10_IMAGES) {
    try {
      const result = await optimizeImage(filename);
      results.push(result);
      totalOriginalSize += result.originalSize;
      totalWebpSize += result.webpSize;
    } catch (error) {
      console.error(`❌ Error procesando ${filename}:`, error);
    }
  }

  // Reporte final
  console.log('\n\n📊 REPORTE FINAL DE OPTIMIZACIÓN');
  console.log('=====================================');
  console.log(`Total de imágenes procesadas: ${results.length}`);
  console.log(`Tamaño original total: ${formatBytes(totalOriginalSize)}`);
  console.log(`Tamaño WebP total: ${formatBytes(totalWebpSize)}`);
  console.log(`Ahorro total: ${formatBytes(totalOriginalSize - totalWebpSize)}`);
  console.log(`Porcentaje de ahorro: ${((totalOriginalSize - totalWebpSize) / totalOriginalSize * 100).toFixed(1)}%`);

  console.log('\n✅ OPTIMIZACIÓN COMPLETADA');
  console.log('\n📌 PRÓXIMOS PASOS:');
  console.log('1. Actualizar referencias en componentes para usar imágenes .webp');
  console.log('2. Implementar lazy loading con loading="lazy"');
  console.log('3. Usar <picture> para versiones responsive');
  console.log('4. Ejecutar yarn build && deploy');
}

main().catch(console.error);
