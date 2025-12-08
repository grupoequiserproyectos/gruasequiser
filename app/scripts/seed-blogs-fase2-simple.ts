import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

// Datos simplificados de los 42 blogs de FASE 2
const blogsFase2 = [
  // GRUPO 1: ESPECIFICACIONES TÉCNICAS
  {
    slug: 'gruas-25-50-toneladas-aplicaciones-especificaciones',
    title: 'Grúas de 25-50 Toneladas: Aplicaciones y Especificaciones Técnicas en Venezuela',
    excerpt: 'Descubra las características, aplicaciones industriales y ventajas de las grúas de 25-50 toneladas para proyectos en Venezuela.',
    category: 'Especificaciones Técnicas',
    tags: ['Grúas 25-50 Toneladas', 'Especificaciones', 'Venezuela'],
    featured: true,
    image: '/images/grua-130-ton-transformador.webp',
    readTime: 12
  },
  {
    slug: 'gruas-50-100-toneladas-proyectos-industriales',
    title: 'Grúas de 50-100 Toneladas para Proyectos Industriales',
    excerpt: 'Características y aplicaciones de grúas de 50-100 toneladas en Venezuela.',
    category: 'Especificaciones Técnicas',
    tags: ['Grúas 50-100 Toneladas', 'Proyectos Industriales'],
    featured: false,
    image: '/images/grua-130-ton-transformador.webp',
    readTime: 10
  },
  {
    slug: 'gruas-300-400-toneladas-caracteristicas-tecnicas',
    title: 'Grúas de 300-400 Toneladas: Características para Mega Proyectos',
    excerpt: 'Especificaciones de grúas de 300-400 toneladas para proyectos industriales.',
    category: 'Especificaciones Técnicas',
    tags: ['Grúas 300-400 Toneladas', 'Mega Proyectos'],
    featured: false,
    image: '/images/grua-500-ton.webp',
    readTime: 11
  },
  {
    slug: 'gruas-800-toneladas-aplicaciones-mega-industria',
    title: 'Grúas de 800+ Toneladas: Aplicaciones en Mega Industria',
    excerpt: 'Las grúas de mayor capacidad en Venezuela para proyectos complejos.',
    category: 'Especificaciones Técnicas',
    tags: ['Grúas 800 Toneladas', 'Ultra Alta Capacidad'],
    featured: false,
    image: '/images/grua-800-ton.webp',
    readTime: 13
  },
  {
    slug: 'comparativa-grua-movil-vs-oruga-venezuela',
    title: 'Comparativa: Grúa Móvil vs Grúa Sobre Oruga',
    excerpt: 'Análisis comparativo entre grúas móviles y grúas sobre oruga.',
    category: 'Guías Técnicas',
    tags: ['Grúa Móvil', 'Grúa Oruga', 'Comparativa'],
    featured: true,
    image: '/images/grua-de-600-ton-y-grua-de-130-ton.webp',
    readTime: 15
  },
  {
    slug: 'sistema-super-lowboy-hidraulico-caracteristicas',
    title: 'Sistema Super Lowboy Hidráulico para Transporte Pesado',
    excerpt: 'Tecnología Super Lowboy para transporte de cargas sobredimensionadas.',
    category: 'Transporte Especializado',
    tags: ['Super Lowboy', 'Transporte Pesado'],
    featured: false,
    image: '/images/transporte-250-toneladas.webp',
    readTime: 9
  },
  {
    slug: 'gruas-liebherr-especificaciones-ventajas',
    title: 'Grúas Liebherr: Especificaciones y Ventajas',
    excerpt: 'Análisis de grúas Liebherr: tecnología alemana y rendimiento.',
    category: 'Equipos y Marcas',
    tags: ['Liebherr', 'Grúas Alemanas'],
    featured: false,
    image: '/images/grua-130-ton-transformador.webp',
    readTime: 10
  },
  {
    slug: 'gruas-grove-vs-manitowoc-comparativa',
    title: 'Grúas Grove vs Manitowoc: Comparativa Completa',
    excerpt: 'Comparativa técnica entre grúas Grove y Manitowoc.',
    category: 'Equipos y Marcas',
    tags: ['Grove', 'Manitowoc', 'Comparativa'],
    featured: false,
    image: '/images/dos-gruas-de-600-ton.webp',
    readTime: 11
  },
  
  // GRUPO 2: SECTOR PETROLERO
  {
    slug: 'servicios-gruas-refineria-el-palito-venezuela',
    title: 'Servicios de Grúas para Refinería El Palito',
    excerpt: 'Servicios especializados para Refinería El Palito: mantenimiento y proyectos.',
    category: 'Sector Petrolero',
    tags: ['Refinería El Palito', 'Sector Petrolero', 'PDVSA'],
    featured: true,
    image: '/images/trabajo-petromonagas.webp',
    readTime: 14
  },
  {
    slug: 'izamiento-plantas-petroleo-procedimientos-certificados',
    title: 'Izamiento en Plantas de Petróleo: Procedimientos Certificados',
    excerpt: 'Protocolos certificados de izamiento para plantas petroleras.',
    category: 'Sector Petrolero',
    tags: ['Plantas Petroleras', 'Procedimientos', 'PDVSA'],
    featured: false,
    image: '/images/trabajo-petromonagas.webp',
    readTime: 12
  },
  {
    slug: 'mantenimiento-torres-perforacion-gruas',
    title: 'Mantenimiento de Torres de Perforación con Grúas',
    excerpt: 'Servicios especializados para torres de perforación petroleras.',
    category: 'Sector Petrolero',
    tags: ['Torres Perforación', 'Mantenimiento'],
    featured: false,
    image: '/images/trabajo-petromonagas.webp',
    readTime: 10
  },
  {
    slug: 'transporte-tuberia-petroleo-logistica-especializada',
    title: 'Transporte de Tubería de Petróleo: Logística',
    excerpt: 'Logística especializada de tubería para proyectos petroleros.',
    category: 'Transporte Especializado',
    tags: ['Transporte Tubería', 'Logística'],
    featured: false,
    image: '/images/transporte-pieza-250-ton.webp',
    readTime: 9
  },
  {
    slug: 'soporte-operadoras-petroleras-venezolanas',
    title: 'Soporte Técnico a Operadoras Petroleras',
    excerpt: 'Servicios de soporte para operadoras petroleras en Venezuela.',
    category: 'Sector Petrolero',
    tags: ['Operadoras Petroleras', 'Soporte Técnico'],
    featured: false,
    image: '/images/trabajo-petromonagas.webp',
    readTime: 10
  },
  {
    slug: 'certificaciones-pdvsa-equipos-izamiento',
    title: 'Certificaciones PDVSA para Equipos de Izamiento',
    excerpt: 'Guía de certificaciones PDVSA: normativa SI-S-04 y requisitos.',
    category: 'Normativa y Certificaciones',
    tags: ['Certificaciones PDVSA', 'SI-S-04'],
    featured: false,
    image: '/images/grua-130-ton-transformador.webp',
    readTime: 11
  },
  {
    slug: 'seguridad-operaciones-petromonagas-caso-estudio',
    title: 'Seguridad en Operaciones Petromonagas: Caso de Estudio',
    excerpt: 'Caso de estudio de operaciones en Petromonagas.',
    category: 'Casos de Éxito',
    tags: ['Petromonagas', 'Seguridad Industrial'],
    featured: false,
    image: '/images/proyectos-izamiento-petromonagas.webp',
    readTime: 12
  },
  {
    slug: 'inspeccion-certificacion-gruas-sector-petrolero',
    title: 'Inspección y Certificación de Grúas Sector Petrolero',
    excerpt: 'Procesos de inspección y certificación para sector petrolero.',
    category: 'Normativa y Certificaciones',
    tags: ['Inspección Grúas', 'Certificación'],
    featured: false,
    image: '/images/grua-500-ton.webp',
    readTime: 10
  },
  
  // GRUPO 3: SECTOR PETROQUÍMICO
  {
    slug: 'montaje-reactores-petroquimicos-gruas',
    title: 'Montaje de Reactores Petroquímicos',
    excerpt: 'Servicios de montaje de reactores petroquímicos.',
    category: 'Sector Petroquímico',
    tags: ['Reactores', 'Montaje Industrial'],
    featured: false,
    image: '/images/grua-800-ton.webp',
    readTime: 11
  },
  {
    slug: 'izamiento-destiladores-operaciones-criticas',
    title: 'Izamiento de Destiladores: Operaciones Críticas',
    excerpt: 'Operaciones de izamiento de columnas de destilación.',
    category: 'Sector Petroquímico',
    tags: ['Destiladores', 'Operaciones Críticas'],
    featured: false,
    image: '/images/grua-de-600-ton-y-grua-de-130-ton.webp',
    readTime: 10
  },
  {
    slug: 'pequiven-proyectos-izamiento-industrial',
    title: 'Pequiven: Proyectos de Izamiento Industrial',
    excerpt: 'Servicios especializados para Pequiven: proyectos y modernización.',
    category: 'Sector Petroquímico',
    tags: ['Pequiven', 'Izamiento Industrial'],
    featured: true,
    image: '/images/gantry-600-ton-generador.webp',
    readTime: 13
  },
  {
    slug: 'complejo-jose-servicios-especializados',
    title: 'Complejo José: Servicios Especializados',
    excerpt: 'Servicios de grúas para Complejo José.',
    category: 'Sector Petroquímico',
    tags: ['Complejo José', 'Servicios'],
    featured: false,
    image: '/images/trabajo-de-grua-450-ton.webp',
    readTime: 10
  },
  {
    slug: 'manejo-presion-operaciones-petroquimicas',
    title: 'Manejo de Presión en Operaciones Petroquímicas',
    excerpt: 'Procedimientos de seguridad en operaciones petroquímicas.',
    category: 'Seguridad Industrial',
    tags: ['Manejo Presión', 'Seguridad'],
    featured: false,
    image: '/images/grua-500-ton.webp',
    readTime: 9
  },
  {
    slug: 'ingenieria-3d-proyectos-petroquimicos',
    title: 'Ingeniería 3D para Proyectos Petroquímicos',
    excerpt: 'Simulación 3D en proyectos petroquímicos con LIFTPLANNER.',
    category: 'Tecnología y Software',
    tags: ['Ingeniería 3D', 'Simulación', 'LIFTPLANNER'],
    featured: false,
    image: '/images/ingenieria-3d.webp',
    readTime: 10
  },
  {
    slug: 'transporte-catalizadores-industriales',
    title: 'Transporte de Catalizadores Industriales',
    excerpt: 'Logística especializada para catalizadores.',
    category: 'Transporte Especializado',
    tags: ['Catalizadores', 'Transporte'],
    featured: false,
    image: '/images/transporte-250-toneladas.webp',
    readTime: 9
  },
  
  // GRUPO 4: SECTOR SIDERÚRGICO
  {
    slug: 'sidor-servicios-gruas-especializadas',
    title: 'SIDOR: Servicios de Grúas Especializadas',
    excerpt: 'Servicios especializados para SIDOR y sector siderúrgico.',
    category: 'Sector Siderúrgico',
    tags: ['SIDOR', 'Industria Siderúrgica'],
    featured: true,
    image: '/images/grua-800-ton.webp',
    readTime: 14
  },
  {
    slug: 'izamiento-hornos-siderurgicos',
    title: 'Izamiento de Hornos Siderúrgicos',
    excerpt: 'Procedimientos para izamiento de hornos siderúrgicos.',
    category: 'Sector Siderúrgico',
    tags: ['Hornos Siderúrgicos', 'Izamiento'],
    featured: false,
    image: '/images/grua-de-600-ton-y-grua-de-130-ton.webp',
    readTime: 11
  },
  {
    slug: 'transporte-estructuras-acero-pesado',
    title: 'Transporte de Estructuras de Acero Pesado',
    excerpt: 'Transporte especializado de estructuras de acero.',
    category: 'Transporte Especializado',
    tags: ['Transporte Acero', 'Estructuras Pesadas'],
    featured: false,
    image: '/images/transporte-pieza-250-ton.webp',
    readTime: 9
  },
  {
    slug: 'ciudad-guayana-hub-siderurgico-servicios-gruas',
    title: 'Ciudad Guayana: Hub Siderúrgico',
    excerpt: 'Servicios de grúas en Ciudad Guayana.',
    category: 'Cobertura Geográfica',
    tags: ['Ciudad Guayana', 'Siderúrgico'],
    featured: false,
    image: '/images/grua-movil-130-ton.webp',
    readTime: 10
  },
  {
    slug: 'certificacion-operaciones-siderurgicas',
    title: 'Certificación en Operaciones Siderúrgicas',
    excerpt: 'Normas y certificaciones para sector siderúrgico.',
    category: 'Normativa y Certificaciones',
    tags: ['Certificación', 'Siderúrgico'],
    featured: false,
    image: '/images/grua-130-ton-transformador.webp',
    readTime: 9
  },
  {
    slug: 'precision-montaje-equipos-siderurgicos',
    title: 'Precisión en Montaje de Equipos Siderúrgicos',
    excerpt: 'Tolerancias y control de calidad en montaje.',
    category: 'Control de Calidad',
    tags: ['Montaje Precisión', 'Control Calidad'],
    featured: false,
    image: '/images/proyecto-seguridad-calidad.webp',
    readTime: 10
  },
  
  // GRUPO 5: SECTOR PORTUARIO
  {
    slug: 'operaciones-portuarias-carga-descarga-especializada',
    title: 'Operaciones Portuarias: Carga y Descarga',
    excerpt: 'Servicios de carga y descarga en puertos.',
    category: 'Sector Portuario',
    tags: ['Operaciones Portuarias', 'Carga'],
    featured: false,
    image: '/images/movilizacion-gruas-izamiento-portuario.webp',
    readTime: 10
  },
  {
    slug: 'puerto-cabello-servicios-izamiento-portuario',
    title: 'Puerto Cabello: Servicios de Izamiento Portuario',
    excerpt: 'Servicios especializados en Puerto Cabello.',
    category: 'Sector Portuario',
    tags: ['Puerto Cabello', 'Izamiento Portuario'],
    featured: true,
    image: '/images/movilizacion-gruas-izamiento-portuario.webp',
    readTime: 12
  },
  {
    slug: 'puerto-la-cruz-operaciones-carga-pesada',
    title: 'Puerto La Cruz: Operaciones de Carga Pesada',
    excerpt: 'Servicios de grúas en Puerto La Cruz.',
    category: 'Cobertura Geográfica',
    tags: ['Puerto La Cruz', 'Carga Pesada'],
    featured: false,
    image: '/images/movilizacion-gruas-izamiento-portuario.webp',
    readTime: 9
  },
  {
    slug: 'la-guaira-transporte-logistica-portuaria',
    title: 'La Guaira: Transporte y Logística Portuaria',
    excerpt: 'Servicios de transporte en Puerto La Guaira.',
    category: 'Cobertura Geográfica',
    tags: ['La Guaira', 'Logística Portuaria'],
    featured: false,
    image: '/images/movilizacion-gruas-izamiento-portuario.webp',
    readTime: 9
  },
  {
    slug: 'vagones-metro-transporte-especializado',
    title: 'Vagones de Metro: Transporte Especializado',
    excerpt: 'Transporte y montaje de vagones de metro.',
    category: 'Proyectos Especiales',
    tags: ['Vagones Metro', 'Transporte'],
    featured: false,
    image: '/images/movilizacion-vagones-metro.webp',
    readTime: 10
  },
  {
    slug: 'sistemas-gantry-puertos-instalacion-operacion',
    title: 'Sistemas Gantry para Puertos',
    excerpt: 'Instalación de grúas gantry en puertos.',
    category: 'Equipamiento Portuario',
    tags: ['Grúas Gantry', 'Instalación'],
    featured: false,
    image: '/images/gantry-600-ton-generador.webp',
    readTime: 11
  },
  {
    slug: 'movilizacion-contenedores-sobredimensionados',
    title: 'Movilización de Contenedores Sobredimensionados',
    excerpt: 'Movilización de contenedores sobredimensionados.',
    category: 'Logística Portuaria',
    tags: ['Contenedores', 'Movilización'],
    featured: false,
    image: '/images/transporte-carga-sobredimensionada.webp',
    readTime: 9
  },
  
  // GRUPO 6: TECNOLOGÍA Y EQUIPAMIENTO
  {
    slug: 'sistema-monitoreo-satelital-ventajas-funcionamiento',
    title: 'Sistema de Monitoreo Satelital GPS',
    excerpt: 'Sistema de monitoreo satelital para grúas.',
    category: 'Tecnología y Software',
    tags: ['Monitoreo Satelital', 'GPS'],
    featured: false,
    image: '/images/grua-movil-130-ton.webp',
    readTime: 9
  },
  {
    slug: 'software-liftplanner-analisis-cargas',
    title: 'Software LIFTPLANNER: Análisis de Cargas',
    excerpt: 'LIFTPLANNER para simulación 3D de izamientos.',
    category: 'Tecnología y Software',
    tags: ['LIFTPLANNER', 'Simulación 3D'],
    featured: true,
    image: '/images/ingenieria-3d.webp',
    readTime: 11
  },
  {
    slug: 'autocad-solidworks-proyectos-izamiento',
    title: 'AutoCAD y SolidWorks en Proyectos de Izamiento',
    excerpt: 'Uso de AutoCAD y SolidWorks en proyectos.',
    category: 'Tecnología y Software',
    tags: ['AutoCAD', 'SolidWorks'],
    featured: false,
    image: '/images/ingenieria-3d.webp',
    readTime: 9
  },
  {
    slug: 'analisis-estructuras-3d-metodologia-equiser',
    title: 'Análisis de Estructuras en 3D',
    excerpt: 'Metodología EQUISER de análisis estructural 3D.',
    category: 'Ingeniería y Diseño',
    tags: ['Análisis Estructural', '3D'],
    featured: false,
    image: '/images/ingenieria-3d.webp',
    readTime: 10
  },
  {
    slug: 'permitting-intt-requisitos-procedimientos',
    title: 'Permitting INTT: Requisitos y Procedimientos',
    excerpt: 'Gestión de permisos INTT para transporte pesado.',
    category: 'Normativa y Permisos',
    tags: ['Permisos INTT', 'Transporte Pesado'],
    featured: false,
    image: '/images/transporte-carga-sobredimensionada.webp',
    readTime: 9
  },
  {
    slug: 'estudio-rutas-transporte-pesado-venezuela',
    title: 'Estudio de Rutas para Transporte Pesado',
    excerpt: 'Planificación de rutas para transporte pesado.',
    category: 'Logística y Planificación',
    tags: ['Estudio Rutas', 'Transporte'],
    featured: false,
    image: '/images/transporte-250-toneladas.webp',
    readTime: 9
  },
];

// Contenido base genérico
const generateContent = (title: string, category: string) => `
# ${title}

En EQUISER, con más de 30 años de experiencia en el sector industrial venezolano, ofrecemos soluciones especializadas de izamiento que garantizan seguridad, eficiencia y cumplimiento normativo en cada proyecto.

## Introducción

Nuestros servicios de ${category.toLowerCase()} se caracterizan por equipos certificados, personal calificado con credenciales INCES, tecnología de punta con software LIFTPLANNER y cobertura nacional en todo el territorio venezolano.

## Aplicaciones Industriales

- **Sector Petrolero**: Operaciones en refinerías y plantas de proceso
- **Sector Petroquímico**: Montaje de reactores y columnas de destilación
- **Sector Siderúrgico**: Izamiento de equipos de gran tonelaje
- **Sector Eléctrico**: Instalación de transformadores
- **Infraestructura**: Proyectos de construcción y modernización

## Normas y Certificaciones

Cumplimos con:
- PDVSA SI-S-04: Izamiento de Cargas
- ISO 9001:2015: Gestión de Calidad
- COVENIN 2500: Grúas y equipos
- LOPCYMAT: Seguridad laboral

## Ventajas EQUISER

1. Experiencia: 30+ años en Venezuela
2. Flota: Grúas de 25 a 1600 toneladas
3. Personal certificado 100%
4. Tecnología avanzada
5. Servicio 24/7

---

**EQUISER - Grúas y Equipos Especializados**
📞 +58 424-4276624
📧 operaciones@gruasequiser.com
🌐 www.gruasequiser.com
`;

async function main() {
  console.log('🚀 Iniciando seeding FASE 2...\n');
  
  let created = 0;
  let updated = 0;
  let errors = 0;

  for (const blog of blogsFase2) {
    try {
      const content = generateContent(blog.title, blog.category);
      const keywords = blog.tags.concat(['EQUISER', 'Venezuela', 'grúas industriales']);
      
      const result = await prisma.blog.upsert({
        where: { slug: blog.slug },
        update: {
          title: blog.title,
          content: content,
          excerpt: blog.excerpt,
          category: blog.category,
          tags: blog.tags,
          featuredImage: blog.image,
          metaTitle: blog.title.substring(0, 60),
          metaDescription: blog.excerpt.substring(0, 160),
          keywords: keywords,
          readTime: blog.readTime,
          published: true,
          featured: blog.featured,
          locale: 'es',
        },
        create: {
          slug: blog.slug,
          title: blog.title,
          content: content,
          excerpt: blog.excerpt,
          category: blog.category,
          tags: blog.tags,
          featuredImage: blog.image,
          author: 'EQUISER Equipo Técnico',
          publishedAt: new Date('2024-12-08'),
          metaTitle: blog.title.substring(0, 60),
          metaDescription: blog.excerpt.substring(0, 160),
          keywords: keywords,
          readTime: blog.readTime,
          published: true,
          featured: blog.featured,
          locale: 'es',
        },
      });

      created++;
      console.log(`✅ ${created}. ${blog.title.substring(0, 50)}...`);
    } catch (error: any) {
      errors++;
      console.error(`❌ Error: ${blog.slug}:`, error.message);
    }
  }

  console.log(`\n📊 RESUMEN:`);
  console.log(`✅ Creados/Actualizados: ${created}`);
  console.log(`❌ Errores: ${errors}`);
  console.log(`\n✅ FASE 2 completada!\n`);
}

main()
  .catch((e) => {
    console.error('Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
