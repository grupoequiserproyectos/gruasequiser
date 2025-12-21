import Link from 'next/link'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Home, Search, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Página no encontrada (404) | GRÚAS EQUISER',
  description: 'La página que buscas no existe. Encuentra información sobre alquiler de grúas industriales de 25-1600 toneladas en Venezuela.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-equiser-blue/5 via-white to-equiser-yellow/5 px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Error Code */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-equiser-blue/20 select-none">
            404
          </h1>
        </div>

        {/* Main Message */}
        <div className="space-y-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-equiser-blue">
            Página no encontrada
          </h2>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>

        {/* Search Suggestions */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-equiser-blue/10">
          <h3 className="text-xl font-semibold text-equiser-blue mb-4">
            ¿Qué estabas buscando?
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-left">
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 text-sm">Servicios</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>
                  <Link href="/#servicios" className="hover:text-equiser-blue transition-colors">
                    Grúas Móviles 25-600 ton
                  </Link>
                </li>
                <li>
                  <Link href="/#servicios" className="hover:text-equiser-blue transition-colors">
                    Grúas de Oruga 300-1600 ton
                  </Link>
                </li>
                <li>
                  <Link href="/#servicios" className="hover:text-equiser-blue transition-colors">
                    Transporte Pesado
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 text-sm">Información</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>
                  <Link href="/#nosotros" className="hover:text-equiser-blue transition-colors">
                    Sobre EQUISER
                  </Link>
                </li>
                <li>
                  <Link href="/#proyectos" className="hover:text-equiser-blue transition-colors">
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-equiser-blue transition-colors">
                    Blog y Guías
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 text-sm">Contacto</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>
                  <Link href="/#contacto" className="hover:text-equiser-blue transition-colors">
                    Solicitar Cotización
                  </Link>
                </li>
                <li>
                  <a href="tel:+584226347624" className="hover:text-equiser-blue transition-colors">
                    +58 422-6347624
                  </a>
                </li>
                <li>
                  <a href="tel:+584143432882" className="hover:text-equiser-blue transition-colors">
                    +58 414-3432882
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button className="bg-equiser-blue hover:bg-equiser-blue/90 text-white gap-2 min-w-[200px]">
              <Home className="w-4 h-4" />
              Ir al Inicio
            </Button>
          </Link>
          <Link href="/blog">
            <Button variant="outline" className="border-equiser-blue text-equiser-blue hover:bg-equiser-blue/10 gap-2 min-w-[200px]">
              <Search className="w-4 h-4" />
              Ver Blog
            </Button>
          </Link>
          <Link href="/#contacto">
            <Button variant="outline" className="border-equiser-yellow text-equiser-yellow hover:bg-equiser-yellow/10 gap-2 min-w-[200px]">
              <Phone className="w-4 h-4" />
              Contactar
            </Button>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-sm text-gray-500">
          <p>
            Si crees que esto es un error, por favor contáctanos al{' '}
            <a href="tel:+584226347624" className="text-equiser-blue hover:underline">
              +58 422-6347624
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
