#!/usr/bin/env node
// Find and remove markup/script-injection "reviews" from the Vercel KV store.
//
//   node scripts/purge-malicious-reviews.mjs            # dry run — shows what WOULD be removed
//   node scripts/purge-malicious-reviews.mjs --apply    # actually rewrites the list
//
// Reads KV_REST_API_URL / KV_REST_API_TOKEN from the environment or .env.local.

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// --- minimal .env.local loader (only fills vars that aren't already set) ---
try {
  const env = readFileSync(join(__dirname, '..', '.env.local'), 'utf8')
  for (const line of env.split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/)
    if (m && !process.env[m[1]]) {
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
    }
  }
} catch {
  /* no .env.local — rely on the ambient environment */
}

const LIST_KEY = 'sawa:reviews'
const APPLY = process.argv.includes('--apply')

// Same heuristic the API uses to flag a submission as an injection attempt.
const ATTACK_PATTERN = /<[a-z!/]|on\w+\s*=|javascript:|data:text\/html|&#x?\d/i

function isMalicious(r) {
  return [r?.name, r?.message, r?.location].some(
    (v) => typeof v === 'string' && ATTACK_PATTERN.test(v),
  )
}

if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
  console.error('✗ KV_REST_API_URL / KV_REST_API_TOKEN not set. Add them to .env.local or the environment.')
  process.exit(1)
}

const { kv } = await import('@vercel/kv')

const all = (await kv.lrange(LIST_KEY, 0, -1)) ?? []
const bad = all.filter(isMalicious)
const keep = all.filter((r) => !isMalicious(r))

console.log(`Scanned ${all.length} review(s). Flagged ${bad.length} as malicious.\n`)
for (const r of bad) {
  console.log(`  • id=${r.id}  name=${JSON.stringify(r.name)}  message=${JSON.stringify(r.message)}`)
}

if (bad.length === 0) {
  console.log('\n✓ Nothing to remove.')
  process.exit(0)
}

if (!APPLY) {
  console.log(`\nDry run — no changes made. Re-run with --apply to remove the ${bad.length} flagged review(s).`)
  process.exit(0)
}

// Rewrite the list, preserving head→tail order of the survivors.
await kv.del(LIST_KEY)
if (keep.length) await kv.rpush(LIST_KEY, ...keep)
console.log(`\n✓ Removed ${bad.length} review(s). ${keep.length} remain.`)
