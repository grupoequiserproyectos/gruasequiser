import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { FAQS_COMPLETE } from '@/lib/faq-complete-data'

const Header = dynamic(() => import('@/components/header').then(mod => ({ default: mod.Header })), { ssr: true })
const FAQPageSection = dynamic(() => import('@/components/faq-page-section').then(mod => ({ default: mod.FAQPageSection })), { ssr: true })
const Footer = dynamic(() => import('@/components/footer').then(mod => ({ default: mod.Footer })), { ssr: true })

export const metadata: Metadata = {
  title: 'FAQ - Industrial Crane Rental Questions | EQUISER Venezuela',
  description: `Over ${FAQS_COMPLETE.length} answers about telescopic crane rental, crawler cranes, industrial lifting, COVENIN safety and heavy transport in Venezuela. Leader in 25 to 1600 ton cranes.`,
  keywords: [
    'crane rental faq venezuela',
    'industrial crane questions',
    'telescopic crane information',
    'crawler crane rental queries',
    'industrial lifting venezuela faq',
    'crane rental costs',
    'COVENIN crane certifications',
    'industrial lifting safety',
    'heavy transport venezuela faq',
    'EQUISER questions',
  ],
  alternates: {
    canonical: 'https://gruasequiser.com/faq',
    languages: {
      'es': 'https://gruasequiser.com/preguntas-frecuentes',
      'en': 'https://gruasequiser.com/faq',
    },
  },
  openGraph: {
    title: 'FAQ | Industrial Cranes EQUISER Venezuela',
    description: `+${FAQS_COMPLETE.length} answers about industrial cranes, rental, safety and transport in Venezuela.`,
    url: 'https://gruasequiser.com/faq',
    siteName: 'Grúas EQUISER',
    locale: 'en_US',
    type: 'website',
  },
}

// Schema.org FAQPage for SEO (English)
function generateFAQSchema() {
  const topFAQs = FAQS_COMPLETE.slice(0, 50)
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "FAQ - Industrial Cranes EQUISER Venezuela",
    "description": "Answers to frequently asked questions about industrial crane rental, lifting and heavy transport in Venezuela.",
    "mainEntity": topFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question_en,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer_en
      }
    }))
  }
}

export default function FAQPage() {
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
