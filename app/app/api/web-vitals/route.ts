import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

/**
 * API endpoint para recolectar métricas de Core Web Vitals
 * Almacena las métricas en un archivo JSON para análisis posterior
 */
export async function POST(request: NextRequest) {
  try {
    // Validar que el body no esté vacío
    const text = await request.text()
    if (!text || text.trim() === '') {
      return NextResponse.json(
        { error: 'Empty request body' },
        { status: 400 }
      )
    }

    // Intentar parsear el JSON
    let metric
    try {
      metric = JSON.parse(text)
    } catch (parseError) {
      console.error('Error parsing web vitals JSON:', parseError)
      return NextResponse.json(
        { error: 'Invalid JSON format' },
        { status: 400 }
      )
    }

    // Validar datos recibidos
    if (!metric.name || metric.value === undefined) {
      return NextResponse.json(
        { error: 'Invalid metric data' },
        { status: 400 }
      )
    }

    // Agregar timestamp y user agent
    const enrichedMetric = {
      ...metric,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'unknown',
      url: request.headers.get('referer') || 'unknown',
    }

    // Crear directorio de logs si no existe
    const logsDir = path.join(process.cwd(), 'logs')
    if (!existsSync(logsDir)) {
      await mkdir(logsDir, { recursive: true })
    }

    // Archivo de métricas
    const metricsFile = path.join(logsDir, 'web-vitals.json')
    let metrics = []

    // Leer métricas existentes
    if (existsSync(metricsFile)) {
      try {
        const data = await readFile(metricsFile, 'utf-8')
        metrics = JSON.parse(data)
      } catch (error) {
        console.error('Error reading metrics file:', error)
        metrics = []
      }
    }

    // Agregar nueva métrica
    metrics.push(enrichedMetric)

    // Limitar el archivo a las últimas 1000 métricas para no crecer indefinidamente
    if (metrics.length > 1000) {
      metrics = metrics.slice(-1000)
    }

    // Guardar métricas actualizadas
    await writeFile(metricsFile, JSON.stringify(metrics, null, 2), 'utf-8')

    // Log en consola para desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Web Vitals] ${metric.name}: ${metric.value} (${metric.rating})`, enrichedMetric)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing web vitals:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

/**
 * GET endpoint para obtener estadísticas de Web Vitals
 */
export async function GET() {
  try {
    const metricsFile = path.join(process.cwd(), 'logs', 'web-vitals.json')

    if (!existsSync(metricsFile)) {
      return NextResponse.json({ metrics: [] })
    }

    const data = await readFile(metricsFile, 'utf-8')
    const metrics = JSON.parse(data)

    // Calcular estadísticas por métrica
    // Nota: INP reemplaza a FID en web-vitals v5
    const stats = ['CLS', 'INP', 'FCP', 'LCP', 'TTFB'].reduce((acc: any, metricName) => {
      const metricValues = metrics
        .filter((m: any) => m.name === metricName)
        .map((m: any) => m.value)

      if (metricValues.length > 0) {
        acc[metricName] = {
          count: metricValues.length,
          avg: metricValues.reduce((a: number, b: number) => a + b, 0) / metricValues.length,
          min: Math.min(...metricValues),
          max: Math.max(...metricValues),
          p75: calculatePercentile(metricValues, 0.75),
          p90: calculatePercentile(metricValues, 0.90),
          p95: calculatePercentile(metricValues, 0.95),
        }
      }

      return acc
    }, {})

    return NextResponse.json({ stats, totalMetrics: metrics.length })
  } catch (error) {
    console.error('Error reading web vitals stats:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Función auxiliar para calcular percentiles
function calculatePercentile(values: number[], percentile: number): number {
  const sorted = [...values].sort((a, b) => a - b)
  const index = Math.ceil(sorted.length * percentile) - 1
  return sorted[index] || 0
}
