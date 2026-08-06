import TeamSection from '@/components/TeamSection'
import TrustSection from '@/components/TrustSection'
import {
  FadeIn,
  FadeInLeft,
  FadeInRight,
  FloatingCard,
} from '@/components/AnimatedSection'
import HeroScrollPhone from '@/components/HeroScrollPhone'
import StoryScrollSection from '@/components/StoryScrollSection'
import TownHallSection from '@/components/TownHallSection'
import WaitlistForm from '@/components/WaitlistForm'
import { FAQ_ITEMS } from '@/lib/faq'
import Image from 'next/image'
import {
  SolanaMark,
  EthereumMark,
  BitcoinMark,
  LetterMark,
} from '@/components/icons/BrandMarks'

// `Mark` is optional — see BrandMarks.tsx for why some fall back to a lettermark.
const PARTNERS: { name: string; Mark?: (p: { className?: string }) => JSX.Element }[] = [
  { name: 'Solana', Mark: SolanaMark },
  { name: 'Ethereum', Mark: EthereumMark },
  { name: 'Bitcoin', Mark: BitcoinMark },
  { name: 'Privy' },
  { name: 'Tron' },
  { name: 'Meld' },
  { name: 'Paystack' },
  { name: 'Helius' },
]

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-cream font-sans selection:bg-forest-green/20 selection:text-forest-green-dark">

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 25%, rgba(212,175,55,0.05), transparent 60%), radial-gradient(ellipse 60% 50% at 50% 100%, rgba(45,80,22,0.03), transparent 55%)',
          }}
        />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            <div className="reveal">
              <h1 className="heading-hero text-charcoal mb-6">
                Send money{' '}
                <br className="hidden sm:block" />
                <span className="text-forest-green italic">like a text.</span>
              </h1>
            </div>

            <div className="reveal reveal-1">
              <p className="text-body-lg mb-10 max-w-xl mx-auto">
                Crypto wallets are complicated. Sawa replaces long addresses
                with phone numbers — send, receive, and pay friends instantly.
              </p>
            </div>

            <div className="reveal reveal-2">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
                <a
                  href="https://testflight.apple.com/join/5CT6rA8q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-charcoal text-white rounded-xl hover:bg-charcoal/90 transition-colors font-medium text-sm shadow-sm"
                  aria-label="Join the Sawa Wallet iOS beta on TestFlight"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  Download for iOS
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.sawawallet.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors font-medium text-sm text-charcoal shadow-sm"
                  aria-label="Get Sawa Wallet on Google Play"
                >
                  <Image src="/google-play-badge.png" alt="" width={646} height={250} className="h-5 w-auto" />
                  Download for Android
                </a>
              </div>
            </div>

            <div className="reveal reveal-3">
              <div className="flex items-center justify-center gap-8 sm:gap-14 mb-12">
                {[
                  { value: '50+', label: 'Countries' },
                  { value: '2.4s', label: 'Avg transfer' },
                  { value: '<0.5%', label: 'Network fees' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="font-display text-2xl sm:text-3xl font-semibold text-forest-green leading-none">
                      {stat.value}
                    </div>
                    <div className="mt-1.5 text-[11px] uppercase tracking-widest text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal reveal-4 relative">
              {/* Height follows the render's aspect ratio rather than a fixed
                  pixel height, so the bottom bezel is never sliced off. The
                  render carries ~12% transparent padding top and bottom; the
                  negative margins crop that dead space instead of letting it
                  push the phone below the fold. */}
              <div className="relative mx-auto w-full max-w-[900px]">
                <HeroScrollPhone className="relative z-20 mx-auto w-[360px] sm:w-[540px] max-w-full -my-14 sm:-my-24" />
                <div className="absolute left-1/2 bottom-2 -translate-x-1/2 w-48 h-12 bg-forest-green/15 rounded-full blur-2xl" aria-hidden="true" />

                <FloatingCard
                  animateY={[0, -8, 0]}
                  delay={1.5}
                  className="absolute left-[16%] bottom-[24%] bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-gray-100/80 z-30 hidden sm:flex items-center gap-3 w-56"
                >
                  <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0" aria-hidden="true">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-charcoal">Just a phone number</div>
                    <div className="text-xs text-gray-500">No address needed</div>
                  </div>
                </FloatingCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STORY ──────────────────────────────────────────────────────── */}
      <StoryScrollSection />

      {/* ─── POWERED BY ──────────────────────────────────────────────────── */}
      <section className="py-14 bg-white border-t border-gray-100 overflow-hidden">
        <div className="container-custom mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Powered by industry-leading infrastructure
          </p>
        </div>

        <div className="relative flex overflow-hidden group fade-edges">
          <div className="flex items-center gap-16 sm:gap-20 animate-marquee-left group-hover:[animation-play-state:paused] min-w-full">
            {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center gap-3 text-charcoal/45 hover:text-charcoal transition-colors duration-300"
              >
                {partner.Mark ? (
                  <partner.Mark className="w-6 h-6 flex-shrink-0" />
                ) : (
                  <LetterMark letter={partner.name[0]} className="w-6 h-6 flex-shrink-0" />
                )}
                <span className="font-semibold text-lg whitespace-nowrap tracking-tight">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY SAWA ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <FadeInLeft>
              <div className="relative rounded-3xl overflow-hidden bg-sand aspect-[4/5] lg:aspect-square group shadow-xl">
                <Image
                  src="/Green & Yellow.jpg"
                  alt="Two people smiling while using Sawa Wallet to send money"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-white text-lg font-medium leading-snug">&quot;It just works, like magic.&quot;</p>
                  <p className="text-white/60 text-sm mt-1">— Early beta user, Lagos</p>
                </div>
              </div>
            </FadeInLeft>

            <div>
              <FadeInRight delay={0.1}>
                <p className="text-xs font-semibold uppercase tracking-widest text-forest-green mb-4">Why Sawa</p>
                <h2 className="heading-2 mb-6">Designed for real relationships.</h2>
                <p className="text-body-lg mb-10">
                  Sending money shouldn&apos;t feel like a transaction — it&apos;s an act of care.
                  Whether paying tuition, sending support home, or splitting a bill,
                  Sawa respects the connection between you and the recipient.
                </p>
              </FadeInRight>

              <div className="space-y-5">
                {[
                  { title: 'No wallet addresses', desc: "Just use phone numbers from your contacts. It's that simple." },
                  { title: 'Automatic sync', desc: 'See who\'s on Sawa instantly — no manual searching needed.' },
                  { title: 'Personal notes', desc: 'Add a message to every transfer, because money has meaning.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-forest-green/8 flex items-center justify-center text-forest-green text-sm font-bold group-hover:bg-forest-green group-hover:text-white transition-colors">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-0.5">{item.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────────────────────────── */}
      <section id="features" className="py-24 bg-sand/50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-widest text-forest-green mb-4">Features</p>
              <h2 className="heading-2 mb-4">
                Professional grade.
                <span className="text-forest-green italic"> Human simple.</span>
              </h2>
              <p className="text-body-lg">
                Built on powerful blockchain technology, wrapped in an interface anyone can use.
              </p>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'One Wallet, Every Chain',
                desc: 'Hold and send USDC, SOL, ETH and Bitcoin across Solana, Ethereum, Base, Polygon, BNB Chain, Arbitrum, Optimism and Sui — we handle the networks so you don\'t have to.',
                icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>),
              },
              {
                title: 'Buy Crypto Instantly',
                desc: 'Top up with a local bank transfer and watch crypto land in your wallet within minutes — no cards, no middlemen.',
                icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m4 6H4m0 0l4 4m-4-4l4-4"/></svg>),
              },
              {
                title: 'Sawa Pay',
                desc: 'Pay bills, buy airtime & data, cash out to any bank or mobile money — and get paid as a merchant with shareable payment links and QR checkout.',
                icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z"/></svg>),
              },
              {
                title: 'We Run Our Own Rails',
                desc: 'Sawa operates its own rails for on- and off-ramps — so conversions are faster, rates are fairer, and there\'s no third-party middleman.',
                icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16M7 4v16m10-16v16"/></svg>),
              },
              {
                title: 'Earn While You Hold',
                desc: 'Put idle assets to work with built-in staking — stake SOL straight from your balance and unstake whenever you need it.',
                icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 17l6-6 4 4 8-8m0 0h-5m5 0v5"/></svg>),
              },
              {
                title: 'Secure & Non-Custodial',
                desc: 'You own your keys and your money. Identity verification unlocks higher limits when you need them.',
                icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>),
              },
              {
                title: 'Swap in Seconds',
                desc: 'Trade tokens at the best available rates on Solana and EVM chains — even across chains — without ever leaving the app.',
                icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>),
              },
              {
                title: 'Own a Piece of the Market',
                desc: 'Buy fractional Apple, Tesla or S&P 500 exposure as tokenized stocks on Solana — no brokerage account required.',
                icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V9m5 7V5m5 11v-4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"/></svg>),
              },
              {
                title: 'Trade the Headlines',
                desc: 'Take a position on real-world events — elections, football, crypto prices — with prediction markets built right into the app.',
                icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>),
              },
              {
                title: 'Escrow for Real Deals',
                desc: 'Get paid safely for freelance work. Funds lock in on-chain escrow, release when the job is delivered — no trust required.',
                icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>),
              },
              {
                title: 'Virtual Cards',
                desc: 'Spend your balance anywhere with virtual Visa cards — create, fund, and freeze them right from the app.',
                icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>),
              },
              {
                title: 'Speaks Your Language',
                desc: 'Use Sawa in English, Pidgin, Yoruba, Igbo, Hausa, French or Swahili — with your balance shown in 19 local currencies.',
                icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg>),
              },
            ].map((feature, i) => (
              <FadeIn key={i} delay={0.05 * i}>
                <div className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-forest-green/20 hover:shadow-md transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-xl bg-forest-green/8 flex items-center justify-center text-forest-green mb-4 group-hover:bg-forest-green group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2 group-hover:text-forest-green transition-colors">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <p className="mt-10 text-xs text-gray-400 max-w-2xl mx-auto text-center leading-relaxed">
              Tokenized stocks, prediction markets and virtual cards are not available in every country. Some features require identity verification. Nothing here is investment advice.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── TOOLKIT ────────────────────────────────────────────────────── */}
      <section id="toolkit" className="py-24 bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-widest text-forest-green mb-4">For developers</p>
              <h2 className="heading-2 mb-4">Sawa Toolkit</h2>
              <p className="text-body-lg">
                Phone-first identity &amp; payment primitives for Solana — built on{' '}
                <span className="font-semibold text-forest-green">Privy</span> and
                high-performance <span className="font-semibold text-forest-green">Rust</span> rails.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                title: '@sawa/phone-resolver',
                desc: 'Turn a phone number, username, or email into a Solana address via Privy.',
                link: 'https://github.com/Dipraise1/sawa-toolkit/tree/main/packages/phone-resolver',
              },
              {
                title: '@sawa/compliance-kit',
                desc: 'KYC, tiered limits, AML policy, sanctions screening for 10+ African countries.',
                link: 'https://github.com/Dipraise1/sawa-toolkit/tree/main/packages/compliance-kit',
              },
              {
                title: 'Private Treasury Primitives',
                desc: 'Production on/off-ramp rails — used internally to power fast, fair conversions.',
                link: null,
              },
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-forest-green/20 hover:shadow-md transition-all duration-300 flex flex-col">
                <h3 className="font-mono text-sm font-semibold text-charcoal mb-2 group-hover:text-forest-green transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-500 flex-grow leading-relaxed mb-4">{item.desc}</p>
                <div className="text-xs font-medium text-gray-400 group-hover:text-forest-green transition-colors">
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
                      View on GitHub <span>→</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                      Private
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/Dipraise1/sawa-toolkit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white rounded-xl hover:bg-forest-green transition-colors font-medium text-sm"
            >
              Explore Toolkit <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── TRUST ──────────────────────────────────────────────────────── */}
      <TrustSection />

      {/* ─── COMMUNITY ──────────────────────────────────────────────────── */}
      <TownHallSection />

      {/* ─── GLOBAL REACH ───────────────────────────────────────────────── */}
      <section className="py-24 bg-cream border-t border-gray-100 overflow-hidden">
        <div className="container-custom mb-12 text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-forest-green mb-4">Coverage</p>
            <h2 className="heading-2 mb-4">Africa &amp; Beyond.</h2>
            <p className="text-body text-gray-600 max-w-xl mx-auto">
              Send to any phone number across 50+ countries — from Lagos to London, Nairobi to New York.
            </p>
          </FadeIn>
        </div>

        <div className="relative flex flex-col gap-3 fade-edges">
          {[
            ['🇳🇬 Nigeria','🇬🇭 Ghana','🇰🇪 Kenya','🇿🇦 South Africa','🇪🇬 Egypt','🇲🇦 Morocco','🇹🇿 Tanzania','🇺🇬 Uganda','🇪🇹 Ethiopia','🇩🇿 Algeria','🇷🇼 Rwanda','🇸🇳 Senegal'],
            ['🇦🇴 Angola','🇲🇿 Mozambique','🇿🇲 Zambia','🇿🇼 Zimbabwe','🇨🇲 Cameroon','🇨🇮 Ivory Coast','🇧🇼 Botswana','🇳🇦 Namibia','🇲🇺 Mauritius','🇹🇳 Tunisia','🇬🇧 UK','🇺🇸 USA'],
          ].map((row, rowIndex) => (
            <div key={rowIndex} className="flex overflow-hidden group">
              <div className={`flex gap-3 ${rowIndex % 2 === 0 ? 'animate-marquee-left' : 'animate-marquee-right'} group-hover:[animation-play-state:paused] min-w-full`}>
                {[...row, ...row, ...row].map((country, i) => (
                  <span key={i} className="flex-shrink-0 inline-flex items-center gap-2 bg-white border border-gray-200/60 px-4 py-2 rounded-full text-sm font-medium text-charcoal whitespace-nowrap">
                    {country}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TEAM ───────────────────────────────────────────────────────── */}
      <TeamSection />

      {/* ─── FAQ ────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-24 bg-white border-t border-gray-100">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-14">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-widest text-forest-green mb-4">FAQ</p>
              <h2 className="heading-2">Questions, answered.</h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <div className="divide-y divide-gray-100 border-y border-gray-100">
              {FAQ_ITEMS.map((item, i) => (
                <details key={i} className="group py-5">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                    <h3 className="text-base sm:text-lg font-semibold text-charcoal group-hover:text-forest-green transition-colors">
                      {item.question}
                    </h3>
                    <span className="flex-shrink-0 w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 group-open:rotate-45 group-open:border-forest-green group-open:text-forest-green transition-all duration-300" aria-hidden="true">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 leading-relaxed mt-3 pr-10">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────────────── */}
      <section id="download" className="py-28 bg-forest-green relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-grain opacity-10 mix-blend-overlay" aria-hidden="true" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-luxury-gold/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

        <div className="container-custom relative z-10">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-luxury-gold/80 mb-6">Early Access</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight text-white">
              Be among the first.
            </h2>
            <p className="text-xl text-white/75 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Sawa is in beta. Sign up to secure your spot and get notified when we launch in your country.
            </p>

            <WaitlistForm />

            <p className="text-sm text-white/40 mt-8">No spam. Unsubscribe at any time.</p>
          </FadeIn>
        </div>
      </section>

    </main>
  )
}
