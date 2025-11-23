
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface BlogNewsletterProps {
  locale?: string
}

export function BlogNewsletter({ locale = 'es' }: BlogNewsletterProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const isEnglish = locale === 'en'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')

    // Simulate API call
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success')
        setMessage(isEnglish 
          ? 'Thank you! You have been successfully subscribed to the GRÚAS EQUISER newsletter.' 
          : '¡Gracias! Te hemos suscrito exitosamente al newsletter de GRÚAS EQUISER.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(isEnglish 
          ? 'Please enter a valid email.' 
          : 'Por favor, introduce un email válido.')
      }
      
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    }, 1500)
  }

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-equiser-blue to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 bg-equiser-yellow rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-equiser-blue" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isEnglish ? 'Newsletter' : 'Newsletter'} <span className="text-equiser-yellow">GRÚAS EQUISER</span>
          </h2>
          
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            {isEnglish 
              ? 'Stay updated with the latest news on mobile cranes, crawler cranes, heavy transport and industrial projects in Venezuela.'
              : 'Mantente actualizado con las últimas novedades en grúas móviles, sobre oruga, transporte pesado y proyectos industriales en Venezuela.'
            }
          </p>
          
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={isEnglish ? 'your@email.com' : 'tu@email.com'}
                  className="w-full px-6 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-equiser-yellow"
                  disabled={status === 'loading'}
                />
              </div>
              
              <Button
                type="submit"
                disabled={status === 'loading' || !email}
                className="w-full equiser-yellow equiser-yellow-hover text-equiser-blue font-bold py-4 rounded-full text-lg transition-all duration-200 hover:scale-105 shadow-lg"
              >
                {status === 'loading' ? (
                  isEnglish ? 'Subscribing...' : 'Suscribiendo...'
                ) : (
                  isEnglish ? 'Subscribe to Newsletter' : 'Suscribirse al Newsletter'
                )}
              </Button>
            </form>
            
            {message && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-4 rounded-lg flex items-center ${
                  status === 'success' 
                    ? 'bg-equiser-yellow/20 border border-equiser-yellow' 
                    : 'bg-red-500/20 border border-red-500'
                }`}
              >
                {status === 'success' ? (
                  <CheckCircle className="w-5 h-5 text-equiser-yellow mr-3 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                )}
                <p className="text-sm">{message}</p>
              </motion.div>
            )}
          </div>
          
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-semibold text-equiser-yellow mb-2">
                {isEnglish ? 'Technical Articles' : 'Artículos Técnicos'}
              </h3>
              <p className="text-blue-200 text-sm">
                {isEnglish 
                  ? 'Detailed guides on equipment and procedures'
                  : 'Guías detalladas sobre equipos y procedimientos'
                }
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-equiser-yellow mb-2">
                {isEnglish ? 'Case Studies' : 'Casos de Estudio'}
              </h3>
              <p className="text-blue-200 text-sm">
                {isEnglish 
                  ? 'Real projects executed in Venezuela'
                  : 'Proyectos reales ejecutados en Venezuela'
                }
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-equiser-yellow mb-2">
                {isEnglish ? 'Industry News' : 'Novedades del Sector'}
              </h3>
              <p className="text-blue-200 text-sm">
                {isEnglish 
                  ? 'Latest trends and technologies in cranes'
                  : 'Últimas tendencias y tecnologías en grúas'
                }
              </p>
            </div>
          </div>
          
          <p className="text-blue-300 text-sm mt-6">
            {isEnglish 
              ? '📧 Once a week • No spam • Unsubscribe anytime'
              : '📧 Una vez por semana • Sin spam • Cancela cuando quieras'
            }
          </p>
          
          <div className="mt-6 text-xs text-blue-400">
            {isEnglish 
              ? 'By subscribing, you agree to receive communications from GRÚAS EQUISER C.A. You can cancel your subscription at any time.'
              : 'Al suscribirte, aceptas recibir comunicaciones de GRÚAS EQUISER C.A. Puedes cancelar tu suscripción en cualquier momento.'
            }
          </div>
        </motion.div>
      </div>
    </section>
  )
}
