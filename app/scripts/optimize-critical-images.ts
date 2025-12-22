import sharp from 'sharp'
import { promises as fs } from 'fs'
import path from 'path'

const imageDir = path.join(process.cwd(), 'public/images')

// Imágenes críticas identificadas en PageSpeed que necesitan optimización urgente
const CRITICAL_IMAGES = [
  'movilizacion-vagones-metro.webp',
  'trabajo-estadio-copa-america.webp',
  'trabajo-gruas-de-600-ton-demag.webp'
]

// Dimensiones para responsive images
const SIZES = [
  { suffix: '-400w', width: 400 },
  { suffix: '-800w', width: 800 },
  { suffix: '-1200w', width: 1200 },
  { suffix: '', width: 1600 } // Versión original optimizada
]

async function optimizeCriticalImages() {
  console.log('\n=== OPTIMIZACIÓN DE IMÁGENES CRÍTICAS ==\n')
  
  let totalOriginalSize = 0
  let totalOptimizedSize = 0
  
  for (const file of CRITICAL_IMAGES) {
    const inputPath = path.join(imageDir, file)
    
    try {
      // Verificar que el archivo existe
      await fs.access(inputPath)
      
      const originalStats = await fs.stat(inputPath)
      totalOriginalSize += originalStats.size
      
      console.log(`\n--- Procesando: ${file} ---`)
      console.log(`Tamaño original: ${(originalStats.size / 1024).toFixed(2)} KB`)
      
      const metadata = await sharp(inputPath).metadata()
      console.log(`Dimensiones originales: ${metadata.width}x${metadata.height}px`)
      
      const baseName = path.basename(file, path.extname(file))
      let fileSizeSum = 0
      
      // Generar versiones responsive
      for (const size of SIZES) {
        const outputPath = path.join(imageDir, `${baseName}${size.suffix}.webp`)
        
        // Solo redimensionar si la imagen original es más grande
        if (!metadata.width || metadata.width <= size.width) {
          console.log(`  ➢ Saltando ${size.width}w (imagen ya es más pequeña)`)
          continue
        }
        
        await sharp(inputPath)
          .resize(size.width, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          .webp({ 
            quality: 85,
            effort: 6 // Máxima compresión (1-6)
          })
          .toFile(outputPath)
        
        const newStats = await fs.stat(outputPath)
        fileSizeSum += newStats.size
        totalOptimizedSize += newStats.size
        
        console.log(`  ✓ Generado ${size.width}w: ${(newStats.size / 1024).toFixed(2)} KB`)
      }
      
      const savings = originalStats.size - (fileSizeSum / SIZES.length)
      const savingsPercent = ((savings / originalStats.size) * 100).toFixed(1)
      console.log(`  ✓ Ahorro promedio por versión: ${(savings / 1024).toFixed(2)} KB (${savingsPercent}%)`)
      
    } catch (error: any) {
      console.error(`✗ Error procesando ${file}:`, error.message)
    }
  }
  
  console.log('\n=== RESUMEN TOTAL ===')
  console.log(`Tamaño original total: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`)
  console.log(`Tamaño optimizado total: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`)
  console.log(`Ahorro total: ${((totalOriginalSize - totalOptimizedSize) / 1024 / 1024).toFixed(2)} MB`)
  console.log(`Reducción: ${(((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) * 100).toFixed(1)}%`)
  console.log('\n✓ Optimización completada!\n')
}

optimizeCriticalImages().catch(console.error)
