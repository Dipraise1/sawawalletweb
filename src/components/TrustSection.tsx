'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/lib/hooks'
import Image from 'next/image'
import GlobeIcon from './icons/GlobeIcon'
import PhoneIcon from './icons/PhoneIcon'
import SecurityIcon from './icons/SecurityIcon'
import CommunityIcon from './icons/CommunityIcon'

const trustItems = [
  {
    Icon: GlobeIcon,
    title: "Built for Africa",
    description: "Deep local support across Nigeria, Kenya, Ghana, South Africa, Uganda, Tanzania, Zambia and 40+ more countries. Real infrastructure for emerging markets.",
    highlight: "Local First",
    color: "from-emerald-500 to-teal-600",
    features: ["50+ Countries", "Mobile Money", "Local Banks", "Naira • Cedi • Rand"]
  },
  {
    Icon: PhoneIcon,
    title: "Phone-First Identity",
    description: "Send, receive, and pay using just a phone number from your contacts. No scary wallet addresses. Non-custodial via Privy embedded wallets.",
    highlight: "Simple UX",
    color: "from-amber-500 to-orange-600",
    features: ["resolveIdentifier()", "sendToPhone()", "Username & Email", "Cryptographic Hashing"]
  },
  {
    Icon: CommunityIcon,
    title: "Real Production Rails",
    description: "Our own treasury, compliance (NIN/BVN, Prembly, sanctions screening), and on/off-ramp infrastructure. Fast, fair, and built for African realities.",
    highlight: "Compliant & Live",
    color: "from-violet-500 to-purple-600",
    features: ["Private Rust Backend", "Tiered KYC Limits", "Helius + Jupiter", "AML & Sanctions"]
  }
]

export default function TrustSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="trust" ref={ref} className="py-20 bg-white border-t border-gray-100">
      <div className="container-custom px-4">
        <motion.div
          className="text-center mb-6 sm:mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative element */}
          <motion.div
            className="inline-flex items-center justify-center w-9 h-9 bg-gradient-to-br from-forest-green/10 to-luxury-gold/10 rounded-lg mb-3"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-forest-green">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 tracking-tighter">
            Built for Africa.
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real infrastructure, not hype. Phone-first payments, local compliance, private Rust rails, and non-custodial identity tools that actually work across the continent. We built the Sawa Toolkit (@sawa/phone-resolver + compliance-kit) so other developers can build similar human-first apps without reinventing the wheel.
          </p>


        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-6 sm:mb-8 lg:mb-12 max-w-5xl mx-auto">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="text-center space-y-3 p-6 sm:p-5 bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 group border border-gray-100/80 hover:border-gray-200/60 cursor-pointer min-h-[240px] flex flex-col backdrop-blur-sm relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest-green/3 via-transparent to-luxury-gold/3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Visual for each trust card - mix of icon + subtle image for 1 & 3 */}
              <div className="relative z-10 mx-auto mb-4 w-20 h-20 rounded-2xl overflow-hidden shadow-md">
                {index === 0 && (
                  <Image 
                    src="/lifestyle-street.jpg"
                    alt="Local infrastructure in Africa"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                )}
                {index === 1 && (
                  <div className={`w-full h-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    <item.Icon className="w-10 h-10 text-white" />
                  </div>
                )}
                {index === 2 && (
                  <Image 
                    src="/lifestyle-market.jpg"
                    alt="Real production rails"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                )}
              </div>
              
              <div className="relative z-10 space-y-1.5">
                <h3 className="text-base font-semibold text-charcoal tracking-tight">
                  {item.title}
                </h3>
                <div className={`inline-block px-2.5 py-1 bg-gradient-to-r ${item.color} text-white text-xs font-semibold rounded-full shadow-sm`}>
                  {item.highlight}
                </div>
              </div>

              <p className="relative z-10 text-sm text-gray-600 leading-relaxed flex-1 px-1">
                {item.description}
              </p>

              <div className="relative z-10 flex flex-wrap gap-1.5 sm:gap-2 justify-center pt-2">
                {item.features.map((feature, featureIndex) => (
                  <span key={featureIndex} className="text-xs bg-gray-50/80 backdrop-blur-sm text-gray-600 px-2.5 py-1 rounded-full whitespace-nowrap border border-gray-100/60">
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}
