'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/lib/hooks'

const investmentFeatures = [
  {
    title: "Solana Ecosystem",
    description: "Access to high-performance DeFi protocols and yield farming opportunities on the fastest blockchain",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    stats: "99.9% Uptime",
    color: "from-purple-500 to-purple-600",
    highlight: "Fastest Blockchain",
    features: ["Raydium", "Jupiter", "Orca", "Serum"]
  },
  {
    title: "Staking Rewards",
    description: "Earn up to 7% APY by staking your USDC with trusted validators and secure your network",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    stats: "7% APY",
    color: "from-green-500 to-green-600",
    highlight: "Secure Staking",
    features: ["Auto-compound", "No Lock-up", "Daily Rewards", "Validator Selection"]
  },
  {
    title: "Liquidity Pools",
    description: "Provide liquidity and earn trading fees from automated market makers with high yields",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    stats: "12-25% APY",
    color: "from-orange-500 to-orange-600",
    highlight: "High Yield",
    features: ["USDC/SOL", "USDC/USDT", "Auto-rebalance", "Impermanent Loss Protection"]
  }
]

export default function InvestmentSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="investments" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-forest-green/5 to-luxury-gold/5">
      <div className="container-custom">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-3 sm:mb-4">
            Grow Your Wealth with DeFi
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access Solana&apos;s high-performance DeFi ecosystem. Earn yield, stake tokens, and participate in liquidity pools - all from your phone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {investmentFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="card group relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest-green/5 to-luxury-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-forest-green">{feature.stats}</div>
                    <div className="text-xs text-gray-500">Annual Yield</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-charcoal">
                    {feature.title}
                  </h3>
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${feature.color} text-white text-xs font-semibold rounded-full`}>
                    {feature.highlight}
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed my-4">
                  {feature.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {feature.features.map((item, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
              Start Investing Today
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              No minimum investment required. Start with as little as ₦1,000 and grow your portfolio with Solana&apos;s fastest DeFi protocols.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-base px-8 py-4">
                Explore Investments
              </button>
              <button className="btn-secondary text-base px-8 py-4">
                View Staking Options
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
