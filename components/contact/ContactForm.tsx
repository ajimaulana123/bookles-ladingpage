"use client"

import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Format WhatsApp message
    const message = `Halo ELFAN System,%0A%0ANama: ${formData.name}%0AEmail: ${formData.email}%0ATelepon: ${formData.phone}%0AInstitusi: ${formData.institution}%0A%0APesan:%0A${formData.message}`
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/6289604666665?text=${message}`, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Kirim Pesan
            </h2>
            <p className="text-xl text-slate-600">
              Isi formulir di bawah ini dan kami akan menghubungi Anda segera
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border-2 border-slate-200">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="nama@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                  Nomor Telepon <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="08xx-xxxx-xxxx"
                />
              </div>

              {/* Institution */}
              <div>
                <label htmlFor="institution" className="block text-sm font-semibold text-slate-700 mb-2">
                  Nama Institusi <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  required
                  value={formData.institution}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="Nama sekolah/universitas/institusi"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                Pesan <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-green-500 focus:outline-none transition-colors resize-none"
                placeholder="Ceritakan kebutuhan perpustakaan digital Anda..."
              />
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-sm text-blue-800">
                  <p className="font-semibold mb-1">Pesan akan dikirim via WhatsApp</p>
                  <p>Setelah klik tombol kirim, Anda akan diarahkan ke WhatsApp untuk mengirim pesan ke tim kami.</p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full text-lg shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Kirim via WhatsApp
            </button>

            <p className="text-center text-sm text-slate-500 mt-4">
              Dengan mengirim pesan, Anda menyetujui untuk dihubungi oleh tim kami
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
