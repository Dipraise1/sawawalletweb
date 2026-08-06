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
    // The hero phone is `hidden sm:block` — never shown below 640px. Skip the
    // video download entirely on small screens so mobile visitors don't pull a
    // multi-MB asset they'll never see (the poster covers the desktop reveal).
    if (window.matchMedia('(max-width: 639px)').matches) return

    const ua = navigator.userAgent
    const isSafari = /safari/i.test(ua) && !/chrome|chromium|crios|android|edg/i.test(ua)
    const chosen = isSafari ? '/sawa-app-scroll-hevc.mp4' : '/sawa-app-scroll.webm'

    // Defer the fetch until the browser is idle so it never competes with
    // the critical hero render / fonts on first paint.
    const load = () => setSrc(chosen)
    const ric = (window as unknown as { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback
    if (ric) {
      ric(load, { timeout: 1500 })
    } else {
      setTimeout(load, 200)
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
  }, [])

  return (
    <div ref={containerRef} className={className}>
      <video
        ref={videoRef}
        src={src ?? undefined}
        poster="/sawa-app-scroll-poster.png"
        muted
        playsInline
        preload="auto"
        aria-label="Sawa Wallet app interface animation"
        className="w-full h-auto"
      />
    </div>
  )
}
