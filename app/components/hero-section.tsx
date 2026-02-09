'use client'

import { ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export function HeroSection() {
  const t = useTranslations('hero')

  const handleWhatsApp = () => {
    window.open('https://wa.me/message/IOBBJVBBVWNOI1', '_blank')
  }

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ background: '#1e3a8a' }}
    >
      {/* IMAGEN HERO - LCP ELEMENT */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/optimized/grua-de-800-ton-400w-q70.webp"
          srcSet="/images/optimized/grua-de-800-ton-400w-q70.webp 400w, /images/optimized/grua-de-800-ton-800w-q70.webp 800w"
          sizes="100vw"
          width={800}
          height={534}
          alt="Grúas Industriales EQUISER Venezuela"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          className="w-full h-full object-cover"
          style={{ position: 'absolute', inset: 0 }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(30, 58, 138, 0.92)' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white py-8">
        {/* TÍTULO */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="block text-yellow-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-3">
            EQUISER C.A.
          </span>
          <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            {t('title')}
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto text-blue-100">
          {t('description')}
        </p>

        {/* ESTADÍSTICAS - VALORES DIRECTOS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          <div className="bg-white/10 rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-yellow-400">1600T</div>
            <div className="text-xs sm:text-sm text-blue-200">{t('stat1')}</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-yellow-400">30+</div>
            <div className="text-xs sm:text-sm text-blue-200">{t('stat2')}</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-yellow-400">6</div>
            <div className="text-xs sm:text-sm text-blue-200">{t('stat3')}</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-yellow-400">500+</div>
            <div className="text-xs sm:text-sm text-blue-200">{t('stat4')}</div>
          </div>
        </div>

        {/* CTA BUTTON */}
        <Button
          onClick={handleWhatsApp}
          className="px-8 py-4 rounded-full text-lg font-bold"
          style={{
            background: 'linear-gradient(135deg, #FFC107, #FFD700)',
            color: '#1E3A8A',
          }}
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          {t('btnQuoteShort')}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>

        <p className="mt-4 text-sm text-blue-200">
          {t('infoResponse')}
        </p>
      </div>
    </section>
  )
}
