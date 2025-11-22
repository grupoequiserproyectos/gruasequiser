import { PrismaClient } from '@prisma/client'
import * as dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient()

async function checkBlogsContent() {
  const slugs = [
    'gruas-proyectos-infraestructura-vial',
    'izamiento-tanques-almacenamiento',
    'transporte-equipos-mineros',
    'coordinacion-izamientos-multiples-gruas',
    'costo-alquiler-grua-venezuela',
    'servicio-gruas-24-7-venezuela',
    'soporte-proyectos-pdvsa',
    'rigging-industrial-calculos'
  ]

  for (const slug of slugs) {
    const blog = await prisma.blog.findUnique({
      where: { slug },
      select: {
        slug: true,
        title: true,
        content: true,
        published: true
      }
    })

    if (!blog) {
      console.log(`\n❌ Blog NO ENCONTRADO: ${slug}`)
    } else {
      console.log(`\n✅ Blog: ${blog.title}`)
      console.log(`   Slug: ${slug}`)
      console.log(`   Published: ${blog.published}`)
      console.log(`   Content length: ${blog.content?.length || 0} chars`)
      if (!blog.content || blog.content.length < 100) {
        console.log(`   ⚠️  CONTENIDO VACÍO O MUY CORTO!`)
      }
    }
  }

  await prisma.$disconnect()
}

checkBlogsContent().catch(console.error)
