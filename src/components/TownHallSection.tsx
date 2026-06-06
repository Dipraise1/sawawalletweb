'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

type Review = {
  id: string
  name: string
  location?: string
  rating: number
  message: string
  createdAt: number
}

function Stars({ value, className = '' }: { value: number; className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i <= value ? 'text-luxury-gold' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function initials(name: string): string {
  return name
    .split(' ')
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

const AVATAR_COLORS = ['bg-forest-green', 'bg-luxury-gold', 'bg-blue-500', 'bg-purple-500', 'bg-rose-500', 'bg-emerald-600']

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="snap-start shrink-0 w-[280px] sm:w-[340px] bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col">
      <Stars value={review.rating} className="mb-3" />
      <p className="text-gray-700 leading-relaxed text-sm flex-grow line-clamp-6">{review.message}</p>
      <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-50">
        <div className={`w-8 h-8 rounded-full ${AVATAR_COLORS[review.name.charCodeAt(0) % AVATAR_COLORS.length]} flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0`}>
          {initials(review.name)}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-charcoal truncate">{review.name}</p>
          {review.location && <p className="text-xs text-gray-400 truncate">{review.location}</p>}
        </div>
      </div>
    </div>
  )
}

export default function TownHallSection() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [count, setCount] = useState(0)
  const [average, setAverage] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    fetch('/api/reviews')
      .then((r) => r.json())
      .then((data) => {
        if (!active) return
        setReviews(data.reviews ?? [])
        setCount(data.count ?? 0)
        setAverage(data.average ?? 0)
      })
      .catch(() => {})
      .finally(() => active && setLoading(false))
    return () => {
      active = false
    }
  }, [])

  return (
    <section id="town-hall" className="py-28 bg-white border-t border-gray-100 overflow-hidden">
      <div className="container-custom max-w-5xl">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-green mb-4">Town Hall</p>
          <h2 className="heading-2 mb-4">Straight from the community.</h2>

          {count > 0 && (
            <div className="inline-flex items-center gap-2.5 mt-2 text-sm">
              <Stars value={Math.round(average)} />
              <span className="font-bold text-charcoal">{average.toFixed(1)}</span>
              <span className="text-gray-400">· {count} review{count === 1 ? '' : 's'}</span>
            </div>
          )}
        </div>
      </div>

      {/* Horizontal scrolling review wall — side to side on all screens */}
      {loading ? (
        <div className="container-custom max-w-5xl">
          <div className="flex gap-5 overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="shrink-0 w-[280px] sm:w-[340px] bg-white border border-gray-100 rounded-2xl p-6 animate-pulse">
                <div className="h-3 w-20 bg-gray-100 rounded mb-4" />
                <div className="h-3 w-full bg-gray-100 rounded mb-2" />
                <div className="h-3 w-5/6 bg-gray-100 rounded mb-2" />
                <div className="h-3 w-2/3 bg-gray-100 rounded" />
              </div>
            ))}
          </div>
        </div>
      ) : reviews.length === 0 ? (
        <p className="text-center text-gray-500">No reviews yet — be the first to speak up.</p>
      ) : (
        <div
          className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 sm:px-6 lg:px-8 pb-2"
          style={{ scrollPaddingLeft: '1rem' }}
        >
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}

      {/* Swipe hint + shareable CTA */}
      <div className="container-custom max-w-5xl">
        {!loading && reviews.length > 1 && (
          <p className="text-center text-xs text-gray-400 mt-5 flex items-center justify-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l-5 5 5 5M16 7l5 5-5 5" /></svg>
            Swipe to read more
          </p>
        )}

        <div className="text-center mt-10">
          <Link href="/review" className="btn-primary inline-flex">
            Share your experience
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>
          <p className="text-xs text-gray-400 mt-3">Takes 30 seconds · sawawallet.org/review</p>
        </div>
      </div>
    </section>
  )
}
