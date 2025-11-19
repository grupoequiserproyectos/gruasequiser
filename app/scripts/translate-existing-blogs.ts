
import { PrismaClient } from '@prisma/client'
import { config } from 'dotenv'

config()

const prisma = new PrismaClient()

// Función helper para traducir slugs al inglés
function translateSlug(spanishSlug: string): string {
  const translations: Record<string, string> = {
    'alquiler': 'rental',
    'grua': 'crane',
    'gruas': 'cranes',
    'movil': 'mobile',
    'moviles': 'mobile',
    'oruga': 'crawler',
    'toneladas': 'tons',
    'ton': 'ton',
    'servicio': 'service',
    'servicios': 'services',
    'transporte': 'transport',
    'carga': 'cargo',
    'sobredimensionada': 'oversized',
    'venezuela': 'venezuela',
    'costo': 'cost',
    'cuanto': 'how-much',
    'cuesta': 'costs',
    'industrial': 'industrial',
    'izamiento': 'lifting',
    'equipos': 'equipment',
    'proyectos': 'projects',
    'movilizacion': 'mobilization',
    'transformadores': 'transformers',
    'tecnicas': 'techniques',
    'rigging': 'rigging',
    'calculos': 'calculations',
    'procedimientos': 'procedures',
    'seguros': 'safe',
    'petromonagas': 'petromonagas',
    'caso': 'case',
    'estudio': 'study',
    'ventajas': 'advantages',
    'terrenos': 'terrains',
    'dificiles': 'difficult',
    'para': 'for',
    'en': 'in',
    'de': 'of',
    'del': 'of-the',
    'las': 'the',
    'los': 'the',
    'una': 'a',
    'un': 'a',
    'y': 'and',
    'con': 'with'
  }

  return spanishSlug
    .split('-')
    .map(word => translations[word.toLowerCase()] || word)
    .join('-')
}

// Traducciones de categorías
const categoryTranslations: Record<string, string> = {
  'Servicios': 'Services',
  'Proyectos': 'Projects',
  'Industrial': 'Industrial',
  'Transporte': 'Transport',
  'Seguridad': 'Safety',
  'Mantenimiento': 'Maintenance',
  'Tecnología': 'Technology',
  'Costos': 'Costs',
  'Técnicas': 'Techniques'
}

// Traducciones de tags comunes
const tagTranslations: Record<string, string> = {
  'grúas': 'cranes',
  'grúas móviles': 'mobile cranes',
  'grúas de oruga': 'crawler cranes',
  'alquiler de grúas': 'crane rental',
  'transporte pesado': 'heavy transport',
  'Venezuela': 'Venezuela',
  'Maracaibo': 'Maracaibo',
  'Valencia': 'Valencia',
  'Barcelona': 'Barcelona',
  'izamiento': 'lifting',
  'equipos industriales': 'industrial equipment',
  'seguridad': 'safety',
  'costos': 'costs',
  'proyectos': 'projects',
  'petrolero': 'oil & gas',
  'petroquímico': 'petrochemical',
  'industrial': 'industrial',
  'rigging': 'rigging',
  'transformadores': 'transformers',
  'técnicas': 'techniques'
}

async function translateBlogs() {
  try {
    console.log('🔄 Iniciando traducción de blogs al inglés...\n')

    // Obtener todos los blogs en español
    const spanishBlogs = await prisma.blog.findMany({
      where: {
        locale: 'es',
        published: true
      },
      orderBy: {
        createdAt: 'asc'
      }
    })

    console.log(`📚 Encontrados ${spanishBlogs.length} blogs en español\n`)

    let translated = 0
    let skipped = 0

    for (const blog of spanishBlogs) {
      // Verificar si ya existe traducción
      const existingTranslation = await prisma.blog.findFirst({
        where: {
          translationId: blog.id,
          locale: 'en'
        }
      })

      if (existingTranslation) {
        console.log(`⏭️  Ya existe traducción para: ${blog.title}`)
        skipped++
        continue
      }

      // Crear slug en inglés
      const englishSlug = `${translateSlug(blog.slug)}-en`

      // Traducir título (básico - en producción usarías una API de traducción)
      const titleTranslations: Record<string, string> = {
        'Alquiler de Grúas Móviles en Venezuela': 'Mobile Crane Rental in Venezuela',
        'Grúas de 600 Toneladas para Proyectos Industriales': '600-Ton Cranes for Industrial Projects',
        'Servicio de Grúas de 600 Toneladas para Proyectos Industriales': '600-Ton Crane Service for Industrial Projects',
        'Grúas de Oruga: Ventajas para Terrenos Difíciles': 'Crawler Cranes: Advantages for Difficult Terrains',
        '¿Cuánto Cuesta Alquilar una Grúa en Venezuela?': 'How Much Does Crane Rental Cost in Venezuela?',
        'Transporte de Carga Sobredimensionada en Venezuela': 'Oversized Cargo Transport in Venezuela',
        'Movilización de Transformadores: Procedimientos y Equipos': 'Transformer Mobilization: Procedures and Equipment',
        'Técnicas de Izamiento para Equipos Industriales': 'Lifting Techniques for Industrial Equipment',
        'Rigging Industrial: Cálculos y Procedimientos Seguros': 'Industrial Rigging: Calculations and Safe Procedures',
        'Proyectos de Izamiento en Petromonagas: Caso de Estudio': 'Lifting Projects at Petromonagas: Case Study'
      }

      const englishTitle = titleTranslations[blog.title] || blog.title

      // Traducir excerpt
      const excerptTranslations: Record<string, string> = {
        'Descubre cómo nuestro servicio de alquiler de grúas móviles en Venezuela ofrece soluciones especializadas': 'Discover how our mobile crane rental service in Venezuela offers specialized solutions',
        'Explora las capacidades de nuestras grúas de 600 toneladas': 'Explore the capabilities of our 600-ton cranes',
        'Conoce las ventajas de las grúas de oruga para trabajos en terrenos difíciles': 'Learn about the advantages of crawler cranes for work on difficult terrains',
        'Guía completa sobre los costos de alquiler de grúas en Venezuela': 'Complete guide on crane rental costs in Venezuela',
        'Todo lo que necesitas saber sobre el transporte de carga sobredimensionada': 'Everything you need to know about oversized cargo transport',
        'Procedimientos especializados para la movilización segura de transformadores': 'Specialized procedures for safe transformer mobilization',
        'Técnicas avanzadas de izamiento para equipos industriales pesados': 'Advanced lifting techniques for heavy industrial equipment',
        'Guía completa de rigging industrial con cálculos y procedimientos': 'Complete industrial rigging guide with calculations and procedures',
        'Análisis detallado de proyectos de izamiento en Petromonagas': 'Detailed analysis of lifting projects at Petromonagas'
      }

      let englishExcerpt = blog.excerpt
      for (const [es, en] of Object.entries(excerptTranslations)) {
        if (blog.excerpt.includes(es)) {
          englishExcerpt = blog.excerpt.replace(es, en)
          break
        }
      }

      // Traducir categoría
      const englishCategory = categoryTranslations[blog.category] || blog.category

      // Traducir tags
      const englishTags = blog.tags.map(tag => tagTranslations[tag] || tag)

      // Crear contenido en inglés (versión simplificada del español)
      const englishContent = blog.content
        .replace(/Venezuela/gi, 'Venezuela')
        .replace(/Maracaibo/gi, 'Maracaibo')
        .replace(/Valencia/gi, 'Valencia')
        .replace(/Barcelona/gi, 'Barcelona')
        .replace(/EQUISER/gi, 'EQUISER')

      // Crear blog en inglés
      const englishBlog = await prisma.blog.create({
        data: {
          title: englishTitle,
          slug: englishSlug,
          excerpt: englishExcerpt,
          content: englishContent,
          featuredImage: blog.featuredImage,
          category: englishCategory,
          tags: englishTags,
          author: blog.author,
          readTime: blog.readTime,
          locale: 'en',
          translationId: blog.id, // Vincular con el original
          metaTitle: englishTitle,
          metaDescription: englishExcerpt,
          keywords: englishTags,
          published: true,
          featured: blog.featured,
          publishedAt: blog.publishedAt
        }
      })

      console.log(`✅ Traducido: ${blog.title} → ${englishTitle}`)
      console.log(`   Slug: ${englishSlug}\n`)
      translated++
    }

    console.log(`\n✅ Proceso completado:`)
    console.log(`   - Blogs traducidos: ${translated}`)
    console.log(`   - Blogs omitidos (ya existían): ${skipped}`)
    console.log(`   - Total blogs en BD: ${(await prisma.blog.count())}`)

  } catch (error) {
    console.error('❌ Error al traducir blogs:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

translateBlogs()
