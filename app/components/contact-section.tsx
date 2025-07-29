

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Phone, Clock, Mail, MessageCircle, Send, Instagram, Twitter, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import Link from 'next/link'

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfonos',
      details: ['+58 414-343-2882 (Principal)', '+58 412-159-7792 (Alternativo)'],
      action: 'Llamar Ahora',
      actionUrl: 'tel:+584143432882'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp 24/7',
      details: ['Atención inmediata', 'Cotizaciones rápidas'],
      action: 'Enviar WhatsApp',
      actionUrl: 'https://wa.me/584143432882'
    },
    {
      icon: Mail,
      title: 'Correos Electrónicos',
      details: ['info@gruasequiser.net', 'direccionmercadeo@gruasequiser.net'],
      action: 'Enviar Email',
      actionUrl: 'mailto:info@gruasequiser.net'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      details: ['Autopista Puerto Cabello Morón', 'Sector La Paragüita, Morón, Carabobo'],
      action: 'Ver Mapa',
      actionUrl: '#mapa'
    }
  ]

  const services = [
    'Izamiento Alta Capacidad',
    'Transporte Pesado y Extrapesado',
    'Manejo Carga Excepcional',
    'Ingeniería 3D',
    'Consultoría Especializada',
    'Otro'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado exitosamente!",
          description: "Nos pondremos en contacto contigo muy pronto.",
        })
        
        // Redireccionar a WhatsApp con el mensaje
        const whatsappMessage = `¡Hola! Soy ${formData.name} de ${formData.company || 'mi empresa'}. Me interesa el servicio de ${formData.service}. ${formData.message}. Mi teléfono: ${formData.phone}, email: ${formData.email}`
        window.open(`https://wa.me/584143432882?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        })
      } else {
        throw new Error('Error al enviar el mensaje')
      }
    } catch (error) {
      toast({
        title: "Error al enviar mensaje",
        description: "Por favor intenta nuevamente o contáctanos directamente por WhatsApp.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-equiser-blue">Contacto</span> Directo
          </h2>
          {/* CORRECCIÓN: Cambiar texto a azul para mejor visibilidad */}
          <p className="text-xl max-w-3xl mx-auto font-semibold text-equiser-blue">
            Nuestro equipo está disponible 24/7 para brindarte la mejor solución para tu proyecto de izamiento o transporte pesado.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="w-8 h-8 text-green-600 mr-3" />
                Atención 24/7 Disponible
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Nuestro equipo está disponible las 24 horas del día, los 7 días de la semana 
                para emergencias y consultas urgentes. Respuesta inmediata garantizada.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h4>
                  
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-gray-600">{detail}</p>
                    ))}
                  </div>

                  <Button
                    onClick={() => {
                      if (info.actionUrl.startsWith('#')) {
                        document.getElementById('mapa')?.scrollIntoView({ behavior: 'smooth' })
                      } else {
                        window.open(info.actionUrl, '_blank')
                      }
                    }}
                    variant="outline"
                    size="sm"
                    className="w-full text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    {info.action}
                  </Button>
                </div>
              ))}
            </div>

            {/* Redes sociales integradas */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                📱 Síguenos en Redes Sociales
              </h4>
              <p className="text-gray-600 mb-6 text-sm">
                Mantente al día con nuestros proyectos más recientes y novedades del sector.
              </p>
              
              <div className="flex space-x-4">
                <Link
                  href="https://www.instagram.com/gruasequiservzla"
                  target="_blank"
                  className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link
                  href="https://x.com/gruasequiserve"
                  target="_blank"
                  className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-xl hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.facebook.com/people/Gruasequiservzla/100092683147441"
                  target="_blank"
                  className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-xl hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <Facebook className="w-6 h-6" />
                </Link>
              </div>
              
              <div className="mt-4 text-xs text-gray-500 space-y-1">
                <div>📷 Instagram: Fotos y videos de proyectos</div>
                <div>🐦 Twitter: Noticias y actualizaciones</div>
                <div>📘 Facebook: Comunidad y testimonios</div>
              </div>
            </div>

            {/* Mapa con coordenadas exactas */}
            <div id="mapa" className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                Nuestra Ubicación Exacta
              </h4>
              
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.894567890123!2d-68.1654391!3d10.4840621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e806f2345678901%3A0x1234567890abcdef!2sEquiser+Venezuela+%7C+Gruas+Telesc%C3%B3picas+e+Industriales!5e0!3m2!1ses!2sve!4v1234567890123!5m2!1ses!2sve"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '15px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación EQUISER - Morón, Carabobo"
                ></iframe>
              </div>
              
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-600">
                  <strong>Dirección:</strong> Autopista Puerto Cabello Morón, sector la Paragüita, 
                  diagonal a Planta Centro, Morón estado Carabobo
                </p>
                <p className="text-xs text-gray-500">
                  <strong>Coordenadas exactas:</strong> 10.4840568, -68.1628642
                </p>
                <Button
                  onClick={() => window.open('https://www.google.com/maps/place/Equiser+Venezuela+%7C+Gruas+Telescópicas+e+Industriales/@10.4840621,-68.1654391,17z/', '_blank')}
                  size="sm"
                  className="equiser-blue equiser-blue-hover text-white mt-3"
                >
                  Ver en Google Maps
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicitar Cotización</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="+58 414-123-4567"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Servicio de Interés *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje / Detalles del Proyecto *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Describe los detalles de tu proyecto: capacidad necesaria, ubicación, fechas, etc."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Solicitud por WhatsApp
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <p className="text-sm text-blue-800 text-center">
                  <strong>Nota:</strong> Al enviar este formulario, serás redirigido a WhatsApp 
                  para confirmar tu solicitud y recibir atención personalizada inmediata.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
