'use client'

import Navbar from '@/components/Navbar'
import TeamSection from '@/components/TeamSection'
import { motion } from 'framer-motion'
import Image from 'next/image'

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
)

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-cream font-sans selection:bg-forest-green/20 selection:text-forest-green-dark">
      <Navbar />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden">

        {/* ── Animated background ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          {/* Orb 1 — forest green, top-right */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 700,
              height: 700,
              top: '-15%',
              right: '-10%',
              background: 'radial-gradient(circle, rgba(45,80,22,0.18) 0%, rgba(45,80,22,0.06) 50%, transparent 70%)',
              filter: 'blur(60px)',
            }}
            animate={{
              x: [0, 80, -40, 60, 0],
              y: [0, -60, 80, -30, 0],
              scale: [1, 1.15, 0.95, 1.1, 1],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Orb 2 — gold, bottom-left */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 800,
              height: 800,
              bottom: '-20%',
              left: '-15%',
              background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 50%, transparent 70%)',
              filter: 'blur(70px)',
            }}
            animate={{
              x: [0, -60, 100, -40, 0],
              y: [0, 80, -50, 60, 0],
              scale: [1, 0.9, 1.2, 0.95, 1],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />

          {/* Orb 3 — green, center-left */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 500,
              height: 500,
              top: '25%',
              left: '10%',
              background: 'radial-gradient(circle, rgba(45,80,22,0.12) 0%, rgba(45,80,22,0.04) 50%, transparent 70%)',
              filter: 'blur(50px)',
            }}
            animate={{
              x: [0, 120, 40, -60, 0],
              y: [0, -40, 100, 20, 0],
              scale: [1, 1.1, 0.9, 1.05, 1],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          />

          {/* Orb 4 — gold accent, top-center */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 400,
              height: 400,
              top: '5%',
              left: '40%',
              background: 'radial-gradient(circle, rgba(212,175,55,0.10) 0%, transparent 65%)',
              filter: 'blur(50px)',
            }}
            animate={{
              x: [0, -80, 50, -30, 0],
              y: [0, 60, -80, 40, 0],
              scale: [1, 1.2, 0.85, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
          />

          {/* Dot grid overlay */}
          <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(circle_at_1px_1px,rgb(45,80,22)_1px,transparent_0)] bg-[length:24px_24px]" />

          {/* Sweeping horizontal light lines */}
          <motion.div
            className="absolute left-0 w-full h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(45,80,22,0.12), transparent)', top: '33%' }}
            animate={{ opacity: [0.4, 1, 0.4], scaleX: [0.8, 1, 0.8] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute left-0 w-full h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.12), transparent)', top: '66%' }}
            animate={{ opacity: [1, 0.4, 1], scaleX: [1, 0.8, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">

            <FadeIn>
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm mb-8 hover:border-forest-green/30 transition-colors">
                <span className="w-2 h-2 rounded-full bg-forest-green animate-pulse" />
                <span className="text-sm font-medium text-gray-800">Money for people, not addresses</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="heading-hero text-charcoal mb-8 tracking-tight">
                Send money <br className="hidden sm:block" />
                <span className="text-gradient-green relative">
                  like a text.
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-luxury-gold/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
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
                >
                  <Image src="/app-store-badge.svg" alt="Download on the App Store" width={160} height={50} className="h-[50px] w-auto" />
                </a>
                <a
                  href="https://play.google.com/apps/testing/com.sawawallet.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <Image src="/google-play-badge.png" alt="Get it on Google Play" width={180} height={50} className="h-[50px] w-auto" />
                </a>
              </div>
            </FadeIn>

            {/* Stats row */}
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-0 mb-4">
                {[
                  { value: '50+', label: 'Countries' },
                  { value: 'Instant', label: 'Transfers' },
                  { value: '0%', label: 'Hidden Fees' },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center">
                    <div className="flex items-center gap-1.5 px-4 sm:px-6">
                      <span className="font-bold text-forest-green text-base">{stat.value}</span>
                      <span className="text-sm text-gray-500">{stat.label}</span>
                    </div>
                    {i < 2 && <div className="hidden sm:block w-px h-4 bg-gray-200" />}
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* App Preview */}
            <FadeIn delay={0.5} className="mt-16 relative hidden sm:block">
              <div className="relative mx-auto w-full max-w-[1000px] h-[600px]">
                {/* Phone */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[300px] h-[620px] bg-charcoal rounded-[3.5rem] border-[8px] border-white shadow-2xl z-20 overflow-hidden">
                  <Image src="/app-mockup.png" alt="Sawa App Interface" fill className="object-cover" priority />
                  {/* Subtle screen glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-green/10 via-transparent to-transparent" />
                </div>
                {/* Phone bottom glow */}
                <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-48 h-12 bg-forest-green/20 rounded-full blur-2xl" />

                {/* Floating Card 1 */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-[15%] top-[25%] bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100/80 z-30 flex items-center gap-3 w-64"
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-forest-green flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-charcoal">Sent to Mom</div>
                    <div className="text-xs text-gray-500">Just now · 500 USDC</div>
                  </div>
                </motion.div>

                {/* Floating Card 2 */}
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute right-[10%] top-[35%] bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100/80 z-10 flex items-center gap-3 w-64"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-charcoal">Instant Transfer</div>
                    <div className="text-xs text-gray-500">No network fees</div>
                  </div>
                </motion.div>

                {/* Floating Card 3 */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute left-[12%] bottom-[15%] bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100/80 z-30 flex items-center gap-3 w-64"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-charcoal">Just a phone number</div>
                    <div className="text-xs text-gray-500">No wallet address needed</div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── WHY SECTION ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-forest-green/3 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-luxury-gold/4 rounded-full blur-[60px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image side */}
            <FadeIn>
              <div className="relative rounded-[2rem] overflow-hidden bg-sand aspect-[4/5] lg:aspect-square group shadow-2xl">
                <Image
                  src="/Green & Yellow.jpg"
                  alt="Sawa Lifestyle"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-white text-lg font-medium leading-snug">&quot;It just works, like magic.&quot;</p>
                  <p className="text-white/60 text-sm mt-1">— Early beta user, Lagos</p>
                </div>
                {/* Corner badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md">
                  <span className="text-xs font-semibold text-forest-green">Beta Live</span>
                </div>
              </div>
            </FadeIn>

            {/* Text side */}
            <div>
              <FadeIn delay={0.15}>
                <p className="text-xs font-semibold uppercase tracking-widest text-forest-green mb-4">Why Sawa</p>
                <h2 className="heading-2 mb-6">Designed for real relationships.</h2>
                <p className="text-body-lg mb-10">
                  Sending money shouldn&apos;t feel like a transaction — it&apos;s an act of care.
                  Whether you&apos;re paying tuition, sending support home, or splitting a bill,
                  Sawa respects the connection between you and the recipient.
                </p>
              </FadeIn>

              <div className="space-y-4">
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
                  <FadeIn delay={0.2 + i * 0.1} key={i}>
                    <div className="flex items-start gap-5 p-5 rounded-2xl hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-100 group">
                      <span className="text-2xl font-bold text-forest-green/20 group-hover:text-forest-green/40 transition-colors font-mono leading-none mt-0.5 flex-shrink-0 w-8">
                        {item.num}
                      </span>
                      <div>
                        <h3 className="font-semibold text-charcoal mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES GRID ────────────────────────────────────────────────── */}
      <section id="features" className="py-32 bg-sand/30 relative">
        <div className="absolute inset-0 bg-grain opacity-[0.03]" />
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-widest text-forest-green mb-4">What we built</p>
              <h2 className="heading-2 mb-6">Professional grade. <br /><span className="text-forest-green">Human simple.</span></h2>
              <p className="text-body-lg text-gray-600">
                Built on powerful blockchain technology, wrapped in an interface anyone can use.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Multi-Chain Capable",
                desc: "USDC on Solana, Polygon, or Base? We handle the networks so you don't have to.",
                icon: (
                  <svg className="w-8 h-8 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                ),
                gradient: "from-forest-green/5 to-luxury-gold/5",
                accent: "border-luxury-gold/30"
              },
              {
                num: "02",
                title: "Instant Settlement",
                desc: "Money moves at the speed of the internet. No more waiting 3–5 business days.",
                icon: (
                  <svg className="w-8 h-8 text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                ),
                gradient: "from-blue-50 to-indigo-50",
                accent: "border-blue-200/60"
              },
              {
                num: "03",
                title: "Secure & Non-Custodial",
                desc: "You own your keys. You own your money. We just make it easy to manage.",
                icon: (
                  <svg className="w-8 h-8 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                ),
                gradient: "from-gray-50 to-gray-100",
                accent: "border-gray-200/80"
              }
            ].map((feature, i) => (
              <FadeIn delay={i * 0.1} key={i}>
                <div className={`relative p-8 rounded-[2rem] border bg-gradient-to-br ${feature.gradient} shadow-sm hover:shadow-xl transition-all duration-500 group h-full overflow-hidden ${feature.accent}`}>
                  {/* Number label */}
                  <span className="absolute top-7 right-8 text-4xl font-bold text-charcoal/5 group-hover:text-charcoal/10 transition-colors font-mono select-none">
                    {feature.num}
                  </span>
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-forest-green/0 via-forest-green/40 to-forest-green/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-forest-green transition-colors">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF ─────────────────────────────────────────────────── */}
      <section className="py-32 overflow-hidden relative bg-white">
        {/* Background accent */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxury-gold/4 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-forest-green/4 rounded-full blur-[80px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="max-w-xl mb-6 md:mb-0">
              <FadeIn>
                <p className="text-xs font-semibold uppercase tracking-widest text-forest-green mb-3">Testimonials</p>
                <h2 className="heading-2 mb-4">Trusted by early adopters.</h2>
                <p className="text-body-lg">People across Africa connect through Sawa.</p>
              </FadeIn>
            </div>
            {/* Aggregate rating */}
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-3 bg-sand/60 border border-gray-100 px-5 py-3 rounded-2xl">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-luxury-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <span className="font-bold text-charcoal text-sm">5.0</span>
                  <span className="text-gray-400 text-xs ml-1">from early users</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Cards with fade-edge mask */}
          <div className="relative fade-edges">
            <div className="flex gap-6 overflow-x-auto pb-6 snap-x scrollbar-hide -mx-4 px-4">
              {[
                {
                  quote: "Finally, a crypto wallet that doesn't feel like a science experiment. I sent money to my landlord using just his phone number.",
                  name: "Adebayo Ogunlesi",
                  role: "Software Engineer",
                  location: "Lagos, Nigeria",
                  initials: "AO",
                  color: "bg-forest-green"
                },
                {
                  quote: "Perfect for my business. Paying suppliers across Africa now feels like sending a WhatsApp message. Total game changer.",
                  name: "Fatima Hassan",
                  role: "Business Owner",
                  location: "Kano, Nigeria",
                  initials: "FH",
                  color: "bg-luxury-gold"
                },
                {
                  quote: "I work with clients worldwide. Sawa helps me receive payments and send money home instantly — no complex addresses ever.",
                  name: "Emmanuel Boateng",
                  role: "Freelancer",
                  location: "Accra, Ghana",
                  initials: "EB",
                  color: "bg-blue-500"
                },
                {
                  quote: "So simple as a student. No passwords, no complex setup. Just works with my phone number. I told all my friends.",
                  name: "David Okonkwo",
                  role: "Student",
                  location: "Abuja, Nigeria",
                  initials: "DO",
                  color: "bg-purple-500"
                }
              ].map((t, i) => (
                <motion.div
                  key={i}
                  className="min-w-[320px] md:min-w-[420px] bg-sand/40 border border-gray-100 p-8 rounded-3xl shrink-0 snap-center hover:bg-sand/70 hover:shadow-lg transition-all duration-300 flex flex-col"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(5)].map((_, j) => <span key={j} className="text-luxury-gold text-lg">★</span>)}
                  </div>
                  <p className="text-lg text-charcoal font-medium italic mb-6 leading-relaxed flex-1">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-bold text-charcoal text-sm">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.role} · {t.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── GLOBAL REACH ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-cream border-t border-gray-100 overflow-hidden">
        <div className="container-custom mb-12 text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-forest-green mb-4">Coverage</p>
            <h2 className="heading-2 mb-4">Africa &amp; Beyond.</h2>
            <p className="text-body text-gray-600 mb-6">
              Sawa supports transfers across 50+ countries.
            </p>
            {/* Country count badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest-green/8 border border-forest-green/15 rounded-full">
              <span className="text-sm font-semibold text-forest-green">🌍 50+ countries supported</span>
            </div>
          </FadeIn>
        </div>

        {/* Marquee rows with edge fades */}
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
                    <span className="text-xl">{country.flag}</span>
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

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-forest-green relative overflow-hidden text-center">
        {/* Background layers */}
        <div className="absolute inset-0 bg-grain opacity-10 mix-blend-overlay" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-luxury-gold/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-forest-green-dark/60 rounded-full blur-[80px] pointer-events-none" />
        {/* Subtle horizontal lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

        <div className="container-custom relative z-10">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-luxury-gold/80 mb-6">Get early access</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
              Ready to join the future?
            </h2>
            <p className="text-xl text-white/75 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Join the waitlist today and be among the first to experience the most human crypto wallet ever built.
            </p>

            <form className="max-w-md mx-auto relative group mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-luxury-gold/50 to-white/20 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-700" />
              <div className="relative flex p-1.5 bg-forest-green-dark rounded-full border border-white/10">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 bg-transparent text-white placeholder:text-white/40 focus:outline-none text-sm"
                />
                <button className="px-7 py-2.5 bg-white text-forest-green rounded-full font-bold hover:bg-cream transition-colors shadow-lg text-sm">
                  Join
                </button>
              </div>
            </form>

            <p className="text-sm text-white/40 mb-10">No spam. Unsubscribe anytime.</p>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {[
                { icon: '🌍', text: '50+ Countries' },
                { icon: '⚡', text: 'Instant Transfers' },
                { icon: '🔒', text: 'Bank-Grade Security' },
                { icon: '💬', text: 'Discord Community' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/50 text-sm">
                  <span>{item.icon}</span>
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
