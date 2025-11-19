import { prisma } from '@/lib/db';

export async function getAllBlogs(options?: {
  category?: string;
  featured?: boolean;
  limit?: number;
  page?: number;
}) {
  const where: any = { published: true };
  if (options?.category) where.category = options.category;
  if (options?.featured) where.featured = true;

  const limit = options?.limit || 10;
  const page = options?.page || 1;

  const blogs = await prisma.blog.findMany({
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
    },
  });

  return blogs;
}

export async function getBlogBySlug(slug: string) {
  const blog = await prisma.blog.findUnique({
    where: { slug },
  });

  if (blog && blog.published) {
    // Increment views
    await prisma.blog.update({
      where: { id: blog.id },
      data: { views: { increment: 1 } },
    });
  }

  return blog;
}

export async function getCategories() {
  const categories = await prisma.blog.findMany({
    where: { published: true },
    select: { category: true },
    distinct: ['category'],
  });

  return categories.map((c: any) => c.category);
}
