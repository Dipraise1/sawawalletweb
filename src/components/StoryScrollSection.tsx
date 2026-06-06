'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from 'framer-motion'

const ADDR_BG = [
  { text: '0x742d35Cc6634C0532925a3b844Bc454b2c1d4F3a', top: '7%',  left: '2%',  size: 9,  rot: -2,  op: 0.07 },
  { text: '9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtA', top: '17%', left: '52%', size: 8,  rot: 3,   op: 0.06 },
  { text: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',  top: '28%', left: '18%', size: 9, rot: -1,  op: 0.07 },
  { text: 'TJRabPrwbZy45sbavfcjinPJC18kjpRTv8',          top: '40%', left: '62%', size: 10, rot: 2,   op: 0.05 },
  { text: '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B',  top: '53%', left: '8%',  size: 8,  rot: -3,  op: 0.06 },
  { text: 'addr1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',top: '63%', left: '42%', size: 9, rot: 1,   op: 0.06 },
  { text: '0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db',  top: '74%', left: '70%', size: 9,  rot: -2,  op: 0.05 },
  { text: 'DYw8jCTfwHNRJhhmFcbXvVDTqWMEVFBX7KMYZ',      top: '82%', left: '4%',  size: 8,  rot: 2,   op: 0.06 },
  { text: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', top: '12%', left: '35%', size: 8,  rot: 1.5, op: 0.05 },
  { text: 'tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb',        top: '47%', left: '80%', size: 8,  rot: -2,  op: 0.05 },
]

export default function StoryScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Numeric spring → useMotionTemplate avoids unit-interpolation bugs
  const xNum = useTransform(
    scrollYProgress,
    [0, 0.35, 0.42, 0.70, 0.77, 1],
    [0, 0, -33.333, -33.333, -66.666, -66.666]
  )
  const xSpring = useSpring(xNum, { stiffness: 52, damping: 22 })
  const x = useMotionTemplate`${xSpring}%`

  const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 25 })
  const bgY    = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  // ── Panel 1
  const p1Opacity = useTransform(scrollYProgress, [0, 0.30, 0.42], [1, 1, 0])
  const p1Y       = useTransform(scrollYProgress, [0, 0.42], ['0px', '-30px'])
  const addrY     = useTransform(scrollYProgress, [0, 0.38], ['0px', '-50px'])
  const addrOp    = useTransform(scrollYProgress, [0, 0.26, 0.38], [1, 1, 0])

  // ── Panel 2
  const p2Opacity = useTransform(scrollYProgress, [0.38, 0.52, 0.66, 0.77], [0, 1, 1, 0])
  const p2Scale   = useTransform(scrollYProgress, [0.38, 0.54], [0.90, 1])
  const p2Y       = useTransform(scrollYProgress, [0.38, 0.54], ['24px', '0px'])
  const arrowX    = useTransform(scrollYProgress, [0.44, 0.62], ['-5px', '5px'])

  // ── Panel 3
  const p3Opacity  = useTransform(scrollYProgress, [0.72, 0.84], [0, 1])
  const p3Scale    = useTransform(scrollYProgress, [0.72, 0.86], [0.90, 1])
  const p3Y        = useTransform(scrollYProgress, [0.72, 0.86], ['24px', '0px'])
  const phoneScale = useTransform(scrollYProgress, [0.82, 0.94], [0, 1])
  const phoneOp    = useTransform(scrollYProgress, [0.80, 0.90], [0, 1])

  // Progress dots
  const dot1 = useTransform(scrollYProgress, [0, 0.35, 0.42], [1, 1, 0.25])
  const dot2 = useTransform(scrollYProgress, [0.35, 0.48, 0.68, 0.77], [0.25, 1, 1, 0.25])
  const dot3 = useTransform(scrollYProgress, [0.70, 0.84], [0.25, 1])

  return (
    <section
      ref={containerRef}
      className="relative z-10"
      style={{ height: '360vh' }}
      aria-label="The Sawa story"
    >
      {/* Sticky viewport — dvh keeps it inside the visible area on mobile */}
      <div className="sticky top-0 overflow-hidden" style={{ height: '100dvh' }}>

        {/* Scroll progress bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-forest-green via-luxury-gold to-forest-green z-50 origin-left"
          style={{ scaleX }}
        />

        {/* Parallax background */}
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-[-15%] bg-gradient-to-b from-cream via-sand/40 to-cream pointer-events-none"
        />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-forest-green/5 rounded-full blur-[120px]" />
        </div>

        {/* Sliding panel track — touch-action pan-y prevents iOS from treating vertical swipes as horizontal pan */}
        <motion.div
          style={{ translateX: x, width: '300vw', touchAction: 'pan-y' }}
          className="absolute top-0 left-0 flex h-full"
        >

          {/* ══ PANEL 1 — The Problem ══ */}
          <div className="w-screen h-full relative flex items-center justify-center px-5 sm:px-10 lg:px-16 overflow-hidden">

            {/* Floating addresses */}
            <motion.div
              style={{ y: addrY, opacity: addrOp }}
              className="absolute inset-0 overflow-hidden pointer-events-none select-none"
            >
              {ADDR_BG.map((a, i) => (
                <span
                  key={i}
                  className="absolute font-mono text-red-800"
                  style={{
                    top: a.top, left: a.left,
                    fontSize: a.size, opacity: a.op,
                    transform: `rotate(${a.rot}deg)`,
                  }}
                >
                  {a.text}
                </span>
              ))}
              {['0x742d...', '9WzDX...', 'bc1q...', 'addr1...'].map((s, i) => (
                <span
                  key={`g${i}`}
                  className="absolute font-mono text-charcoal/[0.03]"
                  style={{
                    top: `${20 + i * 16}%`,
                    right: `${4 + i * 8}%`,
                    fontSize: 16 + i * 6,
                    transform: `rotate(${-1 + i * 0.8}deg)`,
                  }}
                >
                  {s}
                </span>
              ))}
            </motion.div>

            <motion.div
              style={{ opacity: p1Opacity, y: p1Y }}
              className="relative z-10 text-center w-full max-w-2xl lg:max-w-3xl mx-auto"
            >
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 sm:mb-6 lg:mb-8">
                01 · The Problem
              </p>
              <h2 className="text-[1.75rem] sm:text-4xl lg:text-[3.75rem] xl:text-[4.5rem] font-bold text-charcoal mb-3 sm:mb-5 lg:mb-7 leading-[1.1] tracking-tight">
                Crypto promised<br />
                <span className="text-gray-400 font-light">to free your money.</span>
              </h2>
              <p className="text-sm sm:text-lg lg:text-xl text-gray-500 mb-5 sm:mb-8 lg:mb-10 font-light">
                But first, you had to get this exactly right.
              </p>

              {/* Scary address */}
              <div className="inline-block mx-auto relative group w-full max-w-[min(480px,calc(100vw-2.5rem))] lg:max-w-[560px]">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-red-400/20 to-orange-400/20 rounded-2xl blur-md opacity-70" />
                <div className="relative bg-white border border-red-200/70 rounded-2xl px-4 sm:px-6 py-4 shadow-xl text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse flex-shrink-0" />
                    <span className="text-[10px] sm:text-xs font-semibold text-red-400/80 uppercase tracking-wide">Recipient address</span>
                  </div>
                  <p className="font-mono text-[10px] sm:text-sm text-red-700/70 break-all leading-relaxed">
                    0x742d35Cc6634C0532925a3b<span className="text-red-500 font-bold bg-red-50 px-0.5 rounded">844Bc454b2c1d4F3a</span>
                  </p>
                  <p className="text-[10px] sm:text-xs text-red-400/60 mt-2 flex items-center gap-1.5">
                    <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    One wrong character = money gone forever. No undo.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Scroll cue */}
            <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
              <motion.p
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2.2, repeat: Infinity }}
                className="text-[10px] sm:text-xs text-gray-400 font-medium tracking-[0.16em] uppercase"
              >
                Scroll to continue
              </motion.p>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="w-4 h-7 border border-gray-300/70 rounded-full flex items-start justify-center pt-1"
              >
                <div className="w-1 h-1 bg-gray-400/70 rounded-full" />
              </motion.div>
            </div>
          </div>

          {/* ══ PANEL 2 — The Breakthrough ══ */}
          <div className="w-screen h-full relative flex items-center justify-center px-5 sm:px-10 lg:px-16 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-forest-green/7 rounded-full blur-[100px]" />
            </div>

            <motion.div
              style={{ opacity: p2Opacity, scale: p2Scale, y: p2Y }}
              className="relative z-10 text-center w-full max-w-2xl lg:max-w-3xl mx-auto"
            >
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-forest-green mb-4 sm:mb-6 lg:mb-8">
                02 · The Breakthrough
              </p>
              <h2 className="text-[1.75rem] sm:text-4xl lg:text-[3.75rem] xl:text-[4.5rem] font-bold text-charcoal mb-5 sm:mb-8 lg:mb-10 leading-[1.1] tracking-tight">
                What if your wallet
                <br />
                <span className="text-gradient-green">lived in your contacts?</span>
              </h2>

              {/* Address → Phone transformation */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-5 sm:mb-10">
                <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 opacity-40 line-through decoration-red-400/60">
                  <p className="font-mono text-xs sm:text-sm text-gray-400">0x742d...4F3a</p>
                  <p className="text-[10px] text-gray-400/60 mt-0.5 hidden sm:block">42-character address</p>
                </div>

                <motion.div style={{ x: arrowX }} className="hidden sm:flex flex-col items-center gap-1">
                  <span className="text-xl text-forest-green/50">→</span>
                  <span className="text-[10px] text-gray-400">replaced by</span>
                </motion.div>
                <span className="sm:hidden text-lg text-forest-green/50">↓</span>

                <div className="relative group">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-forest-green/25 to-luxury-gold/25 rounded-2xl blur-md opacity-70" />
                  <div className="relative bg-white border-2 border-forest-green/20 rounded-xl px-5 sm:px-7 py-3 sm:py-4 shadow-xl">
                    <p className="font-bold text-lg sm:text-2xl text-forest-green">+234 802 123 4567</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[10px] sm:text-xs text-forest-green/50">Mom · Contacts</span>
                      <svg className="w-3 h-3 text-forest-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-xl text-gray-500 font-light">
                The people you love, already in your pocket.<br />
                <span className="text-charcoal font-medium">Now they&apos;re your wallet too.</span>
              </p>
            </motion.div>
          </div>

          {/* ══ PANEL 3 — The Sawa Way ══ */}
          <div className="w-screen h-full relative flex items-center justify-center px-5 sm:px-10 lg:px-16 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-forest-green/8 rounded-full blur-[130px]" />
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-luxury-gold/6 rounded-full blur-[100px]" />
            </div>

            <motion.div
              style={{ opacity: p3Opacity, scale: p3Scale, y: p3Y }}
              className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 max-w-5xl mx-auto w-full"
            >
              {/* Text — always visible */}
              <div className="text-center lg:text-left max-w-md lg:max-w-lg w-full">
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-luxury-gold mb-3 sm:mb-6">
                  03 · The Sawa Way
                </p>
                <h2 className="text-[1.75rem] sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-charcoal mb-3 sm:mb-5 leading-[1.1] tracking-tight">
                  Simple as
                  <br />
                  <span className="text-gradient-green">a text message.</span>
                </h2>
                <p className="text-sm sm:text-lg text-gray-500 font-light mb-4 sm:mb-6 leading-relaxed">
                  No addresses. No complexity. Just send money to people you know,
                  the way you already know them.
                </p>

                {/* Feature bullets */}
                <div className="flex flex-col gap-2 sm:gap-2.5">
                  {[
                    { color: 'bg-forest-green', text: '50+ countries supported' },
                    { color: 'bg-luxury-gold',  text: 'Instant on-chain settlement' },
                    { color: 'bg-forest-green', text: 'Zero hidden fees' },
                    { color: 'bg-sage',          text: 'Non-custodial — you own your keys' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 justify-center lg:justify-start">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.color}`} />
                      <span className="text-xs sm:text-sm text-gray-600">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Mobile-only: compact payment chip */}
                <div className="mt-5 sm:hidden">
                  <div className="inline-flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-4 py-3 shadow-lg">
                    <div className="w-9 h-9 rounded-full bg-forest-green/10 flex items-center justify-center text-base flex-shrink-0">👩🏾</div>
                    <div className="text-left">
                      <p className="text-xs font-semibold text-charcoal">Sent $50 to Mom</p>
                      <p className="text-[10px] text-gray-400">Instant · No address needed</p>
                    </div>
                    <div className="w-6 h-6 bg-forest-green rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone UI — desktop only (sm+) */}
              <motion.div
                style={{ scale: phoneScale, opacity: phoneOp }}
                className="flex-shrink-0 hidden sm:block"
              >
                <div className="relative w-64 sm:w-72 aspect-[9/19.5] bg-charcoal rounded-[2.75rem] border-[7px] border-charcoal shadow-2xl overflow-hidden">
                  <Image
                    src="/story-send.png"
                    alt="Sawa Wallet confirming a payment was sent successfully"
                    fill
                    sizes="(min-width: 640px) 288px, 256px"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

        </motion.div>

        {/* Progress dots */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-50">
          {[dot1, dot2, dot3].map((op, i) => (
            <motion.div
              key={i}
              style={{ opacity: op }}
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-forest-green"
            />
          ))}
        </div>

      </div>
    </section>
  )
}
