
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { WhatsappWidget } from '@/components/whatsapp-widget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GRÚAS EQUISER C.A. - Líder En Alquiler De Grúas Móviles Y Sobre Oruga Venezuela | Grúas Hasta 1600 Toneladas',
  description: 'GRÚAS EQUISER C.A. - Más de 30 años como empresa líder en alquiler de grúas móviles, sobre oruga y transporte pesado en Venezuela. Grúas hasta 1600 toneladas. Marcas Liebherr, Grove, Manitowoc, Demag. Atención 24/7.',
  keywords: 'alquiler grúas móviles Venezuela, grúas sobre oruga Venezuela, transporte pesado Venezuela, grúas móviles Venezuela, super lowboy Venezuela, GRÚAS EQUISER, Liebherr, Grove, Manitowoc, Demag',
  openGraph: {
    title: 'GRÚAS EQUISER C.A. - Líder En Alquiler De Grúas Móviles Venezuela',
    description: '30+ años liderando el mercado venezolano con grúas hasta 1600 toneladas',
    url: 'https://gruasequiser.net',
    siteName: 'GRÚAS EQUISER C.A.',
    locale: 'es_VE',
    type: 'website',
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
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-VE">
      <head>
        <meta name="geo.region" content="VE" />
        <meta name="geo.placename" content="Venezuela" />
        <meta name="geo.position" content="10.5;-67.0" />
        <meta name="ICBM" content="10.5, -67.0" />
        <link rel="canonical" href="https://gruasequiser.net" />
        
        {/* Favicons de GRÚAS EQUISER */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <meta name="theme-color" content="#1E3A8A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "GRÚAS EQUISER C.A.",
              "description": "Empresa líder en alquiler de grúas móviles, sobre oruga y transporte pesado en Venezuela",
              "url": "https://gruasequiser.net",
              "logo": "https://equisercranes.com/wp-content/uploads/2020/10/logo.png",
              "foundingDate": "1994",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Autopista Puerto Cabello Morón, sector la Paragüita, diagonal a Planta Centro",
                "addressLocality": "Morón",
                "addressRegion": "Carabobo",
                "addressCountry": "VE"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+58-414-343-2882",
                  "contactType": "customer service",
                  "availableLanguage": "Spanish",
                  "hoursAvailable": "24/7"
                }
              ],
              "sameAs": [
                "https://api.whatsapp.com/message/E6H4WASHIL6LB1?autoload=1&app_absent=0"
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
