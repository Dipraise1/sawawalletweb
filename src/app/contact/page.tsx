import Link from 'next/link'
import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us - Sawa Wallet Support',
  description: 'Get in touch with Sawa Wallet team. We are here to help with any questions about sending money, crypto transfers, or account support.',
  openGraph: {
    title: 'Contact Us - Sawa Wallet Support',
    description: 'Get in touch with Sawa Wallet team. We are here to help with any questions about sending money, crypto transfers, or account support.',
  },
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm text-forest-green hover:text-forest-green/80 font-medium transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">Contact & Support</h1>
              <p className="text-sm text-gray-600">
                Have questions? We&apos;re here to help. Reach out to us through any of the channels below.
              </p>
            </div>

            {/* What Sawa Does */}
            <div className="bg-gradient-to-br from-forest-green/5 to-luxury-gold/5 rounded-xl p-6 border border-forest-green/10">
              <h2 className="text-lg font-bold text-charcoal mb-3">About Sawa Wallet</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Sawa Wallet simplifies crypto transfers by letting users send and receive cryptocurrency using phone numbers, not wallet addresses. Mobile-first, multi-chain support for Solana and EVM chains, built for Africa and emerging markets.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-forest-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Send & receive crypto using phone numbers (no wallet addresses)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-forest-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Mobile-first design for smartphones</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-forest-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Multi-chain: Solana & EVM chains (Ethereum, Polygon, BSC, etc.)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-forest-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Built for Africa and emerging markets</span>
                </li>
              </ul>
            </div>

            {/* Investor Notice */}
            <div className="bg-gradient-to-r from-luxury-gold/10 to-forest-green/10 border-l-4 border-luxury-gold rounded-lg p-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-luxury-gold mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-sm font-semibold text-luxury-gold mb-1">Seeking Early Investors</h3>
                  <p className="text-xs text-gray-700 leading-relaxed mb-2">
                    We&apos;re looking for strategic investors to join us in revolutionizing money transfers across Africa. Select &quot;Investor Inquiry&quot; below to learn more about investment opportunities.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <a 
                      href="/sawa-pitch-deck.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 bg-luxury-gold text-white text-xs font-semibold rounded-lg hover:bg-luxury-gold/90 transition-colors"
                    >
                      <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Pitch Deck
                    </a>
                    <a 
                      href="mailto:investors@sawawallet.com" 
                      className="text-[10px] text-gray-600 hover:text-forest-green transition-colors font-semibold"
                    >
                      investors@sawawallet.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-sm font-semibold text-yellow-800 mb-1">Important Disclaimer</h3>
                  <p className="text-xs text-yellow-700 leading-relaxed">
                    Sawa Wallet does not provide financial advice and makes no guarantees regarding profits or returns. Cryptocurrency investments carry significant risks, including potential loss of capital. Always do your own research.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-charcoal">Get in Touch</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Support */}
                <a
                  href="mailto:support@sawawallet.com"
                  className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-forest-green hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-forest-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-charcoal mb-1">Email Support</h3>
                    <p className="text-xs text-gray-600">support@sawawallet.com</p>
                  </div>
                </a>

                {/* Discord */}
                <a
                  href="https://discord.gg/TbvR5UcG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-[#5865F2] hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-[#5865F2]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#5865F2]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C2.601 6.7 2 9.224 2 11.776c0 2.181.5 4.237 1.486 6.17a.07.07 0 0 0 .031.03a19.9 19.9 0 0 0 5.993 3.15a.074.074 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.15a.07.07 0 0 0 .032-.03c1.011-1.934 1.486-3.99 1.486-6.17c0-2.552-.6-5.075-1.645-7.38a.066.066 0 0 0-.031-.027zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-charcoal mb-1">Discord Community</h3>
                    <p className="text-xs text-gray-600">Join the conversation</p>
                  </div>
                </a>

                {/* General Inquiries */}
                <a
                  href="mailto:hello@sawawallet.com"
                  className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-forest-green hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-luxury-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-charcoal mb-1">General Inquiries</h3>
                    <p className="text-xs text-gray-600">hello@sawawallet.com</p>
                  </div>
                </a>

                {/* Legal */}
                <a
                  href="mailto:legal@sawawallet.com"
                  className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-forest-green hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-charcoal mb-1">Legal & Privacy</h3>
                    <p className="text-xs text-gray-600">legal@sawawallet.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-charcoal mb-3">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/privacy-policy" className="block text-xs text-gray-600 hover:text-forest-green transition-colors">
                  → Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="block text-xs text-gray-600 hover:text-forest-green transition-colors">
                  → Terms of Service
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:sticky lg:top-24 h-fit">
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  )
}
