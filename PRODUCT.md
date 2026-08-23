# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Maintenance teams at Moroccan industrial SMEs. Three signed-in roles plus one
anonymous route:

- **Manager** — reviews and approves requests, creates and assigns work orders, manages equipment, stock and preventive plans, reads the reports.
- **Technician** — sees only assigned work orders; works sub-tasks and checklists, logs hours and parts, closes the job.
- **Requester** — raises requests against a machine and follows them, without reaching costs or planning.
- **QR, no account** — anyone standing at a machine scans its QR code and raises a request with the equipment pre-filled. No login, no user record. This is how line operators report faults, and it is a primary differentiator.

## Product Purpose

MainteNeat is a CMMS (Computerized Maintenance Management System) that moves maintenance operations off paper, whiteboards, and spreadsheets into a single digital system: work orders, preventive maintenance scheduling, equipment/asset records, inventory & purchasing, KPI dashboards, and reporting.

## Positioning

_Source: `Maintevo_Pitch_DeckED_FR.pdf` (23 pages), the authority for everything below._

"GMAO Zéro Friction" for SMEs: simple for the technician, useful for the manager.
Flat monthly pricing per company, **in dirhams**, entry tier **1 000 MAD/month**.
Pro and Enterprise are quoted, and no figures for them exist yet — do not invent any.
Setup is a separate one-off fee covering data migration from spreadsheets and
on-site training.

The competitive set is Excel/paper, SAP PM, Odoo Maintenance, the heavy imported
CMMS bracket (Coswin 8i, DIMO Maint, Qb7, Carl Source), the local player OTILA
(B-Agile), and the foreign mobile tools MaintainX and UpKeep. **IBM Maximo is not
a competitor here** and was removed from the site.

What a foreign vendor cannot match, and the core of the argument: data held in
Morocco, invoicing in MAD, support that can physically reach the plant, and
alignment with the national Made in Morocco programme.

## Operating Context

Used on industrial sites: technicians close out work orders and log labor/parts from the shop floor via mobile (iOS/Android, with offline mode); managers monitor KPIs (MTTR, MTBF, downtime, PM compliance) and review reports; requesters submit issues without needing full system access. Bilingual French/English usage throughout.

## Capabilities and Constraints

**Two distinct records, and the site must keep them distinct.** An *intervention
request* (`DI-2026-000005`) is what somebody reported. Approving it produces a
*work order* (`OT-2026-0010` / `WO-2026-000005`). Collapsing them into one "work
order" misdescribes the product.

- Equipment and sites: `Parc et sites` — equipment, departments, categories, sub-equipment under a parent. Per-machine model, serial, acquisition date, supplier, location, criticality (Low / Medium / High / Critical), status history separating planned from unplanned stops.
- **QR code per machine.** Scanning opens the equipment card and offers: raise a request (no account), open the equipment record, create a work order, or enter a meter reading. The last three need a login.
- Field and planning: `Terrain et planification` — interventions, work orders, calendar (day/week/month/list), field teams with a per-technician workload view and an unplanned-jobs tray.
- Work orders carry sub-tasks and checklists (isolation and lockout, diagnosis, access, repair, testing and return to service), with yes/no answers and comments required before closing.
- Prevention and reliability: `Prévention et fiabilité` — preventive plans triggered by calendar, by counter (`compteur`), or both; task templates; "create the work order N days ahead"; "reschedule from the closing date rather than the creation date".
- Stock: `Stock et magasins` — stores broken into locations, stock levels, movements (consumption, issue, receipt, each with its own reference), physical inventories. Alert and out-of-stock states against a per-item minimum.
- Purchasing: `Achats et catalogue` — purchase orders, product catalogue priced in MAD, suppliers **and subcontractors**.
- Reports: four views — requests/work orders, equipment health (availability, MTBF, MTTR, downtime, failure rate per 1,000 h, asset health score), maintenance cost, parts inventory (stock value, turnover, dormant stock, inventory accuracy, stockouts, supplier lead time).
- Documentation stored against equipment; audit trail with author and timestamp on every status change.
- Locale defaults: currency MAD, timezone Africa/Casablanca, date format JJ/MM/AAAA, organisation language French or English.
- Enterprise: multi-site with group reporting, API integration with SAP, Odoo and Oracle, advanced cloud security.
- **Not yet shipped.** Predictive maintenance and AI-assisted workflows are on the R&D roadmap in the deck's own VISION slide. A "Maintenance prédictive" nav item exists in the product UI, but the capability is not delivered. Never present prediction as current.
- **Native iOS and Android apps — confirmed 2026-08-12.** The deck describes only a mobile web app at a URL, so this was previously recorded as unverified and barred from the site. It is now confirmed direct from the founders: real store apps ship. The home page claims them in `home.app`. Still outstanding before the claim is fully dressed: the App Store and Play Store URLs, and the official badge assets.
- **Offline mode: partial, and unspecified.** Confirmed 2026-08-12 as working "partly", but which actions survive a dead zone is not yet known. **The site therefore makes no offline claim at all.** A flat "offline mode" claim on a partial capability is the kind of thing that gets discovered on a shop floor. Get the specifics before writing that line. Note UpKeep advertises "offline mobile mode" outright, so buyers may arrive asking.

## Brand Commitments

_Rewritten 2026-08-09. The previous dark-navy / neon-blue-glow system was replaced
wholesale; if you find `#020617`, `#3b82f6`, glassmorphism, gradient text or glow
shadows anywhere, it is leftover and should go._

- Name: **MainteNeat** (renamed from "MaintEvo" during this project; some internal
  filenames/identifiers like `logo-maintevo.png` and i18n keys such as `col_maintevo`
  were deliberately left unchanged as non-visible implementation detail).
- Wordmark treatment: "Mainte" in `--ink`, "Neat" in the accent. Set in Archivo 700.
- Logo mark: blue-to-black angular "M" glyph on a transparent ground
  (`images/logo-maintevo.png`). It is drawn for a light background; on the dark
  theme it is shown on a light plate (`.brand-mark`). A native dark-theme asset is
  still outstanding.

### Visual system

- **Register:** restrained, content-first, document-like. Hairline rules and
  whitespace do the structural work that cards and shadows used to do. Reference
  points are early Stripe and Basecamp, not contemporary SaaS templates.
- **Type:** **Archivo** 500/600/700 for headings and labels — an industrial
  grotesque from the signage lineage. **Source Sans 3** 400/600 for body. No other
  faces. Headings track at `-0.02em` to `-0.03em`; body runs at 1.65 line-height on
  a 54–68ch measure.
- **Accent:** exactly one — `#17408B` ink blue on light, `#86A9E8` on dark. It
  appears on primary buttons, links, active tab underlines, the wordmark's "Neat",
  and nothing else. It is never used for icon backgrounds, card borders, section
  tints, or decorative text.
- **Ground:** light is the default (`#FFFFFF`, with `#F4F4F3` as the single sunken
  tint used to separate sections). Dark is an opt-in, persisted per visitor, and is
  a flat palette (`#17191C` / `#1E2125`) with no glow, no elevation colour, and no
  luminous edges.
- **Theme mechanics:** both themes are defined as CSS custom properties on `:root`
  and `html.dark` in `src/index.css`. The old ~250-line `!important` override layer
  is gone and must not come back — a new colour is added as a token, not an override.
- **Radius scale:** 2px (`--r`) on everything that has a radius at all — buttons,
  inputs, panels, plates. Deliberately near-sharp. Nothing is pill-shaped and
  nothing is 16px-rounded.
- **Elevation:** essentially none. One soft shadow exists, on the navbar dropdown
  (`0 8px 24px -8px rgb(0 0 0 / .18)`), because it floats over content. Everything
  else separates with a 1px `--rule` hairline.
- **Layout:** 1120px maximum content width, left-aligned by default. Centred text
  is not used anywhere. Section padding varies by density
  (`--pad-lg` / `--pad-md` / `--pad-sm`) rather than repeating one value down the page.
- **Structure:** the identical-card grid is banned as a page scaffold. Use the
  stacked index list (`.index-row`), definition rows (`.def-row`), a numbered
  sequence where order carries meaning (`.seq`), or a real table (`.tbl`). Pricing
  tiers are the one legitimate card grid, because the tiers are genuinely parallel.
- **Motion:** one authored moment — a 0.5s staggered entrance on the hero, from an
  already-visible default. No scroll-triggered reveals. Hover states change colour,
  underline, or row background; nothing lifts or scales. `prefers-reduced-motion`
  is honoured globally.
- **Imagery:** none currently ships. The previous hero and feature "screenshots"
  were AI-generated composites (perspective tablets over a refinery, floating glass
  panels, invented KPI values, `MAINTEVO` in the sidebar, and in `Roles_Light.png`
  hallucinated interface text). They were removed rather than replaced. **Only real
  product screenshots may be added back.** Empty space is the acceptable default;
  decorative stock photography and 3D renders are not.

## Evidence on Hand

No customers yet. Company status per the deck: **IT NEAT**, in formation,
negative certificate N° 3250480. The product is a finished MVP, tested against
industrial data. Stated goal is 100 SMEs in year one.

**Airbus, TATA Advanced Systems, EATON and Royal Air Maroc appear in the deck as
the founder's employment history and as sources of test data. They are not
customers.** By explicit decision on 2026-08-10 they are named nowhere on the
site, including the founder biography, because on a marketing page they read as
a client list no matter how they are phrased. Do not reintroduce them.

The founders are real and now published on `/about`: Abouseir Youness (CEO) and
Achtouk Aadnan (CTO).

Demonstration data shown on the site (`DI-2026-000005`, Tour CNC Mazak QTN-350,
Sophie Martin OP-1193) comes from the product's own demo dataset and is labelled
in-page as such.

No verified customer stats, testimonials, or adoption figures exist yet.

As of 2026-08-09 the site no longer claims any. The following were **removed** in
the redesign and must not be reintroduced in any form:

- "Trusted by 500+ industrial enterprises" and "Join 5,000+ teams" (invented).
- The three testimonials from "Marcus R.", "Sophie L." and "James K.", including
  the AI bearing-failure quote (invented; also claimed a capability that does not
  ship).
- Five-star rating rows attached to those testimonials.
- "SOC 2 Type II certified" (uncertified), "99.9% uptime" (unmeasured), and
  "Setup takes 15 minutes" (unmeasured).
- The team profiles for "Alex Rivera", "Jamie Chen" and "Morgan Osei" — replaced
  on `/about` with an explicit placeholder awaiting real names.

Competitor pricing on `/comparison` is retained but is labelled as publicly listed
2026 figures that need confirming with each vendor. The example work order on the
home page (`WO-2026-0417`) is labelled in-page as illustrative.

Where a number is not real, ship a labelled placeholder or omit the section. Do not
invent one.

## Product Principles

1. Flat, predictable pricing beats per-user billing for the target buyer.
2. Adoption friction is the enemy — a technician should be productive without a consultant or lengthy onboarding.
3. Each role sees only what's relevant to its job; complexity is hidden behind role-scoped workspaces.
4. Data (KPIs, reports) should be a byproduct of normal work, not a separate manual logging task.
5. Morocco / French-speaking industrial SMEs are the primary beachhead market, not an afterthought localization.
