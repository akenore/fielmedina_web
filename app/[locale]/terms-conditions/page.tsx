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

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
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