import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.fielmedina.com'
  const currentDate = new Date()

  // Define all the routes for both languages
  const routes = [
    {
      path: '',
      priority: 1,
      changeFreq: 'weekly' as const
    },
    {
      path: '/about',
      priority: 0.8,
      changeFreq: 'monthly' as const
    },
    {
      path: '/contact',
      priority: 0.8,
      changeFreq: 'monthly' as const
    },
    {
      path: '/terms-conditions',
      priority: 0.3,
      changeFreq: 'yearly' as const
    },
    {
      path: '/privacy-policy',
      priority: 0.3,
      changeFreq: 'yearly' as const
    }
  ]

  const locales = ['en', 'fr']

  // Generate sitemap entries for all routes and locales
  const sitemapEntries = routes.flatMap(route => 
    locales.map(locale => {
      // English routes don't have locale prefix, French routes have /fr prefix
      const localePrefix = locale === 'en' ? '' : `/${locale}`;
      return {
        url: `${baseUrl}${localePrefix}${route.path}`,
        lastModified: currentDate,
        changeFrequency: route.changeFreq,
        priority: route.priority,
      };
    })
  )

  // Add the root URL redirect
  sitemapEntries.unshift({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 1,
  })

  return sitemapEntries
} 