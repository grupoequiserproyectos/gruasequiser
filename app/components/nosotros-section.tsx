
'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Brain, Star, CheckCircle } from 'lucide-react'

export function NosotrosSection() {
  const aboutCards = [
    {
      icon: Target,
      title: 'MISIÓN',
      content: 'Nuestro propósito es la prestación de servicios integrales de izamiento, movilización y transporte de carga pesada y extrapesada vía terrestre, una gran variedad de grúas actualizadas y de alta capacidad gruas moviles telescopicas y sobre oruga desde 25 toneladas hasta 1600 toneladas de las marcas alemanas Grove, Liebherr y Manitowoc y super lowboys hidraulicos para manejo de carga excepcionales como generadores eléctricos, vagones de metros de ferrocarril, turbinas y generadores petroleros e industriales. mediante el cumplimiento de criterios de seguridad, garantía, confiabilidad, responsabilidad y calidad, con la finalidad de anticipar y responder eficazmente a las necesidades y requerimientos de nuestros clientes, contando con un personal altamente calificado y capaz de lograr el más alto desempeño en las soluciones efectivas y rápidas en todos nuestros servicios.',
      isText: true
    },
    {
      icon: Eye,
      title: 'VISIÓN',
      content: 'Ser una empresa de servicio reconocida, nacional e internacionalmente, por su excelencia en la prestación de los servicios integrales de izamiento, movilización y transporte de carga pesada y extrapesada vía terrestre en Venezuela mejorando continuamente la efectividad, desarrollando así la capacidad de respuesta y el logro de la satisfacción de las necesidades de nuestros clientes.',
      list: [
        'Brindar Servicios con Seguridad y Calidad bajo los más altos estándares',
        'El cliente es y será siempre el centro de nuestra atención',
        'Los negocios de nuestros clientes son nuestros negocios'
      ]
    },
    {
      icon: Brain,
      title: 'FILOSOFÍA',
      list: [
        'Dar a nuestros clientes la confiabilidad de cumplir',
        'Ser certeros y objetivos en todos los servicios prestados',
        'Contribuir al crecimiento y desarrollo del país Venezuela',
        'Sus necesidades son nuestra prioridad',
        'Ustedes son parte integral de "EQUISER, C.A."'
      ]
    },
    {
      icon: Star,
      title: 'VALORES',
      list: [
        'Honestidad en todos nuestros actos',
        'La Seguridad y Calidad en nuestras obras y servicios',
        'Eficiencia y Responsabilidad de nuestros procesos productivos y administrativos',
        'La Seguridad de nuestro personal y de las instalaciones encomendadas'
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
            Nosotros
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

        {/* Sección adicional de compromiso */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-equiser-blue rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Nuestro Compromiso
          </h3>
          <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
            En GRÚAS EQUISER C.A., cada proyecto es una oportunidad para demostrar nuestra 
            excelencia y compromiso con la seguridad. Con más de 30 años de experiencia, 
            continuamos siendo la empresa líder en servicios de izamiento y transporte pesado 
            en Venezuela, siempre enfocados en superar las expectativas de nuestros clientes.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400">30+</div>
              <div className="text-blue-200">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400">1600T</div>
              <div className="text-blue-200">Capacidad Máxima</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400">500+</div>
              <div className="text-blue-200">Proyectos Exitosos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400">24/7</div>
              <div className="text-blue-200">Disponibilidad</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
