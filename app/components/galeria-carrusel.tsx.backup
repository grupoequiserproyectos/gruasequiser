
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
  },
  // NUEVAS IMÁGENES - PROYECTOS PETROMONAGAS
  {
    id: 23,
    src: '/images/trabajo-petromonagas.jpg',
    title: 'Trabajo Petromonagas',
    description: 'Grúa Amarilla Izando Tanque Industrial',
    alt: 'Trabajo Petromonagas con grúa amarilla izando tanque blanco grande'
  },
  {
    id: 24,
    src: '/images/petromonagas-grua-200-toneladas.png',
    title: 'Petromonagas Grúa 200T',
    description: 'Grúa Roja en Estructura Industrial',
    alt: 'Grúa roja de 200 toneladas trabajando en torre/estructura en Petromonagas'
  },
  {
    id: 25,
    src: '/images/gruas-equiser-petromonagas.jpg',
    title: 'Grúas Equiser Petromonagas',
    description: 'Operación Coordinada con Múltiples Grúas',
    alt: 'Grúas Equiser amarillas izando tanques blancos grandes en Petromonagas'
  },
  {
    id: 26,
    src: '/images/movilizacion-transformador-siemens.png',
    title: 'Transformador SIEMENS',
    description: 'Movilización Especializada de Transformador',
    alt: 'Transporte de transformador SIEMENS con grúa especializada'
  },
  {
    id: 27,
    src: '/images/movilizacion-gruas-izamiento-portuario.jpg',
    title: 'Izamiento Portuario',
    description: 'Operaciones Portuarias con Grúa Móvil',
    alt: 'Movilización de grúas para izamiento portuario, grúa amarilla en barco/puerto'
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
    <section id="galeria-carrusel" className="py-12 sm:py-16 md:py-20" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
      <div className="container mx-auto max-w-7xl px-3 sm:px-4 md:px-6">
        {/* Título de la Sección - RESPONSIVE OPTIMIZADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 px-4 sm:px-0"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#1E3A8A' }}>
            Galería de Proyectos
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
            Descubre nuestros proyectos más destacados con grúas de alta capacidad en diversos sectores industriales de Venezuela
          </p>
        </motion.div>

        {/* NUEVO CARRUSEL BASADO EN EL EJEMPLO - IMAGEN PRINCIPAL + THUMBNAILS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* CONTENEDOR PRINCIPAL DE LA IMAGEN */}
          <div className="relative mb-5 bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* IMAGEN PRINCIPAL GRANDE */}
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] bg-gray-100">
              <Image
                src={carouselItems[currentSlide]?.src}
                alt={carouselItems[currentSlide]?.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority
              />
              
              {/* Overlay sutil para el texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* INFORMACIÓN DEL SLIDE */}
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-6 left-6 right-6 text-white"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {carouselItems[currentSlide]?.title}
                </h3>
                <p className="text-lg opacity-90 max-w-2xl">
                  {carouselItems[currentSlide]?.description}
                </p>
              </motion.div>
            </div>

            {/* FLECHAS DE NAVEGACIÓN LATERALES - FUERA DE LA IMAGEN */}
            <button
              onClick={prevSlide}
              className="absolute left-[-25px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-yellow-400 text-equiser-blue hover:text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-20 flex items-center justify-center"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-[-25px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-yellow-400 text-equiser-blue hover:text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-20 flex items-center justify-center"
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Auto-play Indicator */}
            <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm z-10">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-red-400'}`} />
                {isAutoPlaying ? 'Auto' : 'Manual'}
              </div>
            </div>
          </div>

          {/* STRIP DE THUMBNAILS EN LA PARTE INFERIOR - DISEÑO DEL EJEMPLO */}
          <div className="flex gap-3 overflow-x-auto pb-4 px-4 md:px-0 scrollbar-hide">
            <div className="flex gap-3 min-w-full justify-center md:justify-start">
              {carouselItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 relative overflow-hidden rounded-lg transition-all duration-300 ${
                    index === currentSlide
                      ? 'ring-4 ring-equiser-blue scale-105 shadow-lg'
                      : 'hover:scale-105 hover:ring-2 hover:ring-yellow-400 opacity-70 hover:opacity-100'
                  }`}
                  whileHover={{ y: -2 }}
                  style={{
                    width: '100px', // Desktop
                    height: '75px', // Desktop
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                  
                  {/* Overlay para thumbnail activo */}
                  {index === currentSlide && (
                    <div className="absolute inset-0 bg-equiser-blue/20 border-2 border-equiser-blue rounded-lg" />
                  )}
                </motion.button>
              ))}
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
            
            {/* Mensaje de Llamada a la Acción Principal - RESPONSIVE OPTIMIZADO */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="mensaje-principal rounded-2xl sm:rounded-3xl mb-6 shadow-2xl mx-2 sm:mx-0"
              style={{ 
                background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
                padding: '1.5rem',
                boxShadow: '0 10px 30px rgba(30, 58, 138, 0.3)'
              }}
            >
              <h3 
                className="font-extrabold mb-3 uppercase tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                style={{ 
                  color: '#FFC107',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  letterSpacing: '1px'
                }}
              >
                GRÚAS EQUISER
              </h3>
              <p 
                className="font-semibold uppercase tracking-wider text-center leading-relaxed"
                style={{ 
                  color: 'white',
                  letterSpacing: '0.5px'
                }}
              >
                <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl block">
                  #1 Empresa Líder En Venezuela En Alquiler de
                </span>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl block">
                  Grúas Móviles Telescópicas, Grúas Sobre Oruga
                </span>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl block">
                  y Equipos de Transporte Pesado y Sobredimensionado
                </span>
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
            className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg lg:text-xl font-bold rounded-full transition-all duration-300 uppercase tracking-wide shadow-xl hover:shadow-2xl w-full sm:w-auto max-w-sm sm:max-w-none mx-auto"
            style={{ 
              background: 'linear-gradient(135deg, #FFC107 0%, #FFD700 100%)',
              color: '#1E3A8A',
              letterSpacing: '0.5px',
              boxShadow: '0 5px 15px rgba(255, 193, 7, 0.4)'
            }}
          >
            <Camera className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            <span className="hidden sm:inline">💬 Solicitar Cotización Ahora</span>
            <span className="sm:hidden">💬 Cotización</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Responsive Styles - OPTIMIZADO COMPLETO CON CORRECCIONES DE CARRUSEL */}
      <style jsx>{`
        /* CORRECCIONES GLOBALES DEL CARRUSEL */
        @media (max-width: 768px) {
          /* Mobile - Ocultar indicadores excesivos */
          .carousel-indicators button:nth-child(n+6) {
            display: none;
          }
          
          /* Navigation buttons más pequeños en mobile */
          .carousel-nav-btn {
            width: 32px !important;
            height: 32px !important;
            padding: 6px !important;
          }
          
          /* Ocultar auto-play indicator en mobile */
          .absolute.top-4.right-4 {
            display: none;
          }
        }

        @media (min-width: 769px) {
          /* Desktop - Navigation más elegante */
          .carousel-nav-btn:hover {
            background: rgba(255, 255, 255, 0.15) !important;
            transform: scale(1.1);
          }
          
          /* Limitar indicadores en desktop también */
          .carousel-indicators button:nth-child(n+10) {
            display: none;
          }
        }

        /* Mobile Phones - 320px to 480px */
        @media (max-width: 480px) {
          .container {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
          
          .carousel-container {
            height: 280px !important;
            margin: 0 0.5rem;
            border-radius: 1rem !important;
          }
          
          .slide-info {
            padding: 1rem !important;
          }
          
          .slide-info h3 {
            font-size: 1.25rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          .slide-info p {
            font-size: 0.875rem !important;
            line-height: 1.4 !important;
          }
          
          .mensaje-principal {
            padding: 1rem !important;
            margin-left: 0.5rem !important;
            margin-right: 0.5rem !important;
          }
          
          .mensaje-principal h3 {
            font-size: 1.5rem !important;
            margin-bottom: 0.75rem !important;
          }
          
          .mensaje-principal p span {
            font-size: 0.75rem !important;
            line-height: 1.3 !important;
          }
        }

        /* Large Mobile Phones - 481px to 768px */
        @media (min-width: 481px) and (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .carousel-container {
            height: 350px !important;
            margin: 0;
          }
          
          .slide-info {
            padding: 1.5rem !important;
          }
          
          .slide-info h3 {
            font-size: 1.5rem !important;
            margin-bottom: 0.75rem !important;
          }
          
          .slide-info p {
            font-size: 1rem !important;
            line-height: 1.5 !important;
          }
          
          .mensaje-principal {
            padding: 1.25rem !important;
          }
          
          .mensaje-principal h3 {
            font-size: 2rem !important;
          }
          
          .mensaje-principal p span {
            font-size: 0.875rem !important;
          }
        }

        /* Tablets - 769px to 1024px */
        @media (min-width: 769px) and (max-width: 1024px) {
          .carousel-container {
            height: 400px !important;
          }
          
          .slide-info h3 {
            font-size: 1.75rem !important;
          }
          
          .slide-info p {
            font-size: 1.125rem !important;
          }
          
          .mensaje-principal h3 {
            font-size: 2.5rem !important;
          }
          
          .mensaje-principal p span {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  )
}
