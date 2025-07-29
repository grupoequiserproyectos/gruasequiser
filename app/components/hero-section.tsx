
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Award, Clock, Wrench, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const [stats, setStats] = useState({
    capacity: 0,
    experience: 0,
    sectors: 0,
    projects: 0
  })

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000
      const steps = 60
      const stepTime = duration / steps

      let step = 0
      const interval = setInterval(() => {
        step++
        const progress = step / steps

        setStats({
          capacity: Math.floor(1600 * progress),
          experience: Math.floor(30 * progress),
          sectors: Math.floor(6 * progress),
          projects: Math.floor(500 * progress)
        })

        if (step >= steps) {
          clearInterval(interval)
          setStats({
            capacity: 1600,
            experience: 30,
            sectors: 6,
            projects: 500
          })
        }
      }, stepTime)

      return () => clearInterval(interval)
    }

    const timer = setTimeout(animateStats, 500)
    return () => clearTimeout(timer)
  }, [])

  const handleWhatsApp = () => {
    window.open('https://wa.me/584143432882?text=¡Hola! Me interesa conocer más sobre los servicios de EQUISER para alquiler de grúas y transporte pesado.', '_blank')
  }

  const handleQuote = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo con parallax */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/imagen grua.png"
            alt="Grúa EQUISER en operación"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-transparent"></div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido izquierdo */}
          <div className="text-white space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                EQUISER
                <span className="block text-3xl md:text-4xl text-green-400 font-light">C.A.</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-200">
                Líder en Grúas Móviles y Sobre Oruga en Venezuela
              </h2>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
                Más de <strong>30 años de experiencia</strong> brindando soluciones de izamiento y transporte pesado 
                con la más alta tecnología y seguridad. Capacidades desde <strong>25 hasta 1600 toneladas</strong> 
                con equipos de las mejores marcas alemanas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-xl"
              >
                Contactar Ahora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={handleQuote}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200"
              >
                Solicitar Cotización
              </Button>
            </motion.div>
          </div>

          {/* Estadísticas animadas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center border border-white/20">
              <Wrench className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">{stats.capacity}</div>
              <div className="text-blue-200 font-medium">TON</div>
              <div className="text-sm text-gray-300 mt-2">Capacidad Máxima</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center border border-white/20">
              <Award className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">{stats.experience}+</div>
              <div className="text-blue-200 font-medium">AÑOS</div>
              <div className="text-sm text-gray-300 mt-2">Experiencia</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center border border-white/20">
              <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">{stats.sectors}</div>
              <div className="text-blue-200 font-medium">SECTORES</div>
              <div className="text-sm text-gray-300 mt-2">Industriales</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center border border-white/20">
              <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">{stats.projects}+</div>
              <div className="text-blue-200 font-medium">PROYECTOS</div>
              <div className="text-sm text-gray-300 mt-2">Ejecutados</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}
