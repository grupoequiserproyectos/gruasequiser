
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, AlertTriangle, CheckCircle2, XCircle, Building2, Factory } from 'lucide-react'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export function IndustrialFAQSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const t = useTranslations('faq')
  const [openIndex, setOpenIndex] = useState<number | null>(0) // Primera pregunta abierta por defecto

  const faqs = [
    {
      icon: <XCircle className="w-6 h-6 text-red-500" />,
      question: t('q1Question'),
      answer: t('q1Answer'),
      type: "negative"
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
      question: t('q2Question'),
      answer: t('q2Answer'),
      type: "warning"
    },
    {
      icon: <XCircle className="w-6 h-6 text-red-500" />,
      question: t('q3Question'),
      answer: t('q3Answer'),
      type: "negative"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-equiser-yellow" />,
      question: t('q4Question'),
      answer: t('q4Answer'),
      type: "positive"
    },
    {
      icon: <Building2 className="w-6 h-6 text-blue-500" />,
      question: t('q5Question'),
      answer: t('q5Answer'),
      type: "info"
    },
    {
      icon: <Factory className="w-6 h-6 text-purple-500" />,
      question: t('q6Question'),
      answer: t('q6Answer'),
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
      case 'positive': return 'bg-yellow-50 border-equiser-yellow/30 hover:bg-yellow-100'
      case 'info': return 'bg-blue-50 border-blue-200 hover:bg-blue-100'
      default: return 'bg-gray-50 border-gray-200 hover:bg-gray-100'
    }
  }

  return (
    <section id="faq-industrial" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      {/* NOTA: FAQPage Schema ahora consolidado en /app/layout.tsx con FAQSchema component */}
      {/* NO agregar bloques FAQPage duplicados aquí para evitar errores de GSC */}
      
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
              {t('sectionBadge')}
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-equiser-blue mb-4">
            {t('sectionTitle')}
            <span className="block text-2xl sm:text-3xl md:text-4xl text-gray-600 mt-2">
              {t('sectionSubtitle')}
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('sectionDescription')} <span className="font-bold text-equiser-blue">{t('sectionDescriptionBold')}</span> {t('sectionDescriptionEnd')}
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
                  <span className="text-red-700 font-bold">{t('warningLabel')}</span> {t('warningText')} <span className="underline">{t('warningTextUnderline')}</span> {t('warningTextEnd')}
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
                aria-expanded={openIndex === index}
                aria-label={`${openIndex === index ? 'Cerrar' : 'Abrir'} pregunta: ${faq.question}`}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="mt-1" aria-hidden="true">
                    {faq.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight pr-4">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 text-gray-700 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
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
              {t('ctaTitle')}
            </h3>
            <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto font-medium" style={{ 
              color: 'white',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}>
              {t('ctaDescription')}
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
                <span>{t('ctaButtonIcon')}</span>
                {t('ctaButton')}
                <span>→</span>
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
