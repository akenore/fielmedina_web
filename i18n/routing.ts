import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'fr'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Only use the default locale for the root path
  localePrefix: {
    mode: 'as-needed',
    prefixes: {
      // Don't use a prefix for English
      en: '',
      // Use /fr prefix for French  
      fr: '/fr'
    }
  }
}); 