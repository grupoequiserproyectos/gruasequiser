/**
 * Generador automático de blogs SEO para GruasEquiser
 * Adaptado de TRANSERVICA para Next.js
 */

import { CIUDADES, SECTORES, SERVICIOS_PRINCIPALES, generarKeywordsArticulo, DATOS_CONTACTO } from './seo-keywords-gruas';
import { getBlogImages } from './image-service-blogs';

interface BlogTemplate {
  name: string;
  titleTemplates: string[];
  slugPatterns: string[];
  outline: string[];
  keywords: string[];
}

const TEMPLATES: BlogTemplate[] = [
  {
    name: 'CityGuide',
    titleTemplates: [
      'Servicio de Grúas {sector} en {city}: Guía Completa 2024',
      'Alquiler de Grúas {sector} en {city}: Servicios y Contacto',
      '{city}: Centro de Izamiento para el Sector {sector}',
    ],
    slugPatterns: [
      'servicio-gruas-{sector}-{city}',
      'alquiler-gruas-{sector}-{city}',
    ],
    outline: [
      'Introducción: {city} como hub de {sector}',
      'Desafíos específicos en {city}',
      'Soluciones GruasEquiser para el sector {sector}',
      'Casos de éxito en {city}',
      'Capacidades de grúas (25-1600 toneladas)',
      'Contacto y cotización gratuita',
    ],
    keywords: [
      'servicio grúas {sector} {city}',
      'alquiler grúas {sector} {city}',
      'grúas industriales {city}',
      'empresa grúas {city}',
    ],
  },
  {
    name: 'PriceGuide',
    titleTemplates: [
      '¿Cuánto cuesta el Alquiler de Grúas en {city}? Precios 2024',
      'Tarifas de Alquiler de Grúas {sector} en {city}',
      'Presupuesto de Grúas en {city}: Cálculo exacto',
    ],
    slugPatterns: [
      'precio-alquiler-gruas-{city}',
      'tarifas-gruas-{sector}-{city}',
    ],
    outline: [
      'Factores que afectan los precios de alquiler',
      'Tabla de tarifas por capacidad',
      'Cálculo de presupuesto automático',
      'Descuentos por contratos largos',
      'Formas de pago disponibles',
    ],
    keywords: [
      'precio alquiler grúas {city}',
      'tarifa {sector} {city}',
      'presupuesto grúas',
      'cotización grúas',
    ],
  },
  {
    name: 'ServiceHighlight',
    titleTemplates: [
      'Grúas de {tonelaje} en {city}: Alquiler Especializado',
      'Super Lowboy en {city}: Transporte de Cargas Pesadas',
      'Consultoría de Izamiento: Optimiza tu Operación en {city}',
    ],
    slugPatterns: [
      'gruas-{tonelaje}-{city}',
      'super-lowboy-{city}',
      'consultoria-izamiento-{city}',
    ],
    outline: [
      'Descripción del servicio',
      'Ventajas principales',
      'Especificaciones técnicas',
      'Casos de uso en {city}',
      'Cómo solicitar el servicio',
    ],
    keywords: [
      'grúas {city}',
      'super lowboy {city}',
      'consultoría grúas',
    ],
  },
  {
    name: 'SectorDeep',
    titleTemplates: [
      'Grúas Sector {sector}: Soluciones Especializadas 2024',
      'Sector {sector} en Venezuela: Servicios de Izamiento',
      'Alquiler de Grúas {sector}: Regulaciones y Mejores Prácticas',
    ],
    slugPatterns: [
      'gruas-sector-{sector}',
      'sector-{sector}-venezuela',
    ],
    outline: [
      'Características del sector {sector}',
      'Desafíos específicos del izamiento',
      'Requisitos regulatorios',
      'Soluciones adaptadas de GruasEquiser',
      'Experiencia en el sector',
    ],
    keywords: [
      'grúas {sector}',
      'izamiento {sector} venezuela',
      '{sector} especializado',
    ],
  },
  {
    name: 'CaseStudy',
    titleTemplates: [
      'Caso de éxito: Izamiento {sector} en {city}',
      'Proyecto: Movilización exitosa en {city}',
      'Testimonio: Cómo transportamos carga crítica en {city}',
    ],
    slugPatterns: [
      'caso-exito-{sector}-{city}',
      'proyecto-{city}',
    ],
    outline: [
      'Presentación del proyecto',
      'Desafío específico enfrentado',
      'Solución propuesta por GruasEquiser',
      'Resultados obtenidos',
      'Testimonial del cliente',
    ],
    keywords: [
      'izamiento exitoso {city}',
      'grúas profesionales',
      'carga pesada especializada',
    ],
  },
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Genera contenido de blog usando OpenRouter API
 */
async function generateBlogContent(
  template: BlogTemplate,
  city: string,
  sector: string
): Promise<{
  title: string;
  slug: string;
  content: string;
  metaDescription: string;
  keywords: string[];
}> {
  const titleTemplate = template.titleTemplates[
    Math.floor(Math.random() * template.titleTemplates.length)
  ];
  const slugPattern = template.slugPatterns[
    Math.floor(Math.random() * template.slugPatterns.length)
  ];

  const title = titleTemplate
    .replace(/{sector}/g, sector)
    .replace(/{city}/g, city)
    .replace(/{tonelaje}/g, '300 toneladas');

  const slug = slugPattern
    .replace(/{sector}/g, slugify(sector))
    .replace(/{city}/g, slugify(city))
    .replace(/{tonelaje}/g, '300-toneladas');

  const keywords = template.keywords.map((kw) =>
    kw.replace(/{sector}/g, sector).replace(/{city}/g, city)
  );

  const prompt = `
Escribe un artículo de blog profesional para una empresa de grúas industriales (GruasEquiser, C.A.) en Venezuela.

TÍTULO: ${title}
PALABRAS CLAVE: ${keywords.join(', ')}

REQUERIMIENTOS OBLIGATORIOS:
1. Extensión: 1500-2000 palabras
2. Optimizado para SEO (keywords naturalmente integradas)
3. Estructura: H2 y H3 claros con jerarquía lógica
4. Tono: Profesional, B2B, informativo pero persuasivo
5. HTML simple (solo <h2>, <h3>, <p>, <ul>, <li>, <strong>)
6. INCLUIR EXACTAMENTE 3 LLAMADAS A ACCIÓN (CTAs):
   - CTA #1: Al inicio del artículo (después de la introducción)
   - CTA #2: En el medio del contenido
   - CTA #3: Al final del artículo
   
Formato de los CTAs (usar exactamente este HTML):
<div class="cta-box bg-yellow-50 border-l-4 border-equiser-yellow p-6 my-8 rounded-lg">
<p class="text-xl font-bold text-equiser-blue mb-4">🏗️ ¿Necesitas Grúas Industriales en ${city}?</p>
<p class="text-gray-700 mb-4">EQUISER cuenta con más de 30 años de experiencia en ${sector}. Grúas de 25 a 1600 toneladas disponibles 24/7.</p>
<ul class="space-y-2 mb-4 text-gray-700">
  <li><strong>📞 Teléfono:</strong> ${DATOS_CONTACTO.telefono}</li>
  <li><strong>💬 WhatsApp:</strong> <a href="${DATOS_CONTACTO.whatsapp}" class="text-equiser-blue hover:underline">Chatear Ahora</a></li>
  <li><strong>📧 Email:</strong> ${DATOS_CONTACTO.emailPrincipal}</li>
</ul>
<a href="${DATOS_CONTACTO.whatsapp}" class="inline-block bg-equiser-yellow hover:bg-yellow-500 text-equiser-blue font-bold py-3 px-6 rounded-lg transition">
  Solicitar Cotización Gratis →
</a>
</div>

OUTLINE:
${template.outline.map((item) => `- ${item.replace(/{sector}/g, sector).replace(/{city}/g, city)}`).join('\n')}

CONTEXTO EMPRESA:
- Empresa: ${DATOS_CONTACTO.empresa}
- Nombre Comercial: ${DATOS_CONTACTO.nombreComercial}
- Ciudad: ${city}
- Sector industrial: ${sector}
- Servicios principales: Grúas móviles 25-500 ton, Grúas sobre oruga 300-1600 ton, Super Lowboy hasta 250 ton, Ingeniería 3D, Rigging
- Experiencia: ${DATOS_CONTACTO.anosExperiencia} años en Venezuela
- Capacidad máxima: ${DATOS_CONTACTO.capacidadMaxima}
- Proyectos ejecutados: ${DATOS_CONTACTO.proyectosEjecutados}
- Contacto: ${DATOS_CONTACTO.telefono}
- WhatsApp: ${DATOS_CONTACTO.whatsapp}
- Email: ${DATOS_CONTACTO.emailPrincipal}
- Ubicación: ${DATOS_CONTACTO.ubicacion}
- Disponibilidad: ${DATOS_CONTACTO.disponibilidad}

MENCIONES OBLIGATORIAS (incluir naturalmente cuando sea relevante):
- Si sector petrolero: mencionar Faja del Orinoco, operadoras petroleras
- Si sector petroquímico: mencionar Pequiven, Refinería El Palito, Complejo José
- Si sector siderúrgico: mencionar SIDOR, Ciudad Guayana
- Si sector portuario: mencionar Puerto La Cruz, Puerto Cabello
- Si sector energético: mencionar plantas eléctricas, transformadores

MARCAS DE EQUIPOS: Liebherr, Grove, Manitowoc, Demag

IMPORTANTE: No incluyas tags <html>, <head> o <body>. Solo el contenido del artículo con los 3 CTAs insertados estratégicamente.
`;

  try {
    const apiKey = process.env.OPENROUTER_API_KEY;
    
    if (!apiKey) {
      throw new Error('OPENROUTER_API_KEY not configured');
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://gruasequiser.com',
        'X-Title': 'GruasEquiser Blog Generator',
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-chat',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 3000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('OpenRouter API error:', response.status, response.statusText, errorData);
      throw new Error(`OpenRouter API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content || '';
    
    if (!content) {
      throw new Error('Empty content from OpenRouter API');
    }
    
    const metaDescription = content
      .replace(/<[^>]*>/g, '')
      .substring(0, 155)
      .trim();

    console.log(`✅ Blog content generated successfully using OpenRouter API for: ${title}`);

    return {
      title,
      slug,
      content,
      metaDescription,
      keywords,
    };
  } catch (error) {
    console.error('⚠️  Error generating blog content with OpenRouter, using fallback:', error);
    
    // Fallback content si la API falla
    const fallbackContent = `
<h2>Introducción</h2>
<p>${DATOS_CONTACTO.nombreComercial} ofrece servicios especializados de alquiler de grúas industriales en ${city} para el sector ${sector}. Con ${DATOS_CONTACTO.anosExperiencia} años de experiencia, somos líderes en izamiento industrial en Venezuela.</p>

<div class="cta-box bg-yellow-50 border-l-4 border-equiser-yellow p-6 my-8 rounded-lg">
<p class="text-xl font-bold text-equiser-blue mb-4">🏗️ ¿Necesitas Grúas Industriales en ${city}?</p>
<p class="text-gray-700 mb-4">EQUISER cuenta con más de 30 años de experiencia en ${sector}. Grúas de 25 a 1600 toneladas disponibles 24/7.</p>
<ul class="space-y-2 mb-4 text-gray-700">
  <li><strong>📞 Teléfono:</strong> ${DATOS_CONTACTO.telefono}</li>
  <li><strong>💬 WhatsApp:</strong> <a href="${DATOS_CONTACTO.whatsapp}" class="text-equiser-blue hover:underline">Chatear Ahora</a></li>
  <li><strong>📧 Email:</strong> ${DATOS_CONTACTO.emailPrincipal}</li>
</ul>
<a href="${DATOS_CONTACTO.whatsapp}" class="inline-block bg-equiser-yellow hover:bg-yellow-500 text-equiser-blue font-bold py-3 px-6 rounded-lg transition">
  Solicitar Cotización Gratis →
</a>
</div>

<h2>Nuestros Servicios en ${city}</h2>
<ul>
<li>Alquiler de grúas móviles de 25 a 500 toneladas</li>
<li>Grúas sobre oruga de 300 a 1600 toneladas</li>
<li>Super Lowboy hidráulico hasta 250 toneladas</li>
<li>Ingeniería y planificación 3D</li>
<li>Rigging especializado</li>
</ul>

<h2>Experiencia en el Sector ${sector}</h2>
<p>Nuestro equipo cuenta con amplia experiencia en el izamiento especializado para el sector ${sector}, garantizando la movilización segura y eficiente de sus cargas. Trabajamos con marcas premium: Liebherr, Grove, Manitowoc y Demag.</p>

<div class="cta-box bg-yellow-50 border-l-4 border-equiser-yellow p-6 my-8 rounded-lg">
<p class="text-xl font-bold text-equiser-blue mb-4">⚙️ Equipos de Alta Tecnología para ${sector}</p>
<p class="text-gray-700 mb-4">Contamos con grúas Liebherr, Grove, Manitowoc y Demag certificadas para el sector industrial venezolano.</p>
<ul class="space-y-2 mb-4 text-gray-700">
  <li>✅ Grúas Móviles 25-500 ton</li>
  <li>✅ Grúas Sobre Oruga 300-1600 ton</li>
  <li>✅ Super Lowboy Hidráulico 250 ton</li>
  <li>✅ Ingeniería 3D avanzada</li>
  <li>✅ Operadores certificados</li>
  <li>✅ Disponibilidad 24/7</li>
</ul>
<a href="${DATOS_CONTACTO.whatsapp}" class="inline-block bg-equiser-yellow hover:bg-yellow-500 text-equiser-blue font-bold py-3 px-6 rounded-lg transition">
  Ver Nuestra Flota →
</a>
</div>

<h2>Contacto y Cotización</h2>
<p>Para solicitar una cotización gratuita, contáctenos al ${DATOS_CONTACTO.telefono} o por WhatsApp. También puede escribirnos a ${DATOS_CONTACTO.emailPrincipal}. Estamos listos para atender sus necesidades de izamiento en ${city}.</p>

<div class="cta-box bg-gradient-to-r from-equiser-yellow to-yellow-500 text-equiser-blue p-6 my-8 rounded-lg">
<p class="text-xl font-bold mb-4">🚀 ¿Tu Proyecto No Puede Esperar?</p>
<p class="mb-4">Atención inmediata las 24 horas del día, los 7 días de la semana. Cotizaciones personalizadas en menos de 2 horas.</p>
<div class="bg-white/20 backdrop-blur rounded p-4 mb-4">
  <p class="font-bold">📍 Ubicación: ${DATOS_CONTACTO.ubicacion}</p>
  <p class="font-bold">📊 Proyectos ejecutados: ${DATOS_CONTACTO.proyectosEjecutados}</p>
  <p class="font-bold">⭐ Experiencia: ${DATOS_CONTACTO.anosExperiencia} años</p>
</div>
<a href="${DATOS_CONTACTO.whatsapp}" class="inline-block bg-white text-equiser-blue font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition">
  💬 Contactar por WhatsApp Ahora
</a>
</div>
`;

    return {
      title,
      slug,
      content: fallbackContent,
      metaDescription: `Alquiler de grúas industriales en ${city} para el sector ${sector}. GruasEquiser ofrece servicios especializados con ${DATOS_CONTACTO.anosExperiencia} años de experiencia.`,
      keywords,
    };
  }
}

/**
 * Genera un blog completo (contenido + imágenes)
 */
export async function generateBlog(): Promise<any> {
  const template = TEMPLATES[Math.floor(Math.random() * TEMPLATES.length)];
  const city = CIUDADES[Math.floor(Math.random() * CIUDADES.length)];
  const sector = SECTORES[Math.floor(Math.random() * SECTORES.length)];

  console.log(`\n🤖 Generando blog: ${template.name} | ${city} | ${sector}\n`);

  const { title, slug, content, metaDescription, keywords } = await generateBlogContent(
    template,
    city,
    sector
  );

  console.log(`🖼️  Buscando imágenes para: ${sector} ${city}...`);
  const { coverImage, secondaryImages } = await getBlogImages(city, sector);
  
  if (!coverImage || !secondaryImages || secondaryImages.length < 2) {
    throw new Error('Failed to generate required minimum 3 images for blog');
  }

  const ctaCount = (content.match(/class="cta-box"/g) || []).length;
  if (ctaCount < 3) {
    console.warn(`⚠️  Blog generated with only ${ctaCount} CTAs (required: 3)`);
  }

  const calculatedReadTime = Math.ceil(content.split(/\s+/).length / 200);

  return {
    title,
    slug,
    content,
    excerpt: metaDescription.substring(0, 200),
    metaTitle: title,
    metaDescription,
    keywords,
    city: slugify(city),
    sector: slugify(sector),
    template: template.name,
    coverImage,
    secondaryImages,
    ogImage: coverImage,
    published: true,
    autoGenerated: true,
    readTime: calculatedReadTime,
    locale: 'es',
    category: 'Grúas Industriales',
    tags: keywords.slice(0, 5),
    author: {
      name: 'Equipo Técnico EQUISER',
      image: '/images/logo-equiser-actualizado.webp',
      bio: 'Especialistas en izamiento industrial con más de 30 años de experiencia'
    },
    publishDate: new Date().toISOString(),
    date: new Date().toISOString()
  };
}

/**
 * Genera múltiples blogs de una vez
 */
export async function generate5Blogs(): Promise<any[]> {
  console.log('🤖 Generando 5 blogs automáticamente...');
  const blogs: any[] = [];

  for (let i = 0; i < 5; i++) {
    try {
      const blog = await generateBlog();
      blogs.push(blog);
      console.log(`✅ Blog ${i + 1}/5 generado: "${blog.title}"`);
      
      // Esperar 2 segundos entre cada generación para no saturar las APIs
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error(`❌ Error generando blog ${i + 1}:`, error);
    }
  }

  console.log(`\n✅ Generación completada: ${blogs.length} blogs creados\n`);
  return blogs;
}
