

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { LanguageSwitcher } from '@/components/language-switcher'

export function Header() {
  const t = useTranslations('header')
  
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#inicio', label: t('inicio') },
    { href: '#nosotros', label: t('nosotros') },
    { href: '#servicios', label: t('servicios') },
    { href: '#proyectos', label: t('proyectos') },
    { href: '/blog', label: t('blog') },
    { href: '/#contacto', label: t('contacto') }
  ]

  const handleWhatsApp = () => {
    window.open('https://wa.me/message/IOBBJVBBVWNOI1', '_blank')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo NUEVO con fondo transparente y alta resolución - Width/Height explícitos para CLS=0 */}
          <div className="flex items-center">
            <Link href="/" className="relative block">
              <img
                src="/images/logo-equiser-nuevo-300w.webp"
                srcSet="/images/logo-equiser-nuevo-200w.webp 200w,
                        /images/logo-equiser-nuevo-300w.webp 300w,
                        /images/logo-equiser-nuevo-400w.webp 400w,
                        /images/logo-equiser-nuevo-500w.webp 500w"
                sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
                width={300}
                height={167}
                alt="GRÚAS EQUISER C.A. - Equipos y Servicios - Logo"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto object-contain hover:scale-105 transition-transform duration-200"
              />
            </Link>
          </div>

          {/* Navegación desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-gray-700 hover:text-equiser-blue transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Desktop + Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Button
              onClick={handleWhatsApp}
              className="equiser-yellow equiser-yellow-hover text-equiser-blue px-6 py-2 rounded-full transition-all duration-200 hover:scale-105 font-semibold min-h-[44px]"
              aria-label={`${t('contactWhatsApp')} - Contactar por WhatsApp`}
            >
              <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
              {t('contactWhatsApp').toUpperCase()}
            </Button>
          </div>

          {/* Language Switcher + Botón móvil */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageSwitcher />
            <button
              className="p-2 min-h-[44px] min-w-[44px]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-lg border-t">
            <nav className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-700 hover:text-equiser-blue py-2 border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Button
                  onClick={handleWhatsApp}
                  className="w-full equiser-yellow equiser-yellow-hover text-equiser-blue font-semibold min-h-[44px]"
                  aria-label={`${t('contactWhatsApp')} - Contactar por WhatsApp`}
                >
                  <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                  {t('contactWhatsApp').toUpperCase()}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
