'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FileText, TrendingUp, MapPin } from 'lucide-react'
import Link from 'next/link'

export function RelatedContentLinks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="bg-gradient-to-b from-white via-blue-50 to-white py-16" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-equiser-blue">
            Contenido Relacionado: Guías y Recursos Técnicos
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
            Accede a nuestra biblioteca de conocimiento técnico sobre alquiler de grúas y servicios industriales en Venezuela
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Columna 1: Guías Generales */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-equiser-blue">
              <FileText className="w-10 h-10 text-equiser-blue mb-4" />
              <h3 className="text-xl font-bold mb-4 text-equiser-blue">Guías Generales</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog/alquiler-gruas-industriales-venezuela" className="text-gray-700 hover:text-equiser-blue transition-colors duration-200 hover:underline">
                    → Guía Completa: Alquiler de Grúas Industriales en Venezuela
                  </Link>
                </li>
                <li>
                  <Link href="/blog/costo-alquiler-grua-venezuela" className="text-gray-700 hover:text-equiser-blue transition-colors duration-200 hover:underline">
                    → ¿Cuánto Cuesta Alquilar una Grúa en Venezuela?
                  </Link>
                </li>
                <li>
                  <Link href="/blog/servicio-gruas-24-7-venezuela" className="text-gray-700 hover:text-equiser-blue transition-colors duration-200 hover:underline">
                    → Servicio de Grúas 24/7 en Venezuela: Disponibilidad Nacional
                  </Link>
                </li>
                <li>
                  <Link href="/blog/gruas-moviles-130-toneladas" className="text-gray-700 hover:text-equiser-blue transition-colors duration-200 hover:underline">
                    → Especificaciones de Grúas Móviles de 130 Toneladas
                  </Link>
                </li>
                <li>
                  <Link href="/blog/gruas-600-toneladas-proyectos-industriales" className="text-gray-700 hover:text-equiser-blue transition-colors duration-200 hover:underline">
                    → Grúas de 600 Toneladas para Proyectos Industriales
                  </Link>
                </li>
                <li>
                  <Link href="/blog/gruas-oruga-terrenos-dificiles" className="text-gray-700 hover:text-equiser-blue transition-colors duration-200 hover:underline">
                    → Grúas de Oruga: Solución para Terrenos Difíciles
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 2: Servicios Técnicos */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-equiser-yellow">
              <TrendingUp className="w-10 h-10 text-equiser-blue mb-4" />
              <h3 className="text-xl font-bold mb-4 text-equiser-blue">Servicios Técnicos</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog/tecnicas-izamiento-equipos-industriales" className="text-gray-700 hover:text-equiser-blue transition-colors duration-200 hover:underline">
                    → Técnicas Profesionales de Izamiento Industrial
                  </Link>
                </li>
                <li>
                  <Link href="/blog/movilizacion-transformadores" className="text-gray-700 hover:text-equiser-blue transition-colors duration-200 hover:underline">
                    → Movilización de Transformadores: Procedimientos y Equipos
                  </Link>
                </li>
                <li>
                  <Link href="/blog/rigging-industrial-calculos" className="text-gray-700 hover:text-equiser-blue transition-colors duration-200 hover:underline">
                    → Rigging Industrial: Cálculos y Procedimientos Seguros
                  </Link>
                </li>
                <li>
                  <Link href="/blog/transporte-carga-sobredimensionada" className="text-gray-700 hover:text-equiser-blue transition-colors duration-200 hover:underline">
                    → Transporte de Carga Sobredimensionada en Venezuela
                  </Link>
                </li>
                <li>
                  <Link href="/blog/transporte-equipos-mineros" className="text-gray-700 hover:text-equiser-blue transition-colors duration-200 hover:underline">
                    → Transporte Especializado de Equipos Mineros
                  </Link>
                </li>
                <li>
                  <Link href="/blog/coordinacion-izamientos-multiples-gruas" className="text-gray-700 hover:text-equiser-blue transition-colors duration-200 hover:underline">
                    → Coordinación de Izamientos con Múltiples Grúas
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 3: Cobertura Geográfica */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-equiser-blue">
              <MapPin className="w-10 h-10 text-equiser-blue mb-4" />
              <h3 className="text-xl font-bold mb-4 text-equiser-blue">Cobertura por Ciudad</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog/alquiler-gruas-industriales-maracaibo-zulia" className="text-gray-700 hover:text-equiser-blue transition-colors duration-200 hover:underline">
                    → Alquiler de Grúas en Maracaibo, Zulia
                  </Link>
                </li>
                <li>
                  <Link href="/blog/alquiler-gruas-industriales-valencia-carabobo" className="text-gray-700 hover:text-equiser-blue transition-colors duration-200 hover:underline">
                    → Alquiler de Grúas en Valencia, Carabobo
                  </Link>
                </li>
                <li>
                  <Link href="/blog/alquiler-gruas-industriales-puerto-cabello-carabobo" className="text-gray-700 hover:text-equiser-blue transition-colors duration-200 hover:underline">
                    → Alquiler de Grúas en Puerto Cabello
                  </Link>
                </li>
                <li>
                  <Link href="/blog/alquiler-gruas-industriales-caracas-distrito-capital" className="text-gray-700 hover:text-equiser-blue transition-colors duration-200 hover:underline">
                    → Alquiler de Grúas en Caracas, Distrito Capital
                  </Link>
                </li>
                <li>
                  <Link href="/blog/alquiler-gruas-industriales-ciudad-guayana-bolivar" className="text-gray-700 hover:text-equiser-blue transition-colors duration-200 hover:underline">
                    → Alquiler de Grúas en Ciudad Guayana, Bolívar
                  </Link>
                </li>
                <li>
                  <Link href="/blog/alquiler-gruas-barcelona-anzoategui" className="text-gray-700 hover:text-equiser-blue transition-colors duration-200 hover:underline">
                    → Alquiler de Grúas en Barcelona, Anzoátegui
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Fila adicional con más enlaces - WCAG AA Compliant */}
          <div className="p-8 rounded-xl shadow-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '20px', borderRadius: '8px' }}>
            <h3 className="text-2xl font-bold mb-6 text-center text-equiser-blue">Casos de Estudio y Proyectos Destacados</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/proyectos-izamiento-petromonagas" className="bg-equiser-blue/10 p-4 rounded-lg hover:bg-equiser-blue/20 transition-all duration-300 border border-equiser-blue/30" style={{ padding: '20px', borderRadius: '8px' }}>
                <span className="text-equiser-blue font-semibold text-lg">→ Proyectos de Izamiento en Petromonagas</span>
              </Link>
              <Link href="/blog/certificaciones-seguridad" className="bg-equiser-blue/10 p-4 rounded-lg hover:bg-equiser-blue/20 transition-all duration-300 border border-equiser-blue/30" style={{ padding: '20px', borderRadius: '8px' }}>
                <span className="text-equiser-blue font-semibold text-lg">→ Certificaciones de Seguridad en Servicios de Grúas</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
