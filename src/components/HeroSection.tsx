'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import ImageSlider from './ImageSlider'

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-subtle-gray to-white flex items-center section-padding pt-20 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-green/5 via-transparent to-luxury-gold/5"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-forest-green/10 to-forest-green/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-br from-luxury-gold/10 to-luxury-gold/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-1/2 w-64 h-64 bg-gradient-to-br from-forest-green/8 to-transparent rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-luxury-gold/5 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-forest-green/8 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,rgb(45,80,22)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            className="space-y-8 order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-forest-green/10 rounded-full text-forest-green text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-forest-green rounded-full mr-2 animate-pulse"></div>
              Now Available in Nigeria
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Send{' '}
              <span className="text-forest-green relative">
                ₦200
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-luxury-gold rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span>{' '}
              worth of USDC
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl text-gray-600 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              to David
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-500 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Global currency, local understanding. No crypto jargon, just your phone number.
            </motion.p>

            {/* CTA Section */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary text-lg px-8 py-4 group">
                  <span className="flex items-center justify-center">
                    Get Started with Your Number
                    <svg
                      className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </button>
                
                <button className="btn-secondary text-lg px-8 py-4">
                  Watch Demo
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm text-gray-500">
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
                  No hidden fees
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Slider */}
          <motion.div 
            className="flex justify-center lg:justify-end order-2 lg:order-2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Background Design for Image Slider */}
            <div className="absolute inset-0 -z-10">
              {/* Main background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest-green/8 via-luxury-gold/4 to-forest-green/8 rounded-3xl blur-3xl scale-110"></div>
              
              {/* Floating geometric shapes */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-luxury-gold/15 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-forest-green/15 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-12 w-16 h-16 bg-luxury-gold/10 rounded-full mix-blend-multiply filter blur-lg animate-pulse delay-500"></div>
              <div className="absolute -top-12 right-1/3 w-12 h-12 bg-forest-green/10 rounded-full mix-blend-multiply filter blur-md animate-pulse delay-700"></div>
              
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_3px_3px,rgb(45,80,22)_1px,transparent_0)] bg-[length:12px_12px] rounded-3xl"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-forest-green/6 via-transparent to-luxury-gold/6 rounded-3xl"></div>
            </div>
            
            <ImageSlider />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
