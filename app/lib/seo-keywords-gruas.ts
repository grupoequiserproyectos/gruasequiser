
/**
 * Keywords SEO y configuración para generación automática de blogs de GruasEquiser
 * Basado en los servicios reales de grúas industriales en Venezuela
 */

export const CIUDADES = [
  'Barcelona',
  'Maracaibo',
  'Valencia',
  'Puerto Cabello',
  'Puerto La Cruz',
  'Ciudad Guayana',
  'Caracas',
  'Maturín',
  'Faja del Orinoco',
  'Morón'
];

export const SECTORES = [
  'Petrolero',
  'Petroquímico',
  'Energético',
  'Siderúrgico',
  'Portuario',
  'Industrial',
  'Construcción Mayor',
  'Minería',
  'Infraestructura Vial',
  'Rescate Vehicular'
];

export const SERVICIOS_PRINCIPALES = [
  'Alquiler de Grúas Móviles',
  'Alquiler de Grúas Sobre Oruga',
  'Grúas Telescópicas Hidráulicas',
  'Transporte Pesado y Extrapesado',
  'Izamiento Industrial Especializado',
  'Super Lowboy Hidráulico',
  'Ingeniería y Planificación 3D',
  'Rigging Especializado',
  'Movilización de Transformadores',
  'Transporte de Turbinas',
  'Izamiento de Generadores',
  'Movilización de Vagones de Metro'
];

export const MARCAS_EQUIPOS = [
  'Liebherr',
  'Grove',
  'Manitowoc',
  'Demag'
];

export const SEO_KEYWORDS_TIER1 = [
  'servicio de grúas venezuela',
  'grúas industriales venezuela',
  'izaje especializado venezuela',
  'rescate vehicular venezuela',
  'grúas para construcción venezuela',
  'alquiler de grúas venezuela',
  'servicios de izaje venezuela',
  'grúas telescópicas venezuela',
  'grúas hidráulicas venezuela',
  'empresa de grúas venezuela',
  'grúas móviles venezuela',
  'grúas sobre oruga venezuela',
  'transporte pesado venezuela',
  'transporte extrapesado venezuela',
  'super lowboy venezuela',
  'rigging especializado venezuela',
  'grúas 1600 toneladas venezuela',
  'grúas alta capacidad venezuela',
  'grúas sector petrolero venezuela',
  'grúas sector petroquímico venezuela',
  'movilización transformadores venezuela',
  'transporte turbinas industriales venezuela'
];

export const KEYWORDS_POR_CIUDAD = {
  barcelona: [
    'grúas industriales barcelona',
    'alquiler grúas barcelona anzoátegui',
    'izamiento industrial barcelona',
    'transporte pesado barcelona',
    'grúas móviles barcelona',
    'grúas sector petrolero barcelona'
  ],
  maracaibo: [
    'grúas industriales maracaibo',
    'alquiler grúas maracaibo zulia',
    'grúas sector petrolero maracaibo',
    'transporte pesado maracaibo',
    'grúas 300 toneladas maracaibo',
    'izamiento especializado maracaibo'
  ],
  valencia: [
    'grúas industriales valencia',
    'alquiler grúas valencia carabobo',
    'grúas sector petroquímico valencia',
    'transporte pesado valencia',
    'grúas móviles valencia',
    'izamiento industrial valencia'
  ],
  'puerto-cabello': [
    'grúas industriales puerto cabello',
    'grúas sector portuario',
    'izamiento portuario puerto cabello',
    'transporte pesado puerto cabello',
    'grúas móviles puerto cabello',
    'refinería el palito grúas'
  ],
  'puerto-la-cruz': [
    'grúas industriales puerto la cruz',
    'grúas sector portuario puerto la cruz',
    'izamiento portuario',
    'transporte pesado puerto la cruz'
  ],
  'ciudad-guayana': [
    'grúas industriales ciudad guayana',
    'grúas sector siderúrgico',
    'grúas sidor ciudad guayana',
    'izamiento industrial ciudad guayana',
    'transporte pesado ciudad guayana'
  ],
  caracas: [
    'grúas industriales caracas',
    'alquiler grúas caracas',
    'grúas sector energético caracas',
    'transporte pesado caracas',
    'izamiento especializado caracas',
    'metro caracas grúas'
  ]
};

export const EMPRESAS_REFERENCIA = {
  petrolero: ['sector petrolero', 'Faja del Orinoco', 'operadoras petroleras'],
  petroquimico: ['Pequiven', 'Refinería El Palito', 'Complejo José'],
  energetico: ['plantas eléctricas', 'transformadores industriales', 'generadores'],
  siderurgico: ['SIDOR', 'Ciudad Guayana', 'industria siderúrgica'],
  portuario: ['Puerto La Cruz', 'Puerto Cabello', 'operaciones portuarias'],
  infraestructura: ['Metro de Caracas', 'transporte ferroviario', 'infraestructura vial']
};

export const DATOS_CONTACTO = {
  empresa: 'EQUISER C.A.',
  nombreComercial: 'GRÚAS EQUISER',
  telefono: '+58 422-6347624',
  emailPrincipal: 'info@gruasequiser.net',
  emailComercial: 'direccionmercadeo@gruasequiser.net',
  whatsapp: 'https://wa.me/message/IOBBJVBBVWNOI1',
  ubicacion: 'Autopista Puerto Cabello Morón, Sector La Paragüita, Morón, Carabobo',
  anosExperiencia: '30+',
  capacidadMaxima: '1600 toneladas',
  capacidadMinima: '25 toneladas',
  proyectosEjecutados: '500+',
  disponibilidad: '24/7'
};

export function generarKeywordsArticulo(ciudad: string, sector: string, servicio: string): string[] {
  const keywords: string[] = [];
  
  // Keywords primarias
  keywords.push(`${servicio.toLowerCase()} ${ciudad.toLowerCase()}`);
  keywords.push(`grúas ${sector.toLowerCase()} ${ciudad.toLowerCase()}`);
  keywords.push(`${servicio.toLowerCase()} sector ${sector.toLowerCase()}`);
  
  // Keywords secundarias
  keywords.push(`alquiler grúas ${ciudad.toLowerCase()}`);
  keywords.push(`izamiento industrial ${ciudad.toLowerCase()}`);
  keywords.push(`transporte pesado ${ciudad.toLowerCase()}`);
  
  // Keywords de marca
  keywords.push('equiser');
  keywords.push('grúas equiser');
  
  return keywords;
}
