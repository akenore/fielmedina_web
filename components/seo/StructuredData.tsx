'use client';

const BASE_URL = 'https://www.fielmedina.com';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}#organization`,
  name: 'FielMedina',
  url: BASE_URL,
  description:
    'FielMedina is the digital travel companion helping visitors discover the UNESCO-listed Medina of Sousse through AI storytelling, GPS navigation, and cultural insights.',
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/logo.webp`,
  foundingDate: '2024',
  founder: {
    '@type': 'Person',
    name: 'Muhammad Aslan'
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'TN',
    addressLocality: 'Sousse',
    streetAddress: 'Medina de Sousse',
    postalCode: '4000'
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: 'info@fielmedina.com',
      contactType: 'customer service',
      availableLanguage: ['en', 'fr']
    }
  ],
  sameAs: [
    'https://instagram.com/fielmedina.officiel',
    'https://facebook.com/fielmedina.officiel',
    'https://tiktok.com/@fielmedina_officiel',
    'https://youtube.com/@fielmedina.officiel'
  ],
  areaServed: [
    {
      '@type': 'Country',
      name: 'Tunisia'
    }
  ],
  knowsAbout: [
    'Medina of Sousse',
    'heritage travel in Tunisia',
    'digital travel guide',
    'cultural storytelling',
    'GPS walking tours'
  ]
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}#website`,
  url: BASE_URL,
  name: 'FielMedina – Discover Medina of Sousse',
  description:
    'Download FielMedina, the immersive travel guide for the Medina of Sousse. Unlock AI-powered tours, hidden stories, and cultural heritage routes across Tunisia.',
  publisher: {
    '@id': `${BASE_URL}#organization`
  },
  inLanguage: ['en', 'fr'],
  potentialAction: [
    {
      '@type': 'Action',
      name: 'Download on Google Play',
      target: 'https://play.google.com/store/apps/details?id=com.fielmedina.sousse'
    },
    {
      '@type': 'Action',
      name: 'Download on the App Store',
      target: 'https://apps.apple.com/us/app/fielmedina/id6751167445'
    }
  ]
};

const mobileApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  '@id': `${BASE_URL}#mobileApp`,
  name: 'FielMedina',
  softwareVersion: '1.0.0',
  operatingSystem: 'Android, iOS',
  applicationCategory: 'TravelApplication',
  offers: {
    '@type': 'Offer',
    price: 0,
    priceCurrency: 'USD'
  },
  url: BASE_URL,
  description:
    'Experience Tunisia’s historic Medina of Sousse with immersive storytelling, curated walking routes, and offline navigation tailored for cultural travelers.',
  publisher: {
    '@id': `${BASE_URL}#organization`
  },
  installUrl: [
    'https://play.google.com/store/apps/details?id=com.fielmedina.sousse',
    'https://apps.apple.com/us/app/fielmedina/id6751167445'
  ],
  availableOnDevice: [
    'ANDROID',
    'iOS'
  ],
  inLanguage: ['en', 'fr'],
  screenshot: [
    `${BASE_URL}/slider/001.png`,
    `${BASE_URL}/slider/002.png`
  ]
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Guided Medina Tours',
  provider: {
    '@id': `${BASE_URL}#organization`
  },
  serviceType: [
    'AI-powered digital tour guide',
    'GPS navigation in historic cities',
    'Cultural heritage storytelling'
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Sousse'
    },
    {
      '@type': 'Country',
      name: 'Tunisia'
    }
  ],
  offers: {
    '@type': 'Offer',
    price: 0,
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: BASE_URL
  }
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is FielMedina free to download?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The app is free on Google Play and the App Store. Optional premium story packs will arrive later in 2025.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I use FielMedina offline while walking in the Medina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Download your route before you arrive and GPS navigation, audio stories, and map pins continue working offline.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does the app include audio and storytelling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every point of interest includes multi-language storytelling, photos, and practical travel tips curated with local experts.'
      }
    },
    {
      '@type': 'Question',
      name: 'What new destinations are coming next?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are expanding across Tunisia and preparing launches in Morocco, Algeria, Saudi Arabia, the UAE, Turkey, and Egypt over the next three years.'
      }
    }
  ]
};

export default function StructuredData() {
  const payload = [
    organizationSchema,
    websiteSchema,
    mobileApplicationSchema,
    serviceSchema,
    faqSchema
  ];

  return (
    <>
      {payload.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
    </>
  );
}
