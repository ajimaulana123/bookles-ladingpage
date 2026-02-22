# 🎯 Panduan Setup Meta Pixel untuk ELFAN System

## ⚡ Quick Start Checklist

Ikuti langkah ini secara berurutan:

- [ ] **Step 1**: Buat Meta Pixel di Events Manager → dapat Pixel ID (15-16 digit)
- [ ] **Step 2**: Buat file `.env.local` di root project
- [ ] **Step 3**: Isi dengan `NEXT_PUBLIC_FB_PIXEL_ID=YOUR_PIXEL_ID`
- [ ] **Step 4**: Restart server (`npm run dev`)
- [ ] **Step 5**: Test dengan Meta Pixel Helper atau Test Events
- [ ] **Step 6**: Tunggu 1-2 minggu untuk collect data
- [ ] **Step 7**: Buat Custom Audiences
- [ ] **Step 8**: Launch retargeting campaign

**Estimasi waktu setup**: 15-20 menit
**Estimasi waktu sebelum bisa retargeting**: 1-2 minggu (untuk collect minimal 100 pengunjung)

---

## Apa yang Sudah Diimplementasikan?

✅ Meta Pixel code sudah terpasang di website (otomatis via Next.js)
✅ Automatic page view tracking di semua halaman
✅ Event tracking untuk:
- Klik tombol WhatsApp
- Klik CTA buttons
- View halaman Pricing
- View halaman Product
- View halaman Portfolio
- Submit form kontak

**ANDA HANYA PERLU**: Masukkan Pixel ID ke file `.env.local`

## Perbedaan Setup Manual vs Otomatis

### ❌ Setup Manual (TIDAK PERLU DILAKUKAN)
Di dokumentasi Meta, mereka minta Anda copy-paste kode seperti ini ke `<head>`:
```html
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){...
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

### ✅ Setup Otomatis (SUDAH DILAKUKAN)
Kode Pixel sudah otomatis ter-inject via komponen React `<MetaPixel />` yang:
- Load script secara optimal (tidak blocking)
- Auto-track page changes di Next.js
- Support TypeScript
- Lebih mudah maintain

**Anda cukup masukkan Pixel ID saja!**

## Langkah Setup (Wajib Dilakukan!)

### 1. Buat Meta Pixel ID

**Step-by-step dengan Screenshot Reference:**

1. **Buka Meta Events Manager**: https://business.facebook.com/events_manager
   
2. **Pilih akun bisnis** Anda di dropdown kiri atas
   - Jika belum punya, klik "Create Account" dulu

3. **Klik tombol "Connect Data Sources"** (tombol hijau di kanan atas)

4. **Pilih "Web"** dari pilihan yang muncul

5. **Pilih "Meta Pixel"** → Klik **"Connect"**

6. **Isi form setup**:
   - **Pixel name**: `ELFAN System Website`
   - **Website URL** (opsional): `https://www.elfanbookless.com`
   - Klik **"Continue"**

7. **Pada halaman "Add Pixel to Website"**:
   - Anda akan lihat beberapa opsi:
     - ✅ **Manually add pixel code** ← PILIH INI
     - Partner integration
     - Email instructions
   
8. **Copy Pixel ID**:
   - Di bagian atas kode, akan ada tulisan seperti:
     ```
     <!-- Meta Pixel Code -->
     <script>
     ...
     fbq('init', '1234567890123456');  ← INI PIXEL ID ANDA
     ```
   - **COPY angka 15-16 digit** tersebut (contoh: `1234567890123456`)
   - **JANGAN** copy seluruh kode script

9. **Klik "Continue"** (bisa skip langkah selanjutnya karena kode sudah otomatis terpasang)

**Catatan Penting**:
- Pixel ID adalah angka 15-16 digit
- Bukan kode script panjang
- Simpan Pixel ID ini untuk langkah berikutnya

### 2. Masukkan Pixel ID ke Website

**PENTING**: Kode Pixel sudah otomatis terpasang di website. Anda HANYA perlu memasukkan Pixel ID saja.

**Cara Cepat**:
1. Copy file `.env.local.example` menjadi `.env.local`
2. Isi Pixel ID di baris `NEXT_PUBLIC_FB_PIXEL_ID=`
3. Save & restart server

**Cara Manual**:
1. Buat file baru bernama `.env.local` di root project (folder utama, sejajar dengan `package.json`)
2. Tambahkan baris ini:

```env
NEXT_PUBLIC_FB_PIXEL_ID=PASTE_PIXEL_ID_DISINI
```

Contoh (ganti dengan Pixel ID Anda yang sebenarnya):
```env
NEXT_PUBLIC_FB_PIXEL_ID=1234567890123456
```

3. Save file
4. Restart development server (tekan Ctrl+C di terminal, lalu jalankan lagi):
```bash
npm run dev
```

**Catatan**: 
- File `.env.local` tidak akan ter-commit ke Git (sudah ada di .gitignore)
- Jangan pakai quotes atau spasi: ✅ `NEXT_PUBLIC_FB_PIXEL_ID=123456` ❌ `NEXT_PUBLIC_FB_PIXEL_ID="123456"`
- Untuk production/deployment, masukkan variable ini di environment settings hosting Anda (Vercel/Netlify/dll)

### 3. Verifikasi Pixel Berfungsi

#### Cara 1: Test Events di Meta Events Manager (RECOMMENDED)
1. Di Meta Events Manager, setelah setup Pixel
2. Klik tab **Test Events** (di menu sebelah kiri)
3. Akan muncul **Test server events** dan **Test browser events**
4. Pilih **Test browser events**
5. Buka website Anda di tab/browser lain: `http://localhost:3000` (untuk development)
6. Lihat events muncul real-time di Test Events
7. Harus muncul event **PageView** dengan status hijau

#### Cara 2: Meta Pixel Helper (Chrome Extension)
1. Install extension: https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc
2. Buka website Anda
3. Klik icon extension di toolbar Chrome (icon `</>` berwarna hijau/biru)
4. Harus muncul:
   - Pixel ID Anda
   - Status hijau
   - Event "PageView" terdeteksi

#### Cara 3: Browser Console
1. Buka website Anda
2. Tekan F12 untuk buka Developer Tools
3. Ketik di Console: `fbq`
4. Jika muncul function, berarti Pixel sudah loaded
5. Ketik: `fbq('track', 'PageView')` untuk test manual

**Troubleshooting**:
- Jika tidak terdeteksi, pastikan `.env.local` sudah dibuat dengan benar
- Restart development server
- Clear browser cache (Ctrl+Shift+Delete)
- Pastikan tidak ada AdBlocker yang aktif

### 4. Setup Custom Conversions (Opsional tapi Recommended)

Di Events Manager:
1. Klik **Custom Conversions**
2. Buat conversion untuk:
   - **Lead WhatsApp**: Event = Contact, URL contains "wa.me"
   - **View Pricing**: Event = ViewContent, URL contains "/harga"
   - **View Product**: Event = ViewContent, URL contains "/produk"

## Events yang Ter-track Otomatis

| Event | Kapan Terjadi | Kegunaan |
|-------|---------------|----------|
| `PageView` | Setiap halaman dibuka | Retargeting semua pengunjung |
| `Lead` | Klik CTA button | Track interest tinggi |
| `Contact` | Klik WhatsApp | Track kontak langsung |
| `ViewContent` | Lihat halaman produk/pricing | Retarget yang lihat harga |

## Cara Membuat Retargeting Campaign

### Step 1: Buat Custom Audience

1. Di Meta Ads Manager, klik **Audiences**
2. Klik **Create Audience** → **Custom Audience**
3. Pilih **Website**
4. Pilih Pixel Anda
5. Buat audience:

**Audience 1: Semua Pengunjung (30 hari)**
- Event: All website visitors
- Retention: 30 days
- Nama: "Website Visitors - 30 Days"

**Audience 2: Lihat Pricing tapi Belum Kontak**
- Event: ViewContent (URL contains /harga)
- EXCLUDE: Contact event
- Retention: 30 days
- Nama: "Viewed Pricing - No Contact"

**Audience 3: Klik CTA tapi Belum Kontak**
- Event: Lead
- EXCLUDE: Contact event
- Retention: 14 days
- Nama: "Clicked CTA - No Contact"

### Step 2: Buat Retargeting Campaign

1. Klik **Create** → **Campaign**
2. Objective: **Traffic** atau **Conversions**
3. Di Ad Set:
   - Audience: Pilih custom audience yang sudah dibuat
   - Placement: Facebook & Instagram Feed + Stories
   - Budget: Mulai dari Rp 50,000/hari
4. Di Ad:
   - Format: Single Image atau Carousel
   - Copy: Ingatkan mereka tentang ELFAN System
   - CTA: "Hubungi Kami" atau "Pelajari Lebih Lanjut"

### Contoh Ad Copy untuk Retargeting:

**Untuk "Viewed Pricing - No Contact":**
```
Masih pertimbangkan perpustakaan digital untuk institusi Anda?

ELFAN System sudah dipercaya 500+ lembaga di Indonesia.
✅ 10,000+ koleksi buku Islami
✅ Hemat 70% biaya operasional
✅ Tanpa kuota internet

Konsultasi GRATIS sekarang! 👇
```

**Untuk "Clicked CTA - No Contact":**
```
Kami lihat Anda tertarik dengan ELFAN System! 👋

Ada pertanyaan? Tim kami siap membantu:
• Demo gratis di Kampung IT Solo
• Konsultasi kebutuhan perpustakaan
• Penawaran khusus untuk institusi

Chat WhatsApp sekarang! 💬
```

## Budget Recommendation

### Fase Testing (Bulan 1-2):
- Budget: Rp 50,000 - 100,000/hari
- Target: Retarget semua pengunjung
- Goal: Cari tahu audience mana yang paling responsive

### Fase Scaling (Bulan 3+):
- Budget: Rp 100,000 - 300,000/hari
- Target: Focus ke audience dengan engagement tinggi
- Goal: Maximize conversions

## ROI Calculation

Contoh perhitungan:
- Budget: Rp 3 juta/bulan
- Website visitors: 1,000/bulan
- Retargeting reach: ~70% (700 orang)
- Conversion rate retargeting: 5% (35 leads)
- Close rate: 10% (3-4 klien baru)
- Revenue per klien: Rp 10 juta (asumsi)
- **Total revenue: Rp 30-40 juta**
- **ROI: 10-13x**

## Tips Optimization

1. **Frequency Cap**: Jangan spam, set max 3-4 impressions per week
2. **Creative Rotation**: Ganti ad creative setiap 2 minggu
3. **A/B Testing**: Test berbagai copy dan visual
4. **Exclude Converters**: Jangan retarget yang sudah jadi klien
5. **Lookalike Audience**: Setelah 3 bulan, buat lookalike dari converters

## Troubleshooting

### Pixel tidak terdeteksi?
- ✅ Pastikan file `.env.local` ada di root folder (sejajar dengan `package.json`)
- ✅ Pastikan format benar: `NEXT_PUBLIC_FB_PIXEL_ID=1234567890123456` (tanpa spasi, tanpa quotes)
- ✅ Restart development server (Ctrl+C, lalu `npm run dev` lagi)
- ✅ Clear browser cache (Ctrl+Shift+Delete)
- ✅ Disable AdBlocker sementara
- ✅ Cek browser console (F12) untuk error messages

### Events tidak muncul?
- ✅ Pastikan Pixel ID benar (15-16 digit angka)
- ✅ Check di **Test Events** (real-time, lebih cepat dari dashboard)
- ✅ Tunggu 20-30 menit untuk data muncul di dashboard utama
- ✅ Pastikan tidak ada error di browser console

### Audience terlalu kecil untuk retargeting?
- ✅ Minimum 100 pengunjung untuk mulai retargeting
- ✅ Tunggu minimal 1-2 minggu untuk collect data
- ✅ Expand retention dari 30 ke 60 atau 90 hari
- ✅ Combine multiple audiences untuk reach lebih besar

### Pixel ID tidak muncul di Meta Events Manager?
- ✅ Setelah setup, klik **Data Sources** di menu kiri
- ✅ Pilih Pixel Anda dari list
- ✅ Klik **Settings** → lihat Pixel ID di bagian atas

### Website sudah live tapi Pixel belum aktif?
- ✅ Pastikan `.env.local` sudah di-deploy ke hosting
- ✅ Di Vercel/Netlify: masukkan `NEXT_PUBLIC_FB_PIXEL_ID` di Environment Variables
- ✅ Rebuild & redeploy website
- ✅ Test dengan Meta Pixel Helper di website production

## FAQ (Frequently Asked Questions)

**Q: Apakah Pixel akan memperlambat website?**
A: Tidak signifikan. Script di-load secara async (tidak blocking) dan ukurannya kecil (~20KB).

**Q: Apakah pengunjung tahu mereka di-track?**
A: Ya, browser modern menampilkan notifikasi cookies. Sebaiknya tambahkan Cookie Consent banner.

**Q: Berapa lama data tersimpan?**
A: Default 180 hari. Bisa diatur di Pixel Settings (7, 30, 60, 90, 180 hari).

**Q: Apakah bisa track pengunjung dari Google Ads juga?**
A: Bisa! Pixel track semua pengunjung, dari mana pun sumbernya (Google, Facebook, Organic, Direct).

**Q: Apakah harus bayar untuk pakai Pixel?**
A: Pixel GRATIS. Anda hanya bayar saat jalankan iklan retargeting.

**Q: Berapa budget minimum untuk retargeting?**
A: Minimum Rp 20,000/hari, tapi recommended Rp 50,000-100,000/hari untuk hasil optimal.

**Q: Apakah bisa retarget ke Instagram juga?**
A: Ya! Pixel yang sama bisa dipakai untuk retargeting di Facebook dan Instagram.

**Q: Bagaimana cara stop tracking setelah jadi klien?**
A: Buat audience "Exclude Converters" dengan event Contact, lalu exclude dari retargeting campaign.

## Next Steps

1. ✅ Setup Pixel ID (WAJIB)
2. ✅ Verifikasi tracking berfungsi
3. ⏳ Tunggu 1-2 minggu untuk collect data
4. ⏳ Buat custom audiences
5. ⏳ Launch retargeting campaign
6. ⏳ Monitor & optimize

## Resources

- Meta Pixel Documentation: https://developers.facebook.com/docs/meta-pixel
- Meta Business Help Center: https://www.facebook.com/business/help
- Events Manager: https://business.facebook.com/events_manager

## Support

Jika ada pertanyaan tentang implementasi teknis, hubungi developer.
Untuk strategi ads, konsultasikan dengan Meta Ads specialist.

---

**Catatan Penting:**
- Pixel hanya akan bekerja di production setelah Pixel ID dimasukkan
- Data mulai ter-collect sejak Pixel aktif
- Semakin banyak data, semakin akurat retargeting
- Minimum 100 pengunjung untuk mulai retargeting campaign
