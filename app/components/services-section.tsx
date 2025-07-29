
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Wrench, Truck, Package, Compass } from 'lucide-react'
import Image from 'next/image'

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: Wrench,
      title: 'Alquiler De Grúas Móviles Y Sobre Oruga',
      description: 'Grúas móviles y sobre oruga de 25 a 1600 toneladas para proyectos industriales complejos.',
      features: ['Grúas Liebherr', 'Grúas Grove', 'Grúas Manitowoc', 'Operadores Certificados'],
      image: '/images/grua de 800 ton.png'
    },
    {
      icon: Truck,
      title: 'Transporte Pesado Y Extrapesado',
      description: 'Transporte especializado con equipos super lowboy y modular para cargas excepcionales.',
      features: ['Super Lowboy', 'Transporte Modular', 'Rutas Especializadas', 'Permisos Incluidos'],
      image: '/images/trabajo de grua.png'
    },
    {
      icon: Package,
      title: 'Manejo De Carga Excepcional',
      description: 'Manipulación especializada de cargas industriales con máxima seguridad y precisión.',
      features: ['Carga Y Descarga', 'Manipulación Industrial', 'Embalaje Especializado', 'Logística Integral'],
      image: '/images/trabajo de gantry 600 ton.png'
    },
    {
      icon: Compass,
      title: 'Ingeniería 3D',
      description: 'Planificación avanzada con modelado 3D para optimizar cada operación de izamiento.',
      features: ['Modelado 3D', 'Análisis De Cargas', 'Planificación Detallada', 'Simulación Virtual'],
      image: '/images/ingenieria 3d.png'
    }
  ]

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros <span className="text-equiser-blue">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones integrales de alquiler de grúas móviles, sobre oruga y transporte pesado con más de 30 años de experiencia 
            y la tecnología más avanzada del mercado venezolano.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <div className="w-16 h-16 equiser-blue rounded-2xl flex items-center justify-center shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 equiser-yellow rounded-full"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="equiser-blue text-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas una cotización personalizada?</h3>
            <p className="text-blue-100 mb-6">
              Contáctanos las 24 horas del día, los 7 días de la semana para recibir atención inmediata
            </p>
            <button
              onClick={() => window.open('https://api.whatsapp.com/message/E6H4WASHIL6LB1?autoload=1&app_absent=0', '_blank')}
              className="equiser-yellow equiser-yellow-hover text-equiser-blue px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Solicitar Cotización Ahora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
