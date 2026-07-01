'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

// Hybrid privacy model (Google Consent Mode v2):
//   • On first open, analytics runs in cookieless, IP-anonymized mode — no
//     tracking cookies are set and no personal identifiers are stored.
//   • The visitor can opt in to full analytics (accept) or stay cookieless
//     (decline). Their choice is remembered locally and re-applied on return.
const STORAGE_KEY = 'sawa-consent'

type Gtag = (...args: unknown[]) => void

function updateConsent(granted: boolean) {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag
  if (typeof gtag === 'function') {
    gtag('consent', 'update', {
      analytics_storage: granted ? 'granted' : 'denied',
    })
  }
}

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let choice: string | null = null
    try {
      choice = localStorage.getItem(STORAGE_KEY)
    } catch {
      /* storage blocked — treat as undecided */
    }
    // Already decided: re-apply and stay hidden.
    if (choice === 'granted') {
      updateConsent(true)
      return
    }
    if (choice === 'denied') return
    // Undecided — surface the banner shortly after paint so it isn't jarring.
    const t = setTimeout(() => setVisible(true), 800)
    return () => clearTimeout(t)
  }, [])

  function decide(granted: boolean) {
    try {
      localStorage.setItem(STORAGE_KEY, granted ? 'granted' : 'denied')
    } catch {
      /* ignore */
    }
    updateConsent(granted)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Privacy preferences"
      className="fixed inset-x-3 bottom-3 z-[60] sm:inset-x-auto sm:right-5 sm:bottom-5 sm:max-w-sm"
    >
      <div className="bg-white/95 backdrop-blur-md border border-gray-100 rounded-2xl shadow-xl p-5">
        <p className="text-sm text-charcoal leading-relaxed">
          We keep things private by default — analytics run{' '}
          <span className="font-semibold">cookie-free</span> when you arrive. Allow
          optional cookies to help us improve Sawa?
        </p>
        <div className="flex items-center gap-2 mt-4">
          <button
            onClick={() => decide(true)}
            className="btn-primary flex-1 justify-center text-sm py-2.5"
          >
            Allow
          </button>
          <button
            onClick={() => decide(false)}
            className="flex-1 justify-center text-sm py-2.5 rounded-xl border border-gray-200 font-semibold text-charcoal hover:bg-gray-50 transition-colors"
          >
            Decline
          </button>
        </div>
        <p className="text-[11px] text-gray-400 mt-3">
          Either way the site works fully.{' '}
          <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-gray-600">
            Privacy policy
          </Link>
        </p>
      </div>
    </div>
  )
}
