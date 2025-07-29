

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
              {/* CORRECCIÓN: Sección con fondo amarillo exacto */}
              <section 
                className="why-choose-us rounded-2xl text-center"
                style={{
                  background: '#FFD700',
                  padding: '40px 30px',
                  color: '#1E3A8A'
                }}
              >
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
                  <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', fontWeight: '700', color: '#1E3A8A' }}>
                    ¿Por Qué Elegir Grúas EQUISER?
                  </h2>
                  <p style={{ fontSize: '1.3rem', lineHeight: '1.6', color: '#1E3A8A', maxWidth: '800px', margin: '0 auto' }}>
                    Somos la única empresa en Venezuela que combina la más moderna tecnología 
                    de grúas con operadores certificados internacionalmente y un enfoque 
                    integral en seguridad y calidad.
                  </p>
                </div>
              </section>

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

        {/* CORRECCIÓN: Sección de compromiso con fondo amarillo y texto azul */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="rounded-3xl p-8 md:p-12 text-center"
          style={{
            background: '#FFD700',
            padding: '60px 0',
            borderRadius: '15px'
          }}
        >
          <h3 className="text-3xl font-bold mb-6 text-equiser-blue">Nuestro Compromiso Con La Excelencia</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-equiser-blue mb-2">500+</div>
              <div className="text-equiser-blue font-semibold">Proyectos Ejecutados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-equiser-blue mb-2">100%</div>
              <div className="text-equiser-blue font-semibold">Éxito en Operaciones</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-equiser-blue mb-2">24/7</div>
              <div className="text-equiser-blue font-semibold">Disponibilidad</div>
            </div>
          </div>
          <p className="mt-8 text-equiser-blue font-medium max-w-3xl mx-auto">
            Cada proyecto que ejecutamos refleja nuestro compromiso inquebrantable con la seguridad, 
            la calidad y la satisfacción del cliente. Somos el socio estratégico que las empresas 
            venezolanas necesitan para sus operaciones más complejas.
          </p>
        </motion.div>

        {/* CORRECCIÓN: Certificaciones solo 3 en grid de 3 columnas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Certificaciones</h3>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
            Nuestro personal cuenta con las certificaciones más exigentes de la industria, garantizando operaciones seguras y de alta calidad en cada proyecto.
          </p>
          <div 
            className="gap-8"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px'
            }}
          >
            {/* Solo 3 certificaciones */}
            <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-equiser-blue" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">ISO 9001</h4>
              <p className="text-gray-600 text-sm">Sistema de Gestión de Calidad</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">ISO 14001</h4>
              <p className="text-gray-600 text-sm">Sistema de Gestión Ambiental</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-equiser-yellow" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Certificación del INTT</h4>
              <p className="text-gray-600 text-sm">Instituto Nacional de Transporte Terrestre</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
