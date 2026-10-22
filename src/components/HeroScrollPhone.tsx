'use client'

import { useRef, useEffect, useState } from 'react'
import { useScroll, useSpring, useMotionValueEvent } from 'framer-motion'

/**
 * Scroll-scrubbed 3D render of the app: the video's playback position is
 * driven by scroll, so the phone reveal plays as the hero scrolls through
 * the viewport.
 *
 * Transparent-background render (alpha), so it needs two encodes for codec
 * coverage — VP9 WebM with alpha (Chrome/Firefox/Edge) and HEVC+alpha MP4
 * (Safari). Neither browser family plays the other's alpha format, so the
 * source is picked by UA sniff after mount rather than a <source> fallback.
 * Both are all-intra (every frame a keyframe) so scroll-seeking stays smooth.
 * Loaded lazily and desktop-only (see below) to keep it off the critical path.
 */
export default function HeroScrollPhone({ className = '' }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const scrubTarget = useRef(0)
  const [src, setSrc] = useState<string | null>(null)

  useEffect(() => {
    // Keep the visible poster on small screens and when motion is reduced.
    // Only desktop visitors need the larger scroll-animation download.
    if (window.matchMedia('(max-width: 767px), (prefers-reduced-motion: reduce)').matches) return

    const ua = navigator.userAgent
    const isSafari = /safari/i.test(ua) && !/chrome|chromium|crios|android|edg/i.test(ua)
    const chosen = isSafari ? '/sawa-app-scroll-hevc.mp4' : '/sawa-app-scroll.webm'

    // Defer the fetch until the browser is idle so it never competes with
    // the critical hero render / fonts on first paint.
    const load = () => setSrc(chosen)
    const ric = (window as unknown as { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback
    if (ric) {
      const id = ric(load, { timeout: 1500 })
      return () => window.cancelIdleCallback(id)
    } else {
      const id = setTimeout(load, 200)
      return () => clearTimeout(id)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center center'],
  })
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useMotionValueEvent(smoothProgress, 'change', (p) => {
    scrubTarget.current = p
  })

  useEffect(() => {
    if (!src) return
    let raf: number
    const tick = () => {
      const video = videoRef.current
      if (video && video.duration && video.readyState >= 2 && !video.seeking) {
        const t = scrubTarget.current * (video.duration - 0.05)
        if (Math.abs(t - video.currentTime) > 0.01) {
          video.currentTime = t
        }
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [src])

  return (
    <div ref={containerRef} className={className}>
      <video
        ref={videoRef}
        src={src ?? undefined}
        poster="/sawa-app-scroll-poster.png"
        width={768}
        height={1080}
        muted
        playsInline
        preload="auto"
        aria-label="Sawa Wallet app interface animation"
        className="w-full h-auto"
      />
    </div>
  )
}
