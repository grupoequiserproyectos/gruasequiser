
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Phone, Clock, Mail, MessageCircle, Send, Instagram, Twitter, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import Link from 'next/link'
import { ContactForm } from './contact-form'

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
      actionUrl: 'tel:+584143432882',
      bgGradient: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
      iconBg: '#FFC107',
      iconColor: '#1E3A8A',
      textColor: 'white',
      buttonBg: '#FFC107',
      buttonText: '#1E3A8A',
      borderColor: '#FFC107'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp 24/7',
      details: ['Atención inmediata', 'Cotizaciones rápidas'],
      action: 'Enviar WhatsApp',
      actionUrl: 'https://api.whatsapp.com/message/E6H4WASHIL6LB1?autoload=1&app_absent=0',
      bgGradient: 'linear-gradient(135deg, #FFC107 0%, #FFD700 100%)',
      iconBg: '#1E3A8A',
      iconColor: '#FFC107',
      textColor: '#1E3A8A',
      buttonBg: '#1E3A8A',
      buttonText: '#FFC107',
      borderColor: '#1E3A8A'
    },
    {
      icon: Mail,
      title: 'Correos Electrónicos',
      details: ['info@gruasequiser.net', 'direccionmercadeo@gruasequiser.net'],
      action: 'Enviar Email',
      actionUrl: 'mailto:info@gruasequiser.net',
      bgGradient: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
      iconBg: '#FFC107',
      iconColor: '#1E3A8A',
      textColor: 'white',
      buttonBg: '#FFC107',
      buttonText: '#1E3A8A',
      borderColor: '#FFC107'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      details: ['Autopista Puerto Cabello Morón', 'Sector La Paragüita, Morón, Carabobo'],
      action: 'Ver Mapa',
      actionUrl: 'https://maps.google.com/?q=Autopista+Puerto+Cabello+Moron+Sector+La+Paraguita+Moron+Carabobo',
      bgGradient: 'linear-gradient(135deg, #FFC107 0%, #FFD700 100%)',
      iconBg: '#1E3A8A',
      iconColor: '#FFC107',
      textColor: '#1E3A8A',
      buttonBg: '#1E3A8A',
      buttonText: '#FFC107',
      borderColor: '#1E3A8A'
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
        window.open('https://api.whatsapp.com/message/E6H4WASHIL6LB1?autoload=1&app_absent=0', '_blank')
        
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
            <span style={{ color: '#1E3A8A' }}>Contacto</span> Directo
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-bold" style={{ color: '#1E3A8A' }}>
            Nuestro equipo está disponible 24/7 para brindarte la mejor solución para tu proyecto de izamiento o transporte pesado.
          </p>
          <div className="w-32 h-1 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #FFC107, #FFD700)' }}></div>

          {/* SECCIÓN DE 4 TARJETAS DE CONTACTO CON COLORES CORPORATIVOS */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div 
                    className="rounded-3xl p-8 text-center shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl"
                    style={{
                      background: info.bgGradient,
                      border: `3px solid ${info.borderColor}`
                    }}
                  >
                    {/* Icono con colores corporativos */}
                    <div 
                      className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{
                        background: info.iconBg,
                        boxShadow: `0 8px 20px ${info.iconBg}40`
                      }}
                    >
                      <info.icon 
                        className="w-10 h-10" 
                        style={{ color: info.iconColor }}
                      />
                    </div>
                    
                    <h3 
                      className="text-xl font-bold mb-4"
                      style={{ color: info.textColor === 'white' ? '#FFC107' : '#1E3A8A' }}
                    >
                      {info.title}
                    </h3>
                    
                    <div className="space-y-2 mb-6">
                      {info.details.map((detail, idx) => (
                        <p 
                          key={idx} 
                          className="text-sm font-medium"
                          style={{ 
                            color: info.textColor === 'white' 
                              ? 'rgba(255, 255, 255, 0.9)' 
                              : '#1E3A8A' 
                          }}
                        >
                          {detail}
                        </p>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        if (info.actionUrl.startsWith('#')) {
                          document.getElementById('mapa')?.scrollIntoView({ behavior: 'smooth' })
                        } else {
                          window.open(info.actionUrl, '_blank')
                        }
                      }}
                      className="px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{
                        background: info.buttonBg,
                        color: info.buttonText,
                        boxShadow: `0 4px 15px ${info.buttonBg}30`
                      }}
                    >
                      {info.action}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SOLO BOTÓN DE LLAMADA A LA ACCIÓN (Sin conversación típica) */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={() => window.open('https://api.whatsapp.com/message/E6H4WASHIL6LB1?autoload=1&app_absent=0', '_blank')}
              className="px-16 py-6 text-white font-bold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl inline-flex items-center gap-4 text-xl group animate-pulse"
              style={{
                background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: '0 15px 40px rgba(30, 58, 138, 0.4)',
                border: '3px solid #FFC107'
              }}
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">💬</span>
              INICIAR CHAT DIRECTO AHORA
              <span className="text-2xl group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
            
            <div className="mt-8 p-6 rounded-2xl max-w-3xl mx-auto" style={{ background: 'rgba(30, 58, 138, 0.05)' }}>
              <p className="font-bold text-lg" style={{ color: '#1E3A8A' }}>
                ⚡ Respuesta inmediata garantizada | 🎯 Cotizaciones personalizadas | 🚀 Servicio profesional 24/7
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* FORMULARIO DE CONTACTO COMPLETO */}
        <ContactForm />

        {/* SECCIÓN DE REDES SOCIALES Y MAPA CON COLORES CORPORATIVOS */}
        <div className="mt-20 space-y-16">
          {/* Redes sociales integradas */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div 
              className="rounded-3xl p-8 shadow-2xl border-2"
              style={{ 
                background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(255, 193, 7, 0.05) 100%)',
                borderColor: '#1E3A8A'
              }}
            >
              <h4 className="text-2xl font-bold mb-6 flex items-center justify-center" style={{ color: '#1E3A8A' }}>
                <span className="text-3xl mr-3">📱</span>
                Síguenos en Redes Sociales
              </h4>
              <p className="text-center mb-8 font-medium" style={{ color: '#1E3A8A' }}>
                Mantente al día con nuestros proyectos más recientes y novedades del sector.
              </p>
              
              <div className="flex space-x-6 justify-center">
                <Link
                  href="https://www.instagram.com/gruasequiservzla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  title="Instagram @gruasequiservzla"
                >
                  <Instagram className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=100092683147441"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-16 h-16 text-white rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  style={{ background: '#1E3A8A' }}
                  title="Facebook Grúas Equiser"
                >
                  <Facebook className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
                </Link>
                <Link
                  href="https://x.com/gruasequiserve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-16 h-16 bg-black text-white rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  title="X @gruasequiserve"
                >
                  <Twitter className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* MAPA CON PRESENTACIÓN CORPORATIVA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            id="mapa"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-4" style={{ borderColor: '#1E3A8A' }}>
              {/* Título principal */}
              <div className="text-center py-8 px-6" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
                <h4 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3" style={{ color: '#1E3A8A' }}>
                  <span className="text-2xl">📍</span>
                  Nuestra Ubicación Exacta
                </h4>
                <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #FFC107, #FFD700)' }}></div>
              </div>

              {/* Información corporativa destacada */}
              <div className="px-8 py-6" style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)' }}>
                <div className="text-white text-center">
                  <h5 className="text-xl font-bold mb-3" style={{ color: '#FFC107' }}>
                    Equiser Venezuela | Grúas Telescópicas e Industriales
                  </h5>
                  <p className="text-lg mb-2">
                    <strong>Dirección:</strong> Autopista Puerto Cabello Morón, sector la Paragüita, 
                    diagonal a Planta Centro, Morón estado Carabobo
                  </p>
                  <p className="text-blue-100 mb-4">
                    <strong>Coordenadas exactas:</strong> 10.4840568, -68.1628642
                  </p>
                  <div className="flex items-center justify-center gap-3" style={{ color: '#FFC107' }}>
                    <span className="text-lg">⭐</span>
                    <span className="font-bold text-lg">4.7</span>
                    <span className="text-blue-100">| 7 reseñas</span>
                  </div>
                </div>
              </div>

              {/* Mapa integrado */}
              <div className="p-8">
                <div 
                  className="rounded-2xl overflow-hidden shadow-lg"
                  style={{ border: '4px solid #FFC107' }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.894567890123!2d-68.1654391!3d10.4840621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e806f2345678901%3A0x1234567890abcdef!2sEquiser+Venezuela+%7C+Gruas+Telesc%C3%B3picas+e+Industriales!5e0!3m2!1ses!2sve!4v1234567890123!5m2!1ses!2sve"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación EQUISER - Morón, Carabobo"
                  ></iframe>
                </div>

                {/* Botón Ver en Google Maps */}
                <div className="text-center mt-8">
                  <button
                    onClick={() => window.open('https://www.google.com/maps/place/Equiser+Venezuela+%7C+Gruas+Telescópicas+e+Industriales/@10.4840621,-68.1654391,17z/', '_blank')}
                    className="px-12 py-4 text-lg font-bold text-white rounded-full shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
                    style={{
                      background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      boxShadow: '0 8px 25px rgba(30, 58, 138, 0.3)',
                      border: '2px solid #FFC107'
                    }}
                  >
                    <span className="text-xl">🗺️</span>
                    Ver en Google Maps
                    <span className="text-lg">→</span>
                  </button>
                </div>

                {/* Información adicional */}
                <div className="mt-6 p-4 rounded-2xl text-center" style={{ background: 'rgba(30, 58, 138, 0.05)' }}>
                  <p className="font-semibold" style={{ color: '#1E3A8A' }}>
                    ⚡ Fácil acceso vehicular | 🎯 Ubicación estratégica | 🚀 Disponibilidad 24/7
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
