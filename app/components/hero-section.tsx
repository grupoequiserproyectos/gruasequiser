'use client'

import { ArrowRight, Play, Shield, Award, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export function HeroSection() {
  const t = useTranslations('hero')

  const handleWhatsApp = () => {
    window.open('https://wa.me/message/IOBBJVBBVWNOI1', '_blank')
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36">
      {/* IMAGEN HERO OPTIMIZADA (LCP Element) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/optimized/grua-de-800-ton-400w-q70.webp"
          srcSet="/images/optimized/grua-de-800-ton-400w-q70.webp 400w,
                  /images/optimized/grua-de-800-ton-800w-q70.webp 800w"
          sizes="100vw"
          width={800}
          height={534}
          alt="Grúas Móviles Hidráulicas y de Oruga - EQUISER - Alquiler de grúas industriales en Venezuela"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          className="w-full h-full object-cover object-center"
          style={{ position: 'absolute', inset: 0 }}
        />
        <div 
          className="absolute inset-0 z-10" 
          style={{ background: 'rgba(30, 58, 138, 0.95)' }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center text-white pt-6 sm:pt-8">
        <div>
          {/* Título principal */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight max-w-6xl mx-auto"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          >
            <span className="text-equiser-yellow block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4">
              EQUISER C.A.
            </span>
            <span className="text-white block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3">
              {t('title')}
            </span>
            <span className="text-blue-200 block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-relaxed">
              {t('subtitle1')}
              <span className="text-equiser-yellow font-bold"> {t('subtitle2')}</span>
              <br className="hidden sm:block" />
              {t('subtitle3')}
              <br className="hidden sm:block" />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-2 block">
                {t('sectors')}
              </span>
            </span>
          </h1>

          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed text-blue-100 px-2 sm:px-0"
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
          >
            {t('description')}
            <br />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mt-2 block">
              {t('cities')}
            </span>
          </p>

          {/* Estadísticas - VALORES FINALES DIRECTOS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 px-2 sm:px-0">
            <div 
              className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center border border-white/20"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-equiser-yellow">
                1600T
              </div>
              <div className="text-xs sm:text-sm text-blue-200 font-medium">{t('stat1')}</div>
            </div>
            <div 
              className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center border border-white/20"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-equiser-yellow">
                30+
              </div>
              <div className="text-xs sm:text-sm text-blue-200 font-medium">{t('stat2')}</div>
            </div>
            <div 
              className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center border border-white/20"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-equiser-yellow">
                6
              </div>
              <div className="text-xs sm:text-sm text-blue-200 font-medium">{t('stat3')}</div>
            </div>
            <div 
              className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center border border-white/20"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-equiser-yellow">
                500+
              </div>
              <div className="text-xs sm:text-sm text-blue-200 font-medium">{t('stat4')}</div>
            </div>
          </div>

          {/* Botones Principales */}
          <div className="mb-8 sm:mb-12 px-2 sm:px-0">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-4xl mx-auto">
              <Button
                onClick={handleWhatsApp}
                className="group relative overflow-hidden px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-bold uppercase tracking-wide w-full sm:w-auto"
                style={{
                  background: 'linear-gradient(135deg, #FFC107 0%, #FFD700 100%)',
                  color: '#1E3A8A',
                  boxShadow: '0 8px 25px rgba(255, 193, 7, 0.4)',
                  letterSpacing: '0.5px'
                }}
              >
                <span className="flex items-center justify-center gap-2 sm:gap-3">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">{t('btnQuote')}</span>
                  <span className="sm:hidden">{t('btnQuoteShort')}</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
              </Button>

              <Button
                onClick={() => window.open('https://www.youtube.com/watch?v=EJEMPLO', '_blank')}
                variant="outline"
                className="group relative overflow-hidden px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-bold tracking-wide w-full sm:w-auto"
                style={{
                  background: 'transparent',
                  color: '#FFFFFF',
                  boxShadow: '0 8px 25px rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderColor: 'rgba(255, 255, 255, 0.5)'
                }}
              >
                <span className="flex items-center justify-center gap-2 sm:gap-3">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  <span className="hidden sm:inline">{t('btnVideo')}</span>
                  <span className="sm:hidden">{t('btnVideoShort')}</span>
                </span>
              </Button>
            </div>

            <div className="mt-4 sm:mt-6 text-center px-2 sm:px-0">
              <p 
                className="text-blue-100 text-xs sm:text-sm md:text-base font-medium italic leading-relaxed"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
              >
                <span className="hidden sm:inline">{t('infoResponse')} | {t('infoQuotes')}</span>
                <span className="sm:hidden">{t('infoResponse')}<br />{t('infoQuotes')}</span>
              </p>
            </div>
          </div>

          {/* Características destacadas */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0">
            <div 
              className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 text-center border border-white/20"
              style={{ backdropFilter: 'blur(15px)' }}
            >
              <div 
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                style={{ 
                  background: 'linear-gradient(135deg, #1E3A8A, #3B82F6)',
                  boxShadow: '0 10px 30px rgba(30, 58, 138, 0.4)'
                }}
              >
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-equiser-yellow">Máxima Seguridad</h3>
              <p className="text-blue-100 leading-relaxed text-sm sm:text-base">Protocolos estrictos y operadores especializados</p>
            </div>
            
            <div 
              className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 text-center border border-white/20"
              style={{ backdropFilter: 'blur(15px)' }}
            >
              <div 
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                style={{ 
                  background: 'linear-gradient(135deg, #FFC107, #FFD700)',
                  boxShadow: '0 10px 30px rgba(255, 193, 7, 0.4)'
                }}
              >
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-equiser-blue" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-equiser-yellow">Equipos Premium</h3>
              <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                <span className="hidden sm:inline">Grúas Móviles y Sobre Oruga Tecnológicas de las Mejores Marcas Alemanas: Liebherr • Grove • Manitowoc • Demag de última generación.</span>
                <span className="sm:hidden">Grúas Móviles y Sobre Oruga de las Mejores Marcas Alemanas: Liebherr, Grove, Manitowoc, Demag.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator estático */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
