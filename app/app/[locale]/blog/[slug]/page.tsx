
import { notFound } from 'next/navigation'
import { BlogArticlePage } from '@/components/blog/blog-article-page'
import { getAllBlogSlugs, getBlogBySlug } from '@/lib/blog-data'

interface BlogPostPageProps {
  params: {
    locale: string
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  
  const params: Array<{ locale: string; slug: string }> = []
  slugs.forEach(slug => {
    params.push({ locale: 'es', slug: slug })
    params.push({ locale: 'en', slug: slug })
  })
  
  return params
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const article = getBlogBySlug(params.slug)
  
  if (!article) {
    return {
      title: 'Artículo no encontrado',
      description: 'El artículo que buscas no existe'
    }
  }

  const isEnglish = params.locale === 'en'
  const title = isEnglish ? article.titleEn : article.title
  const description = isEnglish ? article.metaDescriptionEn : article.metaDescription
  const url = `https://gruasequiser.com/${params.locale}/blog/${params.slug}`
  
  return {
    title: title,
    description: description,
    keywords: isEnglish ? article.keywordsEn : article.keywords,
    alternates: {
      canonical: url,
      languages: {
        es: `https://gruasequiser.com/es/blog/${params.slug}`,
        en: `https://gruasequiser.com/en/blog/${params.slug}`
      }
    },
    openGraph: {
      title: title,
      description: description,
      url: url,
      type: 'article',
      locale: isEnglish ? 'en_US' : 'es_VE',
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [article.image]
    }
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const article = getBlogBySlug(params.slug)
  
  if (!article) {
    notFound()
  }

  return <BlogArticlePage article={article} locale={params.locale} />
}
