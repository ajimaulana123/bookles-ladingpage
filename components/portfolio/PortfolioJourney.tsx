"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { useState } from "react"

export function PortfolioJourney() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState({ url: "", alt: "", gallery: [] as { url: string; alt: string }[], index: 0 })

  const openLightbox = (url: string, alt: string, gallery: { url: string; alt: string }[], index: number) => {
    setCurrentImage({ url, alt, gallery, index })
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    const newIndex = (currentImage.index + 1) % currentImage.gallery.length
    setCurrentImage({
      ...currentImage,
      url: currentImage.gallery[newIndex].url,
      alt: currentImage.gallery[newIndex].alt,
      index: newIndex
    })
  }

  const prevImage = () => {
    const newIndex = currentImage.index === 0 ? currentImage.gallery.length - 1 : currentImage.index - 1
    setCurrentImage({
      ...currentImage,
      url: currentImage.gallery[newIndex].url,
      alt: currentImage.gallery[newIndex].alt,
      index: newIndex
    })
  }

  // Close on Escape key
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    })
  }
  const implementations = [
    {
      id: "kampung-it-solo",
      category: "Pusat Riset & Pengembangan",
      title: "Kampung IT Solo – Pusat Riset & Gallery Asma'ul Husna",
      location: "Solo, Jawa Tengah",
      year: "2020",
      tagline: "Titik Nol Pengembangan ELFAN System",
      description: "Berlokasi di Kompleks Masjid Al-Muhtadin, Solo. Kampung IT Solo menjadi jantung inovasi teknologi pendidikan Islami di Indonesia. Di sinilah ELFAN System dikembangkan, diuji, dan disempurnakan sebelum diimplementasikan ke berbagai institusi.",
      highlights: [
        "Pusat belajar ilmu agama terintegrasi teknologi",
        "Pusat kewirausahaan (entrepreneurship) digital",
        "Galeri visual Asma'ul Husna dengan sistem digital",
        "Laboratorium riset perpustakaan digital",
        "Training center untuk admin dan user",
      ],
      impact: [
        "Menjadi model referensi implementasi nasional",
        "Pusat pelatihan untuk 100+ institusi",
        "Showcase untuk calon klien dari seluruh Indonesia",
      ],
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
      imageAlt: "Kampung IT Solo - Pusat Riset Teknologi Pendidikan Islam dan Pengembangan ELFAN System",
      gallery: [
        { url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80", alt: "Interior perpustakaan digital Kampung IT Solo" },
        { url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&q=80", alt: "Galeri Asma'ul Husna dengan display digital" },
        { url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80", alt: "Ruang baca digital dengan teknologi modern" },
        { url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&q=80", alt: "Area training dan workshop" },
        { url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&q=80", alt: "Sistem server dan infrastruktur" },
        { url: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&q=80", alt: "Pengunjung mengakses koleksi digital" },
      ],
      seoKeywords: "Pusat Riset Teknologi Pendidikan Islam Solo, Kampung IT Solo, Pengembangan Bookless Library",
      badge: "🔬 Expertise",
      color: "blue",
    },
    {
      id: "yayasan-bunyan",
      category: "Pendidikan Anak Usia Dini",
      title: "Yayasan Bunyan Auladia Cemerlang",
      location: "Indonesia",
      year: "2021",
      tagline: "Literasi Digital Sejak Dini",
      description: "Implementasi pada yayasan pendidikan anak-anak untuk penguatan literasi sejak dini. Menunjukkan fleksibilitas sistem ELFAN yang dapat disesuaikan untuk semua jenjang usia, dari anak-anak hingga dewasa.",
      highlights: [
        "Konten edukatif ramah anak",
        "Interface sederhana untuk anak-anak",
        "Monitoring orang tua dan guru",
        "Koleksi buku cerita dan edukasi anak",
      ],
      impact: [
        "Meningkatkan minat baca anak sejak dini",
        "Membiasakan anak dengan teknologi positif",
        "Mendukung program literasi nasional",
      ],
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      imageAlt: "Yayasan Bunyan Auladia Cemerlang - Implementasi Perpustakaan Digital untuk Pendidikan Anak",
      gallery: [
        { url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80", alt: "Anak-anak menggunakan perpustakaan digital" },
        { url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80", alt: "Interface ramah anak dengan konten edukatif" },
        { url: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=400&q=80", alt: "Ruang belajar digital untuk anak" },
        { url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&q=80", alt: "Guru mendampingi anak mengakses konten" },
      ],
      seoKeywords: "perpustakaan digital anak, literasi anak usia dini, bookless library sekolah",
      badge: "👶 Early Education",
      color: "green",
    },
    {
      id: "pesantren-bekasi",
      category: "Pesantren & Pendidikan Islam",
      title: "Pesantren Mimbarul Huffadz, Bekasi",
      location: "Bekasi, Jawa Barat",
      year: "2022",
      tagline: "Mendukung Santri Penghafal Al-Qur'an",
      description: "Peresmian Bookless Library oleh pimpinan pesantren. Mendukung santri penghafal Al-Qur'an dengan akses referensi kitab kuning dan ilmu pengetahuan umum secara digital, menjaga fokus santri tanpa gangguan internet.",
      highlights: [
        "Koleksi kitab kuning digital lengkap",
        "Tafsir dan hadits shahih",
        "Akses tanpa internet (menjaga fokus santri)",
        "Referensi untuk hafalan dan kajian",
        "Sistem aman dari konten negatif",
      ],
      impact: [
        "Santri lebih mudah akses referensi kitab",
        "Hemat biaya pembelian kitab fisik",
        "Menjaga fokus santri tanpa distraksi internet",
      ],
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
      imageAlt: "Pesantren Mimbarul Huffadz Bekasi - Bookless Library untuk Santri Penghafal Quran",
      gallery: [
        { url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&q=80", alt: "Peresmian bookless library di pesantren" },
        { url: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=400&q=80", alt: "Santri mengakses kitab kuning digital" },
        { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80", alt: "Ruang perpustakaan digital pesantren" },
        { url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80", alt: "Sistem server perpustakaan pesantren" },
        { url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80", alt: "Koleksi digital kitab dan referensi" },
      ],
      seoKeywords: "perpustakaan digital pesantren, kitab kuning digital, bookless library bekasi, perpustakaan pesantren tanpa internet",
      badge: "🕌 Pesantren",
      color: "green",
    },
    {
      id: "umkt",
      category: "Pendidikan Tinggi",
      title: "UMKT (Universitas Muhammadiyah Kalimantan Timur)",
      location: "Samarinda, Kalimantan Timur",
      year: "2022",
      tagline: "Solusi Infrastruktur Literasi Skala Universitas",
      description: "Salah satu kampus modern terbesar di Kalimantan. Integrasi Digital Library di area kampus dan Co-working Space. Solusi infrastruktur literasi skala universitas yang mendukung riset mahasiswa secara masif.",
      highlights: [
        "Akses untuk ribuan mahasiswa",
        "Integrasi dengan co-working space",
        "E-journal dan referensi riset",
        "Support untuk tugas akhir dan skripsi",
        "Multi-branch (fakultas berbeda)",
      ],
      impact: [
        "Mahasiswa akses jurnal 24/7",
        "Meningkatkan kualitas riset",
        "Hemat biaya langganan jurnal online",
        "Mendukung akreditasi kampus",
      ],
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
      imageAlt: "UMKT Universitas Muhammadiyah Kalimantan Timur - Perpustakaan Digital Skala Universitas",
      gallery: [
        { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&q=80", alt: "Gedung perpustakaan digital UMKT" },
        { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80", alt: "Mahasiswa mengakses e-journal" },
        { url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&q=80", alt: "Co-working space dengan akses digital library" },
        { url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80", alt: "Infrastruktur server universitas" },
        { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80", alt: "Area baca digital kampus" },
        { url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&q=80", alt: "Mahasiswa riset dengan akses digital" },
      ],
      seoKeywords: "perpustakaan digital universitas, bookless library kampus, perpustakaan UMKT, digital library kalimantan",
      badge: "🎓 Authority",
      color: "blue",
    },
    {
      id: "ponpes-mumtaza",
      category: "Pesantren Modern",
      title: "Pondok Pesantren Mumtaza, Bojonegoro",
      location: "Bojonegoro, Jawa Timur",
      year: "2023",
      tagline: "Smart Boarding School dengan Teknologi Digital",
      description: "Penerapan konsep Smart Boarding School. Penggunaan sistem di asrama untuk memudahkan mahasantri mengakses bahan kuliah dan literasi keislaman secara mandiri, kapan saja tanpa harus ke perpustakaan fisik.",
      highlights: [
        "Akses dari asrama (24/7)",
        "Bahan kuliah dan kitab digital",
        "Sistem pembelajaran mandiri",
        "Monitoring progress santri",
        "Integrasi dengan kurikulum pesantren",
      ],
      impact: [
        "Santri belajar lebih fleksibel",
        "Meningkatkan kemandirian belajar",
        "Efisiensi waktu dan ruang",
        "Modernisasi tanpa kehilangan nilai pesantren",
      ],
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
      imageAlt: "Pondok Pesantren Mumtaza Bojonegoro - Smart Boarding School dengan Perpustakaan Digital",
      gallery: [
        { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80", alt: "Kompleks Pondok Pesantren Mumtaza" },
        { url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&q=80", alt: "Santri mengakses perpustakaan digital dari asrama" },
        { url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&q=80", alt: "Ruang belajar digital pesantren" },
        { url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&q=80", alt: "Sistem monitoring progress santri" },
        { url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80", alt: "Koleksi digital kitab dan bahan kuliah" },
      ],
      seoKeywords: "smart boarding school, perpustakaan digital pesantren bojonegoro, bookless library pondok pesantren",
      badge: "🏘️ Smart Pesantren",
      color: "green",
    },
    {
      id: "science-center-bandung",
      category: "Fasilitas Publik & Smart City",
      title: "Science Center, Sabilulungan & Taman Perpustakaan Kab. Bandung",
      location: "Bandung, Jawa Barat",
      year: "2023",
      tagline: "Teknologi Melampaui Batas Gedung",
      description: "Implementasi di ruang publik dan pusat sains. Teknologi ELFAN melampaui batas gedung. Kini, membaca buku digital bisa dilakukan di taman terbuka dan pusat sains melalui jaringan intranet yang stabil.",
      highlights: [
        "Perpustakaan di ruang terbuka",
        "Akses publik gratis",
        "Integrasi dengan Science Center",
        "WiFi coverage area luas",
        "Program Smart City Bandung",
      ],
      impact: [
        "Literasi publik meningkat",
        "Taman jadi tempat belajar",
        "Mendukung program Smart City",
        "Akses literasi untuk semua kalangan",
      ],
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
      imageAlt: "Science Center dan Taman Perpustakaan Bandung - Perpustakaan Digital Ruang Publik Smart City",
      gallery: [
        { url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80", alt: "Taman perpustakaan digital Bandung" },
        { url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80", alt: "Science Center dengan teknologi digital" },
        { url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80", alt: "Pengunjung mengakses perpustakaan di taman" },
        { url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&q=80", alt: "Area WiFi coverage perpustakaan publik" },
        { url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&q=80", alt: "Fasilitas baca digital di ruang terbuka" },
        { url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&q=80", alt: "Program Smart City literasi digital" },
      ],
      seoKeywords: "perpustakaan digital bandung, smart city bandung, taman perpustakaan digital, science center bookless library",
      badge: "🏛️ Trustworthiness",
      color: "purple",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Jejak Implementasi & Kepercayaan Nasional
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Dari pusat riset di Solo hingga berbagai pelosok institusi di Indonesia. 
              Setiap implementasi adalah bukti kepercayaan dan kesuksesan sistem kami.
            </p>
          </div>

          {/* Implementation Journey - Storytelling Layout */}
          <div className="space-y-20">
            {implementations.map((item, index) => (
              <div key={item.id} className="relative">
                {/* Timeline Connector */}
                {index < implementations.length - 1 && (
                  <div className="absolute left-1/2 bottom-0 w-1 h-20 bg-gradient-to-b from-green-200 to-transparent transform translate-y-full hidden md:block" />
                )}

                <Card className="overflow-hidden border-2 border-slate-200 hover:border-green-400 transition-all duration-300 bg-white">
                  <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                    
                    {/* Image Side */}
                    <div className={`relative h-96 md:h-auto ${index % 2 === 0 ? '' : 'md:col-start-2'}`}>
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        className="object-cover"
                      />
                      {/* Overlay Badge */}
                      <div className="absolute top-6 left-6">
                        <span className={`px-4 py-2 rounded-full text-sm font-bold text-white ${
                          item.color === 'blue' ? 'bg-blue-600' :
                          item.color === 'green' ? 'bg-green-600' :
                          'bg-purple-600'
                        }`}>
                          {item.badge}
                        </span>
                      </div>
                      {/* Year Badge */}
                      <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="font-bold text-slate-900">{item.year}</span>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      {/* Category */}
                      <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm font-semibold rounded-full mb-4 self-start">
                        {item.category}
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl font-bold text-slate-900 mb-2">
                        {item.title}
                      </h3>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-slate-600 mb-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="font-semibold">{item.location}</span>
                      </div>

                      {/* Tagline */}
                      <p className="text-xl font-semibold text-green-600 mb-4">
                        {item.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="font-bold text-slate-900 mb-3">Fitur Implementasi:</h4>
                        <div className="space-y-2">
                          {item.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm text-slate-700">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Impact */}
                      <div className="bg-slate-50 rounded-xl p-4 mb-6">
                        <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                          <span className="text-xl">📊</span>
                          Dampak & Hasil:
                        </h4>
                        <ul className="space-y-1">
                          {item.impact.map((result, idx) => (
                            <li key={idx} className="text-sm text-slate-700">• {result}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Photo Gallery */}
                      {item.gallery && item.gallery.length > 0 && (
                        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6">
                          <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-lg">
                            <span className="text-2xl">📸</span>
                            Galeri Foto Implementasi:
                          </h4>
                          
                          {/* Grid: 1 kolom mobile, 2 kolom desktop untuk thumbnail lebih besar */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {item.gallery.map((photo, idx) => (
                              <div 
                                key={idx} 
                                className="relative h-48 md:h-56 rounded-xl overflow-hidden group cursor-pointer border-3 border-slate-300 hover:border-green-500 transition-all shadow-md hover:shadow-xl"
                                onClick={() => openLightbox(photo.url, photo.alt, item.gallery || [], idx)}
                              >
                                <Image
                                  src={photo.url}
                                  alt={photo.alt}
                                  fill
                                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                
                                {/* Overlay dengan icon dan text yang lebih jelas */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                                  <div className="bg-white rounded-full p-3 mb-2 shadow-lg">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                  </div>
                                  <span className="text-white font-bold text-base bg-black/50 px-4 py-2 rounded-full">
                                    Klik untuk perbesar
                                  </span>
                                </div>
                                
                                {/* Photo number badge */}
                                <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-bold">
                                  {idx + 1}/{item.gallery.length}
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          {/* Instruction text dengan font lebih besar */}
                          <div className="mt-4 p-4 bg-blue-50 border-2 border-blue-200 rounded-xl">
                            <p className="text-base text-blue-900 font-semibold flex items-center gap-2">
                              <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              <span>Klik foto untuk melihat ukuran penuh • Gunakan tombol panah untuk navigasi</span>
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* SEO Keywords Section (Hidden but indexed) */}
          <div className="sr-only">
            <h3>Implementasi ELFAN System di Indonesia</h3>
            <p>
              Pusat Riset Teknologi Pendidikan Islam Solo, Perpustakaan Digital Universitas UMKT Kalimantan, 
              Bookless Library Pesantren Bekasi dan Bojonegoro, Smart City Perpustakaan Digital Bandung, 
              Implementasi Perpustakaan Tanpa Internet, Digital Library untuk Pesantren Modern, 
              Perpustakaan Digital Pemerintah Daerah, Science Center Bookless Library.
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button - Lebih besar */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-3 hover:bg-black/70"
            aria-label="Close lightbox"
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button - Lebih besar dan lebih jelas */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-8 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-4 hover:bg-black/70 hover:scale-110 transition-all"
            aria-label="Previous image"
          >
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button - Lebih besar dan lebih jelas */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-8 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-4 hover:bg-black/70 hover:scale-110 transition-all"
            aria-label="Next image"
          >
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={currentImage.url}
                alt={currentImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1536px) 100vw, 1536px"
              />
            </div>
          </div>

          {/* Image Counter & Caption - Font lebih besar */}
          <div className="absolute bottom-4 left-0 right-0 text-center text-white px-4">
            <div className="bg-black/70 rounded-full inline-block px-6 py-3 mb-3">
              <p className="text-2xl font-bold">
                {currentImage.index + 1} / {currentImage.gallery.length}
              </p>
            </div>
            <p className="text-lg md:text-xl px-4 max-w-3xl mx-auto bg-black/50 rounded-lg py-3">
              {currentImage.alt}
            </p>
          </div>

          {/* Keyboard Hints - Font lebih besar */}
          <div className="absolute top-4 left-4 text-white text-base bg-black/70 px-4 py-2 rounded-lg">
            <p className="font-semibold">← → untuk navigasi • ESC untuk tutup</p>
          </div>
        </div>
      )}
    </section>
  )
}
