import { Navbar } from "@/components/sections/Navbar"
import { HeroSection } from "@/components/sections/HeroSection"
import { ProblemSolutionSection } from "@/components/sections/ProblemSolutionSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { SocialProofSection } from "@/components/sections/SocialProofSection"
import ClientsTeaser from "@/components/sections/ClientsTeaser"
import { ValuePropositionSection } from "@/components/sections/ValuePropositionSection"
import { HowItWorksSection } from "@/components/sections/HowItWorksSection"
import { WhoWeServeSection } from "@/components/sections/WhoWeServeSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { LegalitySection } from "@/components/sections/LegalitySection"
import { ClosingSection } from "@/components/sections/ClosingSection"
import { CTASection } from "@/components/sections/CTASection"
import { Footer } from "@/components/sections/Footer"
import { StickyCTA } from "@/components/sections/StickyCTA"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* SECTION 1: Hero - Hook & Value Proposition */}
      <HeroSection />
      
      {/* SECTION 2: Problem + Solution - Pain Points & Core Offering */}
      <ProblemSolutionSection />
      
      {/* SECTION 3: Features - Key Benefits */}
      <FeaturesSection />
      
      {/* SECTION 4: Social Proof - Testimonials + Portfolio */}
      <SocialProofSection />
      
      {/* SECTION 5: Clients Teaser - Featured Clients (Link to /klien) */}
      <ClientsTeaser />
      
      {/* SECTION 6: Value Proposition - Collection + Specs */}
      <ValuePropositionSection />
      
      {/* SECTION 7: How It Works - Ease of Use */}
      <HowItWorksSection />
      
      {/* SECTION 8: Who We Serve - Mission + Target Market */}
      <WhoWeServeSection />
      
      {/* SECTION 9: FAQ - Frequently Asked Questions */}
      <FAQSection />
      
      {/* SECTION 10: Legality - Trademark Certificate & Legal Documents */}
      <LegalitySection />
      
      {/* SECTION 11: Closing - Emotional Connection */}
      <ClosingSection />
      
      {/* SECTION 12: Final CTA - Action */}
      <CTASection />
      
      {/* Footer & Sticky CTA */}
      <Footer />
      <StickyCTA />
    </main>
  )
}
