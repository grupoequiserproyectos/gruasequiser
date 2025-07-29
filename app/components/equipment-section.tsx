
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Wrench, Truck, Settings } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function EquipmentSection() {
  const [activeCategory, setActiveCategory] = useState('mobile')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const categories = [
    { id: 'mobile', name: 'Grúas Móviles', icon: Wrench },
    { id: 'crawler', name: 'Grúas Sobre Oruga', icon: Settings },
    { id: 'transport', name: 'Equipos de Transporte', icon: Truck }
  ]

  const equipment = {
    mobile: [
      {
        name: 'Liebherr LTM 1500-8.1',
        capacity: '500 TON',
        brand: 'Liebherr',
        description: 'Grúa móvil telescópica de alta capacidad para proyectos industriales complejos',
        image: '/images/grua 500 ton.png',
        features: ['Boom telescópico 84m', 'Contraflecha 91m', '8 ejes', 'Capacidad 500 ton']
      },
      {
        name: 'Grove GMK6400',
        capacity: '400 TON',
        brand: 'Grove',
        description: 'Grúa móvil versátil para aplicaciones industriales y de construcción',
        image: '/images/grua de 600 ton y grua de 130 ton.png',
        features: ['Boom telescópico 78m', 'Contraflecha 84m', '6 ejes', 'Capacidad 400 ton']
      },
      {
        name: 'Manitowoc MLC300',
        capacity: '300 TON',
        brand: 'Manitowoc',
        description: 'Grúa móvil robusta para trabajos de alta precisión',
        image: '/images/dos gruas de 600 ton.png',
        features: ['Boom variable', 'Sistema VPC', '5 ejes', 'Capacidad 300 ton']
      }
    ],
    crawler: [
      {
        name: 'Liebherr LR 1600/2',
        capacity: '600 TON',
        brand: 'Liebherr',
        description: 'Grúa sobre oruga de alta capacidad para proyectos especializados',
        image: '/images/grua de 600 ton.png',
        features: ['Boom variable 154m', 'Contraflecha 126m', 'Sistema Liebherr', 'Capacidad 600 ton']
      },
      {
        name: 'Liebherr LR 1750/2',
        capacity: '750 TON',
        brand: 'Liebherr',
        description: 'Grúa sobre oruga premium para aplicaciones industriales extremas',
        image: '/images/grua de 800 ton.png',
        features: ['Boom variable 168m', 'Contraflecha 140m', 'Tecnología alemana', 'Capacidad 750 ton']
      },
      {
        name: 'Manitowoc 18000',
        capacity: '1600 TON',
        brand: 'Manitowoc',
        description: 'La grúa de mayor capacidad en nuestro inventario para proyectos únicos',
        image: '/images/trabajo grua 800 ton.png',
        features: ['Boom variable 183m', 'Contraflecha 154m', 'Capacidad máxima', '1600 ton']
      }
    ],
    transport: [
      {
        name: 'Super Lowboy Modular',
        capacity: '600 TON',
        brand: 'Specialized',
        description: 'Transporte especializado para cargas extrapesadas y dimensiones excepcionales',
        image: '/images/trabajo de gantry 600 ton.png',
        features: ['Configuración modular', 'Múltiples ejes', 'Carga hasta 600 ton', 'Rutas especializadas']
      },
      {
        name: 'Gantry System 600T',
        capacity: '600 TON',
        brand: 'EQUISER',
        description: 'Sistema de pórtico especializado para maniobras de alta precisión',
        image: '/images/gantry 600 ton generador.png',
        features: ['Sistema de pórtico', 'Control preciso', 'Capacidad 600 ton', 'Aplicaciones industriales']
      }
    ]
  }

  return (
    <section id="equipos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Equipos de <span className="text-blue-600">Alta Capacidad</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La flota más moderna y completa de Venezuela con grúas y equipos de transporte 
            de las mejores marcas alemanas del mundo.
          </p>
        </motion.div>

        {/* Categorías */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-2xl p-2 shadow-lg border">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Equipos */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {equipment[activeCategory as keyof typeof equipment]?.map((item, index) => (
            <div
              key={item.name}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                    {item.capacity}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                    {item.brand}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                
                <div className="space-y-2 mb-6">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => window.open(`https://wa.me/584143432882?text=Me interesa información sobre ${item.name} - ${item.capacity}`, '_blank')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Consultar Disponibilidad
                </Button>
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
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">¿No encuentras el equipo que necesitas?</h3>
            <p className="text-green-100 mb-6">
              Contáctanos para una consulta personalizada sobre equipos específicos y capacidades especiales
            </p>
            <Button
              onClick={() => window.open('https://wa.me/584143432882?text=Necesito información sobre equipos específicos de EQUISER', '_blank')}
              className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold"
            >
              Consulta Personalizada
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
