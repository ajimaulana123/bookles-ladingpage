import { Metadata } from "next"
import { Navbar } from "@/components/sections/Navbar"
import { Footer } from "@/components/sections/Footer"
import { StickyCTA } from "@/components/sections/StickyCTA"
import { PortfolioHero } from "@/components/portfolio/PortfolioHero"
import { PortfolioJourney } from "@/components/portfolio/PortfolioJourney"
import { PortfolioStats } from "@/components/portfolio/PortfolioStats"
import { PortfolioCTA } from "@/components/portfolio/PortfolioCTA"

export const metadata: Metadata = {
  title: "Portfolio Implementasi ELFAN System | Jejak Kepercayaan Nasional",
  description: "Lihat implementasi ELFAN System di Kampung IT Solo, UMKT Kalimantan, Pesantren Bekasi, Bojonegoro, Science Center Bandung. Dipercaya universitas, pesantren, dan pemerintah daerah.",
  keywords: [
    "implementasi perpustakaan digital",
    "case study bookless library",
    "portfolio elfan system",
    "perpustakaan digital universitas",
    "perpustakaan digital pesantren",
    "smart city perpustakaan",
    "implementasi bekasi bojonegoro bandung",
    "pusat riset teknologi pendidikan islam solo",
  ],
  openGraph: {
    title: "Portfolio Implementasi ELFAN System - Membangun Peradaban Digital Nasional",
    description: "Dipercaya oleh universitas, pesantren, dan pemerintah daerah di seluruh Indonesia",
    type: "website",
  },
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PortfolioHero />
      <PortfolioJourney />
      <PortfolioStats />
      <PortfolioCTA />
      <Footer />
      <StickyCTA />
    </main>
  )
}
