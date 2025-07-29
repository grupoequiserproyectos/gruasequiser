
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed de la base de datos EQUISER...')

  // Limpiar datos existentes
  await prisma.contactForm.deleteMany()
  await prisma.project.deleteMany()
  await prisma.equipment.deleteMany()
  await prisma.service.deleteMany()
  await prisma.sector.deleteMany()
  await prisma.companyStats.deleteMany()

  console.log('✅ Datos existentes eliminados')

  // Crear sectores
  const sectors = await Promise.all([
    prisma.sector.create({
      data: {
        name: 'Energético',
        description: 'Sector energético incluyendo plantas eléctricas, subestaciones y proyectos de generación eléctrica',
        icon: 'zap'
      }
    }),
    prisma.sector.create({
      data: {
        name: 'Petrolero',
        description: 'Industria petrolera incluyendo refinerías, plataformas marinas y campos de extracción',
        icon: 'fuel'
      }
    }),
    prisma.sector.create({
      data: {
        name: 'Petroquímico',
        description: 'Complejos petroquímicos, plantas de procesamiento y torres de destilación',
        icon: 'beaker'
      }
    }),
    prisma.sector.create({
      data: {
        name: 'Industrial',
        description: 'Sector industrial general incluyendo manufactura pesada y maquinaria industrial',
        icon: 'factory'
      }
    }),
    prisma.sector.create({
      data: {
        name: 'Portuario',
        description: 'Operaciones portuarias, terminales marítimos y logística de carga',
        icon: 'anchor'
      }
    }),
    prisma.sector.create({
      data: {
        name: 'Siderúrgico',
        description: 'Industria siderúrgica, hornos industriales y procesamiento de metales',
        icon: 'hammer'
      }
    })
  ])

  console.log('✅ Sectores creados')

  // Crear servicios
  const services = await Promise.all([
    prisma.service.create({
      data: {
        title: 'Izamiento Alta Capacidad',
        description: 'Grúas móviles y sobre oruga de 25 a 1600 toneladas para proyectos industriales complejos con máxima seguridad y precisión.',
        icon: 'crane',
        features: [
          'Grúas Liebherr de 25-1600 TON',
          'Grúas Grove alta precisión',
          'Grúas Manitowoc especializadas',
          'Operadores certificados internacionalmente',
          'Planificación 3D avanzada',
          'Certificaciones ISO 9001 & 14001'
        ],
        order: 1,
        active: true
      }
    }),
    prisma.service.create({
      data: {
        title: 'Transporte Pesado y Extrapesado',
        description: 'Transporte especializado con equipos super lowboy y modular para cargas excepcionales de hasta 600 toneladas.',
        icon: 'truck',
        features: [
          'Super Lowboy hasta 600 TON',
          'Transporte modular especializado',
          'Rutas planificadas y optimizadas',
          'Permisos especiales incluidos',
          'Escolta especializada 24/7',
          'Logística integral personalizada'
        ],
        order: 2,
        active: true
      }
    }),
    prisma.service.create({
      data: {
        title: 'Manejo Carga Excepcional',
        description: 'Manipulación especializada de cargas industriales con equipos de rigging y técnicas avanzadas de manejo.',
        icon: 'package',
        features: [
          'Rigging especializado certificado',
          'Equipos de manipulación avanzados',
          'Carga y descarga industrial',
          'Embalaje y protección especializada',
          'Análisis de cargas complejas',
          'Supervisión técnica continua'
        ],
        order: 3,
        active: true
      }
    }),
    prisma.service.create({
      data: {
        title: 'Ingeniería 3D',
        description: 'Planificación avanzada con modelado 3D y simulación virtual para optimizar cada operación de izamiento.',
        icon: 'compass',
        features: [
          'Modelado 3D profesional',
          'Análisis estructural de cargas',
          'Simulación virtual operaciones',
          'Planificación detallada paso a paso',
          'Optimización de rutas críticas',
          'Reportes técnicos especializados'
        ],
        order: 4,
        active: true
      }
    })
  ])

  console.log('✅ Servicios creados')

  // Crear equipos
  const equipment = await Promise.all([
    // Grúas móviles
    prisma.equipment.create({
      data: {
        name: 'Liebherr LTM 1500-8.1',
        brand: 'Liebherr',
        category: 'mobile',
        capacity: 500,
        image: '/images/grua 500 ton.png',
        description: 'Grúa móvil telescópica de 500 toneladas con tecnología alemana de punta para proyectos industriales complejos',
        features: [
          'Boom telescópico hasta 84 metros',
          'Contraflecha hasta 91 metros',
          '8 ejes para máxima estabilidad',
          'Sistema de control Liebherr LICCON',
          'Capacidad máxima 500 toneladas'
        ],
        available: true
      }
    }),
    prisma.equipment.create({
      data: {
        name: 'Grove GMK6400',
        brand: 'Grove',
        category: 'mobile',
        capacity: 400,
        image: '/images/grua de 600 ton y grua de 130 ton.png',
        description: 'Grúa móvil Grove de 400 toneladas versátil para aplicaciones industriales y de construcción pesada',
        features: [
          'Boom telescópico hasta 78 metros',
          'Contraflecha hasta 84 metros',
          '6 ejes de alta resistencia',
          'Sistema Grove CCS (Crane Control System)',
          'Capacidad de carga 400 toneladas'
        ],
        available: true
      }
    }),
    prisma.equipment.create({
      data: {
        name: 'Grúa Móvil 130 TON',
        brand: 'Grove',
        category: 'mobile',
        capacity: 130,
        image: '/images/grua de 130 ton.png',
        description: 'Grúa móvil de 130 toneladas ideal para proyectos medianos con máxima precisión y eficiencia',
        features: [
          'Boom telescópico 60 metros',
          'Contraflecha 42 metros',
          '4 ejes estabilizadores',
          'Sistema de control avanzado',
          'Capacidad 130 toneladas'
        ],
        available: true
      }
    }),

    // Grúas sobre oruga
    prisma.equipment.create({
      data: {
        name: 'Liebherr LR 1600/2',
        brand: 'Liebherr',
        category: 'crawler',
        capacity: 600,
        image: '/images/grua de 600 ton.png',
        description: 'Grúa sobre oruga Liebherr de 600 toneladas para proyectos especializados de alta complejidad',
        features: [
          'Boom variable hasta 154 metros',
          'Contraflecha variable hasta 126 metros',
          'Sistema de orugas Liebherr',
          'Tecnología alemana certificada',
          'Capacidad máxima 600 toneladas'
        ],
        available: true
      }
    }),
    prisma.equipment.create({
      data: {
        name: 'Liebherr LR 1750/2',
        brand: 'Liebherr',
        category: 'crawler',
        capacity: 750,
        image: '/images/grua de 800 ton.png',
        description: 'Grúa sobre oruga premium de 750 toneladas para aplicaciones industriales extremas',
        features: [
          'Boom variable hasta 168 metros',
          'Contraflecha variable hasta 140 metros',
          'Sistema de orugas reforzado',
          'Tecnología alemana de punta',
          'Capacidad 750 toneladas'
        ],
        available: true
      }
    }),
    prisma.equipment.create({
      data: {
        name: 'Manitowoc 18000',
        brand: 'Manitowoc',
        category: 'crawler',
        capacity: 1600,
        image: '/images/trabajo grua 800 ton.png',
        description: 'La grúa de mayor capacidad en nuestro inventario, 1600 toneladas para proyectos únicos',
        features: [
          'Boom variable hasta 183 metros',
          'Contraflecha variable hasta 154 metros',
          'Sistema de orugas ultra-resistente',
          'Capacidad máxima del mercado',
          '1600 toneladas de capacidad'
        ],
        available: true
      }
    }),

    // Equipos de transporte
    prisma.equipment.create({
      data: {
        name: 'Super Lowboy Modular 600T',
        brand: 'Specialized',
        category: 'transport',
        capacity: 600,
        image: '/images/trabajo de gantry 600 ton.png',
        description: 'Sistema de transporte modular Super Lowboy para cargas extrapesadas hasta 600 toneladas',
        features: [
          'Configuración modular adaptable',
          'Múltiples ejes distribuidores',
          'Carga máxima 600 toneladas',
          'Rutas especializadas planificadas',
          'Permisos especiales incluidos'
        ],
        available: true
      }
    }),
    prisma.equipment.create({
      data: {
        name: 'Sistema Gantry 600T',
        brand: 'EQUISER',
        category: 'transport',
        capacity: 600,
        image: '/images/gantry 600 ton generador.png',
        description: 'Sistema de pórtico especializado para maniobras de alta precisión y cargas excepcionales',
        features: [
          'Sistema de pórtico móvil',
          'Control de precisión milimétrica',
          'Capacidad hasta 600 toneladas',
          'Aplicaciones industriales especializadas',
          'Operación coordinada multi-punto'
        ],
        available: true
      }
    })
  ])

  console.log('✅ Equipos creados')

  // Crear proyectos
  const projects = await Promise.all([
    prisma.project.create({
      data: {
        title: 'Izamiento Transformador Eléctrico 450 TON',
        description: 'Proyecto de izamiento y posicionamiento de transformador eléctrico de alta capacidad en planta de generación. Operación crítica ejecutada con máxima precisión y seguridad.',
        image: '/images/trabajo de grua 450 ton.png',
        capacity: '450 TON',
        location: 'Planta Eléctrica Central - Estado Carabobo',
        year: 2024,
        featured: true,
        sectorId: sectors[0].id, // Energético
        equipment: ['Grúa móvil Liebherr 450T', 'Transporte especializado', 'Rigging certificado', 'Supervisión técnica 24/7']
      }
    }),
    prisma.project.create({
      data: {
        title: 'Operación Coordinada Dual Grúas 600 TON',
        description: 'Operación especializada con dos grúas de 600 toneladas trabajando de forma coordinada para el izamiento de reactor petroquímico de dimensiones excepcionales.',
        image: '/images/dos gruas de 600 ton.png',
        capacity: '600 TON x2',
        location: 'Refinería Nacional - Estado Falcón',
        year: 2024,
        featured: true,
        sectorId: sectors[1].id, // Petrolero
        equipment: ['2x Grúas Liebherr 600T', 'Sistema de coordinación avanzado', 'Rigging especializado dual', 'Ingeniería 3D completa']
      }
    }),
    prisma.project.create({
      data: {
        title: 'Sistema Gantry Generador 600 TON',
        description: 'Instalación de generador de central termoeléctrica mediante sistema de pórtico especializado. Precisión milimétrica en operación crítica de infraestructura nacional.',
        image: '/images/gantry 600 ton generador.png',
        capacity: '600 TON',
        location: 'Central Termoeléctrica - Estado Zulia',
        year: 2023,
        featured: true,
        sectorId: sectors[0].id, // Energético
        equipment: ['Sistema Gantry EQUISER 600T', 'Rigging especializado industrial', 'Control de precisión avanzado', 'Supervisión continua']
      }
    }),
    prisma.project.create({
      data: {
        title: 'Izamiento Industrial Máxima Capacidad 800 TON',
        description: 'Proyecto de izamiento de estructura industrial de gran envergadura utilizando grúa de 800 toneladas. Operación compleja en ambiente industrial controlado.',
        image: '/images/trabajo grua 800 ton.png',
        capacity: '800 TON',
        location: 'Complejo Industrial Pesado - Estado Miranda',
        year: 2023,
        featured: true,
        sectorId: sectors[3].id, // Industrial
        equipment: ['Grúa sobre oruga Liebherr 800T', 'Rigging ultra-pesado', 'Planificación 3D avanzada', 'Equipo técnico especializado']
      }
    }),
    prisma.project.create({
      data: {
        title: 'Mantenimiento Torres Destilación 500 TON',
        description: 'Operación de mantenimiento especializado en torres de destilación de complejo petroquímico utilizando grúa móvil de 500 toneladas.',
        image: '/images/grua 500 ton.png',
        capacity: '500 TON',
        location: 'Complejo Petroquímico - Estado Anzoátegui',
        year: 2023,
        featured: false,
        sectorId: sectors[2].id, // Petroquímico
        equipment: ['Grúa móvil Liebherr 500T', 'Accesorios petroquímicos especiales', 'Certificaciones industriales', 'Personal especializado']
      }
    }),
    prisma.project.create({
      data: {
        title: 'Operación Marina Plataforma 600 TON',
        description: 'Izamiento de equipos especializados en plataforma petrolera marina. Operación en ambiente marítimo con condiciones controladas.',
        image: '/images/trabajo de grua de 600 ton.png',
        capacity: '600 TON',
        location: 'Plataforma Marina Petrolera - Costa Anzoátegui',
        year: 2023,
        featured: false,
        sectorId: sectors[1].id, // Petrolero
        equipment: ['Grúa sobre oruga marina 600T', 'Rigging resistente a corrosión', 'Protocolo marítimo especializado', 'Seguridad marina avanzada']
      }
    }),
    prisma.project.create({
      data: {
        title: 'Izamiento Maquinaria Industrial 130 TON',
        description: 'Proyecto de izamiento e instalación de maquinaria industrial pesada en zona manufacturera. Operación de precisión en espacios reducidos.',
        image: '/images/grua de 130 ton.png',
        capacity: '130 TON',
        location: 'Zona Industrial Valencia - Estado Carabobo',
        year: 2024,
        featured: false,
        sectorId: sectors[3].id, // Industrial
        equipment: ['Grúa móvil Grove 130T', 'Transporte lowboy especializado', 'Rigging de precisión', 'Coordinación logística integral']
      }
    }),
    prisma.project.create({
      data: {
        title: 'Operación Multi-Grúa Reactor Complejo',
        description: 'Operación coordinada con múltiples grúas para instalación de reactor de alta complejidad en refinería. Trabajo de precisión extrema.',
        image: '/images/grua de 600 ton y grua de 130 ton.png',
        capacity: '600T + 130T',
        location: 'Refinería El Palito - Estado Carabobo',
        year: 2023,
        featured: false,
        sectorId: sectors[2].id, // Petroquímico
        equipment: ['Grúa principal 600T', 'Grúa auxiliar 130T', 'Coordinación especializada avanzada', 'Ingeniería 3D integrada']
      }
    }),
    prisma.project.create({
      data: {
        title: 'Hornos Industriales Siderúrgica 800 TON',
        description: 'Izamiento e instalación de hornos industriales de gran tonelaje en complejo siderúrgico. Operación en ambiente de alta temperatura.',
        image: '/images/grua de 800 ton.png',
        capacity: '800 TON',
        location: 'Siderúrgica Nacional - Estado Bolívar',
        year: 2023,
        featured: false,
        sectorId: sectors[5].id, // Siderúrgico
        equipment: ['Grúa máxima capacidad 800T', 'Rigging resistente alta temperatura', 'Protección térmica especializada', 'Personal certificado siderurgia']
      }
    }),
    prisma.project.create({
      data: {
        title: 'Operación Portuaria Gantry Especializado',
        description: 'Operación portuaria compleja utilizando sistema gantry para manejo de carga excepcional en terminal marítimo especializado.',
        image: '/images/trabajo de gantry 600 ton.png',
        capacity: '600 TON',
        location: 'Puerto de Puerto Cabello - Estado Carabobo',
        year: 2024,
        featured: false,
        sectorId: sectors[4].id, // Portuario
        equipment: ['Sistema Gantry portuario 600T', 'Rigging marítimo especializado', 'Coordinación portuaria avanzada', 'Logística marítima integral']
      }
    }),
    prisma.project.create({
      data: {
        title: 'Modernización Subestación Eléctrica',
        description: 'Proyecto integral de modernización de subestación eléctrica con equipos de alta tecnología. Operación crítica de infraestructura nacional.',
        image: '/images/trabajo de grua.png',
        capacity: '400 TON',
        location: 'Subestación Principal - Estado Lara',
        year: 2024,
        featured: false,
        sectorId: sectors[0].id, // Energético
        equipment: ['Grúa telescópica 400T', 'Equipos eléctricos especializados', 'Protocolos energéticos avanzados', 'Certificación eléctrica integral']
      }
    }),
    prisma.project.create({
      data: {
        title: 'Torres Perforación Campo Petrolero',
        description: 'Mantenimiento especializado de torres de perforación en campo petrolero activo. Operación continua sin interrumpir producción.',
        image: '/images/imagen grua.png',
        capacity: '350 TON',
        location: 'Campo Petrolero Lagunillas - Estado Zulia',
        year: 2023,
        featured: false,
        sectorId: sectors[1].id, // Petrolero
        equipment: ['Grúa especializada petrolera 350T', 'Rigging anti-explosión certificado', 'Protocolos seguridad petrolera', 'Personal certificado PDVSA']
      }
    })
  ])

  console.log('✅ Proyectos creados')

  // Crear estadísticas de la empresa
  const companyStats = await Promise.all([
    prisma.companyStats.create({
      data: {
        label: 'Proyectos Ejecutados',
        value: '500',
        suffix: '+',
        icon: 'trending-up',
        order: 1,
        active: true
      }
    }),
    prisma.companyStats.create({
      data: {
        label: 'Años de Experiencia',
        value: '30',
        suffix: '+',
        icon: 'award',
        order: 2,
        active: true
      }
    }),
    prisma.companyStats.create({
      data: {
        label: 'Capacidad Máxima',
        value: '1600',
        suffix: 'T',
        icon: 'wrench',
        order: 3,
        active: true
      }
    }),
    prisma.companyStats.create({
      data: {
        label: 'Sectores Industriales',
        value: '6',
        suffix: '',
        icon: 'map-pin',
        order: 4,
        active: true
      }
    }),
    prisma.companyStats.create({
      data: {
        label: 'Disponibilidad',
        value: '24',
        suffix: '/7',
        icon: 'clock',
        order: 5,
        active: true
      }
    }),
    prisma.companyStats.create({
      data: {
        label: 'Certificaciones ISO',
        value: '2',
        suffix: '',
        icon: 'shield',
        order: 6,
        active: true
      }
    })
  ])

  console.log('✅ Estadísticas de empresa creadas')

  console.log('🎉 Seed completado exitosamente!')
  console.log(`📊 Resumen:`)
  console.log(`   - ${sectors.length} sectores creados`)
  console.log(`   - ${services.length} servicios creados`)
  console.log(`   - ${equipment.length} equipos creados`)
  console.log(`   - ${projects.length} proyectos creados`)
  console.log(`   - ${companyStats.length} estadísticas creadas`)
  console.log('')
  console.log('🚀 La base de datos de EQUISER está lista para usar!')
}

main()
  .catch((e) => {
    console.error('❌ Error durante el seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
