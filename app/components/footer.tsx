

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
    window.open('https://api.whatsapp.com/message/E6H4WASHIL6LB1?autoload=1&app_absent=0', '_blank')
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
                      src="/images/logo equiser con fondo.webp"
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
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Síguenos</h4>
                <div className="flex space-x-3">
                  <Link
                    href="https://www.instagram.com/gruasequiservzla/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                    title="Instagram @gruasequiservzla"
                  >
                    <Instagram className="w-6 h-6" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/profile.php?id=100092683147441"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                    title="Facebook Grúas Equiser"
                  >
                    <Facebook className="w-6 h-6" />
                  </Link>
                  <Link
                    href="https://x.com/gruasequiserve"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                    title="X @gruasequiserve"
                  >
                    <Twitter className="w-6 h-6" />
                  </Link>
                </div>
                <p className="text-gray-400 text-sm">
                  Mantente conectado con nuestras actualizaciones y proyectos
                </p>
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
                      onClick={() => window.open('https://api.whatsapp.com/message/E6H4WASHIL6LB1?autoload=1&app_absent=0', '_blank')}
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

        {/* REDISEÑO: Call to Action con colores corporativos */}
        <div className="border-t border-gray-700 py-12">
          <div 
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #FFC107 0%, #FFD700 100%)',
              padding: '80px 20px'
            }}
          >
            {/* Patrón decorativo de fondo */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(30, 58, 138, 0.3) 0%, transparent 50%)',
                pointerEvents: 'none'
              }}
            ></div>
            
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              {/* Título principal rediseñado */}
              <h3 
                className="text-4xl md:text-5xl font-extrabold text-equiser-blue mb-8"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
              >
                ¿Necesitas Una Cotización Inmediata?
              </h3>
              
              {/* Texto explicativo mejorado */}
              <p 
                className="text-xl md:text-2xl text-equiser-blue font-medium mb-10 leading-relaxed max-w-3xl mx-auto"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
              >
                Nuestro equipo está disponible <strong>24/7</strong> para brindarte la mejor solución 
                para tu proyecto de izamiento o transporte pesado.
              </p>

              {/* Botón principal rediseñado */}
              <motion.button
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="text-white font-bold rounded-full shadow-2xl transition-all duration-300 hover:shadow-3xl inline-flex items-center gap-4"
                style={{
                  background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
                  padding: '25px 50px',
                  fontSize: '1.4rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  boxShadow: '0 15px 40px rgba(30, 58, 138, 0.4)',
                  border: '3px solid transparent'
                }}
              >
                <span className="text-2xl">💬</span>
                Contactar Por WhatsApp Ahora
                <span className="text-xl">→</span>
              </motion.button>

              {/* Información adicional destacada */}
              <div 
                className="mt-10 p-6 rounded-2xl max-w-4xl mx-auto"
                style={{
                  background: 'rgba(30, 58, 138, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(30, 58, 138, 0.2)'
                }}
              >
                <p 
                  className="text-equiser-blue font-bold text-lg"
                  style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
                >
                  ⚡ Respuesta inmediata | 🎯 Cotizaciones personalizadas | 🚀 Servicio profesional garantizado
                </p>
              </div>

              {/* Estadísticas adicionales */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div 
                    className="text-3xl font-bold text-equiser-blue"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
                  >
                    30+
                  </div>
                  <div className="text-equiser-blue font-medium">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div 
                    className="text-3xl font-bold text-equiser-blue"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
                  >
                    1600T
                  </div>
                  <div className="text-equiser-blue font-medium">Capacidad Máxima</div>
                </div>
                <div className="text-center">
                  <div 
                    className="text-3xl font-bold text-equiser-blue"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
                  >
                    24/7
                  </div>
                  <div className="text-equiser-blue font-medium">Disponibilidad</div>
                </div>
              </div>
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
            
            <div className="flex items-center justify-center text-center">
              <div className="text-xs text-gray-400">
                <div 
                  className="font-bold text-lg px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #FFC107 0%, #FFD700 100%)',
                    color: '#1E3A8A',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    boxShadow: '0 4px 15px rgba(255, 193, 7, 0.4)',
                    border: '2px solid rgba(30, 58, 138, 0.2)'
                  }}
                >
                  <span className="text-base mr-2">⭐</span>
                  MARCAS PREMIUM
                </div>
                <div className="mt-2 text-gray-500">Liebherr • Grove • Manitowoc • Demag</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
