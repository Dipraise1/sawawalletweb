import Link from 'next/link';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/AnimatedSection';

export default function ToolkitPage() {
  return (
    <main className="min-h-screen bg-cream py-24">
      <div className="container-custom max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-forest-green/10 text-forest-green rounded-full text-xs font-semibold tracking-widest mb-6">
            SOLANA FOUNDATION GRANT READY
          </div>
          <h1 className="text-6xl font-bold tracking-tighter text-charcoal mb-6">
            Sawa Toolkit
          </h1>
          <p className="text-2xl text-gray-600 max-w-2xl mb-12">
            Production-grade primitives extracted from Sawa Wallet. 
            Phone-first identity, compliance, and private financial rails for the Solana ecosystem.
          </p>
        </FadeIn>

        <div className="prose prose-lg max-w-none mb-16">
          <h2 className="text-3xl font-semibold mb-8">What&apos;s Inside</h2>
          
          <StaggerChildren className="grid md:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-forest-green/30 transition-colors">
                <div className="text-forest-green text-xl font-mono mb-4">@sawa/phone-resolver</div>
                <p className="text-gray-600 mb-6">
                  Phone number → Privy DID → Solana address resolution with secure cryptographic hashing. 
                  Includes <code>usePhoneResolver()</code> hook and <code>sendToPhone()</code>.
                </p>
                <div className="text-xs uppercase tracking-widest text-gray-400">TypeScript • Privy</div>
                <Link href="https://github.com/Dipraise1/sawa-toolkit/tree/main/packages/phone-resolver" 
                      className="mt-8 inline-flex text-sm font-medium text-forest-green hover:underline">
                  View package →
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-luxury-gold/30 transition-colors">
                <div className="text-luxury-gold text-xl font-mono mb-4">@sawa/compliance-kit</div>
                <p className="text-gray-600 mb-6">
                  Full KYC/AML suite for Africa: NIN/BVN verification, Prembly integration, sanctions screening, 
                  tiered limits, and country-specific compliance configs (10+ countries).
                </p>
                <div className="text-xs uppercase tracking-widest text-gray-400">TypeScript • Production extracted</div>
                <Link href="https://github.com/Dipraise1/sawa-toolkit/tree/main/packages/compliance-kit" 
                      className="mt-8 inline-flex text-sm font-medium text-luxury-gold hover:underline">
                  View package →
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-forest-green/30 transition-colors opacity-75">
                <div className="text-forest-green text-xl font-mono mb-4">Private Rust Rails</div>
                <p className="text-gray-600 mb-6">
                  TreasuryManager, Helius deposit watcher, auto-rebalancing, Jupiter swaps, and phone-hash 
                  processing. <strong>Not open-sourced</strong> — powers our production on/off-ramp with no third-party dependency.
                </p>
                <div className="text-xs uppercase tracking-widest text-gray-400">Rust • Internal only</div>
                <div className="mt-8 text-sm text-gray-400">Used in production • Not public</div>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl p-10 mb-16">
          <h3 className="font-semibold text-xl mb-6">Installation</h3>
          <div className="space-y-6">
            <div>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded-2xl mb-2">npm install @sawa/phone-resolver @sawa/compliance-kit</div>
              <p className="text-sm text-gray-500">TypeScript packages work with any Privy + Solana project.</p>
            </div>
            <div>
              <div className="text-sm text-gray-500">The Rust treasury primitives remain private/internal for now (we run our own rails).</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="https://github.com/Dipraise1/sawa-toolkit" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-charcoal hover:bg-forest-green text-white px-10 py-5 rounded-2xl text-lg font-medium transition-all group"
          >
            View Full Repository on GitHub
            <span className="group-hover:rotate-45 transition-transform text-2xl">↗</span>
          </a>
          <p className="text-xs text-gray-400 mt-8">Built for Solana Foundation Developer Tooling grants • Ready for integration into consumer apps across Africa</p>
        </div>
      </div>
    </main>
  );
}
