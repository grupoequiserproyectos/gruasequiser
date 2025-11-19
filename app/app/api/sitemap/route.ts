import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    // Obtener todos los blogs publicados con locale y translationId
    const blogs = await prisma.blog.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true, locale: true, translationId: true },
      orderBy: { updatedAt: 'desc' },
    });

    // Crear un mapa de traducciones para vincular blogs en diferentes idiomas
    const translationMap = new Map<string, Array<{ slug: string; locale: string; updatedAt: Date }>>();
    
    blogs.forEach((blog: { translationId: string | null; slug: string; locale: string | null; updatedAt: Date }) => {
      const key = blog.translationId || blog.slug;
      if (!translationMap.has(key)) {
        translationMap.set(key, []);
      }
      translationMap.get(key)!.push({
        slug: blog.slug,
        locale: blog.locale || 'es',
        updatedAt: blog.updatedAt
      });
    });

    // Páginas principales con hreflang
    const mainPages = [
      {
        loc: 'https://gruasequiser.com',
        locEn: 'https://gruasequiser.com?lang=en',
        priority: '1.0',
        changefreq: 'daily'
      },
      {
        loc: 'https://gruasequiser.com/blog',
        locEn: 'https://gruasequiser.com/blog?lang=en',
        priority: '0.9',
        changefreq: 'daily'
      }
    ];

    const sitemap = '<?xml version="1.0" encoding="UTF-8"?>' + '\n' +
'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ' +
'xmlns:xhtml="http://www.w3.org/1999/xhtml">' + '\n' +
// Páginas principales
mainPages.map(page =>
'  <url>' + '\n' +
'    <loc>' + page.loc + '</loc>' + '\n' +
'    <xhtml:link rel="alternate" hreflang="es" href="' + page.loc + '" />' + '\n' +
'    <xhtml:link rel="alternate" hreflang="es-VE" href="' + page.loc + '" />' + '\n' +
'    <xhtml:link rel="alternate" hreflang="en" href="' + page.locEn + '" />' + '\n' +
'    <xhtml:link rel="alternate" hreflang="en-US" href="' + page.locEn + '" />' + '\n' +
'    <xhtml:link rel="alternate" hreflang="x-default" href="' + page.loc + '" />' + '\n' +
'    <changefreq>' + page.changefreq + '</changefreq>' + '\n' +
'    <priority>' + page.priority + '</priority>' + '\n' +
'  </url>'
).join('\n') + '\n' +
// Blogs con hreflang
Array.from(translationMap.values()).map(translations => {
  const esVersion = translations.find(t => t.locale === 'es');
  const enVersion = translations.find(t => t.locale === 'en');
  
  if (!esVersion) return '';
  
  const lastmod = esVersion.updatedAt.toISOString();
  const esUrl = 'https://gruasequiser.com/blog/' + esVersion.slug;
  const enUrl = enVersion 
    ? 'https://gruasequiser.com/blog/' + enVersion.slug 
    : esUrl + '?lang=en';
  
  return '  <url>' + '\n' +
'    <loc>' + esUrl + '</loc>' + '\n' +
'    <lastmod>' + lastmod + '</lastmod>' + '\n' +
'    <xhtml:link rel="alternate" hreflang="es" href="' + esUrl + '" />' + '\n' +
'    <xhtml:link rel="alternate" hreflang="es-VE" href="' + esUrl + '" />' + '\n' +
'    <xhtml:link rel="alternate" hreflang="en" href="' + enUrl + '" />' + '\n' +
'    <xhtml:link rel="alternate" hreflang="en-US" href="' + enUrl + '" />' + '\n' +
'    <xhtml:link rel="alternate" hreflang="x-default" href="' + esUrl + '" />' + '\n' +
'    <changefreq>weekly</changefreq>' + '\n' +
'    <priority>0.8</priority>' + '\n' +
'  </url>';
}).filter(Boolean).join('\n') + '\n' +
'</urlset>';

    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new NextResponse('Error generating sitemap', { status: 500 });
  }
}
