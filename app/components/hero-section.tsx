

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
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32">
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12"
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

          {/* Sección de Botones Principales - SIN DUPLICACIONES */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {/* Container para botones */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
              
              {/* Botón Principal: Solicitar Cotización WhatsApp */}
              <Button
                onClick={handleWhatsApp}
                className="group relative overflow-hidden px-10 py-5 rounded-full text-lg font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-2 border-transparent hover:border-equiser-blue"
                style={{
                  background: 'linear-gradient(135deg, #FFC107 0%, #FFD700 100%)',
                  color: '#1E3A8A',
                  boxShadow: '0 8px 25px rgba(255, 193, 7, 0.4)',
                  letterSpacing: '0.5px'
                }}
              >
                <span className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5" />
                  Solicitar Cotización WhatsApp
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>

              {/* Botón Secundario: Ver Proyectos (ÚNICO) */}
              <Button
                onClick={() => document.getElementById('galeria-proyectos')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="group relative overflow-hidden px-10 py-5 rounded-full text-lg font-bold tracking-wide transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-2 hover:border-equiser-blue"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  color: '#1E3A8A',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderColor: 'rgba(30, 58, 138, 0.3)'
                }}
              >
                <span className="flex items-center gap-3">
                  <Play className="w-5 h-5" />
                  Ver Proyectos
                </span>
              </Button>
            </div>

            {/* Información adicional */}
            <motion.div 
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <p 
                className="text-blue-100 text-base font-medium italic"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
              >
                Respuesta inmediata por WhatsApp | Cotizaciones personalizadas
              </p>
            </motion.div>
          </motion.div>

          {/* Características destacadas rediseñadas */}
          <motion.div
            className="mt-8 grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ backdropFilter: 'blur(15px)' }}
              whileHover={{ y: -10 }}
            >
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ 
                  background: 'linear-gradient(135deg, #1E3A8A, #3B82F6)',
                  boxShadow: '0 10px 30px rgba(30, 58, 138, 0.4)'
                }}
              >
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-equiser-yellow">Máxima Seguridad</h3>
              <p className="text-blue-100 leading-relaxed">Protocolos estrictos y operadores especializados</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ backdropFilter: 'blur(15px)' }}
              whileHover={{ y: -10 }}
            >
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ 
                  background: 'linear-gradient(135deg, #FFC107, #FFD700)',
                  boxShadow: '0 10px 30px rgba(255, 193, 7, 0.4)'
                }}
              >
                <Award className="w-10 h-10 text-equiser-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-equiser-yellow">Equipos Premium</h3>
              <p className="text-blue-100 leading-relaxed">Grúas Moviles y Sobre Oruga Tecnológicas de las Mejores Marcas Alemanas: Liebherr • Grove • Manitowoc • Demag de última generación.</p>
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
