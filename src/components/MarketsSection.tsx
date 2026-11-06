import { FadeIn, FadeInLeft, FadeInRight } from '@/components/AnimatedSection'

// A single marquee that mixes global tickers with African exchange codes —
// the visual argument for "one story": the world's markets and Africa's, side
// by side. African codes are the exchanges modelled in the open
// african-market-data project, not tradable in-app yet.
const TICKER_ROW = [
  'AAPL', 'NGX', 'TSLA', 'JSE', 'NVDA', 'GSE', 'S&P 500', 'NSE', 'MSFT', 'EGX',
  'AMZN', 'BRVM', 'GOOGL', 'DSE', 'META', 'BSE', 'SPY', 'ZSE',
]

export default function MarketsSection() {
  return (
    <section
      id="markets"
      className="relative py-24 bg-forest-green text-white overflow-hidden"
    >
      {/* soft gold glow + grain, matching the CTA section's treatment */}
      <div className="absolute inset-0 bg-grain opacity-10 mix-blend-overlay" aria-hidden="true" />
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-luxury-gold/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-luxury-gold/90 mb-4">
              Markets
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-5">
              Own the world&apos;s markets.
              <span className="block text-luxury-gold italic">And Africa&apos;s.</span>
            </h2>
            <p className="text-lg text-white/70 font-light leading-relaxed">
              Sawa is closing the gap between global capital and African investors —
              from both ends. Trade the world&apos;s biggest companies today, while we
              build the open data layer African stock markets have never had.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* ─── Global stocks: live today ─────────────────────────────── */}
          <FadeInLeft>
            <div className="h-full rounded-3xl bg-white/[0.06] border border-white/10 backdrop-blur-sm p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-forest-green bg-luxury-gold px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest-green" aria-hidden="true" />
                  Live in beta
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">Global stocks, tokenized</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Buy fractional <span className="text-white font-medium">Apple, Tesla, NVIDIA</span> or
                S&amp;P 500 exposure — over <span className="text-white font-medium">50 US stocks and ETFs</span> as
                tokenized stocks on Solana, with trades routed through{' '}
                <span className="text-white font-medium">Jupiter&apos;s</span> liquidity. No brokerage
                account, no minimums — start from about a dollar and settle on-chain in minutes.
              </p>
              <ul className="space-y-3 mt-auto">
                {[
                  'Fractional ownership from ~$1',
                  'Tokenized on Solana, routed via Jupiter',
                  'No brokerage account or paperwork',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                    <svg className="w-5 h-5 flex-shrink-0 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInLeft>

          {/* ─── African exchanges: data infrastructure ────────────────── */}
          <FadeInRight>
            <div className="h-full rounded-3xl bg-white/[0.06] border border-white/10 backdrop-blur-sm p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-luxury-gold bg-white/10 border border-luxury-gold/30 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" aria-hidden="true" />
                  Building in the open
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">African exchanges, open data</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Every African venue publishes differently, and half publish nothing a machine can
                read. We&apos;re building the layer underneath:{' '}
                <span className="text-white font-medium">one normalised API</span> across{' '}
                <span className="text-white font-medium">17 African exchanges</span> — NGX, JSE, GSE,
                Nairobi, EGX, BRVM and more — with <span className="text-white font-medium">honest
                provenance</span> on every quote. The groundwork for bringing African equities on-chain.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  '17 exchanges, one normalised schema',
                  'Provenance & staleness on every price',
                  'Open source — free to build on',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                    <svg className="w-5 h-5 flex-shrink-0 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://github.com/sawawallet/african-market-data"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-luxury-gold hover:text-luxury-gold-light transition-colors"
              >
                Explore the open-source project
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </FadeInRight>
        </div>

        {/* ─── Mixed ticker marquee ─────────────────────────────────────── */}
        <FadeIn delay={0.2}>
          <div className="relative mt-14 flex overflow-hidden fade-edges">
            <div className="flex items-center gap-3 animate-marquee-left min-w-full">
              {[...TICKER_ROW, ...TICKER_ROW, ...TICKER_ROW].map((t, i) => (
                <span
                  key={i}
                  className="flex-shrink-0 inline-flex items-center font-mono text-sm font-semibold tracking-tight text-white/60 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full whitespace-nowrap"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <a
              href="#download"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-luxury-gold text-forest-green-dark font-semibold text-sm shadow-lg hover:bg-luxury-gold-light hover:-translate-y-0.5 transition-all duration-300"
            >
              Get early access <span aria-hidden="true">→</span>
            </a>
            <p className="mt-6 text-xs text-white/40 max-w-2xl mx-auto leading-relaxed">
              Tokenized stocks are not available in every country and are not offered to US persons;
              some features require identity verification. African exchange trading is not yet
              available — african-market-data is open data infrastructure. Nothing here is investment advice.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
