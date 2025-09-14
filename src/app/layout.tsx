import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sawa Wallet - Global Currency, Local Understanding',
  description: 'Send ₦200 worth of USDC to David. The community-focused USDC wallet that quotes transfers in local currency.',
  keywords: 'USDC wallet, Nigeria, cryptocurrency, mobile wallet, local currency',
  authors: [{ name: 'Sawa Wallet' }],
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
