import type { Metadata, Viewport } from 'next'
import { Outfit, Fraunces } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import AmbientMusicPlayer from '@/components/AmbientMusicPlayer'
import ConsentBanner from '@/components/ConsentBanner'
import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

// Body / UI face — clean, characterful geometric sans
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
})

// Display face — warm, editorial serif with soft optical styling.
// `opsz` (optical size) + `SOFT`/`WONK` axes give it the human, premium feel.
const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  preload: true,
  axes: ['opsz', 'SOFT'],
})

export const metadata: Metadata = {
  title: {
    default: 'Sawa Wallet - Send Crypto with Just a Phone Number',
    template: '%s | Sawa Wallet',
  },
  description: 'The human-first crypto wallet. Send USDC, USDT, SOL, ETH, SUI and Bitcoin to anyone with just a phone number. Buy crypto with a bank transfer, cash out to your bank or mobile money via our own rails, swap tokens in-app, and pay bills with Sawa Pay. Trade tokenized stocks and prediction markets, and lock funds in on-chain escrow. Non-custodial and multi-chain, in 7 languages.',
  keywords: ['sawa wallet', 'sawawallet', 'sawa pay', 'sawa crypto', 'crypto wallet', 'bitcoin wallet', 'buy crypto africa', 'sell crypto', 'cash out crypto', 'crypto off-ramp', 'crypto on-ramp', 'send money to africa', 'usdc wallet', 'usdt wallet', 'solana wallet', 'ethereum wallet', 'sui wallet', 'crypto swap', 'token swap app', 'virtual card crypto', 'phone number crypto transfer', 'non-custodial wallet', 'cross-border payments', 'mobile money crypto', 'pay bills with crypto', 'buy airtime with crypto', 'crypto payment links', 'stablecoin wallet', 'nigeria crypto', 'kenya crypto', 'ghana crypto', 'tokenized stocks', 'xstocks', 'buy apple stock crypto', 'tokenized equities solana', 'prediction markets', 'crypto escrow', 'freelance escrow crypto', 'solana staking'],
  authors: [{ name: 'Sawa Wallet Team', url: 'https://sawawallet.org' }],
  creator: 'Sawa Wallet',
  publisher: 'Sawa Wallet',
  metadataBase: new URL('https://sawawallet.org'),
  alternates: {
    canonical: 'https://sawawallet.org',
  },
  openGraph: {
    title: 'Sawa Wallet - Money for People, Not Addresses',
    description: 'Send USDC, SOL, ETH, SUI & Bitcoin with just a phone number. Buy crypto with a bank transfer, cash out to your bank or mobile money, swap tokens in-app, and pay bills with Sawa Pay. Fast, secure, non-custodial.',
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
    <html lang="en" className={`${outfit.variable} ${fraunces.variable} scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        {/* Consent Mode v2 defaults — must run before GA loads. Privacy-first:
            no analytics cookies until the visitor opts in; measurement runs in
            anonymized, cookieless mode by default. */}
        {GA_ID && (
          <Script id="consent-default" strategy="beforeInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
window.gtag=window.gtag||gtag;
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});
gtag('set','url_passthrough',true);gtag('set','ads_data_redaction',true);
try{if(localStorage.getItem('sawa-consent')==='granted')gtag('consent','update',{analytics_storage:'granted'});}catch(e){}`}
          </Script>
        )}
      </head>
      <body className="font-sans antialiased text-charcoal bg-cream selection:bg-forest-green/20 selection:text-forest-green overflow-x-clip">
        <JsonLd />
        <Navbar />
        {children}
        <Footer />

        {/* Subtle Ambient Background Music - Loops automatically but very low volume */}
        <AmbientMusicPlayer />

        {/* Hybrid privacy: cookieless by default, opt-in for full analytics.
            Always shown so the visitor's choice is captured up front — it is
            re-applied automatically if/when GA is configured. */}
        <ConsentBanner />

        <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-forest-green via-luxury-gold to-forest-green z-50 opacity-0 pointer-events-none" />
        <Analytics />
        <SpeedInsights />
      </body>
      {/* Free Google Analytics 4 — loads only when NEXT_PUBLIC_GA_ID is set */}
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  )
}
