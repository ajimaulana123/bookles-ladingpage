# 📸 Folder Images

Simpan semua gambar untuk landing page di folder ini.

## Gambar yang Diperlukan

### 1. elfan-interface-laptop.jpg
- **Ukuran**: 1200x800px (landscape)
- **Lokasi penggunaan**: Hero Section
- **Deskripsi**: Laptop/desktop menampilkan interface ELFAN System
- **Format**: JPG atau PNG
- **Ukuran file**: < 200KB (setelah kompresi)

### 2. qr-code-scanning.jpg
- **Ukuran**: 800x600px
- **Lokasi penggunaan**: Bookless Library Card
- **Deskripsi**: Tangan memegang smartphone scan QR Code
- **Format**: JPG atau PNG
- **Ukuran file**: < 200KB (setelah kompresi)

### 3. ereader-tablet.jpg
- **Ukuran**: 800x600px
- **Lokasi penggunaan**: Hybrid Library Card
- **Deskripsi**: E-reader atau tablet dengan koleksi buku digital
- **Format**: JPG atau PNG
- **Ukuran file**: < 200KB (setelah kompresi)

## Tips Optimasi

1. **Kompres gambar** sebelum upload:
   - TinyPNG.com
   - ImageOptim
   - Squoosh.app

2. **Format yang disarankan**:
   - JPG untuk foto
   - PNG untuk gambar dengan teks
   - WebP untuk web (Next.js auto-convert)

3. **Ukuran file**:
   - Target: < 200KB per gambar
   - Maximum: < 500KB

4. **Resolusi**:
   - Gunakan 2x untuk retina display
   - Tapi tetap jaga ukuran file

## Cara Mengganti Gambar

Setelah menyimpan gambar di folder ini, edit file `app/page.tsx`:

```tsx
// Cari baris dengan Unsplash URL
src="https://images.unsplash.com/..."

// Ganti dengan path lokal
src="/images/nama-file.jpg"
```

Lihat `PANDUAN-GAMBAR.md` untuk detail lengkap.
