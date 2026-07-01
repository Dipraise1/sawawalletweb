import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS, getPost } from '@/lib/blogPosts'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props) {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://sawawallet.org/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://sawawallet.org/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
    robots: { index: true, follow: true },
  }
}

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export default function BlogPostPage({ params }: Props) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Sawa Wallet' },
    publisher: { '@type': 'Organization', name: 'Sawa Wallet', url: 'https://sawawallet.org' },
    mainEntityOfPage: `https://sawawallet.org/blog/${post.slug}`,
  }

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <div className="min-h-screen bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===== Article header ===== */}
      <header className="relative overflow-hidden border-b border-luxury-gold/15">
        <div
          className="absolute -top-24 left-[20%] w-96 h-96 rounded-full bg-forest-green/[0.05] blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="container-custom relative z-10 pt-20 pb-12 sm:pt-28 sm:pb-16">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-forest-green font-medium hover:text-forest-green/80 transition-colors mb-8"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              All articles
            </Link>
            <div className="flex items-center gap-3 text-xs mb-6">
              <span className="px-3 py-1 rounded-full bg-forest-green/10 text-forest-green font-semibold">
                {post.category}
              </span>
              <span className="text-gray-400">{formatDate(post.date)}</span>
              <span className="text-gray-300">·</span>
              <span className="text-gray-400">{post.readTime}</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-semibold text-charcoal leading-[1.1] tracking-tight mb-6">
              {post.title}
            </h1>
            <p className="text-body-lg text-gray-600">{post.excerpt}</p>
          </div>
        </div>
      </header>

      {/* ===== Body ===== */}
      <article className="py-12 sm:py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-10">
            {post.sections.map((section, i) => (
              <section key={i}>
                {section.heading && (
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-charcoal mb-4 leading-snug">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs?.map((p, j) => (
                  <p key={j} className="text-gray-700 leading-[1.8] mb-4">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="space-y-3 my-5">
                    {section.list.map((item, j) => (
                      <li key={j} className="flex gap-3 text-gray-700 leading-relaxed">
                        <span className="text-luxury-gold font-bold shrink-0 mt-0.5">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.callout && (
                  <blockquote className="border-l-4 border-luxury-gold bg-sand rounded-r-2xl px-6 py-5 my-6">
                    <p className="font-display text-lg text-charcoal italic leading-relaxed">
                      {section.callout}
                    </p>
                  </blockquote>
                )}
              </section>
            ))}

            {/* CTA */}
            <div className="rounded-3xl bg-charcoal text-white p-8 sm:p-10 relative overflow-hidden">
              <div
                className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-luxury-gold/10 blur-3xl pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative z-10">
                <h2 className="font-display text-2xl font-semibold mb-3">
                  Try it with your own phone number
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-lg">
                  Sawa is a non-custodial wallet that turns phone numbers into payment
                  addresses. Buy USDC with a bank transfer, send it like a text, cash out
                  to bank or mobile money.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.sawawallet.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Get Sawa on Android
                  </a>
                  <Link
                    href="/fees"
                    className="inline-flex items-center px-5 py-2.5 rounded-2xl border border-white/15 text-sm font-semibold hover:bg-white/5 transition-colors"
                  >
                    See our fees
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* ===== Related ===== */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-luxury-gold mb-6">
              Keep reading
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-3xl bg-white border border-gray-100 p-7 shadow-sm hover:shadow-md hover:border-luxury-gold/30 transition-all"
                >
                  <span className="text-xs font-semibold text-forest-green">{p.category}</span>
                  <h3 className="font-display text-lg font-semibold text-charcoal leading-snug mt-2 mb-2 group-hover:text-forest-green transition-colors">
                    {p.title}
                  </h3>
                  <span className="text-xs text-gray-400">{p.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
