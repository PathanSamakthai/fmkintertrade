# FMK Intertrade — Corporate Homepage

Bilingual (English / Thai) corporate homepage for **FMK Intertrade Company Limited**, built to the "Trusted Infrastructure Partner" brief. Implemented in **Next.js (App Router) + TypeScript + Tailwind CSS**, with **React Hook Form + Zod** for the consultation form.

> This is the production implementation of the design exported from Claude Design. The original design prototype and the full brief live in [`project/`](./project) and [`chats/`](./chats); the handoff notes are in [`docs/FMK_HOMEPAGE_IMPLEMENTATION.md`](./docs/FMK_HOMEPAGE_IMPLEMENTATION.md).

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000  → redirects to /en
```

Other scripts:

```bash
npm run build      # production build (statically prerenders /en and /th)
npm start          # serve the production build
npm run lint       # ESLint (next/core-web-vitals)
npm run typecheck  # tsc --noEmit
```

Open **`/en`** or **`/th`**. `/` redirects to the default language (`/en`) via `middleware.ts`. Switch language from the top bar (EN / TH) or the mobile menu. Click **Request Consultation** (header, hero "Discuss Your Project", or the final CTA) to open the lead form.

## What's implemented

- **12-section homepage** (brief §07): top bar, sticky header, hero, trust bar, about, 6 solution cards, featured projects, why-FMK, regional network, knowledge, final CTA, footer.
- **Sticky header** that shrinks + gains a shadow on scroll, collapses to an **off-canvas mobile menu** below 1120px (Esc to close, body-scroll lock, visible focus).
- **Consultation modal** — a lead-gen form (11 fields) with client-side validation (required / email / phone / consent), disabled-while-submitting, and an **honest demo state** (“Details captured (demo) — no data was sent”). It never claims a real submission. See the integration point below.
- **Bilingual EN/TH** via `/[lang]` routes, dictionaries, and `hreflang` alternates. No copy is hard-coded in components.
- **SEO**: per-language title/description, canonical, Open Graph, Twitter card, `robots.txt`, `sitemap.xml`, web manifest, favicon, and **Organization + WebSite JSON-LD** (verified fields only — no invented ratings/awards/counts).
- **Accessibility** (brief §10): semantic landmarks, skip link, labelled fields, `aria-modal` dialogs, keyboard Esc, visible focus, 44px touch targets, and `prefers-reduced-motion` support.

## Project structure

```
app/
  [lang]/layout.tsx    Root layout: <html lang>, fonts, providers, header/footer, metadata
  [lang]/page.tsx      Homepage — assembles all sections + JSON-LD
  globals.css          Base styles + reveal-on-scroll + reduced-motion
  robots.ts sitemap.ts manifest.ts icon.svg
middleware.ts          Locale redirect (/ → /en)
components/
  layout/              TopBar, Header (+ mobile menu), Footer, LangSwitch
  home/                Hero, TrustBar, About, Solutions, FeaturedProjects,
                       WhyFMK, RegionalNetwork, Knowledge, FinalCTA
  forms/               ConsultationModal, ConsultationForm
  providers/           ConsultationProvider (modal state, scroll lock, Esc)
  ui/                  Container, Eyebrow, Icon, ConsultButton, RevealObserver
  seo/                 StructuredData (JSON-LD)
data/
  company.ts           Verified, language-neutral facts (address, phones, email, social)
lib/
  i18n/                en.ts + th.ts dictionaries, getDictionary()
  types.ts fonts.ts
tailwind.config.ts     Design tokens (colours, radii, shadows, container width)
```

## Design tokens (brief §16)

Defined in `tailwind.config.ts`: primary `#0B2F22` (+ `950 #061B14`, `800 #123F2E`), secondary `#3B4148`, accent `#C4A263`, background `#F4F7F5`, surface `#FFFFFF`, text `#17211D`, muted `#68736E`, border `#DCE3DF`. Radii 8/14/22/30px; shadows sm/md/lg; container 1180px. Type: Manrope (EN) + Noto Sans Thai (TH) + IBM Plex Mono (labels), all via `next/font` with `display: swap`.

## Placeholders — need verified content from FMK

These are clearly marked in the UI and must be replaced before launch (see the implementation doc for the full table):

- **Photography**: hero background, about image, project images, article images (marked `PLACEHOLDER — …`).
- **Featured Projects** (×3): every card shows a **“Project information pending verification”** badge — no project names/clients/values are presented as confirmed.
- **Knowledge** (×3): marked **“Draft — pending publication”** — no false publish dates.
- **Partners / Certifications**: section **disabled** behind `SHOW_PARTNERS = false` in `app/[lang]/page.tsx` until real logos/certs are confirmed.
- **PWA icons** in `app/manifest.ts` and the `logo` URL in `data/company.ts`.

## Connecting the form to a backend

The form is intentionally a **demo** — no data is sent. In `components/forms/ConsultationForm.tsx`, replace the `setTimeout` placeholder in `onSubmit` with a real `POST` (e.g. `await fetch('/api/consultation', …)`), and add server-error handling and anti-spam (honeypot / token) there.

## Verified FMK data used

Legal name, head-office address (Silom, Bangkok), phone/email, the 4 Thailand offices, overseas presence (Laos P.D.R. / Myanmar), real business lines, and real social links — all sourced from fmkintertrade.com. No figures, projects, clients or certifications were invented.
