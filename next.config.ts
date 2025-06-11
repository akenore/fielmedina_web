import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  // Performance optimizations
  compiler: {
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Enable experimental features for better performance
  experimental: {
    // Enable gzipSize analysis
    gzipSize: true,
  },

  // Environment variables for optimization
  env: {
    NEXT_TELEMETRY_DISABLED: '1',
    GENERATE_SOURCEMAP: process.env.NODE_ENV === 'development' ? 'true' : 'false',
  },

  // Headers for better caching and performance
  async headers() {
    return [
      {
        // Apply to all routes - BFCache optimized
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          // BFCache-friendly cache headers
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // Cache static assets aggressively
        source: '/(.*)\\.(ico|png|jpg|jpeg|gif|webp|svg|woff|woff2|ttf|eot|otf)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // JavaScript and CSS files
        source: '/(.*)\\.(js|css)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // API routes - minimal caching but BFCache friendly
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, stale-while-revalidate=60',
          },
        ],
      },
    ];
  },

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },

  // Production optimizations
  poweredByHeader: false,
  compress: true,
  
  // TypeScript and ESLint optimizations
  typescript: {
    // Don't run type checking during build (use CI instead)
    ignoreBuildErrors: false,
  },
  eslint: {
    // Don't run ESLint during build (use CI instead)
    ignoreDuringBuilds: false,
  },
};

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');
export default withNextIntl(nextConfig);
