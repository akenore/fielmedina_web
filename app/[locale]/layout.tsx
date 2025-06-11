import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '../../i18n/routing';
import {getTranslations} from 'next-intl/server';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import StructuredData from '../../components/seo/StructuredData';
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'metadata.home'});

  // Set canonical URL based on the actual routing configuration
  const canonicalPath = locale === 'en' ? '/' : '/fr';
  
  // Only include alternate languages in hreflang, not the current language
  const alternateLanguages = locale === 'en' 
    ? { 'fr': '/fr' } 
    : { 'en': '/' };
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'FielMedina Team' }],
    creator: 'FielMedina',
    publisher: 'FielMedina',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://www.fielmedina.com'),
    alternates: {
      canonical: canonicalPath,
      languages: alternateLanguages,
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://www.fielmedina.com${canonicalPath}`,
      siteName: 'FielMedina',
      locale: locale,
      type: 'website',
      images: [
        {
          url: '/logo.png',
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/logo.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code', // Replace with actual verification code
    },
    manifest: '/manifest.json',
  };
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        {/* Preload only the most critical LCP images */}
        <link
          rel="preload"
          href="/logo.svg"
          as="image"
          type="image/svg+xml"
          fetchPriority="high"
        />
        {/* Only preload slider image in production to avoid dev warnings */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <link
              rel="preload"
              href="/slider/splash.webp"
              as="image"
              type="image/webp"
              fetchPriority="high"
            />
            <link
              rel="preload"
              href="/yellow_dotes.webp"
              as="image"
              type="image/webp"
              fetchPriority="high"
            />
          </>
        )}
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//play.google.com" />
        
        {/* Preconnect for critical external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <StructuredData />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FDF7EC]`}>
        {/* LCP monitoring script - only in development */}
        {process.env.NODE_ENV === 'development' && (
          <Script id="lcp-monitor" strategy="afterInteractive">
            {`
              new PerformanceObserver((list) => {
                const latestEntry = list.getEntries().at(-1);
                if (latestEntry?.element?.getAttribute('loading') === 'lazy') {
                  console.warn('⚠️ LCP element was lazy loaded:', latestEntry);
                  console.log('Element:', latestEntry.element);
                  console.log('Consider setting loading="eager" and fetchPriority="high"');
                }
              }).observe({type: 'largest-contentful-paint', buffered: true});
            `}
          </Script>
        )}
        
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 