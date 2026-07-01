import TeamSection from '@/components/TeamSection'
import TrustSection from '@/components/TrustSection'
import {
  FadeIn,
  FadeInLeft,
  FadeInRight,
  FloatingCard,
  ParallaxLayer,
  ParallaxScale,
  StaggerChildren,
  StaggerItem,
  RevealWords,
  Tilt3D,
} from '@/components/AnimatedSection'
import ParallaxHeroBackground from '@/components/ParallaxHeroBackground'
import StoryScrollSection from '@/components/StoryScrollSection'
import TownHallSection from '@/components/TownHallSection'
import Globe3D from '@/components/Globe3D'
import WatchDemoButton from '@/components/WatchDemoButton'
import { FAQ_ITEMS } from '@/lib/faq'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-cream font-sans selection:bg-forest-green/20 selection:text-forest-green-dark">

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden">

        {/* ── Parallax depth background — 4 layers at different scroll speeds ── */}
        <ParallaxHeroBackground />

        {/* Sunrise motif — warm horizon glow + concentric arcs anchor the composition */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[6%] w-[min(1100px,96vw)] aspect-[2/1] pointer-events-none" aria-hidden="true">
          <div className="absolute inset-x-0 bottom-0 h-full rounded-t-[100%] bg-[radial-gradient(120%_100%_at_50%_100%,rgba(212,175,55,0.16),rgba(45,80,22,0.07)_42%,transparent_70%)] blur-xl" />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1100 550" fill="none" preserveAspectRatio="xMidYMax meet">
            <path d="M70 550 A 480 480 0 0 1 1030 550" stroke="rgba(212,175,55,0.22)" strokeWidth="1.5" />
            <path d="M210 550 A 340 340 0 0 1 890 550" stroke="rgba(45,80,22,0.16)" strokeWidth="1.5" />
            <path d="M350 550 A 200 200 0 0 1 750 550" stroke="rgba(212,175,55,0.16)" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">

            <FadeIn delay={0.1}>
              <h1 className="heading-hero text-charcoal mb-8">
                <RevealWords text="Send money" delay={0.15} />
                {' '}
                <br className="hidden sm:block" />
                <span className="text-gradient-green italic relative inline-block pr-2">
                  <RevealWords text="like a text." delay={0.35} />
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-luxury-gold/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-body-lg mb-10 max-w-2xl mx-auto text-gray-600">
                Crypto wallets are complicated. Sawa is different.
                We replaced long, scary addresses with phone numbers,
                so you can support your family and pay friends instantly.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <a
                  href="https://testflight.apple.com/join/5CT6rA8q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                  aria-label="Download Sawa Wallet on the App Store"
                >
                  <Image src="/app-store-badge.svg" alt="Download on the App Store" width={135} height={40} className="h-14 w-auto" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.sawawallet.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                  aria-label="Get Sawa Wallet on Google Play"
                >
                  <Image src="/google-play-badge.png" alt="Get it on Google Play" width={646} height={250} className="h-14 w-auto" />
                </a>

                <WatchDemoButton />
              </div>
            </FadeIn>

            {/* Editorial stats — serif numerals, gold hairline dividers */}
            <FadeIn delay={0.4}>
              <div className="flex items-stretch justify-center divide-x divide-luxury-gold/25 mt-10">
                {[
                  { value: '50+', label: 'Countries' },
                  { value: '2.4s', label: 'Avg transfer' },
                  { value: '<0.5%', label: 'Network fees' },
                ].map((stat, i) => (
                  <div key={i} className="px-6 sm:px-9 first:pl-0 last:pr-0 text-center">
                    <div className="font-display text-3xl sm:text-4xl font-semibold text-forest-green leading-none tracking-tight">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-[11px] sm:text-xs uppercase tracking-[0.18em] text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* App Preview */}
            <FadeIn delay={0.5} className="mt-16 relative hidden sm:block">
              <div className="relative mx-auto w-full max-w-[1000px] h-[600px]">
                {/* Phone */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[300px] h-[620px] bg-charcoal rounded-[3.5rem] border-[8px] border-white shadow-2xl z-20 overflow-hidden">
                  <Image src="/hero-device.png" alt="Sawa Wallet app interface showing phone number-based transfers" fill sizes="300px" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-green/10 via-transparent to-transparent" aria-hidden="true" />
                </div>
                {/* Phone bottom glow */}
                <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-48 h-12 bg-forest-green/20 rounded-full blur-2xl" aria-hidden="true" />

                {/* Floating Card 1 */}
                <FloatingCard
                  animateY={[0, -15, 0]}
                  delay={0}
                  className="absolute left-[15%] top-[25%] bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100/80 z-30 flex items-center gap-3 w-64"
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-forest-green flex-shrink-0" aria-hidden="true">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-charcoal">Sent to Mom</div>
                    <div className="text-xs text-gray-500">Just now · 500 USDC</div>
                  </div>
                </FloatingCard>

                {/* Floating Card 2 */}
                <FloatingCard
                  animateY={[0, 15, 0]}
                  delay={1}
                  className="absolute right-[10%] top-[35%] bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100/80 z-10 flex items-center gap-3 w-64"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0" aria-hidden="true">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-charcoal">Instant Transfer</div>
                    <div className="text-xs text-gray-500">No network fees</div>
                  </div>
                </FloatingCard>

                {/* Floating Card 3 */}
                <FloatingCard
                  animateY={[0, -12, 0]}
                  delay={2}
                  className="absolute left-[12%] bottom-[15%] bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100/80 z-30 flex items-center gap-3 w-64"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0" aria-hidden="true">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-charcoal">Just a phone number</div>
                    <div className="text-xs text-gray-500">No wallet address needed</div>
                  </div>
                </FloatingCard>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── CINEMATIC STORY ──────────────────────────────────────────────── */}
      <StoryScrollSection />

      {/* ─── POWERED BY / PARTNER LOGOS MARQUEE ──────────────────────────── */}
      <section className="py-14 bg-white border-t border-gray-100 overflow-hidden">
        <div className="container-custom mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Powered by industry-leading infrastructure
          </p>
        </div>

        {(() => {
          const partners = [
            {
              name: 'Solana',
              logo: 'https://cdn.simpleicons.org/solana',
            },
            {
              name: 'Ethereum',
              logo: 'https://cdn.simpleicons.org/ethereum',
            },
            {
              name: 'Bitcoin',
              logo: 'https://cdn.simpleicons.org/bitcoin',
            },
            {
              name: 'Privy',
              logo: 'https://www.google.com/s2/favicons?domain=privy.io&sz=64',
            },
            {
              name: 'Tron',
              logo: 'https://cryptologos.cc/logos/tron-trx-logo.png?v=029',
            },
            {
              name: 'Meld',
              logo: 'https://meld.io/favicon.ico',
            },
            {
              name: 'Paystack',
              logo: 'https://www.google.com/s2/favicons?domain=paystack.com&sz=64',
            },
            {
              name: 'Helius',
              logo: 'https://www.helius.dev/favicon.ico',
            },
          ]
          const items = [...partners, ...partners, ...partners]
          return (
            <div className="relative flex overflow-hidden group fade-edges">
              <div className="flex items-center gap-20 animate-marquee-left group-hover:[animation-play-state:paused] min-w-full">
                {items.map((p, i) => (
                  <div key={i} className="flex-shrink-0 flex items-center gap-3.5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.logo}
                      alt={p.name}
                      width={40}
                      height={40}
                      loading="lazy"
                      decoding="async"
                      className="h-10 w-auto object-contain"
                      style={{ filter: 'brightness(0)', opacity: 0.8 }}
                    />
                    <span className="font-bold text-lg text-gray-900 whitespace-nowrap tracking-tight">
                      {p.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )
        })()}
      </section>

      {/* ─── WHY SECTION ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-forest-green/3 rounded-full blur-[80px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-luxury-gold/4 rounded-full blur-[60px] pointer-events-none" aria-hidden="true" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image side */}
            <FadeInLeft>
              <ParallaxScale>
                <div className="relative rounded-[2rem] overflow-hidden bg-sand aspect-[4/5] lg:aspect-square group shadow-2xl">
                  <Image
                    src="/Green & Yellow.jpg"
                    alt="Two people smiling while using Sawa Wallet to send money"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" aria-hidden="true" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-white text-lg font-medium leading-snug">&quot;It just works, like magic.&quot;</p>
                    <p className="text-white/60 text-sm mt-1">— Early beta user, Lagos</p>
                  </div>
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md">
                    <span className="text-xs font-semibold text-forest-green">Beta Live</span>
                  </div>
                </div>
              </ParallaxScale>
            </FadeInLeft>

            {/* Text side */}
            <div>
              <FadeInRight delay={0.15}>
                <p className="text-xs font-semibold uppercase tracking-widest text-forest-green mb-4">Why Sawa</p>
                <h2 className="heading-2 mb-6">Designed for real relationships.</h2>
                <p className="text-body-lg mb-10">
                  Sending money shouldn&apos;t feel like a transaction — it&apos;s an act of care.
                  Whether you&apos;re paying tuition, sending support home, or splitting a bill,
                  Sawa respects the connection between you and the recipient.
                </p>
              </FadeInRight>

              <StaggerChildren className="space-y-4">
                {[
                  {
                    num: "01",
                    title: "No wallet addresses",
                    desc: "Just use phone numbers from your contacts. It's that simple."
                  },
                  {
                    num: "02",
                    title: "Automatic sync",
                    desc: "See who's on Sawa instantly — no manual searching needed."
                  },
                  {
                    num: "03",
                    title: "Personal notes",
                    desc: "Add a message to every transfer, because money has meaning."
                  }
                ].map((item, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-5 p-5 rounded-2xl hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-100 group">
                      <span className="text-2xl font-bold text-forest-green/20 group-hover:text-forest-green/40 transition-colors font-mono leading-none mt-0.5 flex-shrink-0 w-8" aria-hidden="true">
                        {item.num}
                      </span>
                      <div>
                        <h3 className="font-semibold text-charcoal mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES GRID ────────────────────────────────────────────────── */}
      <section id="features" className="py-32 bg-sand/30 relative">
        <div className="absolute inset-0 bg-grain opacity-[0.03]" aria-hidden="true" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 lg:mb-20">
            <div className="lg:col-span-7">
              <FadeIn>
                <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-forest-green mb-5">
                  <span className="h-px w-8 bg-forest-green/40" aria-hidden="true" />
                  What we built
                </p>
                <h2 className="heading-2">
                  Professional grade.
                  <br />
                  <span className="italic text-forest-green">Human simple.</span>
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-5">
              <FadeIn delay={0.15}>
                <p className="text-body-lg text-gray-600 lg:border-l-2 lg:border-luxury-gold/30 lg:pl-6">
                  Built on powerful blockchain technology, wrapped in an interface anyone can use.
                  Six capabilities, one calm app.
                </p>
              </FadeIn>
            </div>
          </div>

          <StaggerChildren className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "One Wallet, Every Chain",
                desc: "Hold and send USDC, SOL, ETH and Bitcoin across Solana, Ethereum, Base, Polygon and BNB Chain — we handle the networks so you don't have to.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                ),
                tint: "gold"
              },
              {
                num: "02",
                title: "Buy Crypto Instantly",
                desc: "Top up with a local bank transfer and watch crypto land in your wallet within minutes — no cards, no middlemen.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m4 6H4m0 0l4 4m-4-4l4-4" /></svg>
                ),
                tint: "gold"
              },
              {
                num: "03",
                title: "Sawa Pay",
                desc: "Pay bills, buy airtime & data, and cash out to any bank account or mobile money — straight from your crypto balance.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z" /></svg>
                ),
                tint: "forest"
              },
              {
                num: "04",
                title: "We Run Our Own Rails",
                desc: "Sawa operates its own rails for on- and off-ramps — so conversions are faster, rates are fairer, and there's no third-party middleman.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16M7 4v16m10-16v16" /></svg>
                ),
                tint: "gold"
              },
              {
                num: "05",
                title: "Earn While You Hold",
                desc: "Put idle assets to work with built-in staking, and protect bigger deals with on-chain escrow.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 17l6-6 4 4 8-8m0 0h-5m5 0v5" /></svg>
                ),
                tint: "forest"
              },
              {
                num: "06",
                title: "Secure & Non-Custodial",
                desc: "You own your keys and your money. Identity verification unlocks higher limits when you need them.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                ),
                tint: "gold"
              }
            ].map((feature, i) => {
              const isGold = feature.tint === 'gold'
              const tile = isGold ? 'text-luxury-gold bg-luxury-gold/10' : 'text-forest-green bg-forest-green/10'
              const underline = isGold ? 'via-luxury-gold/50' : 'via-forest-green/50'
              return (
              <StaggerItem key={i} className="h-full [perspective:1200px]">
                <Tilt3D max={8} className="relative p-8 rounded-3xl border border-charcoal/[0.06] bg-cream/60 shadow-[0_1px_2px_rgba(45,80,22,0.04)] hover:shadow-[0_30px_60px_-18px_rgba(45,80,22,0.22)] hover:border-charcoal/[0.10] transition-[box-shadow,border-color] duration-500 group h-full overflow-hidden">
                  <span className="absolute top-7 right-8 font-display text-5xl font-medium text-charcoal/[0.06] group-hover:text-charcoal/[0.10] transition-colors select-none italic [transform:translateZ(30px)]" aria-hidden="true">
                    {feature.num}
                  </span>
                  <div className={`absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent ${underline} to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full`} aria-hidden="true" />
                  <div className="relative z-10 [transform-style:preserve-3d]">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-[0_8px_20px_-6px_rgba(45,80,22,0.25)] group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 [transform:translateZ(55px)] ${tile}`}>
                      {feature.icon}
                    </div>
                    <h3 className="font-display text-xl font-semibold text-charcoal mb-3 group-hover:text-forest-green transition-colors [transform:translateZ(28px)]">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed [transform:translateZ(15px)]">{feature.desc}</p>
                  </div>
                </Tilt3D>
              </StaggerItem>
            )})}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── SAWA TOOLKIT — DEVELOPER TOOLING ─────────────────────────────── */}
      <section id="toolkit" className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#2D5016_0.8px,transparent_1px)] bg-[length:20px_20px] opacity-5" aria-hidden="true"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>

              <h2 className="heading-2 mb-6">Sawa Toolkit</h2>
              <p className="text-body-lg text-gray-600">
                Safe Phone-First Identity &amp; Payment Primitives for Solana.<br />
                Built on <span className="font-semibold text-forest-green">Privy</span> (non-custodial) + high-performance private <span className="font-semibold text-forest-green">Rust</span> rails.
              </p>
              <p className="mt-4 text-sm text-gray-500 max-w-md mx-auto">
                Production-extracted primitives for Solana consumer apps in Africa. Private Rust rails power the live app.
              </p>
            </FadeIn>
          </div>

          <StaggerChildren className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "@sawa/phone-resolver",
                desc: "Phone, specialized username, or email → Privy DID → Solana address. Phone live first (easiest); username/mail as easier first options. resolveIdentifier() + sendToPhone().",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2 2 2 0 01-2-2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 01-2-2 2 2 0 012-2zM13 5a2 2 0 012-2 2 2 0 01-2-2 2 2 0 01-2-2 2 2 0 012-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                link: "https://github.com/Dipraise1/sawa-toolkit/tree/main/packages/phone-resolver",
                tint: "forest"
              },
              {
                title: "@sawa/compliance-kit",
                desc: "KYC (NIN/BVN for 10+ African countries), tiered limits, AML policy, sanctions screening. Extracted from our production flows.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 8.944 11.922.42.095.858.143 1.295.143a3 3 0 01.497-.08" />
                  </svg>
                ),
                link: "https://github.com/Dipraise1/sawa-toolkit/tree/main/packages/compliance-kit",
                tint: "gold"
              },
              {
                title: "Private Treasury Primitives",
                desc: "Production financial rails (on/off-ramp, rebalancing, deposit monitoring). Not open-sourced — used internally to power fast, fair conversions without third-party dependency.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2" />
                  </svg>
                ),
                link: "#",
                tint: "forest"
              }
            ].map((item, i) => {
              const isGold = item.tint === 'gold'
              const tile = isGold ? 'bg-luxury-gold/10 text-luxury-gold' : 'bg-forest-green/10 text-forest-green'
              const hoverBorder = isGold ? 'hover:border-luxury-gold/40' : 'hover:border-forest-green/40'
              return (
              <StaggerItem key={i}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block h-full p-8 rounded-3xl border border-charcoal/[0.07] bg-white ${hoverBorder} shadow-[0_1px_2px_rgba(45,80,22,0.04)] hover:shadow-[0_24px_48px_-16px_rgba(45,80,22,0.16)] hover:-translate-y-1 transition-all duration-500 flex flex-col`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform ${tile}`}>
                    {item.icon}
                  </div>
                  <h3 className="font-sans text-xl font-semibold text-charcoal mb-3 tracking-tight group-hover:text-forest-green transition-colors">{item.title}</h3>
                  <p className="text-gray-600 flex-grow leading-relaxed text-[15px]">{item.desc}</p>
                  <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-xs uppercase tracking-widest font-medium text-gray-400 group-hover:text-forest-green transition-colors">
                    <span>View on GitHub</span>
                    <span className="text-xl leading-none">→</span>
                  </div>
                </a>
              </StaggerItem>
            )})}
          </StaggerChildren>

          <div className="mt-16 text-center">
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://github.com/Dipraise1/sawa-toolkit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-white rounded-2xl hover:bg-forest-green transition-all font-medium text-sm tracking-wider group"
                >
                  EXPLORE TOOLKIT
                  <span className="group-hover:rotate-45 transition-transform">↗</span>
                </a>
                <a 
                  href="#trust"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-charcoal/70 text-charcoal rounded-2xl hover:bg-white hover:border-forest-green transition-all font-medium text-sm tracking-wider group"
                >
                  SEE WHY WE BUILT IT
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              </div>
              <p className="text-xs text-gray-400 mt-6">Monorepo with Turborepo • Example app • Ready for npm/crates.io</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── TRUST & SECURITY ─────────────────────────────────────────────── */}
      <TrustSection />

      {/* ─── TOWN HALL — COMMUNITY REVIEWS ────────────────────────────────── */}
      <TownHallSection />

      {/* ─── GLOBAL REACH ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-cream border-t border-gray-100 overflow-hidden">
        <div className="container-custom mb-12 text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-forest-green mb-4">Coverage</p>
            <h2 className="heading-2 mb-4">Africa &amp; Beyond.</h2>
            <p className="text-body text-gray-600 mb-6">
              Sawa supports transfers across 50+ countries.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest-green/8 border border-forest-green/15 rounded-full">
              <span className="text-sm font-semibold text-forest-green">🌍 50+ countries supported</span>
            </div>
          </FadeIn>
        </div>

        {/* 3D globe centerpiece */}
        <FadeIn className="mb-16 sm:mb-20">
          <div className="py-6 flex justify-center">
            <div className="scale-[0.62] sm:scale-90 lg:scale-100">
              <Globe3D />
            </div>
          </div>
        </FadeIn>

        <div className="relative flex flex-col gap-4 fade-edges">
          {[
            [
              { name: 'Nigeria', flag: '🇳🇬' }, { name: 'Ghana', flag: '🇬🇭' }, { name: 'Kenya', flag: '🇰🇪' },
              { name: 'South Africa', flag: '🇿🇦' }, { name: 'Egypt', flag: '🇪🇬' }, { name: 'Morocco', flag: '🇲🇦' },
              { name: 'Tanzania', flag: '🇹🇿' }, { name: 'Uganda', flag: '🇺🇬' }, { name: 'Ethiopia', flag: '🇪🇹' },
              { name: 'Algeria', flag: '🇩🇿' }, { name: 'Rwanda', flag: '🇷🇼' }, { name: 'Senegal', flag: '🇸🇳' }
            ],
            [
              { name: 'Angola', flag: '🇦🇴' }, { name: 'Mozambique', flag: '🇲🇿' }, { name: 'Zambia', flag: '🇿🇲' },
              { name: 'Zimbabwe', flag: '🇿🇼' }, { name: 'Cameroon', flag: '🇨🇲' }, { name: 'Ivory Coast', flag: '🇨🇮' },
              { name: 'Botswana', flag: '🇧🇼' }, { name: 'Namibia', flag: '🇳🇦' }, { name: 'Mauritius', flag: '🇲🇺' },
              { name: 'Tunisia', flag: '🇹🇳' }, { name: 'UK', flag: '🇬🇧' }, { name: 'USA', flag: '🇺🇸' }
            ]
          ].map((row, rowIndex) => (
            <div key={rowIndex} className="flex overflow-hidden group">
              <div className={`flex space-x-4 ${rowIndex % 2 === 0 ? 'animate-marquee-left' : 'animate-marquee-right'} group-hover:[animation-play-state:paused] min-w-full`}>
                {[...row, ...row, ...row].map((country, i) => (
                  <div key={i} className="flex-shrink-0 flex items-center gap-3 bg-white border border-gray-200/60 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:border-forest-green/20 transition-all duration-200">
                    <span className="text-xl" aria-hidden="true">{country.flag}</span>
                    <span className="font-medium text-charcoal text-sm whitespace-nowrap">{country.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TEAM ─────────────────────────────────────────────────────────── */}
      <TeamSection />

      {/* ─── FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-28 bg-white border-t border-gray-100">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-14">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-widest text-forest-green mb-4">FAQ</p>
              <h2 className="heading-2 mb-4">Questions, answered.</h2>
              <p className="text-body-lg text-gray-600">Everything you need to know about sending, buying and spending crypto with Sawa.</p>
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

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section id="download" className="py-32 bg-forest-green relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-grain opacity-10 mix-blend-overlay" aria-hidden="true" />

        {/* Parallax depth glows — move at different rates as you scroll */}
        <ParallaxLayer speed={0.3} className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none">
          <div className="w-[700px] h-[700px] bg-luxury-gold/15 rounded-full blur-[130px]" aria-hidden="true" />
        </ParallaxLayer>
        <ParallaxLayer speed={0.65} className="absolute bottom-0 right-0 pointer-events-none">
          <div className="w-[400px] h-[400px] bg-forest-green-dark/60 rounded-full blur-[80px]" aria-hidden="true" />
        </ParallaxLayer>

        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" aria-hidden="true" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" aria-hidden="true" />

        {/* Floating glass token chips — depth + warmth, desktop only */}
        <div className="hidden lg:block pointer-events-none" aria-hidden="true">
          {[
            { label: 'USDC', pos: 'top-[18%] left-[12%]', drift: [0, -18, 0] as [number, number, number], delay: 0 },
            { label: '◎ SOL', pos: 'top-[30%] right-[10%]', drift: [0, 16, 0] as [number, number, number], delay: 1.2 },
            { label: '₦ ↔ $', pos: 'bottom-[22%] left-[16%]', drift: [0, 14, 0] as [number, number, number], delay: 0.6 },
            { label: '✦ Ξ ETH', pos: 'bottom-[26%] right-[14%]', drift: [0, -14, 0] as [number, number, number], delay: 1.8 },
          ].map((t, i) => (
            <ParallaxLayer key={i} speed={0.4 + i * 0.12} className={`absolute ${t.pos}`}>
              <FloatingCard animateY={t.drift} delay={t.delay} className="px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-xl">
                <span className="text-sm font-semibold text-white/80 tracking-wide">{t.label}</span>
              </FloatingCard>
            </ParallaxLayer>
          ))}
        </div>

        <div className="container-custom relative z-10">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-luxury-gold/80 mb-6">Early Access</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
              Be among the first.
            </h2>
            <p className="text-xl text-white/75 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Sawa is currently in beta. Sign up to secure your spot and get notified when we launch in your country.
            </p>

            <form className="max-w-md mx-auto relative group mb-8" action="/api/waitlist" method="POST">
              <div className="absolute -inset-1 bg-gradient-to-r from-luxury-gold/50 to-white/20 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-700" aria-hidden="true" />
              <div className="relative flex p-1.5 bg-forest-green-dark rounded-full border border-white/10">
                <label htmlFor="waitlist-email" className="sr-only">Email address</label>
                <input
                  id="waitlist-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 bg-transparent text-white placeholder:text-white/40 focus:outline-none text-sm"
                />
                <button type="submit" className="px-7 py-2.5 bg-white text-forest-green rounded-full font-bold hover:bg-cream transition-colors shadow-lg text-sm">
                  Request Access
                </button>
              </div>
            </form>

            <p className="text-sm text-white/40 mb-10">No spam. Unsubscribe at any time.</p>

            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {[
                { text: '50+ Countries' },
                { text: 'Instant Settlement' },
                { text: 'Bank-Grade Security' },
                { text: 'Non-Custodial' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/50 text-sm">
                  <span className="w-1 h-1 rounded-full bg-luxury-gold/60 flex-shrink-0" aria-hidden="true" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  )
}
