
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Shield, CheckCircle } from 'lucide-react'

export function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // Solo las certificaciones específicas solicitadas
  const certifications = [
    {
      icon: Award,
      name: 'ISO 9001',
      description: 'Sistema de Gestión de Calidad',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Shield,
      name: 'ISO 14001',
      description: 'Sistema de Gestión Ambiental',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: CheckCircle,
      name: 'Certificación INTT',
      description: 'Instituto Nacional de Transporte Terrestre',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    }
  ]

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

        {/* Certificaciones corregidas - Solo 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Certificaciones y Estándares de Calidad
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className={`w-20 h-20 ${cert.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className={`w-10 h-10 ${cert.color}`} />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{cert.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500 font-medium">CERTIFICADO</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestras certificaciones garantizan los más altos estándares de calidad, 
              seguridad y respeto ambiental en todas nuestras operaciones de alquiler de grúas 
              y transporte pesado en Venezuela.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
