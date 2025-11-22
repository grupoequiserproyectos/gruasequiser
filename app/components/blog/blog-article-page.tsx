
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, User, Clock, ArrowLeft, Share2, Tag, MessageCircle, Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { BlogArticle, getRelatedArticles } from '@/lib/blog-data'
import { BlogComments } from './blog-comments'
import { BlogNewsletter } from './blog-newsletter'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { ContactForm } from '@/components/contact-form'
import BlogImage from '@/components/BlogImage'

interface BlogArticlePageProps {
  article: BlogArticle
}

export function BlogArticlePage({ article }: BlogArticlePageProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const relatedArticles = getRelatedArticles(article.slug)

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

  const handleShare = async () => {
    if (!mounted) return
    
    if (navigator?.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback para navegadores que no soportan Web Share API
      if (navigator?.clipboard) {
        navigator.clipboard.writeText(window.location.href)
        alert('Enlace copiado al portapapeles')
      }
    }
  }

  const renderContent = (content: string) => {
    const lines = content.split('\n')
    const elements: React.ReactNode[] = []
    let tableRows: JSX.Element[] = []
    let inTable = false
    
    lines.forEach((line, index) => {
      // Table detection
      const isTableRow = line.includes('|') && !line.includes('---')
      const isTableSeparator = line.includes('|') && line.includes('---')
      
      if (isTableSeparator) {
        inTable = true
        return // Skip separator lines
      }
      
      if (isTableRow) {
        inTable = true
        const cells = line.split('|').map(cell => cell.trim()).filter(cell => cell)
        const isHeader = line.includes('Característica') || line.includes('Concepto') || line.includes('Aspecto')
        
        const row = (
          <tr key={`table-row-${index}`} className={isHeader ? 'bg-equiser-blue text-white' : 'border-b border-gray-200'}>
            {cells.map((cell, cellIndex) => (
              isHeader ? (
                <th key={cellIndex} className="px-4 py-3 text-left font-semibold">
                  {cell}
                </th>
              ) : (
                <td key={cellIndex} className="px-4 py-3 text-gray-700">
                  {cell}
                </td>
              )
            ))}
          </tr>
        )
        tableRows.push(row)
        return
      }
      
      // If we were in a table and hit a non-table line, wrap and add the table
      if (inTable && !isTableRow) {
        elements.push(
          <div key={`table-${index}`} className="overflow-x-auto mb-8">
            <table className="w-full border border-gray-200 rounded-lg">
              <tbody>
                {tableRows}
              </tbody>
            </table>
          </div>
        )
        tableRows = []
        inTable = false
      }
      
      // Headers
      if (line.startsWith('# ')) {
        elements.push(<h1 key={index} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-8">{line.substring(2)}</h1>)
        return
      }
      if (line.startsWith('## ')) {
        elements.push(<h2 key={index} className="text-2xl md:text-3xl font-bold text-equiser-blue mb-4 mt-8">{line.substring(3)}</h2>)
        return
      }
      if (line.startsWith('### ')) {
        elements.push(<h3 key={index} className="text-xl md:text-2xl font-bold text-gray-800 mb-4 mt-6">{line.substring(4)}</h3>)
        return
      }
      if (line.startsWith('#### ')) {
        elements.push(<h4 key={index} className="text-lg md:text-xl font-bold text-gray-800 mb-3 mt-6">{line.substring(5)}</h4>)
        return
      }
      if (line.startsWith('##### ')) {
        elements.push(<h5 key={index} className="text-base md:text-lg font-bold text-gray-800 mb-3 mt-4">{line.substring(6)}</h5>)
        return
      }
      
      // Lists
      if (line.startsWith('- ')) {
        elements.push(<li key={index} className="text-gray-700 mb-2 ml-4">{line.substring(2)}</li>)
        return
      }
      
      // Bold text
      const boldRegex = /\*\*(.*?)\*\*/g
      let processedLine = line.replace(boldRegex, '<strong class="font-semibold text-equiser-blue">$1</strong>')
      
      // Empty lines
      if (line.trim() === '') {
        elements.push(<br key={index} />)
        return
      }
      
      // Regular paragraphs
      if (line.trim() && !line.startsWith('#') && !line.startsWith('-')) {
        elements.push(
          <p 
            key={index} 
            className="text-gray-700 leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: processedLine }}
          />
        )
      }
    })
    
    // Handle any remaining table rows
    if (tableRows.length > 0) {
      elements.push(
        <div key="table-final" className="overflow-x-auto mb-8">
          <table className="w-full border border-gray-200 rounded-lg">
            <tbody>
              {tableRows}
            </tbody>
          </table>
        </div>
      )
    }
    
    return elements
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white">
        <div className="py-20 flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-equiser-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Cargando artículo...</p>
          </div>
        </div>
      </div>
    )
  }

  const t = useTranslations('blog')
  const tHeader = useTranslations('header')

  return (
    <div className="min-h-screen bg-white">
      {/* Header completo del blog con logo grande */}
      <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo grande clickeable */}
            <div className="flex items-center">
              <Link href="/" className="relative block">
                <div className="relative" style={{ width: '180px', height: '60px' }}>
                  <Image
                    src="/images/logo-equiser-actualizado.webp"
                    alt="GRÚAS EQUISER C.A. - Logo"
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-200"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Navegación */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link href="/" className="flex items-center text-gray-700 hover:text-equiser-blue transition-colors duration-200">
                <Home className="w-4 h-4 mr-2" />
                {tHeader('inicio')}
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-equiser-blue transition-colors duration-200">
                {t('title')}
              </Link>
              <Link href="/#nosotros" className="text-gray-700 hover:text-equiser-blue transition-colors duration-200">
                {tHeader('nosotros')}
              </Link>
              <Link href="/#proyectos" className="text-gray-700 hover:text-equiser-blue transition-colors duration-200">
                {tHeader('proyectos')}
              </Link>
              <Link href="/#contacto" className="text-gray-700 hover:text-equiser-blue transition-colors duration-200">
                {tHeader('contacto')}
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Button
                onClick={() => window.open('https://wa.me/message/IOBBJVBBVWNOI1', '_blank')}
                className="equiser-yellow equiser-yellow-hover text-equiser-blue px-6 py-2 rounded-full font-semibold"
              >
                {t('ctaButton')}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Article Header */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-equiser-blue hover:text-blue-700 font-medium mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al Blog
              </Link>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="bg-equiser-yellow text-equiser-blue px-4 py-2 rounded-full font-bold">
                  {article.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{formatDate(article.publishDate)}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{article.readTime} min de lectura</span>
                </div>
                <button
                  onClick={handleShare}
                  className="flex items-center text-gray-500 hover:text-equiser-blue text-sm transition-colors"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartir
                </button>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {article.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {article.excerpt}
              </p>
              
              <div className="flex items-center mb-8">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={article.author.image}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Fallback to a default avatar if image fails to load
                      const target = e.target as HTMLImageElement
                      target.src = '/images/default-avatar.webp'
                    }}
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{article.author.name}</div>
                  <div className="text-gray-600 text-sm">{article.author.bio}</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="mb-12">
              <BlogImage
                blogSlug={article.slug}
                imageIndex={0}
                alt={article.title}
                width={1200}
                height={500}
                priority
                className="w-full"
              />
            </div>
            
            {/* Schema.org structured data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  "headline": article.title,
                  "description": article.excerpt,
                  "image": article.featuredImage,
                  "author": {
                    "@type": "Person",
                    "name": article.author.name
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "GRÚAS EQUISER C.A.",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "/images/logo-equiser-grande.webp"
                    }
                  },
                  "datePublished": article.publishDate,
                  "dateModified": article.lastModified,
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `https://gruasequiser.net/blog/${article.slug}`
                  },
                  "keywords": article.seoKeywords,
                  "articleSection": article.category,
                  "wordCount": article.content.split(' ').length
                })
              }}
            />
          </motion.div>
        </div>
      </article>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <div className="article-content">
            {renderContent(article.content)}
          </div>
        </motion.div>
        
        {/* Additional Images Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <BlogImage
            blogSlug={article.slug}
            imageIndex={1}
            alt={`${article.title} - Equipos y servicios especializados`}
            width={800}
            height={500}
            className="w-full"
          />
          <BlogImage
            blogSlug={article.slug}
            imageIndex={2}
            alt={`${article.title} - Proyectos industriales`}
            width={800}
            height={500}
            className="w-full"
          />
          <BlogImage
            blogSlug={article.slug}
            imageIndex={3}
            alt={`${article.title} - Seguridad y calidad garantizada`}
            width={800}
            height={500}
            className="w-full"
          />
        </motion.div>
        
        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <div className="flex items-center mb-4">
            <Tag className="w-5 h-5 text-equiser-blue mr-2" />
            <span className="font-semibold text-gray-900">Etiquetas:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 hover:bg-equiser-yellow hover:text-equiser-blue text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-equiser-blue to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Este artículo resolvió tus dudas sobre grúas?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Si necesitas servicios especializados en grúas móviles, sobre oruga o transporte pesado, 
            GRÚAS EQUISER tiene la experiencia y equipos que necesitas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/message/IOBBJVBBVWNOI1"
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

      {/* Comments Section */}
      <BlogComments articleSlug={article.slug} />

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Artículos <span className="text-equiser-blue">Relacionados</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle, index) => (
                <motion.article
                  key={relatedArticle.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedArticle.featuredImage}
                      alt={relatedArticle.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-equiser-yellow text-equiser-blue px-3 py-1 rounded-full font-semibold text-xs">
                        {relatedArticle.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-equiser-blue transition-colors line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {relatedArticle.excerpt}
                    </p>
                    
                    <div className="flex items-center text-xs text-gray-500 mb-4">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{formatDate(relatedArticle.publishDate)}</span>
                      <span className="mx-2">•</span>
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{relatedArticle.readTime}m</span>
                    </div>
                    
                    <Link
                      href={`/blog/${relatedArticle.slug}`}
                      className="inline-flex items-center text-equiser-blue font-semibold hover:text-blue-700 transition-colors text-sm"
                    >
                      Leer artículo
                      <ArrowLeft className="w-3 h-3 ml-1 rotate-180" />  
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Necesitas una <span className="text-equiser-blue">Cotización?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Completa el formulario y nuestro equipo de expertos te contactará en menos de 24 horas 
              con una propuesta personalizada para tu proyecto.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <BlogNewsletter />
    </div>
  )
}