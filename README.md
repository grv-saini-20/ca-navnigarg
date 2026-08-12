# Navnigarg CA & Associates — website

Single-page marketing site for the chartered accountancy practice, built with **SvelteKit 5** and **pnpm**.

## Design direction — "Ledger & Seal"

Ink navy, ledger-paper backgrounds, a brass "seal" accent, and tabular (monospace) figures for anything numeric — phone numbers, dates, stats — echo the visual language of a physical account ledger and an official verification stamp. The signature moment is the animated seal in the hero that presses into place on load (skipped automatically if the visitor has reduced-motion enabled).

## Structure

Everything lives in one route (`src/routes/+page.svelte`), assembled from section components in `src/lib/components/`:

- `Header.svelte` — sticky nav with mobile menu
- `Hero.svelte` + `Seal.svelte` — hero and the animated seal signature element
- `WhyChooseUs.svelte` — ledger-row list
- `About.svelte` — mission / vision cards
- `Services.svelte` — all 14 services grouped into 4 real categories
- `Industries.svelte` — industries served
- `Trust.svelte` — trust stat strip
- `Contact.svelte` — call/email links + an enquiry form that opens a pre-filled email
- `Footer.svelte`

Copy lives in `src/lib/data.js` — edit that file to change phone/email/services/etc. without touching component markup.

## Getting started

```bash
pnpm install
pnpm run dev --open       # http://localhost:5173
```

## Build for production

```bash
pnpm run build
pnpm run preview          # sanity-check the production build locally
```

By default this project uses `@sveltejs/adapter-auto`, which picks the right adapter for common hosts (Vercel, Netlify, Cloudflare Pages, etc.) at build/deploy time — no config needed for those. For a plain Node server or static export instead, swap in `@sveltejs/adapter-node` or `@sveltejs/adapter-static` per the [adapter docs](https://svelte.dev/docs/kit/adapters).

## Editing content

- **Phone / email / firm name:** `src/lib/data.js` → `firm`
- **"Why choose us" list:** `src/lib/data.js` → `whyChooseUs`
- **Services:** `src/lib/data.js` → `serviceGroups`
- **Industries:** `src/lib/data.js` → `industries`
- **Trust strip:** `src/lib/data.js` → `trustPoints`
- **Colors / fonts:** CSS variables at the top of `src/app.css`

## Notes

- The contact form has no backend — submitting it opens the visitor's email client with the message pre-filled, addressed to the firm's email. Swap `sendEnquiry()` in `Contact.svelte` for a real API call whenever a backend/email service is ready.
- Fonts (Fraunces, IBM Plex Mono, Work Sans) load from Google Fonts via `src/app.html` — needs the deploy target to allow that external request, or self-host the fonts if not.
# ca-navnigarg
