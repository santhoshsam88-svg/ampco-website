# Ampco Website - SEO & Production Checklist

## ✅ IMPLEMENTED

### Technical SEO
- [x] `robots.txt` - Allows all crawlers, includes sitemap reference
- [x] `sitemap.xml` - All 19 pages with priority levels
- [x] `404.html` - Custom error page with navigation
- [x] `favicon.svg` - SVG favicon for all browsers
- [x] `vercel.json` - Security headers, caching, 404 routing
- [x] Semantic HTML5 structure (nav, header, main, section, footer)
- [x] Mobile-responsive design
- [x] Clean URL structure

### Homepage SEO (index.html)
- [x] Title tag (optimized with keywords)
- [x] Meta description (compelling, under 160 chars)
- [x] Meta keywords
- [x] Canonical URL
- [x] Open Graph tags (og:title, og:description, og:image, og:url)
- [x] Twitter Card tags
- [x] JSON-LD Organization schema
- [x] JSON-LD WebSite schema
- [x] Geo meta tags (for local SEO)
- [x] Favicon links

### All Pages
- [x] Meta descriptions
- [x] Favicon links
- [x] Heading hierarchy (H1 → H2 → H3)
- [x] Internal linking
- [x] Breadcrumb navigation

---

## ⏳ TODO BEFORE LAUNCH

### Content Assets Needed
- [ ] **og-image.jpg** (1200x630px) - Social sharing image
- [ ] **apple-touch-icon.png** (180x180px) - iOS home screen icon
- [ ] **logo.png** - For structured data
- [ ] Real product photos (replace emoji placeholders)
- [ ] Facility video for homepage hero
- [ ] Team photos for About page

### Per-Page SEO Updates
Each page needs unique:
- [ ] Meta description (unique, compelling)
- [ ] Open Graph tags
- [ ] JSON-LD Product schema (for product pages)
- [ ] Canonical URLs

### Google Setup
- [ ] Google Search Console - Verify domain
- [ ] Google Analytics - Add tracking ID (placeholder in code)
- [ ] Google Business Profile - Create/claim listing
- [ ] Submit sitemap to Google Search Console

### Performance Optimization
- [ ] Compress images (WebP format recommended)
- [ ] Lazy load images below fold
- [ ] Minify CSS/JS for production
- [ ] Add preload for critical resources

### Accessibility (WCAG 2.1 AA)
- [ ] Add alt text to all images
- [ ] Ensure color contrast ratios (4.5:1 minimum)
- [ ] Test keyboard navigation
- [ ] Add skip links
- [ ] ARIA labels where needed

---

## 🔧 HOW TO COMPLETE

### 1. Add Google Analytics
Find this in `index.html` and replace `GA_MEASUREMENT_ID`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### 2. Create Social Image
Design a 1200x630px image with:
- Ampco logo
- Tagline: "Precision Graphics & Interface Solutions"
- Navy background (#0D1B2A)
Save as `/og-image.jpg`

### 3. Add Product Schema (Example)
Add to each product page `<head>`:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Membrane Switches",
  "description": "Custom membrane switches with tactile feedback and LED backlighting",
  "brand": {
    "@type": "Brand",
    "name": "Ampco"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Ampco Manufacturers"
  }
}
</script>
```

### 4. Update Meta Descriptions
Each page needs a unique 150-160 character description:
- Products: Focus on benefits, applications
- Industries: Focus on expertise, solutions
- Company: Focus on trust, experience

---

## 📊 SEO MONITORING

### Key Metrics to Track
1. **Organic Traffic** - Google Analytics
2. **Keyword Rankings** - Google Search Console
3. **Core Web Vitals** - PageSpeed Insights
4. **Crawl Errors** - Search Console
5. **Backlinks** - Ahrefs or SEMrush

### Target Keywords
Primary:
- membrane switches manufacturer
- durable graphics OEM
- rubber keypads supplier
- graphic overlays Canada

Secondary:
- heavy truck interface solutions
- industrial membrane switches
- custom die cut components
- PCBA box build services

Local:
- OEM manufacturer Coquitlam
- industrial graphics BC
- membrane switches Canada

---

## 🚀 LAUNCH CHECKLIST

Before going live:
- [ ] Test all links work
- [ ] Test contact form submission
- [ ] Test on mobile devices
- [ ] Run PageSpeed Insights (target 90+)
- [ ] Run WAVE accessibility checker
- [ ] Verify robots.txt accessible
- [ ] Verify sitemap.xml accessible
- [ ] Set up 301 redirects (if replacing existing site)
- [ ] Update domain DNS
- [ ] Enable HTTPS (automatic on Vercel)

---

## 📁 FILE STRUCTURE

```
ampco-website/
├── index.html          ← Full SEO meta tags
├── products.html
├── industries.html
├── contact.html
├── 404.html            ← Custom error page
├── robots.txt          ← Crawler instructions
├── sitemap.xml         ← All pages listed
├── favicon.svg         ← Browser icon
├── vercel.json         ← Deployment config
├── og-image.jpg        ← TODO: Create
├── apple-touch-icon.png← TODO: Create
├── assets/
│   ├── styles.css
│   └── scripts.js
├── products/           ← 6 product pages
├── industries/         ← 5 industry pages
└── company/            ← 4 company pages
```

---

Generated: January 2026
