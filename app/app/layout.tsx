
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { WhatsappWidget } from '@/components/whatsapp-widget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EQUISER - Líder en Grúas Móviles y Transporte Pesado Venezuela | Alquiler Grúas 25-1600 TON',
  description: 'EQUISER C.A. - Más de 30 años como empresa líder en alquiler de grúas móviles, sobre oruga y transporte pesado en Venezuela. Capacidades 25-1600 toneladas. Marcas Liebherr, Grove, Manitowoc. Atención 24/7.',
  keywords: 'grúas móviles Venezuela, alquiler grúas Venezuela, transporte pesado Venezuela, grúas sobre oruga Venezuela, super lowboy Venezuela, EQUISER, Liebherr, Grove, Manitowoc',
  openGraph: {
    title: 'EQUISER - Líder en Grúas Móviles Venezuela',
    description: '30+ años liderando el mercado venezolano con grúas de 25-1600 TON',
    url: 'https://gruasequiser.net',
    siteName: 'EQUISER C.A.',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Grúas EQUISER C.A.",
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
                "https://wa.me/584143432882"
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
