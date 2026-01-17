import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-charcoal via-gray-900 to-charcoal text-white border-t border-gray-800/50 relative overflow-hidden">
      {/* Subtle background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-green/5 via-transparent to-luxury-gold/5"></div>
      
      <div className="container-custom py-6 relative z-10 px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent text-sm">
              Sawa Wallet
            </h3>
            <p className="text-[10px] text-gray-400 leading-relaxed">
              Simple money transfers with local currency quotations. Send USDC as easily as sending a text.
            </p>
            <div className="pt-2 space-y-1.5">
              <Link 
                href="/contact" 
                className="inline-flex items-center text-[10px] text-luxury-gold hover:text-luxury-gold/80 transition-colors font-medium"
              >
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
                Investor Inquiries →
              </Link>
              <a 
                href="/sawa-pitch-deck.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[10px] text-gray-400 hover:text-luxury-gold transition-colors"
              >
                📄 Pitch Deck
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-300">Legal</h4>
            <nav className="space-y-2">
              <Link href="/privacy-policy" className="block text-[10px] text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="block text-[10px] text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/delete-data" className="block text-[10px] text-gray-400 hover:text-white transition-colors">
                Delete My Data
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-300">Support</h4>
            <nav className="space-y-2">
              <Link href="/contact" className="block text-[10px] text-gray-400 hover:text-white transition-colors">
                Contact Us
              </Link>
              <a href="mailto:support@sawawallet.com" className="block text-[10px] text-gray-400 hover:text-white transition-colors">
                support@sawawallet.com
              </a>
              <a href="https://discord.gg/TbvR5UcG" target="_blank" rel="noopener noreferrer" className="block text-[10px] text-gray-400 hover:text-white transition-colors">
                Discord Community
              </a>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-300">Connect</h4>
            <div className="flex items-center space-x-2">
              <a 
                href="https://discord.gg/TbvR5UcG" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 bg-[#5865F2]/90 rounded-lg flex items-center justify-center hover:bg-[#5865F2] hover:scale-110 transition-all shadow-sm hover:shadow-md"
                aria-label="Discord"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C2.601 6.7 2 9.224 2 11.776c0 2.181.5 4.237 1.486 6.17a.07.07 0 0 0 .031.03a19.9 19.9 0 0 0 5.993 3.15a.074.074 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.15a.07.07 0 0 0 .032-.03c1.011-1.934 1.486-3.99 1.486-6.17c0-2.552-.6-5.075-1.645-7.38a.066.066 0 0 0-.031-.027zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all shadow-sm hover:shadow-md"
                aria-label="X"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-gray-500">
          <p>
            © {new Date().getFullYear()} Sawa Wallet. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Made with ❤️ for Africa
          </p>
        </div>
      </div>
    </footer>
  )
}