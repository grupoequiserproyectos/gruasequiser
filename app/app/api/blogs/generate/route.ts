/**
 * API Route para testing de generación de blogs
 * GET /api/blogs/generate - Genera 1 blog de prueba
 * POST /api/blogs/generate - Genera múltiples blogs (especificar count en body)
 */

import { NextRequest, NextResponse } from 'next/server';
import { generateBlog, generate5Blogs } from '@/lib/blog-generator-auto';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    console.log('🤖 Iniciando generación de blog de prueba...');
    
    const blog = await generateBlog();
    
    console.log(`✅ Blog generado: ${blog.title}`);
    
    // Guardar en base de datos
    const saved = await prisma.blog.create({
      data: {
        title: blog.title,
        slug: blog.slug,
        content: blog.content,
        excerpt: blog.excerpt,
        metaTitle: blog.metaTitle,
        metaDescription: blog.metaDescription,
        keywords: blog.keywords,
        featuredImage: blog.coverImage,
        category: blog.category,
        tags: blog.tags,
        author: JSON.stringify(blog.author),
        readTime: blog.readTime,
        published: blog.published,
        locale: blog.locale,
        publishedAt: new Date(blog.publishDate)
      }
    });
    
    return NextResponse.json({
      success: true,
      message: 'Blog generado y guardado exitosamente',
      blog: {
        id: saved.id,
        title: saved.title,
        slug: saved.slug,
        url: `/es/blog/${saved.slug}`,
        city: blog.city,
        sector: blog.sector,
        images: 1 + (blog.secondaryImages?.length || 0),
        ctas: (blog.content.match(/cta-box/g) || []).length
      }
    });
    
  } catch (error) {
    console.error('❌ Error generando blog:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido'
    }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const count = body.count || 2;
    
    console.log(`🤖 Generando ${count} blogs...`);
    
    const blogs = [];
    
    for (let i = 0; i < count; i++) {
      console.log(`\n📝 Generando blog ${i + 1}/${count}...`);
      
      try {
        const blog = await generateBlog();
        
        // Guardar en base de datos
        const saved = await prisma.blog.create({
          data: {
            title: blog.title,
            slug: blog.slug,
            content: blog.content,
            excerpt: blog.excerpt,
            metaTitle: blog.metaTitle,
            metaDescription: blog.metaDescription,
            keywords: blog.keywords,
            featuredImage: blog.coverImage,
            category: blog.category,
            tags: blog.tags,
            author: JSON.stringify(blog.author),
            readTime: blog.readTime,
            published: blog.published,
            locale: blog.locale,
            publishedAt: new Date(blog.publishDate)
          }
        });
        
        blogs.push({
          id: saved.id,
          title: saved.title,
          slug: saved.slug,
          url: `/es/blog/${saved.slug}`
        });
        
        console.log(`✅ Blog ${i + 1} guardado: ${saved.title}`);
        
        // Esperar 2 segundos entre cada generación
        if (i < count - 1) {
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
        
      } catch (error) {
        console.error(`❌ Error en blog ${i + 1}:`, error);
      }
    }
    
    return NextResponse.json({
      success: true,
      message: `${blogs.length}/${count} blogs generados exitosamente`,
      blogs
    });
    
  } catch (error) {
    console.error('❌ Error en generación múltiple:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido'
    }, { status: 500 });
  }
}
