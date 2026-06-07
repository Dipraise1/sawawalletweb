'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/lib/hooks'
import SecurityIcon from './icons/SecurityIcon'
import LightningIcon from './icons/LightningIcon'
import GlobeIcon from './icons/GlobeIcon'

const trustItems = [
  {
    Icon: SecurityIcon,
    title: "Bank-grade security",
    description: "Protected with enterprise encryption and multi-signature wallets",
    highlight: "Secure",
    color: "from-red-500 to-red-600",
    features: ["Multi-sig Wallets", "Hardware Security", "Audit Reports", "Insurance"]
  },
  {
    Icon: LightningIcon,
    title: "Phone-first UX", 
    description: "Send to any contact using just their phone number (no addresses)",
    highlight: "Simple",
    color: "from-green-500 to-green-600",
    features: ["Privy Embedded Wallets", "Cryptographic Hashing", "No WhatsApp Auth", "Solana Resolution"]
  },
  {
    Icon: GlobeIcon,
    title: "Compliance-first",
    description: "Production KYC/AML (NIN, Prembly, sanctions, tiered limits) for 10+ African countries",
    highlight: "Compliant",
    color: "from-blue-500 to-blue-600",
    features: ["NIN/BVN Verification", "AML & Sanctions", "Tiered Limits", "Prembly Integration"]
  }
]

export default function TrustSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="download" ref={ref} className="py-10 sm:py-12 lg:py-16 bg-white">
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
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-3 leading-tight">
            Built for Africa.
          </h2>
          
          <p className="text-sm sm:text-base text-gray-500 max-w-3xl mx-auto leading-relaxed mb-5">
            Primitives extracted from our production wallet for Solana consumer apps.
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
              <motion.div 
                className={`relative z-10 w-14 h-14 sm:w-12 sm:h-12 mx-auto mb-3 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.15)]`}
                whileHover={{ 
                  scale: 1.15,
                  rotate: 5,
                  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <item.Icon className="w-7 h-7 sm:w-6 sm:h-6 text-white flex-shrink-0" />
              </motion.div>
              
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
