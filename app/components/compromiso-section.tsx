
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Weight, Trophy, Clock } from 'lucide-react'

export function CompromisoSection() {
  const estadisticas = [
    {
      numero: "30+",
      label: "Años de Experiencia",
      icon: Calendar,
      delay: 0.1
    },
    {
      numero: "1600T",
      label: "Capacidad Máxima",
      icon: Weight,
      delay: 0.2
    },
    {
      numero: "500+",
      label: "Proyectos Exitosos",
      icon: Trophy,
      delay: 0.3
    },
    {
      numero: "24/7",
      label: "Disponibilidad",
      icon: Clock,
      delay: 0.4
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#FFD700' }}>
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Título */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-8"
            style={{ color: '#1E3A8A' }}
          >
            Nuestro Compromiso
          </motion.h2>

          {/* Texto descriptivo */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-16"
            style={{ color: '#1E3A8A' }}
          >
            En GRÚAS EQUISER C.A., cada proyecto es una oportunidad para demostrar nuestra 
            excelencia y compromiso con la seguridad. Con más de 30 años de experiencia, 
            continuamos siendo la empresa líder en servicios de izamiento y transporte pesado 
            en Venezuela, siempre enfocados en superar las expectativas de nuestros clientes.
          </motion.p>

          {/* Estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {estadisticas.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={index}
                  variants={statVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: stat.delay }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/30 transition-all duration-300 shadow-lg"
                  style={{ 
                    backgroundColor: 'rgba(30, 58, 138, 0.1)',
                    borderColor: '#1E3A8A',
                    borderWidth: '1px'
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent 
                      size={48} 
                      style={{ color: '#1E3A8A' }}
                      className="drop-shadow-md"
                    />
                  </div>
                  <div 
                    className="text-4xl md:text-5xl font-bold mb-3"
                    style={{ color: '#1E3A8A' }}
                  >
                    {stat.numero}
                  </div>
                  <div 
                    className="text-lg font-semibold"
                    style={{ color: '#1E3A8A' }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Botón de Llamado a la Acción */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.a
              href="#contacto"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: "0 20px 40px rgba(30, 58, 138, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-lg text-white transition-all duration-300 shadow-xl hover:shadow-2xl"
              style={{ 
                backgroundColor: '#1E3A8A',
                boxShadow: '0 10px 30px rgba(30, 58, 138, 0.3)'
              }}
            >
              <span className="text-2xl">🚀</span>
              Solicitar Cotización Ahora
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
