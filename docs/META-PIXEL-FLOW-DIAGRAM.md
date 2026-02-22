# 🔄 Meta Pixel - Flow Diagram

## 📊 How Meta Pixel Works

```
┌─────────────────────────────────────────────────────────────────┐
│                    USER JOURNEY WITH META PIXEL                  │
└─────────────────────────────────────────────────────────────────┘

1️⃣ FIRST VISIT (Cold Traffic)
   ┌──────────────┐
   │ User googles │
   │ "perpustakaan│
   │   digital"   │
   └──────┬───────┘
          │
          ▼
   ┌──────────────────┐
   │ Lands on website │ ◄─── 🔍 Meta Pixel ACTIVATED
   │ elfanbookless.com│      - Pixel ID loaded
   └──────┬───────────┘      - PageView event sent
          │                  - User ID stored (anonymous)
          ▼
   ┌──────────────────┐
   │ Browses pages:   │ ◄─── 📊 Tracking continues
   │ - Homepage       │      - Each page = PageView event
   │ - Pricing        │      - ViewContent event (pricing)
   │ - Product        │      - ViewContent event (product)
   └──────┬───────────┘
          │
          ▼
   ┌──────────────────┐
   │ Clicks CTA       │ ◄─── 🎯 Lead event tracked
   │ "Hubungi WA"     │      - High intent signal!
   └──────┬───────────┘
          │
          ▼
   ┌──────────────────┐
   │ Busy, closes tab │ ◄─── 😢 Lost... but not forever!
   │ Doesn't contact  │      - Data saved in Meta
   └──────────────────┘      - User in "Website Visitors" audience


2️⃣ RETARGETING (Warm Traffic)
   ┌──────────────────┐
   │ Next day...      │
   │ User scrolls     │
   │ Facebook feed    │
   └──────┬───────────┘
          │
          ▼
   ┌──────────────────────────────────────┐
   │ 🎯 RETARGETING AD APPEARS             │ ◄─── 💰 Your ad budget
   │                                       │      - Target: Website Visitors
   │ "Masih cari perpustakaan digital?    │      - Creative: Reminder
   │  ELFAN System solusinya!"            │      - CTA: "Hubungi Kami"
   │                                       │
   │ [Image of ELFAN System]               │
   │                                       │
   │ [Hubungi Kami] ◄─ CTA Button         │
   └──────┬───────────────────────────────┘
          │
          ▼
   ┌──────────────────┐
   │ User remembers!  │ ◄─── 💡 "Oh ya, kemarin aku lihat ini!"
   │ Clicks ad        │
   └──────┬───────────┘
          │
          ▼
   ┌──────────────────┐
   │ Back to website  │ ◄─── 🔍 Pixel tracks return visit
   │ More convinced   │      - PageView event
   └──────┬───────────┘      - Knows this is 2nd visit
          │
          ▼
   ┌──────────────────┐
   │ Clicks WhatsApp  │ ◄─── 🎉 Contact event tracked
   │ Sends message    │      - CONVERSION!
   └──────┬───────────┘      - User moved to "Converters" audience
          │
          ▼
   ┌──────────────────┐
   │ Becomes client!  │ ◄─── ✅ Success!
   │ ROI achieved     │      - Exclude from future retargeting
   └──────────────────┘      - Add to "Customers" audience
```

## 🎯 Audience Building Over Time

```
WEEK 1
┌─────────────────────────────────────┐
│ Website Visitors: 50 people         │ ◄─── Too small for retargeting
│ - Homepage: 50                      │      (minimum 100 needed)
│ - Pricing: 15                       │
│ - Product: 20                       │
└─────────────────────────────────────┘

WEEK 2
┌─────────────────────────────────────┐
│ Website Visitors: 150 people        │ ◄─── ✅ Ready for retargeting!
│ - Homepage: 150                     │      Can start campaign
│ - Pricing: 45                       │
│ - Product: 60                       │
│ - Clicked CTA: 10                   │
└─────────────────────────────────────┘

WEEK 4
┌─────────────────────────────────────┐
│ Website Visitors: 400 people        │ ◄─── 🚀 Scaling up
│ - Homepage: 400                     │      Bigger audience = better results
│ - Pricing: 120                      │
│ - Product: 180                      │
│ - Clicked CTA: 35                   │
│ - Contacted: 8                      │ ◄─── Exclude from retargeting
└─────────────────────────────────────┘

MONTH 3
┌─────────────────────────────────────┐
│ Website Visitors: 1,500 people      │ ◄─── 🎯 Optimal size
│ - Homepage: 1,500                   │      Can create multiple segments
│ - Pricing: 450                      │      Better targeting
│ - Product: 600                      │      Lower cost per result
│ - Clicked CTA: 120                  │
│ - Contacted: 35                     │
│ - Customers: 5                      │ ◄─── ROI proven!
└─────────────────────────────────────┘
```

## 💰 Budget & ROI Flow

```
INVESTMENT
┌──────────────────────────────────────────────────────────────┐
│ Monthly Ad Budget: Rp 3,000,000                              │
│ (Rp 100,000/day)                                             │
└──────┬───────────────────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────────────────────┐
│ RETARGETING CAMPAIGN                                         │
│                                                              │
│ Audience: Website Visitors (1,000 people)                   │
│ Reach: ~700 people (70% of audience)                        │
│ Frequency: 3-4 times per week                               │
│ Placement: Facebook Feed + Instagram Stories                │
└──────┬───────────────────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────────────────────┐
│ RESULTS                                                      │
│                                                              │
│ Ad Clicks: 140 (20% CTR from retargeting)                   │
│ Website Visits: 100 (from retargeting)                      │
│ WhatsApp Contacts: 10 (10% conversion)                      │
│ Closed Deals: 2-3 (20-30% close rate)                       │
└──────┬───────────────────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────────────────────┐
│ REVENUE                                                      │
│                                                              │
│ 2-3 clients × Rp 15,000,000 (avg deal size)                 │
│ = Rp 30,000,000 - Rp 45,000,000                             │
│                                                              │
│ ROI: 10x - 15x 🎉                                            │
└──────────────────────────────────────────────────────────────┘
```

## 🔄 Event Tracking Flow

```
USER ACTION                    PIXEL EVENT              META RECEIVES
─────────────────────────────────────────────────────────────────────

Visit homepage          ──────► PageView          ──────► ✅ Tracked
                                                          User ID: abc123
                                                          Page: /
                                                          
Click "Produk" menu     ──────► PageView          ──────► ✅ Tracked
                                                          User ID: abc123
                                                          Page: /produk
                                                          
View pricing page       ──────► ViewContent       ──────► ✅ Tracked
                                (Pricing)                 User ID: abc123
                                                          Page: /harga
                                                          High Intent! 🎯
                                                          
Click "Hubungi WA"      ──────► Lead              ──────► ✅ Tracked
                                                          User ID: abc123
                                                          Action: CTA Click
                                                          Very High Intent! 🔥
                                                          
Click WhatsApp link     ──────► Contact           ──────► ✅ Tracked
                                                          User ID: abc123
                                                          Action: WhatsApp
                                                          CONVERSION! 🎉
```

## 🎨 Retargeting Strategy Layers

```
┌─────────────────────────────────────────────────────────────────┐
│                    RETARGETING FUNNEL                            │
└─────────────────────────────────────────────────────────────────┘

LAYER 1: Broad Retargeting
┌─────────────────────────────────────────────────────────────────┐
│ Audience: All Website Visitors (30 days)                        │
│ Size: 1,000+ people                                             │
│ Message: Brand awareness, general benefits                      │
│ Budget: Rp 50,000/day                                           │
│ Goal: Stay top of mind                                          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
LAYER 2: Engaged Visitors
┌─────────────────────────────────────────────────────────────────┐
│ Audience: Viewed Pricing or Product (14 days)                   │
│ Size: 300+ people                                               │
│ Message: Social proof, testimonials, special offer              │
│ Budget: Rp 70,000/day                                           │
│ Goal: Convert high-intent visitors                              │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
LAYER 3: Hot Leads
┌─────────────────────────────────────────────────────────────────┐
│ Audience: Clicked CTA but didn't contact (7 days)               │
│ Size: 50+ people                                                │
│ Message: Urgency, limited offer, direct CTA                     │
│ Budget: Rp 80,000/day                                           │
│ Goal: Close the deal                                            │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
                        CONVERSION! 🎉
```

## 📊 Data Flow Architecture

```
┌──────────────────┐
│  ELFAN Website   │
│ elfanbookless.com│
└────────┬─────────┘
         │
         │ <script> Meta Pixel Code
         │
         ▼
┌──────────────────────────────────────────────────────────────┐
│  Meta Pixel (JavaScript)                                     │
│  - Loaded on every page                                      │
│  - Tracks user behavior                                      │
│  - Sends events to Meta                                      │
└────────┬─────────────────────────────────────────────────────┘
         │
         │ HTTPS POST requests
         │
         ▼
┌──────────────────────────────────────────────────────────────┐
│  Meta Servers                                                │
│  - Receive events                                            │
│  - Store user data                                           │
│  - Build audiences                                           │
└────────┬─────────────────────────────────────────────────────┘
         │
         │ Real-time sync
         │
         ▼
┌──────────────────────────────────────────────────────────────┐
│  Meta Events Manager                                         │
│  - Dashboard untuk lihat data                                │
│  - Create custom audiences                                   │
│  - Test events                                               │
└────────┬─────────────────────────────────────────────────────┘
         │
         │ Audience sync
         │
         ▼
┌──────────────────────────────────────────────────────────────┐
│  Meta Ads Manager                                            │
│  - Create retargeting campaigns                              │
│  - Target custom audiences                                   │
│  - Monitor performance                                       │
└──────────────────────────────────────────────────────────────┘
```

---

**Catatan**: Diagram ini menunjukkan flow ideal. Actual results bisa bervariasi tergantung traffic, budget, dan ad creative quality.
