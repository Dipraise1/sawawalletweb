/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== 'production'

// Next.js dev mode (Fast Refresh / HMR) evaluates modules via eval(), so it
// needs 'unsafe-eval'. Production builds don't — keep prod strict.
const scriptSrc = [
  "script-src 'self' 'unsafe-inline'",
  isDev ? "'unsafe-eval'" : '',
  'https://www.googletagmanager.com https://www.google-analytics.com',
]
  .filter(Boolean)
  .join(' ')

const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },

  // Production-grade HTTP security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Content Security Policy — restricts where scripts, styles, and
          // connections may come from. Even if markup were ever injected, the
          // browser would refuse to load off-origin scripts or exfiltrate data.
          // 'unsafe-inline' is required for Next.js' hydration bootstrap and GA;
          // the allowlisted origins are limited to Google Analytics/Tag Manager.
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "base-uri 'self'",
              "object-src 'none'",
              "frame-ancestors 'none'",
              "form-action 'self'",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data:",
              "style-src 'self' 'unsafe-inline'",
              scriptSrc,
              "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://*.analytics.google.com",
              "upgrade-insecure-requests",
            ].join('; '),
          },
          // Prevent browsers from MIME-sniffing a response away from the declared content-type
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Deny embedding this site in iframes (clickjacking protection)
          { key: 'X-Frame-Options', value: 'DENY' },
          // Enable XSS filter in older browsers
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          // Control referrer info included with requests
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Restrict browser features not needed by the app
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          // HSTS: enforce HTTPS for 2 years, include subdomains
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
      // Long-term cache for static assets (Next.js immutable hashed files)
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Cache public images/fonts for 30 days
      {
        source: '/(.*)\\.(jpg|jpeg|png|gif|webp|avif|svg|ico|woff|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
