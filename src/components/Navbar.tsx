'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const menuItems = [
    { 
      href: '#features', 
      label: 'Features', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-forest-green">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'What makes us special'
    },
    { 
      href: '#investments', 
      label: 'Investments', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-forest-green">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Grow your money'
    },
    { 
      href: '/contact', 
      label: 'Contact', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-forest-green">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Get in touch'
    }
  ]

  return (
    <>
      {/* Pill-Shaped Navbar Container */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
        <motion.nav
          className={`pointer-events-auto transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-xl shadow-lg border border-gray-200/50' 
              : 'bg-white/90 backdrop-blur-md shadow-md border border-gray-100/50'
          } rounded-full max-w-7xl w-full`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="px-6 lg:px-8">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-between py-2.5">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <motion.div
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-forest-green to-forest-green/80 flex items-center justify-center shadow-sm overflow-hidden">
                    <Image
                      src="/logo.png"
                      alt="Sawa Wallet Logo"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                      priority
                    />
                  </div>
                  <span className="text-sm font-semibold text-charcoal">Sawa Wallet</span>
                </motion.div>
              </Link>

              {/* Desktop Navigation Links */}
              <div className="flex items-center space-x-1.5">
                {menuItems.map((item, index) => {
                  const isInternalLink = item.href.startsWith('/')
                  const Component = isInternalLink ? Link : 'a'
                  
                  return (
                    <Component
                      key={item.href}
                      href={item.href}
                    >
                      <motion.div
                        className="px-4 py-1.5 text-xs text-gray-700 hover:text-forest-green hover:bg-forest-green/5 rounded-full transition-all duration-200 font-medium cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {item.label}
                      </motion.div>
                    </Component>
                  )
                })}
                
                <motion.a
                  href="#download"
                  className="ml-1.5 px-5 py-1.5 bg-gradient-to-r from-forest-green to-forest-green/90 text-white text-xs font-semibold rounded-full hover:shadow-md hover:scale-105 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  Join Waitlist
                </motion.a>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden flex items-center justify-between py-2.5">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-1.5">
                <motion.div
                  className="flex items-center space-x-1.5"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-forest-green to-forest-green/80 flex items-center justify-center shadow-sm overflow-hidden">
                    <Image
                      src="/logo.png"
                      alt="Sawa Wallet Logo"
                      width={28}
                      height={28}
                      className="w-full h-full object-contain"
                      priority
                    />
                  </div>
                  <span className="text-xs font-semibold text-charcoal">Sawa Wallet</span>
                </motion.div>
              </Link>

              {/* Mobile Actions */}
              <div className="flex items-center space-x-1.5">
                {/* Mobile CTA Button */}
                <motion.a
                  href="#download"
                  className="hidden sm:block bg-gradient-to-r from-forest-green to-forest-green/90 text-white text-[10px] px-3 py-1 rounded-full shadow-sm hover:shadow-md transition-all duration-300 font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join Waitlist
                </motion.a>

                {/* Mobile Menu Button */}
                <motion.button 
                  className="p-1.5 rounded-full hover:bg-gray-100 transition-all duration-200"
                  onClick={toggleMobileMenu}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-4 h-4 flex flex-col justify-center items-center">
                    <motion.span
                      className="block h-0.5 w-4 bg-charcoal rounded-full transition-all duration-300"
                      animate={{
                        rotate: isMobileMenuOpen ? 45 : 0,
                        y: isMobileMenuOpen ? 4 : 0
                      }}
                    />
                    <motion.span
                      className="block h-0.5 w-4 bg-charcoal rounded-full transition-all duration-300 mt-0.5"
                      animate={{
                        opacity: isMobileMenuOpen ? 0 : 1
                      }}
                    />
                    <motion.span
                      className="block h-0.5 w-4 bg-charcoal rounded-full transition-all duration-300 mt-0.5"
                      animate={{
                        rotate: isMobileMenuOpen ? -45 : 0,
                        y: isMobileMenuOpen ? -4 : 0
                      }}
                    />
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Enhanced Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Modern Mobile Menu Panel */}
            <motion.div
              className="mobile-menu-container fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="flex flex-col h-full">
                {/* Modern Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-forest-green to-forest-green/80 flex items-center justify-center shadow-sm overflow-hidden">
                      <Image
                        src="/logo.png"
                        alt="Sawa Wallet Logo"
                        width={28}
                        height={28}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-charcoal block">Sawa Wallet</span>
                      <span className="text-[10px] text-gray-500">Simple money transfers</span>
                    </div>
                  </Link>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                {/* Modern Navigation Items */}
                <div className="flex-1 px-4 py-5 overflow-y-auto">
                  <nav className="space-y-1.5">
                    {menuItems.map((item, index) => {
                      const isInternalLink = item.href.startsWith('/')
                      const Component = isInternalLink ? Link : 'a'
                      
                      return (
                        <Component
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <motion.div
                            className="flex items-center space-x-2.5 p-3 rounded-lg hover:bg-forest-green/5 transition-all duration-200 group cursor-pointer"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.08 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="w-9 h-9 bg-forest-green/10 rounded-lg flex items-center justify-center group-hover:bg-forest-green/20 transition-all duration-200">
                              <div className="scale-90">
                                {item.icon}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="text-xs font-semibold text-charcoal group-hover:text-forest-green transition-colors">
                                {item.label}
                              </div>
                              <div className="text-[10px] text-gray-500 mt-0.5">
                                {item.description}
                              </div>
                            </div>
                            <svg
                              className="w-3.5 h-3.5 text-gray-400 group-hover:text-forest-green transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </motion.div>
                        </Component>
                      )
                    })}
                  </nav>
                </div>

                {/* Modern Footer Actions */}
                <div className="p-4 bg-gray-50 border-t border-gray-100 space-y-2.5">
                  <motion.a
                    href="#download"
                    className="w-full bg-gradient-to-r from-forest-green to-forest-green/90 text-white text-xs py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 font-semibold text-center block"
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileTap={{ scale: 0.98 }}
                  >
                    Join Waitlist
                  </motion.a>
                  
                  <motion.a
                    href="https://discord.gg/TbvR5UcG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#5865F2] text-white text-xs py-2.5 rounded-lg hover:bg-[#4752C4] transition-all duration-200 font-semibold text-center block"
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileTap={{ scale: 0.98 }}
                  >
                    Join Discord
                  </motion.a>
                  
                  {/* Legal Links */}
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-[10px] text-gray-500 mb-2 font-semibold">Legal & Support</p>
                    <div className="flex flex-wrap gap-2 text-[10px]">
                      <a 
                        href="/privacy-policy" 
                        className="text-gray-600 hover:text-forest-green transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Privacy
                      </a>
                      <span className="text-gray-400">•</span>
                      <a 
                        href="/terms-of-service" 
                        className="text-gray-600 hover:text-forest-green transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Terms
                      </a>
                      <span className="text-gray-400">•</span>
                      <a 
                        href="/contact" 
                        className="text-gray-600 hover:text-forest-green transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Support
                      </a>
                    </div>
                  </div>
                  
                  <div className="text-center pt-2">
                    <p className="text-[10px] text-gray-500">
                      Join our growing community
                    </p>
                    <div className="flex items-center justify-center space-x-0.5 mt-1.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-luxury-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-[10px] text-gray-500 ml-1">4.9/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
