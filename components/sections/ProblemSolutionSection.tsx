import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function ProblemSolutionSection() {
  const problems = [
    {
      icon: "💰",
      title: "Biaya Tinggi",
      description: "Pembangunan perpustakaan konvensional membutuhkan investasi besar untuk gedung, rak, dan pembelian buku fisik yang mahal.",
      impact: "Ratusan juta - miliaran"
    },
    {
      icon: "📦",
      title: "Maintenance Kompleks",
      description: "Perawatan buku fisik, pengelolaan ruang, dan biaya operasional yang terus meningkat setiap tahun.",
      impact: "Puluhan juta/tahun"
    },
    {
      icon: "🔍",
      title: "Akses Terbatas",
      description: "Koleksi terbatas, jam operasional terbatas, dan kesulitan mencari referensi yang dibutuhkan dengan cepat.",
      impact: "Produktivitas -60%"
    }
  ]

  const solutions = [
    {
      id: "bookless",
      title: "Bookless Library System",
      subtitle: "Perpustakaan Digital Tanpa Batas",
      description: "Solusi perpustakaan 100% digital tanpa memerlukan buku fisik, gedung khusus, atau ruang penyimpanan besar.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&q=80",
      features: [
        "10,000+ koleksi digital siap akses",
        "Tanpa biaya internet (Intranet)",
        "Hemat 70% biaya operasional",
        "Ramah lingkungan - Go Green",
        "Setup dalam 1 hari"
      ],
      badge: "Paling Populer",
      color: "green"
    },
    {
      id: "hybrid",
      title: "Hybrid Library System",
      subtitle: "Modernisasi Perpustakaan Konvensional",
      description: "Digitalisasi koleksi buku fisik Anda dengan backup digital untuk proteksi dan akses yang lebih fleksibel.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
      features: [
        "Backup digital koleksi fisik",
        "Integrasi katalog digital & fisik",
        "Proteksi dari kerusakan",
        "Akses fleksibel: fisik atau digital",
        "Transisi bertahap ke digital"
      ],
      badge: "Best Value",
      color: "blue"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* PROBLEM SECTION */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
                Tantangan Perpustakaan Konvensional
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Masalah yang Sering Dihadapi
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Perpustakaan konvensional menghadapi berbagai kendala yang menghambat 
                perkembangan literasi dan akses informasi.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300 border-2 border-red-100">
                  <div className="text-5xl mb-4">{problem.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{problem.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{problem.description}</p>
                  <div className="inline-block px-4 py-2 bg-red-50 text-red-700 rounded-lg text-sm font-semibold">
                    {problem.impact}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* SOLUTION DIVIDER */}
          <div className="relative py-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-slate-200"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full shadow-lg">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-xl font-bold">Solusi ELFAN SYSTEM</span>
                </div>
              </div>
            </div>
          </div>

          {/* SOLUTION SECTION */}
          <div className="mt-20">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                Solusi Inovatif & Terjangkau
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Transformasi Digital yang Tepat
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Dua sistem perpustakaan digital yang dirancang untuk memenuhi kebutuhan 
                berbagai jenis institusi pendidikan dan keagamaan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {solutions.map((solution, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                  {/* Image Header */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-4 py-2 rounded-full text-sm font-bold text-white ${
                        solution.color === 'green' ? 'bg-green-600' : 'bg-blue-600'
                      }`}>
                        {solution.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-1">{solution.title}</h3>
                      <p className="text-green-300 text-sm">{solution.subtitle}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-slate-600 mb-6 leading-relaxed">{solution.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/produk">
                      <Button className={`w-full ${
                        solution.color === 'green' 
                          ? 'bg-green-600 hover:bg-green-700' 
                          : 'bg-blue-600 hover:bg-blue-700'
                      }`}>
                        Pelajari Lebih Lanjut
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center bg-gradient-to-r from-slate-50 to-green-50 rounded-2xl p-8">
              <p className="text-lg text-slate-700 mb-4">
                Tidak yakin sistem mana yang tepat untuk institusi Anda?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/harga">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Lihat Harga & Paket
                  </Button>
                </Link>
                <a 
                  href="https://wa.me/6289604666665?text=Halo%20ELFAN%20System%2C%20saya%20ingin%20konsultasi%20tentang%20solusi%20perpustakaan%20digital"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50">
                    Konsultasi Gratis
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
