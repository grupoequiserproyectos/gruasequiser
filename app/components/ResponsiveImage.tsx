'use client'

import { useState } from 'react'

interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

/**
 * Componente de imagen responsive que usa srcset con versiones pre-generadas
 * Selecciona automáticamente la versión óptima según el viewport
 * Incluye skeleton loader y transiciones suaves para mejor UX
 */
export function ResponsiveImage({ 
  src, 
  alt,
  className = '',
  priority = false,
  ...props 
}: ResponsiveImageProps) {
  const [error, setError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Si hay error, usar src original con fallback
  if (error || src.startsWith('http')) {
    return (
      <div className="relative w-full h-full">
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
          {...props}
        />
      </div>
    )
  }

  // Extraer nombre base y extensión
  const lastDot = src.lastIndexOf('.')
  const basePath = src.substring(0, lastDot)
  const extension = src.substring(lastDot)

  // Generar srcSet con las versiones responsive pre-generadas
  const srcSet = [
    `${basePath}-400w${extension} 400w`,
    `${basePath}-800w${extension} 800w`,
    `${basePath}-1200w${extension} 1200w`,
    `${basePath}-1600w${extension} 1600w`,
    `${src} 2000w`, // Original como fallback
  ].join(', ')

  // Sizes optimizados para diferentes viewports - móvil primero
  const sizes = props.sizes || '(max-width: 480px) 400px, (max-width: 768px) 800px, (max-width: 1280px) 1200px, 1600px'

  return (
    <div className="relative w-full h-full">
      {/* Skeleton loader mientras carga */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
      
      {/* Imagen con transición suave */}
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        {...props}
      />
    </div>
  )
}
