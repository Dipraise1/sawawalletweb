'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const images = [
  {
    src: '/simulator/simulator-dashboard.png',
    alt: 'Sawa Wallet Dashboard',
    title: 'Dashboard'
  },
  {
    src: '/simulator/simulator-main.png',
    alt: 'Sawa Wallet Main Interface',
    title: 'Main Interface'
  },
  {
    src: '/simulator/simulator-transfer.png',
    alt: 'Sawa Wallet Transfer Screen',
    title: 'Transfer Money'
  },
  {
    src: '/simulator/simulator-settings.png',
    alt: 'Sawa Wallet Settings',
    title: 'Settings'
  }
]

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  // Calculate tilt based on mouse position
  const tiltX = (mousePosition.y - 200) / 200 * 15 // Max 15 degrees
  const tiltY = (mousePosition.x - 140) / 140 * 15 // Max 15 degrees

  return (
    <div className="relative w-full max-w-64 sm:max-w-72 mx-auto">
      {/* Main Image Container with Tilt Effect */}
      <motion.div 
        className="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
          transformStyle: 'preserve-3d'
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeInOut",
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
            className="relative"
          >
             <Image
               src={images[currentIndex].src}
               alt={images[currentIndex].alt}
               width={280}
               height={400}
               className="w-full h-auto"
               priority={currentIndex === 0}
             />
            
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl" />
          </motion.div>
        </AnimatePresence>

        {/* Floating elements for depth */}
        <motion.div
          className="absolute -top-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 bg-luxury-gold rounded-full opacity-60"
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
          className="absolute -bottom-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-forest-green rounded-full opacity-40"
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

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-4 sm:mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-forest-green w-6' 
                : 'bg-gray-300 hover:bg-gray-400 w-2'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on larger screens */}
      <button
        onClick={prevImage}
        className="hidden sm:flex absolute left-1 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center shadow-lg hover:bg-white transition-all duration-300 group"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          className="text-charcoal group-hover:text-forest-green transition-colors"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        onClick={nextImage}
        className="hidden sm:flex absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center shadow-lg hover:bg-white transition-all duration-300 group"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          className="text-charcoal group-hover:text-forest-green transition-colors"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Mobile swipe indicator */}
      <div className="sm:hidden flex justify-center mt-2">
        <p className="text-xs text-gray-500">Tap dots to navigate</p>
      </div>
    </div>
  )
}
