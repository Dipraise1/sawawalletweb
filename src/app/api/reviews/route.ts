import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export type Review = {
  id: string
  name: string
  location?: string
  rating: number
  message: string
  createdAt: number
}

const LIST_KEY = 'sawa:reviews'
const SEED_FLAG = 'sawa:reviews:seeded'
const MAX_RETURN = 60

const SEED: Review[] = [
  {
    id: 'seed-1',
    name: 'Adebayo O.',
    location: 'Lagos, Nigeria',
    rating: 5,
    message: 'Sent rent to my landlord with just his phone number. No copying long addresses, no stress. This is how crypto should have worked from day one.',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
  },
  {
    id: 'seed-2',
    name: 'Fatima H.',
    location: 'Kano, Nigeria',
    rating: 5,
    message: 'I pay suppliers across three countries now. It honestly feels like sending a WhatsApp message. Settlement is instant.',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 5,
  },
  {
    id: 'seed-3',
    name: 'Emmanuel B.',
    location: 'Accra, Ghana',
    rating: 4,
    message: 'Receiving payments from international clients used to take days. With Sawa my money lands in minutes. Would love more local cash-out options.',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 8,
  },
]

// In-memory fallback used in local dev / before Vercel KV is provisioned.
let memory: Review[] | null = null

async function getKv() {
  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) return null
  try {
    const { kv } = await import('@vercel/kv')
    return kv
  } catch {
    return null
  }
}

async function readAll(): Promise<Review[]> {
  const kv = await getKv()
  if (kv) {
    const seeded = await kv.get(SEED_FLAG)
    if (!seeded) {
      // Push oldest-first so the newest seed ends up at the head of the list.
      for (const r of [...SEED].reverse()) await kv.lpush(LIST_KEY, r)
      await kv.set(SEED_FLAG, 1)
    }
    const list = await kv.lrange<Review>(LIST_KEY, 0, MAX_RETURN - 1)
    return list ?? []
  }
  if (!memory) memory = [...SEED]
  return memory.slice(0, MAX_RETURN)
}

function summarize(reviews: Review[]) {
  const count = reviews.length
  const average = count
    ? Math.round((reviews.reduce((s, r) => s + r.rating, 0) / count) * 10) / 10
    : 0
  return { reviews, count, average }
}

function clean(value: unknown, max: number): string {
  if (typeof value !== 'string') return ''
  // Strip control characters, then collapse whitespace.
  return value
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max)
}

export async function GET() {
  try {
    const reviews = await readAll()
    return NextResponse.json(summarize(reviews))
  } catch {
    return NextResponse.json({ reviews: [], count: 0, average: 0 }, { status: 200 })
  }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const name = clean(body.name, 40)
  const location = clean(body.location, 40)
  const message = clean(body.message, 500)
  const rating = Math.round(Number(body.rating))

  if (name.length < 2) {
    return NextResponse.json({ error: 'Please add your name.' }, { status: 422 })
  }
  if (message.length < 10) {
    return NextResponse.json({ error: 'Please write at least a sentence.' }, { status: 422 })
  }
  if (!Number.isFinite(rating) || rating < 1 || rating > 5) {
    return NextResponse.json({ error: 'Please pick a rating from 1 to 5.' }, { status: 422 })
  }

  const review: Review = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name,
    location: location || undefined,
    rating,
    message,
    createdAt: Date.now(),
  }

  try {
    const kv = await getKv()
    if (kv) {
      await kv.lpush(LIST_KEY, review)
      await kv.ltrim(LIST_KEY, 0, 499)
    } else {
      if (!memory) memory = [...SEED]
      memory.unshift(review)
    }
  } catch {
    return NextResponse.json({ error: 'Could not save your review. Please try again.' }, { status: 500 })
  }

  return NextResponse.json({ review }, { status: 201 })
}
