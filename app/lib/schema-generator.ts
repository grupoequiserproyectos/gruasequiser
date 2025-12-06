export const companySchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://gruasequiser.com/#company",
  "name": "Grúas EQUISER C.A.",
  "alternateName": ["EQUISER", "Grúas EQUISER", "EQUISER Venezuela"],
  "description": "Empresa líder en alquiler de grúas móviles y sobre oruga con capacidad 25-1600 toneladas. 30+ años de experiencia sirviendo a la industria pesada venezolana con operadores certificados internacionalmente.",
  "url": "https://gruasequiser.com",
  "logo": "https://gruasequiser.com/images/logo-equiser-actualizado.webp",
  "image": "https://www.heavyliftnews.com/wp-content/uploads/2022/11/1102-Mammoet-1-768x1024.png",
  "telephone": "+584226347624",
  "email": [
    "info@gruasequiser.net",
    "direccionmercadeo@gruasequiser.net"
  ],
  "foundingDate": "1995",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "100"
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "Zulia",
      "url": "https://gruasequiser.com/blog/alquiler-gruas-industriales-maracaibo-zulia-2025"
    },
    {
      "@type": "State",
      "name": "Carabobo",
      "url": "https://gruasequiser.com/blog/alquiler-gruas-industriales-valencia-carabobo-2025"
    },
    {
      "@type": "State",
      "name": "Anzoátegui",
      "url": "https://gruasequiser.com/blog/alquiler-gruas-industriales-barcelona-anzoategui-2025"
    },
    {
      "@type": "State",
      "name": "Monagas",
      "url": "https://gruasequiser.com/blog/alquiler-gruas-industriales-maturin-monagas-2025"
    },
    {
      "@type": "State",
      "name": "Bolívar",
      "url": "https://gruasequiser.com/blog/alquiler-gruas-industriales-ciudad-guayana-bolivar-2025"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Autopista Puerto Cabello Morón, sector la Paragüíta",
    "addressLocality": "Morón",
    "addressRegion": "Carabobo",
    "postalCode": "2001",
    "addressCountry": "VE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "10.4840568",
    "longitude": "-68.1628642"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "$$$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "7",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "https://www.facebook.com/gruasequiser",
    "https://www.instagram.com/gruasequiser",
    "https://www.linkedin.com/company/gruasequiser"
  ],
  "knowsAbout": [
    "Crane Rental",
    "Heavy Equipment",
    "Industrial Services",
    "Transport",
    "Lifting Services"
  ]
}

export const getFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuáles son las capacidades de grúas disponibles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EQUISER ofrece grúas desde 25 hasta 1600 toneladas, incluyendo grúas móviles telescópicas y grúas sobre oruga, con la tecnología más moderna."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cubre EQUISER todo el territorio venezolano?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, tenemos cobertura nacional con base en Morón, Carabobo. Operamos en Maracaibo, Valencia, Puerto Cabello, Caracas, Faja del Orinoco, Ciudad Guayana, Maturín y más ciudades."
      }
    },
    {
      "@type": "Question",
      "name": "¿Disponibilidad 24/7?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, EQUISER está disponible 24/7 para emergencias, cotizaciones y atención inmediata. Contacta vía WhatsApp, teléfono o email."
      }
    }
  ]
})
