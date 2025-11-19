import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const initialBlogs = [
  {
    title: "Alquiler de Grúas Industriales en Venezuela: Guía Completa 2024",
    slug: "alquiler-gruas-industriales-venezuela",
    excerpt: "Descubre todo sobre el alquiler de grúas industriales en Venezuela: tipos, capacidades, costos y cómo elegir el equipo perfecto para tu proyecto.",
    content: `# Alquiler de Grúas Industriales en Venezuela: Guía Completa 2024

El **alquiler de grúas industriales** es una solución estratégica para empresas que requieren equipos especializados de izamiento sin la inversión de adquirir maquinaria propia. En Venezuela, EQUISER se posiciona como líder en este servicio, ofreciendo una flota diversificada y personal altamente capacitado.

## ¿Por Qué Alquilar una Grúa en Lugar de Comprarla?

El alquiler de grúas representa un ahorro significativo frente a la compra y ofrece múltiples ventajas operacionales y económicas.

### Ventajas Económicas

- **Inversión inicial cero**: No necesitas desembolsar millones en equipos especializados
- **Sin costos de mantenimiento**: El proveedor asume reparaciones, inspecciones y certificaciones
- **Flexibilidad financiera**: Pagas solo por el tiempo que utilizas el equipo
- **Deducción fiscal**: Los costos de alquiler son gastos operativos deducibles

### Ventajas Operacionales

- **Acceso a tecnología de punta**: Equipos modernos sin obsolescencia
- **Operadores certificados incluidos**: Personal experto garantiza seguridad y eficiencia
- **Soporte técnico 24/7**: Asistencia inmediata ante cualquier eventualidad
- **Adaptabilidad**: Puedes cambiar de equipo según las necesidades del proyecto

## Tipos de Grúas Disponibles en Venezuela

### 1. Grúas Móviles Hidráulicas

**Capacidades**: 30 a 250 toneladas

Ideales para proyectos que requieren movilidad constante. Su sistema hidráulico permite operaciones precisas y rápidas.

**Aplicaciones típicas**:
- Montaje de estructuras metálicas
- Instalación de equipos industriales
- Construcción de edificios
- Mantenimiento de plantas

### 2. Grúas de Oruga (Crawler Cranes)

**Capacidades**: 100 a 600 toneladas

Perfectas para terrenos irregulares y proyectos de gran envergadura. Su diseño con orugas proporciona estabilidad excepcional.

### 3. Grúas Todo Terreno (All Terrain Cranes)

**Capacidades**: 60 a 500 toneladas

Combinan la movilidad de grúas sobre neumáticos con capacidad offroad.

## Contacta a EQUISER

¿Necesitas alquilar una grúa para tu proyecto?

📞 **Teléfono**: +58 422-6347624
📧 **Email**: equiserca@gmail.com
💬 **WhatsApp**: Disponible 24/7

---

*EQUISER - Más de 20 años moviendo Venezuela con seguridad y profesionalismo.*`,
    featuredImage: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&h=675&fit=crop",
    category: "Servicios de Grúas",
    tags: ["alquiler de grúas", "grúas industriales", "Venezuela", "construcción", "izamiento"],
    metaTitle: "Alquiler de Grúas Industriales en Venezuela | Guía Completa 2024",
    metaDescription: "Guía completa sobre alquiler de grúas industriales en Venezuela: tipos, costos, certificaciones y cómo elegir el equipo perfecto. EQUISER, líderes desde 1998.",
    keywords: ["alquiler grúas Venezuela", "grúas industriales", "grúas Barcelona", "grúas Puerto La Cruz", "alquiler grúas industriales"],
    published: true,
    featured: true,
    readTime: 12,
    publishedAt: new Date('2024-11-15T10:00:00Z')
  },
  {
    title: "Grúas Móviles de 130 Toneladas: Capacidades y Aplicaciones",
    slug: "gruas-moviles-130-toneladas",
    excerpt: "Conoce las capacidades, especificaciones técnicas y aplicaciones de las grúas móviles de 130 toneladas, equipos versátiles para proyectos industriales.",
    content: `# Grúas Móviles de 130 Toneladas: Capacidades y Aplicaciones

Las **grúas móviles de 130 toneladas** representan el equilibrio perfecto entre potencia, movilidad y versatilidad. Son el equipo más solicitado en Venezuela para proyectos de mediana y gran envergadura.

## ¿Qué es una Grúa Móvil de 130 Toneladas?

Una grúa móvil de 130 toneladas es un equipo autopropulsado montado sobre un chasis con neumáticos, capaz de levantar cargas de hasta **130 toneladas métricas**.

### Características Principales

**Dimensiones Típicas**:
- Longitud total: 15-18 metros
- Ancho: 2.75-3.0 metros
- Altura de transporte: 3.8-4.0 metros
- Peso operativo: 60-72 toneladas

**Capacidades de Pluma**:
- Pluma base: 12-15 metros
- Pluma telescópica: hasta 60 metros
- Con extensión de celosía: hasta 85 metros

## Marcas Líderes en el Mercado

### 1. Liebherr LTM 1130-5.1

Especificaciones destacadas y sistema de control avanzado LiDAT.

### 2. Grove GMK5130-2

Sistema Mega Wing Lift para mayor capacidad en radios cortos.

### 3. Tadano ATF 130G-5

Sistema anti-colisión avanzado y menor huella de carbono.

## Aplicaciones Industriales

Las grúas de 130 toneladas se utilizan en múltiples sectores industriales de Venezuela.

## Contáctanos

📞 **Llámanos**: +58 422-6347624
📧 **Escríbenos**: equiserca@gmail.com

---

*EQUISER - Potencia, precisión y seguridad en cada izamiento.*`,
    featuredImage: "https://i.ytimg.com/vi/k-WYI8oXIDw/maxresdefault.jpg",
    category: "Equipos y Tecnología",
    tags: ["grúas 130 toneladas", "grúas móviles", "Liebherr", "Grove", "capacidad de carga"],
    metaTitle: "Grúas Móviles 130 Toneladas | Capacidades y Aplicaciones | EQUISER",
    metaDescription: "Especificaciones técnicas, capacidades de carga y aplicaciones de grúas móviles de 130 toneladas. Liebherr, Grove y Tadano.",
    keywords: ["grúa 130 toneladas", "grúas móviles", "Liebherr LTM 1130", "Grove GMK5130", "capacidad de carga"],
    published: true,
    featured: true,
    readTime: 15,
    publishedAt: new Date('2024-11-16T09:00:00Z')
  },
  {
    title: "Transporte de Carga Sobredimensionada en Venezuela",
    slug: "transporte-carga-sobredimensionada",
    excerpt: "Guía especializada sobre transporte de carga sobredimensionada: normativas, equipos, permisos y planificación de rutas para cargas especiales.",
    content: `# Transporte de Carga Sobredimensionada en Venezuela

El **transporte de carga sobredimensionada** requiere planificación exhaustiva, equipos especializados y conocimiento profundo de regulaciones.

## ¿Qué es Carga Sobredimensionada?

Una carga se considera sobredimensionada cuando excede los límites establecidos para transporte convencional en Venezuela.

## Tipos de Cargas

EQUISER transporta transformadores, generadores, equipos petroquímicos y maquinaria pesada por todo el territorio nacional.

## Contacto

📞 +58 422-6347624  
📧 equiserca@gmail.com

---

*EQUISER - Movemos lo imposible.*`,
    featuredImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=675&fit=crop",
    category: "Transporte de Carga",
    tags: ["transporte sobredimensionado", "carga pesada", "logística industrial", "permisos especiales"],
    metaTitle: "Transporte de Carga Sobredimensionada Venezuela | EQUISER",
    metaDescription: "Especialistas en transporte de carga sobredimensionada: transformadores, generadores, equipos industriales.",
    keywords: ["transporte carga sobredimensionada", "carga pesada Venezuela", "transporte transformadores"],
    published: true,
    featured: true,
    readTime: 18,
    publishedAt: new Date('2024-11-17T08:00:00Z')
  },
  {
    title: "¿Cuánto Cuesta Alquilar una Grúa en Venezuela?",
    slug: "costo-alquiler-grua-venezuela",
    excerpt: "Desglose completo de costos de alquiler de grúas: factores que influyen en el precio, comparativas por tonelaje y consejos para optimizar tu inversión.",
    content: `# ¿Cuánto Cuesta Alquilar una Grúa en Venezuela?

El **costo de alquilar una grúa** depende de múltiples factores. Te explicamos todo de manera transparente.

## Factores que Determinan el Costo

1. **Capacidad de la Grúa**: Mayor tonelaje, mayor costo
2. **Duración del Alquiler**: Descuentos en alquileres prolongados
3. **Ubicación del Proyecto**: Distancia desde nuestra base
4. **Complejidad de la Operación**: Izamientos críticos tienen sobrecosto
5. **Horario de Trabajo**: Tarifas especiales nocturnas y fines de semana

## Solicita Tu Cotización

📞 +58 422-6347624  
📧 equiserca@gmail.com

---

*EQUISER - Inversión inteligente en servicios de calidad.*`,
    featuredImage: "https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/hero-what-is-a-crane-boom-1.webp",
    category: "Guías y Costos",
    tags: ["costo alquiler grúas", "precios", "tarifas", "cotización", "presupuesto"],
    metaTitle: "¿Cuánto Cuesta Alquilar una Grúa en Venezuela? | Guía de Precios 2024",
    metaDescription: "Guía completa de costos de alquiler de grúas en Venezuela: tarifas por tonelaje y cómo optimizar tu inversión.",
    keywords: ["costo alquiler grúa", "precio grúas Venezuela", "tarifas alquiler grúas"],
    published: true,
    featured: true,
    readTime: 16,
    publishedAt: new Date('2024-11-18T10:30:00Z')
  },
  {
    title: "Técnicas de Izamiento para Equipos Industriales",
    slug: "tecnicas-izamiento-equipos-industriales",
    excerpt: "Métodos profesionales de izamiento industrial: cálculos de carga, selección de accesorios y procedimientos seguros.",
    content: `# Técnicas de Izamiento para Equipos Industriales

El **izamiento industrial** combina ingeniería, física y estrictos protocolos de seguridad.

## Fundamentos del Izamiento

Principios físicos, centro de gravedad, ángulo de eslingas y factores de seguridad.

## Tipos de Izamiento

- Vertical directo
- Con eslinga choker
- Múltiples puntos
- Con viga de extensión
- Coordinado con múltiples grúas

## Contacto

📞 +58 422-6347624  
📧 equiserca@gmail.com

---

*EQUISER - La ingeniería al servicio de la seguridad.*`,
    featuredImage: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=1200&h=675&fit=crop",
    category: "Ingeniería y Técnicas",
    tags: ["técnicas de izamiento", "rigging", "ingeniería", "seguridad", "procedimientos"],
    metaTitle: "Técnicas Profesionales de Izamiento Industrial | EQUISER",
    metaDescription: "Métodos de izamiento industrial: cálculos de carga, selección de accesorios, procedimientos seguros.",
    keywords: ["técnicas de izamiento", "rigging industrial", "cálculos de carga", "eslingas"],
    published: true,
    featured: false,
    readTime: 22,
    publishedAt: new Date('2024-11-16T14:00:00Z')
  },
  {
    title: "Grúas para Montaje de Estructuras Metálicas",
    slug: "gruas-montaje-estructuras-metalicas",
    excerpt: "Guía especializada para el montaje de estructuras metálicas: selección de grúas, técnicas de izamiento y secuencias de montaje.",
    content: `# Grúas para Montaje de Estructuras Metálicas

El montaje de estructuras metálicas requiere precisión milimétrica y equipos versátiles.

## Tipos de Estructuras

Naves industriales, puentes, estadios y más.

## Contacto

📞 +58 422-6347624

---

*EQUISER*`,
    featuredImage: "https://i.ytimg.com/vi/wA1hBduyg8A/sddefault.jpg",
    category: "Aplicaciones Industriales",
    tags: ["estructuras metálicas", "montaje industrial", "construcción"],
    metaTitle: "Grúas para Montaje de Estructuras Metálicas | EQUISER",
    metaDescription: "Todo sobre montaje de estructuras metálicas con grúas.",
    keywords: ["montaje estructuras metálicas", "grúas construcción"],
    published: true,
    featured: false,
    readTime: 14,
    publishedAt: new Date('2024-11-14T11:00:00Z')
  },
  {
    title: "Servicio de Grúas 24/7 en Barcelona, Puerto La Cruz y Caracas",
    slug: "servicio-gruas-24-7-venezuela",
    excerpt: "Disponibilidad total para emergencias industriales: cómo funciona nuestro servicio 24/7 y tiempos de respuesta.",
    content: `# Servicio de Grúas 24/7

EQUISER mantiene servicio disponible las 24 horas del día, 7 días a la semana.

## Cobertura

Barcelona, Puerto La Cruz, Caracas y más.

📞 +58 422-6347624

---

*EQUISER*`,
    featuredImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=675&fit=crop",
    category: "Servicios",
    tags: ["servicio 24/7", "emergencias", "grúas Barcelona"],
    metaTitle: "Servicio de Grúas 24/7 en Venezuela | EQUISER",
    metaDescription: "Grúas disponibles 24 horas en Barcelona, Puerto La Cruz y Caracas.",
    keywords: ["grúas 24 horas", "emergencias industriales"],
    published: true,
    featured: false,
    readTime: 11,
    publishedAt: new Date('2024-11-13T16:00:00Z')
  },
  {
    title: "Movilización de Transformadores: Procedimientos y Equipos",
    slug: "movilizacion-transformadores",
    excerpt: "Transporte especializado de transformadores de potencia: desde la preparación hasta la instalación final.",
    content: `# Movilización de Transformadores

Los transformadores requieren manejo especializado en cada fase.

📞 +58 422-6347624

---

*EQUISER*`,
    featuredImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=675&fit=crop",
    category: "Transporte Especializado",
    tags: ["transformadores", "transporte eléctrico", "CORPOELEC"],
    metaTitle: "Movilización de Transformadores | EQUISER",
    metaDescription: "Transporte e instalación especializada de transformadores.",
    keywords: ["transporte transformadores", "movilización transformadores"],
    published: true,
    featured: false,
    readTime: 16,
    publishedAt: new Date('2024-11-12T09:30:00Z')
  },
  {
    title: "Certificaciones de Seguridad en Servicios de Grúas",
    slug: "certificaciones-seguridad-gruas",
    excerpt: "Normativas, certificaciones y estándares de seguridad que rigen la industria de grúas.",
    content: `# Certificaciones de Seguridad

COVENIN, OSHA, ISO y más.

📞 +58 422-6347624

---

*EQUISER*`,
    featuredImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=675&fit=crop",
    category: "Seguridad y Normativas",
    tags: ["certificaciones", "seguridad", "COVENIN", "OSHA"],
    metaTitle: "Certificaciones de Seguridad en Grúas | EQUISER",
    metaDescription: "Certificaciones de seguridad y normativas aplicables.",
    keywords: ["certificaciones grúas", "normas seguridad", "COVENIN 187"],
    published: true,
    featured: false,
    readTime: 13,
    publishedAt: new Date('2024-11-11T10:00:00Z')
  },
  {
    title: "Proyectos de Izamiento en Petromonagas: Caso de Estudio",
    slug: "proyectos-izamiento-petromonagas",
    excerpt: "Análisis detallado: instalación de reactor de 480 toneladas en complejo Petromonagas.",
    content: `# Proyectos en Petromonagas

Caso de estudio de proyecto crítico.

📞 +58 422-6347624

---

*EQUISER*`,
    featuredImage: "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1200&h=675&fit=crop",
    category: "Casos de Éxito",
    tags: ["Petromonagas", "PDVSA", "Chevron"],
    metaTitle: "Caso de Estudio: Izamiento en Petromonagas | EQUISER",
    metaDescription: "Análisis del proyecto de instalación de reactor de 480 toneladas.",
    keywords: ["Petromonagas", "proyecto PDVSA", "izamiento reactor"],
    published: true,
    featured: true,
    readTime: 17,
    publishedAt: new Date('2024-11-10T08:00:00Z')
  }
];

export async function POST(request: Request) {
  try {
    const results = [];
    
    for (const blogData of initialBlogs) {
      const existing = await prisma.blog.findUnique({
        where: { slug: blogData.slug }
      });
      
      if (existing) {
        const updated = await prisma.blog.update({
          where: { slug: blogData.slug },
          data: blogData
        });
        results.push({ action: 'updated', blog: updated });
      } else {
        const created = await prisma.blog.create({
          data: blogData
        });
        results.push({ action: 'created', blog: created });
      }
    }
    
    return NextResponse.json({ 
      success: true, 
      message: `Procesados ${results.length} blogs exitosamente`,
      results 
    });
    
  } catch (error: any) {
    console.error('Error en seed:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Usa POST para ejecutar el seed de blogs' 
  });
}
