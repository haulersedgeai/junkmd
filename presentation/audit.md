# JunkMD+ Website Rebuild Proposal

**Private proposal for David Leddick & Clemencia Sandoval — JunkMD Inc**

---

## The 30-second pitch

JunkMD+ has the brand, the team, the reviews (1,290+ five-star Google), and the trust in San Diego. What it doesn't have is a website that matches.

The current site runs on WordPress + Beaver Builder with 18 CSS bundles, 35 scripts, and **61 of 165 pages are byte-identical empty templates**. The Pricing page contains no prices. The schema markup has a typo that links to Wikipedia's "near-threatened invertebrates" article. Mobile loads slow. The contact form still ships unedited Beaver Builder placeholder copy in production.

We rebuilt the site on Next.js — **same brand, same logo, same House Call language, same booking flow, same $20 offer** — and it's live as a demo for you to click around right now.

- **Demo URL:** the link Justin sent you (Vercel preview)
- **140+ pages** of real, original content
- **Mobile PageSpeed:** 90+
- **Hosting cost:** ~$0/month on Vercel
- **Brand identity:** zero changes — your green, your logo, your phrases, your booking system

This document is the receipt.

---

## Side-by-side: 10 things we'd fix

### 1. Performance
- **Today:** WordPress + Beaver Builder, 18 CSS bundles, 35 scripts, 111 MB of images, typical mobile PageSpeed 30–50.
- **Rebuild:** Next.js 15 static + edge rendering, optimized images, modern fonts, mobile PageSpeed 90+.
- **Why it matters:** Google ranks fast sites higher. Slow mobile loses 50%+ of visitors before the page renders.

### 2. Empty pages
- **Today:** 37% of indexed pages (61 of 165) are byte-identical empty Beaver Builder stubs — including `/dumpster-sizes-pricing/`, `/request-a-quote/`, `/book-a-dumpster/`, and `/schedule-a-pickup/`.
- **Rebuild:** Every page has 800–1,200 words of original, locally-relevant content with FAQ schema, real internal links, and a clear CTA.
- **Why it matters:** Empty pages get indexed and immediately bounce — Google's quality signals tank for the whole site.

### 3. Pricing visibility
- **Today:** The Pricing page literally contains no prices — only the navigation. Tier images have no alt text. Price range is hidden inside invisible schema markup.
- **Rebuild:** Four published tier cards with prices ($99 / $199 / $379 / $659+), accessible alt text, and Offer schema. Click-to-book on every card.
- **Why it matters:** Customers comparing 3 quotes will exclude you if your pricing isn't visible.

### 4. Mobile UX
- **Today:** Pop-ups, slow load, no sticky CTAs, no easy click-to-call. Tap targets too small.
- **Rebuild:** Mobile-first design. Sticky bottom bar (Call · Book · Save $20). Click-to-call everywhere. Instant load.
- **Why it matters:** 60% of your traffic is mobile. This is where you book — or lose — most jobs.

### 5. Schema / SEO
- **Today:** Three conflicting LocalBusiness blocks (review counts 1,196 vs 741 vs widget's 1,290). Typo "San Diegoi" linked to Wikipedia's "near threatened invertebrates" page (!). Staging hostname `wpenginepowered.com` leaks in image URLs.
- **Rebuild:** Single canonical LocalBusiness schema, per-page Service + FAQPage + BreadcrumbList. One review-count source of truth.
- **Why it matters:** Google demotes sites with broken structured data. We caught real, visible errors during the audit.

### 6. Stability
- **Today:** During our crawl: 30+ pages returned WP "critical error" on first hit, 19 returned 502 errors. WP-Engine cold-cache fragility.
- **Rebuild:** Static / edge-rendered on Vercel. Zero PHP workers to time out. Zero cold-error states.
- **Why it matters:** When Google or a customer hits a cold page and sees an error, they leave. Forever.

### 7. Conversion path
- **Today:** Two side-by-side "$20 Save" buttons every page (one says "Learn More", one says "Book Now"). Contact form ships default Beaver Builder placeholder copy in production. Footer email leaks as `[email protected]`.
- **Rebuild:** One primary CTA per viewport. Real contact form copy. Clean email rendering. HouseCall Pro booking link as the single source of truth.
- **Why it matters:** Confused CTAs convert worse. Placeholder copy looks unprofessional.

### 8. Local SEO reach
- **Today:** 42 city/neighborhood pages, but several thin or duplicate (`junk-removal-la-mesa` + `junk-removal-la-mesa-ca`; `storage-unit-cleanout` + `storage-unit-cleanouts`).
- **Rebuild:** 60+ unique location pages with real neighborhoods, landmarks, zip codes, and highways. 140+ total indexed pages with proper hub-and-spoke architecture.
- **Why it matters:** More indexable, locally-distinct pages = more "junk removal near me" rankings = more booked jobs.

### 9. Brand preservation
- **Today:** JunkMD+ doctor metaphor, House Call branding, green color scheme, $20 first-appointment offer — all good, all preserved.
- **Rebuild:** Exact same brand colors (`#88c24e` / `#86cd91`), same fonts (Roboto + Oswald), same logo, same House Call language, same $20 promotion — just delivered faster and indexed better.
- **Why it matters:** Customers won't notice the rebuild — they'll just notice the site is faster and easier to use.

### 10. Maintenance cost
- **Today:** WordPress hosting + plugin licenses + ongoing security patches + page-builder lock-in.
- **Rebuild:** Hosted on Vercel (free tier covers most small businesses). No plugins. No security patches. No page-builder licenses.
- **Why it matters:** Lower monthly cost. Zero attack surface. Fewer technical headaches.

---

## What's new in the rebuild

- 60+ neighborhood location pages (vs your current 42), each with real zip codes, landmarks, and highway access
- Original 800–1,200 word service pages (yours average 300–500)
- FAQ schema on every service page → eligible for Google rich results
- Sticky mobile CTA bar (Call · Book · Save $20)
- Click-to-call phone numbers across the entire site
- Real published pricing tiers ($99 / $199 / $379 / $659+) with Offer schema
- Truck comparison visual rebuilt as CSS/SVG (not 1MB+ PNG)
- Single canonical LocalBusiness schema (no more 3 conflicting blocks)
- All HouseCall Pro booking links wired across every page
- Family-owned bios for David & Clemencia preserved verbatim
- Built-in blog/CMS architecture ready for future content

---

## What stays the same

Your brand is working. We're not touching it.

- JunkMD+ name and medical-cross styling
- Same primary green (`#88c24e`) and secondary green (`#86cd91`)
- Roboto + Oswald font pairing
- House Call doctor metaphor and language
- $20 first-appointment offer
- (858) 869-9448 phone number
- HouseCall Pro booking flow — **no replacement**
- David and Clemencia bios verbatim
- All review quotes preserved
- Truck comparison USP (1 truck = 6 pickups)
- 4-tier pricing structure
- Green/white color scheme everywhere

---

## If you approve — what happens next

1. **Point junkmd.com DNS to Vercel.** About 15 minutes of DNS work, full cutover same day.
2. **Set up support@junkmd.com on the new infrastructure.** Same email address, same inbox — just rerouted.
3. **301 redirects from old URLs to new.** So Google doesn't lose any ranking equity in the transition.
4. **Migrate any blog content worth keeping.** We've already structured the new blog architecture.
5. **Train your team (15 minutes).** The booking flow is identical — HouseCall Pro hasn't moved. Only difference is your site is faster and looks better.
6. **Monthly content additions.** One new blog post + 2-3 new service or location pages per month.

---

## Questions? Ready to talk?

Justin Hubbard built this demo specifically for JunkMD+ as a proof of concept. He'll walk you through it on a call whenever works for you.

The site you're looking at right now is **live, real, and yours** if you give the green light.
