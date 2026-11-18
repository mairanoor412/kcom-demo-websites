# Astro 11 Websites — Project Plan

**Date:** 2026-11-18

---

## Project Overview

Hum 11 small businesses ke liye demo websites bana rahe hain — 6 tour companies (Bahamas) aur 5 car dealers (Jamaica). Yeh sab websites **ek single Astro project** mein hongi. Har website mein advanced scroll-driven storytelling animations hongi (GSAP + ScrollTrigger), jaise Facebook reel mein dikha tha.

**Goal:** Clients ko professional demo websites dikhana taake wo apni business ke liye full website order karein.

**Approach:** 2 reusable templates (Tour + Car Dealer) + per-business JSON data files = rapid website generation.

---

## Tech Stack

| Tool | Purpose | Why |
| --- | --- | --- |
| Astro 5 | Framework | 1 project = multiple sites, zero JS by default, pure HTML output |
| Tailwind CSS v4 | Styling | Utility-first, rapid UI development, responsive design |
| GSAP + ScrollTrigger | Scroll Animations | Industry #1 animation library, direct DOM access, zero conflict |
| Lenis | Smooth Scrolling | Butter-smooth scroll feel, GSAP ke saath perfect integration |
| Swiper.js | Carousels/Sliders | Touch-friendly image galleries aur tour showcases |
| Vercel / Netlify | Hosting | Free tier, Astro SSG ke liye optimized, instant deploys |

---

## Project Structure

```
websites/
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── public/
│   ├── fonts/
│   └── images/
│       ├── s-jays-adventures/
│       ├── trinity-tours/
│       ├── trident-pedal-tours/
│       ├── paradise-bay/
│       ├── club-med-columbus/
│       ├── bahamas-exquisite/
│       ├── supercoup-auto/
│       ├── kibbos-auto/
│       ├── kingdom-konnect/
│       ├── golden-wheels/
│       └── jamzone/
├── src/
│   ├── layouts/
│   │   ├── TourLayout.astro          ← Tour companies ka master layout
│   │   └── CarDealerLayout.astro     ← Car dealers ka master layout
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Hero.astro
│   │   │   ├── Contact.astro
│   │   │   └── ScrollToTop.astro
│   │   ├── tour/
│   │   │   ├── TourPackages.astro
│   │   │   ├── Gallery.astro
│   │   │   ├── Testimonials.astro
│   │   │   └── WhyChooseUs.astro
│   │   └── car-dealer/
│   │       ├── VehicleListings.astro
│   │       ├── FeaturedCars.astro
│   │       ├── Services.astro
│   │       └── WhyChooseUs.astro
│   ├── scripts/
│   │   ├── gsap-animations.js        ← GSAP + ScrollTrigger setup
│   │   ├── lenis-smooth-scroll.js    ← Smooth scrolling
│   │   └── swiper-init.js            ← Carousel initialization
│   ├── styles/
│   │   └── global.css                ← Tailwind + custom styles
│   ├── data/
│   │   ├── s-jays-adventures.json
│   │   ├── trinity-tours.json
│   │   ├── trident-pedal-tours.json
│   │   ├── paradise-bay.json
│   │   ├── club-med-columbus.json
│   │   ├── bahamas-exquisite.json
│   │   ├── supercoup-auto.json
│   │   ├── kibbos-auto.json
│   │   ├── kingdom-konnect.json
│   │   ├── golden-wheels.json
│   │   └── jamzone.json
│   └── pages/
│       ├── index.astro               ← Main landing / directory
│       ├── s-jays-adventures.astro
│       ├── trinity-tours.astro
│       ├── trident-pedal-tours.astro
│       ├── paradise-bay.astro
│       ├── club-med-columbus.astro
│       ├── bahamas-exquisite.astro
│       ├── supercoup-auto.astro
│       ├── kibbos-auto.astro
│       ├── kingdom-konnect.astro
│       ├── golden-wheels.astro
│       └── jamzone.astro
```

---

## 2 Templates — Sections Breakdown

### Tour Template (6 websites)

| Section | Description | Animation |
| --- | --- | --- |
| Hero | Full-screen video/image background, business name, tagline, CTA button | Parallax scroll, text fade-up on load |
| About | Company story, mission, years of experience | Text reveal on scroll, image slide-in |
| Tour Packages | Cards showing tours with price, duration, highlights | Staggered card entry, hover lift effect |
| Gallery | Full-width image grid / carousel (Swiper.js) | Scroll-triggered zoom, lightbox on click |
| Testimonials | Client reviews with star ratings | Slide carousel, fade-in on scroll |
| Why Choose Us | USPs with icons — safety, experience, local knowledge | Counter animation, icon bounce on scroll |
| Contact | Phone, email, map embed, WhatsApp button, contact form | Slide-up from bottom |
| Footer | Links, social media icons, copyright | Fade-in |

### Car Dealer Template (5 websites)

| Section | Description | Animation |
| --- | --- | --- |
| Hero | Full-screen featured vehicle image, dealer name, CTA | Parallax scroll, text split reveal |
| About | Dealer story, years in business, trust badges | Text reveal, image parallax |
| Featured Cars | Top 3-4 vehicles with image, price, specs | Horizontal scroll section (pinned) |
| Vehicle Listings | Grid of available cars — image, name, year, price | Staggered grid entry on scroll |
| Services | Financing, trade-in, warranty, delivery info | Icon animations, card flip on hover |
| Why Choose Us | USPs — best prices, certified vehicles, easy financing | Counter animation, progress bars |
| Contact | Phone, email, WhatsApp, location map, inquiry form | Slide-up from bottom |
| Footer | Links, social media, copyright | Fade-in |

---

## 11 Websites — Data Plan

### Tour Companies (Bahamas)

| # | Business Name | Phone | Email | Existing Website | Template |
| --- | --- | --- | --- | --- | --- |
| 1 | S Jays Adventures | 242-552-7461 | sjaysadventures@gmail.com | None | Tour |
| 2 | Trinity Tours & Travel Agency | 242-443-8992 | — | None | Tour |
| 3 | Trident Pedal Tours | 242-813-5678 | info@tridentpedaltours.com | tridentpedaltours.com | Tour |
| 4 | Paradise Bay Bahamas | 242-357-0186 | — | paradise-bay-bahamas.com | Tour |
| 5 | Club Med Columbus Bahamas | 242-422-2341 | colcrehu04@clubmed.com | clubmed.us | Tour |
| 6 | Bahamas Exquisite Transfers & Tours | 242-422-2342 | bahamasexquisite@gmail.com | bettbahamas.com | Tour |

### Car Dealers (Jamaica)

| # | Business Name | Phone | Email | Existing Website | Template |
| --- | --- | --- | --- | --- | --- |
| 7 | SuperCoup's Ideal Auto Imports | 876-584-3670 | — | None | Car Dealer |
| 8 | Kibbo's Auto Center & Entertainment | 876-547-3707 | kimkamtrading@gmail.com | None | Car Dealer |
| 9 | Kingdom Konnect | 876-477-7299 | kingdomkonnect100@gmail.com | None | Car Dealer |
| 10 | Golden Wheels Limited | 876-849-4908 | goldenwheels46@gmail.com | None | Car Dealer |
| 11 | JamZone Limited | 876-345-1032 | Jamzone.ltd@gmail.com | None | Car Dealer |

Har business ke liye ek JSON file banegi jismein:

- Business name, tagline, description
- Contact info (phone, email, WhatsApp, address)
- Color scheme (primary, secondary, accent) — Facebook page se pick karenge
- Services/packages list with descriptions
- Images (hero, gallery, team) — Facebook/Instagram se reference karenge
- Testimonials (placeholder content for demo)
- Social media links

---

## GSAP Scroll Animations Plan

Sab animations **scroll-driven** hongi — user jaise scroll karega, waise animation chalegi.

### Global Animations (dono templates mein)

| Animation | Technique | GSAP Code |
| --- | --- | --- |
| Smooth Scrolling | Lenis library | `new Lenis()` — butter-smooth scroll feel |
| Parallax Hero | ScrollTrigger scrub | Background image slow move, text fast move |
| Text Reveal | SplitText + ScrollTrigger | Har letter/word ek ek karke appear hota hai |
| Section Fade-In | ScrollTrigger batch | Sections scroll mein aate waqt fade + slide up |
| Staggered Cards | ScrollTrigger stagger | Cards ek ke baad ek animate hotay hain |
| Counter Animation | ScrollTrigger onEnter | Numbers 0 se target tak count up |
| Navbar Hide/Show | ScrollTrigger onUpdate | Scroll down = hide, scroll up = show |

### Advanced Animations

| Animation | Technique | Where |
| --- | --- | --- |
| Pinned Horizontal Scroll | ScrollTrigger pin + horizontal | Car Dealer — Featured Cars section |
| Image Sequence on Scroll | ScrollTrigger scrub + canvas | Tour — Hero section (optional) |
| Text Highlight on Scroll | ScrollTrigger scrub + color change | About sections — words highlight as you scroll |
| Magnetic Cursor Effect | GSAP quickTo | CTA buttons — cursor ke paas aate hain |
| Scroll Progress Bar | ScrollTrigger scaleX | Top of page — shows scroll progress |

### Animation Flow (per page)

1. Page load → Hero text animates in (GSAP timeline)
2. Scroll start → Hero parallax + navbar transition
3. Each section → Trigger point pe fade-in + content animation
4. Carousels → Swiper.js with GSAP-enhanced transitions
5. Footer → Final fade-in + back-to-top button appears

---

## Development Phases

### Phase 1 — Project Setup

- [ ] Astro project initialize (`npm create astro@latest`)
- [ ] Tailwind CSS v4 install + configure
- [ ] GSAP + ScrollTrigger + Lenis + Swiper.js install
- [ ] Folder structure create (layouts, components, data, scripts)
- [ ] Global styles + fonts setup

### Phase 2 — Tour Template Build

- [ ] TourLayout.astro — master layout with all sections
- [ ] Hero component + parallax animation
- [ ] About section + text reveal animation
- [ ] Tour Packages cards + staggered entry
- [ ] Gallery + Swiper carousel
- [ ] Testimonials slider
- [ ] Why Choose Us + counter animation
- [ ] Contact section + form
- [ ] Footer + scroll-to-top
- [ ] Full GSAP scroll animation integration
- [ ] Responsive design (mobile, tablet, desktop)

### Phase 3 — Car Dealer Template Build

- [ ] CarDealerLayout.astro — master layout
- [ ] Hero + split text reveal animation
- [ ] About section
- [ ] Featured Cars — pinned horizontal scroll section
- [ ] Vehicle Listings grid + staggered animation
- [ ] Services cards + flip animation
- [ ] Why Choose Us + progress bars
- [ ] Contact + inquiry form
- [ ] Footer
- [ ] Full GSAP scroll animation integration
- [ ] Responsive design

### Phase 4 — 6 Tour Websites Generate

- [ ] S Jays Adventures — JSON data + page + images
- [ ] Trinity Tours — JSON data + page + images
- [ ] Trident Pedal Tours — JSON data + page + images
- [ ] Paradise Bay Bahamas — JSON data + page + images
- [ ] Club Med Columbus — JSON data + page + images
- [ ] Bahamas Exquisite — JSON data + page + images

### Phase 5 — 5 Car Dealer Websites Generate

- [ ] SuperCoup's Auto Imports — JSON data + page + images
- [ ] Kibbo's Auto Center — JSON data + page + images
- [ ] Kingdom Konnect — JSON data + page + images
- [ ] Golden Wheels Limited — JSON data + page + images
- [ ] JamZone Limited — JSON data + page + images

### Phase 6 — Testing & Polish

- [ ] Sab 11 websites browser mein test
- [ ] Mobile responsive check
- [ ] Animation performance check (60fps target)
- [ ] Lighthouse score check (90+ target)
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Final review + fixes

---

## Hosting & Deployment

### Recommended: Vercel (Free Tier)

- Astro ke liye official integration available
- Har push pe automatic deploy
- Free SSL certificate
- Global CDN — fast loading worldwide
- Custom domain support

### Deployment Steps

1. GitHub repository create karein
2. Vercel pe connect karein
3. `npm run build` → Astro static HTML generate karega
4. Vercel automatically deploy karega
5. Har website ka URL: `business-name.vercel.app`

### URL Structure

**Option A — Single domain, different paths:**
- `demo.yoursite.com/s-jays-adventures`
- `demo.yoursite.com/trinity-tours`
- `demo.yoursite.com/golden-wheels`

**Option B — Separate subdomains (Vercel custom domains):**
- `s-jays-adventures.vercel.app`
- `trinity-tours.vercel.app`

### Client Handoff

Jab client approve kare, toh unka custom domain point kar dena:
- `www.sjaysadventures.com` → Vercel pe point
- DNS settings update — 5 minute ka kaam

---

## Timeline

| Phase | Task | Estimated Time |
| --- | --- | --- |
| Phase 1 | Project Setup (Astro + Tailwind + GSAP + Lenis + Swiper) | 30 min |
| Phase 2 | Tour Template Build (layout + components + animations) | 3-4 hours |
| Phase 3 | Car Dealer Template Build (layout + components + animations) | 3-4 hours |
| Phase 4 | 6 Tour Websites Generate (JSON data + pages + images) | 2-3 hours |
| Phase 5 | 5 Car Dealer Websites Generate (JSON data + pages + images) | 2-3 hours |
| Phase 6 | Testing & Polish (responsive + performance + cross-browser) | 1-2 hours |
| **Total** | **11 Websites Complete** | **12-16 hours** |
