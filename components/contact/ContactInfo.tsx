import { CONTACT } from "@/lib/constants"

export function ContactInfo() {
  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Telepon & WhatsApp",
      value: CONTACT.whatsappDisplay,
      link: `https://wa.me/${CONTACT.whatsapp}`,
      description: "Hubungi kami via telepon atau WhatsApp",
      color: "green",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "info@elfanbookless.com",
      link: "mailto:info@elfanbookless.com",
      description: "Kirim email untuk pertanyaan detail",
      color: "blue",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: "Website",
      value: CONTACT.website,
      link: `https://${CONTACT.website}`,
      description: "Kunjungi website resmi kami",
      color: "purple",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Alamat Kantor",
      value: CONTACT.location,
      link: "#map",
      description: CONTACT.address,
      color: "red",
    },
  ]

  const businessHours = [
    { day: "Senin - Jumat", hours: "08:00 - 17:00 WIB" },
    { day: "Sabtu", hours: "08:00 - 14:00 WIB" },
    { day: "Minggu", hours: "Tutup" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Informasi Kontak
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Berbagai cara untuk menghubungi kami. Pilih yang paling nyaman untuk Anda.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group"
              >
                <div className={`bg-gradient-to-br from-${method.color}-50 to-white rounded-2xl p-6 border-2 border-${method.color}-100 hover:border-${method.color}-400 transition-all hover:shadow-xl`}>
                  <div className={`text-${method.color}-600 mb-4 group-hover:scale-110 transition-transform`}>
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {method.title}
                  </h3>
                  <p className={`text-${method.color}-600 font-semibold mb-2`}>
                    {method.value}
                  </p>
                  <p className="text-sm text-slate-600">
                    {method.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Business Hours & Company Info */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Business Hours */}
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Jam Operasional
              </h3>
              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-slate-200 last:border-0">
                    <span className="font-semibold text-slate-700">{schedule.day}</span>
                    <span className="text-slate-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate-600 italic">
                💡 WhatsApp 24/7 untuk pertanyaan mendesak
              </p>
            </div>

            {/* Company Info */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Informasi Perusahaan
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Nama Perusahaan</p>
                  <p className="font-bold text-slate-900">{CONTACT.company}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">Lokasi</p>
                  <p className="font-bold text-slate-900">{CONTACT.location}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">Alamat Lengkap</p>
                  <p className="text-slate-700">{CONTACT.address}</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-green-200">
                <p className="text-sm text-slate-600 mb-3">Kunjungi Showroom Kami:</p>
                <a 
                  href="#map"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Lihat di Peta
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
