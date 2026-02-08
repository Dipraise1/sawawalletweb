'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      setTimeout(() => setFormStatus('idle'), 5000)
    }, 1500)
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
      <h2 className="text-lg font-bold text-charcoal mb-4">Send us a Message</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-green/50 focus:border-transparent transition-all duration-300"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-green/50 focus:border-transparent transition-all duration-300"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-xs font-medium text-gray-700 mb-2">
            Subject *
          </label>
          <select
            id="subject"
            required
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest-green/50 focus:border-transparent transition-all duration-300"
          >
            <option value="">Select a topic</option>
            <option value="investor">💰 Investor Inquiry</option>
            <option value="partnership">🤝 Partnership Opportunity</option>
            <option value="support">Technical Support</option>
            <option value="account">Account Issues</option>
            <option value="transactions">Transaction Help</option>
            <option value="feedback">Feedback & Suggestions</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            required
            rows={6}
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-green/50 focus:border-transparent transition-all duration-300 resize-none"
            placeholder="Tell us how we can help..."
          />
        </div>

        <motion.button
          type="submit"
          disabled={formStatus === 'sending'}
          className="w-full bg-gradient-to-r from-forest-green to-forest-green/90 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-forest-green/25 transition-all duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: formStatus === 'sending' ? 1 : 1.02 }}
          whileTap={{ scale: formStatus === 'sending' ? 1 : 0.98 }}
        >
          {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
        </motion.button>

        {formStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-200 rounded-lg p-4 text-center"
          >
            <p className="text-sm text-green-700 font-medium">✓ Message sent successfully!</p>
            <p className="text-xs text-green-600 mt-1">We&apos;ll get back to you within 24-48 hours.</p>
          </motion.div>
        )}
      </form>

      <p className="text-xs text-gray-500 mt-4 text-center">
        Expected response time: 24-48 hours
      </p>
    </div>
  )
}
