
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import Image from 'next/image'

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      title: 'Alquiler De Grúas Móviles Y Sobre Oruga',
      description: 'Grúas móviles hidráulicas 25-500 ton y de oruga 300-1600 ton para sectores petrolero, petroquímico, siderúrgico y energético en toda Venezuela.',
      features: ['Grúas Liebherr, Grove, Manitowoc', 'Certificadas PDVSA', '24/7 Disponibles', 'Operadores Certificados'],
      image: '/images/grua de 800 ton.webp'
    },
    {
      title: 'Transporte Pesado Y Extrapesado',
      description: 'Super lowboy hidráulico hasta 250 ton para transformadores, turbinas y equipos industriales. Cobertura Maracaibo, Valencia, Barcelona, Ciudad Guayana.',
      features: ['Super Lowboy Hidráulico', 'Hasta 250 Toneladas', 'Escoltas Especializadas', 'Permisos Gestionados'],
      image: '/images/transporte-250-toneladas.webp'
    },
    {
      title: 'Izamiento Industrial Especializado',
      description: 'Rigging e ingeniería de izamiento para proyectos complejos en refinerías, plantas petroquímicas, siderúrgicas y puertos.',
      features: ['Cálculos Estructurales', 'Planes de Izamiento', 'Certificación ISO 9001', 'Supervisión Técnica'],
      image: '/images/trabajo de gantry 600 ton.webp'
    },
    {
      title: 'Ingeniería y Planificación 3D',
      description: 'Modelado 3D avanzado para proyectos PDVSA, Petromonagas, SIDOR y sector energético. Optimización de rutas y procedimientos.',
      features: ['Modelado 3D Detallado', 'Análisis De Cargas', 'Simulación de Izamiento', 'Reportes Técnicos'],
      image: '/images/ingenieria 3d.webp'
    }
  ]

  return (
    <section id="servicios" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Título principal estilo Transervica */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">
            <span className="text-equiser-blue">Servicios Especializados de</span>
            <br className="hidden sm:block" />
            <span className="text-equiser-blue">Izamiento en Venezuela</span>
          </h2>
          
          {/* Subtítulo destacado estilo Transervica */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium mb-6 px-2 sm:px-0">
            Soluciones especializadas para transporte y levantamiento de carga excepcional
          </p>
          
          {/* Descripción adicional */}
          <p className="text-base sm:text-lg text-gray-500 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
            Grúas industriales 25-1600 toneladas con cobertura nacional. 
            Más de 30 años sirviendo a Maracaibo, Barcelona, Valencia, Puerto La Cruz, Ciudad Guayana, 
            Faja del Orinoco y todo el territorio venezolano con la tecnología más avanzada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 mx-2 sm:mx-0"
            >
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-2 h-2 equiser-yellow rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium leading-relaxed">{feature}</span>
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
          className="text-center mt-12 sm:mt-16 px-2 sm:px-0"
        >
          <div className="equiser-blue text-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl mx-2 sm:mx-0">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">¿Necesitas una cotización personalizada?</h3>
            <p className="text-blue-100 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              Contáctanos las 24 horas del día, los 7 días de la semana para recibir atención inmediata
            </p>
            <button
              onClick={() => window.open('https://wa.me/message/IOBBJVBBVWNOI1', '_blank')}
              className="equiser-yellow equiser-yellow-hover text-equiser-blue px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-lg text-sm sm:text-base w-full sm:w-auto"
            >
              Solicitar Cotización Ahora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
