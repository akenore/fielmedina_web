import Contact from '@/components/ui/Contact';
import Header from '@/components/ui/Header';
import {getTranslations} from 'next-intl/server';
import {Metadata} from 'next';

type Props = {
  params: Promise<{locale: string}>;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'metadata.contact'});

  // Set canonical URL based on the actual routing configuration
  const canonicalPath = locale === 'en' ? '/contact' : `/${locale}/contact`;

  // Only include alternate languages in hreflang, not the current language
  const alternateLanguages = locale === 'en' 
    ? { 'fr': '/fr/contact' } 
    : { 'en': '/contact' };

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    metadataBase: new URL('https://www.fielmedina.com'),
    alternates: {
      canonical: canonicalPath,
      languages: alternateLanguages,
    },
  };
}

export default function ContactPage() {
     return <>
     <Header />
     <Contact />
     </>;
}
