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
  title: "Paket Perpustakaan Digital ELFAN System | Investasi Terjangkau dengan Bonus Aplikasi Premium",
  description: "Paket perpustakaan digital lengkap dengan bonus aplikasi wakaf premium. 4 pilihan paket untuk 30-100 user. Investasi sekali, manfaat selamanya. Konsultasi gratis!",
  keywords: [
    "paket perpustakaan digital",
    "harga perpustakaan digital",
    "biaya bookless library",
    "paket sistem perpustakaan",
    "paket perpustakaan digital murah",
    "investasi perpustakaan digital",
    "harga server perpustakaan",
    "bonus aplikasi wakaf",
    "paket perpustakaan digital sekolah",
    "paket perpustakaan digital pesantren",
    "paket perpustakaan digital universitas",
    "penawaran perpustakaan digital",
  ],
  openGraph: {
    title: "Paket Perpustakaan Digital ELFAN System | Investasi Terjangkau",
    description: "Bonus aplikasi wakaf premium! 4 pilihan paket untuk berbagai kebutuhan. Investasi sekali, manfaat selamanya.",
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
