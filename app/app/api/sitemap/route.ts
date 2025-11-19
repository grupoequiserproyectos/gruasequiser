import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
      orderBy: { updatedAt: 'desc' },
    });

    const sitemap = '<?xml version="1.0" encoding="UTF-8"?>' + '\n' +
'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + '\n' +
'  <url>' + '\n' +
'    <loc>https://gruasequiser.com</loc>' + '\n' +
'    <changefreq>daily</changefreq>' + '\n' +
'    <priority>1.0</priority>' + '\n' +
'  </url>' + '\n' +
'  <url>' + '\n' +
'    <loc>https://gruasequiser.com/blog</loc>' + '\n' +
'    <changefreq>daily</changefreq>' + '\n' +
'    <priority>0.9</priority>' + '\n' +
'  </url>' + '\n' +
blogs.map((blog) => 
'  <url>' + '\n' +
'    <loc>https://gruasequiser.com/blog/' + blog.slug + '</loc>' + '\n' +
'    <lastmod>' + blog.updatedAt.toISOString() + '</lastmod>' + '\n' +
'    <changefreq>weekly</changefreq>' + '\n' +
'    <priority>0.8</priority>' + '\n' +
'  </url>'
).join('\n') + '\n' +
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
