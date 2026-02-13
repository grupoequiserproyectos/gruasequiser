'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Wrench, Truck, Zap, Send, User, Phone, FileText } from 'lucide-react'

export function WhatsappWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [showPulse, setShowPulse] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    mensaje: ''
  })
  const [sending, setSending] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isOpen) {
        setShowPulse(true)
        setTimeout(() => setShowPulse(false), 4000)
      }
    }, 25000)
    return () => clearInterval(interval)
  }, [isOpen])

  const quickOptions = [
    {
      icon: Wrench,
      title: 'Solicitar Grúa Móvil o Oruga 25-1600 ton',
      description: 'Equipos certificados disponibles',
      color: 'bg-gradient-to-r from-green-500 to-green-600',
      service: 'Grúa Móvil/Oruga 25-1600 ton'
    },
    {
      icon: Truck,
      title: 'Cotiza Transporte Especial',
      description: 'Transporte pesado y sobredimensionado',
      color: 'bg-gradient-to-r from-purple-500 to-purple-600',
      service: 'Transporte Especial'
    },
    {
      icon: Zap,
      title: 'Asesoría Personalizada',
      description: 'Consulta técnica sin costo',
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      service: 'Asesoría Técnica'
    }
  ]

  const handleOptionClick = (service: string) => {
    setSelectedService(service)
    setFormData(prev => ({ ...prev, mensaje: `Hola, me interesa: ${service}` }))
    setShowForm(true)
  }

  const handleSubmitAndWhatsApp = async () => {
    if (!formData.nombre.trim()) {
      alert('Por favor ingrese su nombre')
      return
    }

    setSending(true)
    
    // Enviar copia por correo
    try {
      await fetch('/api/whatsapp-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: formData.nombre,
          telefono: formData.telefono,
          mensaje: formData.mensaje,
          servicio: selectedService,
          fecha: new Date().toISOString()
        })
      })
    } catch (error) {
      console.log('Error enviando copia por correo:', error)
    }

    // Abrir WhatsApp con mensaje prellenado
    const mensajeWhatsApp = encodeURIComponent(
      `Hola, soy ${formData.nombre}${formData.telefono ? ` (Tel: ${formData.telefono})` : ''}.\n\n${formData.mensaje}`
    )
    const whatsappUrl = `https://wa.me/message/IOBBJVBBVWNOI1?text=${mensajeWhatsApp}`
    window.open(whatsappUrl, '_blank')
    
    // Reset
    setSending(false)
    setShowForm(false)
    setFormData({ nombre: '', telefono: '', mensaje: '' })
    setSelectedService('')
    setIsOpen(false)
  }

  const handleDirectWhatsApp = () => {
    setSelectedService('Contacto Directo')
    setFormData(prev => ({ ...prev, mensaje: 'Hola, necesito información sobre sus servicios de grúas industriales.' }))
    setShowForm(true)
  }

  return (
    <div className="fixed bottom-20 right-4 z-[9997] max-w-[calc(100vw-2rem)] sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden w-72 sm:w-80 max-h-[70vh] sm:max-h-[80vh]"
          >
            {/* Header más compacto */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-3 text-equiser-blue">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-equiser-blue/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-equiser-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">¡COTIZACIÓN GRATUITA!</h3>
                    <p className="text-equiser-blue/80 text-xs">Respuesta en 2 minutos</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 bg-equiser-blue/20 rounded-full flex items-center justify-center hover:bg-equiser-blue/30 transition-colors"
                >
                  <X className="w-4 h-4 text-equiser-blue" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-3 space-y-3 overflow-y-auto max-h-[50vh] sm:max-h-[60vh]">
              {!showForm ? (
                <>
                  {/* Opciones de servicio */}
                  <div className="space-y-2">
                    {quickOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionClick(option.service)}
                        className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all group text-left border border-gray-100 hover:border-gray-200 hover:shadow-sm"
                      >
                        <div className={`w-10 h-10 ${option.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm`}>
                          <option.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-gray-900 text-sm truncate">{option.title}</div>
                          <div className="text-xs text-gray-600 truncate">{option.description}</div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Botón directo */}
                  <div className="border-t pt-3">
                    <button
                      onClick={handleDirectWhatsApp}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>💬 Chatear por WhatsApp</span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Mini Formulario */}
                  <div className="space-y-3">
                    <div className="bg-equiser-blue/10 p-2 rounded-lg">
                      <p className="text-xs text-equiser-blue font-medium">📝 {selectedService}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Tu nombre *"
                          value={formData.nombre}
                          onChange={(e) => setFormData(prev => ({ ...prev, nombre: e.target.value }))}
                          className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-equiser-yellow focus:ring-1 focus:ring-equiser-yellow outline-none"
                        />
                      </div>
                      
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="tel"
                          placeholder="Teléfono (opcional)"
                          value={formData.telefono}
                          onChange={(e) => setFormData(prev => ({ ...prev, telefono: e.target.value }))}
                          className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-equiser-yellow focus:ring-1 focus:ring-equiser-yellow outline-none"
                        />
                      </div>
                      
                      <div className="relative">
                        <FileText className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <textarea
                          placeholder="Mensaje"
                          value={formData.mensaje}
                          onChange={(e) => setFormData(prev => ({ ...prev, mensaje: e.target.value }))}
                          rows={2}
                          className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-equiser-yellow focus:ring-1 focus:ring-equiser-yellow outline-none resize-none"
                        />
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button
                        onClick={() => { setShowForm(false); setSelectedService(''); }}
                        className="flex-1 py-2.5 px-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50"
                      >
                        ← Volver
                      </button>
                      <button
                        onClick={handleSubmitAndWhatsApp}
                        disabled={sending}
                        className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-2.5 px-3 rounded-lg text-sm flex items-center justify-center space-x-1 disabled:opacity-50"
                      >
                        <Send className="w-4 h-4" />
                        <span>{sending ? 'Enviando...' : 'Enviar'}</span>
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* Footer */}
              <div className="text-center">
                <p className="text-xs text-gray-500">
                  ⚡ <span className="font-semibold text-equiser-yellow">Respuesta garantizada en 2 minutos</span>
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  🏗️ Equipos certificados • 24/7 disponible
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón principal mejorado */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-2xl flex items-center justify-center hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8 text-equiser-blue" />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-equiser-blue" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulso animado mejorado */}
        <AnimatePresence>
          {showPulse && !isOpen && (
            <motion.div
              initial={{ scale: 1, opacity: 0.8 }}
              animate={{ scale: 2.2, opacity: 0 }}
              exit={{ scale: 1, opacity: 0 }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute inset-0 bg-yellow-400 rounded-full"
            />
          )}
        </AnimatePresence>

        {/* Indicador de disponibilidad */}
        <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </motion.button>

      {/* Texto flotante mejorado */}
      <AnimatePresence>
        {showPulse && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute right-16 sm:right-20 top-1 sm:top-2 bg-white px-3 py-2 rounded-lg shadow-lg border max-w-[200px]"
          >
            <div className="text-sm font-bold text-gray-900">🚀 ¡Cotización GRATIS!</div>
            <div className="text-xs text-gray-600">Equipos hasta 1600 ton</div>
            <div className="absolute top-3 -right-1 w-2 h-2 bg-white transform rotate-45 border-r border-b border-gray-200"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
