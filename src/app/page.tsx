'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-forest-green/5 rounded-full blur-[100px] animate-float opacity-70" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-luxury-gold/5 rounded-full blur-[120px] animate-float opacity-60" style={{ animationDelay: '2s' }} />
          <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-cream rounded-full blur-[80px] opacity-80" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-gray-200 shadow-sm mb-8 hover:border-forest-green/30 transition-colors">
                <span className="w-2 h-2 rounded-full bg-forest-green animate-pulse"></span>
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
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://testflight.apple.com/join/5CT6rA8q" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <Image 
                    src="/app-store-badge.svg" 
                    alt="Download on the App Store" 
                    width={160} 
                    height={50}
                    className="h-[50px] w-auto"
                  />
                </a>
                <a 
                  href="https://play.google.com/apps/testing/com.sawawallet.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                   <Image 
                    src="/google-play-badge.png" 
                    alt="Get it on Google Play" 
                    width={180} 
                    height={50}
                    className="h-[50px] w-auto"
                  />
                </a>
              </div>
            </FadeIn>

            {/* App Preview / Floating Elements */}
            <FadeIn delay={0.5} className="mt-20 relative hidden sm:block">
              <div className="relative mx-auto w-full max-w-[1000px] h-[600px]">
                 {/* Mockup Elements - Actual App Screenshot */}
                 <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[300px] h-[620px] bg-charcoal rounded-[3.5rem] border-[8px] border-white shadow-2xl z-20 overflow-hidden">
                    <Image
                      src="/app-mockup.png"
                      alt="Sawa App Interface"
                      fill
                      className="object-cover"
                      priority
                    />
                 </div>

                 {/* Floating Card 1 */}
                 <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-[15%] top-[25%] bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-30 flex items-center gap-3 w-64 glass"
                 >
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-forest-green">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-charcoal">Sent to Mom</div>
                      <div className="text-xs text-gray-500">Just now • 500 USDC</div>
                    </div>
                 </motion.div>

                 {/* Floating Card 2 */}
                 <motion.div 
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute right-[10%] top-[40%] bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-10 flex items-center gap-3 w-64 glass"
                 >
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-charcoal">Instant Transfer</div>
                      <div className="text-xs text-gray-500">No network fees</div>
                    </div>
                 </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* "Why" Section - The Human Element */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative rounded-[2rem] overflow-hidden bg-sand aspect-[4/5] lg:aspect-square group shadow-2xl">
                <Image
                  src="/Green & Yellow.jpg"
                  alt="Sawa Lifestyle"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                  <p className="text-white text-lg font-medium">&quot;It just works, like magic.&quot;</p>
                </div>
              </div>
            </FadeIn>
            <div>
              <FadeIn delay={0.2}>
                <h2 className="heading-2 mb-6">Designed for real relationships.</h2>
                <p className="text-body-lg mb-8">
                  Sending money shouldn&apos;t feel like a transaction—it&apos;s an act of care.
                  Whether you&apos;re paying tuition, sending support home, or splitting a dinner bill,
                  Sawa respects the connection between you and the recipient.
                </p>
                <div className="space-y-6">
                  {[
                    { title: "No wallet addresses", desc: "Just use phone numbers from your contacts." },
                    { title: "Automatic Sync", desc: "See who's on Sawa instantly." },
                    { title: "Personal Notes", desc: "Add a message to every transfer." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                      <div className="mt-1 w-8 h-8 rounded-full bg-forest-green/10 flex items-center justify-center flex-shrink-0 text-forest-green">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-charcoal">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 bg-sand/30 relative">
        <div className="absolute inset-0 bg-grain opacity-[0.03]"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <h2 className="heading-2 mb-6">Professional grade. <br /><span className="text-forest-green">Human simple.</span></h2>
              <p className="text-body-lg text-gray-600">
                Built on powerful blockchain technology, wrapped in an interface anyone can use.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Multi-Chain Capable",
                desc: "USDC on Solana, Polygon, or Base? We handle the networks so you don't have to.",
                icon: (
                  <svg className="w-8 h-8 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                ),
                gradient: "from-forest-green/5 to-luxury-gold/5"
              },
              {
                title: "Instant Settlement",
                desc: "Money moves at the speed of the internet. No more waiting 3-5 business days.",
                icon: (
                  <svg className="w-8 h-8 text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                ),
                gradient: "from-blue-50 to-indigo-50"
              },
              {
                title: "Secure & Non-Custodial",
                desc: "You own your keys. You own your money. We just make it easy to manage.",
                icon: (
                  <svg className="w-8 h-8 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                ),
                gradient: "from-gray-50 to-gray-100"
              }
            ].map((feature, i) => (
              <FadeIn delay={i * 0.1} key={i}>
                <div className={`relative p-8 rounded-[2rem] border border-white bg-gradient-to-br ${feature.gradient} shadow-sm hover:shadow-xl transition-all duration-500 group h-full overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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

      {/* Social Proof / "Human" Stories */}
      <section className="py-32 overflow-hidden relative bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <h2 className="heading-2 mb-4">Trusted by thousands.</h2>
              <p className="text-body-lg">People across the world connect through Sawa.</p>
            </div>
          </div>

          <div className="flex gap-8 overflow-x-auto pb-8 snap-x scrollbar-hide -mx-4 px-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="min-w-[320px] md:min-w-[450px] bg-sand/30 border border-gray-100 p-10 rounded-3xl shrink-0 snap-center hover:bg-sand/50 transition-colors">
                <div className="flex items-center gap-1 mb-6 text-luxury-gold">
                  {[...Array(5)].map((_, j) => <span key={j} className="text-xl">★</span>)}
                </div>
                <p className="text-xl text-charcoal font-medium italic mb-8 leading-relaxed">
                  &quot;Finally, a crypto wallet that doesn&apos;t feel like a science experiment. I sent rent to my landlord using just his phone number.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white shadow-sm"></div>
                  <div>
                    <p className="font-bold text-charcoal">Sarah Jenkins</p>
                    <p className="text-sm text-gray-500">Freelance Designer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach - Marquee */}
      <section className="py-24 bg-cream border-t border-gray-100 overflow-hidden">
        <div className="container-custom mb-12 text-center">
          <h2 className="heading-2 mb-4">Africa & Beyond.</h2>
          <p className="text-body text-gray-600">
            Sawa supports transfers across 50+ countries.
          </p>
        </div>

        <div className="relative flex flex-col gap-6 opacity-80">
          {[
            // Row 1
            [
               { name: 'Ghana', flag: '🇬🇭' }, { name: 'Kenya', flag: '🇰🇪' }, { name: 'South Africa', flag: '🇿🇦' },
               { name: 'Egypt', flag: '🇪🇬' }, { name: 'Morocco', flag: '🇲🇦' }, { name: 'Tanzania', flag: '🇹🇿' },
               { name: 'Uganda', flag: '🇺🇬' }, { name: 'Ethiopia', flag: '🇪🇹' }, { name: 'Algeria', flag: '🇩🇿' },
               { name: 'Nigeria', flag: '🇳🇬' }, { name: 'Rwanda', flag: '🇷🇼' }, { name: 'Senegal', flag: '🇸🇳' }
            ],
            // Row 2
            [
               { name: 'Angola', flag: '🇦🇴' }, { name: 'Mozambique', flag: '🇲🇿' }, { name: 'Zambia', flag: '🇿🇲' },
               { name: 'Zimbabwe', flag: '🇿🇼' }, { name: 'Cameroon', flag: '🇨🇲' }, { name: 'Ivory Coast', flag: '🇨🇮' },
               { name: 'Botswana', flag: '🇧🇼' }, { name: 'Namibia', flag: '🇳🇦' }, { name: 'Gabon', flag: '🇬🇦' },
               { name: 'Mauritius', flag: '🇲🇺' }, { name: 'Tunisia', flag: '🇹🇳' }, { name: 'Seychelles', flag: '🇸🇨' }
            ]
          ].map((row, rowIndex) => (
             <div key={rowIndex} className="flex overflow-hidden group">
              <div className={`flex space-x-4 ${rowIndex % 2 === 0 ? 'animate-marquee-left' : 'animate-marquee-right'} group-hover:[animation-play-state:paused] min-w-full`}>
                {[...row, ...row, ...row].map((country, i) => (
                  <div key={i} className="flex-shrink-0 flex items-center gap-3 bg-white border border-gray-200/50 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-2xl">{country.flag}</span>
                    <span className="font-medium text-charcoal">{country.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <section className="py-32 bg-forest-green relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-grain opacity-10 mix-blend-overlay"></div>
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-luxury-gold/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 tracking-tight text-white">
              Ready to join the future?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 font-light">
              Join the waitlist today and be among the first to experience the most human crypto wallet ever built.
            </p>
            
            <form className="max-w-md mx-auto relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-luxury-gold to-white rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex p-1 bg-forest-green-dark rounded-full border border-white/10">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 bg-transparent text-white placeholder:text-white/40 focus:outline-none"
                />
                <button className="px-8 py-3 bg-white text-forest-green rounded-full font-bold hover:bg-cream transition-colors shadow-lg">
                  Join
                </button>
              </div>
            </form>
            <p className="mt-6 text-sm text-white/40">No spam. Unsubscribe anytime.</p>
          </FadeIn>
        </div>
      </section>

    </main>
  )
}

