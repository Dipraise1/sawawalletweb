'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { trackEvent } from '@/lib/analytics'

export default function WatchDemoButton() {
  const [open, setOpen] = useState(false)

  // Close on Escape + lock body scroll while open
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => { trackEvent('watch_demo'); setOpen(true); }}
        className="group inline-flex items-center gap-3 px-6 py-4 border border-gray-300 text-gray-700 rounded-3xl hover:bg-white hover:border-forest-green font-medium text-sm tracking-widest transition-all"
        aria-haspopup="dialog"
      >
        Watch 45s Demo
        <span className="text-lg group-hover:rotate-12 transition-transform">▶</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Sawa Wallet demo video"
          >
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.92, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 12 }}
              transition={{ type: 'spring', damping: 26, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-10 w-10 h-10 rounded-full bg-white text-charcoal shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Close demo"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              {/* 16:9 player frame — loading state for now */}
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-charcoal shadow-2xl ring-1 ring-white/10">
                {/* subtle brand glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-forest-green/20 via-transparent to-luxury-gold/10" aria-hidden="true" />

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                  {/* spinner */}
                  <div className="relative w-14 h-14" role="status" aria-label="Loading">
                    <div className="absolute inset-0 rounded-full border-2 border-white/15" />
                    <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-luxury-gold animate-spin" />
                  </div>
                  <div className="text-center">
                    <p className="text-white/90 text-sm font-medium tracking-wide">Loading demo…</p>
                    <p className="text-white/40 text-xs mt-1">The Sawa Wallet walkthrough is on its way.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
