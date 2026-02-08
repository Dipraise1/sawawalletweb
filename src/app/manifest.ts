import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sawa Wallet',
    short_name: 'Sawa',
    description: 'The human-first crypto wallet. Send USDC and other assets instantly to anyone using just their phone number.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F4F1E8',
    theme_color: '#2D5016',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      }
    ],
  }
}
