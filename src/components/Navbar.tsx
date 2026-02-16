'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
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
      description: 'Why Sawa?'
    },
    {
      href: '#investments',
      label: 'Investments',
      description: 'Grow wealth'
    },
    {
      href: '/contact',
      label: 'Support',
      description: 'Get help'
    }
  ]

  return (
    <>
      {/* Navbar Container */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
        <motion.nav
          className={`pointer-events-auto transition-all duration-500 ease-out ${isScrolled
            ? 'glass'
            : 'bg-transparent border-transparent'
            } rounded-full max-w-5xl w-full`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="px-6 py-3 lg:px-8">
            <div className="flex items-center justify-between">

              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative w-10 h-10 flex items-center justify-center bg-forest-green rounded-full text-white shadow-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/logo.png"
                    alt="Sawa"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-lg font-bold tracking-tight text-charcoal">
                  Sawa
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-forest-green hover:bg-forest-green/5 rounded-full transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="w-px h-6 bg-gray-200 mx-2"></div>
                <Link
                  href="#download"
                  className="btn-primary !py-2.5 !px-6 !text-sm shadow-md hover:shadow-xl"
                >
                  Get the App
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-full bg-white/50 backdrop-blur-md border border-gray-100 shadow-sm active:scale-95 transition-all hover:bg-white"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between items-end">
                  <span className={`h-0.5 bg-charcoal rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
                  <span className={`h-0.5 bg-charcoal rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-4'}`} />
                  <span className={`h-0.5 bg-charcoal rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2.5' : 'w-5'}`} />
                </div>
              </button>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-charcoal/20 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              className="mobile-menu-container fixed top-4 right-4 bottom-4 w-full max-w-xs bg-cream rounded-3xl shadow-2xl z-50 lg:hidden overflow-hidden border border-white/50 flex flex-col glass"
              initial={{ x: '120%', scale: 0.95 }}
              animate={{ x: 0, scale: 1 }}
              exit={{ x: '120%', scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-8">
                  <span className="font-bold text-xl text-charcoal">Menu</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>

                <nav className="space-y-2">
                  {menuItems.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block group"
                    >
                      <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all duration-200 border border-transparent hover:border-gray-100"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-semibold text-charcoal">{item.label}</span>
                          <span className="text-xs text-forest-green font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                            {item.description}
                          </span>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto pt-8 space-y-4">
                  <Link
                    href="#download"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary w-full justify-center shadow-xl"
                  >
                    Get Early Access
                  </Link>
                  <div className="text-center">
                    <p className="text-xs text-gray-400">© 2026 Sawa Wallet</p>
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

