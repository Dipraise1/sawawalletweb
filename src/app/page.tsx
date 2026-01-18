'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
)

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-cream font-sans selection:bg-forest-green/20 selection:text-forest-green-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <span className="inline-block py-1 px-3 rounded-full bg-forest-green/5 text-forest-green text-sm font-medium mb-6 border border-forest-green/10">
                Money for people, not addresses.
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="heading-hero text-charcoal mb-8">
                Send money like <br className="hidden sm:block" />
                you send a text.
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
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="btn-primary w-full sm:w-auto hover:shadow-glow-green">
                  <span>Get Sawa for iOS</span>
                  <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
                <button className="btn-secondary w-full sm:w-auto">
                  <span>View on Android</span>
                </button>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Abstract "Human" Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-40 pointer-events-none -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-[#E6D5C3]/30 to-[#94A388]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-[#D4AF37]/10 to-transparent rounded-full blur-3xl transform translate-y-20" />
        </div>
      </section>

      {/* "Why" Section - The Human Element */}
      <section className="py-24 bg-white relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative rounded-3xl overflow-hidden bg-sand aspect-[4/5] lg:aspect-square group">
                {/* Placeholder for a lifestyle image of people connecting */}
                <Image
                  src="/Green & Yellow.jpg"
                  alt="Sawa Lifestyle"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-forest-green/10 flex items-center justify-center text-forest-green">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-charcoal">Transfer Complete</p>
                      <p className="text-xs text-gray-500">Sent ₦500 USDC to Mom</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <div>
              <FadeIn delay={0.2}>
                <h2 className="heading-2 mb-6">Designed for real relationships.</h2>
                <p className="text-body mb-6">
                  Sending money shouldn&apos;t feel like a transaction—it&apos;s an act of care.
                  Whether you&apos;re paying tuition, sending support home, or splitting a dinner bill,
                  Sawa respects the connection between you and the recipient.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "No 42-character wallet addresses.",
                    "Contacts sync automatically.",
                    "Add personal notes to every transfer."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-forest-green/10 flex items-center justify-center flex-shrink-0 text-forest-green">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#features" className="text-forest-green font-semibold hover:text-forest-green-dark transition-colors inline-flex items-center gap-1">
                  See how it works <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-sand/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="heading-2 mb-4">Professional grade. Human simple.</h2>
              <p className="text-body text-gray-600">
                Built on powerful blockchain technology, wrapped in an interface anyone can use.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Multi-Chain capable",
                desc: "USDC on Solana, Polygon, or Base? We handle the networks so you don't have to.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                )
              },
              {
                title: "Instant Settlement",
                desc: "Money moves at the speed of the internet. No more waiting 3-5 business days.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                )
              },
              {
                title: "Secure & Non-Custodial",
                desc: "You own your keys. You own your money. We just make it easy to manage.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                )
              }
            ].map((feature, i) => (
              <FadeIn delay={i * 0.1} key={i}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-forest-green/20 transition-colors h-full">
                  <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-forest-green mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-charcoal">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / "Human" Stories */}
      <section className="py-24 overflow-hidden relative">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-xl">
              <h2 className="heading-2 mb-4">Trusted by thousands.</h2>
              <p className="text-body">People across the world connect through Sawa.</p>
            </div>
            <div className="flex gap-2 mt-6 md:mt-0">
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-charcoal">
                ←
              </button>
              <button className="w-10 h-10 rounded-full bg-forest-green text-white flex items-center justify-center hover:bg-forest-green-dark transition-colors">
                →
              </button>
            </div>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="min-w-[300px] md:min-w-[400px] bg-white border border-gray-100 p-8 rounded-2xl shrink-0 snap-center">
                <div className="flex items-center gap-1 mb-4 text-[#D4AF37]">
                  {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
                </div>
                <p className="text-lg text-gray-700 italic mb-6">
                  &quot;Finally, a crypto wallet that doesn&apos;t feel like a science experiment. I sent rent to my landlord using just his phone number.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="font-bold text-sm text-charcoal">Sarah Jenkins</p>
                    <p className="text-xs text-gray-500">Freelance Designer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Countries / Global Reach */}
      <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
        <div className="container-custom mb-12 text-center">
          <h2 className="heading-2 mb-4">Africa & Beyond.</h2>
          <p className="text-body text-gray-600">
            Sawa supports transfers across 50+ countries.
          </p>
        </div>

        <div className="relative flex flex-col gap-8">
          {/* Marquee Row 1 */}
          <div className="flex overflow-hidden group">
            <div className="flex space-x-3 animate-marquee-left group-hover:[animation-play-state:paused] min-w-full">
              {[
                { name: 'Ghana', flag: '🇬🇭' }, { name: 'Kenya', flag: '🇰🇪' }, { name: 'South Africa', flag: '🇿🇦' },
                { name: 'Egypt', flag: '🇪🇬' }, { name: 'Morocco', flag: '🇲🇦' }, { name: 'Tanzania', flag: '🇹🇿' },
                { name: 'Uganda', flag: '🇺🇬' }, { name: 'Ethiopia', flag: '🇪🇹' }, { name: 'Algeria', flag: '🇩🇿' },
                { name: 'Nigeria', flag: '🇳🇬' }, { name: 'Rwanda', flag: '🇷🇼' }, { name: 'Senegal', flag: '🇸🇳' },
                { name: 'USA', flag: '🇺🇸' }, { name: 'UK', flag: '🇬🇧' }, { name: 'Netherlands', flag: '🇳🇱' }
              ].concat([
                { name: 'Ghana', flag: '🇬🇭' }, { name: 'Kenya', flag: '🇰🇪' }, { name: 'South Africa', flag: '🇿🇦' },
                { name: 'Egypt', flag: '🇪🇬' }, { name: 'Morocco', flag: '🇲🇦' }, { name: 'Tanzania', flag: '🇹🇿' },
                { name: 'Uganda', flag: '🇺🇬' }, { name: 'Ethiopia', flag: '🇪🇹' }, { name: 'Algeria', flag: '🇩🇿' },
                { name: 'Nigeria', flag: '🇳🇬' }, { name: 'Rwanda', flag: '🇷🇼' }, { name: 'Senegal', flag: '🇸🇳' },
                { name: 'USA', flag: '🇺🇸' }, { name: 'UK', flag: '🇬🇧' }, { name: 'Netherlands', flag: '🇳🇱' }
              ]).map((country, i) => (
                <div key={i} className="flex-shrink-0 flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-full">
                  <span className="text-xl">{country.flag}</span>
                  <span className="font-medium text-charcoal">{country.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Row 2 (Reverse) - More African Countries */}
          <div className="flex overflow-hidden group">
            <div className="flex space-x-3 animate-marquee-right group-hover:[animation-play-state:paused] min-w-full">
              {[
                { name: 'Angola', flag: '🇦🇴' }, { name: 'Mozambique', flag: '🇲🇿' }, { name: 'Zambia', flag: '🇿🇲' },
                { name: 'Zimbabwe', flag: '🇿🇼' }, { name: 'Cameroon', flag: '🇨🇲' }, { name: 'Ivory Coast', flag: '🇨🇮' },
                { name: 'Botswana', flag: '🇧🇼' }, { name: 'Namibia', flag: '🇳🇦' }, { name: 'Gabon', flag: '🇬🇦' },
                { name: 'Mauritius', flag: '🇲🇺' }, { name: 'Tunisia', flag: '🇹🇳' }, { name: 'Seychelles', flag: '🇸🇨' }
              ].concat([
                { name: 'Angola', flag: '🇦🇴' }, { name: 'Mozambique', flag: '🇲🇿' }, { name: 'Zambia', flag: '🇿🇲' },
                { name: 'Zimbabwe', flag: '🇿🇼' }, { name: 'Cameroon', flag: '🇨🇲' }, { name: 'Ivory Coast', flag: '🇨🇮' },
                { name: 'Botswana', flag: '🇧🇼' }, { name: 'Namibia', flag: '🇳🇦' }, { name: 'Gabon', flag: '🇬🇦' },
                { name: 'Mauritius', flag: '🇲🇺' }, { name: 'Tunisia', flag: '🇹🇳' }, { name: 'Seychelles', flag: '🇸🇨' }
              ]).map((country, i) => (
                <div key={i} className="flex-shrink-0 flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-full">
                  <span className="text-xl">{country.flag}</span>
                  <span className="font-medium text-charcoal">{country.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-forest-green text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-10 mix-blend-overlay"></div>
        <div className="container-custom relative z-10 text-center">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">Ready to join the future?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Join the waitlist today and be among the first to experience the most human crypto wallet ever built.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white w-full sm:w-80 backdrop-blur-sm"
              />
              <button className="bg-white text-forest-green px-8 py-4 rounded-full font-bold hover:bg-cream transition-colors w-full sm:w-auto">
                Get Early Access
              </button>
            </div>
            <p className="mt-6 text-xs text-white/40">No spam. Unsubscribe anytime.</p>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}

