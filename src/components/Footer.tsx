import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="relative w-9 h-9 rounded-full overflow-hidden bg-forest-green flex-shrink-0">
                <Image src="/logo.png" alt="Sawa" fill className="object-cover" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">Sawa Wallet</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Send crypto with a phone number. Mobile-first, multi-chain, built for Africa and emerging markets.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://discord.gg/TbvR5UcG"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Discord"
              >
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C2.601 6.7 2 9.224 2 11.776c0 2.181.5 4.237 1.486 6.17a.07.07 0 0 0 .031.03a19.9 19.9 0 0 0 5.993 3.15a.074.074 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.15a.07.07 0 0 0 .032-.03c1.011-1.934 1.486-3.99 1.486-6.17c0-2.552-.6-5.075-1.645-7.38a.066.066 0 0 0-.031-.027z"/>
                </svg>
              </a>
              <a
                href="https://x.com/divinecodes11"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-sm text-gray-400 hover:text-luxury-gold transition-colors">Features</a></li>
              <li><a href="#investments" className="text-sm text-gray-400 hover:text-luxury-gold transition-colors">Investments</a></li>
              <li><a href="#download" className="text-sm text-gray-400 hover:text-luxury-gold transition-colors">Join Waitlist</a></li>
              <li>
                <a
                  href="https://discord.gg/TbvR5UcG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-luxury-gold transition-colors"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-luxury-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-luxury-gold transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-400 hover:text-luxury-gold transition-colors">Contact</Link></li>
              <li><Link href="/delete-data" className="text-sm text-gray-400 hover:text-luxury-gold transition-colors">Delete My Data</Link></li>
              <li>
                <a href="mailto:support@sawawallet.com" className="text-sm text-gray-400 hover:text-luxury-gold transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Sawa Wallet. Made with{' '}
            <span className="text-red-400">&hearts;</span>{' '}
            for Africa.
          </p>
          <p className="text-xs text-gray-600">
            Powered by Solana &amp; EVM
          </p>
        </div>
      </div>
    </footer>
  )
}
