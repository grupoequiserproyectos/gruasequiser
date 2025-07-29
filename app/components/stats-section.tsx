
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Award, Clock, Users, MapPin, Shield } from 'lucide-react'

export function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    experience: 0,
    capacity: 0,
    sectors: 0,
    availability: 0,
    certifications: 0
  })

  const finalStats = {
    projects: 500,
    experience: 30,
    capacity: 1600,
    sectors: 6,
    availability: 24,
    certifications: 2
  }

  useEffect(() => {
    if (inView) {
      const duration = 2500
      const steps = 100
      const stepTime = duration / steps

      let step = 0
      const interval = setInterval(() => {
        step++
        const progress = step / steps

        setAnimatedStats({
          projects: Math.floor(finalStats.projects * progress),
          experience: Math.floor(finalStats.experience * progress),
          capacity: Math.floor(finalStats.capacity * progress),
          sectors: Math.floor(finalStats.sectors * progress),
          availability: Math.floor(finalStats.availability * progress),
          certifications: Math.floor(finalStats.certifications * progress)
        })

        if (step >= steps) {
          clearInterval(interval)
          setAnimatedStats(finalStats)
        }
      }, stepTime)

      return () => clearInterval(interval)
    }
  }, [inView])

  const stats = [
    {
      icon: TrendingUp,
      number: animatedStats.projects,
      suffix: '+',
      label: 'Proyectos Ejecutados',
      description: 'Proyectos industriales completados exitosamente'
    },
    {
      icon: Award,
      number: animatedStats.experience,
      suffix: '+',
      label: 'Años de Experiencia',
      description: 'Décadas liderando el mercado venezolano'
    },
    {
      icon: Shield,
      number: animatedStats.capacity,
      suffix: 'T',
      label: 'Grúas Hasta 1600 Toneladas',
      description: 'Capacidad máxima de nuestras grúas'
    },
    {
      icon: MapPin,
      number: animatedStats.sectors,
      suffix: '',
      label: 'Sectores Industriales',
      description: 'Sectores atendidos especializadamente'
    },
    {
      icon: Clock,
      number: animatedStats.availability,
      suffix: '/7',
      label: 'Disponibilidad',
      description: 'Atención y respuesta inmediata'
    },
    {
      icon: Users,
      number: animatedStats.certifications,
      suffix: 'ISO',
      label: 'Certificaciones',
      description: 'Normas internacionales de calidad'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Grúas Hasta <span className="text-equiser-yellow">1600 Toneladas</span> De Capacidad
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Más de tres décadas de trayectoria nos posicionan como la empresa líder 
            indiscutible en Venezuela para alquiler de grúas móviles y transporte pesado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="w-20 h-20 bg-equiser-yellow/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-equiser-yellow/30 transition-colors duration-300">
                  <stat.icon className="w-10 h-10 text-equiser-yellow" />
                </div>
                
                <div className="mb-4">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                    {stat.number}
                    <span className="text-equiser-yellow">{stat.suffix}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-200 mb-3">{stat.label}</h3>
                  <p className="text-sm text-blue-300 leading-relaxed">{stat.description}</p>
                </div>

                <div className="w-16 h-1 bg-gradient-to-r from-equiser-yellow to-blue-400 rounded-full mx-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl font-bold mb-6">
              ¿Por qué elegir <span className="text-equiser-yellow">GRÚAS EQUISER</span>?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-equiser-yellow/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-equiser-yellow" />
                </div>
                <h4 className="text-xl font-semibold">Seguridad Certificada</h4>
                <p className="text-blue-200 text-sm">
                  Certificaciones ISO 9001 e ISO 14001 garantizan los más altos estándares de seguridad industrial.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-equiser-yellow/20 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-equiser-yellow" />
                </div>
                <h4 className="text-xl font-semibold">Tecnología Alemana Y Americana</h4>
                <p className="text-blue-200 text-sm">
                  Equipos de las mejores marcas mundiales: Liebherr, Grove y Manitowoc con tecnología de punta.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-equiser-yellow/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-equiser-yellow" />
                </div>
                <h4 className="text-xl font-semibold">Disponibilidad 24/7</h4>
                <p className="text-blue-200 text-sm">
                  Servicio de atención continua los 365 días del año para respuesta inmediata a emergencias.
                </p>
              </div>
            </div>

            <motion.div
              className="mt-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => window.open('https://wa.me/584143432882?text=Quiero conocer más sobre por qué GRÚAS EQUISER es la mejor opción para mi proyecto', '_blank')}
                className="equiser-yellow equiser-yellow-hover text-equiser-blue font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Descubre Por Qué Somos #1 En Venezuela
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
