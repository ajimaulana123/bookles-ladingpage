# 🔍 PANDUAN MELIHAT SECTION LEGALITAS & SERTIFIKAT MEREK

## ✅ PERUBAHAN YANG SUDAH DILAKUKAN

### 1. Struktur Baru Homepage
```
SECTION 8: Who We Serve
SECTION 9: FAQ (Pertanyaan Umum) ← BARU (Dipisah)
SECTION 10: Legality (Sertifikat Merek) ← BARU (Dengan sertifikat)
SECTION 11: Closing
SECTION 12: Final CTA
```

### 2. Files Modified
- ✅ `app/page.tsx` - Updated imports & structure
- ✅ `components/sections/FAQSection.tsx` - NEW (FAQ only)
- ✅ `components/sections/LegalitySection.tsx` - UPDATED (With trademark certificate)
- ⚠️ `components/sections/TrustBuildersSection.tsx` - NOT USED (replaced)

---

## 🚀 CARA MELIHAT DI BROWSER

### Step 1: Jalankan Development Server
```bash
npm run dev
```

### Step 2: Buka Browser
```
http://localhost:3000
```

### Step 3: Scroll ke Bawah
Urutan section dari atas ke bawah:
1. Hero
2. Problem + Solution
3. Features
4. Social Proof (Testimonials)
5. Clients Teaser
6. Value Proposition
7. How It Works
8. Who We Serve
9. **FAQ** ← Section baru
10. **Legalitas & Sertifikat Merek** ← Section dengan sertifikat merek
11. Closing
12. Final CTA
13. Footer

---

## 📍 LOKASI SECTION LEGALITAS

### Posisi di Homepage:
- **Setelah**: FAQ Section
- **Sebelum**: Closing Section

### Direct Link (setelah server running):
```
http://localhost:3000#legality
```

---

## 🎨 APA YANG AKAN TERLIHAT

### Section Legalitas akan menampilkan:

#### 1. Header
```
🔵 Badge: "Legalitas & Kredibilitas"
📝 Headline: "Merek Terdaftar Resmi Kemenkumham RI"
📄 Subheadline: Menyebutkan nomor sertifikat IDM000814737
```

#### 2. Featured Sertifikat Merek (Highlight Box)
```
┌─────────────────────────────────────────────────┐
│  ®️  Merek Terdaftar Resmi Republik Indonesia   │
│                                                  │
│  ┌──────────────────────────────────────────┐  │
│  │                                           │  │
│  │     [GAMBAR SERTIFIKAT MEREK]            │  │
│  │     (Akan muncul setelah upload)         │  │
│  │                                           │  │
│  └──────────────────────────────────────────┘  │
│                                                  │
│  ✓ Nomor Pendaftaran: IDM000814737              │
│  📅 Tanggal Penerimaan: 29 Maret 2018           │
│  🏢 Pemegang Merek: Junaedy Arfan               │
│                                                  │
│  Perlindungan hukum berlaku 10 tahun...         │
└─────────────────────────────────────────────────┘
```

#### 3. Grid Dokumen Legalitas (4 Cards)
```
┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│✓VERIFIED │ │          │ │          │ │          │
│    ®️    │ │   📜     │ │   ⚖️     │ │   🏢     │
│          │ │          │ │          │ │          │
│ Sertif.  │ │  Akta    │ │   SK     │ │   NIB    │
│  Merek   │ │ Pendirian│ │Kemenkumham│ │          │
│IDM000... │ │  [...]   │ │  [...]   │ │  [...]   │
│29 Mar 18 │ │          │ │          │ │          │
└──────────┘ └──────────┘ └──────────┘ └──────────┘
  (green ring)
```

#### 4. Trust Indicators (3 Columns)
```
🛡️ Merek Terdaftar ®    🔒 Data Aman    ✅ Konten Legal
```

#### 5. Company Info Banner (Dark)
```
Alwustho Technologies
Kampung IT Solo - Kompleks Masjid Al-Muhtadin
✓ Badan Hukum Resmi  ✓ Terdaftar & Terpercaya
```

---

## ⚠️ CATATAN PENTING

### Gambar Sertifikat Belum Muncul?
Jika gambar sertifikat tidak muncul, itu karena file belum di-upload.

**Solusi:**
1. Upload file sertifikat ke: `public/images/legal/sertifikat-merek-elfan.jpg`
2. Refresh browser (Ctrl + F5)

**Sementara waktu:**
- Section tetap tampil dengan layout yang benar
- Placeholder image akan muncul
- Semua text dan detail sudah tampil

---

## 🔧 TROUBLESHOOTING

### 1. Section tidak muncul?
```bash
# Restart development server
npm run dev
```

### 2. Error di console?
```bash
# Check diagnostics
npm run build
```

### 3. Gambar tidak muncul?
- Pastikan file ada di: `public/images/legal/sertifikat-merek-elfan.jpg`
- Nama file harus exact match (case-sensitive)
- Format: JPG atau PNG

### 4. Layout rusak?
- Clear browser cache (Ctrl + Shift + Delete)
- Hard refresh (Ctrl + F5)

---

## 📊 PERBANDINGAN SEBELUM & SESUDAH

### SEBELUM (TrustBuildersSection):
- FAQ dan Legality jadi satu section
- Legality cuma 4 cards sederhana
- Tidak ada highlight sertifikat merek
- Placeholder warning masih ada

### SESUDAH (FAQSection + LegalitySection):
- ✅ FAQ dan Legality dipisah (lebih clean)
- ✅ Featured section untuk sertifikat merek
- ✅ Badge "VERIFIED" pada card sertifikat
- ✅ Detail lengkap: nomor, tanggal, pemegang merek
- ✅ Professional presentation
- ✅ SEO optimized dengan keyword "merek terdaftar"

---

## 🎯 NEXT STEPS

### 1. Upload Sertifikat (PRIORITY)
```bash
# Copy file ke folder yang benar
copy "path\to\sertifikat.jpg" "public\images\legal\sertifikat-merek-elfan.jpg"
```

### 2. Test di Browser
- Jalankan `npm run dev`
- Buka `http://localhost:3000`
- Scroll ke section Legalitas
- Verify sertifikat muncul dengan benar

### 3. Update Dokumen Lain (Optional)
Jika punya scan dokumen lain:
- Akta Pendirian
- SK Kemenkumham
- NIB
- NPWP

Upload ke `public/images/legal/` dan update data di `LegalitySection.tsx`

---

## ✅ CHECKLIST

- [x] FAQSection created
- [x] LegalitySection updated with trademark
- [x] Homepage structure updated
- [x] No TypeScript errors
- [ ] Sertifikat image uploaded
- [ ] Tested in browser
- [ ] Verified display on mobile
- [ ] Ready for production

---

## 📞 SUPPORT

Jika ada masalah atau pertanyaan:
1. Check file `UPLOAD-SERTIFIKAT-GUIDE.md` untuk panduan upload
2. Check file `SERTIFIKAT-MEREK-IMPLEMENTATION.md` untuk detail teknis
3. Run `npm run dev` dan lihat console untuk error messages

**Status**: ✅ Code ready, ⏳ Waiting for image upload
