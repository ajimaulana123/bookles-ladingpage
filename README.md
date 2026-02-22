# ELFAN SYSTEM - Landing Page

Landing page untuk ELFAN SYSTEM - Islamic Digital Education Platform dengan fokus pada Perpustakaan Digital Islami dan Bookless Library System.

## 🚀 Teknologi

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Shadcn UI**

## 📦 Instalasi

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Buka browser di [http://localhost:3000](http://localhost:3000)

## 🎨 Skema Warna

- **Hijau Primer**: `#22c55e` (Green-600) - Warna utama brand
- **Biru Gelap**: `#1e40af` (Blue-700) - Aksen profesional
- **Putih**: `#ffffff` - Background bersih
- **Slate**: Untuk teks dan elemen sekunder

## 📸 Gambar yang Perlu Diganti

Saat ini menggunakan placeholder dari Unsplash. Ganti dengan gambar asli Anda:

### 1. Hero Section (Baris 52)
**File**: Gambar laptop dengan interface ELFAN System
**Path**: `app/page.tsx` line 52
**Alt text**: "ELFAN System - Perpustakaan Digital Islami pada laptop menampilkan interface bookless library system"

### 2. Bookless Library Card (Baris 107)
**File**: Gambar tangan scan QR Code di rak buku
**Path**: `app/page.tsx` line 107
**Alt text**: "Bookless Library System - Akses perpustakaan digital melalui QR Code tanpa buku fisik"

### 3. Hybrid Library Card (Baris 145)
**File**: Gambar e-reader/tablet dengan koleksi buku
**Path**: `app/page.tsx` line 145
**Alt text**: "Hybrid Library System - Modernisasi perpustakaan konvensional dengan digitalisasi backup"

## 📁 Cara Mengganti Gambar

1. Simpan gambar Anda di folder `public/images/`
2. Update path di `app/page.tsx`:

```tsx
// Dari:
src="https://images.unsplash.com/photo-..."

// Menjadi:
src="/images/nama-file-anda.jpg"
```

## 🔍 SEO Features

- ✅ Meta tags lengkap (title, description, keywords)
- ✅ Open Graph untuk social media
- ✅ Twitter Card
- ✅ Structured heading hierarchy (H1, H2, H3)
- ✅ Alt text pada semua gambar
- ✅ Semantic HTML
- ✅ Mobile responsive
- ✅ Fast loading dengan Next.js Image optimization

## 📱 Responsive Design

Landing page fully responsive untuk:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large Desktop (1280px+)

## 🛠️ Build untuk Production

```bash
npm run build
npm start
```

## 📞 Kontak

**Alwustho Technologies - Kampung IT Solo**
- WhatsApp: 0896-0466-6665
- Website: www.elfanbookless.com
- Alamat: Kompleks Masjid Al-Muhtadin, Jl Semenromo, Gg Melon, Sukoharjo

## 📝 Catatan

- Semua link WhatsApp sudah terintegrasi dengan nomor 0896-0466-6665
- Warna brand menggunakan skema Hijau-Putih-Biru Gelap
- Konten sudah dioptimasi untuk SEO dengan keyword: "Perpustakaan Digital Islami", "Bookless Library System", "Solusi Smart City Indonesia"
