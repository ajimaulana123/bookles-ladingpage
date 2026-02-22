import Image from "next/image"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SocialProofSection() {
  const testimonials = [
    {
      name: "[Nama Klien]",
      role: "[Jabatan]",
      institution: "[Nama Institusi]",
      location: "[Kota]",
      content: "[Testimoni lengkap dari klien tentang pengalaman menggunakan ELFAN System, manfaat yang dirasakan, dan dampak positif terhadap institusi mereka.]",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      rating: 5
    },
    {
      name: "[Nama Klien]",
      role: "[Jabatan]",
      institution: "[Nama Institusi]",
      location: "[Kota]",
      content: "[Testimoni lengkap dari klien tentang pengalaman menggunakan ELFAN System, manfaat yang dirasakan, dan dampak positif terhadap institusi mereka.]",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      rating: 5
    },
    {
      name: "[Nama Klien]",
      role: "[Jabatan]",
      institution: "[Nama Institusi]",
      location: "[Kota]",
      content: "[Testimoni lengkap dari klien tentang pengalaman menggunakan ELFAN System, manfaat yang dirasakan, dan dampak positif terhadap institusi mereka.]",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      rating: 5
    }
  ]

  const portfolioItems = [
    {
      title: "UMKT (Universitas Muhammadiyah Kalimantan Timur)",
      category: "Universitas",
      location: "Samarinda, Kalimantan Timur",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
      description: "Implementasi Bookless Library System dengan 10,000+ koleksi digital untuk mendukung riset mahasiswa"
    },
    {
      title: "Pondok Pesantren Al-Mukmin",
      category: "Pesantren",
      location: "Ngruki, Sukoharjo",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
      description: "Digitalisasi kitab kuning dan perpustakaan modern untuk santri penghafal Al-Qur'an"
    },
    {
      title: "SMA Negeri 1 Makassar",
      category: "Sekolah",
      location: "Makassar, Sulawesi Selatan",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      description: "Perpustakaan digital offline untuk meningkatkan literasi siswa tanpa biaya internet"
    }
  ]

  const stats = [
    { value: "228+", label: "Institusi Terpercaya", icon: "🏛️" },
    { value: "10", label: "Provinsi", icon: "📍" },
    { value: "50+", label: "Kota di Indonesia", icon: "�️ " },
    { value: "100%", label: "Tingkat Kepuasan", icon: "⭐" }
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              Dipercaya Ratusan Institusi
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Mereka Sudah Merasakan Manfaatnya
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Bergabunglah dengan ratusan institusi pendidikan dan keagamaan yang telah 
              bertransformasi dengan ELFAN System.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-green-600 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* ⚠️ PLACEHOLDER WARNING */}
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-12">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h3 className="font-bold text-yellow-900 mb-2">TODO: Ganti dengan Data Real</h3>
                <p className="text-sm text-yellow-800 leading-relaxed">
                  Section ini menggunakan placeholder. Ganti dengan testimoni dan portfolio real dari klien. 
                  Lihat panduan lengkap di <code className="bg-yellow-100 px-2 py-1 rounded">DATA-PLACEHOLDER-GUIDE.md</code>
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Apa Kata Mereka?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-slate-600 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-600">{testimonial.role}</div>
                      <div className="text-sm text-green-600">{testimonial.institution}</div>
                      <div className="text-xs text-slate-500">{testimonial.location}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Portfolio Implementasi
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {portfolioItems.map((item, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-green-600 text-white text-sm font-semibold rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-green-300 text-sm flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {item.location}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* View All CTA */}
            <div className="text-center">
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50">
                  Lihat Semua Portfolio
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>

          {/* Trust Banner */}
          <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Siap Bergabung dengan Mereka?
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Ratusan institusi telah mempercayai ELFAN System untuk transformasi perpustakaan digital mereka. 
              Giliran Anda sekarang!
            </p>
            <a 
              href="https://wa.me/6289604666665?text=Halo%20ELFAN%20System%2C%20saya%20tertarik%20setelah%20melihat%20testimoni%20dan%20portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
                Hubungi Kami Sekarang
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
