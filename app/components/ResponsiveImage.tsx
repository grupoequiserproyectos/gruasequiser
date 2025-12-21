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
 */
export function ResponsiveImage({ 
  src, 
  alt,
  className = '',
  priority = false,
  ...props 
}: ResponsiveImageProps) {
  const [error, setError] = useState(false)

  // Si hay error, usar src original
  if (error || src.startsWith('http')) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onError={() => setError(true)}
        {...props}
      />
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

  // Sizes optimizados para diferentes viewports
  const sizes = props.sizes || '(max-width: 640px) 400px, (max-width: 1024px) 800px, (max-width: 1536px) 1200px, 1600px'

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setError(true)}
      {...props}
    />
  )
}
