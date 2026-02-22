import { Card } from "@/components/ui/card"
import Image from "next/image"

// ⚠️ PLACEHOLDER DATA - Ganti dengan testimoni klien REAL
// TODO: Minta testimoni dari klien actual, foto real, dan data stats yang akurat
const TESTIMONIALS = [
  {
    name: "Dr. H. Ahmad Fauzi, M.Pd.I",
    role: "Kepala Sekolah",
    institution: "SMA Negeri 1 Makassar",
    location: "Makassar, Sulawesi Selatan",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    quote: "ELFAN System mengubah cara siswa kami mengakses literatur. Dengan 10,000+ koleksi digital tanpa perlu internet, perpustakaan kami kini menjadi favorit siswa. Hemat biaya dan sangat efisien!",
    rating: 5,
    stats: "1,200+ Siswa Aktif"
  },
  {
    name: "Ustadz Muhammad Ridwan, Lc",
    role: "Pengasuh Pondok",
    institution: "Pondok Pesantren Bahrul Ulum",
    location: "Tambakberas, Jombang",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    quote: "Alhamdulillah, dengan ELFAN System santri kami bisa mengakses ribuan kitab klasik dan referensi keislaman secara digital. Sangat membantu proses pembelajaran di pesantren modern.",
    rating: 5,
    stats: "800+ Santri"
  },
  {
    name: "Dra. Siti Nurhaliza, M.Si",
    role: "Kepala Perpustakaan",
    institution: "UNISSULA Semarang",
    location: "Semarang, Jawa Tengah",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    quote: "Sebagai perpustakaan universitas, kami membutuhkan sistem yang reliable dan scalable. ELFAN System memberikan solusi sempurna dengan akses cepat untuk ribuan mahasiswa tanpa lag.",
    rating: 5,
    stats: "5,000+ Mahasiswa"
  },
  {
    name: "Bapak Ir. Bambang Sutrisno",
    role: "Kepala Dinas",
    institution: "Dinas Perpustakaan Provinsi Sulawesi Selatan",
    location: "Makassar, Sulawesi Selatan",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    quote: "Implementasi ELFAN System di 23 perpustakaan daerah kami sangat sukses. Masyarakat kini bisa akses literatur berkualitas tanpa kendala internet. Ini adalah solusi smart city yang tepat.",
    rating: 5,
    stats: "23 Perpustakaan Daerah"
  },
  {
    name: "Ibu Hj. Fatimah Azzahra, S.Pd",
    role: "Kepala Sekolah",
    institution: "SDIT Luqman Al Hakim",
    location: "Sleman, DIY",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    quote: "Orang tua siswa sangat senang karena anak-anak bisa belajar dengan konten edukatif berkualitas tanpa khawatir konten negatif. ELFAN System aman dan terkontrol untuk anak-anak.",
    rating: 5,
    stats: "400+ Siswa SD/MI"
  },
  {
    name: "Prof. Dr. Abdullah Hasan, M.A",
    role: "Rektor",
    institution: "IAIN Surakarta (UIN Raden Mas Said)",
    location: "Surakarta, Jawa Tengah",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    quote: "ELFAN System mendukung riset mahasiswa dan dosen dengan akses e-journal dan referensi akademis yang lengkap. Investasi yang sangat worth it untuk pengembangan kampus.",
    rating: 5,
    stats: "3,500+ Civitas Akademika"
  }
] as const

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              Testimoni Klien
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Dipercaya oleh 228+ Institusi di Indonesia
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Bergabunglah dengan [ratusan/puluhan] sekolah, pesantren, masjid, dan universitas yang telah merasakan manfaat ELFAN System
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {TESTIMONIALS.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-slate-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Stats Badge */}
                <div className="inline-block px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-4">
                  {testimonial.stats}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                    <div className="text-sm text-slate-500">{testimonial.institution}</div>
                    <div className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-12 border-t border-slate-200">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">228+</div>
              <div className="text-slate-600">Institusi Terpercaya</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-slate-600">Kota di Indonesia</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
              <div className="text-slate-600">Rating Kepuasan</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-slate-600">Rekomendasi Klien</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
