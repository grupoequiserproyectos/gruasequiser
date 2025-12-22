/**
 * Script de Optimización de Imágenes para Gruasequiser.com
 * 
 * Este script:
 * 1. Redimensiona imágenes a tamaños apropiados
 * 2. Genera versiones @1x y @2x
 * 3. Optimiza compresión WebP
 * 4. Genera múltiples tamaños responsive
 */

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// Configuración de tamaños para cada tipo de imagen
const IMAGE_CONFIGS = {
  // Logo - mostrado a 280x97, generar 560x194 para @2x
  'logo-equiser-actualizado.webp': {
    sizes: [
      { width: 280, height: 97, suffix: '' },
      { width: 560, height: 194, suffix: '@2x' }
    ],
    quality: 85,
    priority: true
  },

  // Imágenes de servicios principales (cards) - mostradas ~340x336
  'grua de 800 ton.webp': {
    sizes: [
      { width: 340, height: 336, suffix: '-mobile' },
      { width: 680, height: 672, suffix: '' }
    ],
    quality: 80
  },

  'trabajo de gantry 600 ton.webp': {
    sizes: [
      { width: 323, height: 336, suffix: '-mobile' },
      { width: 646, height: 672, suffix: '' }
    ],
    quality: 80
  },

  // Imágenes de galería pequeñas - mostradas ~91x100
  'ingenieria 3d-400w.webp': {
    sizes: [
      { width: 91, height: 109, suffix: '-thumb' },
      { width: 182, height: 218, suffix: '' },
      { width: 400, height: 388, suffix: '-full' }
    ],
    quality: 75
  },

  'trabajo estadio copa america-400w.webp': {
    sizes: [
      { width: 91, height: 91, suffix: '-thumb' },
      { width: 182, height: 182, suffix: '' },
      { width: 400, height: 392, suffix: '-full' }
    ],
    quality: 75
  },

  'trabajo gruas de 600 ton demag-400w.webp': {
    sizes: [
      { width: 91, height: 91, suffix: '-thumb' },
      { width: 182, height: 182, suffix: '' },
      { width: 400, height: 392, suffix: '-full' }
    ],
    quality: 75
  },

  'trabajo de grua-400w.webp': {
    sizes: [
      { width: 91, height: 91, suffix: '-thumb' },
      { width: 182, height: 182, suffix: '' },
      { width: 400, height: 392, suffix: '-full' }
    ],
    quality: 75
  },

  'trabajo de grua 450 ton-400w.webp': {
    sizes: [
      { width: 91, height: 121, suffix: '-thumb' },
      { width: 182, height: 242, suffix: '' },
      { width: 400, height: 394, suffix: '-full' }
    ],
    quality: 75
  }
};

// Configuración por defecto para imágenes no específicamente configuradas
const DEFAULT_CONFIG = {
  sizes: [
    { width: 400, height: null, suffix: '-400w' },
    { width: 800, height: null, suffix: '-800w' },
    { width: 1200, height: null, suffix: '-1200w' }
  ],
  quality: 80
};

async function optimizeImage(inputPath, outputDir, config) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  const results = [];

  console.log(`\n🔄 Optimizando: ${filename}`);

  for (const size of config.sizes) {
    const outputFilename = `${filename}${size.suffix}.webp`;
    const outputPath = path.join(outputDir, outputFilename);

    try {
      let image = sharp(inputPath);

      // Obtener metadata original
      const metadata = await image.metadata();

      // Resize manteniendo aspect ratio si solo se especifica width
      if (size.height) {
        image = image.resize(size.width, size.height, {
          fit: 'cover',
          position: 'center'
        });
      } else {
        image = image.resize(size.width, null, {
          fit: 'inside',
          withoutEnlargement: true
        });
      }

      // Convertir a WebP con optimización
      await image
        .webp({
          quality: config.quality,
          effort: 6, // Máximo esfuerzo de compresión (0-6)
          smartSubsample: true,
          nearLossless: false
        })
        .toFile(outputPath);

      const stats = await fs.stat(outputPath);
      const savedKB = ((metadata.size - stats.size) / 1024).toFixed(2);

      results.push({
        file: outputFilename,
        size: `${size.width}x${size.height || 'auto'}`,
        sizeKB: (stats.size / 1024).toFixed(2),
        savedKB: savedKB
      });

      console.log(`  ✅ ${outputFilename} - ${size.width}x${size.height || 'auto'} - ${(stats.size / 1024).toFixed(2)} KB (ahorro: ${savedKB} KB)`);
    } catch (error) {
      console.error(`  ❌ Error en ${outputFilename}:`, error.message);
    }
  }

  return results;
}

async function processAllImages(sourceDir, outputDir) {
  console.log('\n📝 Iniciando optimización de imágenes...\n');
  console.log(`📂 Directorio origen: ${sourceDir}`);
  console.log(`📂 Directorio destino: ${outputDir}\n`);

  // Crear directorio de salida si no existe
  await fs.mkdir(outputDir, { recursive: true });

  const files = await fs.readdir(sourceDir);
  const imageFiles = files.filter(file =>
    file.endsWith('.webp') || file.endsWith('.jpg') || file.endsWith('.png')
  );

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let processedCount = 0;

  for (const file of imageFiles) {
    const inputPath = path.join(sourceDir, file);
    const config = IMAGE_CONFIGS[file] || DEFAULT_CONFIG;

    // Obtener tamaño original
    const originalStats = await fs.stat(inputPath);
    totalOriginalSize += originalStats.size;

    const results = await optimizeImage(inputPath, outputDir, config);

    // Sumar tamaños optimizados
    for (const result of results) {
      totalOptimizedSize += parseFloat(result.sizeKB) * 1024;
    }

    processedCount++;
  }

  // Resumen final
  console.log('\n' + '='.repeat(60));
  console.log('📊 RESUMEN DE OPTIMIZACIÓN');
  console.log('='.repeat(60));
  console.log(`Total de imágenes procesadas: ${processedCount}`);
  console.log(`Tamaño original total: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Tamaño optimizado total: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Ahorro total: ${((totalOriginalSize - totalOptimizedSize) / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Reducción: ${(((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) * 100).toFixed(2)}%`);
  console.log('='.repeat(60) + '\n');
}

// Ejecutar script
const sourceDir = path.join(process.cwd(), 'public', 'images');
const outputDir = path.join(process.cwd(), 'public', 'images', 'optimized');

processAllImages(sourceDir, outputDir)
  .then(() => {
    console.log('🌟 Optimización completada exitosamente!\n');
    console.log('📌 Próximos pasos:');
    console.log('1. Revisar las imágenes optimizadas en: public/images/optimized/');
    console.log('2. Actualizar referencias en componentes a las nuevas imágenes');
    console.log('3. Eliminar imágenes originales después de verificar');
    console.log('4. Desplegar y ejecutar PageSpeed Insights\n');
  })
  .catch(error => {
    console.error('❌ Error en la optimización:', error);
    process.exit(1);
  });
