
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'

interface CarouselItem {
  id: number
  src: string
  title: string
  description: string
  alt: string
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    src: '/images/grua de 130 ton.png',
    title: 'Grúa 130 Toneladas',
    description: 'Proyecto de Construcción Residencial',
    alt: 'Grúa de 130 toneladas en construcción'
  },
  {
    id: 2,
    src: '/images/ingenieria 3d.png',
    title: 'Ingeniería 3D',
    description: 'Planificación y Diseño de Proyectos',
    alt: 'Diseño 3D de ingeniería con grúas'
  },
  {
    id: 3,
    src: '/images/trabajo de grua 450 ton.png',
    title: 'Grúa 450 Toneladas',
    description: 'Sector Industrial Pesado',
    alt: 'Grúa de 450 toneladas en proyecto industrial'
  },
  {
    id: 4,
    src: '/images/grua 500 ton.png',
    title: 'Grúa 500 Toneladas',
    description: 'Instalación Industrial Compleja',
    alt: 'Grúa de 500 toneladas en instalación industrial'
  },
  {
    id: 5,
    src: '/images/imagen grua.png',
    title: 'Instalación Industrial',
    description: 'Sector Petrolero y Energético',
    alt: 'Grúa en instalación industrial'
  },
  {
    id: 6,
    src: '/images/grua de 600 ton y grua de 130 ton.png',
    title: 'Grúas 600T + 130T',
    description: 'Trabajo Coordinado en Equipo',
    alt: 'Grúas de 600 y 130 toneladas trabajando juntas'
  },
  {
    id: 7,
    src: '/images/trabajo de grua de 600 ton.png',
    title: 'Grúa 600 Toneladas',
    description: 'Sector Refinería y Petroquímica',
    alt: 'Grúa de 600 toneladas en refinería'
  },
  {
    id: 8,
    src: '/images/grua de 800 ton.png',
    title: 'Grúa 800 Toneladas',
    description: 'Proyecto Industrial de Gran Escala',
    alt: 'Grúa de 800 toneladas en proyecto industrial'
  },
  {
    id: 9,
    src: '/images/trabajo de grua.png',
    title: 'Proyecto Complejo',
    description: 'Múltiples Grúas Coordinadas',
    alt: 'Múltiples grúas en proyecto complejo'
  },
  {
    id: 10,
    src: '/images/trabajo estadio copa america.png',
    title: 'Estadio Copa América',
    description: 'Proyecto Deportivo Nacional',
    alt: 'Grúas en construcción del estadio Copa América'
  },
  {
    id: 11,
    src: '/images/trabajo gruas de 600 ton demag.png',
    title: 'Grúas Demag 600T',
    description: 'Izamiento de Equipos Pesados',
    alt: 'Grúas Demag de 600 toneladas'
  },
  {
    id: 12,
    src: '/images/trabajo grua 800 ton.png',
    title: 'Grúa 800T Izando',
    description: 'Manejo de Equipos Ultra Pesados',
    alt: 'Grúa de 800 toneladas izando equipo pesado'
  },
  // NUEVAS IMÁGENES - SECTOR ENERGÉTICO
  {
    id: 13,
    src: '/images/grua-130-ton-transformador.png',
    title: 'Grúa 130T - Transformador',
    description: 'Izamiento de Transformador Eléctrico',
    alt: 'Grúa móvil de 130 toneladas izando transformador eléctrico'
  },
  {
    id: 14,
    src: '/images/montaje-transformador.png',
    title: 'Montaje de Transformador',
    description: 'Movilización y Montaje Industrial',
    alt: 'Proceso de movilización y montaje de transformador industrial'
  },
  {
    id: 15,
    src: '/images/movilizacion-generador-sobredimensionado.png',
    title: 'Generador Sobredimensionado',
    description: 'Transporte de Equipos Especiales',
    alt: 'Movilización de generador sobredimensionado con equipos especializados'
  },
  {
    id: 16,
    src: '/images/izamiento-grua-300-ton.png',
    title: 'Grúa 300 Toneladas',
    description: 'Izamiento Industrial de Gran Escala',
    alt: 'Izamiento con grúa de 300 toneladas en proyecto industrial'
  },
  // NUEVAS IMÁGENES - SECTOR TRANSPORTE
  {
    id: 17,
    src: '/images/movilizacion-vagones-metro.jpg',
    title: 'Vagones de Metro',
    description: 'Transporte de Sistemas Ferroviarios',
    alt: 'Movilización especializada de vagones de metro'
  },
  {
    id: 18,
    src: '/images/movilizacion-vagones-ferrocarril.jpg',
    title: 'Vagones de Ferrocarril',
    description: 'Logística Ferroviaria Especializada',
    alt: 'Movilización de vagones de ferrocarril con equipos especializados'
  },
  {
    id: 19,
    src: '/images/movilizacion-topas-metro-caracas.png',
    title: 'TOPAS Metro Caracas',
    description: 'Proyecto Metro Caracas',
    alt: 'Movilización de TOPAS para el sistema Metro de Caracas'
  },
  {
    id: 20,
    src: '/images/transporte-pieza-250-ton.png',
    title: 'Transporte 250 Toneladas',
    description: 'Logística de Cargas Ultra Pesadas',
    alt: 'Servicios de transporte especializado de pieza de 250 toneladas'
  },
  // NUEVAS IMÁGENES - SECTOR INDUSTRIAL
  {
    id: 21,
    src: '/images/grua-movil-130-ton.png',
    title: 'Grúa Móvil 130T',
    description: 'Versatilidad Industrial Compacta',
    alt: 'Grúa móvil de 130 toneladas en operación industrial'
  },
  {
    id: 22,
    src: '/images/proyecto-seguridad-calidad.png',
    title: 'Seguridad y Calidad',
    description: 'Proyectos con Estándares Certificados',
    alt: 'Proyecto realizado con altos estándares de seguridad y calidad'
  }
]

export function GaleriaCarrusel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const totalSlides = carouselItems.length

  // Función para ir a un slide específico
  const goToSlide = useCallback((slideIndex: number) => {
    setCurrentSlide(slideIndex)
  }, [])

  // Función para ir al siguiente slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  // Función para ir al slide anterior
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  // Auto-slide cada 5 segundos
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  // Pausar/reanudar auto-slide
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const handleWhatsAppRedirect = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.open('https://api.whatsapp.com/message/E6H4WASHIL6LB1?autoload=1&app_absent=0', '_blank')
  }

  return (
    <section id="galeria-carrusel" className="py-20" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
      <div className="container mx-auto max-w-7xl px-6">
        {/* Título de la Sección */}
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
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Descubre nuestros proyectos más destacados con grúas de alta capacidad en diversos sectores industriales de Venezuela
          </p>
        </motion.div>

        {/* Carrusel Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl shadow-2xl mb-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ height: '500px' }}
        >
          {/* Carrusel Wrapper */}
          <div 
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ 
              transform: `translateX(-${currentSlide * 100}%)`,
              willChange: 'transform'
            }}
          >
            {carouselItems.map((item, index) => (
              <div key={item.id} className="min-w-full relative h-full">
                <div className="relative h-full bg-gray-100">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority={index === 0}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Slide Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute bottom-0 left-0 right-0 text-center text-white p-8 md:p-12"
                  >
                    <h3 className="text-3xl md:text-4xl font-bold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* Botones de Navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-yellow-400/90 hover:bg-yellow-400 text-blue-900 rounded-full p-3 md:p-4 transition-all duration-300 hover:scale-110 shadow-lg z-10"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-yellow-400/90 hover:bg-yellow-400 text-blue-900 rounded-full p-3 md:p-4 transition-all duration-300 hover:scale-110 shadow-lg z-10"
            aria-label="Slide siguiente"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-yellow-400 scale-125'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm z-10">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-red-400'}`} />
              {isAutoPlaying ? 'Auto' : 'Manual'}
            </div>
          </div>
        </motion.div>

        {/* Información Adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="mb-8">
            <p className="text-lg text-gray-600 mb-8 italic font-medium">
              Desliza el cursor sobre la imagen para pausar la rotación automática
            </p>
            
            {/* Mensaje de Llamada a la Acción Principal */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="mensaje-principal rounded-3xl mb-6 shadow-2xl"
              style={{ 
                background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
                padding: '2rem',
                boxShadow: '0 10px 30px rgba(30, 58, 138, 0.3)'
              }}
            >
              <h3 
                className="font-extrabold mb-3 uppercase tracking-wide text-4xl md:text-5xl"
                style={{ 
                  color: '#FFC107',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  letterSpacing: '1px'
                }}
              >
                GRÚAS EQUISER
              </h3>
              <p 
                className="font-semibold uppercase tracking-wider text-xl md:text-2xl text-center"
                style={{ 
                  color: 'white',
                  letterSpacing: '0.5px'
                }}
              >
                #1 Empresa Líder En Venezuela En Alquiler de Grúas Móviles Telescópicas, Grúas Sobre Oruga y Equipos de Transporte Pesado y Sobredimensionado
              </p>
            </motion.div>
          </div>
          
          <motion.a
            href="#"
            onClick={handleWhatsAppRedirect}
            whileHover={{ 
              scale: 1.05,
              y: -3
            }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-3 px-10 py-5 text-xl font-bold rounded-full transition-all duration-300 uppercase tracking-wide shadow-xl hover:shadow-2xl"
            style={{ 
              background: 'linear-gradient(135deg, #FFC107 0%, #FFD700 100%)',
              color: '#1E3A8A',
              letterSpacing: '0.5px',
              boxShadow: '0 5px 15px rgba(255, 193, 7, 0.4)'
            }}
          >
            <Camera className="w-6 h-6" />
            💬 Solicitar Cotización Ahora
          </motion.a>
        </motion.div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .carousel-container {
            height: 350px !important;
          }
          
          .slide-info h3 {
            font-size: 1.5rem !important;
          }
          
          .slide-info p {
            font-size: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          .carousel-container {
            height: 280px !important;
            margin: 0 0.5rem;
          }
          
          .slide-info {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}
