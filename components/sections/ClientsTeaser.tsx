'use client'

import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

export default function ClientsTeaser() {
  // Featured clients (6 most prominent - anchor clients from Jawa & Bali)
  const featuredClients = [
    { name: 'Islamic Center Wadi Mubarak', location: 'Bogor, Jawa Barat', initials: 'IC' },
    { name: 'Pondok Pesantren Al-Mukmin', location: 'Ngruki, Sukoharjo', initials: 'PP' },
    { name: 'STIQ Isykarima', location: 'Karanganyar, Jawa Tengah', initials: 'SI' },
    { name: 'Pondok Pesantren Bahrul Ulum', location: 'Jombang, Jawa Timur', initials: 'PP' },
    { name: 'Pesantren Qur\'an Terpadu Mimbarul Huffadz', location: 'Bekasi, Jawa Barat', initials: 'PQ' },
    { name: 'IDBC (Islamic Digital Boarding College)', location: 'Solo, Jawa Tengah', initials: 'ID' },
  ]

  const getInitials = (client: { name: string; initials?: string }) => {
    // Use custom initials if provided, otherwise auto-generate
    if (client.initials) return client.initials
    
    const words = client.name.split(' ')
    if (words.length === 1) return client.name.substring(0, 2).toUpperCase()
    return words
      .slice(0, 2)
      .map(word => word[0])
      .join('')
      .toUpperCase()
  }

  return (
    <section id="clients" className="py-20 bg-gradient-to-b from-white via-green-50/30 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              Klien Terpercaya
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Dipercaya oleh{' '}
            <span className="text-green-600">228+ Lembaga</span>
            {' '}di Seluruh Indonesia
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Dari pesantren, universitas, hingga 23 perpustakaan daerah — 
            ELFAN System telah membantu transformasi digital literasi di berbagai institusi ternama 
            di <span className="font-semibold text-green-600">Sulawesi Selatan</span>, 
            <span className="font-semibold text-green-600"> Jawa Tengah</span>, 
            <span className="font-semibold text-green-600"> Jawa Timur</span>, 
            <span className="font-semibold text-green-600"> Jawa Barat</span>, dan 
            <span className="font-semibold text-green-600"> 6 provinsi lainnya</span>.
          </p>
        </div>

        {/* Featured Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredClients.map((client, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-green-200"
            >
              <div className="flex items-start gap-4">
                {/* Logo Circle */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                  {getInitials(client)}
                </div>
                
                <div className="flex-1 min-w-0">
                  {/* Client Name */}
                  <h3 className="font-semibold text-slate-800 text-base leading-tight mb-2 group-hover:text-green-600 transition-colors">
                    {client.name}
                  </h3>
                  
                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{client.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 shadow-xl mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">228+</div>
              <div className="text-green-100 text-sm">Total Lembaga</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10</div>
              <div className="text-green-100 text-sm">Provinsi</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-100 text-sm">Kota</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-green-100 text-sm">Kepuasan</div>
            </div>
          </div>
        </div>

        {/* CTA to Full List */}
        <div className="text-center">
          <Link 
            href="/klien"
            className="inline-flex items-center gap-3 bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-green-600 hover:bg-green-50"
          >
            Lihat Semua 228+ Lembaga di Seluruh Indonesia
            <ArrowRight className="w-5 h-5" />
          </Link>
          
          <p className="text-slate-500 text-sm mt-4">
            Termasuk 7 Universitas, 23 Perpustakaan Daerah, 126 Sekolah, dan puluhan Pesantren
          </p>
        </div>
      </div>
    </section>
  )
}
