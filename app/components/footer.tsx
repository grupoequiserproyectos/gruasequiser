
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react'

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
        {/* Sección principal del footer */}
        <div className="pt-16 pb-12">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Información de la empresa */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 mr-4">
                  <Image
                    src="/images/logo equiser actulizado sin fondo.png"
                    alt="GRÚAS EQUISER Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">GRÚAS EQUISER C.A.</h3>
                  <p className="text-equiser-yellow font-medium">Líder En Alquiler De Grúas Venezuela</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-lg">
                Más de 30 años como empresa líder en Venezuela en alquiler de grúas móviles, 
                sobre oruga y transporte pesado. Grúas hasta 1600 toneladas 
                con equipos de las mejores marcas alemanas y americanas.
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 text-equiser-yellow mr-3 flex-shrink-0" />
                  <span className="text-sm">
                    Autopista Puerto Cabello Morón, sector la Paragüita, 
                    diagonal a Planta Centro, Morón estado Carabobo
                  </span>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 text-equiser-yellow mr-3" />
                  <div className="text-sm">
                    <div>+58 414-343-2882 (Principal)</div>
                    <div>+58 412-159-7792 (Alternativo)</div>
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
                      className="text-gray-400 hover:text-equiser-yellow transition-colors duration-200 text-sm"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navegación rápida */}
            <div>
              <h4 className="text-xl font-bold mb-6">Navegación</h4>
              <ul className="space-y-3">
                {[
                  { href: '#inicio', label: 'Inicio' },
                  { href: '#nosotros', label: 'Nosotros' },
                  { href: '#equipos', label: 'Equipos' },
                  { href: '#proyectos', label: 'Proyectos' }
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

        {/* Call to Action final */}
        <div className="border-t border-gray-700 py-8">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-equiser-blue">¿Necesitas Una Cotización Inmediata?</h3>
            <p className="text-equiser-blue/80 mb-6 max-w-2xl mx-auto">
              Nuestro equipo está disponible 24/7 para brindarte la mejor solución 
              para tu proyecto de izamiento o transporte pesado.
            </p>
            <motion.button
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-equiser-blue font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              Contactar Por WhatsApp Ahora
            </motion.button>
          </div>
        </div>

        {/* Copyright y certificaciones */}
        <div className="border-t border-gray-700 pt-8 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 GRÚAS EQUISER C.A. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                RIF: J-12345678-9 | Más de 30 años de experiencia en Venezuela
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-center">
              <div className="text-xs text-gray-400">
                <div className="font-semibold text-equiser-yellow">CERTIFICACIONES</div>
                <div>ISO 9001 • ISO 14001</div>
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
