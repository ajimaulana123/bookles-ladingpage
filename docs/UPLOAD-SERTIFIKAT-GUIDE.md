# 📋 PANDUAN UPLOAD SERTIFIKAT MEREK

## ✅ LANGKAH-LANGKAH

### 1. Siapkan File Gambar
- **File yang Anda miliki**: Sertifikat Merek ELFAN dari Kemenkumham RI
- **Format**: JPG atau PNG (recommended: JPG untuk ukuran lebih kecil)
- **Nama file**: `sertifikat-merek-elfan.jpg`

### 2. Buat Folder (jika belum ada)
```
public/
  └── images/
      └── legal/
          └── sertifikat-merek-elfan.jpg  ← Upload di sini
```

### 3. Upload File
**Cara 1: Via File Explorer**
1. Buka folder project: `C:\Users\user\Documents\bookles-lp`
2. Masuk ke folder: `public\images\`
3. Buat folder baru bernama: `legal`
4. Copy file sertifikat ke dalam folder `legal`
5. Rename file menjadi: `sertifikat-merek-elfan.jpg`

**Cara 2: Via Command Line**
```bash
# Buat folder
mkdir public\images\legal

# Copy file (sesuaikan path sumber)
copy "E:\Downloads\sertifikat-merek.jpg" "public\images\legal\sertifikat-merek-elfan.jpg"
```

### 4. Verifikasi
Pastikan file ada di:
```
public/images/legal/sertifikat-merek-elfan.jpg
```

---

## 📊 DETAIL SERTIFIKAT YANG SUDAH DIIMPLEMENTASIKAN

### Informasi dari Sertifikat:
- **Nama Merek**: ELFAN
- **Nomor Pendaftaran**: IDM000814737
- **Tanggal Penerimaan**: 29 Maret 2018
- **Pemegang Merek**: Junaedy Arfan
- **Alamat**: Gg. Melon, Warungjeruk RT.006/RW.021, Kel. Cemani, Kec. Grogol, Kab. Sukoharjo, Prov. Jawa Tengah, Indonesia
- **Penerbit**: Kementerian Hukum dan HAM RI - Direktorat Jenderal Kekayaan Intelektual

---

## 🎨 IMPLEMENTASI DI WEBSITE

### Lokasi: `components/sections/LegalitySection.tsx`

**Fitur yang sudah ditambahkan:**
1. ✅ Featured section untuk Sertifikat Merek (posisi teratas)
2. ✅ Highlight box dengan gradient background
3. ✅ Detail lengkap: nomor, tanggal, pemegang merek
4. ✅ Badge "VERIFIED" pada card
5. ✅ Ring hijau pada card untuk emphasis
6. ✅ Update headline: "Merek Terdaftar Resmi Kemenkumham RI"
7. ✅ Trust indicator: "Merek Terdaftar ®"

**Tampilan:**
- Sertifikat ditampilkan dalam ukuran besar di featured section
- Card sertifikat di grid dengan badge VERIFIED
- Informasi detail di bawah gambar sertifikat

---

## 🔍 OPTIMASI GAMBAR (OPSIONAL)

Jika file terlalu besar, Anda bisa kompres dengan:
- **Online**: TinyPNG.com, Squoosh.app
- **Target size**: < 500KB untuk loading cepat
- **Quality**: 80-85% (balance antara kualitas & ukuran)

---

## ✅ CHECKLIST

- [ ] Folder `public/images/legal/` sudah dibuat
- [ ] File sertifikat sudah di-upload
- [ ] Nama file: `sertifikat-merek-elfan.jpg`
- [ ] File bisa diakses di browser: `http://localhost:3000/images/legal/sertifikat-merek-elfan.jpg`
- [ ] Halaman homepage sudah menampilkan sertifikat dengan benar

---

## 🚀 TESTING

Setelah upload, jalankan:
```bash
npm run dev
```

Buka browser dan cek:
1. Homepage → scroll ke section "Legalitas & Kredibilitas"
2. Pastikan sertifikat muncul di featured section
3. Pastikan card sertifikat ada badge "VERIFIED"
4. Pastikan detail nomor dan tanggal tampil dengan benar

---

## 📝 CATATAN PENTING

- **Privacy**: Pastikan tidak ada data sensitif yang perlu diblur
- **Copyright**: Sertifikat ini adalah dokumen resmi milik Anda, aman untuk dipublikasikan
- **SEO**: Sertifikat ini akan meningkatkan trust dan kredibilitas website
- **Legal**: Menampilkan sertifikat resmi adalah bukti legalitas yang kuat

---

## 🎯 MANFAAT

Dengan menampilkan Sertifikat Merek:
1. ✅ Meningkatkan trust pengunjung
2. ✅ Membuktikan produk original & legal
3. ✅ Membedakan dari kompetitor
4. ✅ Meningkatkan conversion rate
5. ✅ SEO boost dengan keyword "merek terdaftar resmi"

---

**Status**: ⏳ Menunggu upload file sertifikat
**Next Step**: Upload file → Test di browser → Deploy
