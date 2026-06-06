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
  preload: true,
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
  description: 'The human-first crypto wallet. Send USDC, USDT, SOL, ETH and Bitcoin to anyone with just a phone number. Buy crypto with a bank transfer, cash out to your bank or mobile money via our own rails, and pay bills with Sawa Pay. Non-custodial and multi-chain.',
  keywords: ['sawa wallet', 'sawawallet', 'sawa pay', 'sawa crypto', 'crypto wallet', 'bitcoin wallet', 'buy crypto africa', 'sell crypto', 'cash out crypto', 'crypto off-ramp', 'crypto on-ramp', 'send money to africa', 'usdc wallet', 'usdt wallet', 'solana wallet', 'ethereum wallet', 'phone number crypto transfer', 'non-custodial wallet', 'cross-border payments', 'mobile money crypto', 'pay bills with crypto', 'buy airtime with crypto', 'stablecoin wallet', 'nigeria crypto', 'kenya crypto', 'ghana crypto'],
  authors: [{ name: 'Sawa Wallet Team', url: 'https://sawawallet.org' }],
  creator: 'Sawa Wallet',
  publisher: 'Sawa Wallet',
  metadataBase: new URL('https://sawawallet.org'),
  alternates: {
    canonical: 'https://sawawallet.org',
  },
  openGraph: {
    title: 'Sawa Wallet - Money for People, Not Addresses',
    description: 'Send USDC, SOL, ETH & Bitcoin with just a phone number. Buy crypto with a bank transfer, cash out to your bank or mobile money, and pay bills with Sawa Pay. Fast, secure, non-custodial.',
    url: 'https://sawawallet.org',
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
    description: 'Send money like a text. USDC, SOL, ETH & Bitcoin via phone number. Buy, cash out & pay bills with Sawa Pay. Global, instant, non-custodial.',
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
  // verification: {
  //   google: 'YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN', // Add once verified in Google Search Console
  // },
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
      <body className="font-sans antialiased text-charcoal bg-cream selection:bg-forest-green/20 selection:text-forest-green overflow-x-clip">
        <JsonLd />
        <Navbar />
        {children}
        <Footer />
        <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-forest-green via-luxury-gold to-forest-green z-50 opacity-0 pointer-events-none" />
      </body>
    </html>
  )
}
