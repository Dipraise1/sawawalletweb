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
              className="group relative bg-white rounded-lg p-5 sm:p-4 shadow-sm border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 min-h-[180px] flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.4, 
                delay: feature.delay
              }}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.2 }
              }}
            >
              <div className="text-center space-y-2.5 flex-1 flex flex-col">
                <motion.div 
                  className={`w-11 h-11 sm:w-10 sm:h-10 mx-auto bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center shadow-sm`}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <feature.Icon className="w-5 h-5 text-white" />
                </motion.div>
                
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-[13px] font-bold text-charcoal">
                    {feature.title}
                  </h3>
                  <div className={`inline-block px-2 py-0.5 bg-gradient-to-r ${feature.color} text-white text-[9px] font-semibold rounded-full`}>
                    {feature.highlight}
                  </div>
                </div>
                
                <p className="text-xs text-gray-600 leading-relaxed flex-1">
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
