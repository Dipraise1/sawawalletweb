'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import ImageSlider from './ImageSlider'

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-white via-subtle-gray to-white flex items-center section-padding pt-20 relative overflow-hidden">
        {/* Enhanced Professional Background */}
        <div className="absolute inset-0">
          {/* Main gradient overlay with more sophisticated colors */}
          <div className="absolute inset-0 bg-gradient-to-br from-forest-green/8 via-luxury-gold/3 to-forest-green/8"></div>
          
          {/* Professional animated geometric shapes */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-forest-green/12 to-forest-green/6 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-br from-luxury-gold/12 to-luxury-gold/6 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-gradient-to-br from-forest-green/10 to-transparent rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-500"></div>
          
          {/* Additional floating elements with better positioning */}
          <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-luxury-gold/8 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-forest-green/10 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-300"></div>
          
          {/* Professional grid pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_2px_2px,rgb(45,80,22)_1px,transparent_0)] bg-[length:24px_24px]"></div>
          
          {/* Subtle animated lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-forest-green/20 to-transparent"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Enhanced Text Content */}
            <motion.div 
              className="space-y-10 order-1 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Professional Badge */}
              <motion.div
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-forest-green/10 to-luxury-gold/10 rounded-full text-forest-green text-sm font-semibold border border-forest-green/20 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-forest-green rounded-full mr-3 animate-pulse"></div>
                <span className="bg-gradient-to-r from-forest-green to-luxury-gold bg-clip-text text-transparent">
                  Now Available in Nigeria
                </span>
              </motion.div>

              {/* Enhanced Main Headline */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-charcoal leading-[0.9] tracking-tight">
                  Send{' '}
                  <span className="text-forest-green relative inline-block">
                    ₦200
                    <motion.div
                      className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-luxury-gold to-forest-green rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 1.2 }}
                    />
                  </span>
                </h1>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-600 font-medium leading-tight">
                  worth of USDC
                </h2>
                
                <h3 className="text-2xl md:text-3xl text-gray-500 font-light">
                  to David
                </h3>
              </motion.div>
              
              {/* Enhanced Description */}
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Global currency, local understanding. No crypto jargon, just your phone number.
              </motion.p>

              {/* Enhanced CTA Section */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <motion.button 
                    className="group relative px-10 py-5 bg-gradient-to-r from-forest-green to-forest-green/90 text-white text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center justify-center">
                      Get Started with Your Number
                      <svg
                        className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
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
                  </motion.button>
                  
                  <motion.button 
                    className="group px-10 py-5 bg-white/80 backdrop-blur-sm text-charcoal text-lg font-semibold rounded-2xl border-2 border-gray-200 hover:border-forest-green/50 shadow-xl hover:shadow-2xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsVideoOpen(true)}
                  >
                    <span className="flex items-center justify-center">
                      <svg
                        className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      Watch Demo
                    </span>
                  </motion.button>
                </div>

                {/* Enhanced Trust Indicators */}
                <motion.div 
                  className="flex flex-wrap items-center gap-8 text-sm text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <div className="flex items-center group">
                    <div className="w-8 h-8 bg-forest-green/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-forest-green/20 transition-colors">
                      <svg className="w-4 h-4 text-forest-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Bank-grade security</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-8 h-8 bg-forest-green/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-forest-green/20 transition-colors">
                      <svg className="w-4 h-4 text-forest-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">No hidden fees</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-8 h-8 bg-forest-green/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-forest-green/20 transition-colors">
                      <svg className="w-4 h-4 text-forest-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Instant transfers</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Enhanced Image Slider */}
            <motion.div 
              className="flex justify-center lg:justify-end order-2 lg:order-2 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Professional Background Design for Image Slider */}
              <div className="absolute inset-0 -z-10">
                {/* Main background gradient with enhanced effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-forest-green/12 via-luxury-gold/6 to-forest-green/12 rounded-3xl blur-3xl scale-110"></div>
                
                {/* Enhanced floating geometric shapes */}
                <div className="absolute -top-12 -left-12 w-40 h-40 bg-luxury-gold/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-forest-green/20 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -right-16 w-20 h-20 bg-luxury-gold/15 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-500"></div>
                <div className="absolute -top-16 right-1/3 w-16 h-16 bg-forest-green/15 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
                
                {/* Enhanced pattern overlay */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_4px_4px,rgb(45,80,22)_1px,transparent_0)] bg-[length:16px_16px] rounded-3xl"></div>
                
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-forest-green/8 via-transparent to-luxury-gold/8 rounded-3xl"></div>
                
                {/* Professional border effect */}
                <div className="absolute inset-0 rounded-3xl border border-forest-green/10"></div>
              </div>
              
              <ImageSlider />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Demo Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video Header */}
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-forest-green to-luxury-gold">
                <h3 className="text-xl font-bold text-white">Sawa Wallet Demo</h3>
                <button
                  onClick={() => setIsVideoOpen(false)}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Video Container */}
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-forest-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-forest-green" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-white text-lg">Demo video coming soon</p>
                  <p className="text-gray-400 text-sm mt-2">Experience Sawa Wallet in action</p>
                </div>
              </div>
              
              {/* Video Footer */}
              <div className="p-6 bg-gray-50">
                <p className="text-gray-600 text-center">
                  See how easy it is to send money with Sawa Wallet
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
