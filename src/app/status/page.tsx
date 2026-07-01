'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import type { ServiceStatus } from '../api/status/route'

type StatusPayload = {
  overall: 'operational' | 'degraded' | 'down'
  services: ServiceStatus[]
  checkedAt: number
}

const POLL_MS = 30_000

const OVERALL_COPY = {
  operational: {
    headline: 'All systems operational',
    sub: 'Money is moving. Everything is running normally.',
    dot: 'bg-forest-green',
    text: 'text-forest-green',
  },
  degraded: {
    headline: 'Partial degradation',
    sub: 'Some services are slower than usual. Transactions may take longer.',
    dot: 'bg-luxury-gold',
    text: 'text-luxury-gold',
  },
  down: {
    headline: 'Service disruption',
    sub: 'We’re on it. Your funds are safe — non-custodial wallets are unaffected by outages.',
    dot: 'bg-red-500',
    text: 'text-red-500',
  },
} as const

const SERVICE_BADGE = {
  operational: { label: 'Operational', cls: 'bg-forest-green/10 text-forest-green' },
  degraded: { label: 'Degraded', cls: 'bg-luxury-gold/15 text-yellow-700' },
  down: { label: 'Down', cls: 'bg-red-50 text-red-600' },
} as const

export default function StatusPage() {
  const [data, setData] = useState<StatusPayload | null>(null)
  const [error, setError] = useState(false)

  const load = useCallback(async () => {
    try {
      const res = await fetch('/api/status', { cache: 'no-store' })
      if (!res.ok) throw new Error('bad response')
      setData(await res.json())
      setError(false)
    } catch {
      setError(true)
    }
  }, [])

  useEffect(() => {
    load()
    const t = setInterval(load, POLL_MS)
    return () => clearInterval(t)
  }, [load])

  const overall = data ? OVERALL_COPY[data.overall] : null

  return (
    <div className="min-h-screen bg-cream">
      <section className="relative overflow-hidden">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-forest-green/[0.05] blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="container-custom relative z-10 pt-24 pb-12 sm:pt-32">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-luxury-gold mb-6">
            System status
          </p>

          {/* Overall */}
          {!data && !error && (
            <div className="flex items-center gap-4">
              <span className="w-4 h-4 rounded-full bg-gray-300 animate-pulse" />
              <h1 className="font-display text-3xl sm:text-5xl font-semibold text-gray-400">
                Checking systems…
              </h1>
            </div>
          )}

          {error && !data && (
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-4 h-4 rounded-full bg-luxury-gold" />
                <h1 className="font-display text-3xl sm:text-5xl font-semibold text-charcoal">
                  Couldn&apos;t run checks
                </h1>
              </div>
              <p className="text-gray-600 max-w-xl">
                Your connection may be offline. We&apos;ll retry automatically.
              </p>
            </div>
          )}

          {data && overall && (
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="relative flex w-4 h-4">
                  <span
                    className={`absolute inline-flex h-full w-full rounded-full ${overall.dot} opacity-60 animate-ping`}
                  />
                  <span className={`relative inline-flex w-4 h-4 rounded-full ${overall.dot}`} />
                </span>
                <h1 className="font-display text-3xl sm:text-5xl font-semibold text-charcoal tracking-tight">
                  {overall.headline}
                </h1>
              </div>
              <p className="text-gray-600 max-w-xl">{overall.sub}</p>
              <p className="text-xs text-gray-400 mt-3">
                Last checked {new Date(data.checkedAt).toLocaleTimeString()} · auto-refreshes
                every 30s
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Services */}
      <section className="pb-10">
        <div className="container-custom">
          <div className="max-w-3xl rounded-3xl border border-gray-100 bg-white shadow-sm divide-y divide-gray-100 overflow-hidden">
            {(data?.services ?? []).map((s) => {
              const badge = SERVICE_BADGE[s.status]
              return (
                <div key={s.id} className="flex items-center justify-between gap-4 p-6">
                  <div>
                    <h2 className="font-bold text-charcoal">{s.name}</h2>
                    <p className="text-sm text-gray-500">{s.description}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    {s.latencyMs !== null && s.status !== 'down' && (
                      <span className="hidden sm:inline text-xs text-gray-400 tabular-nums">
                        {s.latencyMs}ms
                      </span>
                    )}
                    <span
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full ${badge.cls}`}
                    >
                      {badge.label}
                    </span>
                  </div>
                </div>
              )
            })}
            {!data && (
              <div className="p-6 space-y-4">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-12 rounded-xl bg-gray-100 animate-pulse" />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="max-w-3xl rounded-3xl bg-sand border border-luxury-gold/20 p-8">
            <h2 className="font-display text-xl font-semibold text-charcoal mb-2">
              Your funds don&apos;t depend on our uptime
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Sawa is non-custodial — your assets live on-chain under keys only you control.
              Even during an outage of our services, your money remains yours and accessible.{' '}
              <Link href="/security" className="text-forest-green font-semibold hover:underline">
                Read how that works →
              </Link>
            </p>
            <p className="text-xs text-gray-400 mt-4">
              Seeing an issue we&apos;re not showing?{' '}
              <a href="mailto:support@sawawallet.org" className="underline underline-offset-2 hover:text-gray-600">
                support@sawawallet.org
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
