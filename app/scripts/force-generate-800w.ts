import sharp from 'sharp'
import { promises as fs } from 'fs'
import path from 'path'

const imageDir = path.join(process.cwd(), 'public/images')

// Imágenes que necesitan versión 800w aunque sean pequeñas
const IMAGES = [
  'grua-130-ton-transformador.webp',
  'izamiento-grua-300-ton.webp',
  'grua-movil-130-ton.webp'
]

async function forceGenerate800w() {
  console.log('\n=== GENERANDO VERSIÓN 800W (FORZADO) ===\n')
  
  for (const file of IMAGES) {
    const inputPath = path.join(imageDir, file)
    const baseName = path.basename(file, '.webp')
    const outputPath = path.join(imageDir, `${baseName}-800w.webp`)
    
    try {
      // Generar versión 800w incluso si es del mismo tamaño
      await sharp(inputPath)
        .resize(800, null, { 
          withoutEnlargement: false, // Permitir que se mantenga el tamaño si es menor
          fit: 'inside'
        })
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath)
      
      const stats = await fs.stat(outputPath)
      console.log(`✓ ${file} -> 800w: ${(stats.size / 1024).toFixed(2)} KB`)
    } catch (error: any) {
      console.error(`✗ Error: ${file} - ${error.message}`)
    }
  }
  
  console.log('\n✓ Completado!\n')
}

forceGenerate800w().catch(console.error)
