
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BlogArticlePage } from '@/components/blog/blog-article-page'
import { getBlogArticle, getAllBlogSlugs } from '@/lib/blog-data'

export const dynamicParams = false

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getBlogArticle(params.slug)
  
  if (!article) {
    return {
      title: 'Artículo no encontrado - Blog GRÚAS EQUISER',
    }
  }

  return {
    title: `${article.title} - Blog GRÚAS EQUISER`,
    description: article.excerpt,
    keywords: article.seoKeywords,
    openGraph: {
      title: `${article.title} - GRÚAS EQUISER`,
      description: article.excerpt,
      url: `https://gruasequiser.net/blog/${params.slug}`,
      siteName: 'GRÚAS EQUISER C.A. Blog',
      images: [
        {
          url: article.featuredImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: 'es_VE',
      type: 'article',
      publishedTime: article.publishDate,
      modifiedTime: article.lastModified,
      authors: [article.author.name],
      section: article.category,
      tags: article.tags,
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://gruasequiser.net/blog/${params.slug}`,
    }
  }
}

export default function BlogArticle({ params }: PageProps) {
  const article = getBlogArticle(params.slug)
  
  if (!article) {
    notFound()
  }

  return <BlogArticlePage article={article} />
}
