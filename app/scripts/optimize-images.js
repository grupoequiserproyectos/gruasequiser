
const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../public/images');
const QUALITY = 85;
const WEBP_QUALITY = 80;

async function optimizeImages() {
  try {
    const files = await fs.readdir(IMAGES_DIR);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    );

    console.log(`🖼️  Found ${imageFiles.length} images to optimize...`);

    for (const file of imageFiles) {
      const inputPath = path.join(IMAGES_DIR, file);
      const outputWebP = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      
      try {
        // Generate WebP
        await sharp(inputPath)
          .webp({ quality: WEBP_QUALITY })
          .toFile(outputWebP);
        
        console.log(`✅ Converted: ${file} -> ${path.basename(outputWebP)}`);
        
        // Get file sizes
        const originalStats = await fs.stat(inputPath);
        const webpStats = await fs.stat(outputWebP);
        const savings = ((1 - webpStats.size / originalStats.size) * 100).toFixed(1);
        
        console.log(`   Saved ${savings}% (${originalStats.size} -> ${webpStats.size} bytes)`);
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message);
      }
    }

    console.log('\n🎉 Image optimization complete!');
  } catch (error) {
    console.error('Error:', error);
  }
}

optimizeImages();
