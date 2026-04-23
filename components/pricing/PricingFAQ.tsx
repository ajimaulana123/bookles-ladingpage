import { Card } from "@/components/ui/card"

export function PricingFAQ() {
  const faqs = [
    {
      question: "Apakah harga sudah termasuk instalasi dan training?",
      answer: "Ya, semua paket sudah termasuk instalasi lengkap, setup sistem, dan training untuk admin dan user. Kami akan memastikan tim Anda siap menggunakan sistem sebelum kami selesai."
    },
    {
      question: "Apakah ada biaya bulanan atau biaya tersembunyi?",
      answer: "Tidak ada biaya bulanan atau biaya tersembunyi. Anda hanya membayar investasi awal untuk hardware dan software. Biaya operasional sangat minimal, hanya untuk listrik server yang setara dengan lampu LED (15-35W)."
    },
    {
      question: "Bagaimana cara pembayarannya? Apakah bisa cicilan?",
      answer: "Kami menerima berbagai metode pembayaran: cash/transfer, cicilan (dengan partner leasing), dan proses APBD/Hibah untuk instansi pemerintah. Hubungi kami untuk diskusi opsi pembayaran yang sesuai dengan budget Anda."
    },
    {
      question: "Berapa lama masa garansi hardware?",
      answer: "Garansi hardware bervariasi per paket: Paket dengan server second (1 tahun), Paket dengan server baru (2-3 tahun). Garansi cover kerusakan hardware dan replacement jika diperlukan. Setelah masa garansi, tersedia extended warranty."
    },
    {
      question: "Apakah bisa upgrade paket di kemudian hari?",
      answer: "Ya, Anda bisa upgrade paket kapan saja. Misalnya dari paket 30 user ke 50 user, Anda hanya perlu bayar selisih dan upgrade hardware. Kami akan bantu proses upgrade tanpa mengganggu operasional."
    },
    {
      question: "Apakah harga bisa nego atau ada diskon?",
      answer: "Harga yang kami tawarkan sudah sangat kompetitif dan terjangkau. Namun, kami memberikan penawaran khusus untuk: pembelian multiple unit, institusi pendidikan non-profit, dan program pemerintah. Hubungi kami untuk penawaran terbaik."
    },
    {
      question: "Apa yang terjadi jika hardware rusak setelah garansi habis?",
      answer: "Setelah garansi habis, Anda bisa: 1) Beli extended warranty, 2) Bayar per service call, atau 3) Ganti hardware sendiri (kami bantu setup). Hardware yang kami gunakan adalah standard PC, mudah dicari spare part-nya."
    },
    {
      question: "Apakah bisa trial dulu sebelum beli?",
      answer: "Ya, kami menyediakan demo gratis di kantor kami (Kampung IT Solo) atau bisa kami datang ke lokasi Anda untuk demo. Anda bisa test semua fitur sebelum memutuskan untuk membeli."
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              ❓ FAQ Harga
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Pertanyaan Seputar Harga
            </h2>
            <p className="text-xl text-slate-600">
              Jawaban untuk pertanyaan yang paling sering ditanyakan tentang harga dan pembayaran
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
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

          {/* Still Have Questions */}
          <div className="mt-12 text-center bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Masih Ada Pertanyaan?
            </h3>
            <p className="text-slate-600 mb-6">
              Tim kami siap membantu Anda memahami investasi dan ROI untuk institusi Anda
            </p>
            <a 
              href="https://wa.me/6289604666665?text=Halo%20ELFAN%20System%2C%20saya%20punya%20pertanyaan%20tentang%20harga"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full text-lg transition-all">
                Tanya via WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
