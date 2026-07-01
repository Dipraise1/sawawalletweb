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
  ...rest
}: {
  children: React.ReactNode
  className?: string
  [key: string]: unknown
}) => (
  <motion.div
    className={className}
    whileHover={{ y: -4 }}
    transition={{ duration: 0.3 }}
    {...rest}
  >
    {children}
  </motion.div>
)

// Cursor-tracking 3D perspective tilt. Children can sit at different depths
// with `[transform:translateZ(Npx)]` since this sets transform-style: preserve-3d.
// Disabled on touch devices and when the user prefers reduced motion.
export const Tilt3D = ({
  children,
  className = '',
  max = 10,
  lift = -6,
  scale = 1.02,
  perspective = 1000,
}: {
  children: React.ReactNode
  className?: string
  max?: number
  lift?: number
  scale?: number
  perspective?: number
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const springCfg = { stiffness: 170, damping: 16, mass: 0.4 }
  const srx = useSpring(rx, springCfg)
  const sry = useSpring(ry, springCfg)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setEnabled(fine.matches && !reduce.matches)
    update()
    fine.addEventListener('change', update)
    reduce.addEventListener('change', update)
    return () => {
      fine.removeEventListener('change', update)
      reduce.removeEventListener('change', update)
    }
  }, [])

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    ry.set(px * max * 2)
    rx.set(-py * max * 2)
  }
  const reset = () => {
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        rotateX: srx,
        rotateY: sry,
        transformStyle: 'preserve-3d',
        transformPerspective: perspective,
      }}
      whileHover={enabled ? { scale, y: lift } : undefined}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

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
  // The scroll target lives on a plain, statically-positioned div so SSR and
  // client hydrate identically; the motion.div only carries the transform.
  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y: springY }}>{children}</motion.div>
    </div>
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
  // Scroll target on a plain positioned div (SSR-stable); motion.div animates.
  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ scale: springScale }}>{children}</motion.div>
    </div>
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
