import { Metadata } from 'next'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { NosotrosSection } from '@/components/nosotros-section'
import { GaleriaCarrusel } from '@/components/galeria-carrusel'
import { ServicesSection } from '@/components/services-section'
import { SEOContentExpanded } from '@/components/seo-content-expanded'
import { RelatedContentLinks } from '@/components/related-content-links'
import { IndustrialFAQSection } from '@/components/industrial-faq-section'
import { AboutSection } from '@/components/about-section'
import { StatsSection } from '@/components/stats-section'
import { ProjectsSection } from '@/components/projects-section'
import { TeamSection } from '@/components/team-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Alquiler de Grúas 25-1600 Toneladas en Venezuela | EQUISER Morón',
  description: 'Líder en alquiler de grúas móviles y sobre oruga en Venezuela. 30+ años, 500+ proyectos ejecutados, disponibilidad 24/7. Grúas de 25 a 1600 toneladas. Cobertura nacional: Maracaibo, Valencia, Puerto Cabello, Caracas, Faja del Orinoco. Transporte pesado y izamiento industrial certificado.',
  keywords: 'alquiler grúas Venezuela, grúas móviles, grúas sobre oruga, izamiento Venezuela, transporte pesado Venezuela, Morón Carabobo, grúas industriales',
  
  metadataBase: new URL('https://gruasequiser.com'),
  
  openGraph: {
    title: 'Alquiler de Grúas Industriales 25-1600 Toneladas | EQUISER Venezuela',
    description: 'Empresa líder con 30+ años en alquiler de grúas móviles telescópicas, sobre oruga y servicios de transporte pesado en Venezuela.',
    url: 'https://gruasequiser.com',
    siteName: 'GRÚAS EQUISER C.A.',
    images: [
      {
        url: 'https://gruasequiser.com/images/grua-600-ton-y-grua-de-130-ton.webp',
        width: 1200,
        height: 630,
        alt: 'Grúa móvil EQUISER levantando carga industrial - Alquiler en Venezuela',
      },
      {
        url: 'https://gruasequiser.com/images/trabajo-petromonagas.webp',
        width: 800,
        height: 420,
        alt: 'EQUISER - Grúas Industriales Venezuela',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Alquiler Grúas Industriales Venezuela',
    description: 'Grúas 25-1600 toneladas. Disponibilidad 24/7. 500+ proyectos exitosos.',
    images: ['https://gruasequiser.com/images/grua-600-ton-y-grua-de-130-ton.webp'],
  },

  alternates: {
    canonical: 'https://gruasequiser.com/',
    languages: {
      'es': 'https://gruasequiser.com/es',
      'en': 'https://gruasequiser.com/en',
      'x-default': 'https://gruasequiser.com/',
    },
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <GaleriaCarrusel />
      <NosotrosSection />
      <ServicesSection />
      <SEOContentExpanded />
      <RelatedContentLinks />
      <IndustrialFAQSection />
      <AboutSection />
      <StatsSection />
      <ProjectsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
