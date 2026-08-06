'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/lib/hooks'
import GlobeIcon from './icons/GlobeIcon'
import PhoneIcon from './icons/PhoneIcon'
import CommunityIcon from './icons/CommunityIcon'

/**
 * Every card used to invent its own palette — emerald/teal, amber/orange,
 * violet/purple — none of which appear anywhere else on the site, and each
 * card carried a different kind of visual (two cropped photos, one gradient
 * icon tile). Now all three run on the brand ramp (forest green, gold, sage)
 * with one shared layout, so the row reads as a set.
 */
const trustItems = [
  {
    Icon: GlobeIcon,
    eyebrow: 'Local first',
    title: 'Local rails, local currencies',
    description:
      'Deep local support across Nigeria, Kenya, Ghana, South Africa, Uganda, Tanzania, Zambia and 40+ more countries — mobile money and bank rails that people already use.',
    chips: ['50+ countries', 'Mobile money', 'Local banks', 'Naira · Cedi · Rand'],
    accent: {
      tile: 'bg-forest-green/10 text-forest-green',
      eyebrow: 'text-forest-green',
      rule: 'bg-forest-green/25',
    },
  },
  {
    Icon: PhoneIcon,
    eyebrow: 'Simple UX',
    title: 'Phone-first identity',
    description:
      'Send, receive and pay using a phone number straight from your contacts. No scary wallet addresses, and non-custodial throughout via Privy embedded wallets.',
    chips: ['Phone · username · email', 'Contact sync', 'Non-custodial keys', 'Hashed identifiers'],
    accent: {
      tile: 'bg-luxury-gold/15 text-[#8A6D14]',
      eyebrow: 'text-[#8A6D14]',
      rule: 'bg-luxury-gold/40',
    },
  },
  {
    Icon: CommunityIcon,
    eyebrow: 'Compliant & live',
    title: 'Real production rails',
    description:
      'Our own treasury, compliance stack (NIN/BVN, Prembly, sanctions screening) and on/off-ramp infrastructure — running in production, not on a roadmap.',
    chips: ['Private Rust backend', 'Tiered KYC limits', 'Helius + Jupiter', 'AML & sanctions'],
    accent: {
      tile: 'bg-sage/20 text-[#4A6B32]',
      eyebrow: 'text-[#4A6B32]',
      rule: 'bg-sage/50',
    },
  },
]

export default function TrustSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="trust" ref={ref} className="py-24 bg-white border-t border-gray-100">
      <div className="container-custom">
        <motion.div
          className="max-w-2xl mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Same eyebrow + heading pattern as "Why Sawa", "Features" and
              "For developers" further up the page. */}
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-green mb-4">
            Why it holds up
          </p>
          <h2 className="heading-2 mb-5">Built for Africa.</h2>
          <p className="text-body-lg">
            Real infrastructure, not hype — phone-first payments, local compliance and private
            Rust rails that work across the continent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="group flex flex-col p-7 rounded-2xl bg-white border border-gray-100 hover:border-gray-200/80 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105 ${item.accent.tile}`}
              >
                <item.Icon className="w-6 h-6" />
              </div>

              <p
                className={`text-[11px] font-semibold uppercase tracking-widest mb-2 ${item.accent.eyebrow}`}
              >
                {item.eyebrow}
              </p>
              <h3 className="font-display text-xl font-semibold text-charcoal leading-snug mb-3 text-balance">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{item.description}</p>

              <div className={`h-px w-full mb-5 mt-auto ${item.accent.rule}`} aria-hidden="true" />

              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {item.chips.map((chip) => (
                  <li
                    key={chip}
                    className="text-xs text-gray-500 flex items-center gap-1.5 whitespace-nowrap"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                    {chip}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
