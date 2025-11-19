
'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Brain, Star, CheckCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function NosotrosSection() {
  const t = useTranslations('about')
  
  const aboutCards = [
    {
      icon: Target,
      title: t('mission'),
      content: t('missionContent'),
      isText: true
    },
    {
      icon: Eye,
      title: t('vision'),
      content: t('visionContent'),
      list: [
        t('visionItem1'),
        t('visionItem2'),
        t('visionItem3')
      ]
    },
    {
      icon: Brain,
      title: t('philosophy'),
      list: [
        t('philosophyItem1'),
        t('philosophyItem2'),
        t('philosophyItem3'),
        t('philosophyItem4'),
        t('philosophyItem5')
      ]
    },
    {
      icon: Star,
      title: t('values'),
      list: [
        t('valuesItem1'),
        t('valuesItem2'),
        t('valuesItem3'),
        t('valuesItem4')
      ]
    }
  ]

  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-equiser-blue mb-6">
            {t('title')}
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Grid de 4 tarjetas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {aboutCards.map((card, index) => {
            const IconComponent = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Header con icono y título */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-equiser-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-equiser-blue">
                    {card.title}
                  </h3>
                </div>

                {/* Contenido */}
                <div className="text-gray-600 leading-relaxed">
                  {card.content && (
                    <p className="mb-4 text-base">
                      {card.content}
                    </p>
                  )}
                  
                  {card.list && (
                    <ul className="space-y-3">
                      {card.list.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Sección rediseñada de compromiso con legibilidad mejorada */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #1E3A8A 100%)',
            padding: '80px 0'
          }}
        >
          {/* Patrón de fondo decorativo */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(255, 193, 7, 0.1) 0%, transparent 50%), 
                radial-gradient(circle at 80% 20%, rgba(255, 193, 7, 0.1) 0%, transparent 50%)
              `
            }}
          />
          
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Título Principal */}
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-5xl font-extrabold text-yellow-400 mb-5 uppercase tracking-wider">
                {t('commitment')}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 mx-auto rounded-full"></div>
            </div>

            {/* Contenido Principal */}
            <div className="bg-white bg-opacity-95 rounded-3xl p-6 md:p-12 mb-12 backdrop-blur-sm shadow-2xl">
              <p className="text-lg md:text-xl leading-relaxed text-equiser-blue text-center font-medium">
                {t('commitmentText')}
              </p>
            </div>

            {/* Estadísticas en Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              
              {/* Estadística 1: Años de Experiencia */}
              <motion.div 
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                  borderColor: '#FFC107'
                }}
                transition={{ duration: 0.3 }}
                className="bg-white bg-opacity-95 rounded-2xl p-6 md:p-8 text-center shadow-xl border-3 border-transparent hover:border-yellow-400 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-black text-equiser-blue mb-3">30+</div>
                <h4 className="text-base md:text-lg font-bold text-yellow-500 uppercase tracking-wide">
                  {t('yearsExperience')}
                </h4>
              </motion.div>

              {/* Estadística 2: Capacidad Máxima */}
              <motion.div 
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                  borderColor: '#FFC107'
                }}
                transition={{ duration: 0.3 }}
                className="bg-white bg-opacity-95 rounded-2xl p-6 md:p-8 text-center shadow-xl border-3 border-transparent hover:border-yellow-400 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-black text-equiser-blue mb-3">1600T</div>
                <h4 className="text-base md:text-lg font-bold text-yellow-500 uppercase tracking-wide">
                  {t('maxCapacity')}
                </h4>
              </motion.div>

              {/* Estadística 3: Proyectos Exitosos */}
              <motion.div 
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                  borderColor: '#FFC107'
                }}
                transition={{ duration: 0.3 }}
                className="bg-white bg-opacity-95 rounded-2xl p-6 md:p-8 text-center shadow-xl border-3 border-transparent hover:border-yellow-400 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-black text-equiser-blue mb-3">500+</div>
                <h4 className="text-base md:text-lg font-bold text-yellow-500 uppercase tracking-wide">
                  {t('successfulProjects')}
                </h4>
              </motion.div>

              {/* Estadística 4: Disponibilidad */}
              <motion.div 
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                  borderColor: '#FFC107'
                }}
                transition={{ duration: 0.3 }}
                className="bg-white bg-opacity-95 rounded-2xl p-6 md:p-8 text-center shadow-xl border-3 border-transparent hover:border-yellow-400 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-black text-equiser-blue mb-3">24/7</div>
                <h4 className="text-base md:text-lg font-bold text-yellow-500 uppercase tracking-wide">
                  {t('availability')}
                </h4>
              </motion.div>
            </div>

            {/* Llamada a la Acción */}
            <div className="text-center">
              <motion.a 
                href="/#contacto"
                whileHover={{ 
                  y: -3, 
                  boxShadow: '0 12px 35px rgba(255, 193, 7, 0.6)',
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)'
                }}
                transition={{ duration: 0.3 }}
                className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 text-equiser-blue px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl uppercase tracking-wide shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300"
                style={{ boxShadow: '0 8px 25px rgba(255, 193, 7, 0.4)' }}
              >
                {t('ctaButton')}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
