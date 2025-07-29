
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Filter, MapPin, Calendar, Wrench } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeFilter, setActiveFilter] = useState('todos')
  const [projects, setProjects] = useState<any[]>([])

  const sectors = [
    { id: 'todos', name: 'Todos los Proyectos', count: 12 },
    { id: 'gruas-moviles', name: 'Grúas Móviles', count: 5 },
    { id: 'gruas-sobre-oruga', name: 'Grúas Sobre Oruga', count: 4 },
    { id: 'transporte-pesado', name: 'Transporte Pesado', count: 2 },
    { id: 'proyectos-especiales', name: 'Proyectos Especiales', count: 1 }
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
      image: '/images/trabajo de grua 450 ton.png',
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
      image: '/images/dos gruas de 600 ton.png',
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
      image: '/images/gantry 600 ton generador.png',
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
      image: '/images/trabajo grua 800 ton.png',
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
      image: '/images/grua 500 ton.png',
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
      image: '/images/trabajo de grua de 600 ton.png',
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
      image: '/images/grua de 130 ton.png',
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
      image: '/images/grua de 600 ton y grua de 130 ton.png',
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
      image: '/images/grua de 800 ton.png',
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
      image: '/images/trabajo de gantry 600 ton.png',
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
      image: '/images/trabajo de grua.png',
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
      image: '/images/imagen grua.png',
      equipment: ['Grúa sobre oruga 350T', 'Rigging petrolero'],
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
            Proyectos <span className="text-equiser-blue">Ejecutados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 500 proyectos exitosos en los principales sectores industriales de Venezuela. 
            Cada operación ejecutada con los más altos estándares de seguridad y calidad.
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-8">
            <Filter className="w-5 h-5 text-gray-500 mr-3" />
            <span className="text-gray-700 font-medium">Filtrar por sector:</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map((sector) => (
              <button
                key={sector.id}
                onClick={() => setActiveFilter(sector.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === sector.id
                    ? 'bg-equiser-blue text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {sector.name} ({sector.count})
              </button>
            ))}
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
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Proyectos Destacados</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {allProjects.filter(p => p.featured).slice(0, 4).map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-equiser-blue text-white px-4 py-2 rounded-full font-bold">
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

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-equiser-blue capitalize">
                        {sectors.find(s => s.id === project.sector)?.name}
                      </span>
                      <Button
                        size="sm"
                        onClick={() => window.open(`https://wa.me/584143432882?text=Me interesa información sobre el proyecto: ${project.title}`, '_blank')}
                        className="equiser-yellow equiser-yellow-hover text-equiser-blue font-semibold"
                      >
                        Más Info
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
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-3 right-3">
                  <div className="bg-equiser-blue text-white px-3 py-1 rounded-full text-sm font-bold">
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
                  <span className="text-sm font-medium text-equiser-blue capitalize">
                    {sectors.find(s => s.id === project.sector)?.name}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(`https://wa.me/584143432882?text=Información sobre: ${project.title}`, '_blank')}
                    className="text-xs border-equiser-blue text-equiser-blue hover:bg-equiser-blue hover:text-white"
                  >
                    Ver Detalles
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-equiser-blue to-blue-900 text-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas Servicios De Alquiler De Grúas O Transporte Pesado?</h3>
            <p className="text-blue-100 mb-6">
              Más de 30 años de experiencia con grúas hasta 1600 toneladas. Contáctanos para cotización inmediata.
            </p>
            <Button
              onClick={() => window.open('https://wa.me/584143432882?text=Necesito servicios de alquiler de grúas o transporte pesado de GRÚAS EQUISER', '_blank')}
              className="equiser-yellow equiser-yellow-hover text-equiser-blue px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-200"
            >
              Solicitar Cotización Ahora
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
