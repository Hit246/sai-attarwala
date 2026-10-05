# Sai Attarwala & Men's Accessories — Official Website

> **Premium Quality Attar, Perfumes & Men's Accessories in Idar, Gujarat**  
> D-5, Asha Shopping Centre, Laxmi Cinema Road, Shrinagar, Idar, Gujarat | Phone: +91 9898382682

A complete, production-ready, mobile-first bilingual (Gujarati & English) website built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Optimized for static export (`output: "export"`), lightning-fast loading, zero-cost hosting (Vercel, Netlify, GitHub Pages), and local SEO in Idar and Sabarkantha district.

---

## 🌟 Features Included

- **Bilingual Support (Gujarati & English)**: Natural, native Gujarati translations and English toggle in header with `localStorage` memory persistence.
- **Luxury Black & Gold Design**: Styled with Cinzel, Montserrat, and Noto Sans Gujarati fonts, gold gradients, dark cards, and refined micro-interactions.
- **10 Complete Product Categories**: Attar, Imported Perfumes, Body Spray, Watches, Agarbatti, Caps, Wallets, Leather Belts, Keychains, Imitation Jewellery (30 curated sample products).
- **Direct WhatsApp & Phone Click-to-Action**:
  - One-tap WhatsApp chat with prefilled product details (`"Hi Sai Attarwala, I want to inquire about [product name]"`).
  - One-tap call button dialing `+91 9898382682`.
  - Floating WhatsApp & Call action buttons on mobile screens.
- **Interactive Product Catalog**: Instant search by English/Gujarati name, category filter pills, price display / "Ask for Price", and full detail modal.
- **Local SEO & Schema.org**: `LocalBusiness` JSON-LD structured data, Open Graph meta tags for WhatsApp/Facebook sharing, `sitemap.xml`, and `robots.txt`.
- **Responsive Layout**: Designed mobile-first, tested for 320px, 375px, 768px, 1024px, and 1440px+ screens with no horizontal scrolling and 44px+ touch targets.
- **Embedded Google Map**: Responsive map iframe for Asha Shopping Centre, Laxmi Cinema Road, Idar.
- **Custom 404 Page**: Themed error page with links back to Home and Catalog.

---

## 📁 Project Folder Structure

```
sai-attarwala/
├── public/
│   ├── favicon.svg               # Gold droplet favicon
│   ├── robots.txt                # Search engine crawler directives
│   ├── sitemap.xml               # XML sitemap for SEO
│   └── images/
│       ├── logo.png              # Shop circular logo
│       └── placeholders/         # 10 SVG icons for product categories
│           ├── agarbatti.svg
│           ├── attar.svg
│           ├── belt.svg
│           ├── cap.svg
│           ├── jewellery.svg
│           ├── keychain.svg
│           ├── perfume.svg
│           ├── spray.svg
│           ├── wallet.svg
│           └── watch.svg
├── src/
│   ├── app/                      # Next.js App Router (Server components & SEO metadata)
│   │   ├── about/
│   │   │   └── page.tsx          # About page route
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact & Google Map page route
│   │   ├── products/
│   │   │   └── page.tsx          # Product catalog page route
│   │   ├── globals.css           # Tailwind directives, theme variables & gold utilities
│   │   ├── layout.tsx            # Global HTML layout, metadata, header, footer, floating buttons
│   │   ├── not-found.tsx         # Custom 404 page
│   │   └── page.tsx              # Home page route
│   ├── components/               # Reusable modular UI components
│   │   ├── CategoryCard.tsx      # Category showcase card with item count
│   │   ├── FloatingActions.tsx   # Mobile floating Call & WhatsApp buttons
│   │   ├── Footer.tsx            # Full footer with address, timings, links
│   │   ├── Header.tsx            # Responsive navbar with mobile drawer & language switch
│   │   ├── JsonLd.tsx            # LocalBusiness Schema.org JSON-LD
│   │   ├── ProductCard.tsx       # Product card with price & WhatsApp inquiry
│   │   ├── ProductModal.tsx      # Product zoom & specifications modal
│   │   ├── WhyChooseUs.tsx       # 4 Key value proposition cards
│   │   └── pages/                # Page content client components
│   │       ├── AboutContent.tsx
│   │       ├── ContactContent.tsx
│   │       ├── HomeContent.tsx
│   │       └── ProductsCatalogContent.tsx
│   ├── context/
│   │   └── LanguageContext.tsx   # Language state (EN / GU) with persistence
│   ├── data/
│   │   ├── products.ts           # Single master catalog file (easy to edit)
│   │   └── translations.ts       # Bilingual dictionary (English & Gujarati)
│   └── types/
│       └── index.ts              # TypeScript interfaces for Product, Category, Language
├── next.config.mjs               # Static export configuration (output: 'export')
├── package.json                  # Dependencies & build scripts
├── postcss.config.js             # PostCSS Tailwind configuration
├── tailwind.config.js            # Custom black & gold color theme & fonts
└── tsconfig.json                 # TypeScript compiler configuration
```

---

## 🚀 Step-by-Step Setup Guide

### 1. Install Dependencies
Open your terminal in this folder and run:
```bash
npm install
```

### 2. Run Locally in Development Mode
Start the local development server:
```bash
npm run dev
```
Open your browser and navigate to: **[http://localhost:3000](http://localhost:3000)**.  
Changes you make to files will reflect automatically in real time.

### 3. Build for Production (Static Export)
To generate the production-ready static HTML/CSS/JS export in the `out/` folder:
```bash
npm run build
```
This produces an `out/` directory with static pages that can be hosted on any static hosting provider for free.

---

## 🌐 How to Deploy to Vercel (Free Hosting)

1. **Push to GitHub**:
   - Create a repository on GitHub (e.g. `sai-attarwala`).
   - Run in your terminal:
     ```bash
     git add .
     git commit -m "Initial commit of Sai Attarwala website"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/sai-attarwala.git
     git push -u origin main
     ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **"Add New..."** > **"Project"**.
   - Select your `sai-attarwala` repository and click **Import**.
   - Framework Preset: **Next.js** (detected automatically).
   - Click **Deploy**. Vercel will build and publish your site in less than a minute!

3. **Connect a Custom Domain (e.g. `saiattarwala.com`)**:
   - In your Vercel project dashboard, go to **Settings** > **Domains**.
   - Type your domain name (e.g. `saiattarwala.com`) and click **Add**.
   - In your domain registrar (GoDaddy, Namecheap, Hostinger, etc.), add the DNS records shown by Vercel:
     - **A Record**: `@` points to `76.76.21.21`
     - **CNAME Record**: `www` points to `cname.vercel-dns.com`
   - SSL certificates are generated automatically for free.

---

## 📝 What to Replace / Customize (Checklist)

| Item | File Location | What to change |
|---|---|---|
| **Shop Story** | `src/data/translations.ts` | Replace `[ADD STORY]` under `aboutStoryBody` in both English and Gujarati. |
| **Shop Timings** | `src/data/translations.ts` | Replace `[ADD TIMINGS]` under `shopTimings` in both English and Gujarati. |
| **Real Photos** | `public/images/` | Place real product photos in `public/images/products/` and update paths in `src/data/products.ts`. |
| **Social Links** | `src/components/Footer.tsx` | Replace `#` in Instagram, Facebook, and YouTube buttons with your real profile URLs. |
| **Domain Name** | `src/app/layout.tsx` & `src/components/JsonLd.tsx` | Replace `https://saiattarwala.com` with your final domain. |

---

## 🛒 Non-Technical Guide: How to Add, Edit, or Remove Products

All products are stored in one single file: **[`src/data/products.ts`](src/data/products.ts)**.

### To Add a New Product:
1. Open [`src/data/products.ts`](src/data/products.ts).
2. Copy an existing product block and paste it inside the `PRODUCTS` array:
```typescript
{
  id: "attar-04",
  name: "White Musk Supreme (12ml)",
  nameGujarati: "વ્હાઇટ મસ્ક સુપ્રીમ (૧૨ મિલી)",
  category: "attar",
  categoryName: "Attar",
  categoryNameGujarati: "અત્તર",
  price: "₹500",
  priceValue: 500,
  description: "Silky, soft, and soothing white musk attar with fresh powdery undertones.",
  descriptionGujarati: "સફેદ કસ્તુરીનું અતિ આહલાદક અને શાંતિદાયક શુદ્ધ અત્તર.",
  badge: "New Arrival",
  badgeGujarati: "નવું કલેક્શન",
  featured: true,
  inStock: true,
  image: "/images/placeholders/attar.svg"
},
```
3. Save the file. Run `npm run build` and push to GitHub to redeploy automatically!

### To Edit a Price or Description:
- Simply change the text inside quotes `price: "₹550"` or `"Ask for price"`.

### To Remove a Product:
- Delete or comment out that product's block from `PRODUCTS`.
