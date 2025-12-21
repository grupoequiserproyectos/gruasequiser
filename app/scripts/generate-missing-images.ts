import sharp from 'sharp'
import { promises as fs } from 'fs'
import path from 'path'

const imageDir = path.join(process.cwd(), 'public/images')

const MISSING_IMAGES = [
  'grua-130-ton-transformador.webp',
  'izamiento-grua-300-ton.webp',
  'grua-movil-130-ton.webp'
]

const SIZES = [
  { suffix: '-400w', width: 400 },
  { suffix: '-800w', width: 800 },
  { suffix: '-1200w', width: 1200 }
]

async function generateMissing() {
  console.log('\n=== GENERANDO IMÁGENES FALTANTES ===\n')
  
  for (const file of MISSING_IMAGES) {
    const inputPath = path.join(imageDir, file)
    
    try {
      const metadata = await sharp(inputPath).metadata()
      console.log(`\nProcesando: ${file} (${metadata.width}x${metadata.height}px)`)
      
      const baseName = path.basename(file, '.webp')
      
      for (const size of SIZES) {
        if (!metadata.width || metadata.width <= size.width) {
          continue
        }
        
        const outputPath = path.join(imageDir, `${baseName}${size.suffix}.webp`)
        
        await sharp(inputPath)
          .resize(size.width, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          .webp({ quality: 85, effort: 6 })
          .toFile(outputPath)
        
        const stats = await fs.stat(outputPath)
        console.log(`  ✓ ${size.width}w: ${(stats.size / 1024).toFixed(2)} KB`)
      }
    } catch (error: any) {
      console.error(`✗ Error: ${file} - ${error.message}`)
    }
  }
  
  console.log('\n✓ Completado!\n')
}

generateMissing().catch(console.error)
