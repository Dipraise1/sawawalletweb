'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/lib/hooks'

const paymentMethods = [
  {
    title: "Bank Transfer",
    description: "Direct transfer from your Nigerian bank account",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-forest-green">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M2 10H22" stroke="currentColor" strokeWidth="2"/>
        <path d="M7 14H17" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    fees: "0.5%",
    speed: "Instant"
  },
  {
    title: "Card Payment",
    description: "Visa, Mastercard, and local debit cards accepted",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-forest-green">
        <rect x="1" y="4" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M1 10H23" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    fees: "2.5%",
    speed: "Instant"
  },
  {
    title: "Mobile Money",
    description: "OPay, PalmPay, and other mobile wallets",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-forest-green">
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 20.7122 8.75608 20.1676 9.45768C19.623 10.1593 18.8604 10.6597 18 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    fees: "1.5%",
    speed: "1-2 min"
  },
  {
    title: "Crypto Exchange",
    description: "Direct swap from Bitcoin, Ethereum, and other cryptos",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-forest-green">
        <path d="M7 4V20M17 4V20M3 8H7M3 16H7M17 8H21M17 16H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    fees: "0.1%",
    speed: "5-10 min"
  }
]

const withdrawalMethods = [
  {
    title: "Bank Account",
    description: "Withdraw directly to your Nigerian bank account",
    time: "1-3 business days",
    minAmount: "₦1,000"
  },
  {
    title: "Mobile Wallet",
    description: "Send to OPay, PalmPay, and other mobile wallets",
    time: "Instant",
    minAmount: "₦500"
  },
  {
    title: "Crypto Wallet",
    description: "Send to external crypto wallets",
    time: "5-15 minutes",
    minAmount: "$10"
  }
]

export default function BuyWithdrawSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="buy-withdraw" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-3 sm:mb-4">
            Buy & Withdraw USDC
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Multiple ways to buy and withdraw USDC. Choose the method that works best for you.
          </p>
        </motion.div>

        {/* Buy Methods */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-8 text-center">
            How to Buy USDC
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className="card group text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-forest-green/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h4 className="text-lg font-bold text-charcoal mb-2">
                  {method.title}
                </h4>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {method.description}
                </p>
                <div className="flex justify-between text-sm">
                  <div>
                    <span className="text-gray-500">Fee:</span>
                    <span className="font-semibold text-forest-green ml-1">{method.fees}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Speed:</span>
                    <span className="font-semibold text-charcoal ml-1">{method.speed}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Withdrawal Methods */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-8 text-center">
            How to Withdraw USDC
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {withdrawalMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className="card group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  duration: 0.6, 
                  delay: (index + 4) * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <h4 className="text-lg font-bold text-charcoal mb-3">
                  {method.title}
                </h4>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {method.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Processing Time:</span>
                    <span className="font-semibold text-charcoal">{method.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Minimum:</span>
                    <span className="font-semibold text-forest-green">{method.minAmount}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-forest-green to-forest-green/80 rounded-2xl p-8 sm:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-forest-green/90 mb-6 max-w-2xl mx-auto">
              Download Sawa Wallet and start buying, staking, and earning with USDC today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-forest-green px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Download App
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-forest-green transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
