import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '../../i18n/routing';
import {getTranslations} from 'next-intl/server';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import StructuredData from '../../components/seo/StructuredData';
import Script from 'next/script';
import { getPathname } from '../../i18n/navigation';
import { GoogleTagManager } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false // Only preload the primary font
});

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'metadata.home'});

  const canonicalPath = getPathname({ locale, href: '/' });
  const alternateLanguagesEntries = routing.locales.map((alternateLocale) => [
    alternateLocale,
    getPathname({ locale: alternateLocale, href: '/' })
  ]) as Array<[string, string]>;
  const alternateLanguages = Object.fromEntries(alternateLanguagesEntries);
  const xDefaultHref =
    alternateLanguages[routing.defaultLocale] ?? getPathname({ locale: routing.defaultLocale, href: '/' });

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
      languages: {
        ...alternateLanguages,
        'x-default': xDefaultHref
      },
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
    manifest: '/manifest.json',
  };
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const {locale} = await params;
  const skipToContentLabel =
    locale === 'fr' ? 'Passer au contenu principal' : 'Skip to main content';
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <GoogleTagManager gtmId="GTM-THDHNXZM" />
      <head>
        {process.env.NODE_ENV === 'production' && (
          <link
            rel="preload"
            href="/slider/001.png"
            as="image"
            type="image/png"
            fetchPriority="high"
          />
        )}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//play.google.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="apple-touch-icon" sizes="180x180" href="/196.png" />
        <meta name="application-name" content="FielMedina" />
        <meta name="theme-color" content="#b65d37" />
        <meta name="apple-itunes-app" content="app-id=6751167445, app-argument=https://www.fielmedina.com" />
        <meta name="google-play-app" content="app-id=com.fielmedina.sousse" />
        <meta property="al:ios:app_store_id" content="6751167445" />
        <meta property="al:ios:url" content="fielmedina://home" />
        <meta property="al:ios:app_name" content="FielMedina" />
        <meta property="al:android:package" content="com.fielmedina.sousse" />
        <meta property="al:android:app_name" content="FielMedina" />
        <meta property="al:web:url" content="https://www.fielmedina.com" />
        
        <StructuredData />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FDF7EC]`}>
        <a href="#main-content" className="skip-to-content">
          {skipToContentLabel}
        </a>
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
