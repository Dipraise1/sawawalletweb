'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import type { GlobeMarker } from '@/components/ui/3d-globe'

// three.js + the Earth textures are ~2 MB — keep them out of the server render
// and the first-load bundle; the hero paints without them.
const Globe3D = dynamic(() => import('@/components/ui/3d-globe').then((m) => m.Globe3D), { ssr: false })

// Where Sawa's people send money: home markets first, then the diaspora.
const markers: GlobeMarker[] = [
  { lat: 6.5244, lng: 3.3792, src: 'https://assets.aceternity.com/avatars/1.webp', label: 'Lagos' },
  { lat: 9.0765, lng: 7.3986, src: 'https://assets.aceternity.com/avatars/2.webp', label: 'Abuja' },
  { lat: 5.6037, lng: -0.187, src: 'https://assets.aceternity.com/avatars/3.webp', label: 'Accra' },
  { lat: -1.2921, lng: 36.8219, src: 'https://assets.aceternity.com/avatars/4.webp', label: 'Nairobi' },
  { lat: -26.2041, lng: 28.0473, src: 'https://assets.aceternity.com/avatars/5.webp', label: 'Johannesburg' },
  { lat: 51.5074, lng: -0.1278, src: 'https://assets.aceternity.com/avatars/6.webp', label: 'London' },
  { lat: 25.2048, lng: 55.2708, src: 'https://assets.aceternity.com/avatars/7.webp', label: 'Dubai' },
  { lat: 40.7128, lng: -74.006, src: 'https://assets.aceternity.com/avatars/8.webp', label: 'New York' },
  { lat: 43.6532, lng: -79.3832, src: 'https://assets.aceternity.com/avatars/9.webp', label: 'Toronto' },
]

// Turned so West Africa faces the visitor on load, tilted so it sits above the
// arch's lower edge rather than at the globe's hidden equator line.
const config = {
  bumpScale: 5,
  autoRotateSpeed: 0.3,
  initialRotation: { x: -0.35, y: -1.745 },
}

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'))
  } catch {
    return false
  }
}

/**
 * Spinning Earth behind the hero phone, pinned at Sawa's corridors.
 * Tablet/desktop only: on phones the textures alone would cost visitors
 * ~1.8 MB of mobile data for a background effect.
 */
export default function HeroGlobe() {
  const [show, setShow] = useState(false)
  const [still, setStill] = useState(false)

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 768px)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    setStill(reduce.matches)
    if (!wide.matches || !hasWebGL()) return
    // Wait for the page to settle so the globe never competes with first paint.
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number }
    if (w.requestIdleCallback) w.requestIdleCallback(() => setShow(true))
    else setTimeout(() => setShow(true), 600)
  }, [])

  if (!show) return null

  return (
    <div className="absolute -bottom-[15rem] left-1/2 size-[40rem] -translate-x-1/2 lg:-bottom-[17rem] lg:size-[44rem]" aria-hidden="true">
      <Globe3D
        className="h-full w-full"
        markers={markers}
        config={still ? { ...config, autoRotateSpeed: 0 } : config}
      />
    </div>
  )
}
