
import { BlogArticlePage } from '@/components/blog/blog-article-page'
import { Footer } from '@/components/footer'
import { getBlogBySlug } from '@/lib/blog-utils'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/db'

export const dynamic = "force-dynamic" // Changed to dynamic since we're using database

export async function generateStaticParams() {
  try {
    const blogs = await prisma.blog.findMany({
      where: { published: true },
      select: { slug: true }
    })
    return blogs.map((blog) => ({
      slug: blog.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const blog = await getBlogBySlug(params.slug)
    
    if (!blog) {
      return {
        title: 'Artículo no encontrado | Blog GRÚAS EQUISER',
      }
    }

    return {
      title: `${blog.title} | Blog GRÚAS EQUISER C.A.`,
      description: blog.excerpt,
      keywords: blog.keywords?.join(', ') || blog.tags.join(', '),
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Blog GRÚAS EQUISER',
    }
  }
}

export default async function BlogArticle({ params }: { params: { slug: string } }) {
  try {
    const blog = await getBlogBySlug(params.slug)

    if (!blog || !blog.published) {
      notFound()
    }

    // Transform database blog to BlogArticle format
    const article = {
      slug: blog.slug,
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      featuredImage: blog.featuredImage || '/images/trabajo de grua.webp',
      category: blog.category,
      tags: blog.tags,
      author: {
        name: blog.author || 'Equipo EQUISER',
        image: '/images/author-equiser.webp',
        bio: 'Especialistas en Izamiento Industrial con más de 30 años de experiencia'
      },
      publishDate: blog.publishedAt?.toISOString() || blog.createdAt.toISOString(),
      lastModified: blog.updatedAt?.toISOString() || blog.createdAt.toISOString(),
      readTime: blog.readTime || 5,
      seoKeywords: blog.keywords?.join(', ') || '',
      metaDescription: blog.metaDescription || blog.excerpt,
      canonicalUrl: `https://gruasequiser.com/blog/${blog.slug}`,
      featured: blog.featured,
      priority: 'high' as const
    }

    return (
      <main className="min-h-screen">
        <BlogArticlePage article={article} />
        <Footer />
      </main>
    )
  } catch (error) {
    console.error('Error loading blog article:', error)
    notFound()
  }
}
