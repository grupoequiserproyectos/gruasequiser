
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

        {/* Sección rediseñada de compromiso con legibilidad mejorada */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #1E3A8A 100%)',
            padding: '80px 0'
          }}
        >
          {/* Patrón de fondo decorativo */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(255, 193, 7, 0.1) 0%, transparent 50%), 
                radial-gradient(circle at 80% 20%, rgba(255, 193, 7, 0.1) 0%, transparent 50%)
              `
            }}
          />
          
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Título Principal */}
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-5xl font-extrabold text-yellow-400 mb-5 uppercase tracking-wider">
                🤝 Nuestro Compromiso
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 mx-auto rounded-full"></div>
            </div>

            {/* Contenido Principal */}
            <div className="bg-white bg-opacity-95 rounded-3xl p-6 md:p-12 mb-12 backdrop-blur-sm shadow-2xl">
              <p className="text-lg md:text-xl leading-relaxed text-equiser-blue text-center font-medium">
                En <strong className="text-equiser-blue font-bold">GRÚAS EQUISER C.A.</strong>, cada proyecto es una oportunidad para demostrar nuestra <strong className="text-yellow-500">excelencia y compromiso con la seguridad</strong>. Con más de <strong className="text-equiser-blue">30 años de experiencia</strong>, continuamos siendo la empresa <strong className="text-yellow-500">líder en servicios de izamiento y transporte pesado en Venezuela</strong>, siempre enfocados en superar las expectativas de nuestros clientes.
              </p>
            </div>

            {/* Estadísticas en Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              
              {/* Estadística 1: Años de Experiencia */}
              <motion.div 
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                  borderColor: '#FFC107'
                }}
                transition={{ duration: 0.3 }}
                className="bg-white bg-opacity-95 rounded-2xl p-6 md:p-8 text-center shadow-xl border-3 border-transparent hover:border-yellow-400 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-black text-equiser-blue mb-3">30+</div>
                <h4 className="text-base md:text-lg font-bold text-yellow-500 uppercase tracking-wide">
                  Años de Experiencia
                </h4>
              </motion.div>

              {/* Estadística 2: Capacidad Máxima */}
              <motion.div 
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                  borderColor: '#FFC107'
                }}
                transition={{ duration: 0.3 }}
                className="bg-white bg-opacity-95 rounded-2xl p-6 md:p-8 text-center shadow-xl border-3 border-transparent hover:border-yellow-400 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-black text-equiser-blue mb-3">1600T</div>
                <h4 className="text-base md:text-lg font-bold text-yellow-500 uppercase tracking-wide">
                  Capacidad Máxima
                </h4>
              </motion.div>

              {/* Estadística 3: Proyectos Exitosos */}
              <motion.div 
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                  borderColor: '#FFC107'
                }}
                transition={{ duration: 0.3 }}
                className="bg-white bg-opacity-95 rounded-2xl p-6 md:p-8 text-center shadow-xl border-3 border-transparent hover:border-yellow-400 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-black text-equiser-blue mb-3">500+</div>
                <h4 className="text-base md:text-lg font-bold text-yellow-500 uppercase tracking-wide">
                  Proyectos Exitosos
                </h4>
              </motion.div>

              {/* Estadística 4: Disponibilidad */}
              <motion.div 
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                  borderColor: '#FFC107'
                }}
                transition={{ duration: 0.3 }}
                className="bg-white bg-opacity-95 rounded-2xl p-6 md:p-8 text-center shadow-xl border-3 border-transparent hover:border-yellow-400 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-black text-equiser-blue mb-3">24/7</div>
                <h4 className="text-base md:text-lg font-bold text-yellow-500 uppercase tracking-wide">
                  Disponibilidad
                </h4>
              </motion.div>
            </div>

            {/* Llamada a la Acción */}
            <div className="text-center">
              <motion.a 
                href="#contacto"
                whileHover={{ 
                  y: -3, 
                  boxShadow: '0 12px 35px rgba(255, 193, 7, 0.6)',
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)'
                }}
                transition={{ duration: 0.3 }}
                className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 text-equiser-blue px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl uppercase tracking-wide shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300"
                style={{ boxShadow: '0 8px 25px rgba(255, 193, 7, 0.4)' }}
              >
                🚀 Trabajemos Juntos
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
