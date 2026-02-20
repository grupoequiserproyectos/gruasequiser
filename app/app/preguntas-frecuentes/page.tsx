import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { FAQS_COMPLETE } from '@/lib/faq-complete-data'

const Header = dynamic(() => import('@/components/header').then(mod => ({ default: mod.Header })), { ssr: true })
const FAQPageSection = dynamic(() => import('@/components/faq-page-section').then(mod => ({ default: mod.FAQPageSection })), { ssr: true })
const Footer = dynamic(() => import('@/components/footer').then(mod => ({ default: mod.Footer })), { ssr: true })

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes sobre Grúas Industriales | EQUISER Venezuela',
  description: `Más de ${FAQS_COMPLETE.length} respuestas sobre alquiler de grúas telescópicas, sobre oruga, izaje industrial, seguridad COVENIN y transporte pesado en Venezuela. Líder en grúas de 25 a 1600 toneladas.`,
  keywords: [
    'preguntas frecuentes grúas venezuela',
    'faq alquiler grúas industriales',
    'dudas grúas telescópicas',
    'consultas grúas sobre oruga',
    'información izaje industrial venezuela',
    'costos alquiler grúas',
    'certificaciones COVENIN grúas',
    'seguridad izaje industrial',
    'transporte pesado venezuela faq',
    'EQUISER preguntas',
  ],
  alternates: {
    canonical: 'https://gruasequiser.com/preguntas-frecuentes',
    languages: {
      'es': 'https://gruasequiser.com/preguntas-frecuentes',
      'en': 'https://gruasequiser.com/faq',
    },
  },
  openGraph: {
    title: 'Preguntas Frecuentes | Grúas EQUISER Venezuela',
    description: `+${FAQS_COMPLETE.length} respuestas sobre grúas industriales, alquiler, seguridad y transporte en Venezuela.`,
    url: 'https://gruasequiser.com/preguntas-frecuentes',
    siteName: 'Grúas EQUISER',
    locale: 'es_VE',
    type: 'website',
  },
}

// Schema.org FAQPage para SEO
function generateFAQSchema() {
  // Usar las primeras 50 FAQs más relevantes para el schema
  const topFAQs = FAQS_COMPLETE.slice(0, 50)
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Preguntas Frecuentes - Grúas EQUISER Venezuela",
    "description": "Respuestas a las preguntas más frecuentes sobre alquiler de grúas industriales, izaje y transporte pesado en Venezuela.",
    "mainEntity": topFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question_es,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer_es
      }
    }))
  }
}

export default function PreguntasFrecuentesPage() {
  const faqSchema = generateFAQSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="pt-20">
        <FAQPageSection />
      </main>
      <Footer />
    </>
  )
}
