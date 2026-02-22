import { Metadata } from "next"
import { Navbar } from "@/components/sections/Navbar"
import { Footer } from "@/components/sections/Footer"
import { StickyCTA } from "@/components/sections/StickyCTA"
import { ContactHero } from "@/components/contact/ContactHero"
import { ContactInfo } from "@/components/contact/ContactInfo"
import { ContactMap } from "@/components/contact/ContactMap"
import { ContactForm } from "@/components/contact/ContactForm"
import { ContactCTA } from "@/components/contact/ContactCTA"

export const metadata: Metadata = {
  title: "Hubungi Kami - ELFAN System | Konsultasi Perpustakaan Digital",
  description: "Hubungi ELFAN System untuk konsultasi perpustakaan digital. Lokasi: Kampung IT Solo, Sukoharjo. WhatsApp: 0896-0466-6665. Kunjungi showroom kami.",
  keywords: [
    "kontak elfan system",
    "hubungi elfan",
    "konsultasi perpustakaan digital",
    "alamat elfan system",
    "kampung it solo",
    "showroom perpustakaan digital",
    "whatsapp elfan system",
  ],
  openGraph: {
    title: "Hubungi Kami - ELFAN System",
    description: "Konsultasi gratis perpustakaan digital. Kunjungi showroom kami di Kampung IT Solo.",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactHero />
      <ContactInfo />
      <ContactMap />
      <ContactForm />
      <ContactCTA />
      <Footer />
      <StickyCTA />
    </main>
  )
}
