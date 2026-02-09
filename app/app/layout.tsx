import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { WhatsappWidget } from '@/components/whatsapp-widget'
import { IntlProvider } from '@/components/providers/intl-provider'
import { companySchema } from '@/lib/schema-generator'
import { FAQSchema } from '@/components/structured-data/faq-schema'
import { homeFAQs } from '@/lib/faq-data'

// Fuente optimizada - SOLO latin, swap, preload
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  variable: '--font-inter',
  fallback: ['system-ui', 'sans-serif'],
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1E3A8A',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://gruasequiser.com'),
  title: 'Grúas Industriales 25-1600 Ton Venezuela | EQUISER',
  description: '✓ Grúas móviles y oruga 25-1600 ton ✓ Super lowboy hidráulico ✓ Transporte sobredimensionado ✓ Proyectos industriales ✓ NO grúas de remolque. ☎️ +58 422-6347624',
  keywords: 'grúas industriales Venezuela, alquiler grúas móviles, grúas sobre oruga, transporte carga pesada',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Grúas Industriales Venezuela | EQUISER',
    description: 'Grúas móviles y oruga 25-1600 ton - Cobertura nacional',
    url: 'https://gruasequiser.com',
    siteName: 'EQUISER',
    locale: 'es_VE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'juDqG9X59TFYYuUY2hgcxofkiWBdFsO6AvZzoMTlJfM',
  },
  alternates: {
    canonical: 'https://gruasequiser.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-VE" className={inter.variable}>
      <head>
        {/* CRITICAL CSS INLINE - Renderizado instantáneo */}
        <style dangerouslySetInnerHTML={{
          __html: `
            *,::before,::after{box-sizing:border-box;margin:0;padding:0}
            html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:Inter,system-ui,sans-serif;scroll-behavior:auto}
            body{margin:0;background:#1e3a8a;color:#fff;min-height:100vh}
            img,video{max-width:100%;height:auto;display:block}
            button{cursor:pointer}
            a{color:inherit;text-decoration:none}
            /* Hero instantáneo */
            #inicio{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#1e3a8a;position:relative}
            /* Prevenir FOUC */
            .loading{opacity:1!important;visibility:visible!important}
            /* Desactivar TODAS las animaciones */
            *{animation:none!important;transition:none!important}
          `
        }} />
        
        {/* Preconnect críticos */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* PRELOAD imagen hero LCP */}
        <link
          rel="preload"
          as="image"
          type="image/webp"
          href="/images/optimized/grua-de-800-ton-400w-q70.webp"
          fetchPriority="high"
        />
        
        {/* Preload logo */}
        <link
          rel="preload"
          as="image"
          type="image/webp"
          href="/images/logo-equiser-nuevo-300w.webp"
        />
        
        {/* Meta móviles */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#1E3A8A" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="VE" />
        <meta name="geo.placename" content="Venezuela" />
        
        {/* HREFLANG */}
        <link rel="alternate" hrefLang="es" href="https://gruasequiser.com" />
        <link rel="alternate" hrefLang="en" href="https://gruasequiser.com?lang=en" />
        <link rel="alternate" hrefLang="x-default" href="https://gruasequiser.com" />
        
        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(companySchema) }}
        />
        <FAQSchema faqs={homeFAQs} />
        
        {/* Abacus script */}
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" />
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
