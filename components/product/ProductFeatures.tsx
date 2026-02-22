import Image from "next/image"
import { FEATURES } from "@/lib/constants"

export function ProductFeatures() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Fitur Unggulan ELFAN System
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Teknologi terdepan yang dirancang untuk memberikan pengalaman perpustakaan digital terbaik
            </p>
          </div>

          {/* Features Grid - Alternating Layout */}
          <div className="space-y-20">
            {FEATURES.map((feature, index) => (
              <div key={feature.id} className="relative">
                <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                  
                  {/* Image Side */}
                  <div className={`relative ${index % 2 === 0 ? '' : 'md:col-start-2'}`}>
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={feature.image}
                        alt={feature.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div>
                    {/* Icon Badge */}
                    <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                      Fitur #{index + 1}
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-xl text-green-600 font-semibold mb-4">
                      {feature.subtitle}
                    </p>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Benefits List */}
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-900 mb-3">Keuntungan:</h4>
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-slate-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Features Grid */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl mb-4">📚</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Koleksi Lengkap</h4>
              <p className="text-slate-600 mb-4">
                10,000+ buku digital, 500+ video edukasi, 1,000+ e-journal dan artikel
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Kitab klasik & modern</li>
                <li>• Referensi umum</li>
                <li>• Jurnal ilmiah</li>
                <li>• Multimedia content</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl mb-4">⚡</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Performa Tinggi</h4>
              <p className="text-slate-600 mb-4">
                Akses cepat dengan teknologi SSD dan jaringan wireless berkecepatan tinggi
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Loading time &lt;2 detik</li>
                <li>• Support 50-100 users</li>
                <li>• Bandwidth up to 1200 Mbps</li>
                <li>• Zero lag experience</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🔧</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Mudah Maintenance</h4>
              <p className="text-slate-600 mb-4">
                Sistem yang dirancang untuk kemudahan perawatan dan update
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Auto backup harian</li>
                <li>• Remote monitoring</li>
                <li>• Update OTA (Over The Air)</li>
                <li>• 24/7 technical support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
