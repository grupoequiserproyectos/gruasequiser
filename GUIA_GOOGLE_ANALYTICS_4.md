# 📊 Guía Completa: Configuración de Google Analytics 4 (GA4) para GruasEquiser.com

**Última actualización:** Diciembre 2025  
**Tiempo de implementación:** 60-90 minutos  
**Nivel:** Intermedio-Avanzado  
**Objetivo:** Medir conversiones, ROI y comportamiento de usuarios en el sitio web

---

## 🎯 Objetivo de Esta Guía

Configurar Google Analytics 4 correctamente para:
- ✅ Medir tráfico web (orgánico, directo, referidos, social)
- ✅ Trackear conversiones (cotizaciones, llamadas, WhatsApp)
- ✅ Analizar comportamiento de usuarios (páginas vistas, tiempo en sitio)
- ✅ Calcular ROI de campañas de marketing
- ✅ Identificar páginas de alto rendimiento
- ✅ Optimizar continuamente la experiencia del usuario

---

## 🔑 PASO 1: Crear Propiedad de Google Analytics 4

### 1.1 Acceder a Google Analytics

1. **Ir a:** https://analytics.google.com
2. **Iniciar sesión** con tu cuenta de Google (recomendado: usar correo corporativo)
3. Si ya tienes una cuenta de GA:
   - Hacer clic en "Admin" (engranaje en la parte inferior izquierda)
   - Hacer clic en "Crear propiedad"
4. Si es tu primera vez:
   - Seguir el asistente de configuración

### 1.2 Configurar Propiedad

**Paso 1: Nombre de la propiedad**
- **Nombre:** `GruasEquiser.com - Venezuela`
- **Zona horaria:** `(GMT-04:00) Caracas`
- **Moneda:** `USD - Dólar estadounidense` (para reportes económicos)
- Hacer clic en "Siguiente"

**Paso 2: Detalles del negocio**
- **Sector:** "Industria"
- **Tamaño de la empresa:** "Pequeña" (1-99 empleados)
- **Objetivos:** Seleccionar:
  - ✅ "Generar clientes potenciales"
  - ✅ "Examinar el comportamiento del usuario"
- Hacer clic en "Crear"

**Paso 3: Aceptar Términos**
- Leer y aceptar los Términos de Servicio de Google Analytics
- País: Venezuela
- Hacer clic en "Acepto"

### 1.3 Configurar Flujo de Datos (Data Stream)

**Paso 1: Seleccionar plataforma**
- Hacer clic en "Web"

**Paso 2: Configurar flujo de datos web**
- **URL del sitio web:** `https://gruasequiser.com`
- **Nombre del flujo:** `GruasEquiser - Sitio Web Principal`
- **Medición mejorada:** ✅ **ACTIVAR** (recomendado)
  - Esto rastreará automáticamente:
    - Vistas de página
    - Scrolls (desplazamientos)
    - Clics salientes
    - Búsquedas en el sitio
    - Interacciones con videos
    - Descargas de archivos
- Hacer clic en "Crear flujo"

**Paso 3: Guardar Measurement ID**

Después de crear el flujo, verás un **Measurement ID** como:

```
G-XXXXXXXXXX
```

📝 **IMPORTANTE:** Copia este ID, lo necesitarás para la instalación en el sitio web.

---

## 💻 PASO 2: Instalar GA4 en el Sitio Web

### 2.1 Método 1: Instalación Manual (Recomendado para Next.js)

**Paso 1: Crear archivo de configuración**

Crear archivo: `/home/ubuntu/gruas_equiser_website/app/lib/analytics.ts`

```typescript
// lib/analytics.ts
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Eventos de conversión predefinidos
export const trackCotizacion = (source: string) => {
  event({
    action: 'cotizacion_enviada',
    category: 'Conversion',
    label: source,
    value: 50, // Valor estimado de una cotización
  });
};

export const trackWhatsApp = (message: string) => {
  event({
    action: 'whatsapp_click',
    category: 'Conversion',
    label: message,
    value: 30,
  });
};

export const trackLlamada = (phone: string) => {
  event({
    action: 'llamada_click',
    category: 'Conversion',
    label: phone,
    value: 40,
  });
};

export const trackEmail = (tipo: string) => {
  event({
    action: 'email_enviado',
    category: 'Conversion',
    label: tipo,
    value: 20,
  });
};

export const trackBlogView = (slug: string, readTime: number) => {
  event({
    action: 'blog_leido',
    category: 'Engagement',
    label: slug,
    value: readTime,
  });
};
```

**Paso 2: Agregar scripts de GA4 al layout principal**

Modificar archivo: `/home/ubuntu/gruas_equiser_website/app/app/layout.tsx`

```typescript
import Script from 'next/script';
import { GA_MEASUREMENT_ID } from '@/lib/analytics';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Google Analytics 4 */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
```

**Paso 3: Agregar variable de entorno**

Modificar archivo: `/home/ubuntu/gruas_equiser_website/app/.env`

```bash
# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

⚠️ **IMPORTANTE:** Reemplazar `G-XXXXXXXXXX` con tu Measurement ID real de GA4.

**Paso 4: Rebuild y Deploy**

```bash
cd /home/ubuntu/gruas_equiser_website/app
yarn build
# Desplegar a producción
```

### 2.2 Verificar Instalación

**Opción 1: En tiempo real en GA4**

1. En GA4, ir a: **Informes → Tiempo real**
2. Abrir en otra pestaña: https://gruasequiser.com
3. Navegar por varias páginas
4. En GA4, deberías ver:
   - 🟢 "1 usuario activo" (o más)
   - Páginas vistas en tiempo real
   - Ubicación geográfica (Venezuela)

**Opción 2: Con Google Tag Assistant (Chrome Extension)**

1. Instalar: https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk
2. Abrir: https://gruasequiser.com
3. Hacer clic en el icono de Tag Assistant
4. Deberías ver: ✅ "Google Analytics: GA4" detectado

---

## 🎯 PASO 3: Configurar Conversiones (Goals)

### 3.1 ¿Qué son las Conversiones?

En GA4, las **conversiones** son acciones valiosas que los usuarios realizan en tu sitio:
- 📞 Enviar formulario de cotización
- 📱 Hacer clic en WhatsApp
- ✉️ Enviar email
- 📞 Hacer clic en número de teléfono
- 📚 Leer blog completo (+30 segundos)

Cada conversión tiene un **valor económico** asignado para calcular ROI.

### 3.2 Conversiones Predefinidas para GruasEquiser

#### Conversión 1: Cotización Completada 📊

**Evento personalizado:** `cotizacion_enviada`

**Cómo configurar:**

1. En GA4, ir a: **Configurar → Eventos**
2. Hacer clic en "Crear evento"
3. Configurar:
   - **Nombre del evento personalizado:** `cotizacion_enviada`
   - **Condiciones coincidentes:** Ninguna (se envía manualmente desde el código)
4. Guardar
5. **Marcar como conversión:**
   - En la lista de eventos, buscar `cotizacion_enviada`
   - Activar el switch "Marcar como conversión"

**Valor económico:** $50 USD  
**Justificación:** Cada cotización tiene ~20% de probabilidad de convertir en proyecto de $250-$500 USD promedio.

**Implementación en el código:**

En el componente `ContactForm` (`/home/ubuntu/gruas_equiser_website/app/components/contact-form.tsx`):

```typescript
import { trackCotizacion } from '@/lib/analytics';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // ... lógica de envío del formulario ...
  
  if (response.ok) {
    // Trackear conversión en GA4
    trackCotizacion('formulario_contacto');
    
    // ... resto del código ...
  }
};
```

---

#### Conversión 2: Click en WhatsApp 📱

**Evento personalizado:** `whatsapp_click`

**Cómo configurar:**

1. En GA4, ir a: **Configurar → Eventos**
2. Hacer clic en "Crear evento"
3. Configurar:
   - **Nombre del evento personalizado:** `whatsapp_click`
4. Marcar como conversión

**Valor económico:** $30 USD  
**Justificación:** Los leads por WhatsApp tienen ~15% de tasa de conversión.

**Implementación:**

En el componente `WhatsappWidget` (`/home/ubuntu/gruas_equiser_website/app/components/whatsapp-widget.tsx`):

```typescript
import { trackWhatsApp } from '@/lib/analytics';

const handleWhatsAppClick = (message: string) => {
  trackWhatsApp(message);
  window.open(`https://wa.me/584143521948?text=${encodeURIComponent(message)}`, '_blank');
};
```

---

#### Conversión 3: Click en Teléfono 📞

**Evento personalizado:** `llamada_click`

**Cómo configurar:**

1. En GA4, ir a: **Configurar → Eventos**
2. Hacer clic en "Crear evento"
3. Configurar:
   - **Nombre del evento personalizado:** `llamada_click`
4. Marcar como conversión

**Valor económico:** $40 USD  
**Justificación:** Las llamadas directas tienen ~25% de tasa de conversión (más alto que WhatsApp).

**Implementación:**

En el componente `ContactSection` (`/home/ubuntu/gruas_equiser_website/app/components/contact-section.tsx`):

```typescript
import { trackLlamada } from '@/lib/analytics';

const handleLlamadaClick = () => {
  trackLlamada('+58-414-352-1948');
};

// En el JSX:
<a 
  href="tel:+584143521948" 
  onClick={handleLlamadaClick}
  className="..."
>
  <Phone className="w-5 h-5" />
  +58 414-352-1948
</a>
```

---

#### Conversión 4: Email Enviado ✉️

**Evento personalizado:** `email_enviado`

**Cómo configurar:**

1. En GA4, ir a: **Configurar → Eventos**
2. Hacer clic en "Crear evento"
3. Configurar:
   - **Nombre del evento personalizado:** `email_enviado`
4. Marcar como conversión

**Valor económico:** $20 USD  
**Justificación:** Los emails tienen ~10% de tasa de conversión (más baja pero aún valiosa).

---

#### Conversión 5: Lectura Completa de Blog 📚

**Evento personalizado:** `blog_leido`

**Cómo configurar:**

1. En GA4, ir a: **Configurar → Eventos**
2. Hacer clic en "Crear evento"
3. Configurar:
   - **Nombre del evento personalizado:** `blog_leido`
   - **Condiciones coincidentes:**
     - `event_name` igual a `blog_leido`
     - `engagement_time_msec` mayor que 30000 (30 segundos)
4. Marcar como conversión

**Valor económico:** $5 USD  
**Justificación:** Los usuarios que leen blogs completos son prospectos educados más propensos a convertir.

**Implementación:**

En el componente `BlogArticlePage` (`/home/ubuntu/gruas_equiser_website/app/components/blog/blog-article-page.tsx`):

```typescript
import { trackBlogView } from '@/lib/analytics';
import { useEffect } from 'react';

const BlogArticlePage = ({ article }: { article: BlogArticle }) => {
  useEffect(() => {
    // Trackear después de 30 segundos
    const timer = setTimeout(() => {
      trackBlogView(article.slug, article.readTime || 5);
    }, 30000);

    return () => clearTimeout(timer);
  }, [article.slug, article.readTime]);

  // ... resto del componente ...
};
```

---

### 3.3 Verificar que las Conversiones Funcionan

**Método 1: Modo de depuración (DebugView)**

1. Instalar extensión: **Google Analytics Debugger** (Chrome)
2. Activar la extensión
3. Abrir: https://gruasequiser.com
4. En GA4, ir a: **Configurar → DebugView**
5. Realizar una acción (ej: hacer clic en WhatsApp)
6. Deberías ver el evento `whatsapp_click` en DebugView

**Método 2: Informes en tiempo real**

1. En GA4, ir a: **Informes → Tiempo real → Evento por nombre**
2. Realizar una conversión (ej: enviar formulario)
3. En 10-30 segundos, deberías ver el evento `cotizacion_enviada`

---

## 📈 PASO 4: Crear Informes Personalizados

### 4.1 Informe de Conversiones SEO

**Objetivo:** Ver cuántas conversiones vienen del tráfico orgánico de Google.

**Cómo crear:**

1. En GA4, ir a: **Explorar**
2. Hacer clic en "Exploración libre"
3. **Técnica:**
   - Nombre: "Conversiones por Canal (SEO Focus)"
4. **Dimensiones:**
   - Agregar: `Canal de sesión predeterminado`
   - Agregar: `Nombre del evento`
5. **Métricas:**
   - Agregar: `Conversiones`
   - Agregar: `Recuento de eventos`
   - Agregar: `Valor del evento`
6. **Filtros:**
   - Filtro: `Nombre del evento` contiene "cotizacion" o "whatsapp" o "llamada"
7. **Visualización:** Tabla
8. Guardar informe

**Qué analizar:**
- ✅ Cuántas conversiones vienen de "Organic Search" (Google)
- ✅ Valor total de conversiones orgánicas
- ✅ Comparar con "Direct", "Referral", "Social"

---

### 4.2 Informe de Páginas de Alto Rendimiento

**Objetivo:** Identificar qué blogs/páginas generan más conversiones.

**Cómo crear:**

1. En GA4, ir a: **Explorar → Exploración libre**
2. **Nombre:** "Páginas con Más Conversiones"
3. **Dimensiones:**
   - Agregar: `Título de la página`
   - Agregar: `Ruta de la página`
4. **Métricas:**
   - Agregar: `Vistas`
   - Agregar: `Conversiones`
   - Agregar: `Tasa de conversión`
5. **Ordenar por:** `Conversiones` (descendente)
6. Guardar informe

**Qué analizar:**
- ✅ Qué blogs generan más cotizaciones
- ✅ Qué páginas tienen mejor tasa de conversión
- ✅ Replicar estrategia en otros contenidos

---

### 4.3 Informe de Embudo de Conversión

**Objetivo:** Ver el viaje del usuario desde la entrada hasta la conversión.

**Cómo crear:**

1. En GA4, ir a: **Explorar → Exploración de embudo**
2. **Nombre:** "Embudo de Cotización"
3. **Pasos del embudo:**
   - **Paso 1:** `first_visit` (Primera visita)
   - **Paso 2:** `page_view` con ruta `/blog/*` (Lectura de blog)
   - **Paso 3:** `page_view` con ruta `/contacto` (Visita a contacto)
   - **Paso 4:** `cotizacion_enviada` (Conversión final)
4. **Desgloses:** `Canal de sesión predeterminado`
5. Guardar informe

**Qué analizar:**
- ✅ En qué paso los usuarios abandonan más
- ✅ Tasa de conversión por canal (SEO vs Direct)
- ✅ Optimizar pasos con alta tasa de abandono

---

## 📄 PASO 5: Configurar Dashboard de SEO

### 5.1 Crear Dashboard en Looker Studio (Recomendado)

**Ventajas:**
- ✅ Visualizaciones personalizadas e interactivas
- ✅ Combina datos de GA4 + GSC + otras fuentes
- ✅ Actualización automática
- ✅ Compartible con equipo

**Pasos:**

1. **Ir a:** https://lookerstudio.google.com
2. **Hacer clic en:** "Crear" → "Informe"
3. **Conectar fuente de datos:**
   - Buscar: "Google Analytics 4"
   - Seleccionar propiedad: `GruasEquiser.com - Venezuela`
   - Hacer clic en "Agregar"

4. **Agregar segunda fuente de datos:**
   - Agregar datos → "Search Console"
   - Seleccionar propiedad: `gruasequiser.com`
   - Hacer clic en "Agregar"

### 5.2 Métricas Clave para el Dashboard SEO

#### Sección 1: Resumen de Tráfico

**Métricas (cuadros grandes):**
- 👥 **Usuarios totales** (mes actual)
- 📈 **Sesiones orgánicas** (solo Google)
- 👆 **Clics desde Google** (GSC)
- 👀 **Impresiones en Google** (GSC)
- 🎯 **CTR promedio** (GSC)
- 🏆 **Posición promedio** (GSC)

**Comparación:** Mes actual vs mes anterior (% de cambio)

---

#### Sección 2: Conversiones y ROI

**Métricas:**
- 📊 **Conversiones totales**
  - Desglose: Cotizaciones, WhatsApp, Llamadas, Emails
- 💰 **Valor total de conversiones** (USD)
- 🎯 **Tasa de conversión general** (%)
- 📈 **Conversiones orgánicas** (solo de Google)

**Gráfico:** Línea temporal de conversiones (diarias, últimos 30 días)

---

#### Sección 3: Top 10 Keywords (GSC)

**Tabla:**

| Keyword | Clics | Impresiones | CTR | Posición |
|---------|-------|-------------|-----|----------|
| alquiler grúas venezuela | 150 | 3,200 | 4.7% | 8.2 |
| grúas industriales | 120 | 2,800 | 4.3% | 9.5 |
| ... | ... | ... | ... | ... |

**Ordenar por:** Clics (descendente)

---

#### Sección 4: Top 10 Páginas

**Tabla:**

| Página | Usuarios | Conversiones | Tasa Conv. | Valor |
|---------|----------|--------------|-----------|-------|
| /blog/costo-alquiler-grua | 850 | 12 | 1.4% | $600 |
| /blog/gruas-600-toneladas | 720 | 8 | 1.1% | $400 |
| ... | ... | ... | ... | ... |

---

#### Sección 5: Embudo de Conversiones

**Visualización de embudo:**

```
Visitantes totales: 5,000
    ↓ 80%
Vieron blog: 4,000
    ↓ 30%
Visitaron contacto: 1,200
    ↓ 5%
Enviaron cotización: 60
```

---

#### Sección 6: Fuentes de Tráfico

**Gráfico de pastel:**

- 🟢 **Organic Search (Google):** 45%
- 🔵 **Direct:** 30%
- 🟡 **Referral:** 15%
- 🟪 **Social:** 8%
- 🟣 **Email:** 2%

---

## ⚠️ PASO 6: Configurar Alertas Automáticas

### 6.1 Crear Alerta de Caída de Tráfico

**Objetivo:** Recibir email si el tráfico orgánico cae más de 30%.

**Pasos:**

1. En GA4, ir a: **Admin → Alertas personalizadas**
2. Hacer clic en "Crear alerta personalizada"
3. **Configurar:**
   - **Nombre:** "Caída de Tráfico Orgánico Crítica"
   - **Período:** Día
   - **Segmento:** Tráfico de búsqueda orgánica
   - **Condición:**
     - Métrica: `Usuarios`
     - Operador: `Disminuye más de`
     - Porcentaje: `30%`
     - Comparar con: `Día anterior`
   - **Notificaciones:**
     - ✅ Enviar email
     - Destinatario: gerencia@equiser.com.ve
4. Guardar alerta

---

### 6.2 Crear Alerta de Pico de Conversiones

**Objetivo:** Notificar cuando las conversiones aumentan (para identificar contenido de éxito).

**Pasos:**

1. En GA4, ir a: **Admin → Alertas personalizadas**
2. Hacer clic en "Crear alerta personalizada"
3. **Configurar:**
   - **Nombre:** "Pico de Conversiones (Oportunidad)"
   - **Período:** Día
   - **Condición:**
     - Métrica: `Conversiones`
     - Operador: `Aumenta más de`
     - Porcentaje: `50%`
     - Comparar con: `Promedio de la semana anterior`
   - **Notificaciones:**
     - ✅ Enviar email
     - Destinatario: gerencia@equiser.com.ve
4. Guardar alerta

---

## 📚 PASO 7: Integración con Google Search Console

### 7.1 Conectar GSC con GA4

**Ventajas:**
- ✅ Ver datos de keywords de GSC en GA4
- ✅ Combinar impresiones de Google con conversiones
- ✅ Análisis unificado de SEO

**Pasos:**

1. **En GA4, ir a:** Admin → Configuración de la propiedad
2. **Buscar:** "Asociaciones de Search Console"
3. **Hacer clic en:** "Asociar"
4. **Seleccionar propiedad de GSC:** gruasequiser.com
5. **Confirmar asociación**
6. **Verificar conexión:**
   - Ir a: Informes → Adquisición → "Search Console"
   - Deberías ver datos de keywords

---

## 📊 PASO 8: Métricas de Éxito (KPIs)

### 8.1 KPIs Mensuales (Objetivos 30 Días)

| Métrica | Objetivo Mes 1 | Objetivo Mes 3 | Objetivo Mes 6 |
|---------|---------------|---------------|---------------|
| **Usuarios totales** | 1,000 | 3,000 | 8,000 |
| **Usuarios orgánicos** | 400 (40%) | 1,500 (50%) | 4,800 (60%) |
| **Conversiones totales** | 15 | 50 | 120 |
| **Tasa de conversión** | 1.5% | 1.7% | 1.5% |
| **Valor de conversiones** | $750 | $2,500 | $6,000 |
| **CTR en Google (GSC)** | 2.5% | 3.5% | 4.5% |
| **Posición promedio (GSC)** | 25 | 15 | 10 |

### 8.2 KPIs de Contenido (Blogs)

| Métrica | Objetivo Mes 1 | Objetivo Mes 3 |
|---------|---------------|---------------|
| **Blogs publicados** | 31 | 60+ |
| **Usuarios en /blog/** | 500 | 2,000 |
| **Tiempo promedio en blog** | 2 min | 3 min |
| **Blogs leídos completos** | 50 | 200 |
| **Conversiones desde blogs** | 5 | 20 |

---

## 🛠️ PASO 9: Mantenimiento y Optimización

### 9.1 Rutina Semanal (30 minutos)

**Lunes (15 min):**
- [ ] Revisar conversiones de la semana pasada
- [ ] Identificar página con más conversiones
- [ ] Revisar fuentes de tráfico (orgánico, directo, referral)

**Miércoles (15 min):**
- [ ] Revisar "Tiempo real" para verificar que GA4 sigue funcionando
- [ ] Revisar embudo de conversiones
- [ ] Identificar punto de mayor abandono

### 9.2 Rutina Mensual (2 horas)

**Primera semana del mes:**
- [ ] Exportar informe mensual (usuarios, conversiones, valor)
- [ ] Comparar con mes anterior
- [ ] Identificar top 5 blogs con más conversiones
- [ ] Crear 3-5 blogs similares
- [ ] Revisar alertas (si hubo caídas de tráfico)
- [ ] Actualizar dashboard de Looker Studio
- [ ] Compartir informe con equipo

---

## 📝 Checklist de Verificación Post-Configuración

### Verificación Inicial (Día 1)

- [ ] ✅ Propiedad GA4 creada exitosamente
- [ ] ✅ Measurement ID agregado al .env
- [ ] ✅ Scripts de GA4 instalados en layout.tsx
- [ ] ✅ Archivo analytics.ts creado
- [ ] ✅ Verificado en "Tiempo real" (1+ usuarios activos)
- [ ] ✅ Eventos de conversión creados (5 conversiones)
- [ ] ✅ Alertas configuradas (caída de tráfico, pico de conversiones)

### Verificación Semanal 1 (Día 7)

- [ ] 📊 Primeros datos de conversiones visibles
- [ ] 📊 Al menos 1 evento de conversión registrado
- [ ] 📊 Dashboard de Looker Studio creado
- [ ] 📊 Integración con GSC completada

### Verificación Mensual (Día 30)

- [ ] 🎯 100+ eventos de conversión registrados
- [ ] 🎯 Valor de conversiones > $500 USD
- [ ] 🎯 Top 3 páginas de conversión identificadas
- [ ] 🎯 Informe mensual exportado y compartido

---

## ⚠️ Problemas Comunes y Soluciones

### Problema 1: "No veo datos en GA4"

**Causa:** Script no instalado correctamente o bloqueado por AdBlock

**Solución:**
- Verificar que `NEXT_PUBLIC_GA_MEASUREMENT_ID` está en .env
- Verificar que el sitio está desplegado (yarn build)
- Probar en modo incógnito (sin extensiones)
- Revisar "DebugView" en GA4

### Problema 2: "Las conversiones no se registran"

**Causa:** Evento no marcado como conversión en GA4

**Solución:**
- Ir a: Configurar → Eventos
- Buscar el evento (ej: `cotizacion_enviada`)
- Activar el switch "Marcar como conversión"
- Esperar 24 horas para que se aplique

### Problema 3: "Los valores de conversión no aparecen"

**Causa:** No se está enviando el parámetro `value` en el evento

**Solución:**
- Verificar que en `analytics.ts`, el evento incluye `value`:
```typescript
gtag('event', action, {
  event_category: category,
  event_label: label,
  value: value, // <- IMPORTANTE
});
```

---

## 📞 Contacto y Soporte

**Soporte Técnico EQUISER:**
- 📱 WhatsApp: +58 414-352-1948
- ✉️ Email: gerencia@equiser.com.ve
- 📞 Teléfono: +58 242-874-3521

**Documentación Oficial de Google:**
- **GA4 Help Center:** https://support.google.com/analytics/answer/9304153
- **GA4 Setup Guide:** https://support.google.com/analytics/answer/9304153
- **Events Reference:** https://support.google.com/analytics/answer/9267735

---

**Última actualización:** Diciembre 31, 2023  
**Versión:** 1.0  
**Autor:** Equipo Técnico EQUISER C.A.  

---

## 🎯 Resumen: Acciones Inmediatas (60 Minutos)

### Acción 1: Crear Propiedad GA4 (15 min)
- [ ] Acceder a https://analytics.google.com
- [ ] Crear propiedad: GruasEquiser.com
- [ ] Guardar Measurement ID: G-XXXXXXXXXX

### Acción 2: Instalar en Sitio Web (20 min)
- [ ] Crear lib/analytics.ts
- [ ] Modificar app/layout.tsx
- [ ] Agregar NEXT_PUBLIC_GA_MEASUREMENT_ID al .env
- [ ] yarn build y desplegar

### Acción 3: Configurar Conversiones (15 min)
- [ ] Crear 5 eventos de conversión
- [ ] Marcarlos como conversiones en GA4
- [ ] Implementar trackeo en componentes

### Acción 4: Verificar Funcionamiento (10 min)
- [ ] Revisar "Tiempo real" en GA4
- [ ] Hacer una acción de conversión (ej: WhatsApp)
- [ ] Verificar que el evento aparece

✅ **Completado:** GA4 está configurado y midiendo conversiones correctamente.
