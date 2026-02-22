import Image from "next/image"
import { SPECIFICATIONS } from "@/lib/constants"

export function SpecsSection() {
  return (
    <section id="specs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Teknologi Tangguh, Hemat Energi
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Infrastruktur minimalis dengan performa maksimal. Mini PC Server hemat daya + Router High-Gain 
              untuk jangkauan luas. Plug and Play, 24/7 reliability.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Product Showcase */}
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200 p-8 flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80"
                  alt="Mini PC Server ELFAN System untuk perpustakaan digital offline dengan konsumsi daya rendah"
                  fill
                  className="object-contain p-8"
                />
              </div>
              
              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 bg-green-600 text-white px-6 py-3 rounded-full shadow-xl font-bold">
                Low Power
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white px-6 py-3 rounded-full shadow-xl font-bold">
                High Speed
              </div>
            </div>

            {/* Specifications */}
            <div className="space-y-8">
              {SPECIFICATIONS.map((spec, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-2xl">
                        {spec.category === "Server Hardware" ? "🖥️" : spec.category === "Network Infrastructure" ? "📡" : "💾"}
                      </span>
                    </span>
                    {spec.category}
                  </h3>
                  
                  <div className="space-y-3">
                    {spec.items.map((item, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <div className="font-semibold text-slate-900">{item.label}</div>
                            <div className="text-sm text-slate-600">{item.value}</div>
                          </div>
                        </div>
                        {'badge' in item && item.badge && (
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Perbandingan dengan Perpustakaan Konvensional
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-300">
                    <th className="text-left py-4 px-4 font-bold text-slate-900">Aspek</th>
                    <th className="text-center py-4 px-4 font-bold text-green-700">ELFAN System</th>
                    <th className="text-center py-4 px-4 font-bold text-slate-500">Konvensional</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="py-4 px-4 font-medium">Biaya Operasional</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center text-green-700 font-semibold">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Hemat 70%
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center text-slate-500">Tinggi</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-4 px-4 font-medium">Ruang Penyimpanan</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center text-green-700 font-semibold">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Minimal
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center text-slate-500">Luas</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-4 px-4 font-medium">Akses Konten</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center text-green-700 font-semibold">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Instant
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center text-slate-500">Terbatas</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-4 px-4 font-medium">Perawatan</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center text-green-700 font-semibold">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Mudah
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center text-slate-500">Kompleks</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">Ramah Lingkungan</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center text-green-700 font-semibold">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Go Green
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center text-slate-500">Kertas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-lg text-slate-600 mb-6">
              Butuh spesifikasi custom untuk institusi Anda?
            </p>
            <a href="https://wa.me/6289604666665" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl">
                Konsultasi Spesifikasi →
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
