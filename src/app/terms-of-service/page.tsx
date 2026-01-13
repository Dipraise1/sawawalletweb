import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service - Sawa Wallet',
  description: 'Read the terms and conditions for using Sawa Wallet services.',
}

export default function TermsOfService() {
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
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">Terms of Service</h1>
          <p className="text-xs text-gray-500 mb-8">Last Updated: December 25, 2025</p>

          <div className="prose prose-sm max-w-none space-y-6 text-gray-700">
            {/* Agreement */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">1. Agreement to Terms</h2>
              <p className="text-sm leading-relaxed">
                By accessing or using Sawa Wallet (&quot;the Service,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using the Service.
              </p>
            </section>

            {/* Service Description */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">2. Description of Service</h2>
              
              <h3 className="text-base font-semibold text-charcoal mb-2 mt-4">2.1 What Sawa Wallet Does</h3>
              <p className="text-sm leading-relaxed mb-2">Sawa Wallet is a non-custodial cryptocurrency wallet platform that provides:</p>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                <li>Digital wallet infrastructure for USDC cryptocurrency on Solana and EVM chains</li>
                <li>Peer-to-peer transfer services using phone number identifiers</li>
                <li>Local currency quotation system for simplified transactions</li>
                <li>Gateway to decentralized finance (DeFi) protocols</li>
                <li>Access to staking and liquidity pool opportunities</li>
                <li>Cross-border payment capabilities</li>
              </ul>

              <h3 className="text-base font-semibold text-charcoal mb-2 mt-4">2.2 What Sawa Wallet Does NOT Do</h3>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                <li>We do not hold, custody, or control your cryptocurrency assets</li>
                <li>We do not provide financial, investment, or tax advice</li>
                <li>We do not guarantee any specific returns or profits</li>
                <li>We are not a bank or financial institution</li>
                <li>We do not execute trades or transactions on your behalf</li>
              </ul>
            </section>

            {/* No Guarantees */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">3. No Guarantee of Profits</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded mb-3">
                <p className="text-sm leading-relaxed font-semibold mb-2">⚠️ IMPORTANT DISCLAIMER</p>
                <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                  <li><strong>No Profit Guarantees:</strong> Sawa Wallet makes no representations, warranties, or guarantees regarding profits, returns, or financial gains from using our services.</li>
                  <li><strong>Investment Risk:</strong> Cryptocurrency investments and DeFi activities carry significant risks, including potential loss of all invested capital.</li>
                  <li><strong>Market Volatility:</strong> Cryptocurrency prices are highly volatile and can fluctuate dramatically in short periods.</li>
                  <li><strong>Your Responsibility:</strong> You are solely responsible for all investment decisions and their outcomes.</li>
                  <li><strong>No Financial Advice:</strong> Nothing in our Service constitutes financial, investment, legal, or tax advice.</li>
                  <li><strong>Past Performance:</strong> Past performance of any assets or strategies does not guarantee future results.</li>
                </ul>
              </div>
              <p className="text-sm leading-relaxed">
                By using Sawa Wallet, you acknowledge that you understand these risks and agree to conduct your own research and due diligence before making any financial decisions.
              </p>
            </section>

            {/* Eligibility */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">4. Eligibility</h2>
              <p className="text-sm leading-relaxed mb-2">To use Sawa Wallet, you must:</p>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                <li>Be at least 18 years of age</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Not be located in a jurisdiction where use of our Service is prohibited</li>
                <li>Comply with all applicable laws and regulations in your jurisdiction</li>
                <li>Provide accurate and complete information during registration</li>
              </ul>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">5. User Responsibilities</h2>
              <p className="text-sm leading-relaxed mb-2">As a user of Sawa Wallet, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                <li>Maintain the security of your account and private keys</li>
                <li>Keep your device and app updated with the latest security patches</li>
                <li>Not share your account credentials with anyone</li>
                <li>Immediately notify us of any unauthorized access or security breach</li>
                <li>Use the Service only for lawful purposes</li>
                <li>Not engage in fraudulent, abusive, or illegal activities</li>
                <li>Comply with all applicable laws regarding cryptocurrency and financial transactions</li>
                <li>Pay all applicable fees and taxes related to your transactions</li>
              </ul>
            </section>

            {/* Private Keys and Recovery */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">6. Private Keys and Account Recovery</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-sm leading-relaxed mb-2">
                  <strong>Critical:</strong> Sawa Wallet is a non-custodial wallet. This means:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                  <li>You have complete control over your private keys and assets</li>
                  <li>We cannot access, freeze, or recover your funds</li>
                  <li>If you lose your recovery phrase or private keys, your funds may be permanently inaccessible</li>
                  <li>We cannot reset your password or provide account recovery if you lose your credentials</li>
                  <li>You are solely responsible for backing up your recovery phrase securely</li>
                </ul>
              </div>
            </section>

            {/* Fees */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">7. Fees and Payments</h2>
              <p className="text-sm leading-relaxed mb-2">Sawa Wallet may charge fees for certain services:</p>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                <li><strong>Transaction Fees:</strong> Network fees required by Solana and EVM blockchains (gas fees)</li>
                <li><strong>Service Fees:</strong> Optional fees for premium features or expedited services</li>
                <li><strong>DeFi Protocol Fees:</strong> Fees charged by third-party DeFi protocols (not controlled by us)</li>
              </ul>
              <p className="text-sm leading-relaxed mt-3">
                All fees will be clearly displayed before you confirm any transaction. Fees are subject to change with reasonable notice.
              </p>
            </section>

            {/* Prohibited Activities */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">8. Prohibited Activities</h2>
              <p className="text-sm leading-relaxed mb-2">You may not use Sawa Wallet to:</p>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                <li>Engage in money laundering, terrorist financing, or other illegal activities</li>
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Interfere with or disrupt the Service or its infrastructure</li>
                <li>Attempt to gain unauthorized access to other users&apos; accounts</li>
                <li>Use the Service for fraudulent or deceptive purposes</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Scrape, harvest, or collect user data without permission</li>
                <li>Impersonate another person or entity</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">9. Intellectual Property</h2>
              <p className="text-sm leading-relaxed">
                All content, features, and functionality of Sawa Wallet, including but not limited to text, graphics, logos, and software, are owned by Sawa Wallet and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">10. Third-Party Services and Links</h2>
              <p className="text-sm leading-relaxed">
                Sawa Wallet may integrate with or provide links to third-party DeFi protocols, exchanges, and services. We are not responsible for the content, accuracy, or practices of these third-party services. Your use of third-party services is at your own risk and subject to their respective terms and conditions.
              </p>
            </section>

            {/* Disclaimers */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">11. Disclaimers and Limitations of Liability</h2>
              
              <h3 className="text-base font-semibold text-charcoal mb-2 mt-4">11.1 Service Provided &quot;As Is&quot;</h3>
              <p className="text-sm leading-relaxed mb-3">
                Sawa Wallet is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>

              <h3 className="text-base font-semibold text-charcoal mb-2 mt-4">11.2 Limitation of Liability</h3>
              <p className="text-sm leading-relaxed mb-2">
                To the maximum extent permitted by law, Sawa Wallet and its affiliates shall not be liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                <li>Loss of funds due to market fluctuations or investment decisions</li>
                <li>Unauthorized access to your account due to loss of private keys</li>
                <li>Service interruptions, bugs, or technical issues</li>
                <li>Actions or omissions of third-party services or DeFi protocols</li>
                <li>Changes in cryptocurrency regulations or laws</li>
                <li>Blockchain network failures or disruptions</li>
                <li>Any indirect, incidental, consequential, or punitive damages</li>
              </ul>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">12. Indemnification</h2>
              <p className="text-sm leading-relaxed">
                You agree to indemnify and hold harmless Sawa Wallet, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the Service, violation of these Terms, or infringement of any third-party rights.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">13. Termination</h2>
              <p className="text-sm leading-relaxed mb-2">
                We reserve the right to suspend or terminate your access to Sawa Wallet at any time, with or without notice, for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                <li>Violation of these Terms of Service</li>
                <li>Fraudulent or illegal activity</li>
                <li>Risk to security or integrity of the Service</li>
                <li>Compliance with legal or regulatory requirements</li>
              </ul>
              <p className="text-sm leading-relaxed mt-3">
                You may stop using the Service at any time. Termination does not affect your ownership of cryptocurrency in your wallet.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">14. Changes to Terms</h2>
              <p className="text-sm leading-relaxed">
                We may update these Terms of Service from time to time. We will notify you of material changes by posting the updated Terms on our website and updating the &quot;Last Updated&quot; date. Your continued use of Sawa Wallet after changes become effective constitutes acceptance of the revised Terms.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">15. Governing Law and Dispute Resolution</h2>
              <p className="text-sm leading-relaxed mb-3">
                These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these Terms or your use of Sawa Wallet shall be resolved through binding arbitration, except where prohibited by law.
              </p>
              <p className="text-sm leading-relaxed">
                You agree to waive any right to a jury trial or to participate in a class action lawsuit against Sawa Wallet.
              </p>
            </section>

            {/* Severability */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">16. Severability</h2>
              <p className="text-sm leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-lg font-bold text-charcoal mb-3">17. Contact Information</h2>
              <p className="text-sm leading-relaxed mb-3">
                If you have questions or concerns about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 text-sm">
                <p className="mb-1"><strong>Email:</strong> <a href="mailto:legal@sawawallet.com" className="text-forest-green hover:underline">legal@sawawallet.com</a></p>
                <p className="mb-1"><strong>Support:</strong> <a href="mailto:support@sawawallet.com" className="text-forest-green hover:underline">support@sawawallet.com</a></p>
                <p><strong>Discord:</strong> <a href="https://discord.gg/TbvR5UcG" target="_blank" rel="noopener noreferrer" className="text-forest-green hover:underline">Join our community</a></p>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="bg-forest-green/5 border border-forest-green/20 rounded-lg p-4 mt-6">
              <h2 className="text-base font-bold text-charcoal mb-2">Acknowledgment</h2>
              <p className="text-sm leading-relaxed">
                By using Sawa Wallet, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. You also acknowledge that cryptocurrency investments carry significant risks and that Sawa Wallet makes no guarantees regarding profits or returns.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}


