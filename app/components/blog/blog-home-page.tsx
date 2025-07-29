

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, Calendar, User, Clock, ArrowRight, Filter, Home, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { getAllCategories, getArticlesByCategory, getFeaturedArticles } from '@/lib/blog-data'
import { BlogNewsletter } from './blog-newsletter'
import { Button } from '@/components/ui/button'

export function BlogHomePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [searchTerm, setSearchTerm] = useState('')
  
  const categories = getAllCategories()
  const allArticles = getArticlesByCategory(activeCategory)
  const featuredArticles = getFeaturedArticles()
  
  const filteredArticles = allArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    return `${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`
  }

  // Agrupar artículos por fecha
  const groupArticlesByDate = (articles: any[]) => {
    const grouped = articles.reduce((acc, article) => {
      const date = new Date(article.date)
      const dateString = formatDate(article.date)
      
      if (!acc[dateString]) {
        acc[dateString] = []
      }
      acc[dateString].push(article)
      return acc
    }, {} as Record<string, any[]>)
    
    return Object.entries(grouped).sort(([a], [b]) => new Date(b).getTime() - new Date(a).getTime())
  }

  const groupedArticles = groupArticlesByDate(filteredArticles)

  return (
    <div className="min-h-screen bg-white">
      {/* Header completo del blog con logo grande */}
      <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo grande clickeable */}
            <div className="flex items-center">
              <Link href="/" className="relative block mr-6">
                <div className="relative" style={{ width: '250px', height: '80px' }}>
                  <Image
                    src="/images/logo-equiser-actualizado.png"
                    alt="GRÚAS EQUISER C.A. - Logo"
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-200"
                    priority
                  />
                </div>
              </Link>
              <div className="hidden md:block text-left">
                <h1 className="text-xl font-bold text-equiser-blue">📝 Blog de Grúas</h1>
                <p className="text-sm text-gray-600">Noticias y actualidades del sector</p>
              </div>
            </div>

            {/* Navegación */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link href="/" className="flex items-center text-gray-700 hover:text-equiser-blue transition-colors duration-200">
                <Home className="w-4 h-4 mr-2" />
                Inicio
              </Link>
              <Link href="/#nosotros" className="text-gray-700 hover:text-equiser-blue transition-colors duration-200">
                Nosotros
              </Link>
              <Link href="/#equipos" className="text-gray-700 hover:text-equiser-blue transition-colors duration-200">
                Equipos
              </Link>
              <Link href="/#proyectos" className="text-gray-700 hover:text-equiser-blue transition-colors duration-200">
                Proyectos
              </Link>
              <Link href="/#contacto" className="text-gray-700 hover:text-equiser-blue transition-colors duration-200">
                Contacto
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Button
                onClick={() => window.open('https://wa.me/584143432882?text=¡Hola! Me interesa conocer más sobre los servicios de EQUISER.', '_blank')}
                className="equiser-yellow equiser-yellow-hover text-equiser-blue px-6 py-2 rounded-full font-semibold"
              >
                Solicitar Cotización
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section con fondo legible */}
      <section 
        className="py-20 text-white relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%)',
          backgroundImage: 'url("/images/imagen grua.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        {/* Overlay fuerte para legibilidad */}
        <div className="absolute inset-0" style={{ background: 'rgba(30, 58, 138, 0.9)' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Contenedor semi-transparente */}
            <div 
              className="mx-auto max-w-4xl rounded-2xl p-8"
              style={{
                background: 'rgba(30, 58, 138, 0.8)',
                border: '2px solid rgba(255, 215, 0, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
              >
                📝 <span className="text-equiser-yellow">Blog</span> de Grúas
              </h1>
              <p 
                className="text-xl md:text-2xl mb-8 text-blue-100"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
              >
                Mantente actualizado con las últimas noticias, tecnologías y proyectos 
                del sector de alquiler de grúas y transporte pesado en Venezuela
              </p>

              {/* Búsqueda */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full border-0 text-gray-900 text-lg focus:ring-2 focus:ring-equiser-yellow shadow-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORRECCIÓN: Botones de filtro con fondo amarillo y hover azul */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center justify-center mb-8">
              <Filter className="w-5 h-5 text-gray-500 mr-3" />
              <span className="text-gray-700 font-medium">Filtrar por categoría:</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg transform hover:scale-105 ${
                    activeCategory === category
                      ? 'bg-equiser-blue text-white border-2 border-equiser-blue shadow-blue-200 scale-105'
                      : 'bg-equiser-yellow text-equiser-blue border-2 border-equiser-yellow hover:bg-equiser-blue hover:text-white hover:border-equiser-blue'
                  }`}
                  style={{
                    padding: '15px 25px',
                    borderRadius: '25px',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Artículos organizados por días */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {groupedArticles.length > 0 ? (
            <div className="space-y-12">
              {groupedArticles.map(([dateString, articles]) => {
                const articleList = articles as any[]
                return (
                <motion.div
                  key={dateString}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-2xl font-bold text-equiser-blue flex items-center">
                      <Calendar className="w-6 h-6 mr-3" />
                      {dateString}
                    </h2>
                    <p className="text-gray-600 mt-2">{articleList.length} artículo{articleList.length !== 1 ? 's' : ''} publicado{articleList.length !== 1 ? 's' : ''}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articleList.map((article: any) => (
                      <div
                        key={article.slug}
                        className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                      >
                        <div className="relative h-48">
                          <Image
                            src={article.featuredImage}
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute top-4 left-4">
                            <span className="bg-equiser-blue text-white px-3 py-1 rounded-full text-xs font-semibold">
                              {article.category}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-equiser-blue transition-colors duration-200">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 mb-4 text-sm line-clamp-3">{article.excerpt}</p>
                          
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center text-sm text-gray-500">
                              <User className="w-4 h-4 mr-1" />
                              <span>{article.author?.name || 'Autor'}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="w-4 h-4 mr-1" />
                              <span>{article.readTime}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {article.tags?.slice(0, 2).map((tag: string) => (
                                <span
                                  key={tag}
                                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <Link
                              href={`/blog/${article.slug}`}
                              className="inline-flex items-center text-equiser-blue hover:text-blue-800 font-semibold text-sm transition-colors duration-200"
                            >
                              Leer más
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-500 text-lg">No se encontraron artículos que coincidan con tu búsqueda.</div>
              <Button
                onClick={() => {
                  setSearchTerm('')
                  setActiveCategory('Todos')
                }}
                className="mt-4 equiser-blue equiser-blue-hover text-white"
              >
                Ver todos los artículos
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <BlogNewsletter />

      {/* CTA section con fondo legible */}
      <section 
        className="py-16 text-white relative"
        style={{
          background: 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%)',
          backgroundImage: 'url("/images/trabajo de grua.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        {/* Overlay fuerte para legibilidad */}
        <div className="absolute inset-0" style={{ background: 'rgba(30, 58, 138, 0.95)' }}></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div 
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(30, 58, 138, 0.9)',
              border: '2px solid rgba(255, 215, 0, 0.3)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
            >
              ¿Necesitas Servicios de Alquiler de Grúas?
            </h2>
            <p 
              className="text-xl mb-8 text-blue-100"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
            >
              Más de 30 años de experiencia con grúas hasta 1600 toneladas. 
              Contáctanos para una cotización inmediata.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open('https://wa.me/584143432882?text=¡Hola! Me interesa conocer más sobre los servicios de EQUISER.', '_blank')}
                className="equiser-yellow equiser-yellow-hover text-equiser-blue px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-200"
              >
                Contactar WhatsApp
              </Button>
              <Link href="/#contacto">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-equiser-blue px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Ver Más Información
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
