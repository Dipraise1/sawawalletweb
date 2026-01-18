import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
})

export const metadata: Metadata = {
  title: {
    default: 'Sawa Wallet - Money for People, Not Addresses',
    template: '%s | Sawa Wallet',
  },
  description: 'Send and receive crypto instantly using just a phone number. Sawa Wallet is the multi-chain, non-custodial wallet built for real human connections across Africa and the world.',
  keywords: ['crypto wallet', 'send money to africa', 'usdc wallet', 'solana wallet', 'phone number crypto transfer', 'non-custodial wallet', 'cross-border payments', 'nigeria crypto', 'kenya crypto', 'ghana crypto'],
  authors: [{ name: 'Sawa Wallet Team', url: 'https://sawawallet.com' }],
  creator: 'Sawa Wallet',
  publisher: 'Sawa Wallet',
  metadataBase: new URL('https://sawawallet.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sawa Wallet - Money for People, Not Addresses',
    description: 'Stop copying long wallet addresses. Send crypto to friends and family using just their phone number. Fast, secure, and built for everyone.',
    url: 'https://sawawallet.com',
    siteName: 'Sawa Wallet',
    images: [
      {
        url: '/og-image.jpg', // We should probably create this or use a default
        width: 1200,
        height: 630,
        alt: 'Sawa Wallet - The Human Crypto Wallet',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sawa Wallet - The Human Way to Send Crypto',
    description: 'Send money like a text. No wallet addresses, just phone numbers. Global, instant, and secure.',
    creator: '@sawawallet',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2D5016',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
