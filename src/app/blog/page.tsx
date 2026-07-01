import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/blogPosts'

export const metadata = {
  title: 'Blog — Learn',
  description:
    'Plain-language guides to stablecoins, non-custodial wallets, and moving money across Africa. No hype, no jargon.',
  alternates: {
    canonical: 'https://sawawallet.org/blog',
  },
  openGraph: {
    title: 'Sawa Blog — Money, explained like a human',
    description:
      'Plain-language guides to stablecoins, non-custodial wallets, and moving money across Africa.',
    url: 'https://sawawallet.org/blog',
  },
  robots: { index: true, follow: true },
}

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export default function BlogIndex() {
  const [featured, ...rest] = BLOG_POSTS

  return (
    <div className="min-h-screen bg-cream">
      {/* ===== Masthead ===== */}
      <section className="relative overflow-hidden border-b border-luxury-gold/15">
        <div
          className="absolute -top-24 right-[15%] w-96 h-96 rounded-full bg-luxury-gold/[0.07] blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="container-custom relative z-10 pt-24 pb-12 sm:pt-32 sm:pb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-luxury-gold mb-6">
            The Sawa Blog
          </p>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold text-charcoal leading-[1.05] tracking-tight max-w-3xl">
            Money, explained{' '}
            <span className="text-gradient-green italic">like a human.</span>
          </h1>
          <p className="text-body-lg text-gray-600 max-w-2xl mt-6">
            Guides to stablecoins, self-custody, and moving money across borders — written
            for people, not protocols.
          </p>
        </div>
      </section>

      {/* ===== Featured ===== */}
      <section className="py-12 sm:py-16">
        <div className="container-custom">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid md:grid-cols-2 gap-8 md:gap-12 items-center rounded-3xl bg-charcoal text-white p-8 sm:p-12 relative overflow-hidden"
          >
            <div
              className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-forest-green/30 blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="flex items-center gap-3 text-xs mb-5">
                <span className="px-3 py-1 rounded-full bg-luxury-gold/15 text-luxury-gold font-semibold">
                  {featured.category}
                </span>
                <span className="text-gray-400">{formatDate(featured.date)}</span>
                <span className="text-gray-500">·</span>
                <span className="text-gray-400">{featured.readTime}</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-semibold leading-tight mb-4 group-hover:text-luxury-gold/90 transition-colors">
                {featured.title}
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-luxury-gold">
                Read the guide
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </div>
            <div className="relative z-10 hidden md:flex items-center justify-center">
              <div className="font-display text-[10rem] leading-none font-semibold text-white/[0.06] select-none">
                ₦→$
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ===== Grid ===== */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-3xl bg-white border border-gray-100 p-8 shadow-sm hover:shadow-md hover:border-luxury-gold/30 transition-all flex flex-col"
              >
                <div className="flex items-center gap-3 text-xs mb-5">
                  <span className="px-3 py-1 rounded-full bg-forest-green/10 text-forest-green font-semibold">
                    {post.category}
                  </span>
                  <span className="text-gray-400">{post.readTime}</span>
                </div>
                <h2 className="font-display text-xl font-semibold text-charcoal leading-snug mb-3 group-hover:text-forest-green transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{formatDate(post.date)}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-forest-green">
                    Read
                    <svg
                      className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
