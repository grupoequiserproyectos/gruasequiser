
import { BlogArticlePage } from '@/components/blog/blog-article-page'
import { Footer } from '@/components/footer'
import { getBlogArticle, getAllBlogSlugs } from '@/lib/blog-data'
import { notFound } from 'next/navigation'

export const dynamic = "force-static"

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getBlogArticle(params.slug)
  
  if (!article) {
    return {
      title: 'Artículo no encontrado | Blog GRÚAS EQUISER',
    }
  }

  return {
    title: `${article.title} | Blog GRÚAS EQUISER C.A.`,
    description: article.excerpt,
    keywords: article.tags.join(', '),
  }
}

export default function BlogArticle({ params }: { params: { slug: string } }) {
  const article = getBlogArticle(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <BlogArticlePage article={article} />
      <Footer />
    </main>
  )
}
