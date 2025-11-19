import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

// GET /api/blogs - List all blogs with pagination
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');
    const locale = searchParams.get('locale') || 'es'; // Default a español

    const where: any = { 
      published: true,
      locale: locale // Filtrar por idioma
    };
    if (category) where.category = category;
    if (featured === 'true') where.featured = true;

    const [blogs, total] = await Promise.all([
      prisma.blog.findMany({
        where,
        orderBy: { publishedAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
        select: {
          id: true,
          title: true,
          slug: true,
          excerpt: true,
          featuredImage: true,
          category: true,
          tags: true,
          author: true,
          readTime: true,
          publishedAt: true,
          views: true,
          locale: true,
          translationId: true,
        },
      }),
      prisma.blog.count({ where }),
    ]);

    return NextResponse.json({
      blogs,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: 'Error fetching blogs' }, { status: 500 });
  }
}

// POST /api/blogs - Create new blog
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const blog = await prisma.blog.create({
      data: {
        ...data,
        publishedAt: data.published ? new Date() : null,
      },
    });

    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json({ error: 'Error creating blog' }, { status: 500 });
  }
}
