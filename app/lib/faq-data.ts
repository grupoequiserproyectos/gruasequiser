/**
 * FAQ Data - Consolidated FAQs for EQUISER
 * 
 * IMPORTANTE: Este es el ÚNICO lugar donde se deben definir las FAQs.
 * NO crear bloques FAQPage adicionales en otros componentes para evitar
 * duplicaciones en Google Search Console.
 */

export interface FAQ {
  question: string
  answer: string
}

/**
 * FAQs consolidadas de toda la página principal
 * Combina las 3 preguntas generales (del layout) + las 6 preguntas B2B específicas
 * 
 * Total: 9 preguntas optimizadas para SEO y Rich Snippets
 */
export const homeFAQs: FAQ[] = [
  {
    question: "¿Cuáles son las capacidades de grúas disponibles?",
    answer: "EQUISER ofrece grúas desde 25 hasta 1600 toneladas, incluyendo grúas móviles telescópicas y grúas sobre oruga, con la tecnología más moderna. Disponemos de equipos de las marcas Liebherr, Grove, Demag y Manitowoc para proyectos industriales de cualquier escala."
  },
  {
    question: "¿Cubre EQUISER todo el territorio venezolano?",
    answer: "Sí, tenemos cobertura nacional con base en Morón, Carabobo. Operamos en Maracaibo, Valencia, Puerto Cabello, Caracas, Faja del Orinoco, Ciudad Guayana, Maturín, Puerto La Cruz y más ciudades. Nuestro alcance incluye todos los estados con presencia en los principales polos industriales del país."
  },
  {
    question: "¿Tienen disponibilidad 24/7?",
    answer: "Sí, EQUISER está disponible 24/7 para emergencias, cotizaciones y atención inmediata. Puede contactarnos vía WhatsApp al +58 422-6347624, por teléfono o correo electrónico. Contamos con equipos de respuesta rápida para proyectos urgentes en cualquier hora del día."
  },
  {
    question: "¿EQUISER remolca carros o vehículos particulares?",
    answer: "NO. EQUISER se especializa EXCLUSIVAMENTE en proyectos industriales de gran escala. Nuestras grúas móviles y de oruga tienen capacidades de 25 a 1,600 toneladas, diseñadas para sectores petrolero, petroquímico, energético, siderúrgico, portuario y construcción pesada. NO ofrecemos servicios de grúas de remolque para vehículos ligeros ni asistencia vial."
  },
  {
    question: "¿Cuál es la capacidad MÍNIMA de sus grúas?",
    answer: "Nuestra grúa de menor capacidad es de 25 toneladas, ideal para proyectos industriales medianos. Para referencia, esto equivale a levantar aproximadamente 35-40 vehículos compactos simultáneamente. Trabajamos exclusivamente con empresas en proyectos de infraestructura, petróleo, petroquímica, energía, siderurgia y manufactura pesada."
  },
  {
    question: "¿Atienden proyectos residenciales o particulares?",
    answer: "NO. EQUISER está enfocado en el sector industrial B2B. Atendemos proyectos de empresas petroleras, petroquímicas (Pequiven, Refinería El Palito), plantas eléctricas, constructoras de infraestructura mayor, siderúrgicas (SIDOR), puertos y manufactura pesada. Nuestros servicios incluyen transporte de transformadores, turbinas, reactores, generadores, estructuras metálicas mayores y equipos industriales de gran tonelaje."
  },
  {
    question: "¿Qué tipos de proyectos industriales realizan?",
    answer: "Realizamos proyectos de alta complejidad: instalación de transformadores eléctricos (50-250 ton), montaje de turbinas en plantas térmicas, izamiento de reactores petroquímicos, transporte de generadores industriales, movilización de equipos para Pequiven y Refinería El Palito, proyectos siderúrgicos en Ciudad Guayana, operaciones portuarias de carga pesada, y montajes industriales en refinería. Contamos con certificaciones específicas para el sector petrolero y petroquímico venezolano."
  },
  {
    question: "¿En qué ciudades de Venezuela operan?",
    answer: "Tenemos cobertura nacional con base de operaciones en Morón, Carabobo. Operamos regularmente en: Maracaibo (Zulia) para sector petrolero, Valencia y Puerto Cabello (Carabobo) para industrial/portuario/petroquímico, Faja del Orinoco (Anzoátegui/Monagas) para proyectos petroleros, Puerto La Cruz para operaciones portuarias, Ciudad Guayana (Bolívar) para sector siderúrgico, Complejo José para refinería, Caracas y Miranda para proyectos energéticos, Maturín (Monagas) para sector petrolero, y todo el territorio nacional según requerimientos del proyecto."
  },
  {
    question: "¿Qué sectores industriales son sus clientes principales?",
    answer: "Nuestros clientes principales pertenecen a los siguientes sectores: PETROLERO (empresas operadoras del sector), PETROQUÍMICO (Pequiven, Refinería El Palito, Complejo José), ENERGÉTICO (plantas eléctricas, generación térmica), SIDERÚRGICO (SIDOR, manufactura de acero), PORTUARIO (puertos de Puerto La Cruz, Puerto Cabello, La Guaira), INDUSTRIAL (manufactura pesada, plantas químicas), CONSTRUCCIÓN MAYOR (infraestructura, puentes, viaductos), y MINERÍA (proyectos de extracción y procesamiento)."
  }
]
