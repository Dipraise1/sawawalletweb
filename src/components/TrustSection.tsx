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
    description: "Your money is protected with enterprise-level encryption"
  },
  {
    Icon: LightningIcon,
    title: "WhatsApp simplicity", 
    description: "Send money as easily as sending a message"
  },
  {
    Icon: GlobeIcon,
    title: "Global reach",
    description: "USDC works anywhere, quoted in your local currency"
  }
]

export default function TrustSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="download" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative element */}
          <motion.div
            className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-forest-green/10 to-luxury-gold/10 rounded-xl mb-4"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-forest-green">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-6 leading-tight">
            Trusted by{' '}
            <span className="text-forest-green relative">
              many
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-luxury-gold rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Bank-grade security meets WhatsApp simplicity
          </p>
          
          {/* Trust indicators */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center">
              <svg className="w-4 h-4 text-forest-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Secure & Reliable
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-forest-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Easy to Use
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-forest-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Global Reach
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-forest-green/10 rounded-xl flex items-center justify-center">
                <item.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-forest-green" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-charcoal">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* App Store Badges */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* App Store Button */}
          <motion.a
            href="#"
            className="group flex items-center bg-black text-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-300">Download on the</div>
                <div className="text-sm sm:text-base font-semibold">App Store</div>
              </div>
            </div>
          </motion.a>

          {/* Google Play Button */}
          <motion.a
            href="#"
            className="group flex items-center bg-black text-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-300">GET IT ON</div>
                <div className="text-sm sm:text-base font-semibold">Google Play</div>
              </div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
