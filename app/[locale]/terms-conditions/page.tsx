import TermsConditions from '@/components/ui/TermsConditions';
import Header from '@/components/ui/Header';
import {getTranslations} from 'next-intl/server';
import {Metadata} from 'next';

type Props = {
  params: Promise<{locale: string}>;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'metadata.termsConditions'});

  // Set canonical URL based on the actual routing configuration
  const canonicalPath = locale === 'en' ? '/terms-conditions' : `/${locale}/terms-conditions`;

  // Only include alternate languages in hreflang, not the current language
  const alternateLanguages = locale === 'en' 
    ? { 'fr': '/fr/terms-conditions' } 
    : { 'en': '/terms-conditions' };

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

export default function TermsConditionsPage() {
  return (
    <>
      <Header />
      <TermsConditions />
    </>
  );
} 