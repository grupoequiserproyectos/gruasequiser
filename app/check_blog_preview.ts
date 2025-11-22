import { PrismaClient } from '@prisma/client'
import * as dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient()

async function checkBlog() {
  const blog = await prisma.blog.findUnique({
    where: { slug: 'costo-alquiler-grua-venezuela' },
    select: { title: true, content: true }
  })

  if (blog) {
    console.log('Title:', blog.title)
    console.log('\nContent preview (first 800 chars):')
    console.log(blog.content?.substring(0, 800))
    console.log('\n...')
  }

  await prisma.$disconnect()
}

checkBlog().catch(console.error)
