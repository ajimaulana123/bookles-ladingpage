import { SPECIFICATIONS } from "@/lib/constants"

export function ProductSpecs() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Spesifikasi Teknis
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Hardware dan infrastruktur berkualitas tinggi untuk performa optimal
            </p>
          </div>

          {/* Specifications Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {SPECIFICATIONS.map((spec, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all">
                <h3 className="text-2xl font-bold mb-6 text-green-400">
                  {spec.category}
                </h3>
                <div className="space-y-6">
                  {spec.items.map((item, idx) => (
                    <div key={idx} className="border-b border-white/10 pb-4 last:border-0">
                      <div className="flex items-start gap-3 mb-2">
                        <span className="text-2xl">{item.icon}</span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold text-slate-200">{item.label}</span>
                            {'badge' in item && item.badge && (
                              <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <span className="text-slate-400 text-sm">{item.value}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Keunggulan Sistem</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">📡</div>
                <div className="font-bold text-green-400 mb-2">Offline System</div>
                <div className="text-sm text-slate-400">Tidak perlu koneksi internet</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🏢</div>
                <div className="font-bold text-green-400 mb-2">Enterprise Hardware</div>
                <div className="text-sm text-slate-400">Server grade Lenovo & Dell</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⚡</div>
                <div className="font-bold text-green-400 mb-2">Plug & Play</div>
                <div className="text-sm text-slate-400">Setup cepat 1 hari kerja</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🛡️</div>
                <div className="font-bold text-green-400 mb-2">Garansi Resmi</div>
                <div className="text-sm text-slate-400">1-3 tahun hardware warranty</div>
              </div>
            </div>
          </div>

          {/* Package Options */}
          <div className="mt-12 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Paket Hardware Tersedia</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="font-bold text-green-400 mb-3">PAKET 30 USER</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Xeon E3 1225 V5</li>
                  <li>• 8GB RAM, 1TB SSD</li>
                  <li>• Mikrotik RB941</li>
                  <li>• 1x Ubiquiti AP</li>
                </ul>
                <div className="mt-4 text-green-400 font-bold">Rp 20 juta</div>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="font-bold text-green-400 mb-3">PAKET 50 USER (Second)</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Lenovo TS150</li>
                  <li>• Xeon E3 1225 V5</li>
                  <li>• 8GB RAM, 1TB SSD</li>
                  <li>• Mikrotik RB450</li>
                </ul>
                <div className="mt-4 text-green-400 font-bold">Rp 34.5 juta</div>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="font-bold text-green-400 mb-3">PAKET 50 USER (Baru)</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• PowerEdge T150</li>
                  <li>• Xeon E-2224G 3.5GHz</li>
                  <li>• 8GB RAM, 1TB HDD</li>
                  <li>• 2x Ubiquiti AP</li>
                </ul>
                <div className="mt-4 text-green-400 font-bold">Rp 56.5 juta</div>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="font-bold text-green-400 mb-3">PAKET 100 USER</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Dell T440</li>
                  <li>• Xeon Bronze 3204</li>
                  <li>• 8GB RAM, 1TB HDD</li>
                  <li>• 3x Ubiquiti AP</li>
                </ul>
                <div className="mt-4 text-green-400 font-bold">Rp 102.5 juta</div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a 
                href="/harga"
                className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-all"
              >
                Lihat Detail Harga & Paket →
              </a>
            </div>
          </div>

          {/* System Requirements */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🖥️</span>
                Minimum Requirements (Client Device)
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Processor: Dual Core 1.5 GHz</li>
                <li>• RAM: 2GB</li>
                <li>• Storage: 100MB free space</li>
                <li>• OS: Windows 7+, Linux, Android 5+, iOS 10+</li>
                <li>• Browser: Chrome, Firefox, Safari (latest)</li>
                <li>• Network: WiFi 802.11n atau lebih tinggi</li>
              </ul>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                Recommended Requirements (Client Device)
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Processor: Quad Core 2.0 GHz+</li>
                <li>• RAM: 4GB+</li>
                <li>• Storage: 500MB free space</li>
                <li>• OS: Windows 10+, Ubuntu 20+, Android 8+, iOS 12+</li>
                <li>• Browser: Chrome, Firefox (latest version)</li>
                <li>• Network: WiFi 802.11ac untuk performa optimal</li>
              </ul>
            </div>
          </div>

          {/* Note */}
          <div className="mt-8 text-center">
            <p className="text-slate-400 text-sm">
              💡 Semua paket sudah include hardware server, network equipment, instalasi, dan training
            </p>
            <p className="text-slate-400 text-sm mt-2">
              📞 Hubungi kami untuk konsultasi spesifikasi sesuai kebutuhan institusi Anda
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
