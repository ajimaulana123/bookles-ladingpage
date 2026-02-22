import Image from "next/image"
import { Card } from "@/components/ui/card"

export function   LegalitySection() {
  const legalDocs = [
    {
      title: "Sertifikat Merek ELFAN",
      number: "IDM000814737",
      issuer: "Kementerian Hukum dan HAM RI",
      date: "29 Maret 2018",
      icon: "®️",
      image: "/images/legal/sertifikat-merek-elfan.jpg",
      imageAlt: "Sertifikat Merek ELFAN terdaftar resmi Kemenkumham RI",
      featured: true
    },
    {
      title: "Akta Pendirian",
      number: "AHU-0123456.AH.01.01.Tahun 2018",
      issuer: "Notaris Kota Surakarta",
      icon: "📜",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
      imageAlt: "Akta Pendirian Alwustho Technologies"
    },
    {
      title: "SK Kemenkumham",
      number: "AHU-0123456.AH.01.01.Tahun 2018",
      issuer: "Kementerian Hukum dan HAM RI",
      icon: "⚖️",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
      imageAlt: "SK Kemenkumham Alwustho Technologies"
    },
    {
      title: "NIB (Nomor Induk Berusaha)",
      number: "1234567890123",
      issuer: "OSS - Kementerian Investasi/BKPM",
      icon: "🏢",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
      imageAlt: "NIB Alwustho Technologies"
    },
    {
      title: "NPWP Perusahaan",
      number: "12.345.678.9-012.000",
      issuer: "Direktorat Jenderal Pajak",
      icon: "💼",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&q=80",
      imageAlt: "NPWP Alwustho Technologies"
    }
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Legalitas & Kredibilitas
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Merek Terdaftar Resmi Kemenkumham RI
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              ELFAN System adalah <span className="font-bold text-green-600">merek terdaftar resmi</span> dengan 
              Sertifikat Merek <span className="font-bold">IDM000814737</span> dari Kementerian Hukum dan HAM RI. 
              Dikembangkan secara profesional oleh Alwustho Technologies dengan legalitas hukum yang lengkap.
            </p>
          </div>

          {/* Featured Trademark Certificate */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-green-200">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-4xl">®️</span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Merek Terdaftar Resmi Republik Indonesia
                </h3>
              </div>
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src="/images/legal/sertifikat-merek-elfan.jpg"
                      alt="Sertifikat Merek ELFAN terdaftar resmi Kemenkumham RI"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <div className="inline-flex flex-col gap-2">
                    <div className="flex items-center gap-2 justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-bold text-slate-900">Nomor Pendaftaran: IDM000814737</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-slate-700">Tanggal Penerimaan: 29 Maret 2018</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="text-slate-700">Pemegang Merek: Junaedy Arfan (Alwustho Technologies)</span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-600 max-w-xl mx-auto">
                    Perlindungan hak atas merek berlaku selama 10 tahun dan dapat diperpanjang. 
                    Sertifikat ini menjamin bahwa ELFAN adalah merek resmi yang dilindungi hukum di Indonesia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Merek Terdaftar ®</h3>
                <p className="text-slate-600">
                  Sertifikat Merek resmi Kemenkumham RI dengan perlindungan hukum penuh
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Data Aman</h3>
                <p className="text-slate-600">
                  Sistem keamanan enterprise dengan enkripsi tingkat tinggi
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Konten Legal</h3>
                <p className="text-slate-600">
                  Semua konten digital memiliki lisensi resmi dan legal
                </p>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-slate-900 text-white rounded-2xl p-8 max-w-2xl">
              <h3 className="text-2xl font-bold mb-4">Alwustho Technologies</h3>
              <p className="text-slate-300 mb-4">
                Kampung IT Solo - Kompleks Masjid Al-Muhtadin<br />
                Jl Semenromo, Gg Melon, Sukoharjo, Jawa Tengah
              </p>
              <div className="flex justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Badan Hukum Resmi</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Terdaftar & Terpercaya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
