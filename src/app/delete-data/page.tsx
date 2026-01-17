'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function DeleteData() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    phoneNumber: '',
    email: '',
    reason: '',
    confirmation: false,
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      setTimeout(() => {
        setFormStatus('idle')
        setFormData({ phoneNumber: '', email: '', reason: '', confirmation: false })
      }, 5000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

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
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">Request Data Deletion</h1>
          <p className="text-xs text-gray-500 mb-8">Last Updated: December 25, 2025</p>

          {/* Important Notice */}
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg mb-6">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-sm font-semibold text-red-800 mb-2">⚠️ Important: Permanent Action</h3>
                <p className="text-xs text-red-700 leading-relaxed mb-2">
                  Requesting data deletion is a permanent action. Once your data is deleted, it cannot be recovered. Please ensure you have exported any information you need before proceeding.
                </p>
                <p className="text-xs text-red-700 leading-relaxed">
                  <strong>Note:</strong> Transaction data on the blockchain (Solana and EVM chains) is permanent and cannot be deleted. Only personal information stored in our systems will be removed.
                </p>
              </div>
            </div>
          </div>

          {/* What Will Be Deleted */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-charcoal mb-3">What Data Will Be Deleted</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Upon approval of your deletion request, we will permanently delete the following information from our systems:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 ml-4 mb-4">
              <li>Your account profile information (name, email, phone number)</li>
              <li>App usage analytics and performance data</li>
              <li>Customer support communications</li>
              <li>Marketing preferences and communication history</li>
              <li>Device information and identifiers</li>
              <li>IP address logs (after retention period)</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-blue-800 mb-2">What Cannot Be Deleted</h3>
              <ul className="list-disc list-inside space-y-1 text-xs text-blue-700 ml-4">
                <li><strong>Blockchain Transactions:</strong> All transaction data on Solana and EVM blockchains is permanent and publicly visible. This includes transaction history, wallet addresses, and amounts.</li>
                <li><strong>Legal Records:</strong> We may retain certain information as required by law, regulation, or for legal compliance purposes (e.g., fraud prevention, tax records).</li>
                <li><strong>Anonymized Data:</strong> Aggregated, anonymized data that cannot identify you may be retained for analytics purposes.</li>
              </ul>
            </div>
          </section>

          {/* Process */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-charcoal mb-3">Deletion Process</h2>
            <ol className="list-decimal list-inside space-y-3 text-sm text-gray-700 ml-4">
              <li className="leading-relaxed">
                <strong>Submit Request:</strong> Complete and submit the form below with your account information.
              </li>
              <li className="leading-relaxed">
                <strong>Verification:</strong> We will verify your identity to ensure the request is legitimate. This may take 1-3 business days.
              </li>
              <li className="leading-relaxed">
                <strong>Processing:</strong> Once verified, we will process your deletion request within 30 days as required by GDPR and other data protection regulations.
              </li>
              <li className="leading-relaxed">
                <strong>Confirmation:</strong> You will receive an email confirmation once your data has been deleted.
              </li>
            </ol>
          </section>

          {/* Request Form */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-lg font-bold text-charcoal mb-4">Submit Deletion Request</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number (Associated with Account) *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-green/50 focus:border-transparent transition-all duration-300"
                  placeholder="+1234567890"
                />
                <p className="text-xs text-gray-500 mt-1">Enter the phone number associated with your Sawa Wallet account</p>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address (Associated with Account) *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-green/50 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
                <p className="text-xs text-gray-500 mt-1">We'll use this email to verify your identity and send confirmation</p>
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for Deletion (Optional)
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  rows={4}
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-green/50 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Help us understand why you're requesting data deletion (optional)"
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="confirmation"
                  name="confirmation"
                  required
                  checked={formData.confirmation}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-forest-green border-gray-300 rounded focus:ring-forest-green focus:ring-2"
                />
                <label htmlFor="confirmation" className="ml-3 text-sm text-gray-700">
                  I understand that this action is permanent and cannot be undone. I confirm that I want to delete my personal data from Sawa Wallet's systems. I acknowledge that blockchain transaction data cannot be deleted. *
                </label>
              </div>

              <motion.button
                type="submit"
                disabled={formStatus === 'submitting' || !formData.confirmation}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-600/25 transition-all duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: formStatus === 'submitting' ? 1 : 1.02 }}
                whileTap={{ scale: formStatus === 'submitting' ? 1 : 0.98 }}
              >
                {formStatus === 'submitting' ? 'Submitting Request...' : 'Submit Deletion Request'}
              </motion.button>

              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-4"
                >
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-sm text-green-700 font-medium">Request submitted successfully!</p>
                      <p className="text-xs text-green-600 mt-1">
                        We've received your data deletion request. Our team will verify your identity and process your request within 30 days. You will receive a confirmation email once the deletion is complete.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {formStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 rounded-lg p-4"
                >
                  <p className="text-sm text-red-700 font-medium">An error occurred. Please try again or contact support.</p>
                </motion.div>
              )}
            </form>
          </section>

          {/* Alternative Contact */}
          <section className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-lg font-bold text-charcoal mb-3">Alternative Methods</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              You can also request data deletion by contacting us directly:
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-sm">
              <p className="mb-2"><strong>Email:</strong> <a href="mailto:privacy@sawawallet.com" className="text-forest-green hover:underline">privacy@sawawallet.com</a></p>
              <p className="mb-2"><strong>Support:</strong> <a href="mailto:support@sawawallet.com" className="text-forest-green hover:underline">support@sawawallet.com</a></p>
              <p><strong>Subject Line:</strong> "Data Deletion Request"</p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-lg font-bold text-charcoal mb-3">Your Data Protection Rights</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Under GDPR and other data protection laws, you have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 ml-4">
              <li>Request access to your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (right to be forgotten)</li>
              <li>Object to processing of your data</li>
              <li>Request restriction of processing</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed mt-4">
              For more information about your rights, please see our <Link href="/privacy-policy" className="text-forest-green hover:underline">Privacy Policy</Link>.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
