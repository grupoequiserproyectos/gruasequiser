

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, Award, Shield, Clock, MapPin, Users, Wrench, Target } from 'lucide-react'
import Image from 'next/image'

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: CheckCircle,
      title: 'Grúas hasta 1600 toneladas',
      description: 'La mayor capacidad disponible en Venezuela'
    },
    {
      icon: Award,
      title: 'Marcas Premium Alemanas y Americanas',
      description: 'Liebherr, Grove, Manitowoc, Demag'
    },
    {
      icon: Shield,
      title: 'Certificaciones ISO 9001 e ISO 14001',
      description: 'Calidad y gestión ambiental garantizadas'
    },
    {
      icon: Clock,
      title: 'Disponibilidad 24/7',
      description: 'Servicio de emergencia y respuesta inmediata'
    },
    {
      icon: Users,
      title: 'Operadores Certificados',
      description: 'Personal altamente capacitado y especializado'
    },
    {
      icon: Target,
      title: '6 Sectores Industriales',
      description: 'Energético, petrolero, petroquímico, industrial, portuario, siderúrgico'
    }
  ]

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            La Flota de Alquiler <span className="text-equiser-blue">Más Moderna y Completa</span> de Venezuela
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Con más de 30 años de experiencia, GRÚAS EQUISER C.A. se ha consolidado como la empresa 
            líder en Venezuela en alquiler de grúas móviles, sobre oruga y servicios de transporte pesado.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="bg-equiser-blue text-white p-6 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">¿Por Qué Elegir EQUISER?</h3>
                <p className="text-blue-100 leading-relaxed">
                  Somos la única empresa en Venezuela que combina la más moderna tecnología 
                  de grúas con operadores certificados internacionalmente y un enfoque 
                  integral en seguridad y calidad.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-equiser-yellow rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-equiser-blue" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-equiser-yellow to-yellow-300 p-6 rounded-2xl text-equiser-blue">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 mr-3" />
                  <h4 className="text-xl font-bold">Ubicación Estratégica</h4>
                </div>
                <p className="font-medium">
                  Autopista Puerto Cabello Morón, sector la Paragüita, diagonal a Planta Centro, 
                  Morón estado Carabobo - Posición ideal para atender todo el territorio nacional.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/grua de 800 ton.png"
                    alt="Grúa de 800 toneladas EQUISER"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/trabajo de grua 450 ton.png"
                    alt="Trabajo con grúa de 450 toneladas"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <div className="space-y-4 pt-8">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/dos gruas de 600 ton.png"
                    alt="Operación con dos grúas de 600 toneladas"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/ingenieria 3d.png"
                    alt="Ingeniería 3D EQUISER"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Badge flotante */}
            <div className="absolute -top-4 -left-4 bg-equiser-blue text-white p-4 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold">30+</div>
              <div className="text-sm">Años de Experiencia</div>
            </div>
          </motion.div>
        </div>

        {/* Sección de experiencia y compromiso */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-equiser-blue to-blue-800 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-6">Nuestro Compromiso Con La Excelencia</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-equiser-yellow mb-2">500+</div>
              <div className="text-blue-200">Proyectos Ejecutados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-equiser-yellow mb-2">100%</div>
              <div className="text-blue-200">Éxito en Operaciones</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-equiser-yellow mb-2">24/7</div>
              <div className="text-blue-200">Disponibilidad</div>
            </div>
          </div>
          <p className="mt-8 text-blue-100 max-w-3xl mx-auto">
            Cada proyecto que ejecutamos refleja nuestro compromiso inquebrantable con la seguridad, 
            la calidad y la satisfacción del cliente. Somos el socio estratégico que las empresas 
            venezolanas necesitan para sus operaciones más complejas.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
