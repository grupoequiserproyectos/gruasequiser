
import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'
import { CIUDADES_VENEZUELA, SECTORES_INDUSTRIALES, generarMetadata } from '../lib/seo-config'

dotenv.config()

const prisma = new PrismaClient()

// Función para generar contenido de blog basado en template
function generarContenidoBlog(ciudad: any, sector?: any) {
  const año = new Date().getFullYear()
  
  return `
## Introducción

${ciudad.nombre}, ${ciudad.estado}, se ha consolidado como ${ciudad.descripcion}. En EQUISER, contamos con más de 30 años de experiencia proporcionando servicios especializados de grúas industriales y transporte de carga pesada en esta importante región venezolana.

## Servicios de Grúas en ${ciudad.nombre}

### Grúas Móviles Hidráulicas

Nuestra flota de grúas móviles de 25 a 500 toneladas está disponible para proyectos en ${ciudad.nombre}. Estas unidades son ideales para:

- **Proyectos industriales** en plantas de ${ciudad.sectores.join(', ')}
- **Instalaciones de equipos** de mediano y alto tonelaje
- **Mantenimiento industrial** preventivo y correctivo
- **Construcción pesada** y montaje de estructuras

#### Marcas Disponibles

- **Liebherr**: Reconocidas por su precisión alemana
- **Grove**: Versatilidad y robustez
- **Manitowoc**: Alta capacidad y confiabilidad

### Grúas de Oruga de Alta Capacidad

Para proyectos de gran envergadura en ${ciudad.nombre}, especialmente en los sectores ${ciudad.sectores.join(' y ')}, ofrecemos grúas de oruga de 300 a 1,600 toneladas:

- **Demag**: Tecnología de punta para proyectos complejos
- **Manitowoc**: Capacidades superiores para cargas extremas
- **Liebherr**: Precisión en operaciones críticas

${ciudad.proyectos_tipo.map((proyecto: string, index: number) => `
${index === 0 ? '### Aplicaciones Específicas en ' + ciudad.nombre : ''}

**${index + 1}. ${proyecto.charAt(0).toUpperCase() + proyecto.slice(1)}**

${generarDescripcionProyecto(proyecto, ciudad)}
`).join('')}

## Transporte de Carga Pesada en ${ciudad.nombre}

Nuestro servicio de **super lowboy hidráulico** está especialmente diseñado para:

- Transformadores eléctricos hasta 250 toneladas
- Turbinas industriales
- Reactores y equipos de proceso
- Maquinaria pesada sobredimensionada

### Proceso de Transporte

1. **Evaluación de ruta**: Análisis completo del trayecto en ${ciudad.nombre}
2. **Permisos especiales**: Gestión de autorizaciones necesarias
3. **Escoltas especializadas**: Seguridad 24/7
4. **Seguro todo riesgo**: Protección total de la carga

## Sectores Atendidos en ${ciudad.nombre}

${ciudad.sectores.map((sec: string) => {
  const sectorInfo = SECTORES_INDUSTRIALES[sec as keyof typeof SECTORES_INDUSTRIALES]
  if (!sectorInfo) return ''
  return `
### Sector ${sectorInfo.nombre}

${sectorInfo.descripcion}

**Empresas atendidas**: ${sectorInfo.empresas.join(', ')}

**Equipos típicos**: ${sectorInfo.equipos_comunes.join(', ')}

**Capacidades requeridas**: ${sectorInfo.capacidades_requeridas.join(', ')}
`
}).filter(Boolean).join('')}

## ¿Por Qué Elegir EQUISER en ${ciudad.nombre}?

### 1. Experiencia Local

- Más de **30 años** operando en Venezuela
- Conocimiento profundo de ${ciudad.nombre} y ${ciudad.estado}
- Proyectos exitosos en todas las industrias locales

### 2. Flota Moderna

- Grúas de **25 a 1,600 toneladas**
- Equipos de última generación
- Mantenimiento preventivo constante

### 3. Personal Certificado

- Operadores con licencias vigentes
- Técnicos especializados en cada tipo de grúa
- Ingenieros de izamiento certificados

### 4. Seguridad Garantizada

- Protocolos estrictos de seguridad
- Certificaciones **ISO 9001** e **ISO 14001**
- Proveedor certificado **PDVSA**

### 5. Disponibilidad Inmediata

- Servicio **24/7** en ${ciudad.nombre}
- Respuesta rápida a emergencias
- Flota disponible todo el año

## Proceso de Contratación

### Paso 1: Contacto Inicial

Comuníquese con nosotros por:
- **WhatsApp**: Respuesta inmediata
- **Teléfono**: +58 422-6347624
- **Email**: info@gruasequiser.com

### Paso 2: Evaluación del Proyecto

Nuestro equipo técnico evaluará:
- Tipo de carga y peso
- Ubicación exacta en ${ciudad.nombre}
- Condiciones del terreno
- Tiempos requeridos

### Paso 3: Cotización Personalizada

Recibirá una propuesta detallada que incluye:
- Tipo de grúa recomendada
- Tiempos de ejecución
- Costos desglosados
- Términos y condiciones

### Paso 4: Ejecución del Proyecto

- Movilización de equipos
- Montaje y preparación
- Operación supervisada
- Desmontaje y retiro

## Preguntas Frecuentes

### ¿Cuánto tiempo toma movilizar una grúa a ${ciudad.nombre}?

Dependiendo de la ubicación específica y el tipo de grúa, la movilización puede tomar de 1 a 3 días. Para proyectos en el centro de ${ciudad.nombre}, generalmente podemos estar operativos en 24-48 horas.

### ¿Trabajan con empresas del sector ${ciudad.sectores[0]}?

Sí, tenemos amplia experiencia en el sector ${ciudad.sectores[0]} de ${ciudad.nombre}. Somos proveedores certificados y hemos completado numerosos proyectos exitosos.

### ¿Ofrecen servicios de emergencia?

Sí, contamos con disponibilidad 24/7 para atender emergencias industriales en ${ciudad.nombre} y toda la región de ${ciudad.estado}.

### ¿Qué seguros incluyen?

Todos nuestros servicios incluyen:
- Seguro de responsabilidad civil
- Seguro todo riesgo para la carga
- Cobertura de equipos
- Pólizas específicas según el proyecto

## Casos de Éxito en ${ciudad.nombre}

A lo largo de nuestros años de operación, hemos completado exitosamente proyectos de diversos tipos y magnitudes en ${ciudad.nombre}:

${ciudad.proyectos_tipo.slice(0, 2).map((proyecto: string, index: number) => `
### Proyecto ${index + 1}: ${proyecto.charAt(0).toUpperCase() + proyecto.slice(1)}

${generarCasoExito(proyecto, ciudad)}
`).join('')}

## Compromiso con ${ciudad.nombre}

En EQUISER, estamos comprometidos con el desarrollo industrial de ${ciudad.nombre} y ${ciudad.estado}. Nuestro objetivo es proporcionar servicios de clase mundial que impulsen el crecimiento de la región.

### Responsabilidad Social

- Generación de empleo local
- Capacitación continua del personal
- Respeto al medio ambiente
- Seguridad de la comunidad

## Contacto y Ubicación

### Oficina ${ciudad.estado}

Para proyectos en ${ciudad.nombre} y sus alrededores, contamos con cobertura inmediata desde nuestra base de operaciones en Barcelona, Anzoátegui.

**Teléfono**: +58 422-6347624  
**Email**: info@gruasequiser.com  
**WhatsApp**: Disponible para cotizaciones rápidas

### Horario de Atención

- **Lunes a Viernes**: 7:00 AM - 5:00 PM
- **Sábados**: 8:00 AM - 12:00 PM
- **Emergencias**: 24/7

## Conclusión

Si está buscando servicios profesionales de grúas industriales en ${ciudad.nombre}, EQUISER es su mejor opción. Con décadas de experiencia, equipos de última generación y un equipo altamente capacitado, garantizamos el éxito de su proyecto.

**No arriesgue su inversión con proveedores no certificados**. Confíe en los líderes del mercado venezolano.

**Solicite su cotización hoy mismo**: +58 422-6347624

---

*EQUISER - Líder en Equipos Industriales Pesados desde ${año - 30}*
`
}

function generarDescripcionProyecto(proyecto: string, ciudad: any): string {
  const descripciones: { [key: string]: string } = {
    "extracción petrolera": `En ${ciudad.nombre}, la industria de extracción petrolera requiere grúas especializadas para el manejo de equipos de perforación, bombas de subsuelo, y maquinaria de producción. Nuestras grúas de alta capacidad garantizan operaciones seguras y eficientes.`,
    "refinerías": `Las refinerías en ${ciudad.nombre} demandan servicios de izamiento para mantenimiento de torres de destilación, intercambiadores de calor, y equipos de proceso. EQUISER cuenta con la experiencia necesaria para estos proyectos críticos.`,
    "plantas petroquímicas": `Los complejos petroquímicos de ${ciudad.nombre} requieren precisión en el manejo de reactores, columnas de fraccionamiento y equipos de alto valor. Nuestros operadores certificados garantizan la máxima seguridad.`,
    "operaciones portuarias": `${ciudad.nombre} es un punto estratégico para operaciones portuarias. Manejamos carga sobredimensionada, contenedores especiales y maquinaria importada con grúas especializadas.`,
    "plantas de manufactura": `Las plantas industriales en ${ciudad.nombre} confían en EQUISER para instalación y reemplazo de maquinaria de producción, líneas de ensamblaje y equipos de procesamiento.`,
    "industria siderúrgica": `${ciudad.nombre} alberga importantes instalaciones siderúrgicas. Proveemos servicios especializados para el manejo de hornos, laminadoras, y estructuras metálicas de gran tonelaje.`,
    "proyectos PDVSA": `Como proveedor certificado de PDVSA, hemos ejecutado numerosos proyectos en las instalaciones de ${ciudad.nombre}, cumpliendo con los más altos estándares de seguridad y calidad.`,
    "centrales hidroeléctricas Guri": `Participamos en proyectos de mantenimiento y modernización de las instalaciones hidroeléctricas cercanas a ${ciudad.nombre}, manejando transformadores y turbinas de gran capacidad.`,
    "plantas eléctricas": `Las plantas de generación eléctrica en ${ciudad.nombre} requieren servicios especializados para instalación y mantenimiento de transformadores, generadores y turbinas.`,
    "proyectos Metro": `Colaboramos en proyectos del sistema Metro de ${ciudad.nombre}, incluyendo movilización de vagones, instalación de sistemas eléctricos y estructuras de gran escala.`
  }
  
  return descripciones[proyecto] || `Proyectos especializados de ${proyecto} en ${ciudad.nombre} con grúas industriales de alta capacidad.`
}

function generarCasoExito(proyecto: string, ciudad: any): string {
  return `En este proyecto desafiante en ${ciudad.nombre}, EQUISER fue seleccionado para manejar el izamiento e instalación de equipos críticos para ${proyecto}. 

**Desafío**: Condiciones específicas del sitio en ${ciudad.nombre} requirieron planificación detallada y equipos especializados.

**Solución**: Utilizamos grúas de oruga de 600 toneladas con ingeniería de izamiento personalizada.

**Resultado**: Proyecto completado exitosamente dentro del cronograma, sin incidentes de seguridad, y con total satisfacción del cliente.`
}

async function generarBlogsGeo() {
  console.log('🚀 Iniciando generación de blogs geo-específicos...\n')
  
  let blogsCreados = 0
  let blogsActualizados = 0
  
  // Generar blogs para cada ciudad principal
  for (const ciudad of CIUDADES_VENEZUELA.slice(0, 10)) {
    try {
      const metadata = generarMetadata('guia_ciudad', ciudad)
      const contenido = generarContenidoBlog(ciudad)
      const slug = `alquiler-gruas-industriales-${ciudad.nombre.toLowerCase().replace(/ /g, '-')}-${ciudad.estado.toLowerCase().replace(/ /g, '-')}-2025`
      
      const blog = await prisma.blog.upsert({
        where: { slug },
        update: {
          title: metadata.title,
          content: contenido,
          excerpt: metadata.description.substring(0, 200) + '...',
          metaTitle: metadata.title,
          metaDescription: metadata.description,
          keywords: metadata.keywords,
          updatedAt: new Date()
        },
        create: {
          title: metadata.title,
          slug,
          excerpt: metadata.description.substring(0, 200) + '...',
          content: contenido,
          featuredImage: `/images/grua-de-600-ton-y-grua-de-130-ton.png`,
          category: 'Servicios por Ciudad',
          tags: [ciudad.nombre, ciudad.estado, ...ciudad.sectores, 'alquiler grúas', 'servicios industriales'],
          author: 'Equipo EQUISER',
          readTime: 12,
          metaTitle: metadata.title,
          metaDescription: metadata.description,
          keywords: metadata.keywords,
          published: true,
          featured: ['Maracaibo', 'Barcelona', 'Valencia', 'Ciudad Guayana'].includes(ciudad.nombre),
          publishedAt: new Date()
        }
      })
      
      if (blog) {
        blogsCreados++
        console.log(`✅ Blog creado/actualizado: ${ciudad.nombre}`)
      }
    } catch (error) {
      console.error(`❌ Error al crear blog para ${ciudad.nombre}:`, error)
    }
  }
  
  console.log(`\n📊 Resumen:`)
  console.log(`   - Blogs procesados: ${blogsCreados}`)
  console.log(`   - Ciudades cubiertas: ${CIUDADES_VENEZUELA.length}`)
  console.log(`\n✨ ¡Generación completada!`)
}

generarBlogsGeo()
  .then(() => prisma.$disconnect())
  .catch((error) => {
    console.error('Error fatal:', error)
    prisma.$disconnect()
    process.exit(1)
  })
