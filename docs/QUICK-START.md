# ⚡ Quick Start Guide - ELFAN SYSTEM

## 🚀 Mulai dalam 5 Menit

### Step 1: Install Dependencies
```bash
npm install
```
⏱️ Waktu: ~2 menit

### Step 2: Jalankan Development Server
```bash
npm run dev
```
⏱️ Waktu: ~10 detik

### Step 3: Buka Browser
```
http://localhost:3000
```
✅ Landing page sudah jalan!

---

## 📸 Ganti Gambar (Opsional)

### Cepat: Gunakan Placeholder Dulu
Landing page sudah menggunakan gambar placeholder dari Unsplash. Bisa langsung deploy!

### Nanti: Ganti dengan Gambar Asli
1. Simpan 3 gambar di `public/images/`:
   - `elfan-interface-laptop.jpg`
   - `qr-code-scanning.jpg`
   - `ereader-tablet.jpg`

2. Edit `app/page.tsx`, cari baris dengan `images.unsplash.com`

3. Ganti dengan `/images/nama-file.jpg`

📖 Detail: Lihat `PANDUAN-GAMBAR.md`

---

## 🚀 Deploy ke Internet

### Cara Termudah: Vercel (Gratis)

1. **Push ke GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/elfan-landing.git
git push -u origin main
```

2. **Deploy**
- Buka [vercel.com](https://vercel.com)
- Sign in dengan GitHub
- Import repository
- Click "Deploy"
- Selesai! 🎉

⏱️ Waktu total: ~5 menit

📖 Detail: Lihat `DEPLOYMENT.md`

---

## ✏️ Edit Konten

### Ganti Teks
Edit file: `app/page.tsx`

Cari section yang ingin diubah:
- Hero Section (baris ~40)
- Problem Section (baris ~70)
- Products Section (baris ~90)
- Mission Section (baris ~180)
- Footer (baris ~280)

### Ganti Warna
Edit file: `tailwind.config.ts` dan `app/globals.css`

Warna saat ini:
- Primary: Green (#22c55e)
- Secondary: Blue (#1e40af)

### Ganti Kontak
Cari dan replace di `app/page.tsx`:
- WhatsApp: `0896-0466-6665` → nomor baru
- Website: `www.elfanbookless.com` → domain baru
- Alamat: Edit di footer section

---

## 🔍 Test SEO

### Google Lighthouse
1. Buka DevTools (F12)
2. Tab "Lighthouse"
3. Click "Generate report"
4. Target score: > 90

### Google Search Console
1. Deploy website dulu
2. Buka [search.google.com/search-console](https://search.google.com/search-console)
3. Add property
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

📖 Detail: Lihat `SEO-CHECKLIST.md`

---

## 📱 Test Responsive

### Browser DevTools
1. F12 → Toggle device toolbar
2. Test di berbagai ukuran:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1280px

### Real Devices
Test di smartphone dan tablet asli untuk hasil terbaik.

---

## 🆘 Troubleshooting

### Error: "Cannot find module"
```bash
rm -rf node_modules
npm install
```

### Error: "Port 3000 already in use"
```bash
npm run dev -- -p 3001
```

### Gambar tidak muncul
- Restart server: `Ctrl+C` lalu `npm run dev`
- Cek path: harus `/images/file.jpg` (dengan slash)

### Build error
```bash
rm -rf .next
npm run build
```

📖 Detail: Lihat `INSTALASI.md`

---

## 📚 Dokumentasi Lengkap

1. **README.md** - Overview project
2. **INSTALASI.md** - Panduan instalasi detail
3. **PANDUAN-GAMBAR.md** - Cara ganti gambar
4. **SEO-CHECKLIST.md** - Checklist SEO lengkap
5. **DEPLOYMENT.md** - Panduan deploy ke hosting
6. **RINGKASAN-PROJECT.md** - Ringkasan lengkap project

---

## ✅ Checklist Sebelum Launch

- [ ] Install dependencies (`npm install`)
- [ ] Test di localhost (`npm run dev`)
- [ ] Ganti gambar (opsional, bisa nanti)
- [ ] Test responsive (mobile, tablet, desktop)
- [ ] Build production (`npm run build`)
- [ ] Deploy ke hosting (Vercel/Netlify)
- [ ] Test di domain production
- [ ] Submit sitemap ke Google
- [ ] Setup Google Analytics (opsional)

---

## 📞 Butuh Bantuan?

**Alwustho Technologies**
- WhatsApp: 0896-0466-6665
- Website: www.elfanbookless.com

---

## 🎯 Next Steps

### Hari Ini
1. ✅ Install & run locally
2. ✅ Test semua fitur
3. ✅ Deploy ke Vercel

### Minggu Ini
1. Ganti gambar dengan asli
2. Submit ke Google Search Console
3. Setup Google Analytics
4. Share ke social media

### Bulan Ini
1. Monitor traffic & analytics
2. Collect feedback
3. Optimize berdasarkan data
4. Add testimonials (jika ada)

---

**Selamat! Landing page ELFAN SYSTEM siap digunakan! 🎉**
