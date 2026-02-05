

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, ArrowUp, BookOpen, Instagram, Twitter, Facebook } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useLocale, useChangeLocale, type Locale } from '@/lib/i18n-utils'

export function Footer() {
  const t = useTranslations('footer')
  const currentLocale = useLocale()
  const changeLocale = useChangeLocale()
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/message/IOBBJVBBVWNOI1', '_blank')
  }

  const languages = [
    { 
      code: 'es' as Locale, 
      name: 'Español', 
      flag: 'https://flagcdn.com/ve.svg',
      alt: '🇻🇪 Español'
    },
    { 
      code: 'en' as Locale, 
      name: 'English', 
      flag: 'https://flagcdn.com/gb.svg',
      alt: '🇬🇧 English'
    }
  ]

  const handleLanguageChange = (locale: Locale) => {
    changeLocale(locale)
  }

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Botón scroll to top */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 equiser-blue equiser-blue-hover rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sección principal del footer con 4 columnas */}
        <div className="pt-16 pb-12">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Información de la empresa con logo actualizado */}
            <div className="lg:col-span-1">
              <div className="flex flex-col items-start mb-6">
                <a href="/" style={{ textDecoration: 'none' }} className="relative block mb-4">
                  {/* Logo NUEVO con fondo transparente - Width/Height explícitos para CLS=0 */}
                  <img
                    src="/images/logo-equiser-nuevo-400w.webp"
                    srcSet="/images/logo-equiser-nuevo-200w.webp 200w,
                            /images/logo-equiser-nuevo-300w.webp 300w,
                            /images/logo-equiser-nuevo-400w.webp 400w"
                    sizes="250px"
                    width={250}
                    height={139}
                    alt="GRÚAS EQUISER C.A. - Equipos y Servicios - Logo"
                    loading="lazy"
                    decoding="async"
                    className="w-auto h-auto max-w-[250px] object-contain hover:scale-105 transition-transform duration-200"
                  />
                </a>
                <div>
                  <h3 className="text-xl font-bold">{t('companyName')}</h3>
                  <p className="text-equiser-yellow font-medium">{t('companyTitle')}</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                {t('description')}
              </p>

              {/* Redes sociales integradas */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">{t('followTitle')}</h4>
                <div className="flex space-x-3">
                  <Link
                    href="https://www.instagram.com/gruasequiservzla/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                    title="Instagram @gruasequiservzla"
                  >
                    <Instagram className="w-6 h-6" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/profile.php?id=100092683147441"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                    title="Facebook Grúas Equiser"
                  >
                    <Facebook className="w-6 h-6" />
                  </Link>
                  <Link
                    href="https://x.com/gruasequiserve"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                    title="X @gruasequiserve"
                  >
                    <Twitter className="w-6 h-6" />
                  </Link>
                </div>
                <p className="text-gray-400 text-sm">
                  {t('followDesc')}
                </p>
              </div>
            </div>

            {/* Información de contacto */}
            <div>
              <h4 className="text-xl font-bold mb-6">{t('contactTitle')}</h4>
              <div className="space-y-4">
                <div className="flex items-start text-gray-300">
                  <MapPin className="w-5 h-5 text-equiser-yellow mr-3 flex-shrink-0 mt-1" />
                  <span className="text-sm">
                    {t('address1')}, {t('address2')}
                  </span>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 text-equiser-yellow mr-3" />
                  <div className="text-sm">
                    <div>+58 422-6347624</div>
                    <div>+58 414-3432882</div>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 text-equiser-yellow mr-3" />
                  <div className="text-sm">
                    <div>info@gruasequiser.com</div>
                    <div>direccionmercadeo@gruasequiser.com</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-300">
                  <Clock className="w-5 h-5 text-equiser-yellow mr-3" />
                  <span className="text-sm font-medium">{t('availability247')}</span>
                </div>
              </div>
            </div>

            {/* Servicios */}
            <div>
              <h4 className="text-xl font-bold mb-6">{t('servicesTitle')}</h4>
              <ul className="space-y-3">
                {[
                  t('service1'),
                  t('service2'),
                  t('service3'),
                  t('service4'),
                  t('service5'),
                  t('service6')
                ].map((service) => (
                  <li key={service}>
                    <button
                      onClick={() => window.open('https://wa.me/message/IOBBJVBBVWNOI1', '_blank')}
                      className="text-gray-400 hover:text-equiser-yellow transition-colors duration-200 text-sm text-left"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navegación rápida y blog */}
            <div>
              <h4 className="text-xl font-bold mb-6">{t('navigationTitle')}</h4>
              <ul className="space-y-3">
                {[
                  { href: '#inicio', label: t('navHome') },
                  { href: '#nosotros', label: t('navAbout') },
                  { href: '#proyectos', label: t('navProjects') },
                  { href: '/#contacto', label: t('navContact') }
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-equiser-yellow transition-colors duration-200 text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-4">
                  <Link
                    href="/blog"
                    className="flex items-center text-equiser-yellow hover:text-yellow-300 transition-colors duration-200 text-sm font-semibold"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    {t('navBlog')}
                  </Link>
                </li>
              </ul>

              <div className="mt-8">
                <h5 className="text-lg font-semibold mb-4">{t('sectorsTitle')}</h5>
                <div className="text-sm text-gray-400 space-y-1">
                  <div>• {t('sector1')}</div>
                  <div>• {t('sector2')}</div>
                  <div>• {t('sector3')}</div>
                  <div>• {t('sector4')}</div>
                  <div>• {t('sector5')}</div>
                  <div>• {t('sector6')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* REDISEÑO: Call to Action con colores corporativos */}
        <div className="border-t border-gray-700 py-12">
          <div 
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #FFC107 0%, #FFD700 100%)',
              padding: '80px 20px'
            }}
          >
            {/* Patrón decorativo de fondo */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(30, 58, 138, 0.3) 0%, transparent 50%)',
                pointerEvents: 'none'
              }}
            ></div>
            
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              {/* Título principal rediseñado */}
              <h3 
                className="text-4xl md:text-5xl font-extrabold text-equiser-blue mb-8"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
              >
                {t('ctaTitle')}
              </h3>
              
              {/* Texto explicativo mejorado */}
              <p 
                className="text-xl md:text-2xl text-equiser-blue font-medium mb-10 leading-relaxed max-w-3xl mx-auto"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
                dangerouslySetInnerHTML={{ __html: t('ctaDesc') }}
              />

              {/* Botón principal rediseñado */}
              <motion.button
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="text-white font-bold rounded-full shadow-2xl transition-all duration-300 hover:shadow-3xl inline-flex items-center gap-4"
                style={{
                  background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
                  padding: '25px 50px',
                  fontSize: '1.4rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  boxShadow: '0 15px 40px rgba(30, 58, 138, 0.4)',
                  border: '3px solid transparent'
                }}
              >
                <span className="text-2xl">💬</span>
                {t('ctaButton')}
                <span className="text-xl">→</span>
              </motion.button>

              {/* Información adicional destacada */}
              <div 
                className="mt-10 p-6 rounded-2xl max-w-4xl mx-auto"
                style={{
                  background: 'rgba(30, 58, 138, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(30, 58, 138, 0.2)'
                }}
              >
                <p 
                  className="text-equiser-blue font-bold text-lg"
                  style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
                >
                  {t('ctaBenefits')}
                </p>
              </div>

              {/* Estadísticas adicionales */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div 
                    className="text-3xl font-bold text-equiser-blue"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
                  >
                    {t('stat1')}
                  </div>
                  <div className="text-equiser-blue font-medium">{t('stat1Label')}</div>
                </div>
                <div className="text-center">
                  <div 
                    className="text-3xl font-bold text-equiser-blue"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
                  >
                    {t('stat2')}
                  </div>
                  <div className="text-equiser-blue font-medium">{t('stat2Label')}</div>
                </div>
                <div className="text-center">
                  <div 
                    className="text-3xl font-bold text-equiser-blue"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
                  >
                    {t('stat3')}
                  </div>
                  <div className="text-equiser-blue font-medium">{t('stat3Label')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright y certificaciones */}
        <div className="border-t border-gray-700 pt-8 pb-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 gap-4">
            {/* Columna izquierda: Copyright */}
            <div className="text-center lg:text-left flex-1">
              <p className="text-gray-400 text-sm">
                {t('copyright')}
              </p>
              <p className="text-gray-500 text-xs mt-1">
                {t('rif')}
              </p>
              <div className="text-xs text-gray-400 mt-2">
                {t('socialIg')} | {t('socialTw')} | {t('socialFb')}
              </div>
            </div>
            
            {/* Columna central: Marcas Premium */}
            <div className="flex items-center justify-center text-center">
              <div className="text-xs text-gray-400">
                <div 
                  className="font-bold text-lg px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #FFC107 0%, #FFD700 100%)',
                    color: '#1E3A8A',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    boxShadow: '0 4px 15px rgba(255, 193, 7, 0.4)',
                    border: '2px solid rgba(30, 58, 138, 0.2)'
                  }}
                >
                  <span className="text-base mr-2">⭐</span>
                  {t('premiumBrands')}
                </div>
                <div className="mt-2 text-gray-500">{t('brands')}</div>
              </div>
            </div>

            {/* Columna derecha: Selector de Idioma - OPTIMIZADO MOBILE Y DESKTOP */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="flex items-center gap-3 bg-gray-800 rounded-full px-4 py-3 shadow-lg border-2 border-gray-700 hover:border-equiser-yellow transition-colors duration-300">
                <span className="text-gray-300 text-sm font-semibold hidden sm:inline">
                  {t('languageLabel')}
                </span>
                <div className="flex items-center gap-3">
                  {languages.map((language) => {
                    const isActive = currentLocale === language.code
                    
                    return (
                      <motion.button
                        key={language.code}
                        onClick={() => handleLanguageChange(language.code)}
                        className={`relative group ${isActive ? 'ring-3 ring-equiser-yellow ring-offset-2 ring-offset-gray-900' : ''}`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.85 }}
                        transition={{ duration: 0.2 }}
                        aria-label={`Cambiar a ${language.name}`}
                        title={language.name}
                        style={{
                          minWidth: '44px',
                          minHeight: '44px',
                          padding: '2px'
                        }}
                      >
                        {/* Bandera - TAMAÑO OPTIMIZADO: 40px móvil, 36px desktop */}
                        <div 
                          className={`
                            w-10 h-10 sm:w-9 sm:h-9
                            rounded-full 
                            overflow-hidden 
                            shadow-lg
                            border-3
                            ${isActive 
                              ? 'border-equiser-yellow shadow-2xl shadow-equiser-yellow/50' 
                              : 'border-gray-600 group-hover:border-equiser-blue'
                            }
                            transition-all duration-300
                          `}
                        >
                          <img 
                            src={language.flag} 
                            alt={language.alt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>

                        {/* Indicador activo mejorado */}
                        {isActive && (
                          <motion.div
                            layoutId="active-language-footer"
                            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-equiser-yellow rounded-full shadow-lg"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                        
                        {/* Label móvil debajo de bandera */}
                        {isActive && (
                          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-equiser-yellow font-bold whitespace-nowrap sm:hidden">
                            {language.code.toUpperCase()}
                          </span>
                        )}
                      </motion.button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banner de advertencia - Servicios B2B exclusivamente */}
        <div className="border-t border-gray-700 py-6">
          <motion.div 
            className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 py-3 px-4 rounded-lg text-center shadow-2xl border-2 border-orange-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-900 text-xs sm:text-sm md:text-base font-extrabold tracking-wide leading-tight" dangerouslySetInnerHTML={{ __html: t('warningBanner') }} />
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
