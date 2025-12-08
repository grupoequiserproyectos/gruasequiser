'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, MapPin, TrendingUp, Award, Shield, Clock, Users, Wrench } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function SEOContentExpanded() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="w-full bg-gradient-to-b from-white via-gray-50 to-white" ref={ref}>
      {/* SECTION 1: TIPOS DE GRÚAS - 500 palabras */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-6 text-equiser-blue">
            Tipos de Grúas Disponibles para Alquiler en Venezuela
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            EQUISER ofrece la flota más moderna y completa de Venezuela, con grúas certificadas para todo tipo de proyectos industriales.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Grúas Móviles */}
            <motion.article
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-equiser-blue">
                Grúas Móviles Telescópicas de 25 a 600 Toneladas
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nuestras grúas móviles telescópicas son ideales para proyectos con acceso limitado y alta movilidad. 
                Equipadas con tecnología de última generación de marcas reconocidas como <strong>Liebherr, Grove y Manitowoc</strong>, 
                ofrecemos capacidades de levantamiento desde 25 hasta 600 toneladas con certificaciones internacionales ISO 9001.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-equiser-yellow mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Grúas de 25-50 toneladas:</strong> Perfectas para proyectos pequeños a medianos, montaje de estructuras metálicas ligeras, mantenimiento industrial y obras de construcción urbana.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-equiser-yellow mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Grúas de 130-300 toneladas:</strong> Aplicaciones industriales estándar como izamiento de transformadores eléctricos, turbinas, tanques de almacenamiento y equipos petroquímicos.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-equiser-yellow mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Grúas de 450-600 toneladas:</strong> Para proyectos de máxima complejidad en refinerías, plantas siderúrgicas y complejos petroleros con cargas críticas.</span>
                </li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-equiser-blue">
                <p className="text-sm text-gray-700">
                  <strong>Aplicaciones principales:</strong> Izamiento de transformadores eléctricos, montaje de estructuras metálicas industriales, 
                  posicionamiento de turbinas en plantas de generación, instalación de equipos en refinerías, y transporte de maquinaria pesada.
                </p>
              </div>
            </motion.article>

            {/* Grúas de Oruga */}
            <motion.article
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
              variants={fadeIn}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-equiser-blue">
                Grúas Sobre Oruga de 300 a 1600 Toneladas
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Para terrenos difíciles y operaciones de alta complejidad, nuestras grúas de oruga son la solución perfecta. 
                Con capacidades desde 300 hasta 1600 toneladas, estas unidades están diseñadas para trabajar en condiciones extremas 
                donde las grúas móviles convencionales no pueden operar. Equipadas con tecnología <strong>Demag</strong> de origen alemán.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-equiser-yellow mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Grúas de 300-600 toneladas:</strong> Industrial pesado en plantas petroquímicas, refinerías y proyectos de infraestructura portuaria.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-equiser-yellow mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Grúas de 800-1200 toneladas:</strong> Mega proyectos en la Faja Petrolífera del Orinoco, complejos siderúrgicos SIDOR y desarrollos energéticos.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-equiser-yellow mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Grúas de 1600 toneladas:</strong> La mayor capacidad disponible en Venezuela para proyectos únicos que requieren precisión extrema.</span>
                </li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-equiser-yellow">
                <p className="text-sm text-gray-700">
                  <strong>Sectores de aplicación:</strong> Plantas petroquímicas Pequiven, Refinería El Palito, complejos siderúrgicos, 
                  puertos de Puerto Cabello, mega proyectos de la Faja del Orinoco, y operaciones especiales en Ciudad Guayana.
                </p>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: SERVICIOS ESPECIALIZADOS - 400 palabras - WCAG AA Compliant */}
      <section className="py-16" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-center mb-6 text-equiser-blue">
              Servicios Especializados de Alquiler de Grúas en Venezuela
            </h2>
            <p className="text-xl text-center mb-12 text-gray-700 max-w-4xl mx-auto">
              Soluciones integrales para la industria pesada venezolana con 30+ años de experiencia comprobada
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-xl transition-all duration-300 border border-equiser-blue/30 shadow-lg hover:shadow-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '20px', borderRadius: '8px' }}>
                <Wrench className="w-12 h-12 text-equiser-blue mb-4" />
                <h3 className="text-xl font-bold mb-3 text-equiser-blue">Alquiler de Grúas Móviles y Sobre Oruga</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Flota actualizada con grúas certificadas para operación en sectores petrolero, petroquímico, siderúrgico y energético. 
                  Incluye operadores certificados NCCCO y supervisores de seguridad industrial.
                </p>
              </div>

              <div className="rounded-xl transition-all duration-300 border border-equiser-blue/30 shadow-lg hover:shadow-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '20px', borderRadius: '8px' }}>
                <TrendingUp className="w-12 h-12 text-equiser-blue mb-4" />
                <h3 className="text-xl font-bold mb-3 text-equiser-blue">Transporte Pesado y Extrapesado</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Sistema Super Lowboy Hidráulico hasta 250 toneladas para movilización de transformadores, turbinas y generadores. 
                  Permisos especiales de tránsito y escoltas en todo el territorio nacional.
                </p>
              </div>

              <div className="rounded-xl transition-all duration-300 border border-equiser-blue/30 shadow-lg hover:shadow-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '20px', borderRadius: '8px' }}>
                <Shield className="w-12 h-12 text-equiser-blue mb-4" />
                <h3 className="text-xl font-bold mb-3 text-equiser-blue">Izamiento Industrial Especializado</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Servicios de rigging e ingeniería 3D para proyectos complejos en Pequiven, Refinería El Palito, SIDOR y Faja del Orinoco. 
                  Cálculos estructurales certificados y análisis de cargas.
                </p>
              </div>

              <div className="rounded-xl transition-all duration-300 border border-equiser-blue/30 shadow-lg hover:shadow-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '20px', borderRadius: '8px' }}>
                <Users className="w-12 h-12 text-equiser-blue mb-4" />
                <h3 className="text-xl font-bold mb-3 text-equiser-blue">Ingeniería y Planificación 3D</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Modelado 3D avanzado con AutoCAD y Solid Works, análisis de cargas con software LIFTPLANNER, 
                  simulación de izamiento para máxima precisión y seguridad en operaciones críticas.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: POR QUÉ ELEGIR EQUISER - 400 palabras */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-equiser-blue">
            ¿Por Qué Elegir Grúas EQUISER para Su Proyecto Industrial?
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
            La combinación perfecta de experiencia, tecnología y compromiso con la seguridad
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-equiser-blue/20 hover:border-equiser-blue transition-all duration-300">
              <div className="flex items-center mb-4">
                <Award className="w-10 h-10 text-equiser-blue mr-3" />
                <h3 className="text-xl font-bold text-equiser-blue">✅ 30+ Años de Experiencia</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Desde 1995 sirviendo a la industria pesada venezolana con máxima calidad y seguridad. Hemos participado en los proyectos 
                más emblemáticos del país: refinación, petroquímica, siderurgia y energía.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl border-2 border-equiser-yellow/20 hover:border-equiser-yellow transition-all duration-300">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-10 h-10 text-equiser-blue mr-3" />
                <h3 className="text-xl font-bold text-equiser-blue">✅ 500+ Proyectos Ejecutados</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                100% de proyectos completados exitosamente sin incidentes graves. Algunos destacados: Refinería El Palito, 
                Pequiven José, SIDOR Ciudad Guayana, Faja Petrolífera del Orinoco, Puerto Cabello.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-equiser-blue/20 hover:border-equiser-blue transition-all duration-300">
              <div className="flex items-center mb-4">
                <Users className="w-10 h-10 text-equiser-blue mr-3" />
                <h3 className="text-xl font-bold text-equiser-blue">✅ Operadores Certificados Internacionalmente</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Personal altamente capacitado con certificaciones NCCCO, OSHA, ISO 9001 y estándares internacionales. 
                Capacitación continua en seguridad industrial y nuevas tecnologías.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl border-2 border-equiser-yellow/20 hover:border-equiser-yellow transition-all duration-300">
              <div className="flex items-center mb-4">
                <Shield className="w-10 h-10 text-equiser-blue mr-3" />
                <h3 className="text-xl font-bold text-equiser-blue">✅ 100+ Profesionales en Nómina</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Equipo multidisciplinario: 50+ operadores certificados, 25+ técnicos especialistas en mantenimiento, 
                15+ supervisores de seguridad HSE, 10+ ingenieros de proyectos.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-equiser-blue/20 hover:border-equiser-blue transition-all duration-300">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-10 h-10 text-equiser-blue mr-3" />
                <h3 className="text-xl font-bold text-equiser-blue">✅ Sistema de Monitoreo Satelital Integrado</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Seguimiento en tiempo real GPS/GPRS, control de cargas con sensores de alta precisión, 
                datos de performance instantáneos, y alertas automáticas de seguridad.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl border-2 border-equiser-yellow/20 hover:border-equiser-yellow transition-all duration-300">
              <div className="flex items-center mb-4">
                <Clock className="w-10 h-10 text-equiser-blue mr-3" />
                <h3 className="text-xl font-bold text-equiser-blue">✅ Disponibilidad 24/7 Nacional</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Cobertura garantizada en Maracaibo, Valencia, Puerto Cabello, Caracas, Faja del Orinoco, Ciudad Guayana, 
                Barcelona, Puerto La Cruz y Maturín. Respuesta en 24-48 horas.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 4: COBERTURA GEOGRÁFICA - 300 palabras */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-center mb-4 text-equiser-blue">
              Cobertura Nacional de Alquiler de Grúas en Venezuela
            </h2>
            <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
              EQUISER opera en toda Venezuela con base estratégica en Morón, Carabobo. Respuesta rápida garantizada.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-equiser-blue">
                <MapPin className="w-8 h-8 text-equiser-blue mb-3" />
                <h3 className="text-lg font-bold mb-2 text-equiser-blue">Maracaibo, Zulia</h3>
                <p className="text-gray-700 text-sm mb-2">Sector petrolero y petroquímico</p>
                <p className="text-2xl font-bold text-equiser-yellow">+120</p>
                <p className="text-xs text-gray-600">operaciones/año</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-equiser-yellow">
                <MapPin className="w-8 h-8 text-equiser-blue mb-3" />
                <h3 className="text-lg font-bold mb-2 text-equiser-blue">Barcelona, Anzoátegui</h3>
                <p className="text-gray-700 text-sm mb-2">Industria petroquímica Pequiven</p>
                <p className="text-2xl font-bold text-equiser-yellow">+95</p>
                <p className="text-xs text-gray-600">operaciones/año</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-equiser-blue">
                <MapPin className="w-8 h-8 text-equiser-blue mb-3" />
                <h3 className="text-lg font-bold mb-2 text-equiser-blue">Puerto La Cruz, Anzoátegui</h3>
                <p className="text-gray-700 text-sm mb-2">Sector portuario y logístico</p>
                <p className="text-2xl font-bold text-equiser-yellow">+80</p>
                <p className="text-xs text-gray-600">operaciones/año</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-equiser-yellow">
                <MapPin className="w-8 h-8 text-equiser-blue mb-3" />
                <h3 className="text-lg font-bold mb-2 text-equiser-blue">Valencia, Carabobo</h3>
                <p className="text-gray-700 text-sm mb-2">Industrial manufacturero</p>
                <p className="text-2xl font-bold text-equiser-yellow">+65</p>
                <p className="text-xs text-gray-600">operaciones/año</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-equiser-blue">
                <MapPin className="w-8 h-8 text-equiser-blue mb-3" />
                <h3 className="text-lg font-bold mb-2 text-equiser-blue">Puerto Cabello, Carabobo</h3>
                <p className="text-gray-700 text-sm mb-2">Logística portuaria y refinería</p>
                <p className="text-2xl font-bold text-equiser-yellow">+75</p>
                <p className="text-xs text-gray-600">operaciones/año</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-equiser-yellow">
                <MapPin className="w-8 h-8 text-equiser-blue mb-3" />
                <h3 className="text-lg font-bold mb-2 text-equiser-blue">Caracas, Distrito Capital</h3>
                <p className="text-gray-700 text-sm mb-2">Sector energético</p>
                <p className="text-2xl font-bold text-equiser-yellow">+45</p>
                <p className="text-xs text-gray-600">operaciones/año</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-equiser-blue">
                <MapPin className="w-8 h-8 text-equiser-blue mb-3" />
                <h3 className="text-lg font-bold mb-2 text-equiser-blue">Ciudad Guayana, Bolívar</h3>
                <p className="text-gray-700 text-sm mb-2">Siderurgia SIDOR</p>
                <p className="text-2xl font-bold text-equiser-yellow">+50</p>
                <p className="text-xs text-gray-600">operaciones/año</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-equiser-yellow">
                <MapPin className="w-8 h-8 text-equiser-blue mb-3" />
                <h3 className="text-lg font-bold mb-2 text-equiser-blue">Maturín, Monagas</h3>
                <p className="text-gray-700 text-sm mb-2">Pequiven José</p>
                <p className="text-2xl font-bold text-equiser-yellow">+40</p>
                <p className="text-xs text-gray-600">operaciones/año</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-equiser-blue">
                <MapPin className="w-8 h-8 text-equiser-blue mb-3" />
                <h3 className="text-lg font-bold mb-2 text-equiser-blue">Faja del Orinoco</h3>
                <p className="text-gray-700 text-sm mb-2">Megaproyectos petroleros</p>
                <p className="text-2xl font-bold text-equiser-yellow">+100</p>
                <p className="text-xs text-gray-600">operaciones/año</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: CASOS DE ÉXITO - 300 palabras */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-equiser-blue">
            Casos de Éxito: Proyectos Ejecutados con EQUISER
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
            Referencias verificables de proyectos completados con éxito total
          </p>

          <div className="space-y-8">
            <article className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-equiser-blue">
              <h3 className="text-2xl font-bold mb-3 text-equiser-blue">
                Izamiento Transformador 450 Toneladas - Planta Eléctrica Carabobo (2024)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-700 mb-2"><strong className="text-equiser-blue">Desafío:</strong> Izamiento de transformador crítico en espacio limitado sin interrumpir operaciones de la planta.</p>
                  <p className="text-gray-700 mb-2"><strong className="text-equiser-blue">Solución:</strong> Grúa móvil telescópica de 500 toneladas + sistema de monitoreo satelital + 3 ingenieros especialistas + cálculos 3D</p>
                  <p className="text-gray-700 mb-4"><strong className="text-equiser-blue">Resultado:</strong> Completado en 4 horas sin incidentes. Precisión de posicionamiento: ±2cm</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-3xl font-bold text-equiser-yellow mb-1">$75,000 USD</p>
                  <p className="text-sm text-gray-600 mb-3">Valor del proyecto</p>
                  <p className="text-sm text-gray-700"><strong>Cliente:</strong> Compañía Anónima de Administración y Fomento Eléctrico (CADAFE)</p>
                </div>
              </div>
            </article>

            <article className="bg-gradient-to-r from-yellow-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-equiser-yellow">
              <h3 className="text-2xl font-bold mb-3 text-equiser-blue">
                Operación Dual Grúas 600 Toneladas - Refinería El Palito (2024)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-700 mb-2"><strong className="text-equiser-blue">Desafío:</strong> Sincronización perfecta de 2 grúas para reactor petroquímico de 1200 toneladas</p>
                  <p className="text-gray-700 mb-2"><strong className="text-equiser-blue">Solución:</strong> 2x Grúas móviles de 600 toneladas + coordinación satelital + ingeniería 3D + simulación virtual previa</p>
                  <p className="text-gray-700 mb-4"><strong className="text-equiser-blue">Resultado:</strong> Operación perfecta sin desviaciones, 6 horas de trabajo continuo</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-3xl font-bold text-equiser-yellow mb-1">$180,000 USD</p>
                  <p className="text-sm text-gray-600 mb-3">Valor del proyecto</p>
                  <p className="text-sm text-gray-700"><strong>Cliente:</strong> Refinería El Palito - Pequiven</p>
                </div>
              </div>
            </article>

            <article className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-equiser-blue">
              <h3 className="text-2xl font-bold mb-3 text-equiser-blue">
                Movilización e Izamiento - Complejo Petroquímico Pequiven José (2023)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-700 mb-2"><strong className="text-equiser-blue">Desafío:</strong> Transporte de 180km + izamiento de torre de destilación 280 toneladas</p>
                  <p className="text-gray-700 mb-2"><strong className="text-equiser-blue">Solución:</strong> Super Lowboy hidráulico + escoltas + grúa de 300 toneladas + permisos especiales</p>
                  <p className="text-gray-700 mb-4"><strong className="text-equiser-blue">Resultado:</strong> Operación logística compleja ejecutada en 72 horas. Cero incidentes.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-3xl font-bold text-equiser-yellow mb-1">$95,000 USD</p>
                  <p className="text-sm text-gray-600 mb-3">Valor del proyecto</p>
                  <p className="text-sm text-gray-700"><strong>Cliente:</strong> Petroquímica de Venezuela (Pequiven)</p>
                </div>
              </div>
            </article>
          </div>
        </motion.div>
      </section>

      {/* SECTION 6: FAQ EXPANDIDA - 400 palabras */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-4 text-equiser-blue">
              Preguntas Frecuentes sobre Alquiler de Grúas en Venezuela
            </h2>
            <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
              Respuestas claras a las consultas más comunes de nuestros clientes industriales
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-equiser-blue hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-equiser-blue">¿Cuál es el costo de alquiler de una grúa en Venezuela?</h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  El costo varía según capacidad de tonelaje, ubicación del proyecto, duración del alquiler y complejidad de la operación. Rango aproximado:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-equiser-yellow mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Grúas 25-50 toneladas:</strong> $2,500-3,500 por día de operación</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-equiser-yellow mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Grúas 130-300 toneladas:</strong> $4,000-6,500 por día de operación</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-equiser-yellow mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Grúas 450-600 toneladas:</strong> $6,500-9,500 por día de operación</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-equiser-yellow mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Grúas 800-1600 toneladas:</strong> $9,500-15,000+ por día de operación</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-3 italic">Solicita cotización personalizada para tu proyecto específico.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-equiser-yellow hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-equiser-blue">¿Cuánto cuesta el servicio completo de izamiento industrial?</h3>
                <p className="text-gray-700 leading-relaxed">
                  El servicio completo incluye: alquiler de grúa, operador certificado NCCCO, supervisor de seguridad HSE, 
                  ingeniería 3D con simulación, monitoreo satelital en tiempo real, y todos los permisos necesarios. 
                  Presupuesto típico para operación completa: <strong className="text-equiser-blue">$8,000-20,000 USD</strong> por operación. 
                  Factores que influyen: tonelaje, altura de izamiento, radio de operación, y complejidad del proyecto.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-equiser-blue hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-equiser-blue">¿Qué marcas de grúas maneja EQUISER?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Trabajamos exclusivamente con fabricantes de primera línea y certificaciones internacionales: 
                  <strong className="text-equiser-blue"> Liebherr</strong> (Alemania - grúas móviles), 
                  <strong className="text-equiser-blue"> Grove</strong> (USA - grúas telescópicas), 
                  <strong className="text-equiser-blue"> Manitowoc</strong> (USA - grúas todo terreno), y 
                  <strong className="text-equiser-blue"> Demag</strong> (Alemania - grúas de oruga). 
                  Todas nuestras unidades cuentan con certificaciones ISO 9001 y mantenimiento preventivo cada 500 horas de operación.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-equiser-yellow hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-equiser-blue">¿Cuál es el tiempo de respuesta para movilización?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Disponibilidad garantizada 24/7 los 365 días del año. <strong className="text-equiser-blue">Respuesta inmediata</strong> a solicitudes de cotización en menos de 2 horas. 
                  <strong className="text-equiser-blue"> Movilización de equipos:</strong> 24-48 horas según ubicación del proyecto y tipo de grúa solicitada. 
                  Para emergencias industriales: respuesta express en 12-24 horas con recargos aplicables.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-equiser-blue hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-equiser-blue">¿EQUISER proporciona ingeniería y planificación del izamiento?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sí, incluido en todos nuestros servicios sin costo adicional. Ofrecemos: modelado 3D con AutoCAD y Solid Works, 
                  análisis de cargas con software LIFTPLANNER certificado, cálculos estructurales firmados por ingeniero civil colegiado, 
                  simulación virtual del izamiento, plan de rigging detallado, y matriz de riesgos HSE. 
                  <strong className="text-equiser-blue"> Todo respaldado por 30+ años de experiencia.</strong>
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/blog">
                <Button size="lg" className="bg-equiser-blue hover:bg-blue-900 text-white text-lg px-8 py-6">
                  Ver Más Artículos Técnicos →
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
