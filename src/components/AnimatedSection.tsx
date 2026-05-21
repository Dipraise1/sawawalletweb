'use client'

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  useMotionValue,
  animate,
} from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

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

export const FadeInLeft = ({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
)

export const FadeInRight = ({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
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

// Scroll-linked parallax — children move at `speed` fraction of scroll rate
export const ParallaxLayer = ({
  children,
  speed = 0.5,
  className = '',
}: {
  children: React.ReactNode
  speed?: number
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const yRange = (1 - speed) * 120
  const y = useTransform(scrollYProgress, [0, 1], [`${-yRange / 2}px`, `${yRange / 2}px`])
  const springY = useSpring(y, { stiffness: 60, damping: 20 })
  return (
    <motion.div ref={ref} style={{ y: springY }} className={className}>
      {children}
    </motion.div>
  )
}

// Gently scales up image as it enters the viewport — adds depth
export const ParallaxScale = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.04])
  const springScale = useSpring(scale, { stiffness: 50, damping: 18 })
  return (
    <motion.div ref={ref} style={{ scale: springScale }} className={className}>
      {children}
    </motion.div>
  )
}

// Animated number that counts up when scrolled into view
export const CountUp = ({
  from = 0,
  to,
  suffix = '',
  className = '',
  duration = 2,
}: {
  from?: number
  to: number
  suffix?: string
  className?: string
  duration?: number
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(from)
  const [display, setDisplay] = useState(from)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(count, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return controls.stop
  }, [isInView, count, to, duration])

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  )
}

// Word-by-word staggered reveal as element enters viewport
export const RevealWords = ({
  text,
  className = '',
  wordClassName = '',
  delay = 0,
}: {
  text: string
  className?: string
  wordClassName?: string
  delay?: number
}) => {
  const words = text.split(' ')
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.07,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className={`inline-block mr-[0.2em] ${wordClassName}`}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

// Container that staggers its direct children in sequence
export const StaggerChildren = ({
  children,
  className = '',
  staggerDelay = 0.12,
}: {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-60px' }}
    variants={{ visible: { transition: { staggerChildren: staggerDelay } } }}
    className={className}
  >
    {children}
  </motion.div>
)

export const StaggerItem = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 28 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
)
