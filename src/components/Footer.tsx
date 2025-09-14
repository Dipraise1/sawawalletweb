'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-charcoal via-gray-900 to-charcoal text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-forest-green/5 via-transparent to-luxury-gold/5"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-forest-green/3 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-luxury-gold/3 rounded-full mix-blend-multiply filter blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-forest-green/2 to-luxury-gold/2 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <div className="space-y-4 sm:space-y-6 text-center sm:text-left lg:col-span-1">
            <motion.div
              className="flex items-center space-x-3 justify-center sm:justify-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 bg-forest-green rounded-xl flex items-center justify-center shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">Sawa Wallet</h3>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 text-sm sm:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Global currency, local understanding
            </motion.p>
            
            {/* Social Links */}
            <motion.div
              className="flex items-center space-x-4 justify-center sm:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-forest-green/20 transition-colors duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-forest-green/20 transition-colors duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-forest-green/20 transition-colors duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Product & Support - Mobile: 2 columns, Desktop: separate */}
          <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-1 gap-8 sm:gap-0 lg:col-span-2">
            {/* Product */}
            <motion.div 
              className="space-y-4 sm:space-y-6 text-center sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-base sm:text-lg text-white mb-4">Product</h4>
              <ul className="space-y-3 text-sm sm:text-base text-gray-300">
                <li><a href="#" className="hover:text-forest-green transition-colors duration-200 block py-2 hover:translate-x-1 transform">Features</a></li>
                <li><a href="#" className="hover:text-forest-green transition-colors duration-200 block py-2 hover:translate-x-1 transform">Security</a></li>
                <li><a href="#" className="hover:text-forest-green transition-colors duration-200 block py-2 hover:translate-x-1 transform">Download</a></li>
                <li><a href="#" className="hover:text-forest-green transition-colors duration-200 block py-2 hover:translate-x-1 transform">Pricing</a></li>
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div 
              className="space-y-4 sm:space-y-6 text-center sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-base sm:text-lg text-white mb-4">Support</h4>
              <ul className="space-y-3 text-sm sm:text-base text-gray-300">
                <li><a href="#" className="hover:text-forest-green transition-colors duration-200 block py-2 hover:translate-x-1 transform">Help Center</a></li>
                <li><a href="#" className="hover:text-forest-green transition-colors duration-200 block py-2 hover:translate-x-1 transform">Contact Us</a></li>
                <li><a href="#" className="hover:text-forest-green transition-colors duration-200 block py-2 hover:translate-x-1 transform">Status</a></li>
                <li><a href="#" className="hover:text-forest-green transition-colors duration-200 block py-2 hover:translate-x-1 transform">Community</a></li>
              </ul>
            </motion.div>
          </div>

          {/* Legal */}
          <motion.div 
            className="space-y-4 sm:space-y-6 text-center sm:text-left lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-base sm:text-lg text-white mb-4">Legal</h4>
            <ul className="space-y-3 text-sm sm:text-base text-gray-300">
              <li><a href="#" className="hover:text-forest-green transition-colors duration-200 block py-2 hover:translate-x-1 transform">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-forest-green transition-colors duration-200 block py-2 hover:translate-x-1 transform">Terms of Service</a></li>
              <li><a href="#" className="hover:text-forest-green transition-colors duration-200 block py-2 hover:translate-x-1 transform">Licenses</a></li>
              <li><a href="#" className="hover:text-forest-green transition-colors duration-200 block py-2 hover:translate-x-1 transform">Compliance</a></li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-700/50 mt-8 sm:mt-12 pt-8 sm:pt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              &copy; 2024 Sawa Wallet. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-xs text-gray-500">
              <span>Made with ❤️ in Nigeria</span>
              <span>•</span>
              <span>Powered by USDC</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
