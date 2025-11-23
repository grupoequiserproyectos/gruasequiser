

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { WhatsappWidget } from '@/components/whatsapp-widget'
import { IntlProvider } from '@/components/providers/intl-provider'

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
        
        {/* Enhanced Schema.org LocalBusiness Markup Ultra-Específico Industrial */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://gruasequiser.com/#organization",
              "additionalType": [
                "https://schema.org/IndustrialEquipmentRental",
                "https://schema.org/HeavyEquipmentRental"
              ],
              "name": "Grúas EQUISER C.A. - Equipos Industriales Pesados",
              "alternateName": "EQUISER",
              "description": "Proveedor especializado en alquiler de grúas industriales de alta capacidad (25-1600 toneladas), grúas móviles hidráulicas, grúas sobre oruga, super lowboy hidráulico y transporte de carga sobredimensionada para sectores petrolero, petroquímico, energético, siderúrgico, portuario e industrial en Venezuela. NO servicios de grúas de remolque para vehículos.",
              "url": "https://gruasequiser.com",
              "telephone": "+58-422-6347624",
              "email": "info@gruasequiser.com",
              "logo": "https://gruasequiser.com/images/logo-equiser-actualizado.webp",
              "image": "https://cdn.allcrane.com/sitefinity/images/default-source/case-studies/bigharvest-inset.jpg?sfvrsn=288371d7_2",
              "foundingDate": "1994",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Barcelona",
                "addressLocality": "Barcelona",
                "addressRegion": "Anzoátegui",
                "addressCountry": "VE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "10.1339",
                "longitude": "-64.6861"
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
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Maracaibo",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Zulia"
                  }
                },
                {
                  "@type": "City",
                  "name": "Barcelona",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Anzoátegui"
                  }
                },
                {
                  "@type": "City",
                  "name": "Puerto La Cruz",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Anzoátegui"
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
                  "@type": "City",
                  "name": "Ciudad Guayana",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Bolívar"
                  }
                },
                {
                  "@type": "City",
                  "name": "Maturín",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Monagas"
                  }
                },
                {
                  "@type": "City",
                  "name": "Caracas",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Distrito Capital"
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
                  "@type": "Place",
                  "name": "Faja Petrolífera del Orinoco"
                },
                {
                  "@type": "Place",
                  "name": "Complejo José Antonio Anzoátegui"
                },
                {
                  "@type": "State",
                  "name": "Anzoátegui"
                },
                {
                  "@type": "State",
                  "name": "Zulia"
                },
                {
                  "@type": "State",
                  "name": "Carabobo"
                },
                {
                  "@type": "State",
                  "name": "Bolívar"
                },
                {
                  "@type": "State",
                  "name": "Monagas"
                },
                {
                  "@type": "State",
                  "name": "Falcón"
                },
                {
                  "@type": "Country",
                  "name": "Venezuela"
                }
              ],
              "priceRange": "$$$",
              "paymentAccepted": ["Transferencia bancaria", "Efectivo", "Cheque"],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "47",
                "bestRating": "5",
                "worstRating": "1"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+58-422-6347624",
                  "contactType": "customer service",
                  "availableLanguage": ["Spanish", "English"],
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
                  "availableLanguage": ["Spanish", "English"],
                  "areaServed": "VE"
                }
              ],
              "sameAs": [
                "https://wa.me/message/IOBBJVBBVWNOI1",
                "https://www.facebook.com/gruasequiser",
                "https://www.instagram.com/gruasequiser",
                "https://www.linkedin.com/company/gruasequiser"
              ],
              "audience": {
                "@type": "BusinessAudience",
                "audienceType": "Empresas del sector industrial, petrolero, petroquímico, energético, siderúrgico, portuario y construcción pesada"
              },
              "memberOf": {
                "@type": "Organization",
                "name": "Proveedores Certificados Sector Industrial Venezuela"
              },
              "knowsAbout": [
                "Grúas móviles hidráulicas",
                "Grúas sobre oruga",
                "Transporte de carga sobredimensionada",
                "Izamiento industrial",
                "Rigging especializado",
                "Ingeniería de izamiento",
                "Proyectos petroleros",
                "Proyectos petroquímicos",
                "Proyectos siderúrgicos"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Equipos Industriales Pesados",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Alquiler Grúas Móviles Hidráulicas 25-130 Toneladas",
                      "description": "Grúas móviles todo terreno marca Grove, Liebherr y Manitowoc para proyectos industriales medianos, petroleros y de construcción pesada. Capacidades 25, 65, 80, 100, 130 toneladas",
                      "serviceType": "Industrial Mobile Crane Rental"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Alquiler Grúas Móviles Hidráulicas 200-500 Toneladas",
                      "description": "Grúas móviles de alta capacidad para proyectos de gran envergadura en sectores petrolero, petroquímico y energético. Capacidades 200, 300, 400, 500 toneladas",
                      "serviceType": "Heavy Duty Mobile Crane Rental"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Alquiler Grúas de Oruga 300-1600 Toneladas",
                      "description": "Grúas lattice boom sobre orugas marca Demag, Manitowoc y Liebherr para proyectos de alta complejidad en sectores petrolero, petroquímico, energético y siderúrgico. Capacidades 300, 450, 600, 800, 1600 toneladas",
                      "serviceType": "Heavy Crawler Crane Rental"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Transporte Carga Sobredimensionada con Super Lowboy Hidráulico",
                      "description": "Camas bajas especializadas, super lowboys hidráulicos y transporte de equipos industriales hasta 250 toneladas. Especializado en transporte de transformadores, turbinas, reactores y equipos industriales de gran tonelaje",
                      "serviceType": "Heavy Haul Transportation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Servicios de Rigging e Ingeniería de Izamiento",
                      "description": "Cálculos estructurales, planes de izamiento, rigging especializado, aparejamiento industrial para sectores petrolero, petroquímico, energético y siderúrgico",
                      "serviceType": "Industrial Rigging Services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Izamiento y Montaje Industrial Sector Petrolero y Petroquímico",
                      "description": "Servicios especializados para proyectos industriales en Pequiven, Refinería El Palito, Complejo José y sector petrolero venezolano. Certificaciones y estándares específicos del sector",
                      "serviceType": "Industrial Lifting and Heavy Transport"
                    }
                  }
                ]
              },
              "makesOffer": [
                {
                  "@type": "Offer",
                  "name": "Servicios 24/7 Disponibles",
                  "description": "Disponibilidad inmediata para proyectos de emergencia"
                },
                {
                  "@type": "Offer",
                  "name": "Cobertura Nacional Venezuela",
                  "description": "Servicio en Maracaibo, Barcelona, Valencia, Faja del Orinoco, Puerto La Cruz, Ciudad Guayana y todo el territorio nacional"
                },
                {
                  "@type": "Offer",
                  "name": "Operadores Certificados",
                  "description": "Personal altamente capacitado y certificado para operaciones de alto riesgo"
                }
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