import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-green-600 mb-4">404</div>
          <div className="text-6xl mb-4">📚</div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-lg mx-auto">
          Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan. 
          Seperti buku yang hilang di perpustakaan! 📖
        </p>

        {/* Quick Links */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Mungkin Anda Mencari:
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/">
              <div className="p-4 border-2 border-slate-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all cursor-pointer group">
                <div className="text-3xl mb-2">🏠</div>
                <div className="font-semibold text-slate-900 group-hover:text-green-600">
                  Beranda
                </div>
                <div className="text-sm text-slate-600">
                  Kembali ke halaman utama
                </div>
              </div>
            </Link>

            <Link href="/produk">
              <div className="p-4 border-2 border-slate-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all cursor-pointer group">
                <div className="text-3xl mb-2">📦</div>
                <div className="font-semibold text-slate-900 group-hover:text-green-600">
                  Produk
                </div>
                <div className="text-sm text-slate-600">
                  Lihat produk kami
                </div>
              </div>
            </Link>

            <Link href="/harga">
              <div className="p-4 border-2 border-slate-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all cursor-pointer group">
                <div className="text-3xl mb-2">💰</div>
                <div className="font-semibold text-slate-900 group-hover:text-green-600">
                  Harga
                </div>
                <div className="text-sm text-slate-600">
                  Cek paket & harga
                </div>
              </div>
            </Link>

            <Link href="/kontak">
              <div className="p-4 border-2 border-slate-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all cursor-pointer group">
                <div className="text-3xl mb-2">📞</div>
                <div className="font-semibold text-slate-900 group-hover:text-green-600">
                  Kontak
                </div>
                <div className="text-sm text-slate-600">
                  Hubungi kami
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full shadow-xl">
              🏠 Kembali ke Beranda
            </Button>
          </Link>
          <a 
            href="https://wa.me/6289604666665?text=Halo%20ELFAN%20System%2C%20saya%20butuh%20bantuan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-6 text-lg rounded-full">
              💬 Hubungi Kami
            </Button>
          </a>
        </div>

        {/* Fun Fact */}
        <div className="mt-12 p-6 bg-green-50 rounded-xl border-2 border-green-200">
          <p className="text-sm text-slate-600">
            💡 <span className="font-semibold">Tahukah Anda?</span> ELFAN System memiliki 10,000+ koleksi buku digital 
            yang bisa diakses tanpa internet. Tidak seperti halaman ini yang hilang! 😄
          </p>
        </div>
      </div>
    </div>
  );
}
