# 🚀 Panduan Deployment ELFAN SYSTEM Landing Page

## Pilihan Platform Deployment

### 1. Vercel (Recommended) ⭐

**Kelebihan:**
- ✅ Gratis untuk personal/small projects
- ✅ Auto-deploy dari GitHub
- ✅ CDN global otomatis
- ✅ SSL certificate gratis
- ✅ Preview deployments
- ✅ Optimized untuk Next.js

**Langkah Deployment:**

1. **Push ke GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/elfan-landing.git
git push -u origin main
```

2. **Deploy ke Vercel**
- Buka [vercel.com](https://vercel.com)
- Sign in dengan GitHub
- Click "New Project"
- Import repository "elfan-landing"
- Click "Deploy"
- Selesai! 🎉

3. **Custom Domain**
- Buka project settings di Vercel
- Domains → Add Domain
- Masukkan: `www.elfanbookless.com`
- Update DNS records di domain provider:
  ```
  Type: CNAME
  Name: www
  Value: cname.vercel-dns.com
  ```

**Environment Variables (jika diperlukan):**
```
NEXT_PUBLIC_API_URL=https://api.elfanbookless.com
```

---

### 2. Netlify

**Kelebihan:**
- ✅ Gratis untuk personal projects
- ✅ Easy setup
- ✅ Form handling built-in
- ✅ SSL certificate gratis

**Langkah Deployment:**

1. **Push ke GitHub** (sama seperti Vercel)

2. **Deploy ke Netlify**
- Buka [netlify.com](https://netlify.com)
- Sign in dengan GitHub
- "New site from Git"
- Choose repository
- Build settings:
  ```
  Build command: npm run build
  Publish directory: .next
  ```
- Click "Deploy site"

3. **Custom Domain**
- Site settings → Domain management
- Add custom domain: `www.elfanbookless.com`
- Update DNS records

---

### 3. VPS/Cloud Server (DigitalOcean, AWS, etc.)

**Untuk yang butuh kontrol penuh**

**Langkah Deployment:**

1. **Setup Server**
```bash
# SSH ke server
ssh root@your-server-ip

# Update system
apt update && apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs

# Install PM2 (process manager)
npm install -g pm2
```

2. **Upload Project**
```bash
# Di local machine
scp -r elfan-landing root@your-server-ip:/var/www/

# Atau gunakan Git
cd /var/www
git clone https://github.com/username/elfan-landing.git
cd elfan-landing
```

3. **Build & Run**
```bash
# Install dependencies
npm install

# Build production
npm run build

# Start dengan PM2
pm2 start npm --name "elfan-landing" -- start
pm2 save
pm2 startup
```

4. **Setup Nginx**
```bash
# Install Nginx
apt install nginx

# Create config
nano /etc/nginx/sites-available/elfanbookless.com
```

```nginx
server {
    listen 80;
    server_name www.elfanbookless.com elfanbookless.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
ln -s /etc/nginx/sites-available/elfanbookless.com /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

5. **Setup SSL dengan Let's Encrypt**
```bash
apt install certbot python3-certbot-nginx
certbot --nginx -d elfanbookless.com -d www.elfanbookless.com
```

---

### 4. Shared Hosting (cPanel)

**Jika hanya punya shared hosting**

**Catatan:** Tidak semua shared hosting support Node.js. Cek dulu dengan provider.

**Langkah:**

1. **Build Static Export**

Edit `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

2. **Build**
```bash
npm run build
```

3. **Upload**
- Folder `out/` akan berisi static files
- Upload semua isi folder `out/` ke `public_html/`
- Selesai!

**Kekurangan:**
- ❌ Tidak ada server-side rendering
- ❌ Tidak ada API routes
- ❌ Image optimization tidak optimal

---

## Pre-Deployment Checklist

### 1. Environment Variables
```bash
# .env.local (jangan commit ke Git!)
NEXT_PUBLIC_SITE_URL=https://www.elfanbookless.com
NEXT_PUBLIC_WHATSAPP_NUMBER=6289604666665
```

### 2. Update URLs
Cari dan ganti semua URL development:
```tsx
// Dari:
http://localhost:3000

// Ke:
https://www.elfanbookless.com
```

### 3. Optimize Images
```bash
# Kompres semua gambar di public/images/
# Target: < 200KB per gambar
# Tools: TinyPNG, ImageOptim, Squoosh
```

### 4. Test Build Locally
```bash
npm run build
npm start

# Buka http://localhost:3000
# Test semua fitur
```

### 5. SEO Final Check
- [ ] Meta tags complete
- [ ] Sitemap accessible
- [ ] Robots.txt correct
- [ ] All images have alt text
- [ ] No broken links

### 6. Performance Check
```bash
# Run Lighthouse audit
# Target scores:
# - Performance: > 90
# - Accessibility: > 90
# - Best Practices: > 90
# - SEO: > 90
```

---

## Post-Deployment Tasks

### 1. Submit to Google
```
Google Search Console:
1. Add property: www.elfanbookless.com
2. Verify ownership
3. Submit sitemap: https://www.elfanbookless.com/sitemap.xml
```

### 2. Setup Analytics
```tsx
// Add to app/layout.tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### 3. Test Everything
- [ ] Homepage loads correctly
- [ ] All sections visible
- [ ] Images loading
- [ ] WhatsApp links working
- [ ] Mobile responsive
- [ ] Forms working (if any)
- [ ] SSL certificate active (https://)

### 4. Monitor
- Google Search Console - Check for errors
- Google Analytics - Monitor traffic
- PageSpeed Insights - Check performance

---

## Troubleshooting

### Build Errors
```bash
# Clear cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Images Not Loading
```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['images.unsplash.com', 'yourdomain.com'],
  },
}
```

### 404 Errors
- Check `next.config.js` configuration
- Verify build output
- Check server routing

### Slow Loading
- Compress images
- Enable CDN
- Check server resources
- Use Next.js Image component

---

## Maintenance

### Weekly
- Check uptime
- Monitor error logs
- Review analytics

### Monthly
- Update dependencies: `npm update`
- Security audit: `npm audit`
- Performance check
- Backup database (if any)

### Quarterly
- Review and update content
- SEO audit
- Security patches
- Feature updates

---

## Rollback Plan

### Vercel/Netlify
- Go to Deployments
- Find previous working version
- Click "Promote to Production"

### VPS
```bash
# Backup before deploy
pm2 save
cp -r /var/www/elfan-landing /var/www/elfan-landing-backup

# Rollback if needed
rm -rf /var/www/elfan-landing
mv /var/www/elfan-landing-backup /var/www/elfan-landing
pm2 restart elfan-landing
```

---

## Support

Butuh bantuan deployment?

**Alwustho Technologies**
- WhatsApp: 0896-0466-6665
- Website: www.elfanbookless.com
- Email: [email protected]

---

## Estimated Costs

### Free Options
- Vercel: Free (hobby plan)
- Netlify: Free (starter plan)
- GitHub: Free (public repo)

### Paid Options
- VPS (DigitalOcean): $5-10/month
- Domain: $10-15/year
- SSL: Free (Let's Encrypt)

### Recommended for ELFAN SYSTEM
**Vercel Free Plan** - Perfect untuk landing page dengan traffic rendah-menengah.

Upgrade ke paid plan jika:
- Traffic > 100GB/month
- Need advanced analytics
- Need team collaboration
