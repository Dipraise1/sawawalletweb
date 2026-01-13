import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy - Sawa Wallet',
  description: 'Learn how Sawa Wallet collects, uses, and protects your personal information.',
}

export default function PrivacyPolicy() {
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
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">Privacy Policy</h1>
          <p className="text-xs text-gray-500 mb-8">Last Updated: December 25, 2025</p>

          <div className="prose prose-sm max-w-none space-y-6 text-gray-700">
            {/* Introduction */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">1. Introduction</h2>
              <p className="text-sm leading-relaxed mb-3">
                Welcome to Sawa Wallet (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). Sawa Wallet is a digital wallet platform that enables users to send, receive, and manage USDC (USD Coin) cryptocurrency with local currency quotations, making crypto transactions simple and accessible.
              </p>
              <p className="text-sm leading-relaxed">
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
              </p>
            </section>

            {/* What Sawa Does */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">2. What Sawa Wallet Does</h2>
              <p className="text-sm leading-relaxed mb-2">Sawa Wallet provides the following services:</p>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                <li>Digital wallet for USDC cryptocurrency on the Solana blockchain</li>
                <li>Peer-to-peer money transfers using phone numbers</li>
                <li>Local currency quotations for all transactions (e.g., send ₦200 worth of USDC)</li>
                <li>Access to decentralized finance (DeFi) protocols on Solana</li>
                <li>Staking and liquidity pool investment opportunities</li>
                <li>Cross-border money transfers across Africa and beyond</li>
              </ul>
              <p className="text-sm leading-relaxed mt-3 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <strong>Important:</strong> Sawa Wallet is a technology platform that facilitates cryptocurrency transactions. We do not provide financial advice, and we make no guarantees regarding profits, returns, or investment performance. All investment and financial decisions are made solely by you, and cryptocurrency investments carry inherent risks including potential loss of principal.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">3. Information We Collect</h2>
              
              <h3 className="text-base font-semibold text-charcoal mb-2 mt-4">3.1 Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                <li>Phone number (used as your primary identifier)</li>
                <li>Name (optional, for account personalization)</li>
                <li>Email address (for account recovery and notifications)</li>
                <li>Wallet addresses (public blockchain addresses)</li>
              </ul>

              <h3 className="text-base font-semibold text-charcoal mb-2 mt-4">3.2 Transaction Data</h3>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                <li>Transaction history (amounts, timestamps, recipients)</li>
                <li>Wallet balances</li>
                <li>DeFi protocol interactions</li>
                <li>Staking and investment activities</li>
              </ul>

              <h3 className="text-base font-semibold text-charcoal mb-2 mt-4">3.3 Technical Information</h3>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                <li>Device information (model, operating system, unique identifiers)</li>
                <li>IP address and location data</li>
                <li>App usage analytics and performance data</li>
                <li>Log data and error reports</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">4. How We Use Your Information</h2>
              <p className="text-sm leading-relaxed mb-2">We use the collected information for:</p>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                <li>Providing and maintaining wallet services</li>
                <li>Processing transactions and displaying transaction history</li>
                <li>Verifying user identity and preventing fraud</li>
                <li>Sending transaction notifications and account updates</li>
                <li>Improving app functionality and user experience</li>
                <li>Complying with legal obligations and regulatory requirements</li>
                <li>Providing customer support</li>
                <li>Analyzing usage patterns to enhance our services</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">5. How We Share Your Information</h2>
              <p className="text-sm leading-relaxed mb-2">We do not sell your personal information. We may share your data with:</p>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                <li><strong>Blockchain Networks:</strong> Transaction data is publicly visible on the Solana blockchain</li>
                <li><strong>Service Providers:</strong> Third-party services that help us operate (cloud hosting, analytics, customer support)</li>
                <li><strong>Legal Compliance:</strong> When required by law, court order, or government regulation</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">6. Data Security</h2>
              <p className="text-sm leading-relaxed mb-2">We implement industry-standard security measures to protect your information:</p>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                <li>End-to-end encryption for sensitive data</li>
                <li>Multi-signature wallet technology</li>
                <li>Secure cloud infrastructure with regular security audits</li>
                <li>Two-factor authentication options</li>
                <li>Regular security updates and patches</li>
              </ul>
              <p className="text-sm leading-relaxed mt-3 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <strong>Note:</strong> While we implement robust security measures, no method of transmission over the internet or electronic storage is 100% secure. You are responsible for maintaining the security of your device and account credentials.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">7. Data Retention</h2>
              <p className="text-sm leading-relaxed">
                We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Transaction data on the blockchain is permanent and cannot be deleted. When you close your account, we will delete or anonymize your personal information within 90 days, except where retention is required by law.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">8. Your Rights</h2>
              <p className="text-sm leading-relaxed mb-2">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
                <li>Export your transaction history</li>
                <li>Withdraw consent for data processing (where applicable)</li>
              </ul>
              <p className="text-sm leading-relaxed mt-3">
                To exercise these rights, please contact us at <a href="mailto:privacy@sawawallet.com" className="text-forest-green hover:underline">privacy@sawawallet.com</a>
              </p>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">9. International Data Transfers</h2>
              <p className="text-sm leading-relaxed">
                Your information may be transferred to and processed in countries outside your country of residence. We ensure that appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable data protection laws.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">10. Children&apos;s Privacy</h2>
              <p className="text-sm leading-relaxed">
                Sawa Wallet is not intended for use by anyone under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
              </p>
            </section>

            {/* Updates to Policy */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">11. Changes to This Privacy Policy</h2>
              <p className="text-sm leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. Your continued use of Sawa Wallet after any changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">12. Contact Us</h2>
              <p className="text-sm leading-relaxed mb-2">
                If you have questions or concerns about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 text-sm">
                <p className="mb-1"><strong>Email:</strong> <a href="mailto:privacy@sawawallet.com" className="text-forest-green hover:underline">privacy@sawawallet.com</a></p>
                <p className="mb-1"><strong>Support:</strong> <a href="mailto:support@sawawallet.com" className="text-forest-green hover:underline">support@sawawallet.com</a></p>
                <p><strong>Discord:</strong> <a href="https://discord.gg/TbvR5UcG" target="_blank" rel="noopener noreferrer" className="text-forest-green hover:underline">Join our community</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}


