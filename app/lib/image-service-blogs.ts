/**
 * Servicio multi-provider de imágenes para blogs automatizados
 * Orden de fallback: Pexels → Freepik → Shutterstock → Fallback local
 * Adaptado de TRANSERVICA para GruasEquiser (Next.js)
 */

interface ImageResult {
  url: string;
  photographer?: string;
  photographerUrl?: string;
  alt?: string;
}

// Fallback images para cuando todas las APIs fallen
const FALLBACK_IMAGES = [
  '/images/grua-130-ton-transformador.webp',
  '/images/grua-movil-130-ton.webp',
  '/images/grua-500-ton.webp'
];

/**
 * Busca imágenes en Pexels API
 */
async function searchPexels(query: string, count: number): Promise<string[]> {
  const apiKey = process.env.PEXELS_API_KEY;
  
  if (!apiKey) {
    console.warn('⚠️ PEXELS_API_KEY not configured, skipping Pexels');
    return [];
  }

  try {
    const searchQuery = encodeURIComponent(query);
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=${count}&orientation=landscape`,
      {
        headers: {
          'Authorization': apiKey
        }
      }
    );

    if (!response.ok) {
      console.error(`❌ Pexels API error: ${response.status} ${response.statusText}`);
      return [];
    }

    const data = await response.json();
    
    if (!data.photos || data.photos.length === 0) {
      console.warn(`⚠️ No Pexels images found for query: ${query}`);
      return [];
    }

    console.log(`✅ Found ${data.photos.length} images from Pexels for "${query}"`);
    return data.photos.map((photo: any) => photo.src.large2x || photo.src.large);
  } catch (error) {
    console.error('❌ Error fetching images from Pexels:', error);
    return [];
  }
}

/**
 * Busca imágenes en Freepik API
 */
async function searchFreepik(query: string, count: number): Promise<string[]> {
  const apiKey = process.env.NEXT_PUBLIC_FREEPIK_API_KEY;
  
  if (!apiKey) {
    console.warn('⚠️ FREEPIK_API_KEY not configured, skipping Freepik');
    return [];
  }

  try {
    const searchQuery = encodeURIComponent(query);
    const response = await fetch(
      `https://api.freepik.com/v1/resources?term=${searchQuery}&limit=${count}&filters[content_type]=photo&filters[orientation]=landscape`,
      {
        headers: {
          'x-freepik-api-key': apiKey,
          'Accept': 'application/json'
        }
      }
    );

    if (!response.ok) {
      console.error(`❌ Freepik API error: ${response.status} ${response.statusText}`);
      return [];
    }

    const data = await response.json();
    
    if (!data.data || data.data.length === 0) {
      console.warn(`⚠️ No Freepik images found for query: ${query}`);
      return [];
    }

    console.log(`✅ Found ${data.data.length} images from Freepik for "${query}"`);
    return data.data.map((item: any) => item.image?.source?.url || item.thumbnail?.url).filter(Boolean);
  } catch (error) {
    console.error('❌ Error fetching images from Freepik:', error);
    return [];
  }
}

/**
 * Busca imágenes en Shutterstock API
 */
async function searchShutterstock(query: string, count: number): Promise<string[]> {
  const consumerKey = process.env.SHUTTERSTOCK_CONSUMER_KEY;
  const consumerSecret = process.env.SHUTTERSTOCK_CONSUMER_SECRET;
  
  if (!consumerKey || !consumerSecret) {
    console.warn('⚠️ SHUTTERSTOCK credentials not configured, skipping Shutterstock');
    return [];
  }

  try {
    const searchQuery = encodeURIComponent(query);
    const credentials = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
    
    const response = await fetch(
      `https://api.shutterstock.com/v2/images/search?query=${searchQuery}&per_page=${count}&orientation=horizontal&image_type=photo`,
      {
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Accept': 'application/json'
        }
      }
    );

    if (!response.ok) {
      console.error(`❌ Shutterstock API error: ${response.status} ${response.statusText}`);
      return [];
    }

    const data = await response.json();
    
    if (!data.data || data.data.length === 0) {
      console.warn(`⚠️ No Shutterstock images found for query: ${query}`);
      return [];
    }

    console.log(`✅ Found ${data.data.length} images from Shutterstock for "${query}"`);
    return data.data.map((item: any) => item.assets?.preview?.url || item.assets?.small_thumb?.url).filter(Boolean);
  } catch (error) {
    console.error('❌ Error fetching images from Shutterstock:', error);
    return [];
  }
}

/**
 * Función principal de búsqueda con fallback automático
 * Orden: Pexels → Freepik → Shutterstock → Local fallback
 */
export async function searchImages(query: string, count: number = 3): Promise<string[]> {
  console.log(`🔍 Searching for ${count} images with query: "${query}"`);
  
  const providers = [
    { name: 'Pexels', fn: searchPexels },
    { name: 'Freepik', fn: searchFreepik },
    { name: 'Shutterstock', fn: searchShutterstock }
  ];

  for (const provider of providers) {
    const images = await provider.fn(query, count);
    if (images.length >= count) {
      console.log(`✅ Using ${images.length} images from ${provider.name}`);
      return images.slice(0, count);
    } else if (images.length > 0) {
      console.log(`⚠️ ${provider.name} returned only ${images.length}/${count} images, trying next provider`);
    }
  }

  console.warn(`⚠️ All providers failed for query "${query}", using fallback images`);
  return FALLBACK_IMAGES.slice(0, count);
}

/**
 * Obtiene imágenes específicas para un blog de grúas
 * Genera 1 cover + 2 imágenes secundarias (mínimo 3 imágenes)
 */
export async function getBlogImages(ciudad: string, sector: string): Promise<{ 
  coverImage: string; 
  secondaryImages: string[] 
}> {
  const queries = [
    `${sector} transport Venezuela heavy equipment crane`,
    `industrial crane mobile truck ${ciudad} logistics`,
    `heavy machinery construction transport crane`
  ];

  const allImages: string[] = [];

  for (const query of queries) {
    const images = await searchImages(query, 1);
    if (images.length > 0) {
      allImages.push(images[0]);
    }
    if (allImages.length >= 3) break;
  }

  // Si no se obtuvieron suficientes imágenes, usar fallback
  if (allImages.length === 0) {
    console.log('⚠️ No external images found, using fallback search');
    const fallback = await searchImages('heavy equipment transport crane industrial', 3);
    allImages.push(...fallback);
  }

  // Asegurar mínimo 3 imágenes
  while (allImages.length < 3) {
    const fallbackIndex = allImages.length % FALLBACK_IMAGES.length;
    allImages.push(FALLBACK_IMAGES[fallbackIndex]);
  }

  console.log(`✅ Blog images ready: 1 cover + ${allImages.length - 1} secondary images`);

  return {
    coverImage: allImages[0],
    secondaryImages: [allImages[1], allImages[2]]
  };
}
