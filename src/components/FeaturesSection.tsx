'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from '@/lib/hooks'
import PhoneIcon from './icons/PhoneIcon'
import MessageIcon from './icons/MessageIcon'
import CommunityIcon from './icons/CommunityIcon'

const features = [
  {
    title: "Phone-First",
    description: "Login with just your number - no passwords, no complexity",
    Icon: PhoneIcon,
    delay: 0.1,
    highlight: "No App Store needed",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Speak Local", 
    description: "₦500 USDC to Sarah - that simple. No crypto jargon",
    Icon: MessageIcon,
    delay: 0.2,
    highlight: "Like WhatsApp for money",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Community Built",
    description: "Made for how Nigerians really send money - by the community",
    Icon: CommunityIcon,
    delay: 0.3,
    highlight: "Built in Nigeria",
    color: "from-purple-500 to-purple-600"
  }
]

export default function FeaturesSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="features" ref={ref} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-subtle-gray via-white to-subtle-gray relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-forest-green/3 via-transparent to-luxury-gold/3"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-forest-green/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-luxury-gold/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-forest-green/4 to-luxury-gold/4 rounded-full mix-blend-multiply filter blur-2xl"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-forest-green/3 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-luxury-gold/3 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_2px_2px,rgb(45,80,22)_1px,transparent_0)] bg-[length:16px_16px]"></div>
        
        {/* Decorative background images */}
        <div className="absolute top-20 left-10 w-20 h-20 opacity-5 mix-blend-multiply">
          <Image
            src="/Green & Yellow.jpg"
            alt="Decorative background"
            width={80}
            height={80}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute bottom-20 right-10 w-16 h-16 opacity-5 mix-blend-multiply">
          <Image
            src="/Yellow & Green.jpg"
            alt="Decorative background"
            width={64}
            height={64}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative element */}
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-forest-green/10 to-luxury-gold/10 rounded-2xl mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-forest-green">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-6 leading-tight">
            Built for how you actually{' '}
            <span className="text-forest-green relative">
              use money
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-luxury-gold rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            No learning curve. No crypto complexity. Just the way you already send money.
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
              Bank-grade security
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-forest-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Instant transfers
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-forest-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No hidden fees
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.6, 
                delay: feature.delay,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -12,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest-green/5 via-transparent to-luxury-gold/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-forest-green/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-luxury-gold/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative text-center space-y-4">
                <motion.div 
                  className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  whileHover={{ 
                    scale: 1.15,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <feature.Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </motion.div>
                </motion.div>
                
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal">
                    {feature.title}
                  </h3>
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${feature.color} text-white text-xs font-semibold rounded-full`}>
                    {feature.highlight}
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Enhanced decorative line */}
                <div className={`w-12 h-0.5 bg-gradient-to-r ${feature.color} mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
