'use client'

import { useEffect } from 'react'
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals'

/**
 * Componente para reportar Core Web Vitals
 * Envía métricas tanto a Google Analytics como a endpoint interno
 * 
 * Métricas recolectadas:
 * - CLS: Cumulative Layout Shift
 * - INP: Interaction to Next Paint (antes FID)
 * - FCP: First Contentful Paint
 * - LCP: Largest Contentful Paint
 * - TTFB: Time to First Byte
 */
export function WebVitals() {
  useEffect(() => {
    // Función para enviar métricas
    function sendToAnalytics(metric: any) {
      const body = JSON.stringify({
        name: metric.name,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        id: metric.id,
        rating: metric.rating,
        delta: metric.delta,
        navigationType: metric.navigationType,
      })

      // Enviar a Google Analytics si está disponible
      if (typeof window !== 'undefined' && (window as any).gtag) {
        ;(window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        })
      }

      // Enviar a endpoint interno para análisis
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/web-vitals', body)
      } else {
        fetch('/api/web-vitals', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body,
          keepalive: true,
        }).catch((error) => {
          console.error('Error sending web vitals:', error)
        })
      }
    }

    // Registrar handlers para cada métrica
    try {
      onCLS(sendToAnalytics)
      onINP(sendToAnalytics) // INP reemplaza a FID en web-vitals v5
      onFCP(sendToAnalytics)
      onLCP(sendToAnalytics)
      onTTFB(sendToAnalytics)
    } catch (error) {
      console.error('Error registering web vitals handlers:', error)
    }
  }, [])

  return null // Este componente no renderiza nada
}
