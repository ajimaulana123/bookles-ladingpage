# 📊 Panduan Setup Google Analytics 4 untuk ELFAN System

## ⚡ Quick Start Checklist

- [ ] **Step 1**: Buat Google Analytics 4 property → dapat Measurement ID (G-XXXXXXXXXX)
- [ ] **Step 2**: Tambahkan ke `.env` file
- [ ] **Step 3**: Test dengan GA Realtime
- [ ] **Step 4**: Deploy ke production
- [ ] **Step 5**: Monitor data masuk

**Estimasi waktu setup**: 10-15 menit

---

## 🎯 Apa yang Sudah Diimplementasikan?

✅ Google Analytics 4 code sudah terpasang di website
✅ Automatic page view tracking di semua halaman
✅ Event tracking functions siap pakai
✅ Integration dengan Next.js App Router

**ANDA HANYA PERLU**: Buat GA4 property dan masukkan Measurement ID!

---

## 📝 Langkah 1: Buat Google Analytics 4 Property

### 1.1 Buka Google Analytics
- URL: https://analytics.google.com
- Login dengan akun Google kamu

### 1.2 Buat Account (Kalau Belum Punya)
1. Klik **"Start measuring"** atau **"Admin"** (icon gear di kiri bawah)
2. Klik **"Create Account"**
3. Account name: `ELFAN System`
4. Centang semua checkbox (data sharing)
5. Klik **"Next"**

### 1.3 Buat Property
1. Property name: `ELFAN System Website`
2. Reporting time zone: `(GMT+07:00) Jakarta`
3. Currency: `Indonesian Rupiah (IDR)`
4. Klik **"Next"**

### 1.4 Business Information
1. Industry category: `Technology` atau `Education`
2. Business size: Pilih yang sesuai
3. How you plan to use Google Analytics: Centang yang relevan
4. Klik **"Create"**

### 1.5 Accept Terms of Service
1. Pilih country: `Indonesia`
2. Centang checkbox
3. Klik **"Accept"**

### 1.6 Setup Data Stream
1. Platform: Pilih **"Web"**
2. Website URL: `https://www.elfanbookless.com` (atau domain kamu)
3. Stream name: `ELFAN System Website`
4. Klik **"Create stream"**

### 1.7 Copy Measurement ID
Setelah stream dibuat, akan muncul:
```
Measurement ID: G-XXXXXXXXXX
```

**COPY ID ini!** (format: G- diikuti 10 karakter)

---

## 📝 Langkah 2: Masukkan Measurement ID ke Website

### 2.1 Update File .env

Buka file `.env` di root project, tambahkan:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Ganti `G-XXXXXXXXXX` dengan Measurement ID kamu yang sebenarnya.

Contoh:
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-ABC1234567
NEXT_PUBLIC_FB_PIXEL_ID=1403583414308577
```

### 2.2 Restart Development Server

```bash
# Stop server (Ctrl+C)
# Start lagi
npm run dev
```

---

## ✅ Langkah 3: Test di Development

### 3.1 Buka Website
Buka: `http://localhost:3000`

### 3.2 Cek Google Analytics Realtime
1. Buka Google Analytics: https://analytics.google.com
2. Pilih property **"ELFAN System Website"**
3. Klik **"Reports"** di menu kiri
4. Klik **"Realtime"**
5. Harusnya muncul **1 user** (kamu!)

### 3.3 Test Navigation
- Klik berbagai halaman (Home, Produk, Harga, dll)
- Lihat di Realtime, harusnya page views bertambah
- Lihat "Page title and screen name" untuk detail halaman

### 3.4 Cek Browser Console (Optional)
1. Tekan F12
2. Tab Console
3. Ketik: `gtag`
4. Tekan Enter
5. Kalau muncul function, berarti GA sudah loaded ✅

---

## 🚀 Langkah 4: Deploy ke Production

### 4.1 Setup di Vercel

1. Buka Vercel dashboard: https://vercel.com
2. Pilih project ELFAN System
3. Klik **Settings** → **Environment Variables**
4. Tambahkan variable baru:
   - **Key**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value**: `G-XXXXXXXXXX` (Measurement ID kamu)
   - **Environment**: Pilih semua (Production, Preview, Development)
5. Klik **Save**

### 4.2 Redeploy

1. Klik tab **Deployments**
2. Klik titik tiga di deployment terakhir
3. Klik **Redeploy**
4. Tunggu deployment selesai

### 4.3 Verify Production

1. Buka website production: `https://bookles-landingpage.vercel.app`
2. Buka Google Analytics → Realtime
3. Harusnya muncul user dari production
4. Test klik berbagai halaman

---

## 📊 Langkah 5: Monitor & Explore Dashboard

### 5.1 Realtime Report
- **Reports** → **Realtime**
- Lihat user yang sedang online
- Lihat halaman yang sedang dibuka
- Lihat dari mana mereka datang

### 5.2 Acquisition Report (Setelah 24-48 jam)
- **Reports** → **Acquisition** → **Traffic acquisition**
- Lihat dari mana traffic datang:
  - Organic Search (Google)
  - Direct (langsung ketik URL)
  - Referral (dari website lain)
  - Social (Facebook, Instagram, dll)

### 5.3 Engagement Report
- **Reports** → **Engagement** → **Pages and screens**
- Lihat halaman mana yang paling banyak dikunjungi
- Lihat average engagement time per halaman

### 5.4 Demographics (Setelah beberapa hari)
- **Reports** → **User** → **Demographics**
- Lihat umur, gender, lokasi pengunjung
- Lihat device (mobile, desktop, tablet)

---

## 🎯 Custom Events yang Sudah Tersedia

Kode sudah include custom events untuk tracking:

```typescript
import { gaEvents } from '@/lib/googleAnalytics';

// Track CTA clicks
gaEvents.clickCTA('Button Name');

// Track WhatsApp clicks
gaEvents.clickWhatsApp('Source Name');

// Track pricing page view
gaEvents.viewPricing();

// Track product view
gaEvents.viewProduct('Product Name');

// Track portfolio view
gaEvents.viewPortfolio();

// Track form submission
gaEvents.submitForm('Form Name');
```

Events ini bisa ditambahkan ke button/component nanti kalau mau tracking lebih detail.

---

## 📈 Apa yang Bisa Kamu Lihat di GA4?

### Data Real-time:
- Jumlah user online sekarang
- Halaman yang sedang dibuka
- Dari mana mereka datang
- Device yang dipakai

### Data Historical (24 jam+):
- Total page views
- Total users (unique visitors)
- Average session duration
- Bounce rate
- Pages per session
- Top pages
- Traffic sources
- User demographics
- Device breakdown
- Geographic data

### Insights:
- Halaman mana yang paling populer?
- Dari mana traffic terbanyak?
- Berapa lama user di website?
- Halaman mana yang bounce rate tinggi?
- Device apa yang paling banyak dipakai?

---

## 🔧 Troubleshooting

### GA tidak muncul di Realtime?
- ✅ Pastikan `.env` sudah ada Measurement ID
- ✅ Restart development server
- ✅ Clear browser cache
- ✅ Disable AdBlocker
- ✅ Tunggu 5-10 menit

### Measurement ID tidak muncul?
- ✅ Pastikan sudah create Data Stream
- ✅ Klik Data Stream → lihat Measurement ID di detail

### Data tidak muncul di production?
- ✅ Pastikan environment variable sudah di-set di Vercel
- ✅ Pastikan sudah redeploy setelah set variable
- ✅ Test dengan Incognito mode
- ✅ Tunggu 24-48 jam untuk data historical

---

## 💡 Tips & Best Practices

### 1. Jangan Track Development Traffic
Kalau mau exclude traffic dari development:
- Buat filter di GA4
- Exclude IP address kamu
- Atau jangan set GA_MEASUREMENT_ID di `.env.local`

### 2. Setup Goals/Conversions
Di GA4, setup conversions untuk:
- WhatsApp clicks
- Form submissions
- Pricing page views

### 3. Link dengan Google Search Console
- Hubungkan GA4 dengan Search Console
- Lihat keyword apa yang bawa traffic dari Google

### 4. Setup Custom Reports
- Buat custom reports sesuai kebutuhan
- Export data untuk analisis lebih lanjut

---

## 📊 Perbandingan: Meta Pixel vs Google Analytics

| Fitur | Meta Pixel | Google Analytics |
|-------|------------|------------------|
| **Dashboard** | Basic | Lengkap ✅ |
| **Traffic Sources** | ❌ | ✅ Detailed |
| **User Behavior** | ❌ | ✅ Complete |
| **Realtime** | Test Events | ✅ Realtime Report |
| **Demographics** | ❌ | ✅ Age, Gender, Location |
| **Device Breakdown** | ❌ | ✅ Mobile, Desktop, Tablet |
| **Retargeting** | ✅ Facebook/IG | ❌ |
| **Custom Audiences** | ✅ | ❌ |
| **Biaya** | Gratis | Gratis |

**Kesimpulan**: Pakai keduanya untuk hasil optimal! 🚀

---

## 🎯 Next Steps

### Week 1:
- ✅ Setup GA4
- ✅ Monitor Realtime
- ✅ Verify data masuk

### Week 2-4:
- Explore dashboard
- Lihat traffic patterns
- Identify top pages
- Analyze user behavior

### Month 2+:
- Setup custom reports
- Link dengan Search Console
- Setup conversions
- Optimize based on data

---

## 📚 Resources

- [Google Analytics 4 Documentation](https://support.google.com/analytics/answer/10089681)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [GA4 Reports Overview](https://support.google.com/analytics/answer/9212670)
- [GA4 vs Universal Analytics](https://support.google.com/analytics/answer/11583528)

---

**Last Updated**: 2026-02-23
**Version**: 1.0
**Status**: Ready for Setup ✅
