import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Sawa Wallet — Pitch',
  description:
    'Stablecoin payments that feel like mobile money. A live, multi-chain, non-custodial wallet with its own local ramp — Nigeria first.',
  // Unlisted: shareable by link, kept out of search + crawlers.
  robots: { index: false, follow: false },
}

/* ── Small presentational helpers ─────────────────────────────────────────── */

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-forest-green">
      <span className="h-px w-6 bg-forest-green/40" />
      {children}
    </div>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-bold text-forest-green tracking-tight">{value}</div>
      <div className="mt-1 text-xs sm:text-sm text-gray-500">{label}</div>
    </div>
  )
}

/* ── Page ──────────────────────────────────────────────────────────────────── */

export default function PitchPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-green/10 via-cream to-luxury-gold/10" />
        <div className="container-custom relative px-6 pt-32 pb-16 sm:pt-40 sm:pb-24 max-w-5xl mx-auto">
          <FadeIn>
            <Kicker>Pre-seed · Nigeria first</Kicker>
            <h1 className="mt-6 text-5xl sm:text-7xl font-bold tracking-tighter leading-[0.95]">
              Stablecoin payments that feel like{' '}
              <span className="text-forest-green">mobile money.</span>
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-gray-600 max-w-2xl">
              Sawa turns a phone number into the only crypto address you need — non-custodial,
              built on Solana, with real local naira rails. The product is <strong>live</strong>.
              We&apos;re building the usage first, then the token that captures it.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 max-w-3xl">
              <Stat value="Live" label="Multi-chain app, shipping" />
              <Stat value="280+" label="Installs" />
              <Stat value="200+" label="Active users" />
              <Stat value="6" label="Chains supported" />
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#product"
                className="bg-forest-green text-white px-7 py-3.5 rounded-2xl font-semibold hover:bg-forest-green-dark transition-colors"
              >
                See what people can do
              </a>
              <Link
                href="/contact"
                className="border border-charcoal/15 px-7 py-3.5 rounded-2xl font-semibold hover:border-forest-green/40 hover:text-forest-green transition-colors"
              >
                Talk to the founders
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PRODUCT — adoption-first: what a real person can actually do today */}
      <section id="product" className="py-20 sm:py-28">
        <div className="container-custom px-6 max-w-6xl mx-auto">
          <FadeIn>
            <Kicker>What you can do in Sawa today</Kicker>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tighter max-w-3xl">
              One app to hold dollars, spend locally, trade, and own real stocks.
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Adoption comes from usefulness, not whitepapers. Every feature below is built to make a
              first-time user stay.
            </p>
          </FadeIn>

          <StaggerChildren className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                tag: 'Send',
                title: 'Send by phone, @username or email',
                body: 'No 42-character addresses. Send USDC to a contact like a text message. This is the wedge that makes crypto feel normal.',
                accent: 'forest',
              },
              {
                tag: 'Cash in / out',
                title: 'Buy & sell with naira, instantly',
                body: 'Our own local rails convert NGN ⇄ USDC in minutes — no slow third-party bridges, no 5–15% hidden fees. Withdraw straight to any bank account.',
                accent: 'gold',
              },
              {
                tag: 'Trade',
                title: 'Swap & bridge any token',
                body: 'Best-rate token swaps and cross-chain bridging in-app via Jupiter and other aggregators — across Solana and EVM chains, without leaving Sawa.',
                accent: 'forest',
              },
              {
                tag: 'Invest — flagship',
                title: 'Own Apple, Tesla & more with USDC',
                body: 'Tokenized stocks (xStocks by Backed Finance) on Solana. Buy fractional shares of AAPL, TSLA and the S&P from Lagos — settled on-chain, verified against the real issuer. Global markets, no brokerage account.',
                accent: 'gold',
                flagship: true,
              },
              {
                tag: 'Spend',
                title: 'Pay bills, airtime & merchants',
                body: 'Top up airtime and data, pay bills, and (soon) tap a virtual card. Stablecoins people actually spend, not just hold.',
                accent: 'forest',
              },
              {
                tag: 'Own your keys',
                title: 'Non-custodial by design',
                body: 'Users control their own keys via Privy embedded wallets — one login, no seed phrase to lose. We never touch or hold funds.',
                accent: 'forest',
              },
            ].map((f) => (
              <StaggerItem key={f.title}>
                <div
                  className={`h-full rounded-3xl p-7 border transition-colors bg-white ${
                    f.flagship
                      ? 'border-luxury-gold/50 ring-1 ring-luxury-gold/30 shadow-[0_8px_30px_rgba(212,175,55,0.12)]'
                      : 'border-gray-100 hover:border-forest-green/30'
                  }`}
                >
                  <div
                    className={`text-xs font-mono uppercase tracking-widest ${
                      f.accent === 'gold' ? 'text-luxury-gold' : 'text-forest-green'
                    }`}
                  >
                    {f.tag}
                  </div>
                  <h3 className="mt-3 text-xl font-bold tracking-tight">{f.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-gray-600">{f.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 sm:py-24 bg-forest-green text-white">
        <div className="container-custom px-6 max-w-5xl mx-auto">
          <FadeIn>
            <Kicker>
              <span className="text-luxury-gold-light">The problem</span>
            </Kicker>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tighter">
              Crypto keeps failing the people who need it most.
            </h2>
          </FadeIn>
          <StaggerChildren className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {[
              ['Long, scary addresses kill trust', 'Nobody trusts a 42-character Solana address. Africans already send value with phone numbers — apps should too.'],
              ['On/off ramps are broken', 'Hidden fees of 5–15% plus hours of delay make people give up. Local payment rails exist; crypto apps keep ignoring them.'],
              ['The diaspora is getting robbed', 'Families pay far too much to send money home. Billions are lost to remittance fees every single year.'],
              ['Real users bounce on bad UX', 'Demand is proven — but mass adoption won’t happen until the experience feels as simple as the mobile-money apps people already use.'],
            ].map(([t, b]) => (
              <StaggerItem key={t}>
                <h3 className="text-lg font-bold text-luxury-gold-light">{t}</h3>
                <p className="mt-2 text-white/85 leading-relaxed">{b}</p>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* MARKET */}
      <section className="py-20 sm:py-28">
        <div className="container-custom px-6 max-w-5xl mx-auto">
          <FadeIn>
            <Kicker>Market opportunity</Kicker>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tighter">
              Nigeria first. Africa and the diaspora are the prize.
            </h2>
          </FadeIn>
          <StaggerChildren className="mt-10 grid sm:grid-cols-3 gap-5">
            {[
              ['Among the world’s highest crypto-adoption markets', 'Inflation- and remittance-driven demand that already exists — we meet it with better UX.'],
              ['Huge diaspora corridors', 'UK/US → Africa remittances run on slow, expensive incumbents. Stablecoin rails undercut them on price and speed.'],
              ['Wallet layer is global', 'Regulated ramp rollout starts with Nigeria, then Ghana — while the wallet works everywhere from day one.'],
            ].map(([t, b]) => (
              <StaggerItem key={t}>
                <div className="h-full rounded-3xl border border-gray-100 bg-white p-7">
                  <h3 className="text-lg font-bold tracking-tight">{t}</h3>
                  <p className="mt-3 text-[15px] text-gray-600 leading-relaxed">{b}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeIn delay={0.1}>
            <p className="mt-8 font-mono text-sm text-gray-500">
              Sized bottom-up: target users × ramp volume × spread.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* BUSINESS MODEL */}
      <section className="py-20 sm:py-24 bg-sand">
        <div className="container-custom px-6 max-w-6xl mx-auto">
          <FadeIn>
            <Kicker>Business model</Kicker>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tighter">
              Revenue that scales with usage.
            </h2>
          </FadeIn>
          <StaggerChildren className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ['1–3%', 'Ramp margin', 'On every local-currency ⇄ stablecoin conversion (NGN, GHS, XOF → USDC). Scales directly with volume.', true],
              ['0.5–1%', 'Swap & bridge fees', 'On in-app token swaps and cross-chain bridging via Jupiter and other aggregators.', true],
              ['0.8–1.5%', 'Merchant & bills', 'Merchant fees plus bill-payment commissions — becoming the preferred rails for African businesses.', true],
              ['Future', 'Cards & subscriptions', 'Virtual/physical debit cards with interchange revenue, and premium tiers for power users.', false],
            ].map(([v, t, b, primary]) => (
              <StaggerItem key={t as string}>
                <div className="h-full rounded-3xl bg-white border border-gray-100 p-7">
                  <div className="text-xs font-mono uppercase tracking-widest text-gray-400">
                    {primary ? 'Primary revenue' : 'Future'}
                  </div>
                  <div className="mt-3 text-3xl font-bold text-forest-green">{v as string}</div>
                  <div className="mt-1 font-semibold">{t as string}</div>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{b as string}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="py-20 sm:py-28">
        <div className="container-custom px-6 max-w-5xl mx-auto">
          <FadeIn>
            <Kicker>Roadmap</Kicker>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tighter">
              From compliant wallet to on-chain payment protocol.
            </h2>
          </FadeIn>
          <StaggerChildren className="mt-10 grid sm:grid-cols-3 gap-5">
            {[
              ['Phase 1 · Now–Q2 2026', 'Nigeria Launch', 'SEC/VASP compliance live, NGN → USDC ramp at scale, push from hundreds to 10k+ active users.'],
              ['Phase 2 · Q3 2026', 'Ghana & Sawa Pay', 'Ghana entry (GHS rails), merchant network rollout, virtual card beta, bill pay & airtime.'],
              ['Phase 3 · 2027', 'Toolkit & Expansion', 'Open-source developer toolkit GA, multi-country corridors (XOF, KES), diaspora remittance product.'],
            ].map(([phase, title, body]) => (
              <StaggerItem key={title}>
                <div className="h-full rounded-3xl border border-gray-100 bg-white overflow-hidden">
                  <div className="bg-forest-green text-white text-xs font-mono px-5 py-2.5 tracking-wide">
                    {phase}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold tracking-tight">{title}</h3>
                    <p className="mt-3 text-[15px] text-gray-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeIn delay={0.1}>
            <p className="mt-8 font-mono text-sm text-gray-500 max-w-2xl">
              Each phase compounds the last: more users → more ramp volume → richer liquidity → real
              revenue backing the $SAWA token at launch.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* GO-TO-MARKET */}
      <section className="py-20 sm:py-24 bg-forest-green text-white">
        <div className="container-custom px-6 max-w-5xl mx-auto">
          <FadeIn>
            <Kicker><span className="text-luxury-gold-light">Go-to-market</span></Kicker>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tighter">
              Nigeria-heavy execution. Ghana-light preparation.
            </h2>
          </FadeIn>
          <StaggerChildren className="mt-10 grid sm:grid-cols-3 gap-8">
            {[
              ['Nigeria — beachhead', 'Main launch: deeper compliance, stronger local rails, liquidity buffer, and first-user growth loops.'],
              ['Ghana — lean entry', 'In parallel: legal review, regulatory mapping, partner onboarding, and VASP/sandbox readiness.'],
              ['Diaspora', 'UK/US corridors: cheaper, faster remittances via stablecoin rails straight into local off-ramps.'],
            ].map(([t, b]) => (
              <StaggerItem key={t}>
                <h3 className="text-lg font-bold text-luxury-gold-light">{t}</h3>
                <p className="mt-2 text-white/85 leading-relaxed">{b}</p>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* TOOLKIT */}
      <section className="py-20 sm:py-28">
        <div className="container-custom px-6 max-w-5xl mx-auto">
          <FadeIn>
            <Kicker>Developer toolkit</Kicker>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tighter">
              We turn our own rails into primitives other builders can use.
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Lowering the barrier for every builder targeting Africa — phone = address on Solana.
            </p>
          </FadeIn>
          <StaggerChildren className="mt-10 space-y-4">
            {[
              ['@sawa/phone-resolver', 'Resolve phone / username / email → Solana address (primary) or EVM. Built on Privy. TypeScript.'],
              ['Compliance Kit', 'KYC/AML configs (NIN/BVN for 10+ countries), sanctions screening, and tiered limits.'],
              ['Rust Ramp Toolkit', 'Helius watchers, Treasury Manager, Jupiter swaps — the private production rails behind our own ramp.'],
            ].map(([name, body]) => (
              <StaggerItem key={name}>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 sm:flex sm:items-center sm:gap-8">
                  <div className="font-mono text-forest-green font-semibold sm:w-64 shrink-0">{name}</div>
                  <p className="mt-2 sm:mt-0 text-[15px] text-gray-600 leading-relaxed">{body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeIn delay={0.1}>
            <Link href="/toolkit" className="mt-8 inline-flex text-sm font-semibold text-forest-green hover:underline">
              Explore the toolkit →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 sm:py-24 bg-sand">
        <div className="container-custom px-6 max-w-5xl mx-auto">
          <FadeIn>
            <Kicker>Team</Kicker>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tighter">
              A small team that ships fast on almost zero capital.
            </h2>
          </FadeIn>
          <StaggerChildren className="mt-10 grid sm:grid-cols-2 gap-5">
            {[
              ['Divine Evna Olong', 'Founder & CEO · Technical founder', 'Built Sawa end-to-end — the live multi-chain wallet, the in-house ramp, and the open-source toolkit. University of Abuja.'],
              ['Peter Oche “RAV3N”', 'Co-founder · Brand & Growth', '489% user growth on RefundYourSOL and $45K raised in 6 weeks. Owns brand, community and go-to-market.'],
            ].map(([name, role, body]) => (
              <StaggerItem key={name}>
                <div className="h-full rounded-3xl border border-gray-100 bg-white p-7">
                  <h3 className="text-xl font-bold tracking-tight">{name}</h3>
                  <div className="mt-1 text-sm font-mono text-forest-green">{role}</div>
                  <p className="mt-3 text-[15px] text-gray-600 leading-relaxed">{body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-gray-600 max-w-2xl leading-relaxed">
              Backed by a small, highly driven core team — many contributing early because they believe
              in the mission. Execution speed and community ownership are our biggest edge.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* THE ASK */}
      <section className="py-20 sm:py-28">
        <div className="container-custom px-6 max-w-5xl mx-auto">
          <FadeIn>
            <Kicker>The ask</Kicker>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tighter">
              Raising <span className="text-forest-green">$15k</span> pre-seed on a SAFE.
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              The product already exists. This round turns it into a compliant, Nigeria-first stablecoin
              payment network — and pushes adoption hard.
            </p>
          </FadeIn>
          <StaggerChildren className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ['$5k', 'Compliance + legal', 'SEC/VASP readiness and legal review.'],
              ['$3k', 'Rails + liquidity', 'NGN → USDC rails and a liquidity buffer.'],
              ['$4k', 'Card + float', '$3,500 float + $500 card issuing.'],
              ['$3k', 'Launch + adoption', 'Growth loops and first-user acquisition.'],
            ].map(([v, t, b]) => (
              <StaggerItem key={t}>
                <div className="h-full rounded-3xl bg-forest-green text-white p-7">
                  <div className="text-4xl font-bold">{v}</div>
                  <div className="mt-2 font-semibold text-luxury-gold-light">{t}</div>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">{b}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-custom px-6 max-w-5xl mx-auto">
          <div className="rounded-[2rem] bg-gradient-to-br from-forest-green to-forest-green-dark text-white p-10 sm:p-14 text-center">
            <FadeIn>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter">
                Stablecoin payments for everyone in Africa.
              </h2>
              <p className="mt-4 text-lg text-white/85 max-w-2xl mx-auto">
                Nigeria first, Ghana next. The wallet is live and the rails are ours. Let&apos;s talk.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="bg-white text-forest-green px-8 py-3.5 rounded-2xl font-semibold hover:bg-luxury-gold-light transition-colors"
                >
                  Get in touch
                </Link>
                <a
                  href="https://sawawallet.org"
                  className="border border-white/30 px-8 py-3.5 rounded-2xl font-semibold hover:border-white/70 transition-colors"
                >
                  sawawallet.org
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  )
}
