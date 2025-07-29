

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Play, Shield, Award, Clock } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [counts, setCounts] = useState({
    capacity: 0,
    experience: 0,
    sectors: 0,
    projects: 0
  })

  const targetCounts = {
    capacity: 1600,
    experience: 30,
    sectors: 6,
    projects: 500
  }

  useEffect(() => {
    if (inView) {
      const duration = 2000
      const increment = {
        capacity: targetCounts.capacity / (duration / 50),
        experience: targetCounts.experience / (duration / 50),
        sectors: targetCounts.sectors / (duration / 50),
        projects: targetCounts.projects / (duration / 50)
      }

      const timer = setInterval(() => {
        setCounts(prev => ({
          capacity: Math.min(prev.capacity + increment.capacity, targetCounts.capacity),
          experience: Math.min(prev.experience + increment.experience, targetCounts.experience),
          sectors: Math.min(prev.sectors + increment.sectors, targetCounts.sectors),
          projects: Math.min(prev.projects + increment.projects, targetCounts.projects)
        }))
      }, 50)

      setTimeout(() => clearInterval(timer), duration)
      return () => clearInterval(timer)
    }
  }, [inView])

  const handleWhatsApp = () => {
    window.open('https://wa.me/584143432882?text=¡Hola! Me interesa conocer más sobre los servicios de EQUISER para alquiler de grúas móviles y sobre oruga.', '_blank')
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ paddingTop: '120px' }}>
      {/* Imagen de fondo con parallax */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("/images/imagen grua.png")',
            backgroundAttachment: 'fixed'
          }}
        />
        {/* Overlay fuerte para mejor legibilidad */}
        <div 
          className="absolute inset-0" 
          style={{ background: 'rgba(30, 58, 138, 0.95)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Título principal actualizado */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-equiser-yellow">Grúas Móviles y Sobre Oruga</span>
            <br />
            <span className="text-white">desde 25 hasta 1600 toneladas</span>
            <br />
            <span className="text-blue-200 text-4xl md:text-5xl">con equipos técnico certificados</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-blue-100"
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Más de 30 años como empresa líder en Venezuela en alquiler de grúas móviles, 
            sobre oruga y transporte pesado para los sectores energético, petrolero, petroquímico, 
            industrial, portuario y siderúrgico.
          </motion.p>

          {/* Estadísticas animadas */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="text-3xl md:text-4xl font-bold text-equiser-yellow">
                {Math.round(counts.capacity)}T
              </div>
              <div className="text-sm text-blue-200 font-medium">Grúas Hasta</div>
            </div>
            <div 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="text-3xl md:text-4xl font-bold text-equiser-yellow">
                {Math.round(counts.experience)}+
              </div>
              <div className="text-sm text-blue-200 font-medium">Años de Experiencia</div>
            </div>
            <div 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="text-3xl md:text-4xl font-bold text-equiser-yellow">
                {Math.round(counts.sectors)}
              </div>
              <div className="text-sm text-blue-200 font-medium">Sectores Atendidos</div>
            </div>
            <div 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="text-3xl md:text-4xl font-bold text-equiser-yellow">
                {Math.round(counts.projects)}+
              </div>
              <div className="text-sm text-blue-200 font-medium">Proyectos Ejecutados</div>
            </div>
          </motion.div>

          {/* Botones de acción */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Button
              onClick={handleWhatsApp}
              className="equiser-yellow equiser-yellow-hover text-equiser-blue px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-yellow-300"
            >
              Solicitar Cotización WhatsApp
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-equiser-blue px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              <Play className="mr-2 w-5 h-5" />
              Ver Proyectos
            </Button>
          </motion.div>

          {/* Características destacadas */}
          <motion.div
            className="mt-16 grid md:grid-cols-3 gap-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-equiser-yellow rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-equiser-blue" />
              </div>
              <h3 className="text-lg font-bold mb-2">Máxima Seguridad</h3>
              <p className="text-blue-200 text-sm">Protocolos estrictos y operadores especializados</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-equiser-yellow rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-equiser-blue" />
              </div>
              <h3 className="text-lg font-bold mb-2">Equipos Premium</h3>
              <p className="text-blue-200 text-sm">Marcas alemanas y americanas de última generación</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-equiser-yellow rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-equiser-blue" />
              </div>
              <h3 className="text-lg font-bold mb-2">Disponibilidad 24/7</h3>
              <p className="text-blue-200 text-sm">Servicio de emergencia y respuesta inmediata</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </motion.div>
      </div>
    </section>
  )
}
