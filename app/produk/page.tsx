import { Metadata } from "next"
import { Navbar } from "@/components/sections/Navbar"
import { Footer } from "@/components/sections/Footer"
import { StickyCTA } from "@/components/sections/StickyCTA"
import { ProductHero } from "@/components/product/ProductHero"
import { ProductComparison } from "@/components/product/ProductComparison"
import { ProductFeatures } from "@/components/product/ProductFeatures"
import { ProductSpecs } from "@/components/product/ProductSpecs"
import { ProductUseCases } from "@/components/product/ProductUseCases"
import { ProductCTA } from "@/components/product/ProductCTA"

export const metadata: Metadata = {
  title: "Produk ELFAN System | Bookless & Hybrid Library Solution",
  description: "Solusi perpustakaan digital lengkap: Bookless Library System (tanpa buku fisik) dan Hybrid Library System (digitalisasi konvensional). Offline, multiplatform, user friendly.",
  keywords: [
    "bookless library system",
    "hybrid library system",
    "perpustakaan digital offline",
    "sistem perpustakaan tanpa buku",
    "perpustakaan digital islami",
    "intranet library system",
    "digitalisasi perpustakaan",
    "perpustakaan tanpa internet",
  ],
  openGraph: {
    title: "Produk ELFAN System - Solusi Perpustakaan Digital Lengkap",
    description: "Bookless & Hybrid Library System untuk universitas, sekolah, pesantren, dan pemerintahan",
    type: "website",
  },
}

export default function ProductPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ProductHero />
      <ProductComparison />
      <ProductFeatures />
      <ProductSpecs />
      <ProductUseCases />
      <ProductCTA />
      <Footer />
      <StickyCTA />
    </main>
  )
}
