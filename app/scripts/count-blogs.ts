import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient()

async function countBlogs() {
  try {
    const count = await prisma.blog.count()
    const published = await prisma.blog.count({ where: { published: true } })
    console.log(`\n📊 Estadísticas de Blogs:`)
    console.log(`   - Total de blogs: ${count}`)
    console.log(`   - Blogs publicados: ${published}`)
    console.log(`   - Blogs en borrador: ${count - published}\n`)
    
    const categories = await prisma.blog.groupBy({
      by: ['category'],
      _count: true,
      where: { published: true }
    })
    
    console.log('📂 Por categoría:')
    categories.forEach((cat: any) => {
      console.log(`   - ${cat.category}: ${cat._count} blogs`)
    })
  } catch (error) {
    console.error('Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

countBlogs()
