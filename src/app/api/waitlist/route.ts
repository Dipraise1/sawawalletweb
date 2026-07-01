import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const SET_KEY = 'sawa:waitlist'
// Private, operator-only signup log (timestamped, with request fingerprint).
const LOG_KEY = 'sawa:waitlist:log'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export async function POST(request: Request) {
  let email = ''
  try {
    const contentType = request.headers.get('content-type') ?? ''
    if (contentType.includes('application/json')) {
      const body = await request.json()
      email = String(body?.email ?? '')
    } else {
      // Progressive enhancement: plain HTML form posts still work without JS.
      const form = await request.formData()
      email = String(form.get('email') ?? '')
    }
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  email = email.trim().toLowerCase()
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 })
  }

  try {
    const { kv } = await import('@vercel/kv')
    const added = await kv.sadd(SET_KEY, email)
    if (added) {
      await kv.lpush(LOG_KEY, {
        email,
        at: Date.now(),
        ip: request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? null,
        ua: request.headers.get('user-agent')?.slice(0, 200) ?? null,
      })
      await kv.ltrim(LOG_KEY, 0, 9999)
    }
    // Idempotent from the visitor's perspective — re-signup is still success.
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong — please try again' },
      { status: 500 },
    )
  }
}
