
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
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
    { href: '#inicio', label: 'INICIO' },
    { href: '#nosotros', label: 'NOSOTROS' },
    { href: '#equipos', label: 'EQUIPOS' },
    { href: '#servicios', label: 'SERVICIOS' },
    { href: '#proyectos', label: 'PROYECTOS' },
    { href: '#contacto', label: 'CONTACTO' }
  ]

  const handleWhatsApp = () => {
    window.open('https://wa.me/584143432882?text=¡Hola! Me interesa conocer más sobre los servicios de EQUISER para alquiler de grúas y transporte pesado.', '_blank')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo y eslogan */}
          <div className="flex items-center space-x-4">
            <div className="relative w-20 h-20">
              <Image
                src="/images/logo equiser actulizado sin fondo.png"
                alt="GRÚAS EQUISER Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-equiser-blue">GRÚAS EQUISER C.A.</h1>
              <p className="text-sm text-equiser-yellow font-medium">Líder En Alquiler De Grúas Venezuela</p>
            </div>
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

          {/* Teléfono y CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-equiser-blue">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">+58 414-343-2882</span>
            </div>
            <Button
              onClick={handleWhatsApp}
              className="equiser-yellow equiser-yellow-hover text-equiser-blue px-6 py-2 rounded-full transition-all duration-200 hover:scale-105 font-semibold"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              SOLICITAR COTIZACIÓN
            </Button>
          </div>

          {/* Botón móvil */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
              <div className="pt-4 space-y-3">
                <div className="flex items-center space-x-2 text-equiser-blue">
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold">+58 414-343-2882</span>
                </div>
                <Button
                  onClick={handleWhatsApp}
                  className="w-full equiser-yellow equiser-yellow-hover text-equiser-blue font-semibold"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  SOLICITAR COTIZACIÓN
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
