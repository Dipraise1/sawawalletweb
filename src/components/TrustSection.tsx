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
    title: "WhatsApp simplicity", 
    description: "Send money as easily as sending a message",
    highlight: "Simple",
    color: "from-green-500 to-green-600",
    features: ["Phone Number", "No Passwords", "Instant", "Easy UI"]
  },
  {
    Icon: GlobeIcon,
    title: "Global reach",
    description: "Works anywhere, quoted in your local currency",
    highlight: "Global",
    color: "from-blue-500 to-blue-600",
    features: ["200+ Countries", "Local Currency", "Real-time Rates", "No Borders"]
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
          
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-charcoal mb-2 leading-tight">
            Trusted by{' '}
            <span className="text-forest-green relative">
              many
              <motion.div
                className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-luxury-gold rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </h2>
          
          <p className="text-xs text-gray-500 max-w-3xl mx-auto leading-relaxed mb-4">
            Bank-grade security meets WhatsApp simplicity
          </p>
          
          {/* Trust indicators */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center">
              <svg className="w-3 h-3 text-forest-green mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Secure & Reliable
            </div>
            <div className="flex items-center">
              <svg className="w-3 h-3 text-forest-green mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Easy to Use
            </div>
            <div className="flex items-center">
              <svg className="w-3 h-3 text-forest-green mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Global Reach
            </div>
          </motion.div>
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
                <h3 className="text-sm font-semibold text-charcoal tracking-tight">
                  {item.title}
                </h3>
                <div className={`inline-block px-2.5 py-1 bg-gradient-to-r ${item.color} text-white text-[9px] font-semibold rounded-full shadow-sm`}>
                  {item.highlight}
                </div>
              </div>
              
              <p className="relative z-10 text-xs text-gray-600 leading-relaxed flex-1 px-1">
                {item.description}
              </p>
              
              <div className="relative z-10 flex flex-wrap gap-1.5 sm:gap-2 justify-center pt-2">
                {item.features.map((feature, featureIndex) => (
                  <span key={featureIndex} className="text-[9px] bg-gray-50/80 backdrop-blur-sm text-gray-600 px-2.5 py-1 rounded-full whitespace-nowrap border border-gray-100/60">
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Waitlist Form Section */}
        <motion.div
          className="mt-8 sm:mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-gradient-to-br from-forest-green/5 via-white to-luxury-gold/5 rounded-2xl p-8 sm:p-10 border border-forest-green/10 shadow-[0_4px_16px_rgba(45,80,22,0.08)] backdrop-blur-sm">
            <h3 className="text-base sm:text-lg font-bold text-charcoal mb-2 text-center">
              Join the Waitlist
            </h3>
            <p className="text-xs text-gray-500 mb-5 sm:mb-4 text-center max-w-xl mx-auto px-2 sm:px-0">
              Be among the first to experience Sawa Wallet. Get early access when we launch.
            </p>
            
            <form 
              className="space-y-3" 
              action="https://docs.google.com/forms/d/e/1FAIpQLSc1BfnIRt32kfpWJNW4vInlwM8fvctLqIvJ3tw2PUt2Gp2v4A/formResponse" 
              method="POST"
              target="_blank"
              onSubmit={(e) => {
                // Track form submission
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'waitlist_signup', {
                    event_category: 'engagement',
                    event_label: 'Join Waitlist'
                  });
                }
              }}
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  name="entry.1801242306"
                  placeholder="Your name"
                  className="flex-1 px-4 py-3 sm:py-2.5 bg-white/90 backdrop-blur-sm border border-gray-200/80 rounded-xl text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-green/30 focus:border-forest-green/30 focus:bg-white transition-all duration-300 touch-manipulation shadow-sm"
                  required
                />
                <input
                  type="email"
                  name="entry.728298668"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 sm:py-2.5 bg-white/90 backdrop-blur-sm border border-gray-200/80 rounded-xl text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-green/30 focus:border-forest-green/30 focus:bg-white transition-all duration-300 touch-manipulation shadow-sm"
                  required
                />
              </div>
              <textarea
                name="entry.336844290"
                placeholder="What do you think about Sawa? (Optional)"
                rows={2}
                className="w-full px-4 py-3 sm:py-2.5 bg-white/90 backdrop-blur-sm border border-gray-200/80 rounded-xl text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-green/30 focus:border-forest-green/30 focus:bg-white transition-all duration-300 touch-manipulation resize-none shadow-sm"
              />
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-forest-green to-forest-green/90 text-white px-6 py-3 sm:py-2.5 rounded-xl font-semibold hover:shadow-[0_8px_24px_rgba(45,80,22,0.25)] transition-all duration-300 text-sm touch-manipulation shadow-[0_4px_12px_rgba(45,80,22,0.2)]"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Join Waitlist
              </motion.button>
              <p className="text-[10px] text-gray-500 text-center">
                💡 We&apos;ll notify you when we launch • <a href="https://forms.gle/moguzURumvxWo3VAA" target="_blank" rel="noopener noreferrer" className="text-forest-green hover:underline">View form</a>
              </p>
            </form>
            
            <div className="mt-5 sm:mt-4 flex items-center justify-center gap-3">
              <a
                href="https://discord.gg/TbvR5UcG"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-600 hover:text-forest-green transition-colors text-xs touch-manipulation py-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C2.601 6.7 2 9.224 2 11.776c0 2.181.5 4.237 1.486 6.17a.07.07 0 0 0 .031.03a19.9 19.9 0 0 0 5.993 3.15a.074.074 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.15a.07.07 0 0 0 .032-.03c1.011-1.934 1.486-3.99 1.486-6.17c0-2.552-.6-5.075-1.645-7.38a.066.066 0 0 0-.031-.027zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <span className="hidden sm:inline">Join our Discord community</span>
                <span className="sm:hidden">Discord community</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
