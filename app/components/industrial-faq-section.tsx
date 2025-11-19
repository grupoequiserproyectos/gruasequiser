
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, AlertTriangle, CheckCircle2, XCircle, Building2, Factory } from 'lucide-react'
import { useState } from 'react'

export function IndustrialFAQSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [openIndex, setOpenIndex] = useState<number | null>(0) // Primera pregunta abierta por defecto

  const faqs = [
    {
      icon: <XCircle className="w-6 h-6 text-red-500" />,
      question: "¿EQUISER remolca carros o vehículos particulares?",
      answer: "NO. EQUISER se especializa EXCLUSIVAMENTE en proyectos industriales de gran escala. Nuestras grúas móviles y de oruga tienen capacidades de 25 a 1,600 toneladas, diseñadas para sectores petrolero, petroquímico, energético, siderúrgico, portuario y construcción pesada. NO ofrecemos servicios de grúas de remolque para vehículos ligeros.",
      type: "negative"
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
      question: "¿Cuál es la capacidad MÍNIMA de sus grúas?",
      answer: "Nuestra grúa de menor capacidad es de 25 toneladas, ideal para proyectos industriales medianos. Para referencia, esto equivale a levantar aproximadamente 35-40 vehículos compactos simultáneamente. Trabajamos exclusivamente con empresas en proyectos de infraestructura, petróleo, petroquímica, energía, siderurgia y manufactura pesada.",
      type: "warning"
    },
    {
      icon: <XCircle className="w-6 h-6 text-red-500" />,
      question: "¿Atienden proyectos residenciales o particulares?",
      answer: "NO. EQUISER está enfocado en el sector industrial B2B. Atendemos proyectos de PDVSA, empresas petroleras, plantas eléctricas, constructoras de infraestructura mayor, siderúrgicas (SIDOR), puertos y manufactura pesada. Nuestros servicios incluyen transporte de transformadores, turbinas, reactores, generadores, estructuras metálicas mayores y equipos industriales de gran tonelaje.",
      type: "negative"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-green-500" />,
      question: "¿Qué tipos de proyectos industriales realizan?",
      answer: "Realizamos proyectos de alta complejidad: instalación de transformadores eléctricos (50-250 ton), montaje de turbinas en plantas térmicas, izamiento de reactores petroquímicos, transporte de generadores industriales, movilización de equipos para PDVSA/Petromonagas, proyectos siderúrgicos en Ciudad Guayana, operaciones portuarias de carga pesada, y montajes industriales en refinería. Contamos con certificaciones específicas para el sector petrolero venezolano.",
      type: "positive"
    },
    {
      icon: <Building2 className="w-6 h-6 text-blue-500" />,
      question: "¿En qué ciudades de Venezuela operan?",
      answer: "Tenemos cobertura nacional con base de operaciones en Barcelona, Anzoátegui. Operamos regularmente en: Maracaibo (Zulia) - sector petrolero, Valencia y Puerto Cabello (Carabobo) - industrial/portuario, Faja del Orinoco (Anzoátegui/Monagas) - proyectos PDVSA, Puerto La Cruz - operaciones portuarias, Ciudad Guayana (Bolívar) - sector siderúrgico, Complejo José - refinería, Caracas y Miranda - proyectos energéticos, Maturín (Monagas) - sector petrolero, y todo el territorio nacional según requerimientos del proyecto.",
      type: "info"
    },
    {
      icon: <Factory className="w-6 h-6 text-purple-500" />,
      question: "¿Qué sectores industriales son sus clientes principales?",
      answer: "Nuestros clientes principales son: SECTOR PETROLERO (PDVSA, Petromonagas, empresas mixtas), PETROQUÍMICO (Complejo José, refinerías), ENERGÉTICO (plantas eléctricas, generación térmica), SIDERÚRGICO (SIDOR, manufactura de acero), PORTUARIO (puertos de Puerto La Cruz, Puerto Cabello, La Guaira), INDUSTRIAL (manufactura pesada, plantas químicas), CONSTRUCCIÓN MAYOR (infraestructura, puentes, viaductos), y MINERÍA (proyectos de extracción y procesamiento).",
      type: "info"
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const getBackgroundColor = (type: string) => {
    switch(type) {
      case 'negative': return 'bg-red-50 border-red-200 hover:bg-red-100'
      case 'warning': return 'bg-orange-50 border-orange-200 hover:bg-orange-100'
      case 'positive': return 'bg-green-50 border-green-200 hover:bg-green-100'
      case 'info': return 'bg-blue-50 border-blue-200 hover:bg-blue-100'
      default: return 'bg-gray-50 border-gray-200 hover:bg-gray-100'
    }
  }

  // Schema FAQPage para SEO
  const faqSchema = {
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
    <section id="faq-industrial" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      {/* Schema FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Badge */}
          <motion.div 
            className="inline-block bg-equiser-yellow/20 px-4 py-2 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-equiser-blue text-sm font-bold uppercase tracking-wider">
              Servicios B2B Exclusivamente
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-equiser-blue mb-4">
            Preguntas Frecuentes
            <span className="block text-2xl sm:text-3xl md:text-4xl text-gray-600 mt-2">
              Sobre Nuestros Servicios Industriales
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Aclaramos las dudas más comunes sobre nuestros servicios de <span className="font-bold text-equiser-blue">grúas industriales de alta capacidad</span> y transporte de carga pesada
          </p>

          {/* Advertencia destacada */}
          <motion.div 
            className="mt-6 bg-gradient-to-r from-red-100 to-orange-100 border-l-4 border-red-500 p-4 rounded-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
              <div className="text-left">
                <p className="text-sm sm:text-base text-gray-800 font-semibold">
                  <span className="text-red-700 font-bold">IMPORTANTE:</span> EQUISER NO realiza servicios de grúas de remolque para vehículos ligeros, asistencia vial, ni proyectos residenciales. 
                  Somos especialistas en <span className="underline">equipos industriales pesados</span> para el sector B2B.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`border-2 rounded-xl overflow-hidden transition-all duration-300 ${getBackgroundColor(faq.type)}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="mt-1">
                    {faq.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight pr-4">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 text-gray-600 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 pl-16">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Final con mejor legibilidad */}
        <motion.div
          className="mt-12 text-center rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          style={{
            background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)',
            border: '3px solid #FFC107'
          }}
        >
          <div className="p-8 sm:p-12" style={{ background: 'rgba(30, 58, 138, 0.95)' }}>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ 
              color: '#FFC107',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}>
              ¿Su proyecto requiere equipos industriales pesados?
            </h3>
            <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto font-medium" style={{ 
              color: 'white',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}>
              Si su empresa necesita grúas industriales, transporte de carga sobredimensionada o servicios de izamiento especializado, estamos listos para atenderle.
            </p>
            <motion.a
              href="https://wa.me/message/IOBBJVBBVWNOI1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #FFC107 0%, #FFD700 100%)',
                color: '#1E3A8A',
                boxShadow: '0 8px 25px rgba(255, 193, 7, 0.4)'
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 12px 35px rgba(255, 193, 7, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                <span>💬</span>
                Solicitar Cotización Industrial
                <span>→</span>
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
