
/**
 * API de Búsqueda de Imágenes
 * Integra Freepik y Shutterstock con sistema de fallback
 */

interface ImageResult {
  id: string;
  url: string;
  thumbnail: string;
  width: number;
  height: number;
  source: 'freepik' | 'shutterstock' | 'placeholder';
  alt: string;
}

// Caché local para evitar llamadas repetidas
const imageCache = new Map<string, ImageResult[]>();

/**
 * Búsqueda en Freepik API
 */
async function searchFreepik(query: string, limit: number = 4): Promise<ImageResult[]> {
  const apiKey = process.env.NEXT_PUBLIC_FREEPIK_API_KEY;
  
  if (!apiKey) {
    console.warn('Freepik API key not configured');
    return [];
  }

  try {
    const response = await fetch(
      `https://api.freepik.com/v1/resources?term=${encodeURIComponent(query)}&limit=${limit}&filters[content_type]=photo`,
      {
        headers: {
          'Accept': 'application/json',
          'X-Freepik-API-Key': apiKey
        }
      }
    );

    if (!response.ok) {
      console.error(`Freepik API error: ${response.status}`);
      return [];
    }

    const data = await response.json();
    
    return (data.data || []).map((item: any) => ({
      id: item.id.toString(),
      url: item.image?.source?.url || item.preview?.url || '',
      thumbnail: item.thumbnail?.url || item.preview?.url || '',
      width: item.image?.source?.width || 1200,
      height: item.image?.source?.height || 600,
      source: 'freepik' as const,
      alt: query
    }));
  } catch (error) {
    console.error('Freepik search error:', error);
    return [];
  }
}

/**
 * Búsqueda en Shutterstock API
 * Nota: Requiere OAuth 2.0 completo en producción
 */
async function searchShutterstock(query: string, limit: number = 4): Promise<ImageResult[]> {
  const consumerKey = process.env.SHUTTERSTOCK_CONSUMER_KEY;
  const consumerSecret = process.env.SHUTTERSTOCK_CONSUMER_SECRET;
  
  if (!consumerKey) {
    console.warn('Shutterstock credentials not configured');
    return [];
  }

  try {
    // Basic Auth para Shutterstock
    const auth = Buffer.from(`${consumerKey}:${consumerSecret || ''}`).toString('base64');
    
    const response = await fetch(
      `https://api.shutterstock.com/v2/images/search?query=${encodeURIComponent(query)}&per_page=${limit}&image_type=photo`,
      {
        headers: {
          'Authorization': `Basic ${auth}`,
          'Accept': 'application/json'
        }
      }
    );

    if (!response.ok) {
      console.error(`Shutterstock API error: ${response.status}`);
      return [];
    }

    const data = await response.json();
    
    return (data.data || []).map((item: any) => ({
      id: item.id,
      url: item.assets?.huge_thumb?.url || item.assets?.preview?.url || '',
      thumbnail: item.assets?.small_thumb?.url || item.assets?.preview?.url || '',
      width: item.assets?.huge_thumb?.width || 1200,
      height: item.assets?.huge_thumb?.height || 600,
      source: 'shutterstock' as const,
      alt: query
    }));
  } catch (error) {
    console.error('Shutterstock search error:', error);
    return [];
  }
}

/**
 * Genera placeholder image con degradado corporativo
 */
function generatePlaceholder(alt: string, width: number, height: number): ImageResult {
  return {
    id: 'placeholder',
    url: `https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80`,
    thumbnail: `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtIDfQwI5hIIZY-hp2v4Xyd87h253IINB0yQ6wHn-zsbLspB2-PeFpnslvilyVVVd_MsGVblE6VfiQ1Tqnst9Y60TdxS_xZltq1hqn-k2ggz17KINlnA9Oig52WlYID04YVlSzG4L4b98/w1200-h630-p-k-no-nu/placeholderTxt.png`,
    width,
    height,
    source: 'placeholder',
    alt
  };
}

/**
 * Búsqueda principal con sistema de fallback
 * Freepik → Shutterstock → Placeholder
 */
export async function searchImages(
  query: string,
  options: { limit?: number; width?: number; height?: number } = {}
): Promise<ImageResult[]> {
  const { limit = 4, width = 1200, height = 600 } = options;
  
  // Verificar caché
  const cacheKey = `${query}-${limit}`;
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey)!;
  }

  let results: ImageResult[] = [];

  // Intento 1: Freepik
  results = await searchFreepik(query, limit);
  
  // Intento 2: Shutterstock (si Freepik falla)
  if (results.length === 0) {
    results = await searchShutterstock(query, limit);
  }
  
  // Fallback: Placeholders
  if (results.length === 0) {
    results = Array(limit).fill(null).map(() => 
      generatePlaceholder(query, width, height)
    );
  }

  // Guardar en caché (24 horas)
  imageCache.set(cacheKey, results);
  setTimeout(() => imageCache.delete(cacheKey), 24 * 60 * 60 * 1000);

  return results;
}

/**
 * Obtiene imágenes específicas para un blog
 */
export async function getBlogImages(blogSlug: string): Promise<ImageResult[]> {
  const queries = blogImageQueries[blogSlug] || ['industrial crane', 'heavy lifting'];
  
  const allImages: ImageResult[] = [];
  
  for (const query of queries) {
    const images = await searchImages(query, { limit: 1 });
    allImages.push(...images);
  }
  
  return allImages.slice(0, 4); // Máximo 4 imágenes por blog
}

/**
 * Mapeo de blogs a queries específicas
 */
export const blogImageQueries: Record<string, string[]> = {
  'gruas-proyectos-infraestructura-vial': [
    'industrial crane infrastructure',
    'crane bridge construction',
    'heavy lifting infrastructure',
    'highway construction crane'
  ],
  'izamiento-tanques-almacenamiento': [
    'tank lifting industrial',
    'storage tank hoisting',
    'industrial tank installation',
    'heavy equipment lifting'
  ],
  'transporte-equipos-mineros': [
    'mining equipment transport',
    'heavy mining machinery',
    'mining truck lowboy',
    'excavator transport'
  ],
  'coordinacion-izamientos-multiples-gruas': [
    'multiple crane coordination',
    'synchronized lifting cranes',
    'heavy rigging operation',
    'tandem crane lift'
  ],
  'costo-alquiler-grua-venezuela': [
    'crane rental industrial',
    'equipment rental cost',
    'industrial crane service',
    'heavy equipment pricing'
  ],
  'servicio-gruas-24-7-venezuela': [
    '24/7 crane service',
    'emergency heavy lifting',
    'industrial crane 24 hours',
    'crane service night'
  ],
  'soporte-proyectos-pdvsa': [
    'oil field crane operations',
    'petroleum equipment lifting',
    'refinery construction crane',
    'petrochemical project'
  ],
  'rigging-industrial-calculos': [
    'industrial rigging calculations',
    'load engineering rigging',
    'rigging safety equipment',
    'crane rigging design'
  ]
};
