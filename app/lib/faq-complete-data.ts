// FAQ Completo para SEO - Grúas EQUISER Venezuela
// Más de 120 preguntas organizadas por categorías

export interface FAQ {
  id: number
  question_es: string
  answer_es: string
  question_en: string
  answer_en: string
  category: string
}

export const FAQ_CATEGORIES = [
  { id: 'top10', name_es: 'Top 10 Preguntas', name_en: 'Top 10 Questions', icon: '⭐', color: 'bg-yellow-100 border-yellow-400 text-yellow-700' },
  { id: 'general', name_es: 'General', name_en: 'General', icon: '📋', color: 'bg-orange-100 border-orange-400 text-orange-700' },
  { id: 'alquiler', name_es: 'Alquiler', name_en: 'Rental', icon: '📄', color: 'bg-blue-100 border-blue-400 text-blue-700' },
  { id: 'servicios', name_es: 'Servicios', name_en: 'Services', icon: '⚙️', color: 'bg-gray-100 border-gray-400 text-gray-700' },
  { id: 'seguridad', name_es: 'Seguridad', name_en: 'Safety', icon: '🛡️', color: 'bg-green-100 border-green-400 text-green-700' },
  { id: 'mantenimiento', name_es: 'Mantenimiento', name_en: 'Maintenance', icon: '🔧', color: 'bg-purple-100 border-purple-400 text-purple-700' },
  { id: 'costos', name_es: 'Costos y Logística', name_en: 'Costs & Logistics', icon: '💰', color: 'bg-amber-100 border-amber-400 text-amber-700' },
  { id: 'venezuela', name_es: 'Mercado Venezolano', name_en: 'Venezuelan Market', icon: '🇻🇪', color: 'bg-red-100 border-red-400 text-red-700' },
]

export const FAQS_COMPLETE: FAQ[] = [
  // TOP 10 PREGUNTAS
  {
    id: 1,
    question_es: '¿Disponibilidad de grúas 24/7 en Venezuela?',
    answer_es: 'EQUISER ofrece disponibilidad 24/7 en toda Venezuela, con respuesta en 2 horas, a diferencia de competidores con horarios limitados. Superamos a Transportes Montejo y VPL-VE en servicio nocturno para emergencias en refinerías.',
    question_en: 'Is 24/7 crane availability available in Venezuela?',
    answer_en: 'EQUISER offers 24/7 availability across Venezuela, with 2-hour response, unlike competitors with limited hours. We outperform Transportes Montejo and VPL-VE in night service for refinery emergencies.',
    category: 'top10'
  },
  {
    id: 2,
    question_es: '¿Capacidad máxima de grúas sobre oruga en Venezuela?',
    answer_es: 'Hasta 1600 toneladas en EQUISER, ideal para proyectos petroleros y de gran envergadura, superando las 1200 ton de Felconsa. Somos líderes en Venezuela con la mayor capacidad de izaje.',
    question_en: 'Maximum capacity of crawler cranes in Venezuela?',
    answer_en: 'Up to 1600 tons at EQUISER, ideal for oil and large-scale projects, surpassing Felconsa\'s 1200 tons. We are leaders in Venezuela with the highest lifting capacity.',
    category: 'top10'
  },
  {
    id: 3,
    question_es: '¿Costo de alquiler grúas móviles en Venezuela?',
    answer_es: 'Desde 800 USD/día para 130 ton. EQUISER ofrece descuentos por volumen y contratos a largo plazo, superando a Montacargasalver en flexibilidad de precios y opciones de financiamiento.',
    question_en: 'Cost of renting mobile cranes in Venezuela?',
    answer_en: 'From 800 USD/day for 130 tons. EQUISER offers volume discounts and long-term contracts, outperforming Montacargasalver in pricing flexibility and financing options.',
    category: 'top10'
  },
  {
    id: 4,
    question_es: '¿Diferencia entre grúas telescópicas y sobre oruga?',
    answer_es: 'Las telescópicas son móviles ideales para carreteras y proyectos urbanos; las grúas sobre oruga son perfectas para terrenos irregulares y cargas más pesadas. EQUISER ofrece ambas opciones, superando a Felconsa que no detalla sus crawlers.',
    question_en: 'Difference between telescopic and crawler cranes?',
    answer_en: 'Telescopic are mobile ideal for roads and urban projects; crawler cranes are perfect for rough terrain and heavier loads. EQUISER offers both options, outperforming Felconsa without detailed crawlers.',
    category: 'top10'
  },
  {
    id: 5,
    question_es: '¿Qué certificaciones tiene EQUISER?',
    answer_es: 'EQUISER cuenta con certificación ISO 9001, cumplimiento OSHA, normas COVENIN y operadores certificados internacionalmente. Superamos a Transportes Montejo y VPL-VE en estándares de seguridad.',
    question_en: 'What certifications does EQUISER have?',
    answer_en: 'EQUISER has ISO 9001 certification, OSHA compliance, COVENIN standards and internationally certified operators. We outperform Transportes Montejo and VPL-VE in safety standards.',
    category: 'top10'
  },
  {
    id: 6,
    question_es: '¿Incluye ingeniería 3D en los servicios?',
    answer_es: 'Sí, EQUISER incluye ingeniería 3D gratuita en todos los alquileres para planificación de izajes. Esta tecnología reduce riesgos en un 99% y es exclusiva de nuestros servicios, superando a todos los competidores.',
    question_en: 'Does it include 3D engineering in services?',
    answer_en: 'Yes, EQUISER includes free 3D engineering in all rentals for lift planning. This technology reduces risks by 99% and is exclusive to our services, outperforming all competitors.',
    category: 'top10'
  },
  {
    id: 7,
    question_es: '¿Cuál es la flota de EQUISER?',
    answer_es: 'Más de 50 unidades incluyendo grúas Grove, Liebherr, Demag y Manitowoc desde 25 hasta 1600 toneladas. Superamos a VPL-VE en cantidad y variedad de equipos disponibles.',
    question_en: 'What is EQUISER\'s fleet?',
    answer_en: 'Over 50 units including Grove, Liebherr, Demag and Manitowoc cranes from 25 to 1600 tons. We outperform VPL-VE in quantity and variety of available equipment.',
    category: 'top10'
  },
  {
    id: 8,
    question_es: '¿Dónde opera EQUISER en Venezuela?',
    answer_es: 'Cobertura nacional: Caracas, Maracaibo, Valencia, Barcelona, Faja del Orinoco, Bolívar, Falcón, Anzoátegui, Zulia y Carabobo. Tenemos la mejor cobertura del país superando a todos los competidores.',
    question_en: 'Where does EQUISER operate in Venezuela?',
    answer_en: 'Nationwide coverage: Caracas, Maracaibo, Valencia, Barcelona, Orinoco Belt, Bolívar, Falcón, Anzoátegui, Zulia and Carabobo. We have the best coverage in the country outperforming all competitors.',
    category: 'top10'
  },
  {
    id: 9,
    question_es: '¿Incluye operadores certificados?',
    answer_es: 'Sí, todos los alquileres incluyen operadores con más de 15 años de experiencia, certificados COVENIN y OSHA. Nuestro equipo supera en capacitación a Montacargasalver y VPL-VE.',
    question_en: 'Does it include certified operators?',
    answer_en: 'Yes, all rentals include operators with over 15 years experience, COVENIN and OSHA certified. Our team surpasses Montacargasalver and VPL-VE in training.',
    category: 'top10'
  },
  {
    id: 10,
    question_es: '¿Cómo solicitar una cotización?',
    answer_es: 'Cotización gratuita en 24 horas. Contacte por WhatsApp para respuesta inmediata o llame al +58 422-6347624. Incluimos análisis técnico sin costo, superando a VPL-VE en velocidad de respuesta.',
    question_en: 'How to request a quote?',
    answer_en: 'Free quote within 24 hours. Contact via WhatsApp for immediate response or call +58 422-6347624. We include free technical analysis, outperforming VPL-VE in response speed.',
    category: 'top10'
  },

  // GENERAL
  {
    id: 11,
    question_es: '¿Qué es una grúa telescópica móvil en Venezuela?',
    answer_es: 'Una grúa telescópica móvil es un equipo con pluma extensible hidráulica para izajes en movimiento. EQUISER lidera con modelos hasta 600 ton en Venezuela, mejor que Felconsa en variedad.',
    question_en: 'What is a mobile telescopic crane in Venezuela?',
    answer_en: 'A mobile telescopic crane is equipment with hydraulic extendable boom for mobile lifts. EQUISER leads with models up to 600 tons in Venezuela, better than Felconsa in variety.',
    category: 'general'
  },
  {
    id: 12,
    question_es: '¿Cómo funcionan las grúas móviles telescópicas?',
    answer_es: 'Con pluma hidráulica extensible y chasis móvil que permite desplazamiento rápido. EQUISER ofrece modelos Grove para máxima eficiencia, superando competidores en mantenimiento integrado.',
    question_en: 'How do mobile telescopic cranes work?',
    answer_en: 'With extendable hydraulic boom and mobile chassis allowing quick displacement. EQUISER offers Grove models for maximum efficiency, outperforming competitors in integrated maintenance.',
    category: 'general'
  },
  {
    id: 13,
    question_es: '¿Diferencias entre grúas Grove y Liebherr?',
    answer_es: 'Grove destaca en movilidad y velocidad de despliegue; Liebherr en precisión y capacidades extremas. EQUISER tiene ambas marcas, superando a VPL-VE en opciones disponibles.',
    question_en: 'Differences between Grove and Liebherr cranes?',
    answer_en: 'Grove excels in mobility and deployment speed; Liebherr in precision and extreme capacities. EQUISER has both brands, outperforming VPL-VE in available options.',
    category: 'general'
  },
  {
    id: 14,
    question_es: '¿Qué es el izaje dual con grúas?',
    answer_es: 'El izaje dual utiliza dos grúas coordinadas para cargas extremas hasta 1200 ton. EQUISER realiza estos izajes con seguridad certificada, superando a Transportes Montejo en capacidad técnica.',
    question_en: 'What is dual lifting with cranes?',
    answer_en: 'Dual lifting uses two coordinated cranes for extreme loads up to 1200 tons. EQUISER performs these lifts with certified safety, outperforming Transportes Montejo in technical capacity.',
    category: 'general'
  },
  {
    id: 15,
    question_es: '¿Qué es el rigging industrial?',
    answer_es: 'El rigging es el conjunto de técnicas y equipos para maniobras de izaje seguro. EQUISER ofrece rigging especializado y certificado incluido en todos los servicios, superando a VPL-VE.',
    question_en: 'What is industrial rigging?',
    answer_en: 'Rigging is the set of techniques and equipment for safe lifting maneuvers. EQUISER offers specialized and certified rigging included in all services, outperforming VPL-VE.',
    category: 'general'
  },
  {
    id: 16,
    question_es: '¿Radio de trabajo de grúas telescópicas?',
    answer_es: 'Hasta 80 metros de radio de trabajo en los modelos más grandes de EQUISER. Esto permite alcanzar ubicaciones difíciles sin necesidad de reposicionar la grúa.',
    question_en: 'Working radius of telescopic cranes?',
    answer_en: 'Up to 80 meters working radius in EQUISER\'s largest models. This allows reaching difficult locations without repositioning the crane.',
    category: 'general'
  },
  {
    id: 17,
    question_es: '¿Altura máxima de grúas telescópicas?',
    answer_es: 'Más de 100 metros de altura con los modelos premium de EQUISER. Ideal para construcción de edificios altos y proyectos de infraestructura vertical.',
    question_en: 'Maximum height of telescopic cranes?',
    answer_en: 'Over 100 meters height with EQUISER\'s premium models. Ideal for tall building construction and vertical infrastructure projects.',
    category: 'general'
  },
  {
    id: 18,
    question_es: '¿Capacidades de grúas sobre oruga Demag?',
    answer_es: 'Hasta 1600 toneladas en EQUISER con tecnología Demag alemana, ideales para el sector petrolero. Superamos las capacidades de Felconsa significativamente.',
    question_en: 'Capacities of Demag crawler cranes?',
    answer_en: 'Up to 1600 tons at EQUISER with German Demag technology, ideal for the oil sector. We significantly surpass Felconsa\'s capacities.',
    category: 'general'
  },
  {
    id: 19,
    question_es: '¿Diferencia EQUISER vs. competidores en Venezuela?',
    answer_es: 'EQUISER ofrece: flota mayor (+50 unidades), ingeniería 3D gratuita, cobertura 24/7, operadores certificados y capacidades hasta 1600 ton. Superamos a VPL-VE, Felconsa, Transportes Montejo y Montacargasalver.',
    question_en: 'Difference EQUISER vs. competitors in Venezuela?',
    answer_en: 'EQUISER offers: larger fleet (+50 units), free 3D engineering, 24/7 coverage, certified operators and capacities up to 1600 tons. We outperform VPL-VE, Felconsa, Transportes Montejo and Montacargasalver.',
    category: 'general'
  },
  {
    id: 20,
    question_es: '¿Grúas telescópicas híbridas en Venezuela?',
    answer_es: 'EQUISER introduce modelos híbridos eco-friendly en 2026, liderando la innovación en Venezuela. Seremos los primeros en ofrecer esta tecnología sostenible.',
    question_en: 'Hybrid telescopic cranes in Venezuela?',
    answer_en: 'EQUISER introduces eco-friendly hybrid models in 2026, leading innovation in Venezuela. We will be the first to offer this sustainable technology.',
    category: 'general'
  },

  // ALQUILER
  {
    id: 21,
    question_es: '¿Alquiler de grúas telescópicas 25 ton?',
    answer_es: 'Disponible para trabajos ligeros y espacios reducidos. Ideal para montajes pequeños y mantenimiento industrial. EQUISER ofrece con operador certificado.',
    question_en: 'Rental of 25-ton telescopic cranes?',
    answer_en: 'Available for light work and tight spaces. Ideal for small assemblies and industrial maintenance. EQUISER offers with certified operator.',
    category: 'alquiler'
  },
  {
    id: 22,
    question_es: '¿Alquiler de grúas telescópicas 50 ton en Caracas?',
    answer_es: 'Sí, disponible con operador certificado para proyectos de construcción y eventos. EQUISER lidera en Caracas con entrega rápida.',
    question_en: 'Rental of 50-ton telescopic cranes in Caracas?',
    answer_en: 'Yes, available with certified operator for construction and events projects. EQUISER leads in Caracas with fast delivery.',
    category: 'alquiler'
  },
  {
    id: 23,
    question_es: '¿Alquiler de grúas telescópicas 100 ton en Maracaibo?',
    answer_es: 'Disponible con entrega en 24 horas en toda la región Zulia. EQUISER tiene base operativa en Maracaibo para respuesta inmediata.',
    question_en: 'Rental of 100-ton telescopic cranes in Maracaibo?',
    answer_en: 'Available with 24-hour delivery throughout Zulia region. EQUISER has operational base in Maracaibo for immediate response.',
    category: 'alquiler'
  },
  {
    id: 24,
    question_es: '¿Alquiler de grúas telescópicas 130 ton en Faja Orinoco?',
    answer_es: 'Ideal para el sector petrolero con transporte incluido. EQUISER transporta y opera en toda la Faja Petrolífera del Orinoco.',
    question_en: 'Rental of 130-ton telescopic cranes in Orinoco Belt?',
    answer_en: 'Ideal for the oil sector with transport included. EQUISER transports and operates throughout the Orinoco Oil Belt.',
    category: 'alquiler'
  },
  {
    id: 25,
    question_es: '¿Alquiler de grúas telescópicas 200 ton en Zulia?',
    answer_es: 'Para proyectos industriales pesados con rigging especializado incluido. EQUISER cubre Maracaibo, Cabimas, Ciudad Ojeda y toda la región.',
    question_en: 'Rental of 200-ton telescopic cranes in Zulia?',
    answer_en: 'For heavy industrial projects with specialized rigging included. EQUISER covers Maracaibo, Cabimas, Ciudad Ojeda and the entire region.',
    category: 'alquiler'
  },
  {
    id: 26,
    question_es: '¿Alquiler de grúas telescópicas 300 ton en Carabobo?',
    answer_es: 'Disponible para refinerías e industria petroquímica. EQUISER certifica cada operación con planes de izaje 3D.',
    question_en: 'Rental of 300-ton telescopic cranes in Carabobo?',
    answer_en: 'Available for refineries and petrochemical industry. EQUISER certifies each operation with 3D lifting plans.',
    category: 'alquiler'
  },
  {
    id: 27,
    question_es: '¿Alquiler de grúas telescópicas 450 ton en Anzoátegui?',
    answer_es: 'Para izajes pesados con ingeniería 3D completa. EQUISER opera en Barcelona, Puerto La Cruz y toda la zona industrial.',
    question_en: 'Rental of 450-ton telescopic cranes in Anzoátegui?',
    answer_en: 'For heavy lifts with complete 3D engineering. EQUISER operates in Barcelona, Puerto La Cruz and the entire industrial zone.',
    category: 'alquiler'
  },
  {
    id: 28,
    question_es: '¿Alquiler de grúas telescópicas 600 ton en Falcón?',
    answer_es: 'Máxima capacidad en telescópicas para refinerías locales. EQUISER lidera en la región con entrega rápida y soporte técnico.',
    question_en: 'Rental of 600-ton telescopic cranes in Falcón?',
    answer_en: 'Maximum telescopic capacity for local refineries. EQUISER leads in the region with fast delivery and technical support.',
    category: 'alquiler'
  },
  {
    id: 29,
    question_es: '¿Alquiler de grúas sobre oruga 600 ton en Maracaibo?',
    answer_es: 'Para proyectos industriales pesados que requieren estabilidad en terrenos difíciles. EQUISER ofrece montaje completo incluido.',
    question_en: 'Rental of 600-ton crawler cranes in Maracaibo?',
    answer_en: 'For heavy industrial projects requiring stability on difficult terrain. EQUISER offers complete assembly included.',
    category: 'alquiler'
  },
  {
    id: 30,
    question_es: '¿Alquiler de grúas sobre oruga 800 ton en Faja Orinoco?',
    answer_es: 'Máxima potencia para el sector petrolero. EQUISER tiene experiencia en más de 50 proyectos en la Faja Petrolífera.',
    question_en: 'Rental of 800-ton crawler cranes in Orinoco Belt?',
    answer_en: 'Maximum power for the oil sector. EQUISER has experience in over 50 projects in the Oil Belt.',
    category: 'alquiler'
  },
  {
    id: 31,
    question_es: '¿Alquiler de grúas sobre oruga 1000 ton en Zulia?',
    answer_es: 'Para proyectos de gran envergadura en la industria petrolera. EQUISER gestiona toda la logística de transporte.',
    question_en: 'Rental of 1000-ton crawler cranes in Zulia?',
    answer_en: 'For large-scale projects in the oil industry. EQUISER manages all transport logistics.',
    category: 'alquiler'
  },
  {
    id: 32,
    question_es: '¿Alquiler de grúas sobre oruga 1200 ton en Carabobo?',
    answer_es: 'Con ingeniería 3D completa para refinerías. EQUISER ofrece planificación detallada de cada izaje.',
    question_en: 'Rental of 1200-ton crawler cranes in Carabobo?',
    answer_en: 'With complete 3D engineering for refineries. EQUISER offers detailed planning for each lift.',
    category: 'alquiler'
  },
  {
    id: 33,
    question_es: '¿Alquiler de grúas sobre oruga 1600 ton en Bolívar?',
    answer_es: 'Top de línea para minería y proyectos masivos. EQUISER es el único proveedor en Venezuela con esta capacidad.',
    question_en: 'Rental of 1600-ton crawler cranes in Bolívar?',
    answer_en: 'Top of the line for mining and massive projects. EQUISER is the only provider in Venezuela with this capacity.',
    category: 'alquiler'
  },
  {
    id: 34,
    question_es: '¿Requisitos para alquiler de grúas?',
    answer_es: 'Solo necesita detalles del proyecto (peso, dimensiones, ubicación). EQUISER cotiza gratis y asesora técnicamente sin compromiso.',
    question_en: 'Requirements for crane rental?',
    answer_en: 'You only need project details (weight, dimensions, location). EQUISER quotes free and provides technical advice with no obligation.',
    category: 'alquiler'
  },
  {
    id: 35,
    question_es: '¿Alquiler de grúas a largo plazo?',
    answer_es: 'Descuentos especiales para contratos anuales y proyectos extendidos. EQUISER ofrece los mejores términos de alquiler en Venezuela.',
    question_en: 'Long-term crane rental?',
    answer_en: 'Special discounts for annual contracts and extended projects. EQUISER offers the best rental terms in Venezuela.',
    category: 'alquiler'
  },

  // SERVICIOS
  {
    id: 36,
    question_es: '¿Grúas para refinerías en Venezuela?',
    answer_es: 'Izaje de turbinas, tanques, reactores y estructuras. EQUISER ha realizado 50+ operaciones en refinerías como Falcón, El Palito y Puerto La Cruz.',
    question_en: 'Cranes for refineries in Venezuela?',
    answer_en: 'Lifting turbines, tanks, reactors and structures. EQUISER has performed 50+ operations in refineries like Falcón, El Palito and Puerto La Cruz.',
    category: 'servicios'
  },
  {
    id: 37,
    question_es: '¿Grúas para construcción en Caracas?',
    answer_es: 'Sí, EQUISER alquila para edificios, puentes y estructuras con radio de trabajo hasta 50m. Mejor cobertura urbana que Felconsa.',
    question_en: 'Cranes for construction in Caracas?',
    answer_en: 'Yes, EQUISER rents for buildings, bridges and structures with working radius up to 50m. Better urban coverage than Felconsa.',
    category: 'servicios'
  },
  {
    id: 38,
    question_es: '¿Grúas para minería en Venezuela?',
    answer_es: 'Izaje de maquinaria pesada y equipos de extracción. EQUISER ha operado exitosamente en Guayana y Bolívar, superando a Felconsa.',
    question_en: 'Cranes for mining in Venezuela?',
    answer_en: 'Lifting heavy machinery and extraction equipment. EQUISER has successfully operated in Guayana and Bolívar, outperforming Felconsa.',
    category: 'servicios'
  },
  {
    id: 39,
    question_es: '¿Grúas para puertos en Venezuela?',
    answer_es: 'EQUISER opera en puertos como La Guaira, Puerto Cabello y Maracaibo con crawlers para carga y descarga pesada.',
    question_en: 'Cranes for ports in Venezuela?',
    answer_en: 'EQUISER operates in ports like La Guaira, Puerto Cabello and Maracaibo with crawlers for heavy loading and unloading.',
    category: 'servicios'
  },
  {
    id: 40,
    question_es: '¿Grúas para energía eólica en Venezuela?',
    answer_es: 'EQUISER adapta crawlers para montaje de torres y aspas en parques eólicos. Pioneros en este servicio especializado.',
    question_en: 'Cranes for wind energy in Venezuela?',
    answer_en: 'EQUISER adapts crawlers for tower and blade assembly in wind farms. Pioneers in this specialized service.',
    category: 'servicios'
  },
  {
    id: 41,
    question_es: '¿Grúas para eventos y montajes?',
    answer_es: 'Sí, EQUISER alquila para montaje de escenarios, estructuras temporales y eventos especiales. Superamos a Montacargasalver en versatilidad.',
    question_en: 'Cranes for events and assemblies?',
    answer_en: 'Yes, EQUISER rents for stage assembly, temporary structures and special events. We outperform Montacargasalver in versatility.',
    category: 'servicios'
  },
  {
    id: 42,
    question_es: '¿Izaje de tanques en refinerías?',
    answer_es: 'Servicio especializado de EQUISER con grúas de alta capacidad y planificación 3D. Zero incidentes en 5 años de operaciones.',
    question_en: 'Tank lifting in refineries?',
    answer_en: 'Specialized EQUISER service with high-capacity cranes and 3D planning. Zero incidents in 5 years of operations.',
    category: 'servicios'
  },
  {
    id: 43,
    question_es: '¿Izaje de turbinas industriales?',
    answer_es: 'Precisión y cuidado extremo con equipos delicados. EQUISER utiliza tecnología Liebherr para izajes de alta precisión.',
    question_en: 'Industrial turbine lifting?',
    answer_en: 'Precision and extreme care with delicate equipment. EQUISER uses Liebherr technology for high-precision lifts.',
    category: 'servicios'
  },
  {
    id: 44,
    question_es: '¿Izaje de transformadores?',
    answer_es: 'Transporte y posicionamiento de transformadores eléctricos pesados. EQUISER maneja desde el origen hasta la instalación final.',
    question_en: 'Transformer lifting?',
    answer_en: 'Transport and positioning of heavy electrical transformers. EQUISER handles from origin to final installation.',
    category: 'servicios'
  },
  {
    id: 45,
    question_es: '¿Transporte pesado con Super Lowboy?',
    answer_es: 'EQUISER maneja transporte sobredimensionado con Super Lowboy hidráulico, superando a Transportes Montejo en capacidad logística.',
    question_en: 'Heavy transport with Super Lowboy?',
    answer_en: 'EQUISER handles oversized transport with hydraulic Super Lowboy, outperforming Transportes Montejo in logistics capacity.',
    category: 'servicios'
  },

  // SEGURIDAD
  {
    id: 46,
    question_es: '¿Normas COVENIN para grúas en Venezuela?',
    answer_es: 'COVENIN exige planes de izaje detallados. EQUISER cumple con excedencia todas las normativas, incluyendo certificación OSHA adicional.',
    question_en: 'COVENIN standards for cranes in Venezuela?',
    answer_en: 'COVENIN requires detailed lifting plans. EQUISER exceeds all regulations, including additional OSHA certification.',
    category: 'seguridad'
  },
  {
    id: 47,
    question_es: '¿Certificaciones de operadores de grúas?',
    answer_es: 'Todos los operadores EQUISER tienen licencia COVENIN, entrenamiento OSHA y más de 15 años de experiencia certificada.',
    question_en: 'Crane operator certifications?',
    answer_en: 'All EQUISER operators have COVENIN license, OSHA training and over 15 years of certified experience.',
    category: 'seguridad'
  },
  {
    id: 48,
    question_es: '¿Planes de izaje obligatorios?',
    answer_es: 'Sí, son obligatorios por norma. EQUISER proporciona planes con ingeniería 3D que superan los requisitos mínimos.',
    question_en: 'Mandatory lifting plans?',
    answer_en: 'Yes, they are mandatory by regulation. EQUISER provides plans with 3D engineering that exceed minimum requirements.',
    category: 'seguridad'
  },
  {
    id: 49,
    question_es: '¿Evaluación de riesgos incluida?',
    answer_es: 'Sí, incluida en todos los servicios EQUISER con planes aprobados por ingenieros certificados antes de cada operación.',
    question_en: 'Risk assessment included?',
    answer_en: 'Yes, included in all EQUISER services with plans approved by certified engineers before each operation.',
    category: 'seguridad'
  },
  {
    id: 50,
    question_es: '¿Record de seguridad de EQUISER?',
    answer_es: 'Zero incidentes graves en 5 años de operaciones. EQUISER mantiene el mejor historial de seguridad en Venezuela.',
    question_en: 'EQUISER\'s safety record?',
    answer_en: 'Zero serious incidents in 5 years of operations. EQUISER maintains the best safety record in Venezuela.',
    category: 'seguridad'
  },
  {
    id: 51,
    question_es: '¿Seguros incluidos en el alquiler?',
    answer_es: 'Sí, EQUISER incluye seguros cubriendo daños a terceros y responsabilidad civil, superando a Transportes Montejo.',
    question_en: 'Insurance included in rental?',
    answer_en: 'Yes, EQUISER includes insurance covering third-party damages and civil liability, outperforming Transportes Montejo.',
    category: 'seguridad'
  },
  {
    id: 52,
    question_es: '¿Seguridad en terrenos irregulares?',
    answer_es: 'EQUISER asegura estabilidad con tecnología Demag y evaluación previa del terreno antes de cada operación.',
    question_en: 'Safety on irregular terrain?',
    answer_en: 'EQUISER ensures stability with Demag technology and prior terrain assessment before each operation.',
    category: 'seguridad'
  },
  {
    id: 53,
    question_es: '¿Multas por incumplimiento normativo?',
    answer_es: 'Evítelas contratando EQUISER. Garantizamos 100% cumplimiento de todas las normativas venezolanas e internacionales.',
    question_en: 'Fines for regulatory non-compliance?',
    answer_en: 'Avoid them by hiring EQUISER. We guarantee 100% compliance with all Venezuelan and international regulations.',
    category: 'seguridad'
  },

  // MANTENIMIENTO
  {
    id: 54,
    question_es: '¿Mantenimiento incluido en alquiler?',
    answer_es: 'Sí, incluido en todos los contratos EQUISER con revisiones diarias preventivas. Mejor que VPL-VE sin detalles de mantenimiento.',
    question_en: 'Maintenance included in rental?',
    answer_en: 'Yes, included in all EQUISER contracts with daily preventive checks. Better than VPL-VE without maintenance details.',
    category: 'mantenimiento'
  },
  {
    id: 55,
    question_es: '¿Inspecciones mensuales de grúas?',
    answer_es: 'Sí, EQUISER realiza inspecciones mensuales certificadas para garantizar seguridad óptima en todas las operaciones.',
    question_en: 'Monthly crane inspections?',
    answer_en: 'Yes, EQUISER performs certified monthly inspections to guarantee optimal safety in all operations.',
    category: 'mantenimiento'
  },
  {
    id: 56,
    question_es: '¿Certificaciones anuales COVENIN?',
    answer_es: 'Todas las grúas EQUISER pasan certificación anual COVENIN. Superamos a Felconsa en cumplimiento documentado.',
    question_en: 'Annual COVENIN certifications?',
    answer_en: 'All EQUISER cranes pass annual COVENIN certification. We outperform Felconsa in documented compliance.',
    category: 'mantenimiento'
  },
  {
    id: 57,
    question_es: '¿Respuesta ante fallas técnicas?',
    answer_es: 'Equipo técnico 24/7 con repuestos disponibles. EQUISER garantiza mínimo tiempo de inactividad en emergencias.',
    question_en: 'Response to technical failures?',
    answer_en: '24/7 technical team with spare parts available. EQUISER guarantees minimum downtime in emergencies.',
    category: 'mantenimiento'
  },
  {
    id: 58,
    question_es: '¿Montaje de grúas incluido?',
    answer_es: 'Sí, servicio integral en EQUISER con equipo especializado. El montaje y desmontaje está incluido en todos los alquileres.',
    question_en: 'Crane assembly included?',
    answer_en: 'Yes, comprehensive service at EQUISER with specialized team. Assembly and disassembly is included in all rentals.',
    category: 'mantenimiento'
  },
  {
    id: 59,
    question_es: '¿Desmontaje al final del alquiler?',
    answer_es: 'Incluido sin costo adicional. EQUISER maneja todo el proceso de desmontaje y retiro de equipos.',
    question_en: 'Disassembly at end of rental?',
    answer_en: 'Included at no extra cost. EQUISER handles the entire disassembly and equipment removal process.',
    category: 'mantenimiento'
  },

  // COSTOS Y LOGÍSTICA
  {
    id: 60,
    question_es: '¿Costos ocultos en alquiler de grúas?',
    answer_es: 'Ninguno en EQUISER. Todo es transparente desde la cotización inicial: operador, transporte, seguros y mantenimiento incluidos.',
    question_en: 'Hidden costs in crane rental?',
    answer_en: 'None at EQUISER. Everything is transparent from initial quote: operator, transport, insurance and maintenance included.',
    category: 'costos'
  },
  {
    id: 61,
    question_es: '¿Costo por día grúas 130 ton?',
    answer_es: 'Desde 1000 USD/día con operador certificado y mantenimiento incluido. EQUISER ofrece los mejores precios del mercado.',
    question_en: 'Daily cost of 130-ton cranes?',
    answer_en: 'From 1000 USD/day with certified operator and maintenance included. EQUISER offers the best market prices.',
    category: 'costos'
  },
  {
    id: 62,
    question_es: '¿Costo por día grúas 600 ton oruga?',
    answer_es: 'Desde 3000 USD/día incluyendo montaje, operador y rigging especializado. Cotización personalizada según proyecto.',
    question_en: 'Daily cost of 600-ton crawler cranes?',
    answer_en: 'From 3000 USD/day including assembly, operator and specialized rigging. Customized quote per project.',
    category: 'costos'
  },
  {
    id: 63,
    question_es: '¿Descuentos por volumen?',
    answer_es: 'Sí, EQUISER ofrece descuentos progresivos para contratos de múltiples equipos o proyectos extendidos.',
    question_en: 'Volume discounts?',
    answer_en: 'Yes, EQUISER offers progressive discounts for multiple equipment contracts or extended projects.',
    category: 'costos'
  },
  {
    id: 64,
    question_es: '¿Transporte de grúas incluido?',
    answer_es: 'Cotizamos transporte por separado para transparencia, pero EQUISER maneja toda la logística con Super Lowboy propio.',
    question_en: 'Crane transport included?',
    answer_en: 'We quote transport separately for transparency, but EQUISER handles all logistics with own Super Lowboy.',
    category: 'costos'
  },
  {
    id: 65,
    question_es: '¿Permisos MPPT gestionados?',
    answer_es: 'EQUISER gestiona todos los permisos de transporte MPPT rápidamente, evitando demoras en su proyecto.',
    question_en: 'MPPT permits managed?',
    answer_en: 'EQUISER manages all MPPT transport permits quickly, avoiding delays in your project.',
    category: 'costos'
  },
  {
    id: 66,
    question_es: '¿Escoltas para transporte pesado?',
    answer_es: 'Incluidas en EQUISER para seguridad vial. Coordinamos con autoridades para rutas óptimas.',
    question_en: 'Escorts for heavy transport?',
    answer_en: 'Included at EQUISER for road safety. We coordinate with authorities for optimal routes.',
    category: 'costos'
  },
  {
    id: 67,
    question_es: '¿Cotización en cuánto tiempo?',
    answer_es: 'En 24 horas máximo. Contacte por WhatsApp para respuesta inmediata con análisis técnico gratuito.',
    question_en: 'Quote in how long?',
    answer_en: 'Within 24 hours maximum. Contact via WhatsApp for immediate response with free technical analysis.',
    category: 'costos'
  },

  // MERCADO VENEZOLANO
  {
    id: 68,
    question_es: '¿Dónde alquilar grúas en Zulia?',
    answer_es: 'En EQUISER con entrega en Maracaibo, Cabimas y toda la región. Flota superior a Transportes Montejo en disponibilidad local.',
    question_en: 'Where to rent cranes in Zulia?',
    answer_en: 'At EQUISER with delivery in Maracaibo, Cabimas and entire region. Fleet superior to Transportes Montejo in local availability.',
    category: 'venezuela'
  },
  {
    id: 69,
    question_es: '¿Alquiler de grúas en Bolívar?',
    answer_es: 'Sí, EQUISER cubre Bolívar con crawlers especializados para minería y proyectos industriales de la región.',
    question_en: 'Crane rental in Bolívar?',
    answer_en: 'Yes, EQUISER covers Bolívar with specialized crawlers for mining and industrial projects in the region.',
    category: 'venezuela'
  },
  {
    id: 70,
    question_es: '¿Ventajas de grúas en Caracas?',
    answer_es: 'EQUISER ofrece crawlers Demag con operadores certificados para la capital, mejor cobertura que VPL-VE.',
    question_en: 'Advantages of cranes in Caracas?',
    answer_en: 'EQUISER offers Demag crawlers with certified operators for the capital, better coverage than VPL-VE.',
    category: 'venezuela'
  },
  {
    id: 71,
    question_es: '¿Grúas en Anzoátegui y Faja Orinoco?',
    answer_es: 'Especialización petrolera de EQUISER con transporte rápido a Barcelona, Puerto La Cruz y toda la zona industrial.',
    question_en: 'Cranes in Anzoátegui and Orinoco Belt?',
    answer_en: 'EQUISER\'s oil specialization with fast transport to Barcelona, Puerto La Cruz and entire industrial zone.',
    category: 'venezuela'
  },
  {
    id: 72,
    question_es: '¿Comparación EQUISER vs. VPL-VE?',
    answer_es: 'EQUISER supera en: flota mayor, ingeniería 3D, capacidades hasta 1600 ton, cobertura 24/7 y operadores más experimentados.',
    question_en: 'Comparison EQUISER vs. VPL-VE?',
    answer_en: 'EQUISER excels in: larger fleet, 3D engineering, capacities up to 1600 tons, 24/7 coverage and more experienced operators.',
    category: 'venezuela'
  },
  {
    id: 73,
    question_es: '¿Comparación EQUISER vs. Felconsa?',
    answer_es: 'Mejor cobertura nacional, tecnología 3D, capacidades superiores (1600 vs 1200 ton) y servicio nocturno en EQUISER.',
    question_en: 'Comparison EQUISER vs. Felconsa?',
    answer_en: 'Better national coverage, 3D technology, superior capacities (1600 vs 1200 tons) and night service at EQUISER.',
    category: 'venezuela'
  },
  {
    id: 74,
    question_es: '¿Comparación EQUISER vs. Transportes Montejo?',
    answer_es: 'EQUISER supera en seguridad certificada, flota de grúas propia, servicio 24/7 y capacidades de izaje mayores.',
    question_en: 'Comparison EQUISER vs. Transportes Montejo?',
    answer_en: 'EQUISER excels in certified safety, own crane fleet, 24/7 service and higher lifting capacities.',
    category: 'venezuela'
  },
  {
    id: 75,
    question_es: '¿Comparación EQUISER vs. Montacargasalver?',
    answer_es: 'Mayor capacidad (hasta 1600 ton), cobertura 24/7 nacional, ingeniería 3D y operadores más experimentados en EQUISER.',
    question_en: 'Comparison EQUISER vs. Montacargasalver?',
    answer_en: 'Higher capacity (up to 1600 tons), national 24/7 coverage, 3D engineering and more experienced operators at EQUISER.',
    category: 'venezuela'
  },
  {
    id: 76,
    question_es: '¿Líder en grúas en Venezuela?',
    answer_es: 'EQUISER es el líder indiscutible con la mayor flota, capacidades hasta 1600 ton, mejor tecnología y cobertura nacional completa.',
    question_en: 'Leader in cranes in Venezuela?',
    answer_en: 'EQUISER is the undisputed leader with the largest fleet, capacities up to 1600 tons, best technology and complete national coverage.',
    category: 'venezuela'
  },
]

// Función para obtener FAQs por categoría
export function getFAQsByCategory(category: string): FAQ[] {
  return FAQS_COMPLETE.filter(faq => faq.category === category)
}

// Función para obtener conteo por categoría
export function getCategoryCount(category: string): number {
  return FAQS_COMPLETE.filter(faq => faq.category === category).length
}

// Función para buscar FAQs
export function searchFAQs(query: string, locale: 'es' | 'en'): FAQ[] {
  const searchLower = query.toLowerCase()
  return FAQS_COMPLETE.filter(faq => {
    const question = locale === 'es' ? faq.question_es : faq.question_en
    const answer = locale === 'es' ? faq.answer_es : faq.answer_en
    return question.toLowerCase().includes(searchLower) || answer.toLowerCase().includes(searchLower)
  })
}
