
import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const prisma = new PrismaClient();

const AUTOR_FIJO = JSON.stringify({
  name: "Gruas Equiser",
  image: "/images/logo-equiser-actualizado.webp",
  bio: "Líderes en servicios de grúas e izamiento industrial en Venezuela con más de 30 años de experiencia."
});

const FECHA_FIJA = new Date("2023-12-31T00:00:00.000Z");

async function fixAllBlogs() {
  try {
    console.log("🔧 Iniciando reparación de blogs...\n");
    
    // Obtener todos los blogs
    const blogs = await prisma.blog.findMany({
      select: { id: true, slug: true, title: true, author: true, publishedAt: true, published: true }
    });
    
    console.log(`📊 Total de blogs encontrados: ${blogs.length}\n`);
    
    let actualizados = 0;
    
    for (const blog of blogs) {
      try {
        await prisma.blog.update({
          where: { id: blog.id },
          data: {
            author: AUTOR_FIJO,
            publishedAt: FECHA_FIJA,
            published: true
          }
        });
        
        console.log(`✅ ${blog.slug}`);
        console.log(`   Autor: Gruas Equiser`);
        console.log(`   Fecha: 31 de Diciembre de 2023`);
        console.log(`   Publicado: ✓\n`);
        
        actualizados++;
      } catch (error) {
        console.error(`❌ Error actualizando ${blog.slug}:`, error);
      }
    }
    
    console.log(`\n🎉 Reparación completada!`);
    console.log(`✅ ${actualizados} de ${blogs.length} blogs actualizados correctamente\n`);
    
    // Verificar resultado
    const verificacion = await prisma.blog.findMany({
      select: { slug: true, author: true, publishedAt: true, published: true },
      take: 5
    });
    
    console.log("📋 Verificación (primeros 5 blogs):");
    verificacion.forEach(b => {
      console.log(`\n  ${b.slug}`);
      console.log(`  Autor: ${JSON.parse(b.author).name}`);
      console.log(`  Fecha: ${b.publishedAt}`);
      console.log(`  Publicado: ${b.published ? '✓' : '✗'}`);
    });
    
  } catch (error) {
    console.error("❌ Error general:", error);
  } finally {
    await prisma.$disconnect();
  }
}

fixAllBlogs();
