# 🚀 Quick Update Guide - ELFAN SYSTEM Landing Page

## Panduan Cepat untuk Update Konten Real

Dokumen ini adalah panduan singkat untuk mengganti semua placeholder dengan data real sebelum launch.

---

## 📋 Checklist Utama

### 1. Hero Section Stats
**File**: `components/sections/HeroSection.tsx`

Cari dan ganti:
```typescript
{ value: "[X+]", label: "Institusi Terpercaya" }
{ value: "[X+]", label: "Kota di Indonesia" }
{ value: "[X+]", label: "Mitra Strategis" }
{ value: "[X.X★]", label: "Rating Kepuasan" }
```

Contoh:
```typescript
{ value: "500+", label: "Institusi Terpercaya" }
{ value: "50+", label: "Kota di Indonesia" }
{ value: "100+", label: "Mitra Strategis" }
{ value: "4.9★", label: "Rating Kepuasan" }
```

### 2. Hero Trust Indicators
**File**: `components/sections/HeroSection.tsx`

Cari: `"Hemat [XX%] Biaya Operasional"`
Ganti: `"Hemat 70% Biaya Operasional"`

### 3. Testimoni Klien
**File**: `components/sections/TestimonialsSection.tsx`

Untuk setiap testimoni, ganti:
```typescript
{
  name: "[Nama Klien]",              // Contoh: "Dr. Ahmad Fauzi, M.Pd"
  role: "[Jabatan]",                 // Contoh: "Kepala Perpustakaan"
  institution: "[Nama Institusi]",   // Contoh: "UIN Sunan Kalijaga"
  content: "[Testimoni lengkap...]", // Testimoni real dari klien
  image: "...",                      // Upload foto ke public/images/testimonials/
}
```

### 4. Portfolio Implementasi
**File**: `components/sections/PortfolioSection.tsx`

Untuk setiap portfolio item:
```typescript
{
  title: "[Nama Institusi]",  // Contoh: "Perpustakaan Daerah Sukoharjo"
  location: "[Kota]",         // Contoh: "Sukoharjo, Jawa Tengah"
  image: "...",               // Upload foto ke public/images/portfolio/
}
```

### 5. Dokumen Legalitas
**File**: `components/sections/LegalitySection.tsx`

Untuk setiap dokumen:
```typescript
{
  title: "Akta Pendirian",
  number: "[Nomor Akta]",      // Contoh: "No. 123/2020"
  issuer: "[Nama Notaris]",    // Contoh: "Notaris Budi Santoso, S.H."
  image: "...",                // Upload scan ke public/images/legal/
}
```

**Langkah Upload:**
1. Scan dokumen (Akta, SK, NIB, NPWP)
2. Blur data sensitif jika perlu
3. Save sebagai: `akta.jpg`, `sk-kemenkumham.jpg`, `nib.jpg`, `npwp.jpg`
4. Upload ke `public/images/legal/`
5. Update path:
```typescript
image: "/images/legal/akta.jpg"
```

### 6. Foto Tim/Kantor
**File**: `components/sections/ClosingSection.tsx`

Cari:
```typescript
src="https://images.unsplash.com/..."
alt="[TODO: Foto tim Alwustho...]"
```

Ganti:
```typescript
src="/images/team/team-photo.jpg"
alt="Tim Alwustho Technologies di Kampung IT Solo"
```

**Langkah Upload:**
1. Ambil foto tim atau suasana kantor
2. Crop dan resize (800x600px)
3. Save sebagai: `team-photo.jpg`
4. Upload ke `public/images/team/`

### 7. Closing Section Metrics
**File**: `components/sections/ClosingSection.tsx`

Cari dan ganti:
```typescript
<div className="text-3xl font-bold text-green-600 mb-1">[X+]</div>
```

Contoh:
```typescript
<div className="text-3xl font-bold text-green-600 mb-1">5+</div>  // Tahun
<div className="text-3xl font-bold text-blue-600 mb-1">500+</div>  // Klien
<div className="text-3xl font-bold text-purple-600 mb-1">50+</div> // Kota
```

---

## 📁 Folder Structure untuk Upload

Buat folder berikut di `public/images/`:

```
public/
└── images/
    ├── legal/
    │   ├── akta.jpg
    │   ├── sk-kemenkumham.jpg
    │   ├── nib.jpg
    │   └── npwp.jpg
    ├── team/
    │   └── team-photo.jpg
    ├── portfolio/
    │   ├── project-1.jpg
    │   ├── project-2.jpg
    │   ├── project-3.jpg
    │   ├── project-4.jpg
    │   ├── project-5.jpg
    │   └── project-6.jpg
    └── testimonials/
        ├── client-1.jpg
        ├── client-2.jpg
        ├── client-3.jpg
        ├── client-4.jpg
        ├── client-5.jpg
        └── client-6.jpg
```

---

## 🔍 Cara Cari Placeholder

### Method 1: Search di VS Code
1. Tekan `Ctrl + Shift + F` (Windows) atau `Cmd + Shift + F` (Mac)
2. Ketik: `[X+]` atau `[TODO` atau `PLACEHOLDER`
3. Akan muncul semua file yang ada placeholder

### Method 2: Grep di Terminal
```bash
# Cari semua placeholder
grep -r "\[X" components/sections/
grep -r "\[TODO" components/sections/
grep -r "PLACEHOLDER" components/sections/
```

---

## ⚡ Quick Commands

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Check for Errors
```bash
npm run build
# Jika ada error, akan muncul di terminal
```

---

## 🎯 Priority Order

Update dalam urutan ini untuk efisiensi:

1. **HIGH PRIORITY** (Wajib sebelum launch)
   - [ ] Hero stats (4 angka)
   - [ ] Dokumen legalitas (4 dokumen)
   - [ ] Contact info verification

2. **MEDIUM PRIORITY** (Penting untuk kredibilitas)
   - [ ] Testimoni klien (6 testimoni)
   - [ ] Portfolio foto (6 foto)
   - [ ] Foto tim/kantor (1 foto)

3. **LOW PRIORITY** (Bisa dilakukan bertahap)
   - [ ] Closing metrics (3 angka)
   - [ ] Additional content refinement

---

## 📞 Need Help?

Jika ada kesulitan saat update:

1. Baca dokumentasi lengkap:
   - `DATA-PLACEHOLDER-GUIDE.md`
   - `FINAL-SECTIONS-GUIDE.md`
   - `LANDING-PAGE-COMPLETE.md`

2. Contact:
   - WhatsApp: 0896-0466-6665
   - Website: www.elfanbookless.com

---

## ✅ Final Check

Sebelum deploy, pastikan:

- [ ] Semua `[X+]` sudah diganti
- [ ] Semua `[TODO]` sudah dihapus
- [ ] Semua foto sudah diupload
- [ ] `npm run build` berhasil tanpa error
- [ ] Test di browser: Chrome, Firefox, Safari
- [ ] Test responsive: Mobile, Tablet, Desktop
- [ ] Test semua link WhatsApp berfungsi

---

**Good luck! 🚀**
