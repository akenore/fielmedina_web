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

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
  };
}

export default function ContactPage() {
     return <>
     <Header />
     <Contact />
     </>;
}
