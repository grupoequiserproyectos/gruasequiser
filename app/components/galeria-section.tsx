
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Camera } from 'lucide-react'

interface GalleryItem {
  id: number
  src: string
  title: string
  description: string
  alt: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: '/images/grua de 130 ton.png',
    title: 'Grúa 130 Toneladas',
    description: 'Proyecto de Construcción',
    alt: 'Grúa de 130 toneladas en construcción'
  },
  {
    id: 2,
    src: '/images/ingenieria 3d.png',
    title: 'Ingeniería 3D',
    description: 'Planificación de Proyectos',
    alt: 'Diseño 3D de ingeniería con grúas'
  },
  {
    id: 3,
    src: '/images/trabajo de grua 450 ton.png',
    title: 'Grúa 450 Toneladas',
    description: 'Sector Industrial',
    alt: 'Grúa de 450 toneladas en proyecto industrial'
  },
  {
    id: 4,
    src: '/images/grua 500 ton.png',
    title: 'Grúa 500 Toneladas',
    description: 'Instalación Industrial',
    alt: 'Grúa de 500 toneladas en instalación industrial'
  },
  {
    id: 5,
    src: '/images/imagen grua.png',
    title: 'Instalación Industrial',
    description: 'Sector Petrolero',
    alt: 'Grúa en instalación industrial'
  },
  {
    id: 6,
    src: '/images/grua de 600 ton y grua de 130 ton.png',
    title: 'Grúas 600T + 130T',
    description: 'Trabajo en Equipo',
    alt: 'Grúas de 600 y 130 toneladas trabajando juntas'
  },
  {
    id: 7,
    src: '/images/trabajo de grua de 600 ton.png',
    title: 'Grúa 600 Toneladas',
    description: 'Sector Refinería',
    alt: 'Grúa de 600 toneladas en refinería'
  },
  {
    id: 8,
    src: '/images/grua de 800 ton.png',
    title: 'Grúa 800 Toneladas',
    description: 'Proyecto Industrial',
    alt: 'Grúa de 800 toneladas en proyecto industrial'
  },
  {
    id: 9,
    src: '/images/trabajo de grua.png',
    title: 'Proyecto Complejo',
    description: 'Múltiples Grúas',
    alt: 'Múltiples grúas en proyecto complejo'
  },
  {
    id: 10,
    src: '/images/trabajo estadio copa america.png',
    title: 'Estadio Copa América',
    description: 'Proyecto Deportivo',
    alt: 'Grúas en construcción del estadio Copa América'
  },
  {
    id: 11,
    src: '/images/trabajo gruas de 600 ton demag.png',
    title: 'Grúas Demag 600T',
    description: 'Izamiento Pesado',
    alt: 'Grúas Demag de 600 toneladas'
  },
  {
    id: 12,
    src: '/images/trabajo grua 800 ton.png',
    title: 'Grúa 800T Izando',
    description: 'Equipo Pesado',
    alt: 'Grúa de 800 toneladas izando equipo pesado'
  }
]

export function GaleriaSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const projectsSection = document.getElementById('proyectos')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1E3A8A' }}>
            Galería de Proyectos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre algunos de nuestros proyectos más destacados con grúas de alta capacidad 
            en diversos sectores industriales de Venezuela.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-white">
                    <h4 className="font-bold text-lg mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {item.title}
                    </h4>
                    <p className="text-sm opacity-0 group-hover:opacity-90 transition-opacity duration-300 delay-150">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Camera Icon */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="p-4" style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)' }}>
                <h4 className="font-semibold text-white text-sm mb-1">
                  {item.title}
                </h4>
                <p className="text-white/80 text-xs">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="#proyectos"
            onClick={handleScrollToProjects}
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ 
              background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
              boxShadow: '0 4px 15px rgba(30, 58, 138, 0.3)'
            }}
          >
            <Camera className="w-5 h-5" />
            Ver Más Proyectos
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.25rem;
          }
        }
        
        @media (max-width: 480px) {
          .grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  )
}
