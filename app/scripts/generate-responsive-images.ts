import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'public', 'images');

// Imágenes más pesadas que necesitan versiones responsive
const imagesToOptimize = [
  'movilizacion-vagones-ferrocarril.webp',
  'movilizacion-vagones-metro.webp',
  'movilizacion-topas-metro-caracas.webp',
  'trabajo grua 800 ton.webp',
  'trabajo estadio copa america.webp',
  'trabajo gruas de 600 ton demag.webp',
  'movilizacion-generador-sobredimensionado.webp',
  'logo-equiser-actualizado.webp',
  'trabajo de grua.webp',
  'grua de 800 ton.webp',
  'proyecto-seguridad-calidad.webp',
  'trabajo de grua de 600 ton.webp',
  'trabajo de grua 450 ton.webp',
  'grua de 600 ton y grua de 130 ton.webp',
  'transporte-pieza-250-ton.webp',
  'grua 500 ton.webp',
  'montaje-transformador.webp',
];

// Tamaños responsive a generar
const sizes = [
  { suffix: '-400w', width: 400 },
  { suffix: '-800w', width: 800 },
  { suffix: '-1200w', width: 1200 },
  { suffix: '-1600w', width: 1600 },
];

async function generateResponsiveVersions(fileName: string) {
  try {
    const inputPath = path.join(imagesDir, fileName);
    const ext = path.extname(fileName);
    const nameWithoutExt = path.basename(fileName, ext);

    // Verificar si la imagen existe
    try {
      await fs.access(inputPath);
    } catch {
      console.log(`⚠️  Imagen no encontrada: ${fileName}`);
      return;
    }

    console.log(`\n📷 Procesando: ${fileName}`);

    // Obtener dimensiones originales
    const metadata = await sharp(inputPath).metadata();
    const originalWidth = metadata.width || 0;
    const originalSize = (await fs.stat(inputPath)).size;

    console.log(`   Original: ${originalWidth}px, ${(originalSize / 1024).toFixed(0)} KB`);

    let totalSavings = 0;
    let versionsCreated = 0;

    // Generar cada tamaño responsive
    for (const size of sizes) {
      // Solo generar si el ancho original es mayor que el tamaño deseado
      if (originalWidth <= size.width) {
        continue;
      }

      const outputPath = path.join(imagesDir, `${nameWithoutExt}${size.suffix}${ext}`);

      // Verificar si ya existe
      try {
        await fs.access(outputPath);
        console.log(`   ✅ Ya existe: ${size.width}px`);
        continue;
      } catch {
        // No existe, continuar con la generación
      }

      // Generar versión responsive
      await sharp(inputPath)
        .resize(size.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: 85 })
        .toFile(outputPath);

      const newSize = (await fs.stat(outputPath)).size;
      const savings = originalSize - newSize;
      totalSavings += savings;
      versionsCreated++;

      console.log(`   ✅ ${size.width}px: ${(newSize / 1024).toFixed(0)} KB (-${(savings / 1024).toFixed(0)} KB)`);
    }

    if (versionsCreated > 0) {
      console.log(`   📊 Total ahorro: ${(totalSavings / 1024).toFixed(0)} KB en ${versionsCreated} versiones`);
    }

    return { versionsCreated, totalSavings };
  } catch (error) {
    console.error(`❌ Error procesando ${fileName}:`, error);
    return null;
  }
}

async function main() {
  console.log('🚀 Generando imágenes responsive...\n');

  let totalVersions = 0;
  let totalSavings = 0;
  let processedCount = 0;

  for (const fileName of imagesToOptimize) {
    const result = await generateResponsiveVersions(fileName);
    if (result && result.versionsCreated > 0) {
      totalVersions += result.versionsCreated;
      totalSavings += result.totalSavings;
      processedCount++;
    }
  }

  console.log('\n🎯 RESUMEN FINAL:');
  console.log(`Imágenes procesadas: ${processedCount}`);
  console.log(`Versiones responsive creadas: ${totalVersions}`);
  console.log(`Ahorro total estimado: ${(totalSavings / 1024 / 1024).toFixed(2)} MB`);
  console.log('\n✅ ¡Proceso completado!');
}

main().catch(console.error);
