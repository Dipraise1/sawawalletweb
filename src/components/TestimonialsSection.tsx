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
    text: "Sawa Wallet changed how I send money to my family. No complex crypto—just my phone number.",
    highlight: "Perfect for family transfers"
  },
  {
    name: "Fatima Hassan",
    role: "Business Owner",
    location: "Kano, Nigeria", 
    avatar: "/testimonials/fatima.jpg",
    rating: 5,
    text: "Perfect for my business. Paying suppliers across Africa feels like sending a WhatsApp message.",
    highlight: "Great for business payments"
  },
  {
    name: "David Okonkwo",
    role: "Student",
    location: "Abuja, Nigeria",
    avatar: "/testimonials/david.jpg", 
    rating: 5,
    text: "So simple as a student. No passwords, no app store downloads. Just works with my number.",
    highlight: "Student-friendly"
  },
  {
    name: "Grace Mwangi",
    role: "Nurse",
    location: "Nairobi, Kenya",
    avatar: "/testimonials/grace.jpg",
    rating: 5,
    text: "I send money to my parents every month. No surprises, no hidden fees—just transparent pricing.",
    highlight: "Transparent pricing"
  },
  {
    name: "Emmanuel Boateng",
    role: "Freelancer",
    location: "Accra, Ghana",
    avatar: "/testimonials/emmanuel.jpg",
    rating: 5,
    text: "I work with clients worldwide. Sawa Wallet helps me convert currencies and send money home instantly.",
    highlight: "Perfect for freelancers"
  },
  {
    name: "Aisha Ibrahim",
    role: "Teacher",
    location: "Kaduna, Nigeria",
    avatar: "/testimonials/aisha.jpg",
    rating: 5,
    text: "I was skeptical about crypto, but Sawa Wallet made it simple. No worrying about exchange rates or fees.",
    highlight: "Crypto made simple"
  }
]

export default function TestimonialsSection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-forest-green/3 via-transparent to-luxury-gold/3"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-forest-green/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-luxury-gold/5 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-forest-green/2 to-luxury-gold/2 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-charcoal mb-2 leading-tight">
            Built for{' '}
            <span className="text-forest-green relative">
              early adopters
              <motion.div
                className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-luxury-gold rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </h2>
          <p className="text-xs text-gray-500 max-w-3xl mx-auto leading-relaxed">
            See what early supporters are saying
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="group bg-white/80 backdrop-blur-sm rounded-xl p-5 sm:p-4 shadow-sm border border-white/20 hover:shadow-md transition-all duration-300 min-h-[200px] flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.3 + (index * 0.1),
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -6,
                scale: 1.01,
                transition: { duration: 0.3 }
              }}
            >
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest-green/5 via-transparent to-luxury-gold/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex-1 flex flex-col">
                {/* Rating */}
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 sm:w-2.5 sm:h-2.5 text-luxury-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 leading-relaxed mb-4 text-xs flex-1">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                {/* Highlight Badge */}
                <div className="inline-block px-2 py-0.5 bg-gradient-to-r from-forest-green/10 to-luxury-gold/10 text-forest-green text-[9px] font-semibold rounded-full mb-3 self-start">
                  {testimonial.highlight}
                </div>

                {/* User Info */}
                <div className="flex items-center pt-2 border-t border-gray-100">
                  <div className="w-10 h-10 sm:w-9 sm:h-9 bg-gradient-to-br from-forest-green to-luxury-gold rounded-full flex items-center justify-center text-white font-bold text-xs mr-3 flex-shrink-0">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-charcoal text-xs truncate">{testimonial.name}</div>
                    <div className="text-gray-500 text-[10px] truncate">{testimonial.role}</div>
                    <div className="text-gray-400 text-[9px] truncate">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-forest-green to-forest-green/90 rounded-xl p-6 sm:p-8 text-white max-w-4xl mx-auto shadow-lg">
            <h3 className="text-base sm:text-lg font-bold mb-2">
              Be among the first
            </h3>
            <p className="text-white/90 mb-5 sm:mb-4 max-w-2xl mx-auto text-xs px-2 sm:px-0">
              Join our waitlist for early access when we launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto sm:max-w-none">
              <motion.a 
                href="#download"
                className="bg-white text-forest-green px-6 sm:px-5 py-2.5 sm:py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center text-xs touch-manipulation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Waitlist
              </motion.a>
              <motion.a 
                href="https://discord.gg/TbvR5UcG"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white px-6 sm:px-5 py-2.5 sm:py-2 rounded-lg font-semibold hover:bg-white hover:text-forest-green transition-colors text-center text-xs touch-manipulation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Discord Community
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
