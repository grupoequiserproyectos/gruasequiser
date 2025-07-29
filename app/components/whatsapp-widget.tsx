
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Phone, Clock, Wrench, Truck } from 'lucide-react'

export function WhatsappWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [showPulse, setShowPulse] = useState(true)

  useEffect(() => {
    // Mostrar el pulso cada 30 segundos si el widget no está abierto
    const interval = setInterval(() => {
      if (!isOpen) {
        setShowPulse(true)
        setTimeout(() => setShowPulse(false), 3000)
      }
    }, 30000)

    return () => clearInterval(interval)
  }, [isOpen])

  const quickOptions = [
    {
      icon: Wrench,
      title: 'Cotización Grúas',
      message: '¡Hola! Necesito cotización para alquiler de grúas. Por favor envíenme información sobre capacidades y disponibilidad.',
      color: 'bg-blue-500'
    },
    {
      icon: Truck,
      title: 'Transporte Pesado',
      message: '¡Hola! Me interesa información sobre servicios de transporte pesado y extrapesado de EQUISER.',
      color: 'bg-purple-500'
    },
    {
      icon: Phone,
      title: 'Emergencia 24/7',
      message: '¡EMERGENCIA! Necesito asistencia inmediata para un proyecto urgente. Por favor contactenme ya.',
      color: 'bg-red-500'
    },
    {
      icon: Clock,
      title: 'Información General',
      message: '¡Hola! Me interesa conocer más sobre los servicios de EQUISER. ¿Podrían enviarme información general?',
      color: 'bg-green-500'
    }
  ]

  const phoneNumbers = [
    { number: '584143432882', label: 'Principal', primary: true },
    { number: '584121597792', label: 'Alternativo', primary: false }
  ]

  const handleQuickMessage = (message: string, phoneNumber = '584143432882') => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  const handleDirectCall = (phoneNumber: string) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=¡Hola! Me pongo en contacto desde la página web de EQUISER.`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="mb-4 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden w-80"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">EQUISER</h3>
                    <p className="text-green-100 text-sm">¡Estamos aquí para ayudarte!</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Disponible 24/7</span>
                </div>
                <p className="text-sm text-gray-600">
                  Selecciona una opción rápida o escríbenos directamente:
                </p>
              </div>

              {/* Opciones rápidas */}
              <div className="space-y-2 mb-4">
                {quickOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickMessage(option.message)}
                    className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group text-left"
                  >
                    <div className={`w-10 h-10 ${option.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <option.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 text-sm">{option.title}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Números de teléfono */}
              <div className="border-t pt-4">
                <p className="text-xs text-gray-500 mb-3 text-center">O escoge el número:</p>
                <div className="space-y-2">
                  {phoneNumbers.map((phone, index) => (
                    <button
                      key={index}
                      onClick={() => handleDirectCall(phone.number)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                        phone.primary
                          ? 'bg-green-50 border-2 border-green-200 hover:bg-green-100'
                          : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Phone className={`w-4 h-4 ${phone.primary ? 'text-green-600' : 'text-gray-600'}`} />
                        <div className="text-left">
                          <div className={`text-sm font-medium ${phone.primary ? 'text-green-900' : 'text-gray-900'}`}>
                            +58 {phone.number.slice(2, 5)}-{phone.number.slice(5, 8)}-{phone.number.slice(8)}
                          </div>
                          <div className={`text-xs ${phone.primary ? 'text-green-600' : 'text-gray-500'}`}>
                            {phone.label}
                            {phone.primary && ' (Recomendado)'}
                          </div>
                        </div>
                      </div>
                      <MessageCircle className={`w-4 h-4 ${phone.primary ? 'text-green-600' : 'text-gray-400'}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-400">
                  Respuesta promedio: <span className="font-medium text-green-600">2 minutos</span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón principal */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-110"
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
              <X className="w-8 h-8 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-8 h-8 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulso animado */}
        <AnimatePresence>
          {showPulse && !isOpen && (
            <motion.div
              initial={{ scale: 1, opacity: 0.7 }}
              animate={{ scale: 2, opacity: 0 }}
              exit={{ scale: 1, opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-green-500 rounded-full"
            />
          )}
        </AnimatePresence>

        {/* Indicador de disponibilidad */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </motion.button>

      {/* Texto flotante ocasional */}
      <AnimatePresence>
        {showPulse && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute right-20 top-2 bg-white px-4 py-2 rounded-lg shadow-lg border"
          >
            <div className="text-sm font-medium text-gray-900">¿Necesitas ayuda?</div>
            <div className="text-xs text-gray-600">¡Escríbenos ahora!</div>
            <div className="absolute top-3 -right-1 w-2 h-2 bg-white transform rotate-45 border-r border-b border-gray-200"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
