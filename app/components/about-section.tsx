
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Target, Heart, Award, Users, Globe } from 'lucide-react'
import Image from 'next/image'

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const values = [
    {
      icon: Shield,
      title: 'Seguridad',
      description: 'Certificaciones ISO 9001 e ISO 14001 garantizan los más altos estándares de seguridad'
    },
    {
      icon: Award,
      title: 'Calidad',
      description: 'Equipos de marcas alemanas reconocidas mundialmente: Liebherr, Grove y Manitowoc'
    },
    {
      icon: Users,
      title: 'Experiencia',
      description: 'Más de 30 años formando el equipo humano más capacitado del sector industrial'
    },
    {
      icon: Globe,
      title: 'Liderazgo',
      description: 'Empresa líder en Venezuela en alquiler de grúas móviles y transporte extrapesado'
    }
  ]

  const stats = [
    { number: '1600', suffix: 'TON', label: 'Capacidad Máxima' },
    { number: '30+', suffix: 'AÑOS', label: 'En el Mercado' },
    { number: '6', suffix: 'SECTORES', label: 'Industriales' },
    { number: '24/7', suffix: 'HORAS', label: 'Disponibilidad' }
  ]

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conoce <span className="text-blue-600">EQUISER</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de tres décadas liderando el mercado venezolano con tecnología alemana y 
            el equipo humano más especializado del sector industrial.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Target className="w-8 h-8 text-blue-600 mr-3" />
                  Nuestra Misión
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Brindar soluciones integrales de izamiento y transporte pesado con la más alta 
                  tecnología, seguridad y calidad, superando las expectativas de nuestros clientes 
                  en todos los sectores industriales de Venezuela.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Heart className="w-8 h-8 text-blue-600 mr-3" />
                  Nuestra Visión
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Consolidarnos como la empresa líder indiscutible en Venezuela en servicios de 
                  izamiento y transporte extrapesado, expandiendo nuestras capacidades y 
                  manteniendo los más altos estándares de excelencia operacional.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-8 h-8 text-blue-600 mr-3" />
                  Nuestra Filosofía
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>"Seguridad y calidad primero"</strong> - Cada operación se ejecuta bajo 
                  los más rigurosos protocolos de seguridad, garantizando la integridad de nuestro 
                  personal, equipos y proyectos de nuestros clientes.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/dos gruas de 600 ton.png"
                alt="Grúas EQUISER en operación"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>
            
            {/* Badge flotante */}
            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">ISO</div>
                <div className="text-sm">9001 & 14001</div>
                <div className="text-xs mt-1">Certificados</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Valores */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Nuestros Valores</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="text-center group">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <value.icon className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200 font-semibold mb-1">{stat.suffix}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
