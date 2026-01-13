# 🌍 Sawa Wallet Website

A minimalist, highly informative landing page for Sawa - a community-focused USDC wallet app that quotes transfers in local currency (Naira).

**Live Domain:** [sawawallet.org](https://sawawallet.org) 🚀  
**Waitlist Form:** [Join Waitlist](https://forms.gle/moguzURumvxWo3VAA)

## 🎨 Design Philosophy

- **Brutalist minimalism meets crypto elegance**
- Asymmetrical layouts with intentional white space
- Typography-first approach with carefully chosen font weights
- Micro-interactions that feel purposeful, not decorative
- Mobile-first responsive design with touch-optimized interactions
- Classy, refined UI with smaller, well-aligned text

## 🛠 Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Sharp** for image optimization
- **Google Forms** integration for waitlist

## 🚀 Getting Started

### Development Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open browser:**
```
http://localhost:3000
```

### Production Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css           # Global styles & custom Tailwind
│   ├── layout.tsx            # Root layout & metadata
│   ├── page.tsx              # Homepage
│   ├── not-found.tsx         # 404 page
│   ├── privacy-policy/       # Legal: Privacy Policy
│   ├── terms-of-service/     # Legal: Terms of Service
│   └── contact/              # Contact & Support page
├── components/
│   ├── Navbar.tsx            # Navigation (desktop + mobile)
│   ├── HeroSection.tsx       # Hero banner with CTAs
│   ├── FeaturesSection.tsx   # Key features grid
│   ├── InternationalTransfersSection.tsx
│   ├── InvestmentSection.tsx # DeFi features
│   ├── TestimonialsSection.tsx
│   ├── TrustSection.tsx      # Security + Waitlist form
│   ├── BuyWithdrawSection.tsx
│   ├── ImageSlider.tsx       # App preview carousel
│   ├── Footer.tsx            # Site footer
│   └── icons/                # Custom SVG icons
└── lib/
    └── hooks.ts              # Custom React hooks
```

## ✨ Features

### Core Features
- ✅ Mobile-first responsive design
- ✅ Subtle animations and micro-interactions
- ✅ Optimized images with WebP support
- ✅ Fast loading times (Core Web Vitals optimized)
- ✅ Clean, accessible code structure
- ✅ Dark mode support

### Business Features
- 📝 **Waitlist Integration** - Google Forms connected
- 💰 **Investor Call-to-Action** - Seeking early investors
- 📄 **Legal Pages** - Privacy Policy, Terms of Service, Contact
- 🔗 **Discord Integration** - Community link in navbar/footer
- 📱 **App Preview Slider** - Interactive simulator screenshots

## 🎨 Color Palette

- **Primary**: Clean white backgrounds
- **Accent**: Forest green (#2D5016) for CTAs and highlights
- **Luxury**: Gold (#D4AF37) for premium touches & investor CTAs
- **Text**: Charcoal gray (#2A2A2A)
- **Subtle**: Light gray (#F8F9FA) for sections

## 📝 Waitlist Setup

Your Google Form is ready: [https://forms.gle/moguzURumvxWo3VAA](https://forms.gle/moguzURumvxWo3VAA)

**To complete integration:**
1. Read `FORM_INTEGRATION.md` for step-by-step instructions
2. Get your form's entry IDs (takes 2 minutes)
3. Update `src/components/TrustSection.tsx` with real IDs
4. Test the form submission

**Current Form Fields:**
- Name (Required)
- Email (Optional - recommend making required)
- Feedback: "What do you think about sawa?"

## 🌐 Domain & Deployment

**Domain:** sawawallet.org

### Recommended Hosting: Vercel (Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add custom domain
vercel domains add sawawallet.org
```

Alternative options: Netlify, Cloudflare Pages (see `FORM_INTEGRATION.md`)

### Professional Emails

Recommended setup:
- `hello@sawawallet.org` - General inquiries
- `support@sawawallet.org` - Customer support
- `investors@sawawallet.org` - Investment inquiries
- `waitlist@sawawallet.org` - Waitlist (or use Google Form)

**Options:**
- Google Workspace ($6/month)
- Zoho Mail (Free for 5 users)
- Email forwarding (Free via domain registrar)

## 🔗 Important Links

- **Website:** https://sawawallet.org
- **Waitlist:** https://forms.gle/moguzURumvxWo3VAA
- **Discord:** https://discord.gg/TbvR5UcG
- **Privacy Policy:** /privacy-policy
- **Terms of Service:** /terms-of-service
- **Contact:** /contact

## 📚 Documentation Files

- `WAITLIST_SETUP.md` - Detailed waitlist options & setup guide
- `FORM_INTEGRATION.md` - Step-by-step Google Form integration
- `README.md` - This file (project overview)

## 🚀 Deployment Checklist

### Before Launch
- [ ] Complete Google Form integration (get entry IDs)
- [ ] Test waitlist form submission
- [ ] Make email field required in Google Form
- [ ] Set up email notifications for form responses
- [ ] Connect form to Google Sheets
- [ ] Set up professional email addresses
- [ ] Test all navigation links
- [ ] Test mobile responsiveness
- [ ] Check Discord link works
- [ ] Review legal pages content

### Deploy
- [ ] Build production version (`npm run build`)
- [ ] Test production build locally
- [ ] Deploy to Vercel/Netlify
- [ ] Add custom domain (sawawallet.org)
- [ ] Update DNS records
- [ ] Verify SSL certificate
- [ ] Test live site on mobile devices

### Post-Launch
- [ ] Share waitlist on social media
- [ ] Post in Discord community
- [ ] Update social media profiles with domain
- [ ] Set up Google Analytics (optional)
- [ ] Monitor form submissions
- [ ] Respond to investor inquiries

## 💼 Investor Information

**Seeking Early Investors** - The website includes:
- Hero section badge linking to contact page
- Footer "Investor Inquiries" link
- Contact page with investor-specific dropdown option
- Direct email: investors@sawawallet.org

## 📊 SEO & Meta

All pages include:
- Proper meta titles and descriptions
- Open Graph tags for social sharing
- Favicon and app icons
- Viewport configuration for mobile
- Semantic HTML structure

## 🤝 Contributing

This is a private project for Sawa Wallet. For questions or support:
- Discord: https://discord.gg/TbvR5UcG
- Email: support@sawawallet.org

## 📄 License

© 2024 Sawa Wallet. All rights reserved.  
Made with ❤️ for Africa
