require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkBlog() {
  try {
    const blog = await prisma.blog.findUnique({
      where: { slug: 'costo-alquiler-grua-venezuela' }
    });
    
    if (blog) {
      console.log('✅ Blog encontrado en la base de datos:');
      console.log('Título:', blog.title);
      console.log('Slug:', blog.slug);
      console.log('Categoría:', blog.category);
      console.log('Publicado:', blog.publishedAt);
    } else {
      console.log('❌ Blog no encontrado');
    }
    
    // Also check total count
    const count = await prisma.blog.count();
    console.log('\nTotal de blogs en BD:', count);
    
    // List recent blogs
    const recentBlogs = await prisma.blog.findMany({
      orderBy: { publishedAt: 'desc' },
      take: 5,
      select: { title: true, slug: true, publishedAt: true }
    });
    
    console.log('\nÚltimos 5 blogs:');
    recentBlogs.forEach((b, i) => {
      console.log(`${i+1}. ${b.title} (${b.slug})`);
    });
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkBlog();
