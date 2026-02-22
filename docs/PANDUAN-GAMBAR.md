# 📸 Panduan Mengganti Gambar

## Gambar yang Perlu Disiapkan

Berdasarkan dokumen ELFAN SYSTEM, Anda perlu menyiapkan 3 gambar utama:

### 1. Hero Section - Interface ELFAN System
**Lokasi**: `app/page.tsx` baris 52
**Gambar yang dibutuhkan**: Foto laptop/desktop menampilkan interface ELFAN System
**Sumber dari dokumen**: Halaman 1 - Screenshot interface perpustakaan digital
**Ukuran rekomendasi**: 1200x800px (landscape)
**Format**: JPG atau PNG

```tsx
// Cari baris ini:
<Image
  src="https://images.unsplash.com/photo-498050108023-c5249f4df085?w=800&q=80"
  
// Ganti menjadi:
<Image
  src="/images/elfan-interface-laptop.jpg"
```

### 2. Bookless Library - QR Code Scanning
**Lokasi**: `app/page.tsx` baris 107
**Gambar yang dibutuhkan**: Foto tangan memegang smartphone sedang scan QR Code di rak buku
**Sumber dari dokumen**: Halaman 3 - Ilustrasi cara akses via QR Code
**Ukuran rekomendasi**: 800x600px
**Format**: JPG atau PNG

```tsx
// Cari baris ini:
<Image
  src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&q=80"
  
// Ganti menjadi:
<Image
  src="/images/qr-code-scanning.jpg"
```

### 3. Hybrid Library - E-Reader/Tablet
**Lokasi**: `app/page.tsx` baris 145
**Gambar yang dibutuhkan**: Foto e-reader Sony atau tablet menampilkan koleksi buku digital
**Sumber dari dokumen**: Halaman 2 - Foto device e-reader dengan koleksi
**Ukuran rekomendasi**: 800x600px
**Format**: JPG atau PNG

```tsx
// Cari baris ini:
<Image
  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80"
  
// Ganti menjadi:
<Image
  src="/images/ereader-tablet.jpg"
```

## Langkah-langkah Mengganti Gambar

### Step 1: Siapkan Folder Images
```bash
# Buat folder images di public (jika belum ada)
mkdir public/images
```

### Step 2: Copy Gambar Anda
Simpan 3 gambar di atas ke folder `public/images/` dengan nama:
- `elfan-interface-laptop.jpg`
- `qr-code-scanning.jpg`
- `ereader-tablet.jpg`

### Step 3: Update Code
Buka file `app/page.tsx` dan ganti URL Unsplash dengan path lokal seperti contoh di atas.

### Step 4: Optimasi Gambar (Opsional)
Untuk performa terbaik, kompres gambar Anda:
- Gunakan tools seperti TinyPNG atau ImageOptim
- Target ukuran file: < 200KB per gambar
- Format WebP lebih baik untuk web (Next.js akan auto-convert)

## Tips Fotografi untuk Gambar Marketing

### Hero Section (Interface Laptop)
- ✅ Gunakan pencahayaan yang baik
- ✅ Pastikan interface terlihat jelas dan profesional
- ✅ Background bersih atau blur
- ✅ Angle sedikit dari atas (bird's eye view)

### QR Code Scanning
- ✅ Tangan terlihat natural sedang memegang smartphone
- ✅ QR Code terlihat jelas di layar
- ✅ Rak buku atau label QR Code terlihat di background
- ✅ Fokus pada aksi scanning

### E-Reader/Tablet
- ✅ Device terlihat jelas dengan layar menyala
- ✅ Tampilkan koleksi buku digital di layar
- ✅ Pencahayaan yang tidak membuat glare di layar
- ✅ Background netral

## Alternatif: Gunakan Gambar dari Dokumen

Jika Anda memiliki dokumen PDF/PPT ELFAN SYSTEM:

1. Export gambar dari dokumen dengan kualitas tinggi
2. Crop dan resize sesuai kebutuhan
3. Simpan dengan nama yang sesuai
4. Upload ke `public/images/`

## Troubleshooting

### Gambar tidak muncul?
- Pastikan path benar: `/images/nama-file.jpg` (dengan slash di depan)
- Cek nama file (case-sensitive di Linux/Mac)
- Restart development server: `npm run dev`

### Gambar pecah/blur?
- Gunakan ukuran gambar yang lebih besar
- Minimum 800px untuk lebar
- Gunakan format PNG untuk gambar dengan teks

### Gambar terlalu besar (loading lambat)?
- Kompres dengan TinyPNG.com
- Gunakan format WebP
- Next.js Image component sudah auto-optimize

## Kontak Support

Jika ada pertanyaan, hubungi:
- WhatsApp: 0896-0466-6665
- Website: www.elfanbookless.com
