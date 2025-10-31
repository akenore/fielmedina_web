import {getTranslations} from 'next-intl/server';
import {routing} from '../../i18n/routing';
import {getPathname} from '../../i18n/navigation';

type HeadProps = {
  params: {locale: string};
};

const BASE_URL = 'https://www.fielmedina.com';
const OG_LOCALE_MAP: Record<string, string> = {
  en: 'en_US',
  fr: 'fr_FR'
};

export default async function Head({params}: HeadProps) {
  const {locale} = params;
  const t = await getTranslations({locale, namespace: 'metadata.home'});

  const canonicalPath = getPathname({locale, href: '/'});
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;
  const ogLocale = OG_LOCALE_MAP[locale] ?? OG_LOCALE_MAP.en;

  const alternateLinks = routing.locales.map((alternateLocale) => {
    const href = `${BASE_URL}${getPathname({locale: alternateLocale, href: '/'})}`;
    return {hrefLang: alternateLocale, href};
  });

  const xDefaultHref = `${BASE_URL}${getPathname({
    locale: routing.defaultLocale,
    href: '/'
  })}`;

  return (
    <>
      <title>{t('title')}</title>
      <meta name="description" content={t('description')} />
      <meta name="keywords" content={t('keywords')} />
      <link rel="canonical" href={canonicalUrl} />

      {alternateLinks.map(({hrefLang, href}) => (
        <link key={hrefLang} rel="alternate" hrefLang={hrefLang} href={href} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={xDefaultHref} />

      <meta property="og:title" content={t('title')} />
      <meta property="og:description" content={t('description')} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="FielMedina" />
      <meta property="og:locale" content={ogLocale} />
      {routing.locales
        .filter((code) => code !== locale)
        .map((code) => (
          <meta
            key={code}
            property="og:locale:alternate"
            content={OG_LOCALE_MAP[code] ?? OG_LOCALE_MAP.en}
          />
        ))}
      <meta property="og:image" content={`${BASE_URL}/logo.png`} />
      <meta property="og:image:alt" content={t('title')} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t('title')} />
      <meta name="twitter:description" content={t('description')} />
      <meta name="twitter:image" content={`${BASE_URL}/logo.png`} />
      <meta name="twitter:site" content="@FielMedina" />
      <meta name="twitter:creator" content="@FielMedina" />
    </>
  );
}
