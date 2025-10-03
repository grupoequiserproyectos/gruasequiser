import type { Metadata } from 'next'
import { BlogHomePage } from '@/components/blog/blog-home-page'

export const metadata: Metadata = {
  title: 'Blog Grúas Móviles Venezuela | Guías, Proyectos y Normativas EQUISER 2024',
  description: '📚 Blog especializado en alquiler de grúas móviles Venezuela. Guías técnicas, casos de éxito, normativas INTT, comparativas Liebherr-Grove-Manitowoc y más. 30+ años experiencia.',
  keywords: 'blog grúas móviles venezuela, guía alquiler grúas, normativas intt venezuela, proyectos izamiento industrial, comparativa liebherr grove manitowoc, casos de éxito equiser, grúas telescópicas venezuela, transporte pesado venezuela',
  openGraph: {
    title: 'Blog Grúas Móviles Venezuela | EQUISER 30+ Años Experiencia',
    description: 'Guías completas, casos de éxito y normativas sobre alquiler de grúas móviles en Venezuela. Liebherr, Grove, Manitowoc 25-1600 toneladas.',
    url: 'https://gruasequiser.net/blog',
    siteName: 'GRÚAS EQUISER C.A. Blog',
    images: [
      {
        url: 'https://gruasequiser.net/blog-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog GRÚAS EQUISER - Expertos en Grúas Venezuela',
      },
    ],
    locale: 'es_VE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Grúas Móviles Venezuela | EQUISER',
    description: 'Guías, casos de éxito y normativas sobre grúas móviles en Venezuela',
    images: ['https://gruasequiser.net/blog-og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://gruasequiser.net/blog',
  }
}

export default function BlogPage() {
  return <BlogHomePage />
}
