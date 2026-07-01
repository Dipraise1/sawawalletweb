'use client'

import { useState } from 'react'

type State = 'idle' | 'sending' | 'done' | 'error'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<State>('idle')
  const [error, setError] = useState('')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (state === 'sending') return
    setState('sending')
    setError('')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data?.error || 'Something went wrong')
      setState('done')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setState('error')
    }
  }

  if (state === 'done') {
    return (
      <div className="max-w-md mx-auto mb-8">
        <div className="flex items-center justify-center gap-3 p-4 bg-white/10 backdrop-blur-md border border-luxury-gold/30 rounded-full">
          <span className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center shrink-0" aria-hidden="true">
            <svg className="w-4 h-4 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <p className="text-sm text-white font-medium">
            You&apos;re on the list — we&apos;ll email you at launch.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto mb-8">
      <form className="relative group" onSubmit={submit}>
        <div
          className="absolute -inset-1 bg-gradient-to-r from-luxury-gold/50 to-white/20 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-700"
          aria-hidden="true"
        />
        <div className="relative flex p-1.5 bg-forest-green-dark rounded-full border border-white/10">
          <label htmlFor="waitlist-email" className="sr-only">
            Email address
          </label>
          <input
            id="waitlist-email"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 min-w-0 px-6 bg-transparent text-white placeholder:text-white/40 focus:outline-none text-sm"
          />
          <button
            type="submit"
            disabled={state === 'sending'}
            className="px-7 py-2.5 bg-white text-forest-green rounded-full font-bold hover:bg-cream transition-colors shadow-lg text-sm disabled:opacity-70 disabled:cursor-wait shrink-0"
          >
            {state === 'sending' ? 'Joining…' : 'Request Access'}
          </button>
        </div>
      </form>
      {state === 'error' && (
        <p className="text-sm text-luxury-gold/90 mt-3" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
