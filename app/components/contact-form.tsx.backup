
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'

interface ContactFormData {
  tipo_servicio: string
  tonelaje: string
  name: string
  email: string
  phone: string
  company: string
  ubicacion: string
  asunto: string
  message: string
}

export function ContactForm() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState<ContactFormData>({
    tipo_servicio: '',
    tonelaje: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    ubicacion: '',
    asunto: '',
    message: ''
  })

  const [errors, setErrors] = useState<Partial<ContactFormData>>({})

  const tipoServicioOptions = [
    { value: 'alquiler_gruas', label: 'Alquiler de Grúas' },
    { value: 'transporte_pesado', label: 'Transporte Pesado y Sobredimensionado' },
    { value: 'servicio_bateas', label: 'Servicio con Bateas' }
  ]

  const tonelajeOptions = [
    { value: '65-100', label: '65 toneladas a 100 toneladas' },
    { value: '100-200', label: '100 toneladas a 200 toneladas' },
    { value: '300-1000', label: '300 toneladas a 1000 toneladas' }
  ]

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {}

    if (!formData.tipo_servicio.trim()) newErrors.tipo_servicio = 'Debe seleccionar un tipo de servicio'
    
    // Si es alquiler de grúas, el tonelaje es obligatorio
    if (formData.tipo_servicio === 'alquiler_gruas' && !formData.tonelaje.trim()) {
      newErrors.tonelaje = 'Debe seleccionar una opción de tonelaje para alquiler de grúas'
    }

    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio'
    if (!formData.email.trim()) {
      newErrors.email = 'El correo es obligatorio'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un correo válido'
    }
    if (!formData.phone.trim()) newErrors.phone = 'El teléfono es obligatorio'
    if (!formData.asunto.trim()) newErrors.asunto = 'El asunto es obligatorio'
    if (!formData.message.trim()) newErrors.message = 'El mensaje es obligatorio'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast({
        title: "Error en el formulario",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive"
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setShowSuccess(true)
        setFormData({
          tipo_servicio: '',
          tonelaje: '',
          name: '',
          email: '',
          phone: '',
          company: '',
          ubicacion: '',
          asunto: '',
          message: ''
        })
        
        // Ocultar mensaje de éxito después de 8 segundos
        setTimeout(() => {
          setShowSuccess(false)
        }, 8000)
        
      } else {
        throw new Error(result.error || 'Error al enviar el formulario')
      }
    } catch (error) {
      toast({
        title: "Error al enviar",
        description: "Por favor intenta nuevamente o contáctanos directamente por WhatsApp.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleTipoServicioChange = (value: string) => {
    setFormData(prev => ({ 
      ...prev, 
      tipo_servicio: value,
      // Limpiar el tonelaje si no es alquiler de grúas
      tonelaje: value === 'alquiler_gruas' ? prev.tonelaje : ''
    }))
    
    // Limpiar errores relacionados
    if (errors.tipo_servicio) {
      setErrors(prev => ({ ...prev, tipo_servicio: undefined }))
    }
    if (value !== 'alquiler_gruas' && errors.tonelaje) {
      setErrors(prev => ({ ...prev, tonelaje: undefined }))
    }
  }

  const handleTonelajeChange = (value: string) => {
    setFormData(prev => ({ ...prev, tonelaje: value }))
    
    // Limpiar error de tonelaje cuando se selecciona
    if (errors.tonelaje) {
      setErrors(prev => ({ ...prev, tonelaje: undefined }))
    }
  }

  if (showSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto p-8 text-center"
      >
        <div 
          className="rounded-3xl p-12 shadow-2xl border-4"
          style={{
            background: 'linear-gradient(135deg, #FFC107 0%, #FFD700 100%)',
            borderColor: '#1E3A8A'
          }}
        >
          <CheckCircle className="w-20 h-20 mx-auto mb-6 text-white" />
          <h3 className="text-2xl font-bold mb-4 text-white">
            ¡MENSAJE ENVIADO EXITOSAMENTE!
          </h3>
          <p className="text-lg text-white font-semibold leading-relaxed">
            ¡Gracias por contactarnos! Pronto un asesor de venta se está comunicando con usted. 
            Muchas gracias por preferirnos.
          </p>
          <div className="mt-8">
            <button
              onClick={() => setShowSuccess(false)}
              className="px-8 py-3 bg-white rounded-full font-bold transition-all duration-300 hover:scale-105"
              style={{ color: '#1E3A8A' }}
            >
              Enviar Otro Mensaje
            </button>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto mt-20"
    >
      {/* Título del formulario */}
      <div className="text-center mb-12">
        <h3 
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: '#1E3A8A' }}
        >
          CONTÁCTANOS Y ¡CONOCE MÁS!
        </h3>
        <div 
          className="w-24 h-1 mx-auto rounded-full"
          style={{ background: 'linear-gradient(90deg, #FFC107, #FFD700)' }}
        ></div>
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="space-y-8">
        <div 
          className="bg-white p-8 rounded-3xl shadow-2xl border-4"
          style={{ borderColor: '#1E3A8A' }}
        >
          {/* Tipo de Servicio */}
          <div className="mb-8">
            <h4 
              className="text-lg font-bold mb-4"
              style={{ color: '#1E3A8A' }}
            >
              Tipo de Servicio
            </h4>
            <div className="space-y-3">
              {tipoServicioOptions.map((option) => (
                <label 
                  key={option.value} 
                  className="flex items-center cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="tipo_servicio"
                    value={option.value}
                    checked={formData.tipo_servicio === option.value}
                    onChange={(e) => handleTipoServicioChange(e.target.value)}
                    className="mr-3 w-4 h-4 accent-blue-800"
                  />
                  <span 
                    className="text-sm font-medium group-hover:font-bold transition-all duration-200"
                    style={{ color: '#1E3A8A' }}
                  >
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
            {errors.tipo_servicio && (
              <p className="text-red-500 text-sm mt-2 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.tipo_servicio}
              </p>
            )}
          </div>

          {/* Opción de Tonelajes - Solo para Alquiler de Grúas */}
          {formData.tipo_servicio === 'alquiler_gruas' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <h4 
                className="text-lg font-bold mb-4"
                style={{ color: '#1E3A8A' }}
              >
                Opción de Tonelajes
              </h4>
              <div className="space-y-3">
                {tonelajeOptions.map((option) => (
                  <label 
                    key={option.value} 
                    className="flex items-center cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="tonelaje"
                      value={option.value}
                      checked={formData.tonelaje === option.value}
                      onChange={(e) => handleTonelajeChange(e.target.value)}
                      className="mr-3 w-4 h-4 accent-blue-800"
                    />
                    <span 
                      className="text-sm font-medium group-hover:font-bold transition-all duration-200"
                      style={{ color: '#1E3A8A' }}
                    >
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
              {errors.tonelaje && (
                <p className="text-red-500 text-sm mt-2 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.tonelaje}
                </p>
              )}
            </motion.div>
          )}

          {/* Nombre completo */}
          <div className="mb-6">
            <input
              type="text"
              name="name"
              placeholder="NOMBRE"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-lg font-medium placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.name 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                  : 'border-gray-300 focus:border-blue-800 focus:ring-blue-100'
              }`}
              style={{ backgroundColor: '#f8f9fa' }}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Correo y Teléfono */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <input
                type="email"
                name="email"
                placeholder="CORREO"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-lg font-medium placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.email 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                    : 'border-gray-300 focus:border-blue-800 focus:ring-blue-100'
                }`}
                style={{ backgroundColor: '#f8f9fa' }}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="TELÉFONO"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-lg font-medium placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.phone 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                    : 'border-gray-300 focus:border-blue-800 focus:ring-blue-100'
                }`}
                style={{ backgroundColor: '#f8f9fa' }}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* Empresa y Ubicación */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              name="company"
              placeholder="EMPRESA"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-medium placeholder-gray-400 focus:outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
              style={{ backgroundColor: '#f8f9fa' }}
            />
            <input
              type="text"
              name="ubicacion"
              placeholder="UBICACIÓN"
              value={formData.ubicacion}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-medium placeholder-gray-400 focus:outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
              style={{ backgroundColor: '#f8f9fa' }}
            />
          </div>

          {/* Asunto */}
          <div className="mb-6">
            <input
              type="text"
              name="asunto"
              placeholder="ASUNTO"
              value={formData.asunto}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-lg font-medium placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.asunto 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                  : 'border-gray-300 focus:border-blue-800 focus:ring-blue-100'
              }`}
              style={{ backgroundColor: '#f8f9fa' }}
            />
            {errors.asunto && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.asunto}
              </p>
            )}
          </div>

          {/* Mensaje */}
          <div className="mb-8">
            <textarea
              name="message"
              placeholder="Mensaje"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-lg font-medium placeholder-gray-400 focus:outline-none focus:ring-2 resize-none transition-all duration-300 ${
                errors.message 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                  : 'border-gray-300 focus:border-blue-800 focus:ring-blue-100'
              }`}
              style={{ backgroundColor: '#f8f9fa' }}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.message}
              </p>
            )}
          </div>

          {/* Botón Enviar */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-16 py-4 text-lg font-bold text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed inline-flex items-center gap-3"
              style={{
                background: isSubmitting 
                  ? 'linear-gradient(135deg, #d1d5db 0%, #9ca3af 100%)' 
                  : 'linear-gradient(135deg, #FFC107 0%, #FFD700 100%)',
                color: isSubmitting ? '#6b7280' : '#1E3A8A'
              }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  )
}
