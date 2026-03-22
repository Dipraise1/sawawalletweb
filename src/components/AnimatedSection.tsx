'use client'

import { motion } from 'framer-motion'

// Thin client wrapper for Framer Motion fade-in animations.
// This keeps page.tsx as a React Server Component (better SEO)
// while still allowing smooth animations for client-side rendering.
export const FadeIn = ({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
)

export const FloatingCard = ({
  children,
  animateY,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  animateY: [number, number, number]
  delay?: number
  className?: string
}) => (
  <motion.div
    animate={{ y: animateY }}
    transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    className={className}
  >
    {children}
  </motion.div>
)

export const TestimonialCard = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) => (
  <motion.div
    className={className}
    whileHover={{ y: -4 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
)
