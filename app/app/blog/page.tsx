
import type { Metadata } from 'next'
import { BlogHomePage } from '@/components/blog/blog-home-page'

export const metadata: Metadata = {
  title: 'Blog GRÚAS EQUISER - Guía Completa de Grúas Móviles y Transporte Pesado en Venezuela',
  description: 'Blog especializado en grúas móviles, grúas sobre oruga y transporte pesado en Venezuela. Consejos expertos, casos de estudio y novedades del sector industrial.',
  keywords: 'blog grúas móviles Venezuela, alquiler grúas sobre oruga, transporte pesado Venezuela, grúas Liebherr, izamiento industrial Venezuela, consejos grúas, seguridad industrial',
  openGraph: {
    title: 'Blog GRÚAS EQUISER - Expertos en Grúas y Transporte Pesado Venezuela',
    description: 'Descubre consejos de expertos, casos de estudio y las últimas novedades en grúas móviles y transporte pesado en Venezuela.',
    url: 'https://gruasequiser.net/blog',
    siteName: 'GRÚAS EQUISER C.A. Blog',
    images: [
      {
        url: '/images/blog-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog GRÚAS EQUISER - Expertos en Grúas Venezuela',
      },
    ],
    locale: 'es_VE',
    type: 'website',
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
