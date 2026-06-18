'use client'

import { useState } from 'react'
import { trackEvent } from '@/lib/analytics'

export type Review = {
  id: string
  name: string
  location?: string
  rating: number
  message: string
  createdAt: number
}

export default function ReviewForm({ onPosted }: { onPosted?: (r: Review) => void }) {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done'>('idle')
  const [error, setError] = useState<string | null>(null)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (rating < 1) {
      setError('Please pick a rating.')
      return
    }
    setStatus('submitting')
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, location, rating, message }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        setStatus('idle')
        return
      }
      onPosted?.(data.review)
      trackEvent('review_submitted', { rating })
      setStatus('done')
    } catch {
      setError('Network error. Please try again.')
      setStatus('idle')
    }
  }

  if (status === 'done') {
    return (
      <div className="bg-forest-green text-white rounded-3xl p-10 text-center flex flex-col items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center mb-4">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Thank you!</h3>
        <p className="text-white/70 text-sm max-w-xs">Your review is live in the Town Hall. We read every single one.</p>
        <a href="/#town-hall" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white underline underline-offset-4 hover:text-white/80 transition-colors">
          See it in the Town Hall
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm">
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Your rating</label>
      <div className="flex gap-1 mb-5" onMouseLeave={() => setHover(0)}>
        {[1, 2, 3, 4, 5].map((i) => (
          <button
            key={i}
            type="button"
            onClick={() => setRating(i)}
            onMouseEnter={() => setHover(i)}
            className="p-1 -ml-1 first:ml-0"
            aria-label={`${i} star${i > 1 ? 's' : ''}`}
          >
            <svg
              className={`w-8 h-8 transition-colors ${i <= (hover || rating) ? 'text-luxury-gold' : 'text-gray-200'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-3 mb-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          maxLength={40}
          required
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-forest-green/50 focus:ring-2 focus:ring-forest-green/10 transition"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (optional)"
          maxLength={40}
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-forest-green/50 focus:ring-2 focus:ring-forest-green/10 transition"
        />
      </div>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="What's your experience with Sawa?"
        rows={4}
        maxLength={500}
        required
        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm resize-none focus:outline-none focus:border-forest-green/50 focus:ring-2 focus:ring-forest-green/10 transition"
      />
      <div className="flex items-center justify-between mt-1 mb-4">
        <span className="text-xs text-gray-400">{message.length}/500</span>
      </div>

      {error && <p className="text-sm text-red-500 mb-3">{error}</p>}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Posting…' : 'Post review'}
      </button>
    </form>
  )
}
