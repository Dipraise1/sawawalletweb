'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/lib/hooks'

const investmentFeatures = [
  {
    title: "DeFi Access",
    description: "Connect to leading DeFi protocols on Solana and EVM chains",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    stats: "99.9%",
    statLabel: "Uptime",
    color: "from-forest-green to-forest-green/80"
  },
  {
    title: "Staking",
    description: "Earn rewards on your digital assets",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    stats: "Up to 7%",
    statLabel: "APY",
    color: "from-forest-green to-forest-green/80"
  },
  {
    title: "Liquidity Pools",
    description: "Earn fees by providing liquidity",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
        <path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C13.6569 21 15 16.9706 15 12C15 7.02944 13.6569 3 12 3M12 21C10.3431 21 9 16.9706 9 12C9 7.02944 10.3431 3 12 3M3 12C3 7.02944 7.02944 3 12 3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    stats: "12-25%",
    statLabel: "APY",
    color: "from-forest-green to-forest-green/80"
  }
]

export default function InvestmentSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="investments" ref={ref} className="py-10 sm:py-12 bg-gradient-to-br from-forest-green/5 to-luxury-gold/5">
      <div className="container-custom px-4">
        <motion.div
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-lg sm:text-xl font-bold text-charcoal mb-2">
            DeFi Made Simple
          </h2>
          <p className="text-xs text-gray-500 max-w-2xl mx-auto">
            Access decentralized finance on Solana and EVM chains. Coming soon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 max-w-5xl mx-auto">
          {investmentFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] p-6 sm:p-5 group relative overflow-hidden cursor-pointer border border-gray-100/80 hover:border-gray-200/60 transition-all duration-300 min-h-[180px] flex flex-col backdrop-blur-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest-green/5 to-luxury-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <motion.div 
                    className={`w-12 h-12 sm:w-11 sm:h-11 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex-shrink-0`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                    }}
                  >
                    <div className="scale-75">
                      {feature.icon}
                    </div>
                  </motion.div>
                  <div className="text-right">
                    <div className="text-base sm:text-sm font-bold text-forest-green">{feature.stats}</div>
                    <div className="text-[10px] text-gray-500">{feature.statLabel}</div>
                  </div>
                </div>
                
                <h3 className="text-sm font-bold text-charcoal mb-1.5">
                  {feature.title}
                </h3>
                
                <p className="text-xs text-gray-600 flex-1">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#download" className="bg-gradient-to-r from-forest-green to-forest-green/90 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_8px_24px_rgba(45,80,22,0.25)] transform hover:-translate-y-1 text-xs inline-block shadow-[0_4px_12px_rgba(45,80,22,0.2)]">
            Join Waitlist
          </a>
        </motion.div>
      </div>
    </section>
  )
}
