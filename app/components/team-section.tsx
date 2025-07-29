
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Award, Shield, BookOpen, Wrench, HardHat } from 'lucide-react'

export function TeamSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const teamFeatures = [
    {
      icon: HardHat,
      title: 'Operadores Certificados',
      description: 'Personal altamente capacitado con certificaciones internacionales en operación de grúas de alta capacidad.',
      stats: '50+ Operadores'
    },
    {
      icon: Wrench,
      title: 'Técnicos Especialistas',
      description: 'Equipo técnico especializado en mantenimiento y reparación de equipos Liebherr, Grove y Manitowoc.',
      stats: '25+ Técnicos'
    },
    {
      icon: Shield,
      title: 'Supervisores de Seguridad',
      description: 'Profesionales certificados en seguridad industrial y prevención de riesgos laborales.',
      stats: '15+ Supervisores'
    },
    {
      icon: BookOpen,
      title: 'Ingenieros Especialistas',
      description: 'Ingenieros con experiencia en planificación de izamientos y análisis de cargas complejas.',
      stats: '10+ Ingenieros'
    }
  ]

  const certifications = [
    { name: 'NCCCO', description: 'National Commission for the Certification of Crane Operators' },
    { name: 'OSHA', description: 'Occupational Safety and Health Administration' },
    { name: 'ISO 9001', description: 'Sistema de Gestión de Calidad' },
    { name: 'ISO 14001', description: 'Sistema de Gestión Ambiental' },
    { name: 'COVENIN', description: 'Normas Venezolanas de Seguridad Industrial' },
    { name: 'API', description: 'American Petroleum Institute Standards' }
  ]

  const trainingPrograms = [
    'Operación segura de grúas móviles y sobre oruga',
    'Mantenimiento preventivo y correctivo',
    'Planificación de izamientos complejos',
    'Seguridad industrial y prevención de accidentes',
    'Rigging y aparejos especializados',
    'Normativas internacionales de calidad'
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
            Personal <span className="text-blue-600">Especializado</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro equipo humano es nuestro mayor activo. Más de 100 profesionales altamente 
            capacitados y certificados garantizan la excelencia en cada operación.
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
              
              <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                {feature.stats}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Certificaciones y capacitación */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center mb-8">
              <Award className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-900">Certificaciones</h3>
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nuestro personal cuenta con las certificaciones más exigentes de la industria, 
              garantizando operaciones seguras y de alta calidad en cada proyecto.
            </p>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{cert.name}</h4>
                    <p className="text-sm text-gray-600">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center mb-8">
              <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-900">Capacitación Continua</h3>
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Invertimos constantemente en la formación de nuestro personal para mantenernos 
              a la vanguardia en tecnología y mejores prácticas de la industria.
            </p>
            
            <div className="bg-blue-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Programas de Formación:</h4>
              <div className="space-y-3">
                {trainingPrograms.map((program, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{program}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Estadísticas del equipo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-8">¿Por Qué Nuestro Equipo Marca la Diferencia?</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-5xl font-bold text-green-400 mb-3">100+</div>
              <div className="text-blue-200 font-semibold">Profesionales Certificados</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-400 mb-3">30+</div>
              <div className="text-blue-200 font-semibold">Años de Experiencia Promedio</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-400 mb-3">0</div>
              <div className="text-blue-200 font-semibold">Accidentes Laborales en 2024</div>
            </div>
          </div>

          <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
            La experiencia, certificaciones y compromiso de nuestro equipo humano nos permite 
            ejecutar los proyectos más complejos con total seguridad y precisión.
          </p>

          <button
            onClick={() => window.open('https://wa.me/584143432882?text=Me interesa conocer más sobre el equipo especializado de EQUISER', '_blank')}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Conoce Más Sobre Nuestro Equipo
          </button>
        </motion.div>
      </div>
    </section>
  )
}
