
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, User, Calendar, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Comment {
  id: string
  author: string
  email: string
  content: string
  date: string
  replies?: Comment[]
}

interface BlogCommentsProps {
  articleSlug: string
}

export function BlogComments({ articleSlug }: BlogCommentsProps) {
  const [mounted, setMounted] = useState(false)
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      author: 'Ing. Miguel Rodríguez',
      email: 'miguel@example.com',
      content: 'Excelente artículo. La información sobre las grúas Liebherr es muy detallada y útil para nuestros proyectos industriales.',
      date: '2024-01-20',
      replies: [
        {
          id: '1-1',
          author: 'GRÚAS EQUISER',
          email: 'info@gruasequiser.net',
          content: 'Gracias por tu comentario, Miguel. Nos alegra que la información te sea útil. Si necesitas más detalles sobre algún modelo específico, no dudes en contactarnos.',
          date: '2024-01-21'
        }
      ]
    },
    {
      id: '2',
      author: 'Carlos Mendoza',
      email: 'carlos@example.com',
      content: '¿Tienen disponibilidad de la LTM 1500 para un proyecto en el estado Zulia? Necesitaríamos alquilarla por 3 meses.',
      date: '2024-01-18'
    }
  ])

  const [newComment, setNewComment] = useState({
    author: '',
    email: '',
    content: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.author || !newComment.email || !newComment.content) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      const comment: Comment = {
        id: Math.random().toString(36).substr(2, 9), // Use safer ID generation
        author: newComment.author,
        email: newComment.email,
        content: newComment.content,
        date: new Date().toISOString().split('T')[0]
      }

      setComments(prev => [comment, ...prev])
      setNewComment({ author: '', email: '', content: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const formatDate = (dateString: string) => {
    if (!mounted) return dateString // Return raw string during SSR
    try {
      const date = new Date(dateString)
      const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
      return `${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`
    } catch {
      return dateString
    }
  }

  if (!mounted) {
    return (
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-12">
            <div className="w-8 h-8 border-4 border-equiser-blue border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <MessageCircle className="w-6 h-6 text-equiser-blue mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">
            Comentarios ({comments.length})
          </h2>
        </div>

        {/* Comment Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-6 mb-8"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Deja tu comentario
          </h3>
          <form onSubmit={handleSubmitComment} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="author"
                  value={newComment.author}
                  onChange={(e) => setNewComment(prev => ({ ...prev, author: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-equiser-blue focus:border-equiser-blue transition-colors"
                  placeholder="Tu nombre completo"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={newComment.email}
                  onChange={(e) => setNewComment(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-equiser-blue focus:border-equiser-blue transition-colors"
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Comentario *
              </label>
              <textarea
                id="content"
                value={newComment.content}
                onChange={(e) => setNewComment(prev => ({ ...prev, content: e.target.value }))}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-equiser-blue focus:border-equiser-blue transition-colors"
                placeholder="Comparte tu opinión, pregunta o experiencia relacionada con el artículo..."
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Tu email no será publicado. Los campos obligatorios están marcados con *
              </p>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="equiser-yellow equiser-yellow-hover text-equiser-blue font-semibold px-6 py-3 rounded-lg"
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Publicar Comentario
                  </>
                )}
              </Button>
            </div>
          </form>
        </motion.div>

        {/* Comments List */}
        <div className="space-y-6">
          {comments.map((comment, index) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white border border-gray-200 rounded-2xl p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-equiser-blue rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <h4 className="font-semibold text-gray-900">{comment.author}</h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{formatDate(comment.date)}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {comment.content}
                  </p>
                  
                  {/* Replies */}
                  {comment.replies && comment.replies.length > 0 && (
                    <div className="mt-4 pl-6 border-l-2 border-equiser-yellow space-y-4">
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center space-x-4 mb-2">
                            <h5 className="font-semibold text-equiser-blue">{reply.author}</h5>
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar className="w-3 h-3 mr-1" />
                              <span>{formatDate(reply.date)}</span>
                            </div>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {reply.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {comments.length === 0 && (
          <div className="text-center py-12">
            <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Sé el primero en comentar
            </h3>
            <p className="text-gray-600">
              Comparte tu opinión o haz una pregunta sobre este artículo.
            </p>
          </div>
        )}

        {/* Moderation Notice */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Nota:</strong> Los comentarios son moderados para garantizar la calidad del contenido. 
            Tu comentario aparecerá después de ser revisado por nuestro equipo.
          </p>
        </div>
      </div>
    </section>
  )
}
