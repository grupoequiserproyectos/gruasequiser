/**
 * FAQSchema Component
 * 
 * Genera structured data tipo FAQPage para Google Search Console
 * 
 * IMPORTANTE: Este es el ÚNICO lugar donde se debe generar FAQPage schema.
 * NO crear bloques FAQPage duplicados en otros componentes para evitar
 * errores en Google Search Console.
 * 
 * Uso:
 * <FAQSchema faqs={homeFAQs} />
 * 
 * @see /lib/faq-data.ts para las preguntas consolidadas
 * @see https://schema.org/FAQPage para especificación oficial
 * @see https://developers.google.com/search/docs/appearance/structured-data/faqpage
 */

import { FAQ } from '@/lib/faq-data'

interface FAQSchemaProps {
  faqs: FAQ[]
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
