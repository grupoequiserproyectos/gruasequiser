/**
 * Script de generación automática diaria de blogs SEO
 * Genera 2 blogs diarios y los guarda en la base de datos
 * Para ejecutar manualmente: yarn tsx scripts/generate-daily-blogs-auto.ts
 */

import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';
config();

// Importar el generador de blogs
import { generate5Blogs } from '../lib/blog-generator-auto';

const prisma = new PrismaClient();

async function main() {
  console.log('\n🚀 ==========================================');
  console.log('🚀 GENERACIÓN AUTOMÁTICA DE BLOGS SEO');
  console.log('🚀 ==========================================');
  console.log(`📅 Fecha: ${new Date().toLocaleString('es-VE', { timeZone: 'America/Caracas' })}`);
  console.log('⏰ Zona horaria: America/Caracas\n');

  try {
    // Generar 2 blogs diarios (puede ajustarse según necesidad)
    const numberOfBlogs = 2;
    console.log(`📝 Generando ${numberOfBlogs} blogs SEO automatizados...\n`);

    const createdBlogs = [];

    for (let i = 0; i < numberOfBlogs; i++) {
      console.log(`\n📝 ═══════════════════════════════════`);
      console.log(`📝 Generando blog ${i + 1}/${numberOfBlogs}...`);
      console.log(`📝 ═══════════════════════════════════\n`);
      
      try {
        // Importar dinámicamente el generador para cada blog
        const { generateBlog } = await import('../lib/blog-generator-auto');
        const blogPost = await generateBlog();
        
        console.log(`   📌 Título: ${blogPost.title}`);
        console.log(`   🔗 Slug: ${blogPost.slug}`);
        console.log(`   🏙️  Ciudad: ${blogPost.city}`);
        console.log(`   🏭 Sector: ${blogPost.sector}`);
        
        // Validar requisitos obligatorios
        const imageCount = 1 + (blogPost.secondaryImages?.length || 0);
        if (imageCount < 3) {
          console.error(`   ❌ Blog rechazado: solo tiene ${imageCount} imágenes (mínimo 3)`);
          continue;
        }
        console.log(`   ✅ Imágenes: ${imageCount}`);
        
        const ctaCount = (blogPost.content.match(/cta-box/g) || []).length;
        if (ctaCount !== 3) {
          console.error(`   ❌ Blog rechazado: tiene ${ctaCount} CTAs (debe tener exactamente 3)`);
          continue;
        }
        console.log(`   ✅ CTAs: ${ctaCount}`);
        
        const hasContactData = blogPost.content.includes('+58 422-6347624');
        if (!hasContactData) {
          console.error(`   ❌ Blog rechazado: no tiene datos de contacto`);
          continue;
        }
        console.log(`   ✅ Datos de contacto: Presentes`);
        
        // Guardar en base de datos
        console.log(`\n   💾 Guardando en base de datos...`);
        
        const saved = await prisma.blog.create({
          data: {
            title: blogPost.title,
            slug: blogPost.slug,
            content: blogPost.content,
            excerpt: blogPost.excerpt,
            metaTitle: blogPost.metaTitle,
            metaDescription: blogPost.metaDescription,
            keywords: blogPost.keywords,
            featuredImage: blogPost.coverImage,
            category: blogPost.category,
            tags: blogPost.tags,
            author: JSON.stringify(blogPost.author),
            readTime: blogPost.readTime,
            published: blogPost.published,
            locale: blogPost.locale,
            publishedAt: new Date(blogPost.publishDate)
          }
        });
        
        createdBlogs.push(saved);
        
        console.log(`   ✅ Blog guardado exitosamente con ID: ${saved.id}`);
        console.log(`   🌐 URL: /es/blog/${saved.slug}`);
        
      } catch (error) {
        console.error(`\n   ❌ Error generando blog ${i + 1}:`, error);
        if (error instanceof Error) {
          console.error(`   📛 Mensaje: ${error.message}`);
        }
      }
    }

    console.log(`\n\n✅ ═══════════════════════════════════════`);
    console.log(`✅ GENERACIÓN COMPLETADA: ${createdBlogs.length}/${numberOfBlogs} blogs guardados`);
    console.log(`✅ ═══════════════════════════════════════\n`);
    
    // Mostrar resumen
    if (createdBlogs.length > 0) {
      console.log('📝 Blogs creados:');
      createdBlogs.forEach((blog, index) => {
        console.log(`   ${index + 1}. ${blog.title}`);
        console.log(`      🔗 Slug: ${blog.slug}`);
        console.log(`      🌐 URL: https://gruasequiser.com/es/blog/${blog.slug}`);
      });
    }

    console.log('\n✨ Generación automática completada exitosamente\n');
    
  } catch (error) {
    console.error('\n💥 ═══════════════════════════════════════');
    console.error('💥 ERROR EN LA GENERACIÓN AUTOMÁTICA');
    console.error('💥 ═══════════════════════════════════════\n');
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }

  process.exit(0);
}

main();
