
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Estadísticas principales */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-12 text-equiser-blue">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-equiser-blue">{stat.number}</div>
                  <div className="text-equiser-blue/80 font-semibold mb-1">{stat.suffix}</div>
                  <div className="text-sm text-equiser-blue/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  )
}
