import { Metadata } from "next"
import { Navbar } from "@/components/sections/Navbar"
import { Footer } from "@/components/sections/Footer"
import { StickyCTA } from "@/components/sections/StickyCTA"
import { PricingHero } from "@/components/pricing/PricingHero"
import { PricingTiers } from "@/components/pricing/PricingTiers"
import { PricingComparison } from "@/components/pricing/PricingComparison"
import { PricingFAQ } from "@/components/pricing/PricingFAQ"
import { PricingCTA } from "@/components/pricing/PricingCTA"

export const metadata: Metadata = {
  title: "Harga Perpustakaan Digital ELFAN System | Mulai Rp 20 Juta dengan Bonus Rp 88 Juta",
  description: "Harga transparan mulai Rp 20 juta untuk 30 user. Bonus aplikasi wakaf senilai Rp 88 juta! Hemat 81% dari total value Rp 108 juta. Investasi sekali, manfaat selamanya. Konsultasi gratis!",
  keywords: [
    "harga perpustakaan digital",
    "harga elfan system 20 juta",
    "biaya bookless library",
    "harga sistem perpustakaan 30 user",
    "paket perpustakaan digital murah",
    "investasi perpustakaan digital",
    "harga server perpustakaan",
    "bonus aplikasi wakaf 88 juta",
    "hemat 81 persen perpustakaan digital",
    "harga perpustakaan digital sekolah",
    "harga perpustakaan digital pesantren",
    "harga perpustakaan digital universitas",
  ],
  openGraph: {
    title: "Harga Perpustakaan Digital ELFAN System | Mulai Rp 20 Juta",
    description: "Bonus aplikasi wakaf Rp 88 juta! Hemat 81% dari total value. Investasi sekali, manfaat selamanya.",
    type: "website",
  },
}

export default function HargaPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PricingHero />
      <PricingTiers />
      <PricingComparison />
      <PricingFAQ />
      <PricingCTA />
      <Footer />
      <StickyCTA />
    </main>
  )
}
