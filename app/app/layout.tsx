

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { WhatsappWidget } from '@/components/whatsapp-widget'
import { IntlProvider } from '@/components/providers/intl-provider'
import { companySchema, getFAQSchema } from '@/lib/schema-generator'

const inter = Inter({ subsets: ['latin'] })

// Configuración viewport separada para optimizaciones móviles
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: '#1E3A8A',
}

export const metadata: Metadata = {
  title: 'Grúas Industriales 25-1600 Ton Venezuela | Transporte Carga Pesada | EQUISER',
  description: '✓ Grúas móviles y oruga 25-1600 ton ✓ Super lowboy hidráulico ✓ Transporte sobredimensionado ✓ Proyectos industriales ✓ Izamiento industrial ✓ NO grúas de remolque. Maracaibo, Barcelona, Valencia, Puerto Cabello, Faja Orinoco, Puerto La Cruz ☎️ +58 422-6347624',
  keywords: 'grúas industriales Venezuela, alquiler grúas móviles hidráulicas, grúas sobre oruga 600 toneladas, super lowboy hidráulico, transporte carga sobredimensionada Venezuela, grúas telescópicas industriales, grúas alta capacidad, equipos izamiento industrial, grúas certificadas sector petrolero, rigging industrial Venezuela, grúas Maracaibo, grúas Barcelona Anzoátegui, grúas Valencia Carabobo, grúas Puerto Cabello, grúas Faja del Orinoco, grúas Puerto La Cruz, grúas Ciudad Guayana, grúas sector petrolero, grúas sector petroquímico, grúas Pequiven, grúas Refinería El Palito, transporte transformadores industriales',
  
  // Configuración para PWA y móviles
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'GRÚAS EQUISER',
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  
  openGraph: {
    title: 'Grúas Industriales 25-1600 Ton Venezuela | EQUISER B2B',
    description: '✓ Grúas móviles hidráulicas y de oruga ✓ Super lowboy hidráulico ✓ Proyectos industriales petroleros, petroquímicos ✓ Cobertura nacional: Maracaibo, Valencia, Barcelona, Puerto Cabello, Faja Orinoco ✓ NO grúas de remolque',
    url: 'https://gruasequiser.com',
    siteName: 'EQUISER - Equipos Industriales Pesados',
    locale: 'es_VE',
    type: 'website',
    images: [
      {
        url: 'https://i.ytimg.com/vi/k-WYI8oXIDw/maxresdefault.jpg',
        width: 1200,
        height: 630,
        alt: 'EQUISER - Grúas Industriales de Alta Capacidad Venezuela'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grúas Industriales 25-1600 Ton Venezuela | EQUISER',
    description: '✓ Grúas móviles hidráulicas ✓ Grúas de oruga ✓ Super lowboy ✓ Proyectos industriales ✓ NO grúas de remolque',
    images: ['/images/grua-600-ton-y-grua-de-130-ton.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-code-here',
  },
  alternates: {
    canonical: 'https://gruasequiser.com',
    languages: {
      'es-VE': 'https://gruasequiser.com',
      'es': 'https://gruasequiser.com',
      'en': 'https://gruasequiser.com?lang=en',
      'en-US': 'https://gruasequiser.com?lang=en',
      'x-default': 'https://gruasequiser.com',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-VE">
      <head>
        {/* Optimizaciones específicas para móviles iOS y Android */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="GRÚAS EQUISER" />
        
        {/* Prevenir zoom automático en inputs iOS */}
        <meta name="format-detection" content="telephone=yes" />
        
        {/* Optimización táctil para Windows */}
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="msapplication-TileColor" content="#1E3A8A" />
        
        {/* DNS Prefetch para recursos externos */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="VE-G" />
        <meta name="geo.placename" content="Morón, Carabobo, Venezuela" />
        <meta name="geo.position" content="10.4880;-68.2010" />
        <meta name="ICBM" content="10.4880, -68.2010" />
        
        {/* Favicons de GRÚAS EQUISER */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.webp" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.webp" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.webp" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.webp" />
        <meta name="theme-color" content="#1E3A8A" />
        <meta name="msapplication-TileImage" content="/android-chrome-512x512.webp" />
        
        {/* HREFLANG TAGS - CRÍTICO PARA SEO MULTILINGUAL */}
        <link rel="alternate" hrefLang="es-VE" href="https://gruasequiser.com" />
        <link rel="alternate" hrefLang="es" href="https://gruasequiser.com" />
        <link rel="alternate" hrefLang="en" href="https://gruasequiser.com?lang=en" />
        <link rel="alternate" hrefLang="en-US" href="https://gruasequiser.com?lang=en" />
        <link rel="alternate" hrefLang="x-default" href="https://gruasequiser.com" />
        
        {/* Schema.org LocalBusiness + FAQPage Markup Optimizado */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(companySchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema()) }}
        />
        
        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Inicio",
                  "item": "https://gruasequiser.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Servicios",
                  "item": "https://gruasequiser.com#servicios"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Equipos",
                  "item": "https://gruasequiser.com#equipos"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Proyectos",
                  "item": "https://gruasequiser.com#proyectos"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Blog",
                  "item": "https://gruasequiser.com/blog"
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "name": "Contacto",
                  "item": "https://gruasequiser.com#contacto"
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <IntlProvider>
          {children}
          <WhatsappWidget />
          <Toaster />
        </IntlProvider>
      </body>
    </html>
  )
}