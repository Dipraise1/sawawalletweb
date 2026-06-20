'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

// Fixed particle positions — defined at module level to avoid hydration mismatch
const PARTICLES = [
  { id: 0,  x: 10, y: 8,  s: 3, dur: 20, delay: 0,   col: 0 },
  { id: 1,  x: 88, y: 15, s: 2, dur: 17, delay: 1,   col: 1 },
  { id: 2,  x: 35, y: 22, s: 4, dur: 22, delay: 2,   col: 2 },
  { id: 3,  x: 65, y: 30, s: 2, dur: 18, delay: 0.5, col: 0 },
  { id: 4,  x: 20, y: 45, s: 3, dur: 25, delay: 3,   col: 1 },
  { id: 5,  x: 75, y: 55, s: 4, dur: 19, delay: 1.5, col: 2 },
  { id: 6,  x: 50, y: 62, s: 2, dur: 21, delay: 4,   col: 0 },
  { id: 7,  x: 92, y: 72, s: 3, dur: 16, delay: 2.5, col: 1 },
  { id: 8,  x: 5,  y: 80, s: 4, dur: 23, delay: 0.8, col: 2 },
  { id: 9,  x: 42, y: 88, s: 2, dur: 20, delay: 3.5, col: 0 },
  { id: 10, x: 80, y: 5,  s: 3, dur: 18, delay: 1.2, col: 1 },
  { id: 11, x: 28, y: 38, s: 2, dur: 24, delay: 2.8, col: 2 },
  { id: 12, x: 58, y: 48, s: 4, dur: 17, delay: 4.2, col: 0 },
  { id: 13, x: 15, y: 60, s: 3, dur: 21, delay: 0.3, col: 1 },
  { id: 14, x: 70, y: 20, s: 2, dur: 19, delay: 3.8, col: 2 },
  { id: 15, x: 48, y: 92, s: 3, dur: 22, delay: 1.6, col: 0 },
  { id: 16, x: 83, y: 42, s: 2, dur: 20, delay: 2.1, col: 1 },
  { id: 17, x: 22, y: 75, s: 4, dur: 16, delay: 0.9, col: 2 },
]

const PARTICLE_COLORS = [
  'rgba(212,175,55,0.45)',
  'rgba(45,80,22,0.30)',
  'rgba(148,163,136,0.35)',
]

export default function ParallaxHeroBackground() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Each layer moves at a different scroll speed creating depth illusion
  const y0 = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])   // deepest — slowest
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '32%'])
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '52%'])  // closest — fastest

  const sy0 = useSpring(y0, { stiffness: 35, damping: 14 })
  const sy1 = useSpring(y1, { stiffness: 35, damping: 14 })
  const sy2 = useSpring(y2, { stiffness: 35, damping: 14 })
  const sy3 = useSpring(y3, { stiffness: 35, damping: 14 })

  // Subtle fade as user scrolls away from hero
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.6, 0])

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* ── Layer 0 — deep atmosphere ────────────────── */}
      <motion.div style={{ y: sy0 }} className="absolute inset-[-12%]">
        <div
          className="absolute rounded-full animate-aurora-1"
          style={{
            width: 900, height: 900,
            top: '-15%', right: '-12%',
            background:
              'radial-gradient(circle, rgba(45,80,22,0.14) 0%, rgba(45,80,22,0.05) 50%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />
        <div
          className="absolute rounded-full animate-aurora-2"
          style={{
            width: 1100, height: 1100,
            bottom: '-25%', left: '-18%',
            background:
              'radial-gradient(circle, rgba(212,175,55,0.10) 0%, rgba(212,175,55,0.03) 50%, transparent 70%)',
            filter: 'blur(110px)',
          }}
        />
      </motion.div>

      {/* ── Layer 1 — mid atmosphere ─────────────────── */}
      <motion.div style={{ y: sy1 }} className="absolute inset-0">
        <div
          className="absolute rounded-full animate-aurora-3"
          style={{
            width: 600, height: 600,
            top: '8%', left: '2%',
            background: 'radial-gradient(circle, rgba(45,80,22,0.09) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 450, height: 450,
            top: '32%', right: '6%',
            background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)',
            filter: 'blur(55px)',
            animation: 'aurora-1 20s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 320, height: 320,
            bottom: '8%', right: '28%',
            background: 'radial-gradient(circle, rgba(45,80,22,0.07) 0%, transparent 70%)',
            filter: 'blur(45px)',
            animation: 'aurora-2 14s ease-in-out infinite',
          }}
        />
      </motion.div>

      {/* ── Layer 2 — floating particles ─────────────── */}
      <motion.div style={{ y: sy2 }} className="absolute inset-0">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.s + 1,
              height: p.s + 1,
              background: PARTICLE_COLORS[p.col],
              willChange: 'transform, opacity',
              animation: 'organic-wobble 8s ease-in-out infinite',
              animationDelay: `${p.delay * -1.2}s`,
            }}
            animate={{
              y: [-14, 14, -14],
              x: [-4, 4, -4],
              opacity: [0.2, 0.75, 0.2],
              scale: [1, 1.35, 1],
            }}
            transition={{
              duration: p.dur,
              repeat: Infinity,
              ease: [0.23, 0.52, 0.31, 0.97], // organic custom ease
              delay: p.delay * 0.6 + Math.random() * 0.8, // subtle randomization per particle
            }}
          />
        ))}
      </motion.div>

      {/* ── Layer 3 — foreground grid + accent lines ── */}
      <motion.div style={{ y: sy3 }} className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.022] bg-[radial-gradient(circle_at_1px_1px,rgb(45,80,22)_1px,transparent_0)] bg-[length:28px_28px]" />
        <div
          className="absolute left-0 w-full h-px"
          style={{
            background:
              'linear-gradient(to right, transparent, rgba(45,80,22,0.10), transparent)',
            top: '30%',
          }}
        />
        <div
          className="absolute left-0 w-full h-px"
          style={{
            background:
              'linear-gradient(to right, transparent, rgba(212,175,55,0.10), transparent)',
            top: '63%',
          }}
        />
        <div
          className="absolute left-0 w-full h-px"
          style={{
            background:
              'linear-gradient(to right, transparent, rgba(45,80,22,0.06), transparent)',
            top: '50%',
          }}
        />
      </motion.div>
    </motion.div>
  )
}
