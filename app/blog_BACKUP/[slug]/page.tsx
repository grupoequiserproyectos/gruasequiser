import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BlogArticlePage } from '@/components/blog/blog-article-page'
import { getAllArticles, getArticleBySlug } from '@/data/blog-articles'

export const dynamicParams = false

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  
  if (!article) {
    return {
      title: 'Artículo no encontrado - Blog GRÚAS EQUISER',
    }
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords.join(', '),
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `https://gruasequiser.net/blog/${params.slug}`,
      siteName: 'GRÚAS EQUISER C.A. Blog',
      images: [
        {
          url: `https://gruasequiser.net${article.image}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: 'es_VE',
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [`https://gruasequiser.net${article.image}`],
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
  const article = getArticleBySlug(params.slug)
  
  if (!article) {
    notFound()
  }

  return <BlogArticlePage article={article} />
}
