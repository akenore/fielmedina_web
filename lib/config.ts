// Configuration for the application
export const config = {
  // GraphQL API Configuration
  graphqlUrl: process.env.NEXT_PUBLIC_GRAPHQL_URL || 'http://localhost:8000/graphql',
  
  // Default language
  defaultLanguage: 'en',
  
  // Supported languages
  supportedLanguages: ['en', 'fr'],
} as const;
