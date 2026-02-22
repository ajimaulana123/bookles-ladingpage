# ✅ Meta Pixel Implementation Checklist

Print atau bookmark halaman ini untuk tracking progress setup Meta Pixel.

---

## 📋 PHASE 1: SETUP (Day 1)

### A. Persiapan Meta Business
- [ ] Punya akun Facebook personal
- [ ] Buat/akses Meta Business Suite (business.facebook.com)
- [ ] Verify email & phone number
- [ ] Akses Events Manager

### B. Buat Meta Pixel
- [ ] Buka Events Manager
- [ ] Klik "Connect Data Sources"
- [ ] Pilih "Web" → "Meta Pixel"
- [ ] Beri nama: "ELFAN System Website"
- [ ] Pilih "Manually add pixel code"
- [ ] Copy Pixel ID (15-16 digit angka)
- [ ] Simpan Pixel ID di notepad/dokumen

### C. Install di Website (Development)
- [ ] Buka project di code editor
- [ ] Copy file `.env.local.example` → `.env.local`
- [ ] Paste Pixel ID ke `.env.local`
- [ ] Format: `NEXT_PUBLIC_FB_PIXEL_ID=1234567890123456`
- [ ] Save file
- [ ] Restart development server (`npm run dev`)

### D. Verifikasi Development
- [ ] Install Meta Pixel Helper extension
- [ ] Buka `http://localhost:3000`
- [ ] Klik icon Pixel Helper
- [ ] Verify: Pixel ID muncul & status hijau
- [ ] Verify: PageView event terdeteksi
- [ ] Test: Klik beberapa halaman, cek events

### E. Test Events (Optional tapi Recommended)
- [ ] Buka Events Manager → Test Events
- [ ] Pilih "Test browser events"
- [ ] Buka website di tab lain
- [ ] Verify: Events muncul real-time
- [ ] Test: Navigate ke berbagai halaman

**Estimasi waktu**: 15-20 menit
**Status**: [ ] COMPLETED

---

## 🚀 PHASE 2: DEPLOYMENT (Day 1-2)

### A. Persiapan Production
- [ ] Pastikan development test sudah OK
- [ ] Pastikan Pixel ID sudah dicatat
- [ ] Akses dashboard hosting (Vercel/Netlify/dll)

### B. Setup Environment Variable

#### Jika pakai Vercel:
- [ ] Login ke Vercel dashboard
- [ ] Pilih project ELFAN System
- [ ] Settings → Environment Variables
- [ ] Add: `NEXT_PUBLIC_FB_PIXEL_ID` = `YOUR_PIXEL_ID`
- [ ] Select: Production, Preview, Development
- [ ] Save

#### Jika pakai Netlify:
- [ ] Login ke Netlify dashboard
- [ ] Pilih site ELFAN System
- [ ] Site settings → Environment variables
- [ ] Add: `NEXT_PUBLIC_FB_PIXEL_ID` = `YOUR_PIXEL_ID`
- [ ] Save

#### Jika pakai hosting lain:
- [ ] SSH/FTP ke server
- [ ] Edit `.env.production` atau `.env`
- [ ] Add: `NEXT_PUBLIC_FB_PIXEL_ID=YOUR_PIXEL_ID`
- [ ] Save

### C. Deploy & Verify
- [ ] Trigger redeploy (atau push ke Git)
- [ ] Tunggu deployment selesai
- [ ] Buka website production
- [ ] Test dengan Meta Pixel Helper
- [ ] Verify: Pixel terdeteksi di production
- [ ] Check: Tidak ada error di console

### D. Final Verification
- [ ] Buka Events Manager → Test Events
- [ ] Test dari production URL
- [ ] Verify: Events masuk dari production
- [ ] Test: Klik berbagai halaman
- [ ] Test: Klik button WhatsApp (optional)

**Estimasi waktu**: 10-15 menit
**Status**: [ ] COMPLETED

---

## ⏳ PHASE 3: DATA COLLECTION (Week 1-2)

### Week 1
- [ ] Monitor Events Manager daily
- [ ] Check: PageView events masuk
- [ ] Check: Unique visitors count
- [ ] Target: 50-100 visitors
- [ ] Note: Belum bisa retargeting (audience terlalu kecil)

### Week 2
- [ ] Monitor Events Manager
- [ ] Check: Total visitors 100+
- [ ] Check: Top pages visited
- [ ] Check: Traffic sources
- [ ] Ready: Bisa mulai retargeting!

**Estimasi waktu**: 1-2 minggu passive monitoring
**Status**: [ ] COMPLETED

---

## 🎯 PHASE 4: RETARGETING SETUP (Week 3)

### A. Buat Custom Audiences

#### Audience 1: All Website Visitors
- [ ] Events Manager → Audiences
- [ ] Create Audience → Custom Audience → Website
- [ ] Event: All website visitors
- [ ] Retention: 30 days
- [ ] Name: "Website Visitors - 30 Days"
- [ ] Save

#### Audience 2: Pricing Page Visitors
- [ ] Create Audience → Custom Audience → Website
- [ ] Event: ViewContent
- [ ] URL contains: `/harga`
- [ ] Retention: 14 days
- [ ] Name: "Viewed Pricing - 14 Days"
- [ ] Save

#### Audience 3: High Intent (Optional)
- [ ] Create Audience → Custom Audience → Website
- [ ] Event: Lead (clicked CTA)
- [ ] Exclude: Contact event
- [ ] Retention: 7 days
- [ ] Name: "Clicked CTA - No Contact"
- [ ] Save

### B. Verify Audiences
- [ ] Check audience size (minimum 100)
- [ ] Wait 24 hours if too small
- [ ] Verify: Status "Ready"

**Estimasi waktu**: 15-20 menit
**Status**: [ ] COMPLETED

---

## 💰 PHASE 5: LAUNCH CAMPAIGN (Week 3-4)

### A. Persiapan Campaign
- [ ] Siapkan budget: Rp 50,000-100,000/hari
- [ ] Siapkan ad creative (image/video)
- [ ] Siapkan ad copy (text)
- [ ] Siapkan landing page URL

### B. Create Campaign
- [ ] Buka Meta Ads Manager
- [ ] Create → Campaign
- [ ] Objective: Traffic atau Conversions
- [ ] Name: "ELFAN System - Retargeting"
- [ ] Continue

### C. Ad Set Setup
- [ ] Name: "Website Visitors - Retargeting"
- [ ] Conversion location: Website
- [ ] Budget: Rp 50,000-100,000/hari
- [ ] Audience: Select custom audience
- [ ] Location: Indonesia (atau specific cities)
- [ ] Age: 25-65
- [ ] Placement: Automatic (atau manual)
- [ ] Continue

### D. Ad Creative
- [ ] Format: Single Image atau Carousel
- [ ] Upload image/video
- [ ] Primary text: Ad copy
- [ ] Headline: Catchy headline
- [ ] Description: Value proposition
- [ ] CTA button: "Hubungi Kami" atau "Pelajari Lebih Lanjut"
- [ ] Destination: Website URL
- [ ] Preview: Check semua placement
- [ ] Publish

### E. Monitor & Optimize
- [ ] Day 1-3: Monitor daily
- [ ] Check: Impressions, clicks, CTR
- [ ] Check: Cost per result
- [ ] Day 4-7: Optimize if needed
- [ ] Week 2: Scale if ROI positive

**Estimasi waktu**: 30-45 menit setup, ongoing monitoring
**Status**: [ ] COMPLETED

---

## 📊 PHASE 6: MONITORING & OPTIMIZATION (Ongoing)

### Weekly Tasks
- [ ] Check Events Manager: Total visitors
- [ ] Check Ads Manager: Campaign performance
- [ ] Check: Cost per click
- [ ] Check: Conversion rate
- [ ] Check: ROI (revenue vs ad spend)

### Monthly Tasks
- [ ] Review: Overall performance
- [ ] Optimize: Pause low-performing ads
- [ ] Scale: Increase budget if ROI good
- [ ] Test: New ad creatives
- [ ] Update: Audience retention periods

### Quarterly Tasks
- [ ] Review: 3-month data
- [ ] Create: Lookalike audiences
- [ ] Expand: New audience segments
- [ ] Refine: Targeting strategy

**Status**: [ ] ONGOING

---

## 🎯 SUCCESS METRICS

### Week 1-2: Setup Phase
- [ ] Pixel installed & verified
- [ ] Events tracking correctly
- [ ] 50-100+ visitors tracked

### Week 3-4: First Campaign
- [ ] Audiences created (100+ people)
- [ ] Campaign launched
- [ ] 5-10 additional leads

### Month 2: Optimization
- [ ] 500+ visitors in audience
- [ ] ROI positive (3x+)
- [ ] 2-3 conversions from retargeting

### Month 3+: Scaling
- [ ] 1,000+ visitors in audience
- [ ] ROI 5x-10x
- [ ] Consistent lead flow

---

## 🆘 TROUBLESHOOTING CHECKLIST

### Pixel tidak terdeteksi?
- [ ] Check: `.env.local` file exists
- [ ] Check: Pixel ID format correct (no quotes, no spaces)
- [ ] Check: Server restarted after adding Pixel ID
- [ ] Check: Browser cache cleared
- [ ] Check: AdBlocker disabled

### Events tidak muncul?
- [ ] Check: Pixel ID correct
- [ ] Check: Test Events (real-time)
- [ ] Wait: 20-30 minutes for dashboard
- [ ] Check: Browser console for errors

### Audience terlalu kecil?
- [ ] Wait: 1-2 weeks for more visitors
- [ ] Expand: Retention period (30 → 60 days)
- [ ] Combine: Multiple audiences
- [ ] Drive: More traffic to website

### Ads tidak perform?
- [ ] Check: Audience size (minimum 100)
- [ ] Check: Ad creative quality
- [ ] Check: Ad copy relevance
- [ ] Test: Different creatives
- [ ] Adjust: Targeting or budget

---

## 📚 DOCUMENTATION REFERENCE

- [ ] Read: `META-PIXEL-INDEX.md` (overview)
- [ ] Read: `META-PIXEL-SETUP-GUIDE.md` (detailed guide)
- [ ] Read: `META-PIXEL-DEPLOYMENT.md` (deployment)
- [ ] Read: `META-PIXEL-FLOW-DIAGRAM.md` (visual guide)
- [ ] Bookmark: This checklist for reference

---

**Last Updated**: 2026-02-23
**Version**: 1.0

**Print this checklist and check off items as you complete them!**
