

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, Award, Shield, Clock, MapPin, Users, Wrench, Target } from 'lucide-react'
import Image from 'next/image'

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const servicesInfo = [
    {
      icon: '🏗️',
      title: 'Grúas hasta 1600 toneladas',
      description: 'La mayor capacidad disponible en Venezuela'
    },
    {
      icon: '🛰️',
      title: 'Sistema Integrado de Monitoreo Satelital',
      description: 'Sistema integrado de monitoreo Satelital y estudio de ruta bajo los lineamientos de la INTT (Instituto Nacional de Transporte terrestre)'
    },
    {
      icon: '✅',
      title: 'Seguridad y Calidad Garantizada',
      description: 'Protocolos estrictos en cada operación'
    },
    {
      icon: '⏰',
      title: 'Disponibilidad 24/7',
      description: 'Servicio de emergencia y respuesta inmediata'
    },
    {
      icon: '👷',
      title: 'Operadores Certificados',
      description: 'Personal altamente capacitado y especializado'
    },
    {
      icon: '🏭',
      title: '6 Sectores Industriales',
      description: 'Energético, petrolero, petroquímico, industrial, portuario, siderúrgico'
    }
  ]

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            La Flota de Alquiler <span className="text-equiser-blue">Más Moderna y Completa</span> de Venezuela
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Con más de 30 años de experiencia, GRÚAS EQUISER C.A. se ha consolidado como la empresa 
            líder en Venezuela en alquiler de grúas móviles, sobre oruga y servicios de transporte pesado.
          </p>
        </motion.div>

        {/* SECCIÓN OPTIMIZADA PARA DESKTOP VIEW */}
        <div className="mb-16">
          {/* Sección "¿Por Qué Elegir Grúas EQUISER?" - Optimizada para Desktop */}
          <motion.section 
            className="why-choose-us rounded-3xl text-center mb-12 px-4 sm:px-6 lg:px-8"
            style={{
              background: '#FFD700',
              padding: '50px 40px',
              color: '#1E3A8A'
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="container max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-equiser-blue mb-8 leading-tight">
                ¿Por Qué Elegir Grúas EQUISER?
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-equiser-blue max-w-4xl mx-auto font-medium">
                Somos la única empresa en Venezuela que combina la más moderna tecnología 
                de grúas con operadores certificados internacionalmente y un enfoque 
                integral en seguridad y calidad.
              </p>
            </div>
          </motion.section>

          {/* Grid de Características - OPTIMIZADO PARA DESKTOP VIEW */}
          <motion.section 
            className="py-16 lg:py-20 xl:py-24 rounded-3xl relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)',
              position: 'relative'
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Patrón decorativo mejorado */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255, 193, 7, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 193, 7, 0.05) 0%, transparent 50%)',
              }}
            />
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* GRID OPTIMIZADO: 2 filas de 3 columnas balanceadas en desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
                {servicesInfo.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 xl:p-10 text-center hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl group min-h-[280px] lg:min-h-[320px] xl:min-h-[350px]"
                    style={{
                      backdropFilter: 'blur(10px)',
                      border: '2px solid rgba(255, 193, 7, 0.3)'
                    }}
                  >
                    <div className="text-4xl lg:text-5xl xl:text-6xl mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-equiser-blue mb-3 lg:mb-4 group-hover:text-blue-800 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base xl:text-lg group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>

        {/* Sección de Imágenes y Stats - Optimizada para Desktop */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-5 gap-12 lg:gap-16 items-center mb-16">
          {/* Contenido de Ubicación - Optimizado para Desktop */}
          <motion.div
            className="xl:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-r from-equiser-yellow to-yellow-300 p-6 lg:p-8 xl:p-10 rounded-2xl text-equiser-blue shadow-xl">
              <div className="flex items-center mb-4 lg:mb-6">
                <MapPin className="w-6 h-6 lg:w-8 lg:h-8 mr-3" />
                <h4 className="text-xl lg:text-2xl xl:text-3xl font-bold">Ubicación Estratégica</h4>
              </div>
              <p className="font-medium text-base lg:text-lg xl:text-xl leading-relaxed">
                Autopista Puerto Cabello Morón, sector la Paragüita, diagonal a Planta Centro, 
                Morón estado Carabobo - Posición ideal para atender todo el territorio nacional.
              </p>
            </div>
          </motion.div>

          {/* Grid de Imágenes - Optimizado para Desktop */}
          <motion.div
            className="xl:col-span-3 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-3 lg:gap-4 xl:gap-6">
              <div className="space-y-3 lg:space-y-4 xl:space-y-6">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src="/images/grua de 800 ton.png"
                    alt="Grúa de 800 toneladas EQUISER"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src="/images/trabajo de grua 450 ton.png"
                    alt="Trabajo con grúa de 450 toneladas"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <div className="space-y-3 lg:space-y-4 xl:space-y-6 pt-4 lg:pt-6 xl:pt-8">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src="/images/dos gruas de 600 ton.png"
                    alt="Operación con dos grúas de 600 toneladas"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src="/images/ingenieria 3d.png"
                    alt="Ingeniería 3D EQUISER"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Badge flotante optimizado para desktop */}
            <div className="absolute -top-2 lg:-top-4 xl:-top-6 -left-2 lg:-left-4 xl:-left-6 bg-equiser-blue text-white p-3 lg:p-4 xl:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="text-xl lg:text-2xl xl:text-3xl font-bold">30+</div>
              <div className="text-xs lg:text-sm xl:text-base">Años de Experiencia</div>
            </div>
          </motion.div>
        </div>

        {/* CORRECCIÓN: Sección de compromiso con fondo amarillo y texto azul */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="rounded-3xl p-8 md:p-12 text-center"
          style={{
            background: '#FFD700',
            padding: '60px 0',
            borderRadius: '15px'
          }}
        >
          <h3 className="text-3xl font-bold mb-6 text-equiser-blue">Nuestro Compromiso Con La Excelencia</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-equiser-blue mb-2">500+</div>
              <div className="text-equiser-blue font-semibold">Proyectos Ejecutados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-equiser-blue mb-2">100%</div>
              <div className="text-equiser-blue font-semibold">Éxito en Operaciones</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-equiser-blue mb-2">24/7</div>
              <div className="text-equiser-blue font-semibold">Disponibilidad</div>
            </div>
          </div>
          <p className="mt-8 text-equiser-blue font-medium max-w-3xl mx-auto">
            Cada proyecto que ejecutamos refleja nuestro compromiso inquebrantable con la seguridad, 
            la calidad y la satisfacción del cliente. Somos el socio estratégico que las empresas 
            venezolanas necesitan para sus operaciones más complejas.
          </p>
        </motion.div>


      </div>
    </section>
  )
}
