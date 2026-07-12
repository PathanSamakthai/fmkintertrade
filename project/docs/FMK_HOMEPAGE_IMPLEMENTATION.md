# FMK Intertrade — Corporate Homepage Implementation

> **Production implementation (2026-07-12):** the design below has been built as a **Next.js (App Router) + TypeScript + Tailwind CSS** application at the repository root. Run it with `npm install && npm run dev` and see the top-level [`README.md`](../../README.md) for structure, scripts and the placeholder/backend checklists. The original design prototype (`FMK Homepage.dc.html`) remains in this `project/` folder as the visual reference. The sections below document the design decisions, verified data and placeholders — all of which carried over 1:1 into the Next.js build.

**Design source:** `project/FMK Homepage.dc.html` — a single, self-contained Design Component (streaming HTML).
**Positioning:** The Infrastructure Partner — *Building Sustainable Growth for Agriculture and Livestock*.
**Languages:** English (default) + Thai. In the Next.js build these are `/en` and `/th` routes with `hreflang` alternates; language is switched from the top bar and the mobile menu.

## Production stack & mapping

| Prototype concept | Next.js implementation |
|---|---|
| Bilingual `T` dictionary | `lib/i18n/en.ts` + `th.ts` (shape enforced by a shared `Dictionary` type) |
| Inline design tokens | `tailwind.config.ts` theme + `app/globals.css` |
| One section per block | `components/home/*` and `components/layout/*` |
| Modal + validated form | `components/forms/ConsultationModal` + `ConsultationForm` (React Hook Form + Zod) |
| `showPartnersSection = false` | `SHOW_PARTNERS = false` in `app/[lang]/page.tsx` |
| Verified facts | `data/company.ts` |
| SEO head tags (recommended) | Implemented: metadata in `app/[lang]/layout.tsx`, JSON-LD in `components/seo/StructuredData.tsx`, `robots.ts` / `sitemap.ts` / `manifest.ts` |

---

## 1. Brand Identity (as built)

- **Archetype:** ~80% The Ruler (stable, standards-led, authoritative) / 20% The Sage (technical, advisory).
- **Voice:** integrated, reliable, regional, technical, responsible, long-term. No superlatives, no unverified claims, no invented numbers.

### Colour system (literal values, applied inline)
| Token | Value | Use |
|---|---|---|
| Primary (Deep Forest Green) | `#0B2F22` | Header logo mark, CTAs, dark sections, footer, icon backgrounds |
| Primary 950 | `#061B14` | Top bar, projects/CTA backgrounds, deepest surfaces |
| Primary 800 | `#123F2E` | Hover states, striped-overlay highlight |
| Secondary (Graphite) | `#3B4148` | Secondary project cards, body accents |
| Accent (Executive Gold) | `#C4A263` | Eyebrows, key numerals, hairlines, active detail (used sparingly) |
| Background | `#F4F7F5` · Surface `#FFFFFF` | Section backgrounds / cards |
| Text `#17211D` · Muted `#68736E` · Border `#DCE3DF` | | Type + dividers |

### Type
- **Headings + body:** Manrope (EN) with Noto Sans Thai (TH) fallback in the same stack. Negative letter-spacing on large EN headings; Thai is not compressed.
- **Mono (labels/placeholders only):** IBM Plex Mono.
- Hero H1 and section H2 use `clamp()` for fluid scaling; body never below 13–14px.
- Icons: one consistent outline set (Lucide-style, 1.6 stroke) drawn as inline SVG. No emoji.

---

## 2. Page structure (Information Architecture)

1. **Corporate top bar** — brand, region string, tagline, TH/EN switch (secondary text hides < 600px).
2. **Sticky header** — logo + descriptor, primary nav (8 items), Request Consultation CTA; shrinks + gains shadow on scroll; collapses to an off-canvas mobile menu < 1120px (Esc closes, body scroll locks).
3. **Hero** — dark green, striped placeholder + gradient overlay, eyebrow / H1 / supporting copy / two CTAs, and a glass "Integrated Capability" value card (stacks below on mobile).
4. **Trust signal bar** — 4 value statements (no invented figures).
5. **About FMK** — image (45%) + content (55%), lead line, body, 4 brand principles.
6. **Integrated Solutions** — 6 solution cards (number, icon, title, description, tags, hover lift). Built from real FMK business lines.
7. **Featured Projects** — editorial 1-large + 2-small layout; every card carries a **"Project information pending verification"** badge (no fabricated names/values).
8. **Why FMK** — 4 standards pillars.
9. **Regional Network** — Thailand office cards + overseas cards + 2 verified stats (4 TH offices, 3 countries).
10. **Knowledge & Insights** — 3 article cards clearly marked **"Draft — pending publication"** (no false publish dates).
11. **Final CTA** — dark green, headline + direct contact card (verified phone / email / address).
12. **Footer** — Company / Solutions / Contact columns, social links, legal row.
- **Consultation modal** — lead-gen form with validation (see §5).

---

## 3. Verified FMK data used (from fmkintertrade.com)

- **Legal name:** FMK Intertrade Company Limited.
- **Head office:** 142/36 Suksawitthaya Soi, Silom, Bangrak, Bangkok 10500.
- **Phone:** +66 2 268 1681-2 · +66 98 498 9939. **Email:** support@fmkintertrade.com.
- **Thailand network:** Bangkok (Head Office), Chiang Mai (Branch), Nakhon Phanom (Branch), Nakhon Ratchasima (Branch).
- **Overseas:** Laos P.D.R. (FMK Laos Intertrade), Myanmar (Representative Office).
- **Business lines (real):** fertilizer + soil/water conditioners; animal feed, premix, feed additives, veterinary medicine, vaccine; livestock housing / equipment for swine & poultry with evaporative cooling; greenhouse; cold storage & packing; transportation & shipping agent; import/export & cross-border trade; egg packaging.
- **Social (real links):** Facebook `/fmkinter`, YouTube `@fmkintertrade`, WhatsApp, LINE Official `lin.ee/TO6iB48`.

---

## 4. Placeholders — require verified content from FMK

| Location | Placeholder | Replace with |
|---|---|---|
| Hero background | Striped block, monospace note | Verified FMK operations photo (housing / cold storage / logistics) |
| About image | Striped block | Verified FMK project/corporate photo |
| Featured Projects (×3) | Striped blocks + "pending verification" badge | Real project name, type, location, year, scope, size, client industry, challenge/solution/result, gallery |
| Knowledge (×3) | Striped image + "Draft — pending publication" + placeholder excerpt | Real articles with real categories, images, dates, links |
| Partners / Client Trust | **Section intentionally omitted** | Re-enable only when real client/partner logos, certifications or distribution rights are confirmed |
| Stats (network) | "4 offices / 3 countries" | Verified only — derived directly from confirmed office list; do not add years/clients/projects without proof |

> No project names, client logos, certifications, awards, ratings or counts were invented. Structured data (see §7) contains only verifiable Organization fields.

---

## 5. Lead generation form

Fields: Full Name*, Company*, Job Position, Country, Email*, Phone*, Interested Solution, Estimated Project Type, Message, Preferred Contact Method, Privacy Consent*.

- Client-side validation: required checks, email format, basic phone format, consent required; inline errors under each field (bilingual).
- Submit is disabled while sending and guarded against double-submit.
- **No false success:** on valid submit it shows *"Details captured (demo) — no data was sent"* and a persistent **"Demo form — backend integration required"** badge.
- **Integration point:** replace the `setTimeout` in `onSubmit` (logic class) with a real `fetch()` POST to your endpoint; add server-error handling and anti-spam (honeypot / token) there.

---

## 6. Responsive & Accessibility

- Breakpoints (via `data-*` hooks in the helmet `<style>`): nav → hamburger < 1120px; hero/about/network/CTA/projects → single column < 960px; card grids → 2-up < 820px → 1-up < 600px; top-bar secondary text hidden < 600px; form → 1 column < 600px. `overflow-x:hidden` prevents horizontal scroll.
- Semantic landmarks (`header`/`main`/`section`/`footer`/`nav`), skip-to-content link, labelled form fields, `aria-modal` dialogs, visible focus outlines, keyboard Esc to close menu/modal, 44px touch targets.
- Motion: subtle IntersectionObserver fade-up on sections + hover lifts only; honours `prefers-reduced-motion` (reveals immediately, transitions disabled).

---

## 7. SEO / metadata — recommended head tags (for the production page)

The DC renders inside a host document; when porting to the production site (Next.js / WordPress / etc.) add:
- `<title>FMK Intertrade | Agriculture, Livestock, Engineering & Cold Chain Solutions</title>`
- meta description (per brief), canonical `https://fmkintertrade.com/`, Open Graph + Twitter card, favicon + web manifest.
- `Organization` + `WebSite` JSON-LD using ONLY verified fields (name, url, logo, address = head office, telephone, sameAs = real social URLs). Do **not** add Review/Rating/Award/AggregateRating.
- `hreflang` alternates for `/en/` and `/th/` once both language routes exist.

---

## 8. How to view

Open **`FMK Homepage.dc.html`** in the preview / browser. Use the TH / EN switch (top-right) to toggle language; click **Request Consultation** (header, hero "Discuss Your Project", or Final CTA) to open the lead form.

---

## 9. Recommended next steps

1. Supply verified photography (hero, about, projects) and enable real project case studies.
2. Confirm client/partner logos & certifications → re-enable a Partners section.
3. Publish real Knowledge articles with dates and links.
4. Wire the consultation form to a backend endpoint (+ anti-spam) and set up `/th/` `/en/` routing.
5. Add the head metadata + JSON-LD (§7) in the production framework.
6. If porting to a component framework, split along the section boundaries already established here (Header, Hero, TrustBar, About, Solutions, Projects, WhyFMK, Network, Knowledge, FinalCTA, Footer, ConsultationForm) and keep copy in the bilingual `T` dictionary / data files.
