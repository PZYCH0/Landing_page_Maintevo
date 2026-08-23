# MainteNeat — Landing Page

Marketing and product landing page for **MainteNeat**, a CMMS (Computerized Maintenance Management System) platform built for industrial maintenance teams.

---

## Overview

MainteNeat is a dark-themed, multi-page React application that presents the product, features, pricing, and company information to prospective customers. The design language uses a deep navy background (`#020617`), blue accents (`#3b82f6`), and a consistent card-based layout across all pages.

The site supports a **light/dark mode toggle** that persists across sessions via `localStorage`.

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18.3 | UI framework |
| TypeScript | 5.5 | Type safety |
| Vite | 5.4 | Build tool and dev server |
| Tailwind CSS | 4.x | Utility classes (grid, flex, spacing, responsive) |
| React Router | 6.x | Client-side routing |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

The dev server runs at `http://localhost:5173` (or the next available port).

---

## Project Structure

```
├── index.html                        # Vite entry point
├── vite.config.ts                    # Vite + Tailwind plugin config
├── public/
│   ├── images/                       # Logo and shared images
│   ├── AssestsHero.png
│   ├── PreventiveMaintnanceHero.png
│   ├── stockandbillingHero.png
│   └── WorkOrderHero.png
└── src/
    ├── main.tsx                      # React root mount
    ├── App.tsx                       # Router, lazy-loaded routes, layout shell
    ├── index.css                     # All global styles (custom + Tailwind import)
    ├── context/
    │   └── ThemeContext.tsx          # Dark/light mode state and toggle
    ├── hooks/
    │   └── useReveal.ts              # IntersectionObserver scroll-reveal animations
    ├── components/
    │   ├── Navbar.tsx                # Fixed top navigation bar
    │   └── Footer.tsx                # Site-wide footer
    └── pages/
        ├── Home.tsx
        ├── About.tsx
        ├── Contact.tsx
        ├── Pricing.tsx
        ├── Industries.tsx
        ├── Enterprise.tsx
        ├── Resources.tsx
        └── features/
            ├── WorkOrders.tsx
            ├── Equipment.tsx
            ├── PreventiveMaintenance.tsx
            ├── Inventory.tsx
            ├── KpiDashboard.tsx
            ├── MaintenanceCalendar.tsx
            ├── Reporting.tsx
            └── Roles.tsx
```

---

## Pages

### Main pages

| Route | File | Description |
|---|---|---|
| `/` | `Home.tsx` | Hero, feature grid, AI/automation section, metrics, how-it-works, testimonials, CTA |
| `/about` | `About.tsx` | Company story, team, and mission |
| `/pricing` | `Pricing.tsx` | Three pricing tiers with feature comparison and FAQ |
| `/contact` | `Contact.tsx` | Contact form and company contact details |
| `/industries` | `Industries.tsx` | Six industry verticals: Manufacturing, Facilities, Healthcare, Hospitality, Food & Beverage, Education |
| `/enterprise` | `Enterprise.tsx` | Enterprise features: multi-site, SSO, API, dedicated support, custom contracts, private cloud |
| `/resources` | `Resources.tsx` | Guides, case studies, documentation links, help center, changelog |

### Feature detail pages

Each feature page lives under `/features/*` and follows a consistent structure: a full-height hero (two-column layout with a product screenshot for image-heavy pages, or a centered layout for text-heavy pages), a benefits/cards section, and a CTA.

| Route | Description |
|---|---|
| `/features/work-orders` | Work order lifecycle — create, assign, execute, and close with auto PDF report |
| `/features/equipment` | Asset registry, hierarchy, maintenance history, QR code scanning |
| `/features/preventive-maintenance` | Recurring PM schedules, auto-generated work orders by date or meter |
| `/features/inventory` | Spare parts catalog, real-time stock tracking, purchase orders |
| `/features/kpi-dashboard` | Seven auto-calculated KPIs: repair time, availability, failure rate, and more |
| `/features/maintenance-calendar` | Unified calendar view of all planned and reactive jobs |
| `/features/reporting` | PDF reports on every closed job, full audit trail, KPI history, data export |
| `/features/roles` | Three user roles — Manager, Technician, and Requester — with scoped permissions |

---

## Shared Components

### `Navbar.tsx`
Fixed top bar with:
- Logo (image + wordmark)
- Desktop nav links: Product, Industries, Enterprise, Pricing, Resources
- Phone number (hidden on small screens)
- Language switcher (FR / EN) with dropdown, persists to `localStorage`
- Dark/light mode toggle (sun/moon icon swap driven by CSS)
- "Get Started" CTA button → `/contact`
- Hamburger menu for mobile with collapsible nav

Applies a `.scrolled` class (frosted glass background + blue border glow) after the user scrolls past 50px.

### `Footer.tsx`
Four-column link grid covering platform, company, and legal links — plus copyright notice.

---

## Styling

All styles live in `src/index.css`. Tailwind's utility layer is imported at the top with `@import "tailwindcss"`, followed by custom CSS for components, animations, and theme overrides.

The base reset (`*`, `html`, `body`) is wrapped in `@layer base` so Tailwind utility classes (e.g. `mx-auto`, `px-6`) can correctly override it.

### Key custom classes

| Class | Purpose |
|---|---|
| `.navbar` / `.navbar.scrolled` | Glassmorphism nav bar, elevated on scroll |
| `.btn-p` | Primary blue gradient button with shimmer hover effect |
| `.btn-s` | Secondary ghost button |
| `.feat-card` | Feature card with hover lift and blue border glow |
| `.benefit-card` | Simpler content card used on feature detail pages |
| `.role-card` | Colored border card for the Roles page |
| `.neon-border` | Gradient border via `border-box` background technique |
| `.grad-text` | Blue-to-cyan gradient text |
| `.grad-text-w` | White-to-blue gradient text (remapped to dark blue in light mode) |
| `.reveal` / `.vis` | Scroll-reveal: elements fade up when entering the viewport |
| `.d1` – `.d5` | Transition delay variants for staggered reveals |

### Light mode

Toggled by adding/removing the `.dark` class on `<html>`. All overrides live in the `LIGHT MODE OVERRIDES` section of `index.css`. They cover:
- Background colors via inline `style` attribute selectors
- Text colors — both class-based (`text-white`) and inline (`style="color: rgb(...)"`)
- Gradient text classes remapped to dark-on-light equivalents
- Component classes (`.navbar`, `.feat-card`, `.btn-s`, etc.)
- Hero sections that intentionally stay dark in light mode

### Scroll animations

`useReveal.ts` sets up an `IntersectionObserver` that adds `.vis` to any `.reveal` element once it enters the viewport. Delay classes (`.d1`–`.d5`) stagger the animation within a group.

---

## Routing

All routes are defined in `App.tsx` using React Router v6. Every page is **lazy-loaded** via `React.lazy()` with a centered spinner fallback, so only the current page's JavaScript bundle is fetched on first visit.

`Navbar` and `Footer` sit outside the `<Suspense>` boundary and render immediately on every page regardless of which page chunk is loading.
