// Configuración avanzada de SEO para posicionamiento #1 en Google Venezuela

export const PALABRAS_CLAVE_LONG_TAIL = [
  // Transaccionales con geo-localización
  "alquiler grúas telescópicas caracas precio 2024",
  "grúas móviles hidráulicas maracaibo certificadas pdvsa",
  "transporte pesado valencia sector portuario venezuela",
  "grúas sobre oruga 600 toneladas faja orinoco",
  "super lowboy hidráulico barcelona anzoátegui",
  "izamiento industrial puerto la cruz petroquímico",
  "rigging especializado ciudad guayana siderúrgico",
  "grúas alta capacidad sector petrolero zulia",
  "movilización transformadores eléctricos carabobo",
  "montaje turbinas industriales sector energético",
  
  // Específicas por capacidad y sector
  "grúa liebherr ltm 1500 alquiler venezuela",
  "grúas grove 130 toneladas proyectos pdvsa",
  "manitowoc crawler crane 1600 ton venezuela",
  "demag cc 2800 alquiler sector petrolero",
  "grúas telescópicas 25-100 toneladas valencia",
  "grúas oruga 300-600 toneladas refinería",
  
  // Long-tail por problema/solución
  "como transportar generador 200 toneladas venezuela",
  "cuanto cuesta alquilar grúa 130 ton maracaibo",
  "empresa certificada izamiento petromonagas",
  "transporte carga sobredimensionada permisos venezuela",
  "procedimientos rigging industrial pdvsa normas",
  "ingeniería izamiento 3d modelado autocad venezuela",
  
  // Comparativas y alternativas
  "diferencia grúa móvil vs grúa oruga aplicaciones",
  "ventajas grúas liebherr vs grove venezuela",
  "costo alquiler grúa vs compra análisis financiero",
  "grúas hidráulicas vs mecánicas sector industrial",
  
  // Consultas informacionales con intención transaccional
  "mejores empresas alquiler grúas industriales venezuela",
  "normativas seguridad grúas sector petrolero pdvsa",
  "certificaciones operadores grúas venezuela requisitos",
  "mantenimiento preventivo grúas móviles checklist"
];

export const CIUDADES_KEYWORDS = {
  "caracas": {
    keywords: [
      "grúas industriales caracas miranda",
      "alquiler grúas telescópicas caracas",
      "transporte pesado caracas dtto capital",
      "izamiento industrial caracas zona industrial",
      "grúas certificadas caracas construcción"
    ],
    sectores: ["energético", "industrial", "construcción pesada"],
    empresas: ["Corpoelec", "EDELCA", "Constructoras mayores"]
  },
  "maracaibo": {
    keywords: [
      "grúas petroleras maracaibo zulia",
      "alquiler grúas sector petrolero maracaibo",
      "transporte pesado costa oriental lago",
      "izamiento industrial maracaibo pdvsa",
      "grúas certificadas occidente venezuela"
    ],
    sectores: ["petrolero", "petroquímico", "portuario"],
    empresas: ["PDVSA Occidente", "Pequiven", "Puerto de Maracaibo"]
  },
  "valencia": {
    keywords: [
      "grúas industriales valencia carabobo",
      "alquiler grúas zona industrial valencia",
      "transporte pesado puerto cabello valencia",
      "izamiento industrial sector automotriz",
      "grúas certificadas zona industrial"
    ],
    sectores: ["industrial", "portuario", "manufactura"],
    empresas: ["Zona Industrial", "Puerto Cabello", "Sidor Valencia"]
  },
  "barcelona": {
    keywords: [
      "grúas industriales barcelona anzoátegui",
      "alquiler grúas sector petrolero barcelona",
      "transporte pesado jose anzoátegui",
      "izamiento industrial complejo jose",
      "grúas certificadas oriente venezuela"
    ],
    sectores: ["petrolero", "petroquímico", "refinería"],
    empresas: ["Complejo José", "Petromonagas", "PDVSA Oriente"]
  },
  "ciudad-guayana": {
    keywords: [
      "grúas siderúrgicas ciudad guayana bolívar",
      "alquiler grúas sector minero guayana",
      "transporte pesado zona industrial guayana",
      "izamiento industrial sidor cvg",
      "grúas certificadas sector minero"
    ],
    sectores: ["siderúrgico", "minero", "industrial pesado"],
    empresas: ["SIDOR", "CVG", "Ferrominera", "Bauxilum"]
  },
  "puerto-la-cruz": {
    keywords: [
      "grúas portuarias puerto la cruz",
      "alquiler grúas sector marítimo plc",
      "transporte pesado operaciones portuarias",
      "izamiento industrial puerto petrolero",
      "grúas certificadas operaciones offshore"
    ],
    sectores: ["portuario", "petrolero offshore", "marítimo"],
    empresas: ["Puerto La Cruz", "PDVSA Marina", "Terminales"]
  },
  "faja-orinoco": {
    keywords: [
      "grúas petroleras faja del orinoco",
      "alquiler grúas proyectos petromonagas",
      "transporte pesado sector upgraders",
      "izamiento industrial petrocedeno sinovensa",
      "grúas certificadas sector extrapesado"
    ],
    sectores: ["petrolero extrapesado", "upgraders", "producción"],
    empresas: ["Petromonagas", "Petrocedeno", "Sinovensa", "Petropiar"]
  }
};

export const TIPOS_CONTENIDO_AVANZADO = [
  {
    tipo: "guia-completa-ciudad",
    template: {
      h1: "Alquiler de Grúas Industriales en {ciudad} {año} | Guía Completa",
      h2: [
        "¿Por Qué Elegir Grúas EQUISER en {ciudad}?",
        "Tipos de Grúas Disponibles en {ciudad}",
        "Sectores Industriales Atendidos en {ciudad}",
        "Proyectos Ejecutados en {ciudad}",
        "Proceso de Cotización y Contratación",
        "Certificaciones y Normativas en {ciudad}",
        "Preguntas Frecuentes sobre Grúas en {ciudad}"
      ],
      ctas: 3,
      enlaces_internos: 4,
      enlaces_externos: 2,
      tablas: ["Comparativa capacidades", "Tarifas referenciales"],
      listas: ["Servicios disponibles", "Ventajas competitivas", "Checklist contratación"]
    }
  },
  {
    tipo: "sector-especializado",
    template: {
      h1: "Grúas Especializadas Sector {sector} Venezuela | Certificadas PDVSA",
      h2: [
        "Requisitos Específicos del Sector {sector}",
        "Equipos y Capacidades Recomendadas",
        "Casos de Éxito en Proyectos {sector}",
        "Normativas y Certificaciones Obligatorias",
        "Análisis de Costos y ROI",
        "Mejores Prácticas de Seguridad Industrial"
      ],
      ctas: 3,
      enlaces_internos: 5,
      enlaces_externos: 3,
      tablas: ["Capacidades por aplicación", "Normativas aplicables"],
      listas: ["Equipamiento técnico", "Procedimientos seguridad", "Documentación requerida"]
    }
  },
  {
    tipo: "comparativa-equipos",
    template: {
      h1: "{equipo1} vs {equipo2} | Comparativa Técnica Venezuela {año}",
      h2: [
        "Especificaciones Técnicas Comparadas",
        "Aplicaciones Industriales Ideales",
        "Ventajas y Desventajas de Cada Equipo",
        "Análisis de Costos Operativos",
        "Recomendaciones por Tipo de Proyecto",
        "Tabla Comparativa Completa"
      ],
      ctas: 2,
      enlaces_internos: 3,
      enlaces_externos: 2,
      tablas: ["Comparativa técnica detallada", "Análisis costo-beneficio"],
      listas: ["Ventajas equipo 1", "Ventajas equipo 2", "Criterios de selección"]
    }
  },
  {
    tipo: "caso-estudio",
    template: {
      h1: "Caso de Éxito: {proyecto} | {cliente} {ciudad} {año}",
      h2: [
        "Contexto y Desafíos del Proyecto",
        "Solución Técnica Implementada",
        "Equipos y Recursos Utilizados",
        "Procedimientos de Seguridad Aplicados",
        "Resultados y Métricas del Proyecto",
        "Lecciones Aprendidas y Mejores Prácticas"
      ],
      ctas: 3,
      enlaces_internos: 4,
      enlaces_externos: 1,
      tablas: ["Cronograma ejecución", "Recursos utilizados"],
      listas: ["Desafíos superados", "Resultados cuantificables", "Equipo involucrado"]
    }
  }
];

export const ESTRUCTURA_SEO_PERFECTA = {
  meta: {
    titleLength: "50-60 caracteres",
    descriptionLength: "150-160 caracteres",
    keywordsCount: "8-12 keywords principales + variantes",
    urlSlug: "lowercase-con-guiones-keyword-principal"
  },
  contenido: {
    palabrasMinimo: 1500,
    palabrasOptimo: 2500,
    densidadKeywordPrincipal: "1-2%",
    densidadKeywordsSecundarias: "0.5-1%",
    headings: {
      h1: 1,
      h2: "5-7",
      h3: "8-12",
      h4: "6-10"
    }
  },
  elementos: {
    imagenes: {
      cantidad: "6-8",
      tamañoMaxKb: 140,
      dimensiones: "1200x630",
      altTexts: "Obligatorio con keyword",
      formatoPreferido: "WebP"
    },
    enlaces: {
      internos: "4-6",
      externos: "2-3 a fuentes autoridad",
      anchorText: "Natural, no sobre-optimizado"
    },
    multimedia: {
      tablas: "1-2 por artículo",
      listas: "3-5 (bullet points o numeradas)",
      citas: "1-2 de fuentes oficiales"
    }
  }
};

export const CTA_TEMPLATES = [
  {
    posicion: "inicio",
    tipo: "soft",
    texto: "¿Necesitas una cotización personalizada? Contáctanos ahora →",
    clase: "cta-inline-yellow"
  },
  {
    posicion: "medio",
    tipo: "medium",
    texto: "📞 Consulta técnica GRATIS: +58 422-6347624",
    clase: "cta-box-blue"
  },
  {
    posicion: "final",
    tipo: "strong",
    texto: "Solicita tu Cotización Industrial Ahora | Respuesta en 24h",
    clase: "cta-full-gradient"
  }
];

export const ENLACES_AUTORIDAD_VENEZUELA = [
  {
    dominio: "pdvsa.com",
    tipo: "Normativas petroleras",
    relevancia: "alta"
  },
  {
    dominio: "inpsasel.gob.ve",
    tipo: "Seguridad industrial",
    relevancia: "alta"
  },
  {
    dominio: "sencamer.gob.ve",
    tipo: "Normas técnicas",
    relevancia: "media"
  },
  {
    dominio: "minpet.gob.ve",
    tipo: "Ministerio Petróleo",
    relevancia: "alta"
  }
];

export function generarMetadataUltraOptimizada(params: {
  tipo: string;
  ciudad?: string;
  sector?: string;
  keywords: string[];
}) {
  const añoActual = new Date().getFullYear();
  const { tipo, ciudad, sector, keywords } = params;
  
  let title = "";
  let description = "";
  let slug = "";
  
  // Generar según tipo de contenido
  if (tipo === "guia-completa-ciudad" && ciudad) {
    const ciudadData = CIUDADES_KEYWORDS[ciudad as keyof typeof CIUDADES_KEYWORDS];
    title = `Alquiler Grúas Industriales ${ciudad.charAt(0).toUpperCase() + ciudad.slice(1)} ${añoActual} | EQUISER 24/7`;
    description = `✓ Grúas móviles y oruga 25-1600 ton en ${ciudad} ✓ Certificadas PDVSA ✓ ${ciudadData?.sectores.join(", ")} ✓ Cotización GRATIS 24/7 ☎️ +58 422-6347624`;
    slug = `alquiler-gruas-industriales-${ciudad}-${añoActual}`;
  } else if (tipo === "sector-especializado" && sector) {
    title = `Grúas Sector ${sector.charAt(0).toUpperCase() + sector.slice(1)} Venezuela ${añoActual} | Certificadas`;
    description = `✓ Grúas especializadas sector ${sector} ✓ Normativas PDVSA ✓ Proyectos PDVSA, CVG, Pequiven ✓ Cobertura nacional ✓ Cotización inmediata`;
    slug = `gruas-especializadas-sector-${sector}-venezuela-${añoActual}`;
  }
  
  return {
    title,
    description,
    keywords: keywords.slice(0, 12).join(", "),
    slug,
    canonical: `https://gruasequiser.com/blog/${slug}`,
    ogImage: `/images/blog/${slug}.webp`
  };
}
