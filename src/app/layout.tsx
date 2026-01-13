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
  title: 'Sawa Wallet - Send Crypto with Phone Numbers',
  description: 'Sawa Wallet simplifies crypto transfers by letting you send and receive cryptocurrency using phone numbers, not wallet addresses. Mobile-first, multi-chain, built for emerging markets—starting with Nigeria.',
  keywords: 'crypto wallet, phone number transfers, mobile-first, multi-chain, Nigeria, cryptocurrency, USDC wallet, emerging markets, Solana',
  authors: [{ name: 'Sawa Wallet' }],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
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
