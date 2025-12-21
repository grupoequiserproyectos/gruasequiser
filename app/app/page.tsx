import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { NosotrosSection } from '@/components/nosotros-section'

// Dynamic imports para componentes below-the-fold (optimización de performance)
const GaleriaCarrusel = dynamic(() => import('@/components/galeria-carrusel').then(mod => ({ default: mod.GaleriaCarrusel })), { ssr: true })
const ServicesSection = dynamic(() => import('@/components/services-section').then(mod => ({ default: mod.ServicesSection })), { ssr: true })
const SEOContentExpanded = dynamic(() => import('@/components/seo-content-expanded').then(mod => ({ default: mod.SEOContentExpanded })), { ssr: true })
const RelatedContentLinks = dynamic(() => import('@/components/related-content-links').then(mod => ({ default: mod.RelatedContentLinks })), { ssr: true })
const IndustrialFAQSection = dynamic(() => import('@/components/industrial-faq-section').then(mod => ({ default: mod.IndustrialFAQSection })), { ssr: true })
const AboutSection = dynamic(() => import('@/components/about-section').then(mod => ({ default: mod.AboutSection })), { ssr: true })
const StatsSection = dynamic(() => import('@/components/stats-section').then(mod => ({ default: mod.StatsSection })), { ssr: true })
const ProjectsSection = dynamic(() => import('@/components/projects-section').then(mod => ({ default: mod.ProjectsSection })), { ssr: true })
const TeamSection = dynamic(() => import('@/components/team-section').then(mod => ({ default: mod.TeamSection })), { ssr: true })
const ContactSection = dynamic(() => import('@/components/contact-section').then(mod => ({ default: mod.ContactSection })), { ssr: true })
const Footer = dynamic(() => import('@/components/footer').then(mod => ({ default: mod.Footer })), { ssr: true })

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
