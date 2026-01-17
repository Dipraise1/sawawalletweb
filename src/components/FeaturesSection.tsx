'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from '@/lib/hooks'
import PhoneIcon from './icons/PhoneIcon'
import MessageIcon from './icons/MessageIcon'
import CommunityIcon from './icons/CommunityIcon'

const features = [
  {
    title: "Phone Numbers, Not Addresses",
    description: "Send and receive crypto using phone numbers instead of complex wallet addresses. Just like sending a text message.",
    Icon: PhoneIcon,
    delay: 0.1,
    highlight: "Phone-first",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Multi-Chain Support", 
    description: "Works across multiple blockchains. Support for Solana and EVM chains (Ethereum, Polygon, BSC, and more).",
    Icon: MessageIcon,
    delay: 0.2,
    highlight: "Multi-chain",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Built for Emerging Markets",
    description: "Designed for Africa and emerging markets. Local currency quotes, mobile-first experience, zero complexity.",
    Icon: CommunityIcon,
    delay: 0.3,
    highlight: "Africa-first",
    color: "from-green-500 to-green-600"
  }
]

export default function FeaturesSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="features" ref={ref} className="py-12 sm:py-16 bg-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(circle_at_2px_2px,rgb(45,80,22)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-6 sm:mb-8 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg sm:text-xl font-bold text-charcoal mb-2 leading-tight">
            Crypto transfers{' '}
            <span className="text-forest-green">made simple</span>
          </h2>
          
          <p className="text-xs text-gray-500 max-w-2xl mx-auto">
            Send crypto with phone numbers. Mobile-first. Multi-chain. Built for emerging markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto px-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative bg-white rounded-2xl p-6 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100/80 hover:border-gray-200/60 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[200px] flex flex-col backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.5, 
                delay: feature.delay,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ 
                y: -6,
                scale: 1.01,
                transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
              }}
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest-green/2 via-transparent to-luxury-gold/2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 text-center space-y-3 flex-1 flex flex-col">
                <motion.div 
                  className={`w-12 h-12 sm:w-11 sm:h-11 mx-auto bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.15)]`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                  }}
                >
                  <feature.Icon className="w-6 h-6 sm:w-5 sm:h-5 text-white" />
                </motion.div>
                
                <div className="space-y-1.5">
                  <h3 className="text-sm sm:text-[13px] font-bold text-charcoal tracking-tight">
                    {feature.title}
                  </h3>
                  <div className={`inline-block px-2.5 py-1 bg-gradient-to-r ${feature.color} text-white text-[9px] font-semibold rounded-full shadow-sm`}>
                    {feature.highlight}
                  </div>
                </div>
                
                <p className="text-xs text-gray-600 leading-relaxed flex-1 px-1">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
