require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
    select: {
      title: true,
      slug: true,
      category: true,
      createdAt: true
    }
  });
  
  console.log('\n📊 Últimos 5 blogs en la base de datos:\n');
  blogs.forEach((blog, index) => {
    console.log(`${index + 1}. ${blog.title}`);
    console.log(`   Slug: ${blog.slug}`);
    console.log(`   Categoría: ${blog.category}`);
    console.log(`   Fecha: ${blog.createdAt.toISOString().split('T')[0]}\n`);
  });
  
  const total = await prisma.blog.count();
  console.log(`Total de blogs en BD: ${total}\n`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
