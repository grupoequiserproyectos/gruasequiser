
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


export function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })



  const stats = [
    { number: '1600', suffix: 'TONELADAS', label: 'Grúas Hasta' },
    { number: '30+', suffix: 'AÑOS', label: 'De Experiencia En Venezuela' },
    { number: '6', suffix: 'SECTORES', label: 'Industriales Atendidos' },
    { number: '500+', suffix: 'PROYECTOS', label: 'Ejecutados' }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-equiser-blue to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Estadísticas principales estilo Transervica */}
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
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-5xl md:text-6xl lg:text-7xl font-black mb-3 text-equiser-yellow">
                  {stat.number}
                </div>
                <div className="text-lg md:text-xl font-bold mb-2 text-white uppercase tracking-wider">
                  {stat.suffix}
                </div>
                <div className="text-sm md:text-base text-white/90 font-medium leading-relaxed px-2">
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
