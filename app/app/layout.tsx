

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { WhatsappWidget } from '@/components/whatsapp-widget'
import { WebVitals } from '@/components/web-vitals'
import { IntlProvider } from '@/components/providers/intl-provider'
import { companySchema } from '@/lib/schema-generator'
import { FAQSchema } from '@/components/structured-data/faq-schema'
import { homeFAQs } from '@/lib/faq-data'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true
})

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
  metadataBase: new URL('https://gruasequiser.com'),
  
  title: 'Grúas Industriales 25-1600 Ton Venezuela | Transporte Carga Pesada | EQUISER',
  description: '✓ Grúas móviles y oruga 25-1600 ton ✓ Super lowboy hidráulico ✓ Transporte sobredimensionado ✓ Proyectos industriales ✓ Izamiento industrial ✓ NO grúas de remolque. Maracaibo, Barcelona, Valencia, Puerto Cabello, Faja Orinoco, Puerto La Cruz ☎️ +58 422-6347624',
  keywords: 'grúas industriales Venezuela, alquiler grúas móviles hidráulicas, grúas sobre oruga 600 toneladas, super lowboy hidráulico, transporte carga sobredimensionada Venezuela, grúas telescópicas industriales, grúas alta capacidad, equipos izamiento industrial, grúas certificadas sector petrolero, rigging industrial Venezuela, grúas Maracaibo, grúas Barcelona Anzoátegui, grúas Valencia Carabobo, grúas Puerto Cabello, grúas Faja del Orinoco, grúas Puerto La Cruz, grúas Ciudad Guayana, grúas sector petrolero, grúas sector petroquímico, grúas Pequiven, grúas Refinería El Palito, transporte transformadores industriales',
  
  // Iconos y Favicons
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  
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
    google: 'juDqG9X59TFYYuUY2hgcxofkiWBdFsO6AvZzoMTlJfM',
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
        {/* CSS Crítico Inline para Above-the-Fold (elimina bloqueo de renderizado) */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Reset y base styles críticos */
            *,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}
            html{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}
            body{margin:0;line-height:inherit;background-color:#fff}
            
            /* Hero section crítica */
            .hero-section{
              min-height:100vh;
              display:flex;
              align-items:center;
              background:linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
              position:relative;
              overflow:hidden;
            }
            .hero-content{
              max-width:1200px;
              margin:0 auto;
              padding:0 20px;
              position:relative;
              z-index:10;
            }
            .hero-title{
              font-size:clamp(2rem, 5vw, 3.5rem);
              font-weight:700;
              color:#fff;
              margin-bottom:1rem;
              line-height:1.2;
            }
            .hero-subtitle{
              font-size:clamp(1rem, 2.5vw, 1.5rem);
              color:#fbbf24;
              font-weight:600;
              margin-bottom:1.5rem;
            }
            .hero-description{
              font-size:clamp(0.875rem, 1.5vw, 1.125rem);
              color:#e0e7ff;
              margin-bottom:2rem;
              line-height:1.6;
            }
            
            /* Header crítico */
            header{
              position:fixed;
              top:0;
              left:0;
              right:0;
              z-index:50;
              background:rgba(255,255,255,0.95);
              backdrop-filter:blur(10px);
              box-shadow:0 1px 3px 0 rgba(0,0,0,0.1);
            }
            
            /* Botones críticos */
            .btn-primary{
              background-color:#fbbf24;
              color:#1e3a8a;
              padding:0.75rem 1.5rem;
              border-radius:0.5rem;
              font-weight:600;
              transition:all 0.3s ease;
              display:inline-flex;
              align-items:center;
              gap:0.5rem;
              min-height:44px;
              min-width:44px;
            }
            .btn-primary:hover{
              background-color:#f59e0b;
              transform:translateY(-2px);
              box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);
            }
            
            /* Prevenir CLS en imágenes */
            img{
              max-width:100%;
              height:auto;
              display:block;
              background-color:#f3f4f6;
            }
            
            /* Skeleton loader para imágenes */
            @keyframes pulse{
              0%,100%{opacity:1}
              50%{opacity:0.5}
            }
            .animate-pulse{
              animation:pulse 2s cubic-bezier(0.4,0,0.6,1) infinite;
            }
            
            /* Transiciones suaves globales */
            *{
              transition-timing-function:cubic-bezier(0.4,0,0.2,1);
            }
          `
        }} />
        
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
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* PRELOAD ÚNICO CON IMAGESRCSET (más eficiente) */}
        <link
          rel="preload"
          as="image"
          type="image/webp"
          href="/images/optimized/grua-de-800-ton-800w.webp"
          imageSrcSet="/images/optimized/grua-de-800-ton-400w.webp 400w,
                       /images/optimized/grua-de-800-ton-800w.webp 800w,
                       /images/optimized/grua-de-800-ton-1200w.webp 1200w,
                       /images/optimized/grua-de-800-ton-1600w.webp 1600w"
          imageSizes="100vw"
        />
        
        {/* Preload Logo */}
        <link
          rel="preload"
          as="image"
          type="image/webp"
          href="/images/logo-equiser-actualizado-400w.webp"
        />
        
        {/* Preload Fuente */}
        <link
          rel="preload"
          href="/_next/static/media/e4af272ccee01ff0-s.p.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Preload de CSS crítico */}
        <link rel="preload" href="/_next/static/css/app/layout.css" as="style" />
        
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
        {/* FAQPage Schema Consolidado - 9 preguntas totales */}
        <FAQSchema faqs={homeFAQs} />
        
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
          <WebVitals />
        </IntlProvider>
      </body>
    </html>
  )
}