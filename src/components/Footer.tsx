'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-charcoal via-gray-900 to-charcoal text-white relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-forest-green/8 via-transparent to-luxury-gold/8"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(45,80,22,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(180,150,50,0.1),transparent_50%)]"></div>
        
        {/* Animated floating elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-forest-green/10 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 bg-luxury-gold/10 rounded-full mix-blend-multiply filter blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1],
            x: [0, 20, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Decorative background images */}
        <div className="absolute top-32 right-32 w-20 h-20 opacity-8 mix-blend-multiply">
          <Image
            src="/Green & Yellow.jpg"
            alt="Decorative background"
            width={80}
            height={80}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute bottom-32 left-32 w-16 h-16 opacity-8 mix-blend-multiply">
          <Image
            src="/Yellow & Green.jpg"
            alt="Decorative background"
            width={64}
            height={64}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative z-10 py-16 sm:py-20">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Stay updated with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-green to-luxury-gold">
                Sawa Wallet
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest updates on new features, security improvements, and community news.
            </p>
            
            {/* Newsletter Form */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-green/50 focus:border-transparent transition-all duration-300"
              />
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-forest-green to-forest-green/90 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-forest-green/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom relative z-10 pb-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <div className="space-y-6 text-center sm:text-left lg:col-span-1">
            <motion.div
              className="flex items-center space-x-3 justify-center sm:justify-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg overflow-hidden bg-gradient-to-br from-forest-green to-luxury-gold p-1">
                <div className="w-full h-full bg-charcoal rounded-lg flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Sawa Wallet Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold">Sawa Wallet</h3>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Global currency, local understanding. Send money the way you already do.
            </motion.p>
            
            {/* Social Links */}
            <motion.div
              className="flex items-center space-x-4 justify-center sm:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-forest-green/20 hover:scale-110 transition-all duration-300 group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-forest-green">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-forest-green/20 hover:scale-110 transition-all duration-300 group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-forest-green">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-forest-green/20 hover:scale-110 transition-all duration-300 group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-forest-green">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 c0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Product */}
          <motion.div 
            className="space-y-6 text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg text-white mb-6">Product</h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="#" className="hover:text-forest-green transition-colors duration-300 block py-2 hover:translate-x-2 transform group">
                  <span className="flex items-center">
                    <span className="w-1 h-1 bg-forest-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Features
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forest-green transition-colors duration-300 block py-2 hover:translate-x-2 transform group">
                  <span className="flex items-center">
                    <span className="w-1 h-1 bg-forest-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Security
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forest-green transition-colors duration-300 block py-2 hover:translate-x-2 transform group">
                  <span className="flex items-center">
                    <span className="w-1 h-1 bg-forest-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Download
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forest-green transition-colors duration-300 block py-2 hover:translate-x-2 transform group">
                  <span className="flex items-center">
                    <span className="w-1 h-1 bg-forest-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Pricing
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div 
            className="space-y-6 text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg text-white mb-6">Support</h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="#" className="hover:text-forest-green transition-colors duration-300 block py-2 hover:translate-x-2 transform group">
                  <span className="flex items-center">
                    <span className="w-1 h-1 bg-forest-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Help Center
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forest-green transition-colors duration-300 block py-2 hover:translate-x-2 transform group">
                  <span className="flex items-center">
                    <span className="w-1 h-1 bg-forest-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Contact Us
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forest-green transition-colors duration-300 block py-2 hover:translate-x-2 transform group">
                  <span className="flex items-center">
                    <span className="w-1 h-1 bg-forest-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Status
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forest-green transition-colors duration-300 block py-2 hover:translate-x-2 transform group">
                  <span className="flex items-center">
                    <span className="w-1 h-1 bg-forest-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Community
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div 
            className="space-y-6 text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="#" className="hover:text-forest-green transition-colors duration-300 block py-2 hover:translate-x-2 transform group">
                  <span className="flex items-center">
                    <span className="w-1 h-1 bg-forest-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Privacy Policy
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forest-green transition-colors duration-300 block py-2 hover:translate-x-2 transform group">
                  <span className="flex items-center">
                    <span className="w-1 h-1 bg-forest-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Terms of Service
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forest-green transition-colors duration-300 block py-2 hover:translate-x-2 transform group">
                  <span className="flex items-center">
                    <span className="w-1 h-1 bg-forest-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Licenses
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forest-green transition-colors duration-300 block py-2 hover:translate-x-2 transform group">
                  <span className="flex items-center">
                    <span className="w-1 h-1 bg-forest-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Compliance
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-700/50 mt-12 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-400 mb-2">
                &copy; 2024 Sawa Wallet. All rights reserved.
              </p>
              <div className="flex items-center justify-center sm:justify-start space-x-4 text-xs text-gray-500">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-forest-green rounded-full mr-2"></span>
                  Made with ❤️ in Nigeria
                </span>
                <span>•</span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>
                  Powered by USDC
                </span>
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <svg className="w-4 h-4 text-forest-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Bank-grade Security</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <svg className="w-4 h-4 text-luxury-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Regulated & Compliant</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}