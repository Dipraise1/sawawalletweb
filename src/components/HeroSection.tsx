'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

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
              {/* Professional Badges */}
              <div className="flex flex-wrap gap-2">
                <motion.div
                  className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-forest-green/10 to-luxury-gold/10 rounded-full text-forest-green text-xs font-semibold border border-forest-green/20 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-1.5 h-1.5 bg-forest-green rounded-full mr-2 animate-pulse"></div>
                  <span className="bg-gradient-to-r from-forest-green to-luxury-gold bg-clip-text text-transparent">
                    Early Access - Join Waitlist
                  </span>
                </motion.div>
                
                <motion.a
                  href="/sawa-pitch-deck.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-luxury-gold/10 to-forest-green/10 rounded-full text-luxury-gold text-xs font-semibold border border-luxury-gold/20 backdrop-blur-sm hover:bg-luxury-gold/20 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  <span>View Pitch Deck</span>
                </motion.a>
              </div>

              {/* Enhanced Main Headline */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight tracking-tight">
                  Send crypto with a{' '}
                  <span className="text-forest-green relative inline-block">
                    phone number
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-luxury-gold to-forest-green rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 1.2 }}
                    />
                  </span>
                  , not a wallet address
                </h1>
              </motion.div>
              
              {/* Enhanced Description */}
              <motion.p 
                className="text-sm md:text-base text-gray-600 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Sawa Wallet simplifies crypto transfers by letting you send and receive cryptocurrency using phone numbers instead of complex wallet addresses. Mobile-first, multi-chain support for Solana and EVM chains, built for Africa and emerging markets.
              </motion.p>
              
              {/* Enhanced Value Proposition */}
              <motion.div
                className="flex flex-wrap items-center gap-2 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div 
                  className="flex items-center space-x-1.5 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs font-medium text-blue-700">Mobile-First</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-1.5 bg-purple-50 px-3 py-1 rounded-full border border-purple-200 hover:bg-purple-100 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-xs font-medium text-purple-700">Multi-Chain</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-1.5 bg-green-50 px-3 py-1 rounded-full border border-green-200 hover:bg-green-100 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs font-medium text-green-700">Built for Africa</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-1.5 bg-orange-50 px-3 py-1 rounded-full border border-orange-200 hover:bg-orange-100 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-3 h-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span className="text-xs font-medium text-orange-700">No Wallet Addresses</span>
                </motion.div>
              </motion.div>

              {/* Enhanced CTA Section */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.a 
                    href="#download"
                    className="group relative px-6 py-2.5 bg-gradient-to-r from-forest-green to-forest-green/90 text-white text-sm font-semibold rounded-xl shadow-[0_4px_12px_rgba(45,80,22,0.2)] hover:shadow-[0_8px_24px_rgba(45,80,22,0.25)] transition-all duration-300 overflow-hidden text-center"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center justify-center">
                      Join Waitlist
                      <svg
                        className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
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
                  </motion.a>
                  
                  <motion.a 
                    href="https://discord.gg/TbvR5UcG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-6 py-2.5 bg-white/90 backdrop-blur-sm text-charcoal text-sm font-semibold rounded-xl border border-gray-200/80 hover:border-forest-green/30 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-300 text-center"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center">
                      <svg
                        className="mr-1.5 w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C2.601 6.7 2 9.224 2 11.776c0 2.181.5 4.237 1.486 6.17a.07.07 0 0 0 .031.03a19.9 19.9 0 0 0 5.993 3.15a.074.074 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.15a.07.07 0 0 0 .032-.03c1.011-1.934 1.486-3.99 1.486-6.17c0-2.552-.6-5.075-1.645-7.38a.066.066 0 0 0-.031-.027zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                      Join Discord
                    </span>
                  </motion.a>
                </div>

                {/* Enhanced Trust Indicators */}
                <motion.div 
                  className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <motion.div 
                    className="flex items-center group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-6 h-6 bg-forest-green/10 rounded-full flex items-center justify-center mr-2 group-hover:bg-forest-green/20 transition-colors">
                      <svg className="w-3 h-3 text-forest-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Bank-grade security</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-6 h-6 bg-forest-green/10 rounded-full flex items-center justify-center mr-2 group-hover:bg-forest-green/20 transition-colors">
                      <svg className="w-3 h-3 text-forest-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">No hidden fees</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-6 h-6 bg-forest-green/10 rounded-full flex items-center justify-center mr-2 group-hover:bg-forest-green/20 transition-colors">
                      <svg className="w-3 h-3 text-forest-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Instant transfers</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Enhanced App Preview */}
            <motion.div 
              className="flex justify-center lg:justify-end order-2 lg:order-2 relative px-4 sm:px-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Professional Background Design */}
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
                
                {/* Decorative SVG element */}
                <div className="absolute -top-8 -right-8 w-24 h-24 opacity-20 hidden sm:block">
                  <Image
                    src="/Green & Yellow.svg"
                    alt="Decorative SVG"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Single App Screenshot */}
              <div className="relative w-full max-w-[240px] sm:max-w-64 md:max-w-72 mx-auto">
                <motion.div 
                  className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Image
                    src="/simulator/simulator-dashboard.png"
                    alt="Sawa Wallet Dashboard"
                    width={280}
                    height={400}
                    className="w-full h-auto"
                    priority
                  />
                  
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl sm:rounded-3xl" />
                  
                  {/* Floating elements for depth */}
                  <motion.div
                    className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-luxury-gold rounded-full opacity-60"
                    animate={{ 
                      scale: [1, 1.2, 1], 
                      opacity: [0.6, 0.8, 0.6],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-forest-green rounded-full opacity-40"
                    animate={{ 
                      scale: [1, 1.3, 1], 
                      opacity: [0.4, 0.7, 0.4],
                      rotate: [360, 180, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                </motion.div>
              </div>
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
