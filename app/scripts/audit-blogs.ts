import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function auditBlogs() {
  const targetSlugs = [
    'gruas-proyectos-infraestructura-vial',
    'izamiento-tanques-almacenamiento',
    'transporte-equipos-mineros',
    'coordinacion-izamientos-multiples-gruas',
    'costo-alquiler-grua-venezuela',
    'servicio-gruas-24-7-venezuela',
    'soporte-proyectos-pdvsa',
    'rigging-industrial-calculos'
  ];
  
  console.log('🔍 AUDITORÍA DE BLOGS - GRUASEQUISER.COM\n');
  console.log('═══════════════════════════════════════════════════════\n');
  
  for (const slug of targetSlugs) {
    try {
      const blog = await prisma.blog.findUnique({ where: { slug } });
      
      if (!blog) {
        console.log(`❌ [${slug}]`);
        console.log('   Estado: NO EXISTE EN BASE DE DATOS\n');
        continue;
      }
      
      const wordCount = blog.content.split(' ').length;
      const imageCount = (blog.content.match(/!\[/g) || []).length;
      
      console.log(`✓ [${slug}]`);
      console.log(`   📝 Contenido: ${wordCount} palabras`);
      console.log(`   🖼️  Imágenes: ${imageCount}`);
      console.log(`   📊 Publicado: ${blog.published ? 'SÍ' : 'NO'}`);
      console.log(`   ⏱️  Lectura: ${blog.readTime} min`);
      console.log(`   🔗 URL: https://gruasequiser.com/blog/${blog.slug}\n`);
    } catch (error: any) {
      console.log(`❌ [${slug}] - Error: ${error.message}\n`);
    }
  }
  
  const total = await prisma.blog.count();
  console.log(`\n📊 TOTAL DE BLOGS EN DB: ${total}`);
  
  await prisma.$disconnect();
}

auditBlogs().catch(console.error);
