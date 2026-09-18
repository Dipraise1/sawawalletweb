import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12 pb-16 border-b border-white/10">
          {/* Brand + Positioning */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative w-10 h-10 rounded-2xl overflow-hidden bg-gradient-to-br from-forest-green to-luxury-gold flex-shrink-0 shadow-inner ring-1 ring-white/20">
                <Image src="/logo.png" alt="Sawa" fill sizes="40px" className="object-cover scale-90 group-hover:scale-100 transition-transform" />
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tighter text-white">Sawa</span>
                <span className="block text-[10px] text-luxury-gold/80 -mt-1 tracking-[2px]">WALLET</span>
              </div>
            </Link>
            
            <p className="text-gray-400 max-w-sm leading-relaxed mb-8">
              Phone-first crypto for Africa. Non-custodial embedded wallets via Privy. 
              Real KYC/AML rails. Now with <span className="text-luxury-gold">open-source developer primitives</span>.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/Dipraise1/sawa-toolkit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-sm transition-all hover:border-luxury-gold/30"
              >
                <span className="text-luxury-gold">★</span>
                <span>Toolkit on GitHub</span>
              </a>
              <a
                href="/#toolkit"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-sm transition-all hover:border-forest-green/30"
              >
                For Developers
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[1px] text-luxury-gold mb-6">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="/#toolkit" className="text-gray-400 hover:text-white transition-colors">Sawa Toolkit</a></li>
              <li><a href="/#investments" className="text-gray-400 hover:text-white transition-colors">Investments</a></li>
              <li><a href="/#town-hall" className="text-gray-400 hover:text-white transition-colors">Town Hall</a></li>
              <li><Link href="/fees" className="text-gray-400 hover:text-white transition-colors">Fees &amp; Limits</Link></li>
              <li><Link href="/security" className="text-gray-400 hover:text-white transition-colors">Security</Link></li>
              <li><Link href="/status" className="text-gray-400 hover:text-white transition-colors">System Status</Link></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Get Support</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[1px] text-luxury-gold mb-6">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://github.com/Dipraise1/sawa-toolkit" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><a href="/#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms</Link></li>
              <li><Link href="/aml-policy" className="text-gray-400 hover:text-white transition-colors">AML &amp; Compliance</Link></li>
              <li><Link href="/delete-data" className="text-gray-400 hover:text-white transition-colors">Delete Data</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[1px] text-luxury-gold mb-6">Connect</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="https://x.com/sawawallet" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
                𝕏 (Twitter)
              </a>
              <a href="https://discord.gg/TbvR5UcG" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
                Discord
              </a>
              <a href="https://www.tiktok.com/@sawa.wallet" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
                TikTok
              </a>
              <a href="mailto:support@sawawallet.org" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
                Email Us
              </a>
            </div>
          </div>
        </div>

        {/* Who we are and what this is — the disclosure the app stores, and
            anyone reading a price on this page, are entitled to see. Kept in step
            with constants/disclosures.ts in the app; change both together. */}
        <div className="pt-8 pb-2 text-xs leading-relaxed text-gray-500 border-t border-white/10">
          <p className="max-w-4xl">
            Sawa Wallet is operated by <span className="text-gray-400">APE IT TECH (PTY) LTD</span>. Sawa is
            software, not a broker, exchange, bank or investment adviser, and nothing on this site is investment
            advice. Crypto-assets are volatile and are not bank deposits — they are not covered by any deposit
            insurance scheme, and you can lose money. Sawa is non-custodial: your keys are held on your device
            through Privy, so we cannot move your funds or restore them if you lose your recovery phrase.
            Tokenized stocks are third-party tokens issued by Backed Finance that track a share price — they carry
            no ownership or voting rights — and both they and prediction markets are traded through Jupiter, an
            independent protocol that is not Sawa. Buying and cashing out to a bank are live in Nigeria only, with
            the bank leg executed by our licensed payment partner, Korapay. Features and availability vary by
            country. See our{' '}
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white underline underline-offset-2">Terms</Link>,{' '}
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white underline underline-offset-2">Privacy Policy</Link>{' '}
            and{' '}
            <Link href="/aml-policy" className="text-gray-400 hover:text-white underline underline-offset-2">AML &amp; Compliance</Link>{' '}
            policy.
          </p>
        </div>

        {/* Bottom Bar with Grant/Positioning */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500 border-t border-white/10">
          <div className="flex items-center gap-6">
            <p>© {new Date().getFullYear()} APE IT TECH (PTY) LTD. Non-custodial • Built for Africa.</p>
            <a href="https://github.com/Dipraise1/sawa-toolkit" target="_blank" rel="noopener noreferrer" className="hover:text-luxury-gold transition-colors flex items-center gap-1">
              <span className="text-luxury-gold">↗</span> Open Source Toolkit
            </a>
          </div>
          
          <div className="flex items-center gap-8">
            <p className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 bg-luxury-gold rounded-full animate-pulse"></span>
              Open Source Primitives
            </p>
            <p>Privy • Rust (internal) • Helius</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
