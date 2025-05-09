
import { Navbar } from "@/components/sections/Navbar"
import HeroSection from "@/components/sections/Hero"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { Testimonials } from "@/components/sections/Testimonials"
import { FAQSection } from "@/components/sections/FAQ"
import { Footer } from "@/components/sections/Footer"
import BestSellers from "@/components/sections/BestSellers"

export default function LandingPage() {

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar/>
      <main className="flex-1 relative z-10">
        <HeroSection/>
        <BestSellers/>

        {/* How It Works Section */}
        <HowItWorks/>

        {/* Testimonials Section */}
        {/* <Testimonials/> */}

        {/* FAQ Section */}
        <FAQSection/>

      </main>
      <Footer/>
    </div>
  )
}

