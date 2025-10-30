import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix: {
    mode: 'as-needed',
    prefixes: {
      en: '',
      fr: '/fr'
    }
  },
  pathnames: {
    '/': '/',
    '/about': {
      fr: '/a-propos'
    },
    '/contact': {
      fr: '/contactez-nous'
    },
    '/privacy-policy': {
      fr: '/politique-de-confidentialite'
    },
    '/terms-conditions': {
      fr: '/conditions-generales'
    }
  }
});
