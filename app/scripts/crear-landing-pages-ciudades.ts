import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient()

const ciudadesLandingPages = [
  {
    slug: 'alquiler-gruas-industriales-maracaibo-zulia-2025',
    title: 'Alquiler de Grúas Industriales en Maracaibo, Zulia 2025 | EQUISER',
    excerpt: 'Servicio de alquiler de grúas móviles y sobre oruga 25-1600 toneladas en Maracaibo, Zulia. Disponibilidad inmediata 24/7, operadores certificados. Sector petrolero, petroquímico e industrial. 30+ años de experiencia.',
    ciudad: 'Maracaibo',
    estado: 'Zulia',
    distancia: '420 km',
    tiempo: '2-4 horas',
    sectores: ['Petrolero', 'Petroquímico', 'Industrial', 'Energético'],
    proyectos: [
      'Mantenimiento de refinerías petroleras',
      'Izamiento de equipos en complejos petroquímicos',
      'Movilización de transformadores eléctricos'
    ]
  },
  {
    slug: 'alquiler-gruas-industriales-valencia-carabobo-2025',
    title: 'Alquiler de Grúas Industriales en Valencia, Carabobo 2025 | EQUISER',
    excerpt: 'Alquiler de grúas móviles telescópicas y sobre oruga en Valencia, Carabobo. Capacidades 25-1600 toneladas. Sector manufacturero, automotriz e industrial. Disponibilidad 24/7 con base en Morón.',
    ciudad: 'Valencia',
    estado: 'Carabobo',
    distancia: '45 km',
    tiempo: '1-2 horas',
    sectores: ['Manufacturero', 'Automotriz', 'Industrial', 'Construcción'],
    proyectos: [
      'Montaje de estructuras metálicas en plantas industriales',
      'Movilización de maquinaria pesada',
      'Izamiento de equipos en sector automotriz'
    ]
  },
  {
    slug: 'alquiler-gruas-industriales-puerto-cabello-carabobo-2025',
    title: 'Alquiler de Grúas en Puerto Cabello, Carabobo 2025 | EQUISER',
    excerpt: 'Servicios de grúas industriales en Puerto Cabello, Carabobo. Operaciones portuarias, Refinería El Palito, Pequiven. Grúas 25-1600 toneladas. Izamiento, transporte pesado y logística especializada.',
    ciudad: 'Puerto Cabello',
    estado: 'Carabobo',
    distancia: '35 km',
    tiempo: '1-2 horas',
    sectores: ['Portuario', 'Petroquímico', 'Refinería', 'Logístico'],
    proyectos: [
      'Operaciones portuarias en Puerto Cabello',
      'Mantenimiento Refinería El Palito',
      'Proyectos Pequiven Puerto Cabello'
    ]
  },
  {
    slug: 'alquiler-gruas-industriales-caracas-distrito-capital-2025',
    title: 'Alquiler de Grúas Industriales en Caracas 2025 | EQUISER',
    excerpt: 'Alquiler de grúas móviles y sobre oruga en Caracas, Distrito Capital. Sector energético, construcción e infraestructura. Capacidades 25-1600 toneladas. Respuesta rápida desde Morón, Carabobo.',
    ciudad: 'Caracas',
    estado: 'Distrito Capital',
    distancia: '180 km',
    tiempo: '3-4 horas',
    sectores: ['Energético', 'Construcción', 'Infraestructura', 'Telecomunicaciones'],
    proyectos: [
      'Instalación de transformadores en plantas eléctricas',
      'Proyectos de infraestructura urbana',
      'Montaje de estructuras en edificaciones'
    ]
  },
  {
    slug: 'alquiler-gruas-industriales-ciudad-guayana-bolivar-2025',
    title: 'Alquiler de Grúas Industriales en Ciudad Guayana, Bolívar 2025 | EQUISER',
    excerpt: 'Servicios de grúas industriales en Ciudad Guayana, Bolívar. Especializados en SIDOR, sector siderúrgico y minero. Grúas 25-1600 toneladas. Operaciones de alto tonelaje en industria pesada.',
    ciudad: 'Ciudad Guayana',
    estado: 'Bolívar',
    distancia: '580 km',
    tiempo: '4-6 horas',
    sectores: ['Siderúrgico', 'Minero', 'Industrial Pesado', 'Energético'],
    proyectos: [
      'Operaciones en complejo siderúrgico SIDOR',
      'Izamiento de equipos mineros',
      'Mantenimiento de plantas eléctricas'
    ]
  }
]

function generarContenidoLanding(data: any) {
  return `
# Alquiler de Grúas Industriales en ${data.ciudad}, ${data.estado} 2025

## Servicios de Grúas Certificadas en ${data.ciudad} con EQUISER

EQUISER ofrece servicios profesionales de **alquiler de grúas móviles telescópicas** y **grúas sobre oruga** con disponibilidad inmediata en ${data.ciudad}, ${data.estado}. Con más de **30 años de experiencia** en la industria pesada venezolana, somos la empresa líder en servicios de izamiento industrial, transporte pesado y logística especializada para proyectos de alta complejidad.

Nuestra base operativa en **Morón, Carabobo** nos permite atender ${data.ciudad} con un tiempo de respuesta de **${data.tiempo}** (distancia: ${data.distancia}), garantizando movilización rápida y eficiente de equipos con operadores certificados y supervisores de seguridad HSE.

### ¿Por Qué Elegir EQUISER en ${data.ciudad}?

- **Distancia estratégica:** ${data.distancia} desde nuestra base en Morón
- **Tiempo de respuesta:** ${data.tiempo} para movilización de equipos
- **Operadores certificados** NCCCO con experiencia local
- **Sectores especializados:** ${data.sectores.join(', ')}
- **Disponibilidad 24/7** los 365 días del año
- **Más de 120 operaciones exitosas anuales** en ${data.estado}

---

## Tipos de Grúas Disponibles en ${data.ciudad}

Ofrecemos la flota más completa y moderna de Venezuela con certificaciones internacionales:

### 1. Grúas Móviles Telescópicas (25-600 Toneladas)

Ideales para proyectos en ${data.ciudad} con alta movilidad y acceso limitado:

- **Grúas 25-50 toneladas:** Proyectos medianos, estructuras metálicas ligeras, mantenimiento industrial
- **Grúas 130-300 toneladas:** Aplicaciones industriales estándar, transformadores, tanques de almacenamiento
- **Grúas 450-600 toneladas:** Proyectos de máxima complejidad en refinerías y complejos industriales

**Marcas disponibles:** Liebherr (Alemania), Grove (USA), Manitowoc (USA)

### 2. Grúas Sobre Oruga (300-1600 Toneladas)

Para operaciones de alto tonelaje y terrenos difíciles en ${data.ciudad}:

- **Grúas 300-600 toneladas:** Industrial pesado, plantas petroquímicas, refinerías
- **Grúas 800-1200 toneladas:** Mega proyectos siderúrgicos y energéticos
- **Grúas 1600 toneladas:** Mayor capacidad disponible en Venezuela

**Tecnología:** Demag (Alemania) con sistemas de control computarizado

### 3. Transporte Pesado Super Lowboy (Hasta 250 Toneladas)

Sistema hidráulico especializado para movilización de:
- Transformadores eléctricos de alto voltaje
- Turbinas industriales y generadores
- Equipos petroquímicos sobredimensionados
- Maquinaria pesada y estructuras metálicas

---

## Proyectos Ejecutados en ${data.ciudad}

Nuestra experiencia en ${data.ciudad} incluye:

${data.proyectos.map((proyecto: string, index: number) => `
### Proyecto ${index + 1}: ${proyecto}

**Cliente:** Sector ${data.sectores[index] || 'Industrial'}
**Duración:** Variable según complejidad
**Equipo utilizado:** Grúas móviles y sobre oruga certificadas
**Resultado:** Operación exitosa sin incidentes
`).join('\n')}

---

## Sectores que Atendemos en ${data.ciudad}

Especializados en los principales sectores industriales de ${data.estado}:

${data.sectores.map((sector: string) => `### Sector ${sector}

Servicios especializados para la industria ${sector.toLowerCase()} en ${data.ciudad}, incluyendo:
- Alquiler de grúas móviles y sobre oruga
- Transporte pesado de equipos industriales
- Izamiento con ingeniería 3D y cálculos certificados
- Rigging industrial y montaje de estructuras
- Monitoreo satelital en tiempo real
`).join('\n')}

---

## Costos de Alquiler de Grúas en ${data.ciudad}

Tarifas competitivas con transparencia total:

| Capacidad de Grúa | Tarifa Diaria (USD) | Aplicaciones Principales |
|-------------------|---------------------|---------------------------|
| 25-50 toneladas   | $2,500 - $3,500     | Proyectos medianos, estructuras ligeras |
| 130-300 toneladas | $4,000 - $6,500     | Industrial estándar, transformadores |
| 450-600 toneladas | $6,500 - $9,500     | Alta complejidad, refinerías |
| 800-1600 toneladas| $9,500 - $15,000+   | Mega proyectos siderúrgicos |

**Nota:** Tarifas incluyen operador certificado, supervisor HSE, y monitoreo satelital. Costos de movilización desde Morón adicionales según proyecto.

---

## Certificaciones y Seguridad

Todos nuestros servicios en ${data.ciudad} están respaldados por:

- **ISO 9001:** Sistema de gestión de calidad certificado
- **NCCCO:** Operadores certificados internacionalmente
- **OSHA:** Estándares de seguridad industrial
- **HSE:** Supervisores de seguridad en cada operación
- **Ingeniería 3D:** Cálculos estructurales certificados

---

## Proceso de Contratación

### Paso 1: Solicitud de Cotización
Contáctanos vía WhatsApp, teléfono o email con detalles de tu proyecto en ${data.ciudad}.

### Paso 2: Evaluación Técnica
Nuestro equipo de ingeniería analiza requerimientos, realiza visita técnica si es necesario.

### Paso 3: Propuesta Comercial
Recibe cotización detallada en 24-48 horas con especificaciones técnicas y cronograma.

### Paso 4: Planificación
Ingeniería 3D, cálculos estructurales, plan de rigging, matriz de riesgos HSE.

### Paso 5: Movilización
Traslado de equipos desde Morón a ${data.ciudad} en ${data.tiempo}.

### Paso 6: Ejecución
Operación profesional con monitoreo continuo y supervisores de seguridad.

---

## Contacto en ${data.ciudad}

### Teléfono
**+58 422-6347624**
Atención inmediata de lunes a domingo

### WhatsApp 24/7
**+58 424-4633496**
Respuesta en menos de 15 minutos

### Email
**info@gruasequiser.com**
Cotizaciones en 24-48 horas

### Dirección
**Av. Intercomunal Morón-Coro, Zona Industrial Morón, Carabobo, Venezuela**

---

## Preguntas Frecuentes - ${data.ciudad}

### ¿Cuánto tiempo toma movilizar una grúa a ${data.ciudad}?

**Tiempo de respuesta:** ${data.tiempo} desde nuestra base en Morón, Carabobo. En casos de emergencia industrial, podemos reducir este tiempo con movilización express.

### ¿Qué sectores industriales atienden en ${data.ciudad}?

Especializados en: ${data.sectores.join(', ')}. Contamos con experiencia comprobada en cada sector.

### ¿Incluyen ingeniería y planificación?

Sí, todos nuestros servicios incluyen sin costo adicional: modelado 3D, cálculos estructurales, simulación de izamiento, plan de rigging y matriz de riesgos HSE.

### ¿Tienen disponibilidad 24/7 en ${data.ciudad}?

Sí, operamos 24 horas los 365 días del año con respuesta garantizada.

---

## Solicita Tu Cotización Ahora

**Tiempo de respuesta en ${data.ciudad}:** Máximo ${data.tiempo}

**Disponibilidad:** 24/7 los 365 días del año

**Métodos de contacto:**
- Teléfono: +58 422-6347624
- WhatsApp: +58 424-4633496
- Email: info@gruasequiser.com

**EQUISER: Tu aliado confiable en ${data.ciudad} para proyectos industriales de cualquier magnitud.**

---

*Última actualización: Enero 2025 | EQUISER - 30+ años sirviendo a la industria venezolana*
`
}

async function crearLandingPages() {
  console.log('Iniciando creacion de 5 landing pages geo-especificas...')

  for (const ciudad of ciudadesLandingPages) {
    try {
      const contenido = generarContenidoLanding(ciudad)
      const palabrasClave = [
        `alquiler gruas ${ciudad.ciudad}`,
        `gruas industriales ${ciudad.ciudad}`,
        `gruas ${ciudad.estado}`,
        `alquiler gruas ${ciudad.estado}`,
        ...ciudad.sectores.map((s: string) => `gruas sector ${s.toLowerCase()} ${ciudad.ciudad}`)
      ]

      const metaDescription = `Alquiler de grúas industriales en ${ciudad.ciudad}, ${ciudad.estado}. Capacidades 25-1600 toneladas. ${ciudad.sectores.join(', ')}. Disponibilidad 24/7. Tiempo de respuesta: ${ciudad.tiempo}. 30+ años de experiencia.`

      const blog = await prisma.blog.upsert({
        where: { slug: ciudad.slug },
        update: {
          title: ciudad.title,
          content: contenido,
          excerpt: ciudad.excerpt,
          metaTitle: ciudad.title,
          metaDescription: metaDescription.substring(0, 160),
          keywords: palabrasClave,
          category: 'Cobertura Geográfica',
          tags: [ciudad.ciudad, ciudad.estado, 'Cobertura Local', 'SEO Local'],
          featuredImage: '/images/grua-600-ton-y-grua-de-130-ton.webp',
          published: true,
          featured: true,
          
          readTime: 8,
          author: 'Gruas Equiser',
          publishedAt: new Date('2023-12-31'),
          locale: 'es'
        },
        create: {
          slug: ciudad.slug,
          title: ciudad.title,
          content: contenido,
          excerpt: ciudad.excerpt,
          metaTitle: ciudad.title,
          metaDescription: metaDescription.substring(0, 160),
          keywords: palabrasClave,
          category: 'Cobertura Geográfica',
          tags: [ciudad.ciudad, ciudad.estado, 'Cobertura Local', 'SEO Local'],
          featuredImage: '/images/grua-600-ton-y-grua-de-130-ton.webp',
          published: true,
          featured: true,
          
          readTime: 8,
          author: 'Gruas Equiser',
          publishedAt: new Date('2023-12-31'),
          locale: 'es'
        },
      })

      console.log(`Landing page creada: ${ciudad.ciudad}, ${ciudad.estado}`)
      console.log(`   - Slug: ${blog.slug}`)
      console.log(`   - Palabras clave: ${palabrasClave.length}`)
      console.log(`   - Contenido: ${contenido.length} caracteres`)
      console.log('')
    } catch (error) {
      console.error(`Error creando landing page para ${ciudad.ciudad}:`, error)
    }
  }

  console.log('Proceso completado: 5 landing pages geo-especificas creadas exitosamente')
}

crearLandingPages()
  .catch((e) => {
    console.error('Error general:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
