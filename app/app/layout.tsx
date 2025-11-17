

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { WhatsappWidget } from '@/components/whatsapp-widget'

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
  title: 'Alquiler Grúas Móviles Venezuela | EQUISER - Liebherr, Grove, Manitowoc | 25-1600 Toneladas',
  description: '✅ Líderes en alquiler de grúas móviles Venezuela. 30+ años experiencia, grúas Liebherr, Grove, Manitowoc 25-1600 ton. Disponibles 24/7. ☎️ Cotización inmediata.',
  keywords: 'alquiler grúas móviles venezuela, grúas telescópicas, grúas industriales, Liebherr, Grove, Manitowoc, Carabobo, alquiler grúas Carabobo, grúas sobre oruga Venezuela, izamiento industrial Venezuela, alquiler grúas 24 horas Venezuela, grúas móviles Puerto Cabello Morón, alquiler grúas Valencia Carabobo',
  
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
    title: 'Alquiler Grúas Móviles Venezuela | EQUISER 30+ Años Experiencia',
    description: '✅ Grúas telescópicas y sobre oruga 25-1600 toneladas. Liebherr, Grove, Manitowoc. Sectores petrolero, petroquímico, industrial. Disponibles 24/7',
    url: 'https://gruasequiser.net',
    siteName: 'GRÚAS EQUISER C.A.',
    locale: 'es_VE',
    type: 'website',
    images: [
      {
        url: 'https://vpl-ve.com/images/crane.jpg',
        width: 1200,
        height: 630,
        alt: 'Grúas EQUISER - Alquiler de Grúas Móviles Venezuela'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alquiler Grúas Móviles Venezuela | EQUISER',
    description: 'Grúas Liebherr, Grove, Manitowoc 25-1600 ton. 30+ años experiencia',
    images: ['https://gruasequiser.net/og-image.webp'],
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
    canonical: 'https://gruasequiser.net',
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
        
        {/* Enhanced Schema.org LocalBusiness Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "GRÚAS EQUISER C.A.",
              "description": "Empresa líder en alquiler de grúas móviles, telescópicas y sobre oruga en Venezuela. Especialistas en sectores petrolero, petroquímico, industrial, portuario y siderúrgico.",
              "url": "https://gruasequiser.net",
              "telephone": "+58-422-6347624",
              "email": "info@gruasequiser.net",
              "logo": "https://static.vecteezy.com/system/resources/thumbnails/016/941/001/small/lifting-crane-logo-construction-company-rental-of-special-equipment-sale-of-equipment-for-construction-vector.webp",
              "image": "https://superiorrigging.com/wp-content/uploads/2023/12/QTS-Generator-Set-Over-Wall-13-768x576.webp",
              "foundingDate": "1994",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Autopista Puerto Cabello Morón, Sector La Paragüita",
                "addressLocality": "Morón",
                "addressRegion": "Carabobo",
                "postalCode": "2050",
                "addressCountry": "VE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "10.4880",
                "longitude": "-68.2010"
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "00:00",
                  "closes": "23:59"
                }
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "10.4880",
                  "longitude": "-68.2010"
                },
                "geoRadius": "500000"
              },
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+58-422-6347624",
                  "contactType": "customer service",
                  "availableLanguage": ["Spanish"],
                  "areaServed": "VE",
                  "hoursAvailable": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday"
                    ]
                  }
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+58-422-6347624",
                  "contactType": "sales",
                  "availableLanguage": ["Spanish"],
                  "areaServed": "VE"
                }
              ],
              "sameAs": [
                "https://wa.me/message/IOBBJVBBVWNOI1",
                "https://www.facebook.com/gruasequiser",
                "https://www.instagram.com/gruasequiser",
                "https://www.linkedin.com/company/gruasequiser"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicios de Alquiler de Grúas",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Alquiler de Grúas Móviles",
                      "description": "Grúas móviles telescópicas de 25 a 1600 toneladas. Marcas Liebherr, Grove, Manitowoc."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Alquiler de Grúas Sobre Oruga",
                      "description": "Grúas sobre oruga para proyectos industriales de gran envergadura."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Transporte Pesado y Extrapesado",
                      "description": "Transporte especializado de cargas hasta 250 toneladas con Super Lowboy."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Manejo de Carga Excepcional",
                      "description": "Servicios especializados de izamiento y manipulación de cargas industriales."
                    }
                  }
                ]
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Morón",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Carabobo"
                  }
                },
                {
                  "@type": "City",
                  "name": "Puerto Cabello",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Carabobo"
                  }
                },
                {
                  "@type": "City",
                  "name": "Valencia",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Carabobo"
                  }
                },
                {
                  "@type": "Country",
                  "name": "Venezuela"
                }
              ],
              "knowsAbout": [
                "Alquiler de grúas móviles",
                "Grúas telescópicas",
                "Grúas sobre oruga",
                "Izamiento industrial",
                "Transporte pesado",
                "Liebherr",
                "Grove",
                "Manitowoc",
                "Sector petrolero",
                "Sector petroquímico",
                "Sector industrial",
                "Sector portuario"
              ]
            })
          }}
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
                  "item": "https://gruasequiser.net"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Servicios",
                  "item": "https://gruasequiser.net#servicios"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Equipos",
                  "item": "https://gruasequiser.net#equipos"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Proyectos",
                  "item": "https://gruasequiser.net#proyectos"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Contacto",
                  "item": "https://gruasequiser.net#contacto"
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <WhatsappWidget />
        <Toaster />
      </body>
    </html>
  )
}