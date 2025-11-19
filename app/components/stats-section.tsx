
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslations } from 'next-intl'

export function StatsSection() {
  const t = useTranslations('stats')
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const stats = [
    { number: '1600', suffix: t('toneladas'), label: t('gruasHasta') },
    { number: '30+', suffix: t('años'), label: t('experiencia') },
    { number: '6', suffix: t('sectores'), label: t('sectoresAtendidos') },
    { number: '500+', suffix: t('proyectos'), label: t('proyectosEjecutados') }
  ]

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 50%, #1E3A8A 100%)'
      }}
    >
      {/* Patrón decorativo de fondo */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255, 193, 7, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 193, 7, 0.3) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Estadísticas principales con máxima legibilidad */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label} 
                className="text-center p-6 rounded-2xl"
                style={{
                  background: 'rgba(30, 58, 138, 0.5)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255, 193, 7, 0.3)'
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(255, 193, 7, 0.6)',
                  transition: { duration: 0.3 }
                }}
              >
                <div 
                  className="text-5xl md:text-6xl lg:text-7xl font-black mb-3"
                  style={{ 
                    color: '#FFC107',
                    textShadow: '3px 3px 6px rgba(0,0,0,0.8), 0 0 20px rgba(255, 193, 7, 0.5)'
                  }}
                >
                  {stat.number}
                </div>
                <div 
                  className="text-lg md:text-xl font-bold mb-2 uppercase tracking-wider"
                  style={{ 
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                  }}
                >
                  {stat.suffix}
                </div>
                <div 
                  className="text-sm md:text-base font-medium leading-relaxed px-2"
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.95)',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
