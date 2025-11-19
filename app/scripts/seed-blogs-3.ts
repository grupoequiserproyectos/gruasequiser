import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';

config();
const prisma = new PrismaClient();

const blogs = [
  {
    title: "¿Cuánto Cuesta Alquilar una Grúa en Venezuela?",
    slug: "costo-alquiler-grua-venezuela",
    excerpt: "Guía completa sobre los costos de alquiler de grúas en Venezuela. Factores que afectan los precios, tarifas por capacidad y cómo optimizar tu presupuesto.",
    content: `# ¿Cuánto Cuesta Alquilar una Grúa en Venezuela?

El costo de alquiler de grúas en Venezuela varía significativamente según múltiples factores. En EQUISER, ofrecemos transparencia total en nuestras tarifas y te ayudamos a optimizar tu inversión.

## Rangos de Precios por Capacidad

### Grúas Móviles

**65-100 Toneladas:**
- Día (8 horas): $800 - $1,200 USD
- Semana: $4,500 - $6,500 USD
- Mes: $15,000 - $22,000 USD

**130-200 Toneladas:**
- Día: $1,200 - $1,800 USD
- Semana: $6,500 - $10,000 USD
- Mes: $22,000 - $35,000 USD

**250-300 Toneladas:**
- Día: $2,000 - $3,000 USD
- Semana: $11,000 - $16,000 USD
- Mes: $38,000 - $55,000 USD

### Grúas de Oruga

**300-500 Toneladas:**
- Mes: $30,000 - $50,000 USD

**600-800 Toneladas:**
- Mes: $50,000 - $80,000 USD

## Factores que Afectan el Costo

### 1. Duración del Proyecto

Los alquileres extendidos ofrecen mejores tarifas:
- **Por día:** Tarifa completa
- **Semanal:** 15-20% descuento vs diario
- **Mensual:** 30-40% descuento vs diario

### 2. Ubicación

**Zonas Cercanas a Bases (Barcelona, Puerto La Cruz):**
- Movilización: $1,000 - $2,500 USD

**Zonas Distantes (Maracaibo, Puerto Ordaz):**
- Movilización: $3,500 - $7,000 USD

**Áreas Remotas:**
- Movilización: $7,000 - $15,000 USD

### 3. Complejidad de la Operación

**Operaciones Estándar:**
- Tarifa base incluye operador y equipo básico

**Operaciones Críticas o Especiales:**
- Ingeniería especializada: +$2,000 - $5,000 USD
- Supervisión adicional: +$500 - $1,000 USD/día
- Seguros especiales: +2-5% del valor de alquiler

### 4. Equipamiento Adicional

**Accesorios Especializados:**
- Jib auxiliar: +10-15% tarifa base
- Contrapesos adicionales: +$500 - $1,500 USD
- Plataformas de distribución: $200 - $500 USD c/u
- Equipos de rigging especial: Variable según necesidad

## Costos Incluidos y Excluidos

### Típicamente Incluido

✅ Grúa completamente operativa
✅ Operador certificado
✅ Riggers y señaleros (según capacidad)
✅ Mantenimiento preventivo diario
✅ Seguros de responsabilidad civil básica
✅ Comunicaciones (radios)
✅ Equipos de seguridad personal (EPP)

### Típicamente No Incluido

❌ Combustible (diésel)
❌ Movilización y desmovilización
❌ Preparación del terreno
❌ Permisos municipales
❌ Seguros de carga (responsabilidad del cliente)
❌ Horas extras (fuera de jornada estándar)
❌ Ingeniería especializada del cliente

## Estrategias para Optimizar Costos

### 1. Planificación Anticipada

**Reserva con 3-4 semanas de antelación:**
- Acceso a mejores tarifas
- Garantía de disponibilidad
- Tiempo para planificación técnica detallada
- Evita cargos por urgencia (+20-30%)

### 2. Consolidación de Actividades

**Agrupa múltiples izamientos:**
- Amortiza costos de movilización
- Aprovecha tarifas por período
- Reduce tiempos muertos
- Mayor eficiencia operacional

### 3. Preparación Previa

**Antes de la llegada del equipo:**
- Terreno preparado y compactado
- Permisos tramitados
- Cargas listas y verificadas
- Personal de coordinación designado

**Ahorro estimado:** 10-20% en tiempo de alquiler

### 4. Elección Correcta de Capacidad

**Evita:**
- Sobredimensionar (pagar por capacidad no utilizada)
- Subdimensionar (operación insegura o imposible)

**Solución:** Consulta técnica gratuita con EQUISER

### 5. Alquileres de Mediano Plazo

**Punto óptimo:** 2-4 semanas
- Tarifa semanal vs diaria: 25-35% ahorro
- Flexibilidad para imprevistos
- Sin presión de tiempo excesiva

## Comparación de Costos: Alquiler vs Compra

### Análisis de Punto de Equilibrio

**Grúa Móvil 130 Toneladas:**

**Costo de Adquisición:**
- Equipo nuevo: $800,000 - $1,200,000 USD
- Equipo usado (5-10 años): $400,000 - $700,000 USD

**Costos Operacionales Anuales (Propiedad):**
- Mantenimiento: $40,000 - $60,000 USD
- Operador y personal: $50,000 - $80,000 USD
- Seguros: $15,000 - $25,000 USD
- Almacenamiento: $10,000 - $15,000 USD
- Depreciación (10 años): $80,000 - $120,000 USD
- **Total Anual:** ~$195,000 - $300,000 USD

**Costo de Alquiler Anual (si usas 6 meses/año):**
- 6 meses × $25,000 USD/mes = $150,000 USD

**Conclusión:** El alquiler es más económico si utilizas el equipo menos de 8-10 meses al año.

### Beneficios Adicionales del Alquiler

1. **Sin Depreciación:** El activo no pierde valor en tus libros
2. **Tecnología Actualizada:** Acceso a equipos modernos
3. **Flexibilidad:** Diferentes equipos para diferentes proyectos
4. **Sin Mantenimiento:** Responsabilidad del proveedor
5. **Deducción Fiscal:** 100% deducible como gasto operacional

## Casos Prácticos

### Caso 1: Construcción de Nave Industrial

**Proyecto:** Montaje de estructura metálica, 45 días

**Requerimiento:** Grúa móvil 130 toneladas

**Cotización:**
- Alquiler mensual: $24,000 USD × 1.5 meses = $36,000 USD
- Movilización: $2,500 USD
- Combustible estimado: $3,500 USD
- **Total: $42,000 USD**

**vs Alquiler Diario:**
- 45 días × $1,400 USD = $63,000 USD
- **Ahorro: $21,000 USD (33%)**

### Caso 2: Instalación de Transformador

**Proyecto:** Instalación única, 2 días

**Requerimiento:** Grúa móvil 200 toneladas

**Cotización:**
- Alquiler 2 días: $3,000 USD
- Movilización: $2,800 USD
- **Total: $5,800 USD**

**Análisis:** Para proyectos cortos, el costo de movilización representa un porcentaje alto. Considerar:
- Agrupar con otros trabajos
- Negociar tarifa por proyecto
- Planificar múltiples instalaciones en mismo período

### Caso 3: Parada de Planta Petrolera

**Proyecto:** Mantenimiento mayor, 30 días

**Requerimiento:** 2 grúas (200 ton + 130 ton)

**Cotización:**
- Grúa 200 ton: $35,000 USD/mes
- Grúa 130 ton: $25,000 USD/mes
- Movilización (ambas): $6,000 USD
- **Total: $66,000 USD**

**Descuento por Volumen:** -10% = **$59,400 USD**

## Formas de Pago

### Modalidades Aceptadas

**Proyectos Pequeños (<$20,000 USD):**
- 50% anticipo
- 50% al finalizar

**Proyectos Medianos ($20,000 - $100,000 USD):**
- 40% anticipo
- 30% a mitad de proyecto
- 30% al finalizar

**Proyectos Grandes (>$100,000 USD):**
- 30% anticipo
- Pagos quincenales o mensuales
- 10% retención (30 días post-servicio)

### Métodos de Pago

- Transferencia bancaria (USD o BS)
- Cheques (solo clientes corporativos establecidos)
- Letras de cambio (proyectos largos)

## Preguntas Frecuentes sobre Costos

**¿Los precios son negociables?**

Sí, especialmente para:
- Proyectos de larga duración
- Clientes recurrentes
- Múltiples equipos
- Temporada baja

**¿Qué pasa si el proyecto se extiende?**

Se aplican tarifas pro-rata basadas en la tarifa del período contratado. Extensiones planificadas pueden negociarse con descuento.

**¿Hay penalidades por cancelación?**

- Cancelación 7+ días antes: Sin penalidad
- Cancelación 3-7 días: 25% del valor
- Cancelación < 3 días: 50% del valor
- Cancelación después de movilización: 100% del valor

**¿El IVA está incluido?**

Los precios indicados son base imponible. Se aplica IVA según normativa vigente (actualmente 16% en Venezuela).

**¿Ofrecen financiamiento?**

Para clientes corporativos establecidos, ofrecemos términos de pago extendidos. Consulta con nuestro departamento comercial.

## Cómo Obtener una Cotización

### Información Necesaria

Para una cotización precisa, proporciona:

1. **Descripción del Proyecto:**
   - Tipo de obra
   - Ubicación exacta
   - Duración estimada

2. **Especificaciones Técnicas:**
   - Peso de las cargas
   - Altura de izamiento
   - Radio de operación
   - Número de izamientos

3. **Cronograma:**
   - Fecha de inicio
   - Duración
   - Horarios especiales

4. **Información del Sitio:**
   - Condiciones del terreno
   - Accesos disponibles
   - Restricciones conocidas

### Tiempo de Respuesta

- **Cotizaciones estándar:** 24-48 horas
- **Cotizaciones complejas:** 3-5 días hábiles
- **Emergencias:** Mismo día (sujeto a disponibilidad)

## Contacta a EQUISER

¿Necesitas una cotización personalizada para tu proyecto? Nuestro equipo comercial está listo para asesorarte.

📞 **Teléfono:** +58 422-6347624  
📧 **Email:** ventas@equiser.com  
💬 **WhatsApp:** [Solicitar Cotización](https://wa.me/message/IOBBJVBBVWNOI1)  
🌐 **Web:** www.gruasequiser.com

### Oficinas

**Casa Matriz - Barcelona:**
Zona Industrial, Barcelona, Estado Anzoátegui

**Horario de Atención:**
- Lunes a Viernes: 7:00 AM - 5:00 PM
- Sábados: 8:00 AM - 12:00 PM
- Emergencias 24/7: Disponible

---

*EQUISER - Transparencia y Valor en Servicios de Grúas Industriales*`,
    featuredImage: "/images/costo-alquiler-grua-venezuela.png",
    category: "Servicios de Grúas",
    tags: ["costos grúas", "alquiler grúas", "precios Venezuela", "cotización", "presupuesto"],
    author: "Lcdo. Fernando Torres - EQUISER",
    readTime: 10,
    metaTitle: "¿Cuánto Cuesta Alquilar una Grúa en Venezuela? | Precios 2024",
    metaDescription: "Guía completa de costos de alquiler de grúas en Venezuela. Tarifas por capacidad, factores que afectan precios y estrategias para optimizar tu presupuesto.",
    keywords: ["costo alquiler grúas Venezuela", "precio grúas", "tarifas alquiler equipos", "presupuesto grúas", "EQUISER"],
    published: true,
    featured: true,
    publishedAt: new Date("2024-11-18")
  },
  {
    title: "Transporte de Carga Sobredimensionada en Venezuela",
    slug: "transporte-carga-sobredimensionada",
    excerpt: "Todo lo que necesitas saber sobre el transporte de carga sobredimensionada en Venezuela: permisos, equipos especializados, normativas y procesos con EQUISER.",
    content: `# Transporte de Carga Sobredimensionada en Venezuela

El **transporte de carga sobredimensionada** es un servicio especializado que requiere equipos, permisos y experiencia técnica. En EQUISER, hemos transportado miles de toneladas de equipos industriales por toda Venezuela con éxito total.

## ¿Qué es Carga Sobredimensionada?

### Definición Legal

En Venezuela, se considera carga sobredimensionada aquella que excede:

**Dimensiones:**
- Ancho: > 2.60 metros
- Alto: > 4.20 metros
- Largo: > 18.00 metros

**Peso:**
- Peso Bruto Vehicular: > 40 toneladas

### Tipos Comunes

1. **Transformadores Eléctricos** (50-200 ton)
2. **Reactores Industriales** (100-500 ton)
3. **Generadores** (80-300 ton)
4. **Estructuras Metálicas** prefabricadas
5. **Equipos de Proceso** para plantas industriales

## Equipos de Transporte Especializados

### Camas Bajas Modulares

**Configuraciones Disponibles:**

**6+2 Ejes (hasta 100 toneladas):**
- Largo de plataforma: 12-15 metros
- Ancho: 3.0-3.5 metros
- Altura de plataforma: 0.90-1.20 metros

**8+4 Ejes (100-200 toneladas):**
- Largo de plataforma: 15-20 metros
- Ancho: 3.5-4.0 metros
- Configuración modular ajustable

**Modular Multi-Eje (200-500 toneladas):**
- Configuración personalizada
- Hasta 24+ ejes
- Control hidráulico de altura
- Sistemas de dirección asistida

### Características Técnicas

**Sistema Hidráulico:**
- Suspensión hidráulica independiente
- Nivelación automática
- Ajuste de altura (0.6-1.5 metros)
- Distribución uniforme de carga

**Sistema de Dirección:**
- Dirección hidráulica en ejes traseros
- Radio de giro reducido
- Modos de giro (normal, crab, combinado)
- Control remoto inalámbrico

**Seguridad:**
- Frenos ABS
- Sistema de anclaje reforzado
- Iluminación perimetral LED
- Señalización reflectiva

## Proceso de Transporte

### Fase 1: Evaluación y Planificación

**Inspección Inicial:**
- Medición precisa de la carga
- Cálculo de peso y centro de gravedad
- Análisis de puntos de amarre
- Documentación fotográfica

**Estudio de Ruta:**
- Verificación de puentes (capacidad de carga)
- Medición de alturas libres (cables, puentes)
- Análisis de anchos de vía
- Identificación de puntos críticos
- Radios de giro en intersecciones

**Selección de Equipo:**
- Capacidad adecuada
- Configuración óptima
- Accesorios necesarios

### Fase 2: Permisos y Autorizaciones

**Documentación Requerida:**

**A Nivel Nacional:**
- Permiso del MPPTRANSPORTE (Ministerio del Poder Popular para el Transporte)
- Autorización del Instituto Nacional de Transporte Terrestre (INTT)
- Permiso de CORPOELEC (si se afectan líneas eléctricas)

**A Nivel Regional:**
- Permisos de gobernaciones
- Autorizaciones de alcaldías
- Coordinación con policías de tránsito

**Documentación de Carga:**
- Manifiesto de carga
- Certificado de origen/destino
- Póliza de seguro
- Planos y especificaciones

**Tiempo de Tramitación:** 7-15 días hábiles

### Fase 3: Preparación de la Carga

**Aseguramiento:**
- Selección de puntos de amarre
- Cadenas de alta resistencia
- Tensores hidráulicos
- Protecciones en puntos de contacto

**Estabilización:**
- Calzos y soportes
- Balanceo de peso
- Prevención de movimientos
- Cuñas de seguridad

**Protección:**
- Cobertores contra intemperie
- Protección de superficies delicadas
- Señalización perimetral
- Iluminación nocturna

### Fase 4: Ejecución del Transporte

**Conformación del Convoy:**

**Vanguardia:**
- 1-2 vehículos piloto con señalización
- Comunicación con autoridades
- Despeje de ruta

**Unidad de Transporte:**
- Tractor de alta potencia (500-700 HP)
- Cama baja con carga asegurada
- Operador especializado
- Comunicación permanente

**Retaguardia:**
- Vehículo de escolta
- Iluminación adicional
- Señalización de seguridad

**Apoyo Técnico:**
- Supervisor de ruta (vehiculo independiente)
- Personal técnico de EQUISER
- Coordinación continua

### Fase 5: Entrega y Descarga

**En Destino:**
- Verificación de condiciones de acceso
- Posicionamiento preciso
- Descarga con grúa especializada
- Inspección final de la carga

**Documentación:**
- Acta de entrega
- Registro fotográfico
- Reporte de transporte
- Liberación de permisos

## Normativas y Regulaciones

### Leyes Nacionales

**Ley de Tránsito Terrestre:**
- Límites de peso por eje
- Dimensiones máximas permitidas
- Horarios de circulación
- Sanciones por incumplimiento

**Resoluciones del INTT:**
- Número 166: Transporte de carga pesada
- Especificaciones técnicas de vehículos
- Requisitos de señalización
- Certificaciones obligatorias

### Restricciones de Tránsito

**Horarios Permitidos:**
- Zonas urbanas: 9:00 PM - 5:00 AM
- Autopistas: 24 horas (según permiso)
- Días especiales: Restricciones adicionales

**Rutas Prohibidas:**
- Centros históricos
- Zonas residenciales densas
- Vías con infraestructura limitada

## Consideraciones Especiales

### Afectación de Líneas Eléctricas

**Cuando la altura total excede 5 metros:**

1. **Coordinación con CORPOELEC**
2. **Levantamiento temporal de líneas**
3. **Personal técnico de CORPOELEC en sitio**
4. **Ventana de tiempo coordinada**

**Costo adicional:** $2,000 - $8,000 USD según complejidad

### Modificaciones Temporales de Infraestructura

**Pueden requerirse:**
- Remoción temporal de señalización
- Ajuste de semáforos
- Retiro de mobiliario urbano
- Coordinación con servicios públicos

### Operaciones Nocturnas

**Ventajas:**
- Menor tráfico vehicular
- Temperaturas más bajas
- Mayor facilidad de coordinación
- Menor impacto público

**Requerimientos Adicionales:**
- Iluminación especializada
- Personal de seguridad adicional
- Coordinación con autoridades
- Señalización luminosa reforzada

## Costos del Transporte

### Estructura de Precios

**Transporte Local (<100 km):**
- Hasta 50 ton: $2,500 - $4,000 USD
- 50-100 ton: $4,000 - $6,500 USD
- 100-200 ton: $6,500 - $12,000 USD
- > 200 ton: Cotización específica

**Transporte Regional (100-400 km):**
- Hasta 50 ton: $4,500 - $7,000 USD
- 50-100 ton: $7,000 - $11,000 USD
- 100-200 ton: $11,000 - $18,000 USD
- > 200 ton: Cotización específica

**Transporte Nacional (>400 km):**
- Cotización por proyecto
- Consideración de múltiples factores
- Posibles paradas intermedias

### Factores que Afectan el Costo

1. **Distancia total**
2. **Peso y dimensiones**
3. **Complejidad de ruta**
4. **Permisos requeridos**
5. **Afectación de infraestructura**
6. **Urgencia del proyecto**
7. **Época del año** (lluvias complican transporte)

### Costos Incluidos

✅ Transporte completo punto a punto
✅ Operador especializado
✅ Escoltas y vehículos de apoyo
✅ Señalización y seguridad
✅ Coordinación con autoridades
✅ Seguros de responsabilidad civil

### Costos No Incluidos

❌ Tramitación de permisos (puede gestionarse)
❌ Carga y descarga (requiere grúas)
❌ Almacenamiento temporal
❌ Modificaciones de infraestructura
❌ Levantamiento de líneas eléctricas
❌ Peajes y tasas viales

## Casos de Éxito

### Transformador 150 Toneladas - Caracas a Maracay

**Desafío:**
- Peso: 148 toneladas
- Dimensiones: 4.8m alto × 3.8m ancho × 8.5m largo
- Ruta: 120 km por Autopista Regional del Centro
- Afectación de líneas eléctricas en 3 puntos

**Solución:**
- Cama baja modular 12+6 ejes
- Operación nocturna (11 PM - 6 AM)
- Coordinación con CORPOELEC
- Escolta policial completa

**Resultado:**
- Transporte exitoso en 8 horas
- Cero incidentes
- Cliente satisfecho

### Reactor 280 Toneladas - Puerto La Cruz a Barcelona

**Desafío:**
- Peso: 282 toneladas
- Diámetro: 5.2 metros
- Distancia: 35 km
- Paso por zona urbana congestionada

**Solución:**
- Cama baja modular 16+8 ejes
- Estudio detallado de ruta
- Operación en domingo temprano
- Modificación temporal de 4 semáforos

**Resultado:**
- 6 horas de transporte
- Coordinación perfecta
- Entrega sin novedad

## Seguridad en el Transporte

### Protocolos de Seguridad

**Pre-Transporte:**
- Inspección mecánica completa del vehículo
- Verificación de aseguramiento de carga
- Reunión de seguridad con todo el personal
- Confirmación de comunicaciones

**Durante Transporte:**
- Velocidad máxima: 40-60 km/h
- Paradas cada 2 horas para inspección
- Monitoreo continuo de aseguramiento
- Comunicación constante con convoy

**Post-Transporte:**
- Inspección de carga en destino
- Documentación de condiciones
- Reporte de novedades
- Lecciones aprendidas

### Gestión de Riesgos

**Riesgos Identificados:**
- Vuelco por centro de gravedad alto
- Aflojamiento de amarres
- Daños por vibración
- Incidentes de tránsito
- Condiciones meteorológicas adversas

**Mitigación:**
- Ingeniería previa de aseguramiento
- Inspecciones frecuentes durante tránsito
- Personal experimentado
- Seguros comprehensivos
- Planes de contingencia

## Preguntas Frecuentes

**¿Puedo transportar cualquier día de la semana?**

Depende de permisos. Generalmente, fines de semana y madrugadas son preferidos para cargas muy grandes en zonas urbanas.

**¿Qué pasa si hay un imprevisto en ruta?**

Tenemos planes de contingencia, incluyendo grúas de respaldo y rutas alternativas identificadas previamente.

**¿El transporte incluye seguro?**

Incluye seguro de responsabilidad civil. El seguro de carga es responsabilidad del cliente o podemos gestionarlo.

**¿Cuánto tiempo toma el proceso completo?**

Desde planificación hasta entrega: 3-4 semanas (incluyendo permisos).

**¿Pueden transportar varias piezas simultáneamente?**

Sí, podemos coordinar múltiples transportes con logística optimizada.

## Contacta a EQUISER

¿Necesitas transportar carga sobredimensionada? Nuestros especialistas en logística están listos para planificar tu proyecto.

📞 **Teléfono:** +58 422-6347624  
📧 **Email:** logistica@equiser.com  
💬 **WhatsApp:** [Consulta tu Proyecto](https://wa.me/message/IOBBJVBBVWNOI1)  
🌐 **Web:** www.gruasequiser.com

---

*EQUISER - Expertos en Transporte de Carga Pesada y Sobredimensionada*`,
    featuredImage: "/images/transporte-carga-sobredimensionada.png",
    category: "Transporte de Carga Pesada",
    tags: ["transporte pesado", "carga sobredimensionada", "logística industrial", "camas bajas", "permisos"],
    author: "Ing. José Ramírez - EQUISER",
    readTime: 11,
    metaTitle: "Transporte de Carga Sobredimensionada en Venezuela | EQUISER",
    metaDescription: "Servicio especializado de transporte de carga pesada y sobredimensionada. Permisos, equipos, normativas y experiencia en toda Venezuela.",
    keywords: ["transporte carga sobredimensionada", "camas bajas Venezuela", "transporte pesado", "logística industrial", "EQUISER"],
    published: true,
    featured: false,
    publishedAt: new Date("2024-11-18")
  }
];

async function main() {
  console.log('🌱 Iniciando seed de blogs 5-6...');
  
  for (const blog of blogs) {
    try {
      const created = await prisma.blog.upsert({
        where: { slug: blog.slug },
        update: blog,
        create: blog,
      });
      console.log(`✅ Blog creado/actualizado: ${created.title}`);
    } catch (error) {
      console.error(`❌ Error al crear blog ${blog.slug}:`, error);
    }
  }
  
  console.log('✅ Seed de blogs 5-6 completado!');
}

main()
  .catch((e) => {
    console.error('❌ Error en el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
