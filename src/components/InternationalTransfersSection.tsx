'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/lib/hooks'

const countries = [
  // African Countries
  { name: 'Nigeria', flag: '🇳🇬' },
  { name: 'Ghana', flag: '🇬🇭' },
  { name: 'Kenya', flag: '🇰🇪' },
  { name: 'South Africa', flag: '🇿🇦' },
  { name: 'Egypt', flag: '🇪🇬' },
  { name: 'Morocco', flag: '🇲🇦' },
  { name: 'Tanzania', flag: '🇹🇿' },
  { name: 'Uganda', flag: '🇺🇬' },
  { name: 'Ethiopia', flag: '🇪🇹' },
  { name: 'Algeria', flag: '🇩🇿' },
  { name: 'Sudan', flag: '🇸🇩' },
  { name: 'Angola', flag: '🇦🇴' },
  { name: 'Mozambique', flag: '🇲🇿' },
  { name: 'Madagascar', flag: '🇲🇬' },
  { name: 'Cameroon', flag: '🇨🇲' },
  { name: 'Niger', flag: '🇳🇪' },
  { name: 'Burkina Faso', flag: '🇧🇫' },
  { name: 'Mali', flag: '🇲🇱' },
  { name: 'Malawi', flag: '🇲🇼' },
  { name: 'Zambia', flag: '🇿🇲' },
  { name: 'Somalia', flag: '🇸🇴' },
  { name: 'Senegal', flag: '🇸🇳' },
  { name: 'Chad', flag: '🇹🇩' },
  { name: 'Zimbabwe', flag: '🇿🇼' },
  { name: 'Guinea', flag: '🇬🇳' },
  { name: 'Rwanda', flag: '🇷🇼' },
  { name: 'Benin', flag: '🇧🇯' },
  { name: 'Tunisia', flag: '🇹🇳' },
  { name: 'Burundi', flag: '🇧🇮' },
  { name: 'South Sudan', flag: '🇸🇸' },
  { name: 'Togo', flag: '🇹🇬' },
  { name: 'Sierra Leone', flag: '🇸🇱' },
  { name: 'Libya', flag: '🇱🇾' },
  { name: 'Liberia', flag: '🇱🇷' },
  { name: 'Central African Republic', flag: '🇨🇫' },
  { name: 'Mauritania', flag: '🇲🇷' },
  { name: 'Eritrea', flag: '🇪🇷' },
  { name: 'Gambia', flag: '🇬🇲' },
  { name: 'Botswana', flag: '🇧🇼' },
  { name: 'Namibia', flag: '🇳🇦' },
  { name: 'Gabon', flag: '🇬🇦' },
  { name: 'Lesotho', flag: '🇱🇸' },
  { name: 'Guinea-Bissau', flag: '🇬🇼' },
  { name: 'Equatorial Guinea', flag: '🇬🇶' },
  { name: 'Mauritius', flag: '🇲🇺' },
  { name: 'Eswatini', flag: '🇸🇿' },
  { name: 'Djibouti', flag: '🇩🇯' },
  { name: 'Comoros', flag: '🇰🇲' },
  { name: 'Cape Verde', flag: '🇨🇻' },
  { name: 'Sao Tome and Principe', flag: '🇸🇹' },
  { name: 'Seychelles', flag: '🇸🇨' },
  // Non-African Countries
  { name: 'United Kingdom', flag: '🇬🇧' },
  { name: 'United States', flag: '🇺🇸' },
  { name: 'Netherlands', flag: '🇳🇱' }
]

export default function InternationalTransfersSection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-forest-green/3 via-transparent to-luxury-gold/3"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-forest-green/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-luxury-gold/5 rounded-full mix-blend-multiply filter blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-forest-green/2 to-luxury-gold/2 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-lg sm:text-xl font-bold text-charcoal mb-2">
            Send money across Africa and beyond
          </h2>
        </motion.div>

        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* First Marquee Line - Moving Right */}
          <div className="flex space-x-2 py-1.5">
            <div className="flex space-x-2 animate-marquee-right">
              {[...countries, ...countries].map((country, index) => (
                <div
                  key={`line1-${index}`}
                  className="flex items-center space-x-1.5 bg-gray-50 hover:bg-gray-100 rounded-full px-2.5 py-1 transition-colors duration-200 cursor-pointer flex-shrink-0"
                >
                  <span className="text-xs">{country.flag}</span>
                  <span className="font-medium text-gray-700 whitespace-nowrap text-[10px]">
                    {country.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Second Marquee Line - Moving Left */}
          <div className="flex space-x-2 py-1.5">
            <div className="flex space-x-2 animate-marquee-left">
              {[...countries, ...countries].map((country, index) => (
                <div
                  key={`line2-${index}`}
                  className="flex items-center space-x-1.5 bg-forest-green/5 hover:bg-forest-green/10 rounded-full px-2.5 py-1 transition-colors duration-200 cursor-pointer flex-shrink-0"
                >
                  <span className="text-xs">{country.flag}</span>
                  <span className="font-medium text-forest-green whitespace-nowrap text-[10px]">
                    {country.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Third Marquee Line - Moving Right */}
          <div className="flex space-x-2 py-1.5">
            <div className="flex space-x-2 animate-marquee-right-slow">
              {[...countries, ...countries].map((country, index) => (
                <div
                  key={`line3-${index}`}
                  className="flex items-center space-x-1.5 bg-luxury-gold/5 hover:bg-luxury-gold/10 rounded-full px-2.5 py-1 transition-colors duration-200 cursor-pointer flex-shrink-0"
                >
                  <span className="text-xs">{country.flag}</span>
                  <span className="font-medium text-luxury-gold whitespace-nowrap text-[10px]">
                    {country.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
