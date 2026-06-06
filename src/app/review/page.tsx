import type { Metadata } from 'next'
import Link from 'next/link'
import ReviewForm from '@/components/ReviewForm'

export const metadata: Metadata = {
  title: 'Leave a Review',
  description: 'Share your experience with Sawa Wallet. Tell the community how sending money with a phone number works for you.',
  alternates: { canonical: 'https://sawawallet.org/review' },
}

export default function ReviewPage() {
  return (
    <main className="min-h-screen bg-cream font-sans">
      <section className="relative pt-32 pb-24 lg:pt-40 overflow-hidden">
        {/* soft background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-forest-green/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

        <div className="container-custom relative z-10 max-w-xl">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-forest-green mb-4">Town Hall</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4 tracking-tight">
              How is Sawa working for you?
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Your honest review helps others discover Sawa — and helps us build it better.
              It only takes 30 seconds.
            </p>
          </div>

          <ReviewForm />

          <div className="text-center mt-8">
            <Link href="/#town-hall" className="text-sm font-medium text-gray-500 hover:text-forest-green transition-colors">
              ← Read what others are saying
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
