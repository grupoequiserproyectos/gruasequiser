

'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Filter, MapPin, Calendar, Wrench } from 'lucide-react'
import Image from 'next/image'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export function ProjectsSection() {
  const t = useTranslations('projects')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeFilter, setActiveFilter] = useState('todos')
  const [projects, setProjects] = useState<any[]>([])

  const sectors = [
    { id: 'todos', name: t('filterAll'), count: 22 },
    { id: 'gruas-moviles', name: t('filterMobile'), count: 8 },
    { id: 'gruas-sobre-oruga', name: t('filterCrawler'), count: 4 },
    { id: 'transporte-pesado', name: t('filterTransport'), count: 6 },
    { id: 'proyectos-especiales', name: t('filterSpecial'), count: 4 }
  ]

  const allProjects = [
    {
      id: 1,
      title: 'Izamiento Transformador 450 TON',
      sector: 'gruas-moviles',
      capacity: '450 TON',
      location: 'Planta Eléctrica - Carabobo',
      year: 2024,
      description: 'Izamiento y posicionamiento de transformador eléctrico de alta capacidad con grúa móvil telescópica',
      image: '/images/trabajo de grua 450 ton.webp',
      equipment: ['Grúa móvil 450T', 'Transporte especializado'],
      featured: true
    },
    {
      id: 2,
      title: 'Operación Dual Grúas 600 TON',
      sector: 'proyectos-especiales',
      capacity: '600 TON x2',
      location: 'Refinería - Falcón',
      year: 2024,
      description: 'Operación coordinada con dos grúas de 600 toneladas para reactor petroquímico',
      image: '/images/dos gruas de 600 ton.webp',
      equipment: ['2x Grúas 600T', 'Sistema coordinado'],
      featured: true
    },
    {
      id: 3,
      title: 'Sistema Gantry Generador 600 TON',
      sector: 'transporte-pesado',
      capacity: '600 TON',
      location: 'Central Termoeléctrica - Zulia',
      year: 2023,
      description: 'Instalación de generador mediante sistema de pórtico especializado para transporte pesado',
      image: '/images/gantry 600 ton generador.webp',
      equipment: ['Sistema Gantry 600T', 'Rigging especializado'],
      featured: true
    },
    {
      id: 4,
      title: 'Izamiento Industrial 800 TON',
      sector: 'gruas-sobre-oruga',
      capacity: '800 TON',
      location: 'Complejo Industrial - Miranda',
      year: 2023,
      description: 'Izamiento de estructura industrial de gran envergadura con grúa sobre oruga',
      image: '/images/trabajo grua 800 ton.webp',
      equipment: ['Grúa sobre oruga 800T', 'Rigging pesado'],
      featured: true
    },
    {
      id: 5,
      title: 'Grúa Móvil 500 TON Operación',
      sector: 'gruas-moviles',
      capacity: '500 TON',
      location: 'Complejo Petroquímico - Anzoátegui',
      year: 2023,
      description: 'Mantenimiento de torres de destilación con grúa móvil de gran capacidad',
      image: '/images/grua 500 ton.webp',
      equipment: ['Grúa móvil 500T', 'Accesorios especiales'],
      featured: false
    },
    {
      id: 6,
      title: 'Operación Grúa Sobre Oruga 600 TON',
      sector: 'gruas-sobre-oruga',
      capacity: '600 TON',
      location: 'Plataforma Marina - Anzoátegui',
      year: 2023,
      description: 'Izamiento de equipos en plataforma petrolera marina con grúa sobre oruga',
      image: '/images/trabajo de grua de 600 ton.webp',
      equipment: ['Grúa sobre oruga 600T', 'Rigging marino'],
      featured: false
    },
    {
      id: 7,
      title: 'Grúa Móvil Industrial 130 TON',
      sector: 'gruas-moviles',
      capacity: '130 TON',
      location: 'Zona Industrial - Carabobo',
      year: 2024,
      description: 'Izamiento de maquinaria industrial pesada con grúa móvil compacta',
      image: '/images/grua de 130 ton.webp',
      equipment: ['Grúa móvil 130T', 'Transporte lowboy'],
      featured: false
    },
    {
      id: 8,
      title: 'Operación Coordinada Multi-Grúa',
      sector: 'proyectos-especiales',
      capacity: '600 TON + 130 TON',
      location: 'Refinería - Carabobo',
      year: 2023,
      description: 'Operación coordinada con múltiples grúas para reactor complejo',
      image: '/images/grua de 600 ton y grua de 130 ton.webp',
      equipment: ['Grúa 600T', 'Grúa 130T', 'Coordinación especializada'],
      featured: false
    },
    {
      id: 9,
      title: 'Grúa Sobre Oruga 800 TON',
      sector: 'gruas-sobre-oruga',
      capacity: '800 TON',
      location: 'Siderúrgica - Bolívar',
      year: 2023,
      description: 'Izamiento de hornos industriales de gran tonelaje con grúa sobre oruga',
      image: '/images/grua de 800 ton.webp',
      equipment: ['Grúa sobre oruga 800T', 'Rigging ultra-pesado'],
      featured: false
    },
    {
      id: 10,
      title: 'Transporte Gantry Especializado',
      sector: 'transporte-pesado',
      capacity: '600 TON',
      location: 'Puerto - Carabobo',
      year: 2024,
      description: 'Operación portuaria con sistema gantry para carga excepcional y transporte pesado',
      image: '/images/trabajo de gantry 600 ton.webp',
      equipment: ['Sistema Gantry portuario', 'Transporte marítimo'],
      featured: false
    },
    {
      id: 11,
      title: 'Proyecto Integral Grúa Móvil',
      sector: 'gruas-moviles',
      capacity: '400 TON',
      location: 'Subestación - Lara',
      year: 2024,
      description: 'Proyecto integral de modernización de subestación eléctrica con grúa móvil',
      image: '/images/trabajo de grua.webp',
      equipment: ['Grúa telescópica 400T', 'Equipo integral'],
      featured: false
    },
    {
      id: 12,
      title: 'Operación Grúa Sobre Oruga Petrolera',
      sector: 'gruas-sobre-oruga',
      capacity: '350 TON',
      location: 'Campo Petrolero - Zulia',
      year: 2023,
      description: 'Mantenimiento de torres de perforación con grúa sobre oruga especializada',
      image: '/images/imagen grua.webp',
      equipment: ['Grúa sobre oruga 350T', 'Rigging petrolero'],
      featured: false
    },
    // NUEVOS PROYECTOS - SECTOR GRÚAS MÓVILES
    {
      id: 13,
      title: 'Grúa 130T Izando Transformador',
      sector: 'gruas-moviles',
      capacity: '130 TON',
      location: 'Subestación Eléctrica - Carabobo',
      year: 2024,
      description: 'Izamiento y posicionamiento de transformador eléctrico de alta tensión con precisión milimétrica',
      image: '/images/grua-130-ton-transformador.webp',
      equipment: ['Grúa móvil 130T', 'Rigging eléctrico especializado', 'Sistema de posicionamiento GPS'],
      featured: true
    },
    {
      id: 14,
      title: 'Grúa Móvil 130T Industrial',
      sector: 'gruas-moviles',
      capacity: '130 TON',
      location: 'Complejo Industrial - Miranda',
      year: 2024,
      description: 'Operación de grúa móvil compacta para instalación de maquinaria industrial pesada',
      image: '/images/grua-movil-130-ton.webp',
      equipment: ['Grúa móvil telescópica 130T', 'Accesorios industriales'],
      featured: false
    },
    {
      id: 15,
      title: 'Izamiento con Grúa 300T',
      sector: 'gruas-moviles',
      capacity: '300 TON',
      location: 'Planta Petroquímica - Anzoátegui',
      year: 2024,
      description: 'Izamiento de gran envergadura con grúa móvil de 300 toneladas para reactor industrial',
      image: '/images/izamiento-grua-300-ton.webp',
      equipment: ['Grúa móvil 300T', 'Rigging ultra-pesado', 'Sistema de monitoreo'],
      featured: true
    },
    // NUEVOS PROYECTOS - SECTOR TRANSPORTE PESADO
    {
      id: 16,
      title: 'Movilización Vagones de Metro',
      sector: 'transporte-pesado',
      capacity: '45 TON/VAGÓN',
      location: 'Sistema Metro - Distrito Capital',
      year: 2024,
      description: 'Transporte especializado de vagones de metro con equipos de carga y descarga especializados',
      image: '/images/movilizacion-vagones-metro.webp',
      equipment: ['Transporte multi-eje', 'Grúas auxiliares', 'Sistema de sujeción ferroviario'],
      featured: true
    },
    {
      id: 17,
      title: 'Vagones de Ferrocarril',
      sector: 'transporte-pesado',
      capacity: '50 TON/VAGÓN',
      location: 'Red Ferroviaria Nacional - Aragua',
      year: 2024,
      description: 'Logística ferroviaria especializada para movilización de vagones de carga pesada',
      image: '/images/movilizacion-vagones-ferrocarril.webp',
      equipment: ['Transporte ferroviario', 'Grúas de carga', 'Rieles temporales'],
      featured: false
    },
    {
      id: 18,
      title: 'TOPAS Metro Caracas',
      sector: 'transporte-pesado',
      capacity: '80 TON',
      location: 'Metro de Caracas - Distrito Capital',
      year: 2024,
      description: 'Movilización de TOPAS (Tren de Obra) para mantenimiento del sistema Metro de Caracas',
      image: '/images/movilizacion-topas-metro-caracas.webp',
      equipment: ['Transporte especializado TOPAS', 'Grúas pórtico', 'Sistema de rieles'],
      featured: true
    },
    {
      id: 19,
      title: 'Transporte 250 Toneladas',
      sector: 'transporte-pesado',
      capacity: '250 TON',
      location: 'Puerto Industrial - Carabobo',
      year: 2024,
      description: 'Servicios de transporte especializado de pieza industrial ultra-pesada de 250 toneladas',
      image: '/images/transporte-pieza-250-ton.webp',
      equipment: ['Transporte modular 250T', 'Grúas auxiliares', 'Sistema hidráulico'],
      featured: false
    },
    // NUEVOS PROYECTOS - SECTOR PROYECTOS ESPECIALES
    {
      id: 20,
      title: 'Montaje de Transformador',
      sector: 'proyectos-especiales',
      capacity: '180 TON',
      location: 'Central Eléctrica - Bolívar',
      year: 2024,
      description: 'Proyecto integral de movilización y montaje de transformador de potencia con coordinación multi-equipo',
      image: '/images/montaje-transformador.webp',
      equipment: ['Grúas coordinadas', 'Transporte especializado', 'Rigging eléctrico'],
      featured: true
    },
    {
      id: 21,
      title: 'Generador Sobredimensionado',
      sector: 'proyectos-especiales',
      capacity: '320 TON',
      location: 'Central Termoeléctrica - Zulia',
      year: 2024,
      description: 'Movilización de generador sobredimensionado con equipos especializados y planificación logística compleja',
      image: '/images/movilizacion-generador-sobredimensionado.webp',
      equipment: ['Transporte sobredimensionado', 'Grúas múltiples', 'Ingeniería de ruta'],
      featured: false
    },
    {
      id: 22,
      title: 'Proyecto Seguridad y Calidad',
      sector: 'proyectos-especiales',
      capacity: 'MÚLTIPLE',
      location: 'Diversas Ubicaciones - Venezuela',
      year: 2024,
      description: 'Proyecto realizado con los más altos estándares de seguridad y calidad certificados internacionalmente',
      image: '/images/proyecto-seguridad-calidad.webp',
      equipment: ['Equipos certificados', 'Personal especializado', 'Sistemas de seguridad'],
      featured: false
    }
  ]

  useEffect(() => {
    const filtered = activeFilter === 'todos' 
      ? allProjects 
      : allProjects.filter(project => project.sector === activeFilter)
    setProjects(filtered)
  }, [activeFilter])

  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('title')} <span className="text-equiser-blue">{t('titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        {/* REDISEÑO: Filtros con fondo azul gradient corporativo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div 
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
              padding: '60px 20px'
            }}
          >
            {/* Patrón decorativo de fondo */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(255, 193, 7, 0.3) 0%, transparent 50%)',
                pointerEvents: 'none'
              }}
            ></div>
            
            {/* Contenido principal */}
            <div className="relative z-10">
              {/* Título de filtros */}
              <div className="text-center mb-10">
                <h3 
                  className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2 flex items-center justify-center gap-4"
                  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
                >
                  <span className="text-2xl">🔽</span>
                  <span className="text-2xl">🔍</span>
                  {t('filterTitle')}
                </h3>
              </div>

              {/* Botones de filtro */}
              <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
                {sectors.map((sector) => (
                  <button
                    key={sector.id}
                    onClick={() => setActiveFilter(sector.id)}
                    className={`px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg ${
                      activeFilter === sector.id
                        ? 'text-equiser-blue border-4 border-equiser-blue shadow-yellow-200'
                        : 'text-equiser-blue border-2 border-white/50 hover:border-yellow-400 shadow-black/20'
                    }`}
                    style={{
                      background: activeFilter === sector.id 
                        ? 'linear-gradient(135deg, #FFC107 0%, #FFD700 100%)'
                        : 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      fontSize: '1.1rem',
                      fontWeight: activeFilter === sector.id ? '700' : '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      boxShadow: activeFilter === sector.id 
                        ? '0 8px 25px rgba(255, 193, 7, 0.4)' 
                        : '0 5px 15px rgba(0, 0, 0, 0.15)'
                    }}
                  >
                    {sector.name} ({sector.count})
                  </button>
                ))}
              </div>

              {/* Información adicional */}
              <div className="text-center mt-8">
                <p 
                  className="text-white/90 text-lg font-medium"
                  style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                >
                  ⚡ Proyectos exitosos | 🎯 Tecnología avanzada | 🚀 Respuesta inmediata
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Proyectos destacados */}
        {activeFilter === 'todos' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">{t('featured')}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {allProjects.filter(p => p.featured).slice(0, 4).map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="relative h-64 sm:h-72 lg:h-80 bg-gray-100">
                    <ResponsiveImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Etiquetas estilo Transervica */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <div className="equiser-yellow text-equiser-blue px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                        {sectors.find(s => s.id === project.sector)?.name || 'Industrial'}
                      </div>
                      <div className="bg-equiser-blue text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                        {project.capacity}
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2 text-sm mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h4>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {project.equipment.map((equip, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Wrench className="w-3 h-3 text-equiser-blue" />
                          <span className="text-sm text-gray-700">{equip}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500">{t('completed')}</span>
                        <span className="text-sm font-bold text-gray-700">{project.year}</span>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => window.open(`https://wa.me/message/IOBBJVBBVWNOI1?text=Hola, me interesa información sobre: ${project.title}`, '_blank')}
                        className="equiser-yellow equiser-yellow-hover text-equiser-blue font-bold px-5 py-2.5"
                      >
                        {t('btnConsult')}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Todos los proyectos */}
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 sm:h-56 lg:h-64 bg-gray-100">
                <ResponsiveImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Etiquetas estilo Transervica */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <div className="equiser-yellow text-equiser-blue px-3 py-1.5 rounded-lg font-bold text-xs shadow-lg">
                    {sectors.find(s => s.id === project.sector)?.name || 'Industrial'}
                  </div>
                  <div className="bg-equiser-blue text-white px-3 py-1.5 rounded-lg font-bold text-xs shadow-lg">
                    {project.capacity}
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h4>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {project.location}
                  </span>
                  <span>{project.year}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </span>
                  <Button
                    size="sm"
                    onClick={() => window.open(`https://wa.me/message/IOBBJVBBVWNOI1?text=Hola, me interesa información sobre: ${project.title}`, '_blank')}
                    className="equiser-yellow equiser-yellow-hover text-equiser-blue text-xs font-bold px-4 py-2"
                  >
                    {t('btnConsult')}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA con fondo legible mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div 
            className="relative rounded-3xl shadow-xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%)',
              backgroundImage: 'url("/images/imagen grua.webp")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}
          >
            {/* Overlay fuerte para mejor legibilidad */}
            <div className="absolute inset-0" style={{ background: 'rgba(30, 58, 138, 0.95)' }}></div>
            
            {/* Contenido con caja semi-transparente */}
            <div className="relative z-10 p-8">
              <div 
                className="mx-auto max-w-2xl rounded-2xl p-8"
                style={{
                  background: 'rgba(30, 58, 138, 0.9)',
                  border: '2px solid rgba(255, 215, 0, 0.3)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <h3 
                  className="text-2xl font-bold mb-4 text-white"
                  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
                >
                  {t('ctaTitle')}
                </h3>
                <p 
                  className="text-blue-100 mb-6"
                  style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                >
                  {t('ctaDescription')}
                </p>
                <Button
                  onClick={() => window.open('https://wa.me/message/IOBBJVBBVWNOI1', '_blank')}
                  className="equiser-yellow equiser-yellow-hover text-equiser-blue px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-200"
                >
                  {t('ctaButton')}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
