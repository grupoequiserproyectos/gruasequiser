

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Play, Shield, Award, Clock, MessageCircle } from 'lucide-react'
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
    window.open('https://api.whatsapp.com/message/E6H4WASHIL6LB1?autoload=1&app_absent=0', '_blank')
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40">
      {/* Imagen de fondo con parallax */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("/images/imagen grua.webp")',
            backgroundAttachment: 'fixed'
          }}
        />
        {/* Overlay fuerte para mejor legibilidad */}
        <div 
          className="absolute inset-0" 
          style={{ background: 'rgba(30, 58, 138, 0.95)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center text-white">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Título principal - TEXTO CORREGIDO SEGÚN ESPECIFICACIONES */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight max-w-6xl mx-auto"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-equiser-yellow block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4">
              GRÚAS EQUISER
            </span>
            <span className="text-white block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3">
              #1 Empresa Líder En Venezuela
            </span>
            <span className="text-blue-200 block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-relaxed">
              En Alquiler de Grúas Móviles Telescópicas,
              <br className="hidden sm:block" />
              Grúas Sobre Oruga y Equipos de Transporte
              <br className="hidden sm:block" />
              Pesado y Sobredimensionado
            </span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed text-blue-100 px-2 sm:px-0"
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Más de 30 años como empresa líder en Venezuela en alquiler de grúas móviles, 
            sobre oruga y transporte pesado para los sectores energético, petrolero, petroquímico, 
            industrial, portuario y siderúrgico.
          </motion.p>

          {/* Estadísticas animadas - RESPONSIVE OPTIMIZADO */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 px-2 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div 
              className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center border border-white/20"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-equiser-yellow">
                {Math.round(counts.capacity)}T
              </div>
              <div className="text-xs sm:text-sm text-blue-200 font-medium">Grúas Hasta</div>
            </div>
            <div 
              className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center border border-white/20"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-equiser-yellow">
                {Math.round(counts.experience)}+
              </div>
              <div className="text-xs sm:text-sm text-blue-200 font-medium">Años de Experiencia</div>
            </div>
            <div 
              className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center border border-white/20"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-equiser-yellow">
                {Math.round(counts.sectors)}
              </div>
              <div className="text-xs sm:text-sm text-blue-200 font-medium">Sectores Atendidos</div>
            </div>
            <div 
              className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center border border-white/20"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-equiser-yellow">
                {Math.round(counts.projects)}+
              </div>
              <div className="text-xs sm:text-sm text-blue-200 font-medium">Proyectos Ejecutados</div>
            </div>
          </motion.div>

          {/* Sección de Botones Principales - RESPONSIVE OPTIMIZADO */}
          <motion.div
            className="mb-8 sm:mb-12 px-2 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {/* Container para botones */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-4xl mx-auto">
              
              {/* Botón Principal: Solicitar Cotización WhatsApp */}
              <Button
                onClick={handleWhatsApp}
                className="group relative overflow-hidden px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-2 border-transparent hover:border-equiser-blue w-full sm:w-auto"
                style={{
                  background: 'linear-gradient(135deg, #FFC107 0%, #FFD700 100%)',
                  color: '#1E3A8A',
                  boxShadow: '0 8px 25px rgba(255, 193, 7, 0.4)',
                  letterSpacing: '0.5px'
                }}
              >
                <span className="flex items-center justify-center gap-2 sm:gap-3">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Solicitar Cotización WhatsApp</span>
                  <span className="sm:hidden">Cotización WhatsApp</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>

              {/* Botón Secundario: Ver Proyectos */}
              <Button
                onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="group relative overflow-hidden px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-bold tracking-wide transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-2 hover:border-equiser-blue w-full sm:w-auto"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  color: '#1E3A8A',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderColor: 'rgba(30, 58, 138, 0.3)'
                }}
              >
                <span className="flex items-center justify-center gap-2 sm:gap-3">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  Ver Proyectos
                </span>
              </Button>
            </div>

            {/* Información adicional - RESPONSIVE */}
            <motion.div 
              className="mt-4 sm:mt-6 text-center px-2 sm:px-0"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <p 
                className="text-blue-100 text-xs sm:text-sm md:text-base font-medium italic leading-relaxed"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
              >
                <span className="hidden sm:inline">Respuesta inmediata por WhatsApp | Cotizaciones personalizadas</span>
                <span className="sm:hidden">Respuesta inmediata por WhatsApp<br />Cotizaciones personalizadas</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Características destacadas - RESPONSIVE OPTIMIZADO */}
          <motion.div
            className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ backdropFilter: 'blur(15px)' }}
              whileHover={{ y: -10 }}
            >
              <div 
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                style={{ 
                  background: 'linear-gradient(135deg, #1E3A8A, #3B82F6)',
                  boxShadow: '0 10px 30px rgba(30, 58, 138, 0.4)'
                }}
              >
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-equiser-yellow">Máxima Seguridad</h3>
              <p className="text-blue-100 leading-relaxed text-sm sm:text-base">Protocolos estrictos y operadores especializados</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ backdropFilter: 'blur(15px)' }}
              whileHover={{ y: -10 }}
            >
              <div 
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                style={{ 
                  background: 'linear-gradient(135deg, #FFC107, #FFD700)',
                  boxShadow: '0 10px 30px rgba(255, 193, 7, 0.4)'
                }}
              >
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-equiser-blue" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-equiser-yellow">Equipos Premium</h3>
              <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                <span className="hidden sm:inline">Grúas Móviles y Sobre Oruga Tecnológicas de las Mejores Marcas Alemanas: Liebherr • Grove • Manitowoc • Demag de última generación.</span>
                <span className="sm:hidden">Grúas Móviles y Sobre Oruga de las Mejores Marcas Alemanas: Liebherr, Grove, Manitowoc, Demag.</span>
              </p>
            </motion.div>
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
