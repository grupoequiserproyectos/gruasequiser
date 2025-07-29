
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, Calendar, User, Clock, ArrowRight, Filter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { getAllCategories, getArticlesByCategory, getFeaturedArticles } from '@/lib/blog-data'
import { BlogNewsletter } from './blog-newsletter'

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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-equiser-blue via-blue-800 to-equiser-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blog <span className="text-equiser-yellow">GRÚAS EQUISER</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto mb-8">
              Guía completa sobre grúas móviles, grúas sobre oruga y transporte pesado en Venezuela. 
              Consejos de expertos, casos de estudio y las últimas novedades del sector industrial.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar artículos sobre grúas, transporte pesado, seguridad..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-equiser-yellow"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Filter className="w-5 h-5 text-equiser-blue mr-3" />
            <span className="text-gray-700 font-medium">Filtrar por categoría:</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-equiser-blue text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {activeCategory === 'Todos' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Artículos <span className="text-equiser-blue">Destacados</span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredArticles.slice(0, 3).map((article, index) => (
                  <motion.article
                    key={article.slug}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className={`group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                      index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                    }`}
                  >
                    <div className={`relative ${index === 0 ? 'h-96' : 'h-64'}`}>
                      <Image
                        src={article.featuredImage}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-equiser-yellow text-equiser-blue px-4 py-2 rounded-full font-bold text-sm">
                          {article.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full font-medium text-sm">
                          {article.readTime} min lectura
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{formatDate(article.publishDate)}</span>
                        <span className="mx-2">•</span>
                        <User className="w-4 h-4 mr-2" />
                        <span>{article.author.name}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-equiser-blue transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center text-equiser-blue font-semibold hover:text-blue-700 transition-colors"
                      >
                        Leer artículo completo
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              {activeCategory === 'Todos' ? 'Todos los Artículos' : `Artículos de ${activeCategory}`}
            </h2>
            
            {filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No se encontraron artículos que coincidan con tu búsqueda.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article, index) => (
                  <motion.article
                    key={article.slug}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative h-48">
                      <Image
                        src={article.featuredImage}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-3 left-3">
                        <span className="bg-equiser-yellow text-equiser-blue px-3 py-1 rounded-full font-semibold text-xs">
                          {article.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="bg-white/90 text-gray-800 px-2 py-1 rounded-full font-medium text-xs">
                          <Clock className="w-3 h-3 inline mr-1" />
                          {article.readTime}m
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-xs text-gray-500 mb-3">
                        <Calendar className="w-3 h-3 mr-2" />
                        <span>{formatDate(article.publishDate)}</span>
                        <span className="mx-2">•</span>
                        <span>{article.author.name}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-equiser-blue transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {article.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center text-equiser-blue font-semibold hover:text-blue-700 transition-colors text-sm"
                      >
                        Leer más
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <BlogNewsletter />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-equiser-blue to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Necesitas Servicios Especializados en Grúas?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Con más de 30 años de experiencia, GRÚAS EQUISER es tu mejor opción para 
            alquiler de grúas móviles, sobre oruga y transporte pesado en Venezuela.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/584143432882?text=Necesito información sobre servicios de grúas de GRÚAS EQUISER"
              target="_blank"
              rel="noopener noreferrer"
              className="equiser-yellow equiser-yellow-hover text-equiser-blue font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Contactar por WhatsApp
            </a>
            <Link
              href="/#servicios"
              className="border-2 border-equiser-yellow text-equiser-yellow hover:bg-equiser-yellow hover:text-equiser-blue font-semibold px-8 py-4 rounded-full transition-all duration-200"
            >
              Ver Nuestros Servicios
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
