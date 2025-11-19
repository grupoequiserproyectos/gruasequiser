
// Configuración SEO para generación de contenido geo-específico

export const CIUDADES_VENEZUELA = [
  {
    nombre: "Maracaibo",
    estado: "Zulia",
    sectores: ["petrolero", "petroquímico", "portuario"],
    descripcion: "centro de la industria petrolera venezolana en la región occidental",
    keywords: ["grúas Maracaibo", "alquiler grúas Zulia", "grúas petroleras Maracaibo", "transporte pesado Maracaibo"],
    proyectos_tipo: ["extracción petrolera", "refinerías", "plantas petroquímicas", "operaciones portuarias Lago de Maracaibo"]
  },
  {
    nombre: "Barcelona",
    estado: "Anzoátegui",
    sectores: ["petrolero", "industrial", "portuario"],
    descripcion: "base de operaciones principal de EQUISER y hub industrial del oriente",
    keywords: ["grúas Barcelona Anzoátegui", "alquiler grúas Barcelona", "grúas industriales Barcelona", "transporte pesado Barcelona"],
    proyectos_tipo: ["proyectos PDVSA", "instalaciones industriales", "operaciones portuarias", "manufactura pesada"]
  },
  {
    nombre: "Puerto La Cruz",
    estado: "Anzoátegui",
    sectores: ["portuario", "petrolero", "logística"],
    descripcion: "principal puerto del oriente venezolano",
    keywords: ["grúas Puerto La Cruz", "grúas portuarias", "izamiento portuario Puerto La Cruz", "carga pesada Puerto La Cruz"],
    proyectos_tipo: ["operaciones portuarias", "descarga de equipos industriales", "movilización de contenedores pesados", "logística marítima"]
  },
  {
    nombre: "Valencia",
    estado: "Carabobo",
    sectores: ["industrial", "manufacturero", "automotriz"],
    descripcion: "principal centro industrial y manufacturero de Venezuela",
    keywords: ["grúas Valencia", "alquiler grúas Carabobo", "grúas industriales Valencia", "transporte pesado Valencia"],
    proyectos_tipo: ["plantas de manufactura", "industria automotriz", "construcción industrial", "proyectos de infraestructura"]
  },
  {
    nombre: "Puerto Cabello",
    estado: "Carabobo",
    sectores: ["portuario", "logística", "industrial"],
    descripcion: "puerto más importante de Venezuela en términos de carga",
    keywords: ["grúas Puerto Cabello", "grúas portuarias Puerto Cabello", "izamiento puerto Venezuela", "logística Puerto Cabello"],
    proyectos_tipo: ["operaciones portuarias de gran escala", "importación de maquinaria pesada", "exportación industrial", "logística internacional"]
  },
  {
    nombre: "Ciudad Guayana",
    estado: "Bolívar",
    sectores: ["siderúrgico", "minero", "energético"],
    descripcion: "capital siderúrgica de Venezuela, sede de SIDOR",
    keywords: ["grúas Ciudad Guayana", "grúas siderúrgicas", "grúas SIDOR", "transporte pesado Bolívar"],
    proyectos_tipo: ["industria siderúrgica", "proyectos mineros", "plantas de aluminio", "centrales hidroeléctricas Guri"]
  },
  {
    nombre: "Maturín",
    estado: "Monagas",
    sectores: ["petrolero", "petroquímico"],
    descripcion: "centro de la industria petrolera en la Faja del Orinoco",
    keywords: ["grúas Maturín", "grúas Monagas", "grúas petroleras Maturín", "transporte pesado Monagas"],
    proyectos_tipo: ["proyectos PDVSA Faja", "extracción petrolera", "mejoramiento de crudo pesado", "infraestructura petrolera"]
  },
  {
    nombre: "Caracas",
    estado: "Distrito Capital",
    sectores: ["energético", "infraestructura", "corporativo"],
    descripcion: "capital de Venezuela, centro de grandes proyectos de infraestructura",
    keywords: ["grúas Caracas", "alquiler grúas Distrito Capital", "grúas infraestructura Caracas", "izamiento Caracas"],
    proyectos_tipo: ["plantas eléctricas", "proyectos Metro", "infraestructura urbana", "edificios corporativos"]
  },
  {
    nombre: "Faja del Orinoco",
    estado: "Multi-estado",
    sectores: ["petrolero", "petroquímico", "energético"],
    descripcion: "mayor reserva de petróleo del mundo",
    keywords: ["grúas Faja Orinoco", "grúas petroleras Faja", "Petromonagas", "grúas sector petrolero"],
    proyectos_tipo: ["Petromonagas", "Petrocedeno", "Sincrudos", "mejoradores de crudo", "campos petroleros"]
  },
  {
    nombre: "Complejo José",
    estado: "Anzoátegui",
    sectores: ["petroquímico", "refinación"],
    descripcion: "complejo de refinación más grande de Venezuela",
    keywords: ["grúas Complejo José", "grúas refinería", "proyectos petroquímicos", "izamiento refinería"],
    proyectos_tipo: ["refinación de petróleo", "plantas petroquímicas", "mantenimiento industrial", "modernización de equipos"]
  }
]

export const SECTORES_INDUSTRIALES = {
  petrolero: {
    nombre: "Petrolero",
    descripcion: "Sector de extracción, refinación y transporte de petróleo",
    empresas: ["PDVSA", "Petromonagas", "Petrocedeno", "Sincrudos", "empresas mixtas"],
    equipos_comunes: ["reactores", "torres de destilación", "tanques de almacenamiento", "compresores", "turbinas"],
    capacidades_requeridas: ["300-1600 ton"]
  },
  petroquimico: {
    nombre: "Petroquímico",
    descripcion: "Procesamiento de derivados del petróleo para productos químicos",
    empresas: ["Complejo José", "Pequiven", "plantas petroquímicas"],
    equipos_comunes: ["reactores químicos", "columnas de fraccionamiento", "intercambiadores de calor", "equipos de proceso"],
    capacidades_requeridas: ["200-800 ton"]
  },
  siderurgico: {
    nombre: "Siderúrgico",
    descripcion: "Producción de acero y productos metalúrgicos",
    empresas: ["SIDOR", "Ferrominera Orinoco", "plantas de aluminio"],
    equipos_comunes: ["hornos industriales", "prensas", "laminadoras", "equipos de fundición", "estructuras metálicas"],
    capacidades_requeridas: ["100-600 ton"]
  },
  energetico: {
    nombre: "Energético",
    descripcion: "Generación y distribución de energía eléctrica",
    empresas: ["CORPOELEC", "plantas termoeléctricas", "centrales hidroeléctricas"],
    equipos_comunes: ["transformadores", "generadores", "turbinas", "equipos de subestaciones"],
    capacidades_requeridas: ["50-300 ton"]
  },
  portuario: {
    nombre: "Portuario",
    descripcion: "Operaciones de carga y descarga en puertos",
    empresas: ["Bolipuertos", "puertos privados", "terminales especializadas"],
    equipos_comunes: ["contenedores sobredimensionados", "maquinaria importada", "equipos industriales", "estructuras portuarias"],
    capacidades_requeridas: ["65-500 ton"]
  },
  industrial: {
    nombre: "Industrial General",
    descripcion: "Manufactura y producción industrial diversa",
    empresas: ["empresas manufactureras", "plantas de producción", "industria alimentaria pesada"],
    equipos_comunes: ["maquinaria de producción", "equipos de proceso", "líneas de ensamblaje", "equipos de embalaje"],
    capacidades_requeridas: ["25-200 ton"]
  }
}

export const SERVICIOS_EQUISER = {
  gruas_moviles: {
    nombre: "Grúas Móviles Hidráulicas",
    capacidades: ["25 ton", "65 ton", "80 ton", "100 ton", "130 ton", "200 ton", "300 ton", "400 ton", "500 ton"],
    marcas: ["Grove", "Liebherr", "Manitowoc"],
    aplicaciones: ["proyectos industriales medianos", "instalaciones en planta", "mantenimiento industrial", "construcción pesada"]
  },
  gruas_oruga: {
    nombre: "Grúas de Oruga",
    capacidades: ["300 ton", "450 ton", "600 ton", "800 ton", "1600 ton"],
    marcas: ["Demag", "Manitowoc", "Liebherr"],
    aplicaciones: ["proyectos petroleros mayores", "refinerías", "plantas petroquímicas", "siderúrgicas", "proyectos de alta complejidad"]
  },
  transporte: {
    nombre: "Super Lowboy Hidráulico y Transporte Especializado",
    capacidades: ["hasta 250 ton"],
    equipos: ["camas bajas especializadas", "super lowboy hidráulico", "escoltas especializadas"],
    aplicaciones: ["transporte de transformadores", "turbinas", "reactores", "equipos sobredimensionados"]
  },
  rigging: {
    nombre: "Rigging e Ingeniería de Izamiento",
    servicios: ["cálculos estructurales", "planes de izamiento", "aparejamiento industrial", "supervisión técnica"],
    certificaciones: ["PDVSA", "ISO 9001", "ISO 14001"],
    aplicaciones: ["proyectos complejos", "izamientos críticos", "instalaciones de precisión"]
  }
}

export const PALABRAS_CLAVE_PRINCIPALES = [
  // Servicios + Ubicación
  "alquiler grúas industriales {ciudad}",
  "grúas móviles hidráulicas {ciudad}",
  "grúas sobre oruga {ciudad}",
  "transporte carga pesada {ciudad}",
  "super lowboy {ciudad}",
  "izamiento industrial {ciudad}",
  
  // Servicios + Sector
  "grúas sector {sector} Venezuela",
  "izamiento {sector} {ciudad}",
  "transporte equipos {sector}",
  
  // Capacidades específicas
  "grúas {capacidad} toneladas {ciudad}",
  "alquiler grúa {capacidad} ton Venezuela",
  
  // Proyectos específicos
  "grúas para PDVSA",
  "grúas Petromonagas",
  "grúas SIDOR",
  "grúas Complejo José",
  
  // Long-tail
  "cuánto cuesta alquilar grúa {ciudad}",
  "empresas grúas industriales {ciudad}",
  "servicio grúas {sector} {ciudad}",
  "transporte transformadores {ciudad}",
  "movilización equipos industriales {ciudad}"
]

export const TIPOS_CONTENIDO_BLOG = [
  {
    tipo: "guia_ciudad",
    template: "Guía Completa: Alquiler de Grúas Industriales en {ciudad}, {estado}",
    enfoque: "Información específica sobre servicios, proyectos típicos, y consideraciones para la ciudad",
    keywords_primarias: ["grúas {ciudad}", "alquiler grúas {estado}"],
    keywords_secundarias: ["{ciudad} {sector}", "transporte pesado {ciudad}"]
  },
  {
    tipo: "guia_sector",
    template: "Grúas Especializadas para el Sector {sector} en Venezuela",
    enfoque: "Equipos, procedimientos y casos de éxito en el sector",
    keywords_primarias: ["grúas sector {sector}", "{sector} Venezuela"],
    keywords_secundarias: ["equipos {sector}", "proyectos {sector}"]
  },
  {
    tipo: "comparativa",
    template: "Grúas Móviles vs Grúas de Oruga: ¿Cuál Elegir para su Proyecto en {ciudad}?",
    enfoque: "Comparación técnica con enfoque en aplicaciones locales",
    keywords_primarias: ["grúas móviles {ciudad}", "grúas oruga {ciudad}"],
    keywords_secundarias: ["tipos grúas", "selección grúas"]
  },
  {
    tipo: "caso_estudio",
    template: "Caso de Éxito: Proyecto {tipo_proyecto} en {ciudad} con Grúas EQUISER",
    enfoque: "Descripción detallada de proyecto real o típico",
    keywords_primarias: ["{tipo_proyecto} {ciudad}", "proyectos grúas {ciudad}"],
    keywords_secundarias: ["EQUISER {ciudad}", "éxito {tipo_proyecto}"]
  },
  {
    tipo: "precios",
    template: "Precios y Tarifas: Alquiler de Grúas en {ciudad} 2025",
    enfoque: "Información sobre factores de costo y presupuestos",
    keywords_primarias: ["precios grúas {ciudad}", "tarifas grúas {estado}"],
    keywords_secundarias: ["costo alquiler grúa", "presupuesto grúas"]
  }
]

export function generarMetadata(tipo: string, ciudad?: any, sector?: any) {
  const año = new Date().getFullYear()
  
  const templates = {
    guia_ciudad: {
      title: `Alquiler de Grúas Industriales en ${ciudad?.nombre} ${año} | EQUISER`,
      description: `✓ Grúas 25-1600 ton en ${ciudad?.nombre}, ${ciudad?.estado} ✓ Sectores ${ciudad?.sectores.join(', ')} ✓ Cobertura inmediata ✓ Proveedor certificado PDVSA ☎️ +58 422-6347624`,
      keywords: ciudad?.keywords || []
    },
    guia_sector: {
      title: `Grúas Especializadas Sector ${sector?.nombre} Venezuela | EQUISER`,
      description: `✓ Grúas ${sector?.capacidades_requeridas.join('-')} para ${sector?.nombre} ✓ Experiencia ${sector?.empresas.join(', ')} ✓ Equipos certificados ☎️ +58 422-6347624`,
      keywords: [`grúas sector ${sector?.nombre}`, `${sector?.nombre} Venezuela`, `equipos ${sector?.nombre}`]
    },
    caso_estudio: {
      title: `Caso de Éxito: Proyecto ${sector?.nombre} en ${ciudad?.nombre} | EQUISER`,
      description: `Proyecto exitoso de ${sector?.nombre} en ${ciudad?.nombre} con grúas industriales EQUISER. Detalles técnicos, desafíos y soluciones implementadas.`,
      keywords: [`proyecto ${ciudad?.nombre}`, `${sector?.nombre} ${ciudad?.nombre}`, `EQUISER ${ciudad?.nombre}`]
    }
  }
  
  return templates[tipo as keyof typeof templates] || templates.guia_ciudad
}
