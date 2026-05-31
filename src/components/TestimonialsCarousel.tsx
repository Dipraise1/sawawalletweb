'use client'

import { useRef, useState, useEffect } from 'react'
import { TestimonialCard } from '@/components/AnimatedSection'

const TESTIMONIALS = [
  {
    quote: "Finally, a crypto wallet that doesn't feel like a science experiment. I sent money to my landlord using just his phone number.",
    name: 'Adebayo Ogunlesi',
    role: 'Software Engineer',
    location: 'Lagos, Nigeria',
    initials: 'AO',
    color: 'bg-forest-green',
  },
  {
    quote: 'Perfect for my business. Paying suppliers across Africa now feels like sending a WhatsApp message. Total game changer.',
    name: 'Fatima Hassan',
    role: 'Business Owner',
    location: 'Kano, Nigeria',
    initials: 'FH',
    color: 'bg-luxury-gold',
  },
  {
    quote: 'I work with clients worldwide. Sawa helps me receive payments and send money home instantly — no complex addresses ever.',
    name: 'Emmanuel Boateng',
    role: 'Freelancer',
    location: 'Accra, Ghana',
    initials: 'EB',
    color: 'bg-blue-500',
  },
  {
    quote: 'So simple as a student. No passwords, no complex setup. Just works with my phone number. I told all my friends.',
    name: 'David Okonkwo',
    role: 'Student',
    location: 'Abuja, Nigeria',
    initials: 'DO',
    color: 'bg-purple-500',
  },
]

export default function TestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const updateState = () => {
    const el = scrollRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setAtStart(scrollLeft <= 8)
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 8)
    const card = el.querySelector<HTMLElement>('[data-card]')
    const step = card ? card.offsetWidth + 24 /* gap-6 */ : clientWidth
    setActive(Math.round(scrollLeft / step))
  }

  useEffect(() => {
    updateState()
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateState, { passive: true })
    window.addEventListener('resize', updateState)
    return () => {
      el.removeEventListener('scroll', updateState)
      window.removeEventListener('resize', updateState)
    }
  }, [])

  const scrollByCards = (dir: 1 | -1) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-card]')
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  const scrollToIndex = (i: number) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-card]')
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8
    el.scrollTo({ left: i * step, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      {/* Prev / Next arrows — desktop */}
      <button
        type="button"
        onClick={() => scrollByCards(-1)}
        disabled={atStart}
        aria-label="Previous testimonials"
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 text-charcoal hover:bg-forest-green hover:text-white hover:scale-110 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button
        type="button"
        onClick={() => scrollByCards(1)}
        disabled={atEnd}
        aria-label="Next testimonials"
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 text-charcoal hover:bg-forest-green hover:text-white hover:scale-110 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      <div className="relative fade-edges">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x scrollbar-hide -mx-4 px-4 scroll-smooth"
        >
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard
              key={i}
              data-card
              className="min-w-[320px] md:min-w-[420px] bg-sand/40 border border-gray-100 p-8 rounded-3xl shrink-0 snap-center hover:bg-sand/70 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-5" aria-label="5 stars">
                {[...Array(5)].map((_, j) => <span key={j} className="text-luxury-gold text-lg" aria-hidden="true">★</span>)}
              </div>
              <p className="text-lg text-charcoal font-medium italic mb-6 leading-relaxed flex-1">
                &quot;{t.quote}&quot;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`} aria-hidden="true">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-charcoal text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role} · {t.location}</p>
                </div>
              </div>
            </TestimonialCard>
          ))}
        </div>
      </div>

      {/* Slide affordance: dots + swipe hint */}
      <div className="flex items-center justify-center gap-4 mt-2">
        <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-selected={active === i}
              className={`h-2 rounded-full transition-all duration-300 ${active === i ? 'w-7 bg-forest-green' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile swipe hint */}
      <div className="md:hidden flex items-center justify-center gap-2 mt-4 text-gray-400">
        <span className="text-sm font-medium">Swipe to read more</span>
        <svg className="w-4 h-4 animate-slide-hint" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
      </div>
    </div>
  )
}
