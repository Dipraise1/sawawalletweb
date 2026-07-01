import Link from 'next/link'

export const metadata = {
  title: 'AML & Compliance',
  description:
    'Sawa Wallet’s Anti-Money Laundering and Counter-Terrorist Financing statement: identity verification, transaction monitoring, sanctions screening, and reporting.',
  alternates: {
    canonical: 'https://sawawallet.org/aml-policy',
  },
  openGraph: {
    title: 'AML & Compliance - Sawa Wallet',
    description:
      'How Sawa Wallet prevents money laundering and keeps its fiat rails clean.',
    url: 'https://sawawallet.org/aml-policy',
  },
  robots: { index: true, follow: true },
}

export default function AmlPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-forest-green hover:text-forest-green/80 font-medium transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">
            Anti-Money Laundering &amp; Compliance Statement
          </h1>
          <p className="text-xs text-gray-500 mb-8">Last Updated: July 1, 2026</p>

          <div className="prose prose-sm max-w-none space-y-6 text-gray-700">
            {/* Commitment */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">1. Our Commitment</h2>
              <p className="text-sm leading-relaxed">
                Sawa Wallet (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to preventing the use of
                our platform for money laundering, terrorist financing, fraud, and other
                financial crimes. This statement describes the measures we apply to our
                services — in particular our fiat on-ramp and off-ramp rails, where money
                moves between bank accounts, mobile money, and cryptocurrency.
              </p>
            </section>

            {/* Scope */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">2. Scope</h2>
              <p className="text-sm leading-relaxed mb-2">This statement applies to:</p>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                <li>Buying cryptocurrency with local currency through Sawa</li>
                <li>Cashing out cryptocurrency to bank accounts or mobile money</li>
                <li>Bill payment and airtime services funded from a Sawa balance</li>
              </ul>
              <p className="text-sm leading-relaxed mt-3">
                Purely on-chain, wallet-to-wallet transfers are executed by public blockchain
                networks under your own keys; we monitor platform activity but do not control
                blockchain networks themselves.
              </p>
            </section>

            {/* KYC */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">3. Identity Verification (KYC)</h2>
              <p className="text-sm leading-relaxed mb-2">
                Before using our fiat rails, users complete identity verification proportionate
                to their activity. Depending on your verification level and jurisdiction, this
                may include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                <li>Verified phone number and account credentials</li>
                <li>Government-issued identity document checks through our licensed identity-verification partner</li>
                <li>Bank account or mobile-money account name matching</li>
                <li>Enhanced due diligence for higher transaction volumes or unusual activity</li>
              </ul>
              <p className="text-sm leading-relaxed mt-3">
                Higher verification levels unlock higher transaction limits. We may decline,
                limit, or reverse transactions where verification cannot be completed.
              </p>
            </section>

            {/* Monitoring */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">4. Transaction Monitoring</h2>
              <p className="text-sm leading-relaxed mb-2">
                We monitor platform activity for patterns associated with financial crime,
                including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                <li>Structuring (breaking large amounts into many small transactions)</li>
                <li>Rapid pass-through activity inconsistent with normal wallet use</li>
                <li>Activity linked to addresses associated with sanctioned entities, hacks, or scams</li>
                <li>Velocity and volume anomalies relative to a user&apos;s verification level</li>
              </ul>
              <p className="text-sm leading-relaxed mt-3">
                Flagged activity may result in additional verification requests, transaction
                delays, limits, or account restriction while we review.
              </p>
            </section>

            {/* Sanctions */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">5. Sanctions Compliance</h2>
              <p className="text-sm leading-relaxed">
                We do not provide services to individuals or entities on applicable sanctions
                lists, or in jurisdictions subject to comprehensive sanctions. Where required,
                users and transactions are screened against relevant lists, and matches are
                escalated for review and reported to the appropriate authorities.
              </p>
            </section>

            {/* Reporting & records */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">6. Reporting &amp; Record-Keeping</h2>
              <p className="text-sm leading-relaxed">
                We retain transaction and verification records for the periods required by
                applicable law and cooperate with lawful requests from regulators and law
                enforcement, including filing suspicious-activity reports where required. Our
                practices are designed to align with Nigerian AML/CFT requirements — including
                the Money Laundering (Prevention and Prohibition) Act 2022 and relevant
                guidance applicable to virtual-asset services — as well as international
                standards such as the FATF Recommendations.
              </p>
            </section>

            {/* User obligations */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">7. Your Obligations</h2>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                <li>Provide accurate, current information during verification</li>
                <li>Use Sawa only for lawful purposes and your own funds</li>
                <li>Do not let others use your account (no account renting or &quot;P2P agency&quot; on your identity)</li>
                <li>Respond to verification requests promptly when asked</li>
              </ul>
              <p className="text-sm leading-relaxed mt-3 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <strong>Warning:</strong> Allowing third parties to move money through your
                verified account is a common money-mule pattern and will result in account
                restriction and, where required, reporting to authorities.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">8. Contact</h2>
              <p className="text-sm leading-relaxed mb-2">
                Questions about this statement or our compliance program:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 text-sm">
                <p className="mb-1">
                  <strong>Compliance:</strong>{' '}
                  <a href="mailto:compliance@sawawallet.org" className="text-forest-green hover:underline">
                    compliance@sawawallet.org
                  </a>
                </p>
                <p>
                  <strong>Support:</strong>{' '}
                  <a href="mailto:support@sawawallet.org" className="text-forest-green hover:underline">
                    support@sawawallet.org
                  </a>
                </p>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                See also our{' '}
                <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-gray-600">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link href="/terms-of-service" className="underline underline-offset-2 hover:text-gray-600">
                  Terms of Service
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
