
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Award, Shield, BookOpen, Wrench, HardHat } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function TeamSection() {
  const t = useTranslations('team')
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const teamFeatures = [
    {
      icon: HardHat,
      title: t('operators'),
      description: t('operatorsDesc'),
      stats: t('operatorsCount')
    },
    {
      icon: Wrench,
      title: t('technicians'),
      description: t('techniciansDesc'),
      stats: t('techniciansCount')
    },
    {
      icon: Shield,
      title: t('supervisors'),
      description: t('supervisorsDesc'),
      stats: t('supervisorsCount')
    },
    {
      icon: BookOpen,
      title: t('engineers'),
      description: t('engineersDesc'),
      stats: t('engineersCount')
    }
  ]



  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Especialidades del equipo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {teamFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <feature.icon className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{feature.description}</p>
              
              <div className="bg-equiser-yellow/20 text-equiser-blue px-4 py-2 rounded-full text-sm font-semibold border-2 border-equiser-yellow/30">
                {feature.stats}
              </div>
            </div>
          ))}
        </motion.div>



        {/* Sección del Equipo Humano rediseñada */}
        <motion.section 
          className="py-20 rounded-3xl relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #FFC107 0%, #FFD700 100%)',
            position: 'relative'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="max-w-6xl mx-auto px-6">
            
            {/* Título */}
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl md:text-5xl font-extrabold mb-6"
                style={{ 
                  color: '#1E3A8A',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                {t('whyTitle')}
              </motion.h2>
              <div 
                className="w-32 h-1 mx-auto rounded-full"
                style={{ background: '#1E3A8A' }}
              />
            </div>

            {/* Estadísticas en tarjetas azules */}
            <div className="grid md:grid-cols-3 gap-10 mb-12">
              
              {/* 100+ Profesionales */}
              <motion.div 
                className="rounded-2xl p-10 text-center shadow-2xl hover:scale-105 transition-all duration-300"
                style={{
                  background: 'rgba(30, 58, 138, 0.95)',
                  backdropFilter: 'blur(10px)'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 }}
                whileHover={{ y: -10 }}
              >
                <div 
                  className="text-6xl font-black mb-4"
                  style={{ 
                    color: '#FFC107',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                  }}
                >
                  {t('stat1')}
                </div>
                <h4 className="text-lg font-bold text-white uppercase tracking-wider leading-tight">
                  {t('stat1Label')}
                </h4>
              </motion.div>

              {/* 30+ Años */}
              <motion.div 
                className="rounded-2xl p-10 text-center shadow-2xl hover:scale-105 transition-all duration-300"
                style={{
                  background: 'rgba(30, 58, 138, 0.95)',
                  backdropFilter: 'blur(10px)'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 }}
                whileHover={{ y: -10 }}
              >
                <div 
                  className="text-6xl font-black mb-4"
                  style={{ 
                    color: '#FFC107',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                  }}
                >
                  {t('stat2')}
                </div>
                <h4 className="text-lg font-bold text-white uppercase tracking-wider leading-tight">
                  {t('stat2Label')}
                </h4>
              </motion.div>

              {/* 0 Accidentes */}
              <motion.div 
                className="rounded-2xl p-10 text-center shadow-2xl hover:scale-105 transition-all duration-300"
                style={{
                  background: 'rgba(30, 58, 138, 0.95)',
                  backdropFilter: 'blur(10px)'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ y: -10 }}
              >
                <div 
                  className="text-6xl font-black mb-4"
                  style={{ 
                    color: '#FFC107',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                  }}
                >
                  {t('stat3')}
                </div>
                <h4 className="text-lg font-bold text-white uppercase tracking-wider leading-tight">
                  {t('stat3Label')}
                </h4>
              </motion.div>
            </div>

            {/* Texto Explicativo */}
            <motion.div 
              className="rounded-3xl p-10 mb-10 shadow-2xl"
              style={{
                background: 'rgba(30, 58, 138, 0.95)',
                backdropFilter: 'blur(10px)'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <p className="text-xl text-white text-center leading-relaxed font-medium max-w-4xl mx-auto">
                {t('differenceText')}
              </p>
            </motion.div>

            {/* Botón rediseñado */}
            <div className="text-center">
              <motion.button
                onClick={() => window.open('https://wa.me/message/IOBBJVBBVWNOI1', '_blank')}
                className="px-12 py-5 rounded-full text-xl font-bold uppercase tracking-wider shadow-2xl hover:scale-105 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
                  color: 'white',
                  boxShadow: '0 8px 25px rgba(30, 58, 138, 0.4)'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.4 }}
                whileHover={{ y: -3 }}
              >
                {t('ctaButton')}
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  )
}
