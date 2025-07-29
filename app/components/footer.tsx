

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, ArrowUp, BookOpen, Instagram, Twitter, Facebook } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/584143432882?text=¡Hola! Me interesa conocer más sobre los servicios de EQUISER.', '_blank')
  }

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Botón scroll to top */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 equiser-blue equiser-blue-hover rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sección principal del footer con 4 columnas */}
        <div className="pt-16 pb-12">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Información de la empresa con logo actualizado */}
            <div className="lg:col-span-1">
              <div className="flex flex-col items-start mb-6">
                <a href="/" style={{ textDecoration: 'none' }} className="relative block mb-4">
                  <div 
                    className="relative" 
                    style={{ width: '250px', height: '80px', maxWidth: '250px' }}
                  >
                    <Image
                      src="/images/logo equiser con fondo.png"
                      alt="GRÚAS EQUISER C.A. - Logo"
                      fill
                      className="object-contain hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                </a>
                <div>
                  <h3 className="text-xl font-bold">GRÚAS EQUISER C.A.</h3>
                  <p className="text-equiser-yellow font-medium">Líder En Alquiler De Grúas Venezuela</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                Más de 30 años como empresa líder en Venezuela en alquiler de grúas móviles, 
                sobre oruga y transporte pesado. Grúas hasta 1600 toneladas.
              </p>

              {/* Redes sociales integradas */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold">Síguenos</h4>
                <div className="flex space-x-4">
                  <Link
                    href="https://www.instagram.com/gruasequiservzla"
                    target="_blank"
                    className="text-gray-400 hover:text-equiser-yellow transition-colors duration-200"
                  >
                    <Instagram className="w-6 h-6" />
                  </Link>
                  <Link
                    href="https://x.com/gruasequiserve"
                    target="_blank"
                    className="text-gray-400 hover:text-equiser-yellow transition-colors duration-200"
                  >
                    <Twitter className="w-6 h-6" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/people/Gruasequiservzla/100092683147441"
                    target="_blank"
                    className="text-gray-400 hover:text-equiser-yellow transition-colors duration-200"
                  >
                    <Facebook className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Información de contacto */}
            <div>
              <h4 className="text-xl font-bold mb-6">Contacto</h4>
              <div className="space-y-4">
                <div className="flex items-start text-gray-300">
                  <MapPin className="w-5 h-5 text-equiser-yellow mr-3 flex-shrink-0 mt-1" />
                  <span className="text-sm">
                    Autopista Puerto Cabello Morón, sector la Paragüita, 
                    diagonal a Planta Centro, Morón estado Carabobo
                  </span>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 text-equiser-yellow mr-3" />
                  <div className="text-sm">
                    <div>+58 414-343-2882</div>
                    <div>+58 412-159-7792</div>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 text-equiser-yellow mr-3" />
                  <div className="text-sm">
                    <div>info@gruasequiser.net</div>
                    <div>direccionmercadeo@gruasequiser.net</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-300">
                  <Clock className="w-5 h-5 text-equiser-yellow mr-3" />
                  <span className="text-sm font-medium">Disponibilidad 24/7</span>
                </div>
              </div>
            </div>

            {/* Servicios */}
            <div>
              <h4 className="text-xl font-bold mb-6">Nuestros Servicios</h4>
              <ul className="space-y-3">
                {[
                  'Alquiler De Grúas Móviles Y Sobre Oruga',
                  'Transporte Pesado Y Extrapesado',
                  'Manejo De Carga Excepcional',
                  'Ingeniería 3D',
                  'Consultoría Especializada',
                  'Operadores Certificados'
                ].map((service) => (
                  <li key={service}>
                    <button
                      onClick={() => window.open(`https://wa.me/584143432882?text=Me interesa información sobre: ${service}`, '_blank')}
                      className="text-gray-400 hover:text-equiser-yellow transition-colors duration-200 text-sm text-left"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navegación rápida y blog */}
            <div>
              <h4 className="text-xl font-bold mb-6">Navegación</h4>
              <ul className="space-y-3">
                {[
                  { href: '#inicio', label: 'Inicio' },
                  { href: '#nosotros', label: 'Nosotros' },
                  { href: '#equipos', label: 'Equipos' },
                  { href: '#proyectos', label: 'Proyectos' },
                  { href: '#contacto', label: 'Contacto' }
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-equiser-yellow transition-colors duration-200 text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-4">
                  <Link
                    href="/blog"
                    className="flex items-center text-equiser-yellow hover:text-yellow-300 transition-colors duration-200 text-sm font-semibold"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    📝 Blog de Grúas
                  </Link>
                </li>
              </ul>

              <div className="mt-8">
                <h5 className="text-lg font-semibold mb-4">Sectores Atendidos</h5>
                <div className="text-sm text-gray-400 space-y-1">
                  <div>• Energético</div>
                  <div>• Petrolero</div>
                  <div>• Petroquímico</div>
                  <div>• Industrial</div>
                  <div>• Portuario</div>
                  <div>• Siderúrgico</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action final con fondo legible */}
        <div className="border-t border-gray-700 py-8">
          <div 
            className="relative rounded-2xl p-8 text-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)',
              backgroundImage: 'url("/images/imagen grua.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}
          >
            {/* Overlay fuerte para legibilidad */}
            <div className="absolute inset-0" style={{ background: 'rgba(255, 215, 0, 0.95)' }}></div>
            
            <div className="relative z-10">
              <h3 
                className="text-2xl font-bold mb-4 text-equiser-blue"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
              >
                ¿Necesitas Una Cotización Inmediata?
              </h3>
              <p 
                className="text-equiser-blue/80 mb-6 max-w-2xl mx-auto"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}
              >
                Nuestro equipo está disponible 24/7 para brindarte la mejor solución 
                para tu proyecto de izamiento o transporte pesado.
              </p>
              <motion.button
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-equiser-blue text-white font-bold px-8 py-4 rounded-full hover:bg-blue-800 transition-all duration-200 shadow-lg"
                style={{ textShadow: 'none' }}
              >
                Contactar Por WhatsApp Ahora
              </motion.button>
            </div>
          </div>
        </div>

        {/* Copyright y certificaciones */}
        <div className="border-t border-gray-700 pt-8 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 Grúas Equiser C.A. - Todos los derechos reservados. | Líder en alquiler de grúas en Venezuela
              </p>
              <p className="text-gray-500 text-xs mt-1">
                RIF: J-30007343-2 | Más de 30 años de experiencia en Venezuela
              </p>
              <div className="text-xs text-gray-400 mt-2">
                📧 Instagram | 🐦 Twitter | 📘 Facebook
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-center">
              <div className="text-xs text-gray-400">
                <div className="font-semibold text-equiser-yellow">CERTIFICACIONES</div>
                <div>ISO 9001 • ISO 14001 • INTT</div>
              </div>
              <div className="text-xs text-gray-400">
                <div className="font-semibold text-equiser-blue">MARCAS</div>
                <div>Liebherr • Grove • Manitowoc • Demag</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
