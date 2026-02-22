# 🚀 Meta Pixel - Deployment ke Production

## Untuk Vercel

1. Buka dashboard Vercel: https://vercel.com
2. Pilih project ELFAN System
3. Klik **Settings** → **Environment Variables**
4. Tambahkan variable baru:
   - **Key**: `NEXT_PUBLIC_FB_PIXEL_ID`
   - **Value**: `YOUR_PIXEL_ID` (15-16 digit angka)
   - **Environment**: Pilih semua (Production, Preview, Development)
5. Klik **Save**
6. **Redeploy** project:
   - Klik tab **Deployments**
   - Klik titik tiga di deployment terakhir
   - Klik **Redeploy**

## Untuk Netlify

1. Buka dashboard Netlify: https://app.netlify.com
2. Pilih site ELFAN System
3. Klik **Site settings** → **Environment variables**
4. Klik **Add a variable**
5. Isi:
   - **Key**: `NEXT_PUBLIC_FB_PIXEL_ID`
   - **Value**: `YOUR_PIXEL_ID`
6. Klik **Save**
7. **Trigger deploy**:
   - Klik **Deploys** tab
   - Klik **Trigger deploy** → **Deploy site**

## Untuk Hosting Lain (cPanel, VPS, dll)

1. SSH ke server atau buka File Manager
2. Navigate ke folder project
3. Edit file `.env.production` atau `.env`:
```bash
nano .env.production
```
4. Tambahkan:
```env
NEXT_PUBLIC_FB_PIXEL_ID=YOUR_PIXEL_ID
```
5. Save (Ctrl+X, Y, Enter)
6. Rebuild project:
```bash
npm run build
npm run start
```

## Verifikasi Production

Setelah deploy:

1. Buka website production: `https://www.elfanbookless.com`
2. Install **Meta Pixel Helper** Chrome extension
3. Klik icon extension → harus muncul Pixel ID dan PageView event
4. Atau buka **Meta Events Manager** → **Test Events** → test dari website production

## Checklist Deployment

- [ ] Environment variable sudah ditambahkan
- [ ] Project sudah di-redeploy
- [ ] Pixel terdeteksi di website production (test dengan Pixel Helper)
- [ ] Test Events menunjukkan PageView dari production URL
- [ ] Tidak ada error di browser console

## Troubleshooting Production

**Pixel tidak terdeteksi di production:**
- Pastikan environment variable benar-benar tersimpan
- Pastikan sudah redeploy SETELAH menambahkan variable
- Clear CDN cache jika pakai Cloudflare/CDN lain
- Check browser console untuk error

**Events tidak muncul di Meta:**
- Tunggu 5-10 menit setelah deploy
- Test dengan incognito/private browsing
- Pastikan tidak ada AdBlocker
- Check di Test Events (lebih real-time)

## Next Steps Setelah Production Live

1. ✅ Monitor data masuk di Events Manager (1-2 minggu)
2. ✅ Buat Custom Audiences setelah ada minimal 100 pengunjung
3. ✅ Setup retargeting campaign
4. ✅ Monitor ROI dan optimize

---

**Support**: Jika ada masalah deployment, hubungi developer atau tim DevOps.
