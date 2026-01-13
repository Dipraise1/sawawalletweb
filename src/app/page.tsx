import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import InternationalTransfersSection from '@/components/InternationalTransfersSection'
import InvestmentSection from '@/components/InvestmentSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import TrustSection from '@/components/TrustSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <InternationalTransfersSection />
      <InvestmentSection />
      <TestimonialsSection />
      <TrustSection />
      <Footer />
    </main>
  )
}
