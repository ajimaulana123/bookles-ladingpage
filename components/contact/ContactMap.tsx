export function ContactMap() {
  // Koordinat Kampung IT Solo, Sukoharjo (approximate)
  // Kompleks Masjid Al-Muhtadin, Jl Semenromo, Gg Melon, Sukoharjo
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0!2d110.8!3d-7.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMzYnMDAuMCJTIDExMMKwNDgnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"

  return (
    <section id="map" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Lokasi Kami
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Kunjungi showroom kami di Kampung IT Solo untuk melihat langsung demo sistem 
              dan konsultasi dengan tim ahli kami.
            </p>
          </div>

          {/* Map Container */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="relative w-full h-[500px]">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi ELFAN System - Kampung IT Solo"
                className="w-full h-full"
              />
            </div>
            
            {/* Map Info Overlay */}
            <div className="p-6 bg-gradient-to-r from-green-600 to-blue-600 text-white">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Kampung IT Solo</h3>
                  <p className="text-green-50 mb-1">
                    Kompleks Masjid Al-Muhtadin, Jl Semenromo, Gg Melon
                  </p>
                  <p className="text-green-50">
                    Sukoharjo, Jawa Tengah, Indonesia
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://www.google.com/maps/search/Kampung+IT+Solo+Sukoharjo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-green-600 hover:bg-green-50 font-bold rounded-full transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Buka di Google Maps
                  </a>
                  <a
                    href="https://wa.me/6289604666665?text=Halo%2C%20saya%20ingin%20berkunjung%20ke%20showroom%20Kampung%20IT%20Solo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 font-bold rounded-full transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Konfirmasi Kunjungan
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Directions Info */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-slate-200">
              <div className="text-3xl mb-3">🚗</div>
              <h4 className="font-bold text-slate-900 mb-2">Akses Kendaraan</h4>
              <p className="text-sm text-slate-600">
                Mudah diakses dengan kendaraan pribadi. Parkir luas tersedia.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-slate-200">
              <div className="text-3xl mb-3">🚌</div>
              <h4 className="font-bold text-slate-900 mb-2">Transportasi Umum</h4>
              <p className="text-sm text-slate-600">
                Dekat dengan halte bus dan terminal. Akses mudah dari pusat kota Solo.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-slate-200">
              <div className="text-3xl mb-3">📍</div>
              <h4 className="font-bold text-slate-900 mb-2">Landmark</h4>
              <p className="text-sm text-slate-600">
                Kompleks Masjid Al-Muhtadin, area Kampung IT Solo yang mudah ditemukan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
