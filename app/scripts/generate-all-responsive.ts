import sharp from 'sharp'
import { promises as fs } from 'fs'
import path from 'path'

const imageDir = path.join(process.cwd(), 'public/images')

// Dimensiones para responsive images
const SIZES = [
  { suffix: '-400w', width: 400 },
  { suffix: '-800w', width: 800 },
  { suffix: '-1200w', width: 1200 },
  { suffix: '-1600w', width: 1600 }
]

async function generateResponsiveVersions() {
  console.log('\n=== GENERACIÓN DE VERSIONES RESPONSIVE ==\n')
  
  try {
    const files = await fs.readdir(imageDir)
    const imageFiles = files.filter(file => 
      (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.webp')) &&
      !file.includes('-400w') && !file.includes('-800w') && !file.includes('-1200w') && !file.includes('-1600w')
    )

    console.log(`Encontradas ${imageFiles.length} imágenes para procesar\n`)

    for (const file of imageFiles) {
      const inputPath = path.join(imageDir, file)
      
      try {
        const metadata = await sharp(inputPath).metadata()
        
        if (!metadata.width || !metadata.height) {
          console.log(`➢ Saltando ${file} (sin dimensiones)`)  
          continue
        }

        // Verificar si ya existen versiones responsive
        const baseName = path.basename(file, path.extname(file))
        const hasResponsive = await Promise.all(
          SIZES.map(async (size) => {
            try {
              await fs.access(path.join(imageDir, `${baseName}${size.suffix}.webp`))
              return true
            } catch {
              return false
            }
          })
        )

        if (hasResponsive.every(exists => exists)) {
          continue
        }

        console.log(`Procesando: ${file} (${metadata.width}x${metadata.height}px)`)
        
        // Generar versiones responsive
        for (const size of SIZES) {
          // Solo generar si la imagen original es más grande
          if (metadata.width <= size.width) {
            continue
          }
          
          const outputPath = path.join(imageDir, `${baseName}${size.suffix}.webp`)
          
          // Verificar si ya existe
          try {
            await fs.access(outputPath)
            continue
          } catch {
            // No existe, generar
          }
          
          await sharp(inputPath)
            .resize(size.width, null, { 
              withoutEnlargement: true,
              fit: 'inside'
            })
            .webp({ 
              quality: 85,
              effort: 6
            })
            .toFile(outputPath)
          
          const newStats = await fs.stat(outputPath)
          console.log(`  ✓ ${size.width}w: ${(newStats.size / 1024).toFixed(2)} KB`)
        }
        
      } catch (error: any) {
        console.error(`✗ Error: ${file} - ${error.message}`)
      }
    }
    
    console.log('\n✓ Generación completada!\n')
  } catch (error) {
    console.error('Error:', error)
  }
}

generateResponsiveVersions().catch(console.error)
