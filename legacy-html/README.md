# Legacy static site — deprecated

These files are the pre-React version of the MainteNeat site. **They are no longer
maintained and are not part of the build.** They are kept here only so nothing is
lost; delete the folder once you are satisfied nothing links to it.

## Why they were deprecated

Archived on 2026-08-09 during the landing-page redesign, for four reasons:

1. **Outside the build.** `index.html` at the project root is the Vite entry point
   and mounts `/src/main.tsx`. These pages were standalone; `vite build` never
   touched them.
2. **English only.** The React app is bilingual FR/EN through `src/i18n/`, and
   French is the default. These pages had no translation layer at all, so the two
   versions of the site said different things to different visitors.
3. **Tailwind via CDN.** Each page pulled `https://cdn.tailwindcss.com` and
   configured Tailwind inline — fine for a prototype, not for production.
4. **Guaranteed drift.** Every page duplicated the navbar, footer and design
   tokens as inline `<style>` blocks. Keeping them in step with `src/` meant
   making every change twice, which is what had already stopped happening.

## What replaced what

| Legacy file | React route | Source |
|---|---|---|
| `features.html` | `/` (What's in it) | `src/pages/Home.tsx` |
| `about.html` | `/about` | `src/pages/About.tsx` |
| `contact.html` | `/contact` | `src/pages/Contact.tsx` |
| `pricing.html` | `/pricing` | `src/pages/Pricing.tsx` |
| `feature-work-orders.html` | `/features/work-orders` | `src/pages/features/WorkOrders.tsx` |
| `feature-equipment.html` | `/features/equipment` | `src/pages/features/Equipment.tsx` |
| `feature-preventive-maintenance.html` | `/features/preventive-maintenance` | `src/pages/features/PreventiveMaintenance.tsx` |
| `feature-inventory.html` | `/features/inventory` | `src/pages/features/Inventory.tsx` |
| `feature-kpi-dashboard.html` | `/features/kpi-dashboard` | `src/pages/features/KpiDashboard.tsx` |
| `feature-maintenance-calendar.html` | `/features/maintenance-calendar` | `src/pages/features/MaintenanceCalendar.tsx` |
| `feature-reporting.html` | `/features/reporting` | `src/pages/features/Reporting.tsx` |
| `feature-roles.html` | `/features/roles` | `src/pages/features/Roles.tsx` |

## Supporting files archived with them

- `theme.css`, `theme.js` — the old dark/light override layer and toggle script.
  Replaced by CSS custom properties in `src/index.css` and `src/context/ThemeContext.tsx`.
- `input.css`, `output.css` — Tailwind v3 build artefacts. The app now uses
  `@tailwindcss/vite` (v4), which needs neither.
- `tailwind.config.js` — v3 config. Its `content` glob only covered `./*.html`,
  and it required `flowbite/plugin`, which is not in `package.json`. Dead on both
  counts.

## `unused-media/`

The imagery the redesign dropped, kept here rather than deleted:

- `logo-maintevo-original-1536px.png` — the original 1536×1024, 1.1 MB logo. The
  shipped `public/images/logo-maintevo.png` is now a 192×128, 31 KB version of the
  same artwork (alpha preserved); it renders at 24–26 px.
- `images/` and the `*Hero*.png` files — the AI-generated marketing composites
  (perspective tablets over a refinery, floating glass panels, invented KPI
  figures, `MAINTEVO` in the sidebar, hallucinated UI text in `Roles_Light.png`).

These were sitting in `public/`, so Vite copied all of them into every production
build even though nothing referenced them. Moving them here took `dist/` from
**80 MB to 443 KB**. Do not move them back into `public/`.

## If you need these pages live again

These pages reference images as `./images/…`, which resolved when they lived at
the project root. From inside `legacy-html/` that path no longer resolves, so
they will render without imagery. To view them as they were, copy the `.html`
files back to the project root, where the original `images/` directory is still
intact.

They do **not** reflect the current design, brand name treatment, or copy.
