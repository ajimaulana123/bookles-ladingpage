import { Card } from "@/components/ui/card"

export function FAQSection() {
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

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
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
      </div>
    </section>
  )
}
