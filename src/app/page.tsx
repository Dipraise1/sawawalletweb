import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import InternationalTransfersSection from '@/components/InternationalTransfersSection'
import InvestmentSection from '@/components/InvestmentSection'
import BuyWithdrawSection from '@/components/BuyWithdrawSection'
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
      <BuyWithdrawSection />
      <TrustSection />
      <Footer />
    </main>
  )
}
