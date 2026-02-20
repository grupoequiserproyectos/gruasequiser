'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, Search, MessageCircle, Phone, Star, FileText, Settings, Shield, Wrench, DollarSign, MapPin } from 'lucide-react'
import { useLocale } from 'next-intl'
import { FAQS_COMPLETE, FAQ_CATEGORIES, getFAQsByCategory, getCategoryCount, searchFAQs, type FAQ } from '@/lib/faq-complete-data'

const categoryIcons: Record<string, React.ReactNode> = {
  top10: <Star className="w-4 h-4" />,
  general: <FileText className="w-4 h-4" />,
  alquiler: <FileText className="w-4 h-4" />,
  servicios: <Settings className="w-4 h-4" />,
  seguridad: <Shield className="w-4 h-4" />,
  mantenimiento: <Wrench className="w-4 h-4" />,
  costos: <DollarSign className="w-4 h-4" />,
  venezuela: <MapPin className="w-4 h-4" />,
}

export function FAQPageSection() {
  const locale = useLocale() as 'es' | 'en'
  const [activeCategory, setActiveCategory] = useState<string>('top10')
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const filteredFAQs = useMemo(() => {
    if (searchTerm.trim()) {
      return searchFAQs(searchTerm, locale)
    }
    return getFAQsByCategory(activeCategory)
  }, [activeCategory, searchTerm, locale])

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    setOpenIndex(0)
    setSearchTerm('')
  }

  const texts = {
    es: {
      badge: 'PREGUNTAS FRECUENTES',
      title: 'Tienes',
      titleHighlight: 'Preguntas?',
      subtitle: `Más de ${FAQS_COMPLETE.length} respuestas sobre alquiler de grúas, izaje industrial, seguridad y transporte pesado en Venezuela.`,
      searchPlaceholder: 'Buscar preguntas...',
      noResults: 'No se encontraron resultados para tu búsqueda.',
      ctaTitle: '¿No encontraste tu respuesta?',
      ctaText: 'Nuestro equipo de expertos está listo para ayudarte con cualquier consulta técnica sobre grúas industriales.',
      ctaButton: 'Consultar por WhatsApp',
      ctaPhone: 'Llamar ahora',
    },
    en: {
      badge: 'FREQUENTLY ASKED QUESTIONS',
      title: 'Have',
      titleHighlight: 'Questions?',
      subtitle: `Over ${FAQS_COMPLETE.length} answers about crane rental, industrial lifting, safety and heavy transport in Venezuela.`,
      searchPlaceholder: 'Search questions...',
      noResults: 'No results found for your search.',
      ctaTitle: "Didn't find your answer?",
      ctaText: 'Our team of experts is ready to help you with any technical inquiry about industrial cranes.',
      ctaButton: 'Ask via WhatsApp',
      ctaPhone: 'Call now',
    }
  }

  const t = texts[locale]

  return (
    <section 
      ref={ref}
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"
      id="preguntas-frecuentes"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-equiser-blue/10 text-equiser-blue text-sm font-bold rounded-full mb-4">
            {t.badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {t.title} <span className="text-equiser-yellow">{t.titleHighlight}</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-equiser-yellow focus:ring-2 focus:ring-equiser-yellow/20 outline-none transition-all text-gray-900"
              aria-label={t.searchPlaceholder}
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        {!searchTerm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {FAQ_CATEGORIES.map((category) => {
              const count = getCategoryCount(category.id)
              const isActive = activeCategory === category.id
              const name = locale === 'es' ? category.name_es : category.name_en
              
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  aria-label={`Filtrar por ${name}`}
                  aria-pressed={isActive}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 border-2 ${
                    isActive
                      ? 'bg-equiser-yellow text-equiser-blue border-equiser-yellow shadow-lg scale-105'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-equiser-yellow hover:shadow-md'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{name}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    isActive ? 'bg-equiser-blue/20 text-equiser-blue' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </motion.div>
        )}

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">{t.noResults}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => {
                const question = locale === 'es' ? faq.question_es : faq.question_en
                const answer = locale === 'es' ? faq.answer_es : faq.answer_en
                const isOpen = openIndex === index

                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`border-2 rounded-xl overflow-hidden transition-all duration-300 ${
                      isOpen 
                        ? 'border-equiser-yellow bg-equiser-yellow/5 shadow-lg' 
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      aria-label={`${isOpen ? 'Cerrar' : 'Abrir'}: ${question}`}
                      className="w-full px-6 py-5 flex items-center justify-between text-left transition-all"
                    >
                      <span className={`font-semibold text-base md:text-lg pr-4 ${
                        isOpen ? 'text-equiser-blue' : 'text-gray-800'
                      }`}>
                        {question}
                      </span>
                      <ChevronDown 
                        className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-equiser-yellow' : 'text-gray-400'
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pt-0">
                            <div className="border-t border-gray-200 pt-4">
                              <p className="text-gray-700 leading-relaxed">
                                {answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-equiser-blue to-blue-700 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              {t.ctaText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/message/IOBBJVBBVWNOI1', '_blank')}
                aria-label={t.ctaButton}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-equiser-yellow text-equiser-blue font-bold rounded-full hover:scale-105 transition-transform shadow-lg"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                {t.ctaButton}
              </button>
              <a
                href="tel:+584226347624"
                aria-label={t.ctaPhone}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors border-2 border-white/30"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                {t.ctaPhone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
