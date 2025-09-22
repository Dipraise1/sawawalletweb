'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/lib/hooks'
import Image from 'next/image'

const testimonials = [
  {
    name: "Adebayo Ogunlesi",
    role: "Software Engineer",
    location: "Lagos, Nigeria",
    avatar: "/testimonials/adebayo.jpg",
    rating: 5,
    text: "Sawa Wallet changed how I send money to my family. No more complex crypto interfaces - just my phone number and I'm done. The ₦200 example is exactly how I think about money.",
    highlight: "Perfect for family transfers"
  },
  {
    name: "Fatima Hassan",
    role: "Business Owner",
    location: "Kano, Nigeria", 
    avatar: "/testimonials/fatima.jpg",
    rating: 5,
    text: "I run a small business and need to pay suppliers across Africa. Sawa Wallet makes it feel like sending a WhatsApp message. The local currency quotes help me budget better.",
    highlight: "Great for business payments"
  },
  {
    name: "David Okonkwo",
    role: "Student",
    location: "Abuja, Nigeria",
    avatar: "/testimonials/david.jpg", 
    rating: 5,
    text: "As a student, I need to send money to friends and family frequently. Sawa Wallet is so simple - no passwords, no app store downloads. Just works with my number.",
    highlight: "Student-friendly"
  },
  {
    name: "Grace Mwangi",
    role: "Nurse",
    location: "Nairobi, Kenya",
    avatar: "/testimonials/grace.jpg",
    rating: 5,
    text: "I send money to my parents in Nigeria every month. With Sawa Wallet, I can see exactly how much ₦50,000 is worth in USDC. No surprises, no hidden fees.",
    highlight: "Transparent pricing"
  },
  {
    name: "Emmanuel Boateng",
    role: "Freelancer",
    location: "Accra, Ghana",
    avatar: "/testimonials/emmanuel.jpg",
    rating: 5,
    text: "I work with clients worldwide and get paid in different currencies. Sawa Wallet helps me convert everything to USDC and send to family in Nigeria instantly.",
    highlight: "Perfect for freelancers"
  },
  {
    name: "Aisha Ibrahim",
    role: "Teacher",
    location: "Kaduna, Nigeria",
    avatar: "/testimonials/aisha.jpg",
    rating: 5,
    text: "I was skeptical about crypto, but Sawa Wallet made it so simple. I can send ₦5,000 to my sister in London without worrying about exchange rates or fees.",
    highlight: "Crypto made simple"
  }
]

const stats = [
  { number: "50K+", label: "Active Users", icon: "👥" },
  { number: "₦2.5B+", label: "Volume Transferred", icon: "💰" },
  { number: "99.9%", label: "Uptime", icon: "⚡" },
  { number: "4.9/5", label: "User Rating", icon: "⭐" }
]

export default function TestimonialsSection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-forest-green/3 via-transparent to-luxury-gold/3"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-forest-green/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-luxury-gold/5 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-forest-green/2 to-luxury-gold/2 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-3xl sm:text-4xl mb-2">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold text-forest-green mb-1">{stat.number}</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-6 leading-tight">
            Loved by{' '}
            <span className="text-forest-green relative">
              thousands
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-luxury-gold rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See what our users are saying about their experience with Sawa Wallet
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.3 + (index * 0.1),
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest-green/5 via-transparent to-luxury-gold/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-luxury-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                  "{testimonial.text}"
                </blockquote>

                {/* Highlight Badge */}
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-forest-green/10 to-luxury-gold/10 text-forest-green text-xs font-semibold rounded-full mb-4">
                  {testimonial.highlight}
                </div>

                {/* User Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-forest-green to-luxury-gold rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-gray-500 text-xs sm:text-sm">{testimonial.role}</div>
                    <div className="text-gray-400 text-xs">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-forest-green to-forest-green/90 rounded-2xl p-8 sm:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Join thousands of satisfied users
            </h3>
            <p className="text-forest-green/90 mb-6 max-w-2xl mx-auto text-lg">
              Start sending money the way you already do - simple, fast, and secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-white text-forest-green px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Free
              </motion.button>
              <motion.button 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-forest-green transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read More Reviews
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
