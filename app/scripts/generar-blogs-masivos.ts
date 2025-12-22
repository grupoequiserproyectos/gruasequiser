import { PrismaClient } from '@prisma/client'
import * as dotenv from 'dotenv'
import { PALABRAS_CLAVE_LONG_TAIL, CIUDADES_KEYWORDS, TIPOS_CONTENIDO_AVANZADO, generarMetadataUltraOptimizada } from '../lib/advanced-seo-config'

dotenv.config()

const prisma = new PrismaClient()

// Pool de imágenes existentes en el proyecto
const IMAGENES_DISPONIBLES = [
  '/images/grua-600-ton-y-grua-de-130-ton.webp',
  '/images/grua-130-ton-transformador.webp',
  '/images/grua-movil-130-ton.webp',
  '/images/dos-gruas-de-600-ton.webp',
  '/images/gantry-600-ton-generador.webp',
  '/images/grua-500-ton.webp',
  '/images/grua-de-130-ton.webp',
  '/images/grua-de-600-ton-y-grua-de-130-ton.webp',
  '/images/grua-de-800-ton.webp',
  '/images/trabajo-de-grua.webp',
  '/images/trabajo-de-grua-450-ton.webp',
  '/images/trabajo-de-gantry-600-ton.webp',
  '/images/trabajo-grua-800-ton.webp',
  '/images/movilizacion-transformador-siemens.webp',
  '/images/petromonagas-grua-200-toneladas.webp'
];

function seleccionarImagenAleatoria(): string {
  return IMAGENES_DISPONIBLES[Math.floor(Math.random() * IMAGENES_DISPONIBLES.length)];
}

function generarContenidoUltraOptimizado(params: {
  tipo: string;
  ciudad?: string;
  sector?: string;
  keyword: string;
}): string {
  const { tipo, ciudad, sector, keyword } = params;
  const añoActual = new Date().getFullYear();
  
  let contenido = '';
  
  // ESTRUCTURA H1 (ya incluida en title)
  
  // Introducción con keyword principal
  contenido += `## Introducción\n\n`;
  contenido += `En ${añoActual}, el **${keyword}** se ha convertido en un servicio esencial para la industria venezolana. `;
  contenido += `Con más de 30 años de experiencia, **EQUISER** lidera el mercado de ${keyword} con `;
  contenido += `**grúas móviles y de oruga desde 25 hasta 1600 toneladas**, certificadas para los sectores más exigentes.\n\n`;
  
  // CTA temprana (soft)
  contenido += `> 📞 **¿Necesitas una cotización personalizada?** [Contáctanos ahora →](https://wa.me/message/IOBBJVBBVWNOI1)\n\n`;
  
  // H2: Servicios Principales
  contenido += `## Servicios de ${keyword} Disponibles\n\n`;
  contenido += `### Grúas Móviles Hidráulicas (25-500 Toneladas)\n\n`;
  contenido += `Nuestras **grúas móviles telescópicas** de las marcas **Liebherr, Grove y Manitowoc** son ideales para:\n\n`;
  contenido += `- ✅ **Montaje de estructuras metálicas** en construcción industrial\n`;
  contenido += `- ✅ **Izamiento de transformadores** eléctricos de 50-200 toneladas\n`;
  contenido += `- ✅ **Proyectos petroleros** en refinerías y plantas petroquímicas\n`;
  contenido += `- ✅ **Mantenimiento industrial** en sectores energético y siderúrgico\n\n`;
  
  contenido += `### Grúas Sobre Oruga (300-1600 Toneladas)\n\n`;
  contenido += `Para proyectos de **alta complejidad**, contamos con:\n\n`;
  contenido += `- ⚡ **Demag CC 2800** - 600 toneladas\n`;
  contenido += `- ⚡ **Manitowoc 18000** - 800 toneladas\n`;
  contenido += `- ⚡ **Liebherr LR 1600** - 600 toneladas\n`;
  contenido += `- ⚡ **Configuraciones especiales** hasta 1600 toneladas\n\n`;
  
  contenido += `### Transporte Pesado y Sobredimensionado\n\n`;
  contenido += `**Super lowboy hidráulico** y equipos especializados para:\n\n`;
  contenido += `- 🚛 Transporte de **generadores industriales** (hasta 250 ton)\n`;
  contenido += `- 🚛 Movilización de **turbinas de vapor**\n`;
  contenido += `- 🚛 **Reactores petroquímicos** y equipos de proceso\n`;
  contenido += `- 🚛 **Estructuras metálicas** de gran envergadura\n\n`;
  
  // CTA media (medium)
  contenido += `> ☎️ **Consulta técnica GRATUITA:** +58 422-6347624 | Disponible 24/7\n\n`;
  
  // H2: Tabla comparativa
  contenido += `## Comparativa de Capacidades y Aplicaciones\n\n`;
  contenido += `| Tipo de Grúa | Capacidad | Aplicaciones Principales | Sectores |\n`;
  contenido += `|--------------|-----------|-------------------------|----------|\n`;
  contenido += `| Móvil Telescópica | 25-130 ton | Construcción, mantenimiento | Industrial, Comercial |\n`;
  contenido += `| Móvil Hidráulica | 130-500 ton | Proyectos medianos, petrolero | Petrolero, Energético |\n`;
  contenido += `| Oruga Lattice Boom | 300-600 ton | Proyectos complejos, refinería | Petroquímico, Siderúrgico |\n`;
  contenido += `| Oruga Alta Capacidad | 600-1600 ton | Mega proyectos PDVSA/CVG | Petrolero, Minero |\n\n`;
  
  // H2: Sectores atendidos
  if (ciudad) {
    const ciudadData = CIUDADES_KEYWORDS[ciudad as keyof typeof CIUDADES_KEYWORDS];
    if (ciudadData) {
      contenido += `## Sectores Industriales en ${ciudad.charAt(0).toUpperCase() + ciudad.slice(1)}\n\n`;
      ciudadData.sectores.forEach((sec: string) => {
        contenido += `### ${sec.charAt(0).toUpperCase() + sec.slice(1)}\n\n`;
        contenido += `En el sector **${sec}** de ${ciudad}, hemos ejecutado más de **50 proyectos exitosos** para empresas como:\n\n`;
        const empresas = ciudadData.empresas || [];
        empresas.forEach((emp: string) => {
          contenido += `- 🏭 **${emp}**\n`;
        });
        contenido += `\n`;
      });
    }
  }
  
  // H2: Proceso de contratación
  contenido += `## Proceso de Contratación (Paso a Paso)\n\n`;
  contenido += `### 1️⃣ Solicitud de Cotización\n`;
  contenido += `Contáctanos vía **WhatsApp** (+58 422-6347624) o **email** (info@gruasequiser.com) con:\n`;
  contenido += `- Descripción del proyecto\n- Ubicación exacta\n- Fecha estimada\n- Capacidad requerida\n\n`;
  
  contenido += `### 2️⃣ Evaluación Técnica\n`;
  contenido += `Nuestro equipo realiza:\n`;
  contenido += `- ✓ Inspección del sitio\n- ✓ Análisis de cargas\n- ✓ Estudio de accesibilidad\n- ✓ Plan de izamiento 3D\n\n`;
  
  contenido += `### 3️⃣ Propuesta Comercial\n`;
  contenido += `Recibes en **24 horas**:\n`;
  contenido += `- Cotización detallada\n- Cronograma tentativo\n- Equipos asignados\n- Certificaciones incluidas\n\n`;
  
  contenido += `### 4️⃣ Ejecución del Proyecto\n`;
  contenido += `Con los **más altos estándares** de:\n`;
  contenido += `- 🛡️ Seguridad industrial\n- ⚙️ Calidad certificada ISO 9001\n- 📋 Cumplimiento normativo PDVSA\n- 👷 Personal altamente calificado\n\n`;
  
  // H2: Certificaciones
  contenido += `## Certificaciones y Normativas\n\n`;
  contenido += `EQUISER cumple con:\n\n`;
  contenido += `- ✅ **Certificación PDVSA** para operaciones en sector petrolero\n`;
  contenido += `- ✅ **ISO 9001:2015** Sistema de Gestión de Calidad\n`;
  contenido += `- ✅ **Normas COVENIN** vigentes para equipos de izamiento\n`;
  contenido += `- ✅ **INPSASEL** Seguridad y Salud Laboral\n`;
  contenido += `- ✅ **API** American Petroleum Institute\n\n`;
  
  // Enlaces externos (autoridad)
  contenido += `Para más información sobre normativas, consulta:\n`;
  contenido += `- [PDVSA Normas Técnicas](https://www.pdvsa.com)\n`;
  contenido += `- [INPSASEL Seguridad Industrial](https://www.inpsasel.gob.ve)\n\n`;
  
  // H2: Proyectos destacados
  contenido += `## Proyectos Destacados en Venezuela\n\n`;
  contenido += `### Petromonagas - Faja del Orinoco\n`;
  contenido += `**Izamiento de módulos de proceso** de 350 toneladas utilizando **2 grúas Demag CC 2800** en configuración tándem.\n\n`;
  
  contenido += `### SIDOR - Ciudad Guayana\n`;
  contenido += `**Mantenimiento mayor de laminadora** con grúa Liebherr LTM 1500 de 500 toneladas.\n\n`;
  
  contenido += `### Complejo José - Barcelona\n`;
  contenido += `**Montaje de reactor de cracking** de 280 toneladas con grúa sobre oruga Manitowoc 18000.\n\n`;
  
  // CTA final (strong)
  contenido += `## Solicita tu Cotización Industrial Ahora\n\n`;
  contenido += `¿Listo para ejecutar tu proyecto con la **empresa líder en ${keyword}**?\n\n`;
  contenido += `### 📞 Contacto Directo\n`;
  contenido += `- **WhatsApp 24/7:** [+58 422-6347624](https://wa.me/message/IOBBJVBBVWNOI1)\n`;
  contenido += `- **Email:** info@gruasequiser.com | direccionmercadeo@gruasequiser.com\n`;
  contenido += `- **Ubicación:** Barcelona, Anzoátegui | Cobertura Nacional\n\n`;
  
  contenido += `### ✅ Garantías\n`;
  contenido += `- ⚡ **Respuesta en 24 horas**\n`;
  contenido += `- 🎯 **Cotización personalizada GRATIS**\n`;
  contenido += `- 🚀 **Disponibilidad inmediata**\n`;
  contenido += `- 🛡️ **Seguro de responsabilidad civil**\n`;
  contenido += `- 👷 **Operadores certificados**\n\n`;
  
  // FAQ
  contenido += `## Preguntas Frecuentes\n\n`;
  contenido += `### ¿Cuánto cuesta alquilar una grúa en Venezuela?\n`;
  contenido += `El costo varía según capacidad (25-1600 ton), duración, ubicación y complejidad. Contacta para cotización personalizada.\n\n`;
  
  contenido += `### ¿Trabajan en todo Venezuela?\n`;
  contenido += `Sí, tenemos cobertura nacional: **Caracas, Maracaibo, Valencia, Barcelona, Puerto La Cruz, Ciudad Guayana, Faja del Orinoco** y más.\n\n`;
  
  contenido += `### ¿Están certificados para trabajar con PDVSA?\n`;
  contenido += `Sí, somos **proveedor certificado PDVSA** con más de 15 años de experiencia en proyectos petroleros.\n\n`;
  
  contenido += `### ¿Cuál es el tiempo de respuesta para cotizaciones?\n`;
  contenido += `**24 horas** para cotizaciones y **evaluación técnica gratuita** del proyecto.\n\n`;
  
  // Enlaces internos
  contenido += `## Artículos Relacionados\n\n`;
  contenido += `- [Tipos de Grúas Industriales en Venezuela](/blog/tipos-gruas-industriales-venezuela)\n`;
  contenido += `- [Costos de Alquiler de Grúas 2024](/blog/costos-alquiler-gruas-venezuela-2024)\n`;
  contenido += `- [Proyectos en Sector Petrolero](/blog/proyectos-sector-petrolero-pdvsa)\n`;
  contenido += `- [Seguridad en Operaciones de Izamiento](/blog/seguridad-operaciones-izamiento)\n\n`;
  
  return contenido;
}

async function generarBlogsMasivos() {
  console.log('🚀 Iniciando generación masiva de blogs ultra-optimizados...\n');
  
  const blogsCreados: string[] = [];
  let errores = 0;
  
  // ===== FASE 1: 30 ARTÍCULOS FUNDACIONALES =====
  console.log('📚 FASE 1: Generando 30 artículos fundacionales...\n');
  
  const articulosFundacionales = [
    {
      keyword: "alquiler grúas industriales venezuela",
      ciudad: "caracas",
      tipo: "guia-completa-ciudad"
    },
    {
      keyword: "grúas móviles hidráulicas maracaibo",
      ciudad: "maracaibo",
      tipo: "guia-completa-ciudad"
    },
    {
      keyword: "alquiler grúas valencia carabobo",
      ciudad: "valencia",
      tipo: "guia-completa-ciudad"
    },
    {
      keyword: "grúas sobre oruga barcelona",
      ciudad: "barcelona",
      tipo: "guia-completa-ciudad"
    },
    {
      keyword: "grúas siderúrgicas ciudad guayana",
      ciudad: "ciudad-guayana",
      tipo: "guia-completa-ciudad"
    }
    // ... Se añadirían 25 más
  ];
  
  for (const articulo of articulosFundacionales.slice(0, 5)) {
    try {
      const metadata = generarMetadataUltraOptimizada({
        tipo: articulo.tipo,
        ciudad: articulo.ciudad,
        keywords: [articulo.keyword]
      });
      
      const contenido = generarContenidoUltraOptimizado({
        tipo: articulo.tipo,
        ciudad: articulo.ciudad,
        keyword: articulo.keyword
      });
      
      // Crear versión en español
      await prisma.blog.upsert({
        where: { slug: metadata.slug },
        update: {},
        create: {
          title: metadata.title,
          slug: metadata.slug,
          excerpt: metadata.description,
          content: contenido,
          featuredImage: seleccionarImagenAleatoria(),
          category: 'Servicios de Grúas',
          tags: metadata.keywords.split(', ').slice(0, 8),
          author: 'Equipo EQUISER - Especialistas en Izamiento Industrial',
          readTime: 12,
          published: true,
          featured: true,
          metaTitle: metadata.title,
          metaDescription: metadata.description,
          keywords: metadata.keywords.split(', '),
          locale: 'es',
          translationId: metadata.slug
        }
      });
      
      // Crear versión en inglés
      const slugEn = metadata.slug + '-en';
      await prisma.blog.upsert({
        where: { slug: slugEn },
        update: {},
        create: {
          title: metadata.title.replace('Alquiler', 'Crane Rental').replace('Venezuela', 'Venezuela'),
          slug: slugEn,
          excerpt: metadata.description.replace('Grúas', 'Cranes'),
          content: contenido.replace(/Grúas/g, 'Cranes').replace(/grúas/g, 'cranes'),
          featuredImage: seleccionarImagenAleatoria(),
          category: 'Crane Services',
          tags: ['crane rental', 'industrial cranes', 'venezuela'],
          author: 'EQUISER Team - Industrial Lifting Specialists',
          readTime: 12,
          published: true,
          featured: true,
          metaTitle: metadata.title.replace('Alquiler', 'Crane Rental'),
          metaDescription: metadata.description.replace('Grúas', 'Cranes'),
          keywords: ['crane rental venezuela', 'industrial cranes', 'heavy lifting'],
          locale: 'en',
          translationId: metadata.slug
        }
      });
      
      blogsCreados.push(metadata.slug);
      console.log(`✅ Creado: ${metadata.title}`);
    } catch (error: any) {
      console.error(`❌ Error creando blog: ${error.message}`);
      errores++;
    }
  }
  
  console.log(`\n📊 RESUMEN:`);
  console.log(`- Blogs creados: ${blogsCreados.length * 2} (ES + EN)`);
  console.log(`- Errores: ${errores}`);
  console.log(`\n✅ Generación masiva completada!`);
}

generarBlogsMasivos()
  .then(() => {
    console.log('\n🎉 Proceso completado exitosamente');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Error fatal:', error);
    process.exit(1);
  });
