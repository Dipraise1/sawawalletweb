import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export type ServiceStatus = {
  id: string
  name: string
  description: string
  status: 'operational' | 'degraded' | 'down'
  latencyMs: number | null
}

const TIMEOUT_MS = 8000
// Latency above this is reachable-but-slow → degraded.
const DEGRADED_MS = 3000

async function timedFetch(url: string, init?: RequestInit): Promise<{ ok: boolean; latencyMs: number | null }> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  const started = Date.now()
  try {
    const res = await fetch(url, { ...init, signal: controller.signal, cache: 'no-store' })
    return { ok: res.ok, latencyMs: Date.now() - started }
  } catch {
    return { ok: false, latencyMs: null }
  } finally {
    clearTimeout(timer)
  }
}

function toStatus(ok: boolean, latencyMs: number | null): ServiceStatus['status'] {
  if (!ok) return 'down'
  if (latencyMs !== null && latencyMs > DEGRADED_MS) return 'degraded'
  return 'operational'
}

export async function GET() {
  const [api, solana] = await Promise.all([
    timedFetch('https://api.sawawallet.org/health'),
    timedFetch('https://api.mainnet-beta.solana.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'getHealth' }),
    }),
  ])

  const services: ServiceStatus[] = [
    {
      id: 'website',
      name: 'Website',
      description: 'sawawallet.org',
      // If this route is executing, the website is up.
      status: 'operational',
      latencyMs: null,
    },
    {
      id: 'api',
      name: 'Wallet API',
      description: 'Accounts, transfers, notifications',
      status: toStatus(api.ok, api.latencyMs),
      latencyMs: api.latencyMs,
    },
    {
      id: 'solana',
      name: 'Solana Network',
      description: 'On-chain settlement (public RPC)',
      status: toStatus(solana.ok, solana.latencyMs),
      latencyMs: solana.latencyMs,
    },
  ]

  const worst = services.some((s) => s.status === 'down')
    ? 'down'
    : services.some((s) => s.status === 'degraded')
      ? 'degraded'
      : 'operational'

  return NextResponse.json(
    { overall: worst, services, checkedAt: Date.now() },
    { headers: { 'Cache-Control': 'no-store' } },
  )
}
