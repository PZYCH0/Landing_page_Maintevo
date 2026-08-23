# Design system

Implementation reference for the MainteNeat marketing site, recorded from the
built result on 2026-08-09. `PRODUCT.md` → *Brand Commitments* holds the summary
and the things that must not change; this file holds the mechanics.

Everything below is defined in `src/index.css`. There is no second source of
truth — no Tailwind config, no override layer, no per-page theme block.

## Thesis

A CMMS landing page that reads as a maintenance record rather than a product
launch. Hairline rules and whitespace carry the structure that cards, shadows and
glow used to. The reference register is early Stripe and Basecamp.

## Tokens

Light is `:root`; dark is `html.dark`. Adding a colour means adding a token, not
an override.

| Token | Light | Dark | Used for |
|---|---|---|---|
| `--bg` | `#FFFFFF` | `#17191C` | page ground, navbar, panels |
| `--bg-sunken` | `#F4F4F3` | `#1E2125` | alternating sections, footer |
| `--rule` | `#E0E0DE` | `#2E3237` | every hairline separator |
| `--rule-strong` | `#C9CAC7` | `#414750` | input borders, table header rule |
| `--ink` | `#16181A` | `#E9EAEC` | headings, table first column |
| `--ink-muted` | `#5C6165` | `#979DA4` | body copy, labels |
| `--accent` | `#17408B` | `#86A9E8` | primary buttons, links, active tab, "Neat" |
| `--accent-hover` | `#0E2C63` | `#A9C3F0` | button hover only |
| `--accent-on` | `#FFFFFF` | `#14161A` | text on an accent fill |
| `--ok` / `--warn` / `--crit` | `#1C6B3F` / `#8A5A00` / `#99231D` | `#6FBF8E` / `#D3A24A` / `#E08A83` | permission ticks, criticality scale |
| `--r` | `2px` | — | the only radius |

Contrast measured on the built page: `--ink-muted` on `--bg` is 6.3:1 light and
6.6:1 dark; `--accent` on `--bg` is 9.8:1 light and 7.6:1 dark. All pass AA at
body size.

`--pad-lg` / `--pad-md` / `--pad-sm` (120/84/56px, stepping down at 900px and
640px) drive `.section-lg` / `.section-md` / `.section-sm`. Sections pick the one
that matches their density; the page does not repeat a single value.

## Type

- **Archivo** 500/600/700 — headings, labels, table headers, the wordmark, tab
  labels, the numerals in a sequence. An industrial grotesque from the signage
  lineage.
- **Source Sans 3** 400/600 — all body copy, buttons, inputs.
- `h1` `clamp(2.25rem, 4.6vw, 3.5rem)` / 700 / `-0.03em` / 1.04, `text-wrap: balance`,
  capped at 19–20ch so French and English both break cleanly.
- `h2` `clamp(1.65rem, 3vw, 2.35rem)` / 700 / `-0.022em`. `h3` 1.0625rem / 600.
- Body 1rem / 1.65. Measure held by `.measure` (68ch), `.measure-narrow` (54ch),
  or an inline `max-width` around 62ch on prose columns.
- No gradient fills on text. Emphasis is weight and size only.

## Structural components

The identical-card grid is not a page scaffold here. In order of preference:

| Class | Shape | Where |
|---|---|---|
| `.index-row` | 200px name / prose / "Read more →", hairline-separated, row tints on hover | Home module index |
| `.def-row` | 200px label / prose | feature benefits, automation, industries, enterprise, values, audit events |
| `.seq` + `.seq-item` | zero-padded numeral / heading + prose | only where order carries meaning (the work-order path, the four states) |
| `.tbl` | real table, first column `--ink`, `.tbl-scroll` wrapper | role permissions, plan comparison, competitor comparison, annual cost |
| `.crit-row` | swatch / name / description | equipment criticality scale |
| `.price-card` | the one legitimate card grid — the tiers are genuinely parallel | pricing |
| `.rule-brand` | 3px gradient section divider in the logo's colours | between the top-level sections on Home |

### `.rule-brand`

The one place multiple colours appear together. A smooth left-to-right gradient
across four stops sampled directly from `logo-maintevo.png`, matching the ramp in
the mark itself — light stroke through to the dark stroke:

| Token | Light | Dark |
|---|---|---|
| `--brand-1` | `#30B0FF` | same |
| `--brand-2` | `#0070FF` | same |
| `--brand-3` | `#0050D0` | same |
| `--brand-4` | `#101014` | `#DFE3E8` — the black stroke would vanish on the dark ground |

Stops sit at 0% / 38% / 68% / 100%. Full-bleed by default; `.rule-brand--inset`
holds it to the 1120px column. Falls back to `CanvasText` under `forced-colors`.

### Gradient policy

Gradients appear in exactly **two** places, both carrying the logo ramp:
`.rule-brand` and the primary button fill. They remain off the table for
backgrounds, section grounds, text fills, borders, and icons.

### Primary button (`.btn-p`)

Filled with `--btn-grad`. Unlike `.rule-brand`, the button stays inside the logo's
**blue range** and never reaches the mark's black stroke — ending in black made
the button read heavy and dark against a white page.

The ramp is bounded at both ends. The top is set by contrast: the mark's light
blue (`#30B0FF`, 2.4:1 with white) and mid blue (`#0070FF`, 4.4:1) both fail AA
behind a 15px semibold label, so the lightest usable start is `#0068FF`.

| | Light | Dark |
|---|---|---|
| `--btn-grad` | `#0068FF → #0055DD 55% → #0038A8` | `#9DBBF0 → #86A9E8 45% → #6B90DE` |
| `--btn-grad-hover` | `#0055DD → #0044B8 55% → #002A7A` | `#B4CBF5 → #9DBBF0 45% → #86A9E8` |
| Label | `#FFFFFF` | `--accent-on` `#14161A` |
| Contrast across ramp | 4.75 / 6.28 / 9.85:1 | 5.9:1 worst case |

Hover deepens the whole ramp by one step rather than darkening to black.

Dark inverts to a light ramp with dark text: a fill ending in deep blue would
sink into the `#17191C` ground and lose its right edge.

Gradients cannot be transitioned, so the resting ramp sits on a `::before` and
cross-fades its opacity to reveal the darker ramp painted on the button itself.
The button needs `position: relative; isolation: isolate` for this; the pseudo
uses `inset: -1px` so it covers the transparent 1px border.

`--accent` stays a flat `#17408B` / `#86A9E8` and still governs links, active tab
underlines, focus rings, and the wordmark. Only the button fill is a gradient.

### Secondary button (`.btn-s`)

The logo's light stroke, `#30B0FF`, on a solid fill with a near-black label.

| Token | Value (both themes) |
|---|---|
| `--accent-2` | `#30B0FF` |
| `--accent-2-hover` | `#1A9CEC` |
| `--accent-2-border` | `#1A9CEC` |
| `--accent-2-on` | `#0A1020` |

**Identical in light and dark, on purpose.** It is a solid fill carrying a dark
label, so the text contrast never depends on the page behind it: 7.9:1 at rest
and 6.3:1 on hover in both themes. The border sits one step deeper than the fill
only so the button's edge clears 3:1 against a white page.

Used by Sign Up in the nav, "See pricing" beside every primary, and the
non-featured pricing tiers.

### Quiet button (`.btn-q`)

Transparent with a `--rule-strong` border, darkening to `--ink` on hover. This is
the former secondary. Use it where a section already carries two filled buttons
and a third action would shout.

### Known issue: dark-mode hierarchy

In dark mode the primary inverts to a pale blue ramp while the secondary stays a
saturated cyan, so **the secondary currently out-weighs the primary on dark**.
It is most visible on `/pricing`, where the featured Pro tier's button reads
quieter than Starter's and Enterprise's. Light mode has the intended order.

Fixing it means re-darkening `--btn-grad` under `html.dark` to a saturated ramp
with white text, roughly `#1F6FF5 → #1A57D0 → #1848B0` (white clears 4.5:1 at
every point). That trade was rejected once already because a fill ending near
black loses its right edge against `#17191C`; this ramp stops short of that.
Left as-is pending a decision.

These tokens are for this divider only. They are **not** UI colour — buttons,
links and active states still use the single `--accent`.

All of them collapse to a single column at 720–900px.

## Elevation and motion

- One shadow exists in the whole system: `0 8px 24px -8px rgb(0 0 0 / .18)` on the
  navbar dropdown, because it floats over content. Everything else separates with
  a 1px `--rule`.
- One authored motion moment: `hero-in`, a 0.5s `cubic-bezier(.16,1,.3,1)`
  entrance staggered over three elements at 0 / 70 / 140ms, on first paint only.
  There is no scroll-triggered reveal anywhere.
- Hover changes exactly one thing: button background, link underline colour, row
  background, or nav link colour. Nothing lifts, scales or glows.
- `prefers-reduced-motion: reduce` collapses all animation and transition
  durations globally.

## Imagery

None ships. The previous hero and feature images were AI composites — perspective
tablets over a refinery, floating glass panels, invented KPI figures, `MAINTEVO`
in the sidebar, and hallucinated interface text in `Roles_Light.png`. They were
removed rather than replaced.

They were also sitting in `public/`, which meant Vite copied ~79 MB of unreferenced
imagery into every production build. They now live in `legacy-html/unused-media/`;
`dist/` went from **80 MB to 443 KB**. Nothing decorative belongs in `public/` —
put new imagery there only when a page actually references it.

Empty space is the acceptable default. Stock photography and 3D renders are not.

`public/images/logo-maintevo.png` is the one image still shipped: 192×128, 31 KB,
alpha preserved, rendered at 24–26 px. It is drawn for a light ground, so
`.brand-mark` puts it on a light plate under `html.dark`. A native dark-theme
mark is still outstanding.

`public/images/showcase-mobile.png` and `showcase-qr.png` are real product
screenshots lifted from the deck's annexes, with the browser chrome cropped off.

## Things that were removed and should not return

Glassmorphism, backdrop blur as decoration, gradient text, gradient buttons,
floating blurred orbs, glow shadows, the grid-line background, forced dark mode,
the `!important` light-mode override layer (~250 lines), eyebrow/kicker labels
above headings, centred body copy, uniform 16px radii, scroll-reveal on every
element, count-up number animations, and the animated "All systems operational"
status dot.
