'use client';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FielMedina",
    "description": "Your AI-powered guide to explore the UNESCO World Heritage site Sousse Medina with interactive stories, GPS navigation, and cultural insights.",
    "url": "https://www.fielmedina.com",
    "logo": "https://www.fielmedina.com/logo.svg",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "Muhammad Ben Ali"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@fielmedina.com",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://instagram.com/fielmedina.officiel",
      "https://facebook.com/fielmedina.officiel",
      "https://tiktok.com/@fielmedina.officiel",
      "https://youtube.com/@fielmedina.officiel"
    ],
    "applicationCategory": "TravelApplication",
    "operatingSystem": "Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "FielMedina - Discover Sousse Medina",
    "description": "Your AI-powered guide to explore the UNESCO World Heritage site with interactive stories, GPS navigation, and cultural insights.",
    "url": "https://www.fielmedina.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.fielmedina.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "inLanguage": ["en", "fr"]
  };

  const mobileAppSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "FielMedina",
    "applicationCategory": "TravelApplication",
    "operatingSystem": "Android",
    "description": "AI-powered guide to explore Sousse Medina UNESCO World Heritage site with interactive stories and GPS navigation.",
    "downloadUrl": "https://play.google.com/store/apps/details?id=com.fielmedina.sousse",
    "author": {
      "@type": "Organization",
      "name": "FielMedina"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mobileAppSchema),
        }}
      />
    </>
  );
} 