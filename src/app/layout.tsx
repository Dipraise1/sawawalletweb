import type { Metadata, Viewport } from 'next'
import { Inter, Calistoga, Outfit } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: false,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
})

const calSans = Calistoga({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: '400',
  variable: '--font-cal-sans',
})

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: {
    default: 'Sawa Wallet - Send Crypto with Just a Phone Number',
    template: '%s | Sawa Wallet',
  },
  description: 'The human-first crypto wallet. Send USDC and other assets instantly to anyone using just their phone number. Non-custodial, multi-chain, and built for real connections.',
  keywords: ['sawa wallet', 'sawawallet', 'sawa crypto', 'crypto wallet', 'send money to africa', 'usdc wallet', 'solana wallet', 'phone number crypto transfer', 'non-custodial wallet', 'cross-border payments', 'stablecoin wallet', 'nigeria crypto', 'kenya crypto', 'ghana crypto'],
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
        url: '/og-image.jpg', 
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
  verification: {
    google: 'verification_token', // Placeholder
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
    <html lang="en" className={`${inter.variable} ${calSans.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
      </head>
      <body className="font-sans antialiased text-charcoal bg-cream selection:bg-forest-green/20 selection:text-forest-green overflow-x-hidden">
        <JsonLd />
        <Navbar />
        {children}
        <Footer />
        <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-forest-green via-luxury-gold to-forest-green z-50 opacity-0 pointer-events-none" />
      </body>
    </html>
  )
}
