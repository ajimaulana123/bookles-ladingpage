import Image from "next/image"
import { Card } from "@/components/ui/card"
import { CONTACT } from "@/lib/constants"

export function TrustBuildersSection() {
  const faqs = [
    {
      question: "Apakah ELFAN System memerlukan koneksi internet?",
      answer: "Tidak. ELFAN System menggunakan teknologi Intranet (jaringan lokal) sehingga tidak memerlukan koneksi internet. Semua konten tersimpan di server lokal dan dapat diakses melalui WiFi internal."
    },
    {
      question: "Berapa lama waktu instalasi dan setup?",
      answer: "Instalasi sangat cepat, hanya memerlukan 1 hari kerja. Sistem kami dirancang Plug & Play, sehingga setelah hardware terpasang, perpustakaan digital Anda langsung siap digunakan."
    },
    {
      question: "Apakah bisa menambah konten sendiri?",
      answer: "Ya, Anda dapat menambahkan konten digital sendiri (e-book, PDF, video, dll) melalui dashboard admin. Kami juga menyediakan training untuk pengelolaan konten."
    },
    {
      question: "Berapa biaya operasional per bulan?",
      answer: "Biaya operasional sangat minimal, hanya biaya listrik untuk server yang konsumsinya setara lampu LED (15-35W). Tidak ada biaya internet, tidak ada biaya langganan bulanan."
    },
    {
      question: "Apakah ada garansi dan support?",
      answer: "Ya, kami memberikan garansi hardware 1-2 tahun (tergantung paket) dan support teknis via WhatsApp, email, dan remote assistance. Training dan maintenance juga termasuk dalam paket."
    }
  ]

  const legalDocs = [
    {
      title: "Akta Pendirian",
      number: "AHU-0123456.AH.01.01.Tahun 2018",
      issuer: "Notaris Kota Surakarta",
      icon: "📜"
    },
    {
      title: "SK Kemenkumham",
      number: "AHU-0123456.AH.01.01.Tahun 2018",
      issuer: "Kementerian Hukum dan HAM RI",
      icon: "⚖️"
    },
    {
      title: "NIB",
      number: "1234567890123",
      issuer: "OSS - Kementerian Investasi/BKPM",
      icon: "🏢"
    },
    {
      title: "NPWP Perusahaan",
      number: "12.345.678.9-012.000",
      issuer: "Direktorat Jenderal Pajak",
      icon: "💼"
    }
  ]

  const trustIndicators = [
    {
      icon: "🛡️",
      title: "Perusahaan Resmi",
      description: "Terdaftar resmi di Kemenkumham RI dengan legalitas lengkap"
    },
    {
      icon: "🔒",
      title: "Data Aman",
      description: "Sistem keamanan enterprise dengan enkripsi tingkat tinggi"
    },
    {
      icon: "✅",
      title: "Konten Legal",
      description: "Semua konten digital memiliki lisensi resmi dan legal"
    }
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* FAQ Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                Pertanyaan Umum
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Yang Sering Ditanyakan
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Jawaban untuk pertanyaan yang paling sering kami terima dari calon klien
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="text-lg font-bold text-slate-900 pr-4">{faq.question}</h3>
                      <svg 
                        className="w-6 h-6 text-green-600 flex-shrink-0 transition-transform group-open:rotate-180" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-4 text-slate-600 leading-relaxed">{faq.answer}</p>
                  </details>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-600 mb-4">Masih ada pertanyaan lain?</p>
              <a 
                href="https://wa.me/6289604666665?text=Halo%20ELFAN%20System%2C%20saya%20punya%20pertanyaan%20tentang"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700"
              >
                Tanya via WhatsApp
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Legality Section */}
          <div>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Legalitas & Kredibilitas
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Perusahaan Resmi & Terpercaya
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                ELFAN System dikembangkan oleh {CONTACT.company}, perusahaan resmi dengan legalitas lengkap
              </p>
            </div>

            {/* ⚠️ PLACEHOLDER WARNING */}
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-12">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h3 className="font-bold text-yellow-900 mb-2">TODO: Update Nomor Dokumen Legalitas</h3>
                  <p className="text-sm text-yellow-800 leading-relaxed">
                    Ganti placeholder dengan nomor dokumen real. Upload scan dokumen ke 
                    <code className="bg-yellow-100 px-2 py-1 rounded mx-1">public/images/legal/</code>
                  </p>
                </div>
              </div>
            </div>

            {/* Legal Documents Grid */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {legalDocs.map((doc, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">{doc.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{doc.title}</h3>
                  <p className="text-sm text-slate-600 mb-1">{doc.number}</p>
                  <p className="text-xs text-slate-500">{doc.issuer}</p>
                </Card>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">{indicator.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{indicator.title}</h3>
                  <p className="text-slate-600">{indicator.description}</p>
                </div>
              ))}
            </div>

            {/* Company Info Banner */}
            <div className="bg-slate-900 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">{CONTACT.company}</h3>
              <p className="text-slate-300 mb-4">
                {CONTACT.location} - {CONTACT.address}<br />
                Sukoharjo, Jawa Tengah
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
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
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Support Profesional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
