import { useCallback, useState } from 'react';
import { Link } from './LocaleLink';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export type Slide = {
  /** Path under /public. A missing file falls back to a labelled placeholder. */
  src: string;
  /** i18n key for the slide's caption; doubles as the image's alt text. */
  labelKey: string;
  /**
   * How the image meets the frame. `cover` is the default because a
   * screenshot is worth more cropped into its content than shown whole and
   * unreadable. Give a slide `contain` when the whole of it is the point —
   * a photograph of a device in use loses its subject the moment it is
   * cropped into.
   */
  fit?: 'cover' | 'contain';
  /** `object-position`, i.e. which part of a cropped image survives. */
  focus?: string;

  /* ── Overlay copy, for the full-bleed hero ──────────────────────────
     Each slide carries its own pitch, the way the reference does. Omit
     these and the slide is image-only. */
  /** i18n key for the slide's heading. */
  titleKey?: string;
  /** i18n key for the paragraph under it. */
  bodyKey?: string;
  /** i18n key for the button label. Needs `ctaTo` to render. */
  ctaKey?: string;
  /** Route the button goes to. */
  ctaTo?: string;
};

type Props = {
  slides: Slide[];
  className?: string;
  /**
   * `panel` is a bordered frame sized by its container. `full` is the
   * edge-to-edge hero: no frame, viewport-tall, copy laid over the image.
   */
  variant?: 'panel' | 'full';
};

/* ── The mechanic ─────────────────────────────────────────────────────
   An expanding peek-stack: one slide fills the frame, the rest sit off to
   its right as small cards, and advancing pulls the next card up to full
   size while the others shuffle along behind it.

   Every position lives in CSS. A slide's `left`, `width` and `height` are
   derived from a single `--slot` custom property, and those three
   properties are transitioned, so changing a slide's slot *is* the
   animation — there is no keyframe, no measuring, and no transform maths
   here. This component's entire job is to decide which slide holds which
   slot.

   Two details carry the whole effect, and both are easy to lose:

   Slots 0 and 1 are BOTH full-bleed. Slot 1 is the slide you are looking
   at; slot 0 is the one it just replaced, still full size, hidden
   directly underneath. That buried layer is why an advance reads as a
   reveal — the incoming card expands *over* the outgoing image instead of
   over an empty frame. Delete it and the carousel turns into a slide.

   Nothing here transforms. Vertical centring is `top: calc(50% - h/2)` in
   the stylesheet rather than `translateY(-50%)`, because `.rv-armed .rv`
   sets a transform of its own for the page's reveal animation and the two
   would overwrite each other.
   ──────────────────────────────────────────────────────────────────── */

/* The reference implementation moved DOM nodes — `append(items[0])` — and
   let `:nth-child` do the rest. That fights React, which owns child order
   and will undo the move on its next render.

   Rotating an offset gets the same result without touching the DOM: the
   nodes never move, only their `--slot` changes, and the transition fires
   just the same. Element identity is then permanent, so a reconciliation
   mid-animation cannot interrupt anything.

   The cost is that paint order no longer comes from document order, so
   `z-index` has to be set explicitly below. */
function slotOf(index: number, start: number, count: number) {
  return (index - start + count) % count;
}

export default function ImageCarousel({ slides, className, variant = 'panel' }: Props) {
  const { t } = useTranslation();
  const count = slides.length;

  /* Slot 1 is the slide on show, so seeding `start` one short of the end
     puts slides[0] there on first paint. */
  const [start, setStart] = useState(count - 1);
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  const go = useCallback(
    (delta: number) => setStart(s => (s + delta + count) % count),
    [count],
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
  };

  const activeIndex = (start + 1) % count;

  /* Slots 0 and 1 are the two full-bleed layers, so the queue only starts at
     slot 2. Parking the last slide costs one more, and parking the only card
     in the queue would leave the frame with nothing waiting beside it — so
     below four slides it is better to let the outgoing slide shrink back into
     the queue in full view than to hide it and show an empty stack. */
  const parkLast = count >= 4;

  return (
    <div
      className={[
        'mv-carousel',
        variant === 'full' ? 'mv-carousel--full' : '',
        className ?? '',
      ].filter(Boolean).join(' ')}
      role="group"
      aria-roledescription="carousel"
      aria-label={t('home.hero.carouselLabel')}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <ul className="mv-slider">
        {slides.map((slide, i) => {
          const slot = slotOf(i, start, count);
          const label = t(slide.labelKey);
          return (
            <li
              /* The index is the right key here, and deliberately so: the
                 array is fixed and never reordered — only --slot moves — so
                 an index is stable for the life of the component. Keying on
                 src instead would collide the moment the same screenshot was
                 listed twice. */
              key={i}
              className="mv-slide"
              data-slot={slot}
              /* The slide that just rotated off the end, parked out of
                 sight so it does not fly across the frame on its way
                 back to the queue. */
              data-parked={parkLast && slot === count - 1 ? 'true' : undefined}
              /* Slot order is paint order: slot 1 must cover slot 0.

                 fit and focus go out as custom properties rather than as
                 object-fit directly, because an inline property cannot be
                 overridden by a stylesheet — and the full-bleed variant has
                 to override the fit per slot, where a portrait screenshot in
                 a landscape frame has to be shown whole rather than cropped
                 to a fragment. --slide-img feeds the blurred ground. */
              style={{
                ['--slot' as string]: slot,
                ['--slide-img' as string]: `url("${slide.src}")`,
                ...(slide.fit ? { ['--slide-fit' as string]: slide.fit } : null),
                ...(slide.focus ? { ['--slide-focus' as string]: slide.focus } : null),
                zIndex: slot,
              }}
              aria-hidden={slot !== 1 ? true : undefined}
            >
              {!failed[slide.src] ? (
                <img
                  src={slide.src}
                  alt={label}
                  /* The first slide is on screen at paint and is the
                     likeliest LCP element on the page. */
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  onError={() => setFailed(f => ({ ...f, [slide.src]: true }))}
                />
              ) : (
                <div className="shot-placeholder">
                  <span>{label}</span>
                  <code>{slide.src}</code>
                </div>
              )}
              {/* Overlay copy. Every slide's copy stays in the DOM and the
                  stylesheet shows only the one on slot 1, which is how the
                  reference does it too. Rendering just the active slide's copy
                  would be tidier React and quietly wrong: the headline is the
                  <h1>, and conditional rendering takes it out of the document
                  the moment somebody clicks next, leaving the page with no
                  <h1> at all. Hidden by display, it stays.

                  Toggling display also restarts the entrance animation, so
                  the blur-and-rise still replays on every advance.

                  Heading level follows position in the array, not visibility:
                  slide one is the <h1>, the rest are <h2>. The <li> carries
                  aria-hidden off-slot, so nothing hidden is announced. */}
              {slide.titleKey && (
                <div className="mv-content">
                  <div className="wrap">
                    {i === 0
                      ? <h1>{t(slide.titleKey)}</h1>
                      : <h2>{t(slide.titleKey)}</h2>}
                    {slide.bodyKey && <p>{t(slide.bodyKey)}</p>}
                    {slide.ctaKey && slide.ctaTo && (
                      <Link to={slide.ctaTo} className="btn-p" tabIndex={slot === 1 ? undefined : -1}>
                        {t(slide.ctaKey)}
                      </Link>
                    )}
                  </div>
                </div>
              )}

              {slot === 1 && !slide.titleKey && <p className="mv-slide-label">{label}</p>}
            </li>
          );
        })}
      </ul>

      <nav className="mv-nav">
        <button type="button" onClick={() => go(-1)} aria-label={t('home.hero.prev')}>
          <ArrowLeft size={18} strokeWidth={2.2} aria-hidden="true" />
        </button>
        <button type="button" onClick={() => go(1)} aria-label={t('home.hero.next')}>
          <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
        </button>
      </nav>

      {/* Announced to screen readers only: the visible label is inside the
          slide, where it is decoration sitting on an image. */}
      <p className="sr-only" aria-live="polite">
        {t('home.hero.slideStatus', { current: activeIndex + 1, total: count })}
      </p>
    </div>
  );
}
