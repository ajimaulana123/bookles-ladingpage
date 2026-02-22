# 📝 Panduan Mengganti Data Placeholder dengan Data Real

## ⚠️ DATA YANG PERLU DIGANTI

Landing page saat ini menggunakan beberapa data placeholder yang perlu diganti dengan data REAL dari bisnis Anda.

---

## 1️⃣ HERO SECTION (`components/sections/HeroSection.tsx`)

### Stats yang Perlu Diganti:

```typescript
// BARIS 82-102
<div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">[X+]</div>
<div className="text-slate-600">Institusi</div>
```

**Ganti dengan:**
- Jumlah institusi yang sudah menggunakan ELFAN System
- Jumlah kota yang sudah terjangkau
- Jumlah mitra bisnis
- Rating real dari klien (jika ada survey)

**Contoh:**
```typescript
<div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">25+</div>
<div className="text-slate-600">Institusi</div>
```

### Trust Indicators (Baris 56-76):

```typescript
<span>Hemat [XX%] Biaya Operasional</span>
<span>[X+] Institusi Terpercaya</span>
```

**Ganti dengan:**
- Persentase hemat real dari case study klien
- Jumlah institusi yang sudah terpercaya

---

## 2️⃣ TESTIMONIALS SECTION (`components/sections/TestimonialsSection.tsx`)

### ⚠️ SEMUA TESTIMONI ADALAH PLACEHOLDER

**Yang Perlu Dilakukan:**

1. **Minta Testimoni dari Klien Real**
   - Hubungi 3-6 klien terbaik Anda
   - Minta izin untuk publish nama, foto, dan testimoni
   - Tanyakan: "Apa manfaat terbesar ELFAN System untuk institusi Anda?"

2. **Ambil Foto Real**
   - Foto klien (dengan izin)
   - Atau foto logo institusi
   - Simpan di folder `public/images/testimonials/`

3. **Ganti Data di File**

**Format Testimoni:**
```typescript
{
  name: "Nama Lengkap + Gelar",
  role: "Jabatan di Institusi",
  institution: "Nama Institusi Lengkap",
  location: "Kota, Provinsi",
  image: "/images/testimonials/nama-klien.jpg", // Foto real
  quote: "Testimoni real dari klien (2-3 kalimat)",
  rating: 5, // atau rating real
  stats: "Jumlah pengguna real (misal: 300+ siswa aktif)"
}
```

**Contoh Real:**
```typescript
{
  name: "Drs. Bambang Sutrisno, M.Pd",
  role: "Kepala Sekolah",
  institution: "SMA Muhammadiyah 1 Sukoharjo",
  location: "Sukoharjo, Jawa Tengah",
  image: "/images/testimonials/bambang-sutrisno.jpg",
  quote: "Sejak menggunakan ELFAN System, siswa kami lebih aktif membaca. Hemat biaya dan mudah digunakan.",
  rating: 5,
  stats: "450+ siswa menggunakan"
}
```

### Trust Indicators (Baris 110-130):

```typescript
<div className="text-4xl font-bold text-green-600 mb-2">[X+]</div>
<div className="text-slate-600">Institusi Terpercaya</div>
```

**Ganti dengan data real yang sama dengan Hero Section**

---

## 3️⃣ FAQ SECTION (`components/sections/FAQSection.tsx`)

### ✅ FAQ Sudah Generik - Bisa Disesuaikan

FAQ saat ini sudah cukup generik, tapi Anda bisa:

1. **Tambah FAQ dari Pertanyaan Real Klien**
   - Cek chat WhatsApp dengan calon klien
   - Catat pertanyaan yang sering muncul
   - Tambahkan ke array FAQS

2. **Update Jawaban dengan Data Spesifik**
   - Waktu instalasi real
   - Harga paket real
   - Jumlah pengguna concurrent real

**Contoh Update:**
```typescript
{
  question: "Berapa lama waktu instalasi dan apakah sulit digunakan?",
  answer: "Instalasi ELFAN System hanya memerlukan waktu 1 hari kerja. Sistem ini sangat user-friendly dengan interface bahasa Indonesia dan fitur QR Code scan untuk akses cepat. Tidak perlu training khusus, bahkan pengguna awam teknologi dapat menggunakannya dengan mudah."
}
```

---

## 4️⃣ PORTFOLIO SECTION (`components/sections/PortfolioSection.tsx`)

### ⚠️ SEMUA FOTO ADALAH PLACEHOLDER

**Yang Perlu Dilakukan:**

1. **Ambil Foto Implementasi Real**
   - Foto saat instalasi ELFAN System
   - Foto sistem yang sudah berjalan
   - Foto pengguna sedang mengakses sistem
   - Foto hardware (server, router) yang terpasang

2. **Minta Izin dari Institusi**
   - Hubungi institusi yang sudah menggunakan
   - Minta izin untuk publish foto
   - Tanyakan boleh/tidak nama institusi disebutkan

3. **Simpan Foto**
   - Simpan di folder `public/images/portfolio/`
   - Format: `[nama-institusi]-[nomor].jpg`
   - Compress ke max 200KB per foto

4. **Ganti Data di File**

**Format Portfolio:**
```typescript
{
  title: "Nama Institusi Real",
  location: "Kota, Provinsi",
  type: "Jenis Institusi (Sekolah/Masjid/Pesantren/dll)",
  image: "/images/portfolio/nama-institusi.jpg", // Foto real
  imageAlt: "Implementasi ELFAN System di [Nama Institusi]",
  users: "Jumlah pengguna real (misal: 450+ siswa aktif)"
}
```

**Contoh Real:**
```typescript
{
  title: "SMA Muhammadiyah 1 Sukoharjo",
  location: "Sukoharjo, Jawa Tengah",
  type: "Perpustakaan Sekolah",
  image: "/images/portfolio/sma-muh-1-sukoharjo.jpg",
  imageAlt: "Implementasi ELFAN System di perpustakaan SMA Muhammadiyah 1 Sukoharjo",
  users: "450+ siswa aktif"
}
```

### Stats Bar (Baris 110-130):

```typescript
<div className="text-4xl font-bold mb-2">[X+]</div>
<div className="text-green-100">Institusi Terpercaya</div>
```

**Ganti dengan data real yang sama dengan Hero & Testimonials Section**

---

## 5️⃣ HOW IT WORKS SECTION (`components/sections/HowItWorksSection.tsx`)

### ✅ Sudah Generik - Tidak Perlu Diganti

Section ini sudah menggunakan konten generik yang sesuai dengan cara kerja ELFAN System. 
Namun jika ada perubahan alur atau fitur baru, bisa disesuaikan.

---

## 6️⃣ SCHEMA MARKUP (`app/layout.tsx`)

### Data yang Perlu Update:

**Baris 50-60 - Rating:**
```typescript
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.9", // Ganti dengan rating real
  "reviewCount": "500"   // Ganti dengan jumlah review real
}
```

**Cara Mendapatkan Rating Real:**
1. Buat Google Form survey kepuasan klien
2. Kirim ke semua klien existing
3. Hitung rata-rata rating
4. Update di schema

---

## 📋 CHECKLIST PENGGANTIAN DATA

### Prioritas Tinggi (Harus Diganti Sebelum Launch):
- [ ] Hero Stats (Institusi, Kota, Mitra, Rating)
- [ ] Hero Trust Indicators (Hemat %, Institusi)
- [ ] Minimal 3 Testimoni Real dengan foto
- [ ] Trust Indicators di Testimonials Section
- [ ] Minimal 3 Foto Portfolio Implementasi Real
- [ ] Portfolio Stats Bar (4 angka)

### Prioritas Medium (Bisa Diganti Setelah Launch):
- [ ] Semua 6 Testimoni dengan foto real
- [ ] Semua 6 Foto Portfolio dengan foto real
- [ ] FAQ disesuaikan dengan pertanyaan real klien
- [ ] Schema markup rating & review count

### Prioritas Rendah (Optional):
- [ ] Update FAQ berdasarkan feedback
- [ ] Tambah testimoni baru secara berkala
- [ ] Tambah foto portfolio baru

---

## 🎯 CARA MENGUMPULKAN DATA REAL

### 1. Data Stats (Institusi, Kota, dll)
```
Sumber: Database internal / CRM
Cara: Hitung jumlah klien aktif, kota yang terjangkau, dll
```

### 2. Testimoni
```
Cara:
1. Buat template email/WA:
   "Halo [Nama], kami ingin menampilkan testimoni Anda di website.
    Bolehkah kami publish nama, jabatan, dan quote Anda?
    Jika berkenan, mohon kirim foto untuk ditampilkan."

2. Kirim ke 10-15 klien terbaik
3. Pilih 6 testimoni terbaik
4. Minta izin tertulis untuk publish
```

### 3. Rating & Review
```
Cara:
1. Buat Google Form dengan pertanyaan:
   - Rating 1-5 untuk produk
   - Rating 1-5 untuk support
   - Rating 1-5 untuk value for money
   - Testimoni singkat (optional)

2. Kirim ke semua klien via email/WA
3. Hitung rata-rata rating
4. Update di website
```

---

## 📸 PANDUAN FOTO TESTIMONI

### Spesifikasi Foto:
- **Ukuran**: 400x400px (square)
- **Format**: JPG atau PNG
- **Ukuran File**: Max 100KB (compress jika perlu)
- **Kualitas**: Professional, tidak blur

### Alternatif Jika Tidak Ada Foto:
1. Gunakan logo institusi
2. Gunakan initial name (misal: "BS" untuk Bambang Sutrisno)
3. Gunakan avatar generator (https://ui-avatars.com/)

**Contoh Avatar Generator:**
```
https://ui-avatars.com/api/?name=Bambang+Sutrisno&size=400&background=16a34a&color=fff
```

---

## 🔧 CARA UPDATE FILE

### 1. Update Hero Section:
```bash
# Edit file
code components/sections/HeroSection.tsx

# Cari [X+] dan ganti dengan angka real
# Cari [XX%] dan ganti dengan persentase real
```

### 2. Update Testimonials:
```bash
# Edit file
code components/sections/TestimonialsSection.tsx

# Ganti semua data di array TESTIMONIALS
# Upload foto ke public/images/testimonials/
# Update path image
```

### 3. Test Perubahan:
```bash
npm run dev
# Buka http://localhost:3000
# Cek semua data sudah benar
```

---

## ⚠️ PENTING: LEGAL & PRIVACY

### Sebelum Publish Testimoni:
1. ✅ Minta izin tertulis dari klien
2. ✅ Simpan bukti izin (email/WA screenshot)
3. ✅ Jangan publish data sensitif (email, phone, alamat lengkap)
4. ✅ Gunakan nama institusi yang sudah public

### Template Izin:
```
"Dengan ini saya [Nama] memberikan izin kepada Alwustho Technologies
untuk menampilkan nama, jabatan, institusi, dan testimoni saya di
website www.elfanbookless.com untuk keperluan marketing."

Tanda tangan: _______
Tanggal: _______
```

---

## 📞 Butuh Bantuan?

Jika ada kesulitan mengganti data:
1. Baca file ini lagi dengan teliti
2. Cek contoh-contoh yang diberikan
3. Test di development server dulu sebelum deploy
4. Hubungi developer jika ada error

---

## ✅ SUMMARY

**Data yang HARUS diganti:**
1. Hero Stats (5 angka)
2. Hero Trust Indicators (2 data)
3. Testimonials (6 testimoni)
4. Testimonials Trust Indicators (4 angka)
5. Portfolio (6 foto implementasi)
6. Portfolio Stats Bar (4 angka)

**Total: ~27 data placeholder yang perlu diganti**

**Estimasi Waktu:**
- Mengumpulkan data: 3-5 hari
- Ambil foto portfolio: 1-2 hari
- Update file: 2-3 jam
- Testing: 1 jam

**Good luck! 🚀**
