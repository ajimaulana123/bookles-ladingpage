'use client'

import { useState } from 'react'
import { clientsData, getTotalClientsCount, getRegionCounts } from '@/lib/clientsData'
import RegionSection from '@/components/clients/RegionSection'
import RegionTabs from '@/components/clients/RegionTabs'
import { CONTACT } from '@/lib/constants'
import { Globe2, Phone } from 'lucide-react'

export default function ClientsSection() {
  const totalClients = getTotalClientsCount()
  const regionCounts = getRegionCounts()
  const [activeTab, setActiveTab] = useState('jawa')

  const tabs = [
    { id: 'jawa', label: 'Jawa & Bali', count: regionCounts.jawaTimur + regionCounts.jawaBarat + regionCounts.jawaTengah + regionCounts.bali },
    { id: 'sumatera', label: 'Sumatera', count: regionCounts.sumatera },
    { id: 'kalimantan', label: 'Kalimantan', count: regionCounts.kalimantan },
    { id: 'sulawesi', label: 'Sulawesi', count: regionCounts.sulawesi },
    { id: 'gorontalo', label: 'Gorontalo', count: regionCounts.gorontalo },
    { id: 'jakarta', label: 'Jakarta', count: regionCounts.jakarta },
    { id: 'internasional', label: 'Internasional', count: regionCounts.internasional, icon: '🌍' },
  ]

  return (
    <section id="clients" className="pt-32 py-20 bg-gradient-to-b from-white via-green-50/30 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              Update Data: September 2024
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Menjangkau Nusantara:{' '}
            <span className="text-green-600">{totalClients}+ Instansi</span>
            {' '}Telah Bertransformasi
          </h2>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-6">
            Bukan sekadar aplikasi, ELFAN System adalah{' '}
            <span className="font-bold text-red-600">mitra strategis pemerintah</span> dalam mewujudkan{' '}
            <span className="font-bold text-blue-600">Smart City dan Desa Digital</span>. 
            Dengan <span className="font-bold text-green-600">{totalClients}+ implementasi nyata</span>, 
            kami memastikan literasi digital hadir hingga pelosok desa dan pulau terluar tanpa kendala kuota internet.
          </p>
          
          <p className="text-lg text-slate-700 max-w-4xl mx-auto font-medium">
            <span className="text-green-600 font-bold">ELFAN System telah melintasi batas negara hingga Malaysia</span> dan 
            tersebar luas di seluruh penjuru Nusantara mulai dari{' '}
            <span className="text-green-600">Sumatera</span>,{' '}
            <span className="text-green-600">Jawa</span>,{' '}
            <span className="text-green-600">Kalimantan</span>,{' '}
            <span className="text-green-600">Sulawesi</span>, hingga{' '}
            <span className="text-green-600">Bali</span>.
          </p>
        </div>

        {/* Tabs Navigation */}
        <RegionTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {/* Jawa & Bali Tab */}
          {activeTab === 'jawa' && (
            <div className="animate-fadeIn">
              {/* Multi-Level Education Highlight */}
              <div className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 rounded-2xl p-8 mb-8 border-2 border-green-200">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-4xl">🎓</span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Lengkap di Semua Jenjang: SD/MI → SMP/MTs → SMA/MA → SMK → Universitas
                  </h3>
                </div>
                <p className="text-center text-slate-700 max-w-4xl mx-auto mb-4 leading-relaxed">
                  Dari <span className="font-bold text-green-600">SDIT Luqman Al Hakim (Sleman, DIY)</span>,{' '}
                  <span className="font-bold text-green-600">MI Darul Quran (Malang)</span>, hingga{' '}
                  <span className="font-bold text-blue-600">SMA Muhammadiyah 10 Surabaya</span>,{' '}
                  <span className="font-bold text-blue-600">10+ SMK Negeri di Jawa Tengah</span>, dan{' '}
                  <span className="font-bold text-purple-600">Perguruan Tinggi</span> seperti{' '}
                  <span className="font-bold text-purple-600">UNISSULA Semarang</span> dan{' '}
                  <span className="font-bold text-purple-600">IAIN Surakarta</span> — 
                  ELFAN System melayani semua level pendidikan dengan infrastruktur literasi digital skala akademis.
                </p>
                <div className="flex flex-wrap justify-center gap-3 text-sm">
                  <span className="bg-purple-600 text-white px-4 py-1.5 rounded-full font-bold shadow-md">
                    🎓 UNISSULA Semarang
                  </span>
                  <span className="bg-purple-600 text-white px-4 py-1.5 rounded-full font-bold shadow-md">
                    🎓 IAIN Surakarta
                  </span>
                  <span className="bg-green-600 text-white px-4 py-1.5 rounded-full font-bold shadow-md">
                    🏛️ Surabaya (Alif Laam Mim, SMA Muh 10)
                  </span>
                  <span className="bg-green-600 text-white px-4 py-1.5 rounded-full font-bold shadow-md">
                    🏛️ Solo & Sragen (10+ SMK)
                  </span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                    DIY Sleman
                  </span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                    Malang
                  </span>
                </div>
                <p className="text-center text-purple-700 font-bold mt-4">
                  📚 Mendukung Riset Mahasiswa & Dosen melalui Akses Jurnal, E-Book, dan Karya Ilmiah Offline
                </p>
              </div>
              
              <RegionSection 
                regionName="Jawa Timur" 
                clients={clientsData.jawaTimur}
                className="mb-16"
              />
              <RegionSection 
                regionName="Jawa Barat" 
                clients={clientsData.jawaBarat}
                className="mb-16"
              />
              <RegionSection 
                regionName="Jawa Tengah" 
                clients={clientsData.jawaTengah}
                className="mb-16"
              />
              <RegionSection 
                regionName="Bali" 
                clients={clientsData.bali}
              />
            </div>
          )}

          {/* Sumatera Tab */}
          {activeTab === 'sumatera' && (
            <div className="animate-fadeIn">
              <div className="bg-gradient-to-r from-orange-50 via-yellow-50 to-purple-50 rounded-2xl p-6 mb-8 border-2 border-orange-200">
                <p className="text-center text-slate-700 max-w-3xl mx-auto mb-3">
                  <span className="font-bold text-orange-600">Jangkauan luas</span> dari Riau, Lampung, Bengkulu, Batam, 
                  hingga <span className="font-bold">Bangka Belitung</span> — membuktikan ELFAN System adalah solusi tepat 
                  untuk wilayah kepulauan dengan keterbatasan akses internet.
                </p>
                <p className="text-center text-purple-700 font-bold">
                  🎓 Termasuk <span className="font-bold">Fakultas Syariah & Hukum UIN SUSKA Riau</span> (Perguruan Tinggi Negeri)
                </p>
              </div>
              <RegionSection 
                regionName="Sumatera & Kepulauan" 
                clients={clientsData.sumatera}
              />
            </div>
          )}

          {/* Kalimantan Tab */}
          {activeTab === 'kalimantan' && (
            <div className="animate-fadeIn">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 mb-8 border-2 border-purple-200">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="text-3xl">🎓</span>
                  <h3 className="text-xl font-bold text-slate-900">
                    Dipercaya Perguruan Tinggi di Kalimantan
                  </h3>
                </div>
                <p className="text-center text-slate-700 max-w-2xl mx-auto">
                  <span className="font-bold text-purple-600">UMKT (Universitas Muhammadiyah Kalimantan Timur)</span> dan{' '}
                  <span className="font-bold text-purple-600">UMB Banjarmasin</span> telah mengimplementasikan 
                  ELFAN System untuk mendukung riset akademis dan literasi digital mahasiswa.
                </p>
              </div>
              <RegionSection 
                regionName="Kalimantan Timur & Selatan" 
                clients={clientsData.kalimantan}
              />
            </div>
          )}

          {/* Sulawesi Tab */}
          {activeTab === 'sulawesi' && (
            <div className="animate-fadeIn">
              {/* Government Libraries Highlight - NEW */}
              <div className="bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 rounded-2xl p-8 mb-8 border-2 border-red-200">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-4xl">🏛️</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                    Mitra Pemerintah: 23 Perpustakaan Daerah
                  </h3>
                </div>
                <p className="text-center text-slate-700 max-w-4xl mx-auto mb-4 leading-relaxed">
                  <span className="font-bold text-red-600 text-xl">23 Dinas Perpustakaan & Kearsipan (DPK)</span> di Sulawesi Selatan 
                  telah mengimplementasikan ELFAN System, termasuk{' '}
                  <span className="font-bold text-red-600">DPK Provinsi Sulawesi Selatan</span>. 
                  Standardisasi digital untuk pelayanan publik — membantu dinas perpustakaan menyediakan{' '}
                  <span className="font-bold">ribuan koleksi buku digital</span> yang dapat diakses warga secara cepat, stabil, 
                  dan tanpa beban biaya internet.
                </p>
                <div className="flex flex-wrap justify-center gap-2 text-sm mb-4">
                  <span className="bg-red-600 text-white px-4 py-1.5 rounded-full font-bold shadow-md">
                    🏛️ DPK Provinsi Sulsel
                  </span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full font-semibold">
                    DPK Bone
                  </span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full font-semibold">
                    DPK Maros
                  </span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full font-semibold">
                    DPK Luwu
                  </span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-semibold">
                    + 19 DPK Lainnya
                  </span>
                </div>
                <p className="text-center text-red-700 font-bold text-lg">
                  ✅ Government Certified Solution | Mitra Literasi Daerah | Smart City Ready
                </p>
              </div>
              
              {/* Schools Highlight */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 mb-8 border-2 border-blue-200">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-4xl">🏫</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                    Dominasi Total di Sulawesi Selatan: 95 Sekolah!
                  </h3>
                </div>
                <p className="text-center text-slate-700 max-w-4xl mx-auto mb-4 leading-relaxed">
                  <span className="font-bold text-blue-600 text-xl">95 SMA/SMK Negeri & Swasta</span> di Sulawesi Selatan telah 
                  mengimplementasikan ELFAN System! Dari{' '}
                  <span className="font-bold text-blue-600">16 sekolah di Kota Makassar</span> (termasuk SMA Islam Athirah),{' '}
                  <span className="font-bold text-blue-600">18 sekolah di Kabupaten Bone</span>, hingga pelosok seperti{' '}
                  <span className="font-bold">Toraja Utara, Soppeng, Jeneponto, Bulukumba, dan Takalar</span>. 
                  Membuktikan ELFAN System adalah solusi tepat untuk wilayah dengan{' '}
                  <span className="font-bold text-green-600">keterbatasan sinyal internet</span> — 
                  perpustakaan digital tanpa ketergantungan kuota!
                </p>
                <div className="flex flex-wrap justify-center gap-2 text-sm mb-4">
                  <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full font-bold shadow-md">
                    🏛️ Kota Makassar (16)
                  </span>
                  <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full font-bold shadow-md">
                    📚 Kab. Bone (18)
                  </span>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full font-semibold">
                    Kab. Luwu (13)
                  </span>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full font-semibold">
                    Kota Parepare (6)
                  </span>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full font-semibold">
                    Toraja Utara (6)
                  </span>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full font-semibold">
                    Kab. Soppeng (6)
                  </span>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full font-semibold">
                    Kab. Takalar (6)
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                    Kab. Jeneponto (5)
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                    Kab. Bulukumba (5)
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                    Kab. Pangkep (3)
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                    Kab. Barru (3)
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                    Kab. Maros (3)
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                    + 5 Kabupaten Lainnya
                  </span>
                </div>
                <p className="text-center text-green-700 font-bold text-lg">
                  ✅ Solusi Offline-First untuk Daerah dengan Sinyal Terbatas
                </p>
                <p className="text-center text-slate-600 mt-2 text-sm italic">
                  "Dari Bone hingga Takalar, puluhan SMA dan SMK Negeri telah beralih ke ELFAN System untuk mewujudkan perpustakaan masa depan yang efektif dan mandiri internet."
                </p>
              </div>
              <RegionSection 
                regionName="Sulawesi Selatan" 
                clients={clientsData.sulawesi}
              />
            </div>
          )}

          {/* Gorontalo Tab */}
          {activeTab === 'gorontalo' && (
            <div className="animate-fadeIn">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 mb-8 border-2 border-red-200">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="text-3xl">🏛️</span>
                  <h3 className="text-xl font-bold text-slate-900">
                    Mitra Pemerintah Daerah Gorontalo
                  </h3>
                </div>
                <p className="text-center text-slate-700 max-w-2xl mx-auto">
                  <span className="font-bold text-red-600">Pemerintah Daerah Kabupaten Pohuwato</span> telah mengimplementasikan 
                  ELFAN System untuk mendukung program transformasi digital dan literasi masyarakat.
                </p>
              </div>
              <RegionSection 
                regionName="Gorontalo" 
                clients={clientsData.gorontalo}
              />
            </div>
          )}

          {/* Jakarta Tab */}
          {activeTab === 'jakarta' && (
            <div className="animate-fadeIn">
              <RegionSection 
                regionName="Jakarta & Sekitarnya" 
                clients={clientsData.jakarta}
              />
            </div>
          )}

          {/* Internasional Tab */}
          {activeTab === 'internasional' && (
            <div className="animate-fadeIn">
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 mb-8 border-2 border-green-200">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Globe2 className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-slate-900">
                    Prestasi Internasional
                  </h3>
                </div>
                <p className="text-center text-slate-700 max-w-2xl mx-auto">
                  Produk karya anak bangsa dari <span className="font-bold text-green-600">Kampung IT Solo</span> telah 
                  dipercaya hingga ke negara tetangga. Bukti kualitas dan inovasi yang mendunia!
                </p>
              </div>
              <RegionSection 
                regionName="Malaysia 🇲🇾" 
                clients={clientsData.internasional}
              />
            </div>
          )}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">33</div>
              <div className="text-green-100 text-sm">Instansi Pemerintah</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">126</div>
              <div className="text-green-100 text-sm">Sekolah (SD-SMK)</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">62</div>
              <div className="text-green-100 text-sm">Pesantren & Yayasan</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">7</div>
              <div className="text-green-100 text-sm">Perguruan Tinggi</div>
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Bergabunglah dengan {totalClients}+ Instansi Maju Lainnya
          </h3>
          <p className="text-green-100 text-lg mb-4 max-w-4xl mx-auto leading-relaxed">
            Dari <span className="font-bold">Desa Digital Cemani (Pelopor Desa Digital)</span>,{' '}
            <span className="font-bold">DISARPUS Kota Bandung</span>,{' '}
            <span className="font-bold">Dinas Pendidikan Provinsi Sulawesi Selatan</span>,{' '}
            <span className="font-bold">DPK Kota Makassar</span>,{' '}
            <span className="font-bold">Pemda Kabupaten Pohuwato (Gorontalo)</span>,{' '}
            <span className="font-bold">UNISSULA</span>,{' '}
            <span className="font-bold">IAIN Surakarta</span>, hingga{' '}
            <span className="font-bold">95 sekolah di Sulawesi Selatan</span> — 
            semua telah mempercayai ELFAN System.
          </p>
          <p className="text-green-100 mb-8 max-w-3xl mx-auto font-semibold">
            ✅ Konsultasikan Kebutuhan Literasi Digital Anda Sekarang
          </p>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}?text=Halo%20ELFAN%20System%2C%20saya%20tertarik%20untuk%20bergabung%20dengan%20${totalClients}%2B%20institusi%20pengguna%20ELFAN%20System.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            WhatsApp: 0896-0466-6665
          </a>
        </div>

        {/* Footer Info */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-slate-600">
            <a 
              href={`https://${CONTACT.website}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-green-600 transition-colors font-medium"
            >
              {CONTACT.website}
            </a>
            <span className="hidden md:block text-slate-300">|</span>
            <span className="font-medium">{CONTACT.company}</span>
            <span className="hidden md:block text-slate-300">|</span>
            <span className="font-medium">{CONTACT.location}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
