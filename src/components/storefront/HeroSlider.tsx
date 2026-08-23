import { useCallback, useEffect, useState } from 'react';
import { Link } from '../LocaleLink';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { StorefrontButtonLink } from './StorefrontButton';

/* Ported from the storefront drop's HeroSlider.

   The structure, the timings and the behaviour are the original's: cross-fade
   between slides, a slow Ken Burns push on whichever one is showing, auto
   advance that pauses while the controls are hovered or focused, a stats bar
   welded to the bottom, and dots where the active one is a bar filling in time
   with the countdown.

   What changed, and why:

   · Inertia is gone. Slides no longer come from CMS banner rows, so
     buildHeroSlides / cmsBannerToSlide / resolveHeroImage have no job here —
     Home.tsx passes slides built from the i18n catalogue instead.

   · fetchPriority is not set. React 18 does not recognise the camelCase prop
     and warns at runtime; loading and decoding carry the same intent.

   · Slides can be `contain` as well as `cover`. The original assumes wide
     photographic banners. Ours are portrait phone screenshots, and `cover`
     on a 424x856 image in a frame this wide crops it to a single enormous
     row. A `contain` slide is shown whole over a blurred copy of itself. Give
     a slide `fit: 'cover'` the moment there is a proper wide banner for it. */

export interface HeroSlide {
  id: string | number;
  imageUrl: string;
  /** Used when imageUrl fails to load. */
  fallbackImageUrl: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  primaryTo: string;
  primaryLabel: string;
  secondaryTo: string;
  secondaryLabel: string;
  /** Defaults to 'contain' — see the note above. */
  fit?: 'cover' | 'contain';
  /** object-position, i.e. which part survives a 'cover' crop. */
  focus?: string;
}

interface HeroSliderProps {
  slides: HeroSlide[];
  /** Small pill above the headline. */
  eyebrow?: string;
}

const AUTO_ADVANCE_MS = 5500;

/* Which position a slide holds, counted from the active one. Slot 0 is the
   card on show; 1 and 2 are the queue to its right. The nodes never move —
   only --slot changes — so the CSS transition on left/width/height is the
   whole animation. Borrowed from ImageCarousel, which works the same way and
   explains the reasoning at length. */
function slotOf(index: number, active: number, count: number) {
  return (index - active + count) % count;
}

function HeroSlideImage({
  src,
  fallback,
  alt,
  fit,
  focus,
  isActive,
  isFirst,
  prefersReducedMotion,
}: {
  src: string;
  fallback: string;
  alt: string;
  fit: 'cover' | 'contain';
  focus?: string;
  isActive: boolean;
  isFirst: boolean;
  prefersReducedMotion: boolean;
}) {
  const [current, setCurrent] = useState(src);

  useEffect(() => {
    setCurrent(src);
  }, [src]);

  return (
    <>
      {/* The blurred ambient bed is gone. It existed to stop a contained
          *opaque* screenshot's letterbox reading as two bare bars, but the
          slides are transparent device mockups now: the frame already sits on
          the hero ground with nothing to fill, and blowing a transparent PNG
          up as a blurred backdrop just smeared its accent colours across the
          middle of the hero. */}
      <img
        src={current}
        alt={alt}
        data-fit={fit}
        loading={isFirst ? 'eager' : 'lazy'}
        decoding="async"
        /* object-position is left to the stylesheet unless a slide names one,
           because where the picture should sit depends on the viewport: beside
           the copy on a wide screen, behind it on a narrow one. An inline
           value would win against both media queries. */
        style={focus ? { objectFit: fit, objectPosition: focus } : { objectFit: fit }}
        className="absolute inset-0 h-full w-full"
        onError={() => {
          if (current !== fallback) setCurrent(fallback);
        }}
      />
    </>
  );
}

export default function HeroSlider({ slides, eyebrow }: HeroSliderProps) {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [controlsPaused, setControlsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const count = slides.length;

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPrefersReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (count <= 1 || prefersReducedMotion || controlsPaused) return;
    const id = window.setInterval(() => setIndex(c => (c + 1) % count), AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [count, controlsPaused, prefersReducedMotion, index]);

  if (count === 0) return null;

  const slide = slides[index];

  return (
    <section
      id="hero"
      className="hero-ground group/hero relative w-full border-b border-[var(--rule)]"
      aria-roledescription="carousel"
      aria-label={t('home.hero.carouselLabel')}
    >
      {/* overflow-hidden belongs here rather than on the section: the picture
          area is what clips, and the stats band below it is a sibling. */}
      <div className="storefront-hero-height relative w-full overflow-hidden">
        {/* The deck. Every card stays mounted and keeps its DOM position; only
            data-slot changes, and the stylesheet turns a slot into a left,
            a width and a height. Advancing is therefore a plain CSS
            transition between two sets of geometry — no keyframes, no
            measuring, nothing to interrupt if React re-renders mid-move. */}
        <ul className={`hero-deck${prefersReducedMotion ? ' hero-deck--still' : ''}`}>
          {slides.map((s, i) => {
            const slot = slotOf(i, index, count);
            return (
              <li
                key={s.id}
                className="hero-deck-card"
                data-slot={slot}
                /* Slot order is paint order: the active card has to sit over
                   the queue as it expands past it. */
                style={{ zIndex: count - slot }}
                /* Only the card on show is described; the queue is decoration
                   and its alt text would otherwise be read out as if it were
                   part of the page. */
                aria-hidden={slot !== 0 || undefined}
              >
                <HeroSlideImage
                  src={s.imageUrl}
                  fallback={s.fallbackImageUrl}
                  alt={slot === 0 ? s.imageAlt : ''}
                  fit={s.fit ?? 'contain'}
                  focus={s.focus}
                  isActive={i === index}
                  isFirst={i === 0}
                  prefersReducedMotion={prefersReducedMotion}
                />
              </li>
            );
          })}
        </ul>

        {/* One scrim each, not one per slide. They used to live inside every
            slide because the slides were full-bleed cross-fading layers; the
            deck is confined to the right of the frame, so a single static
            layer does the same job without being duplicated three times. */}
        <div className="hero-scrim-x absolute inset-0" aria-hidden />
        <div className="hero-scrim-y absolute inset-0" aria-hidden />

        <div className="hero-copy relative z-10 flex h-full flex-col justify-center pb-20 pt-6 sm:pt-8">
          {/* w-full is load-bearing. .wrap centres itself with `margin: 0 auto`,
              and auto cross-axis margins on a flex item switch off `stretch` —
              without it this shrinks to the width of the copy and drifts into
              the middle of the hero, away from the navbar's left edge. */}
          <div className="wrap w-full flex flex-1 flex-col justify-center">
            {/* Keyed on the slide so React remounts it, which is what replays
                the entrance on every advance. */}
            {/* max-w-2xl against the wider page column; the paragraph keeps its
                own max-w-lg below, so only the headline gets the extra room. */}
            <div key={slide.id} className={`max-w-2xl ${prefersReducedMotion ? '' : 'hero-fade-up'}`}>
              <h1 className="hero-title mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>

              <p className="hero-lead mt-4 max-w-lg text-pretty text-base leading-relaxed sm:text-lg">
                {slide.subtitle}
              </p>

              {/* One button, one text link. The second action is still here,
                  but an outlined box beside a filled one reads as a second
                  primary — and with the navbar's own CTA that made three
                  competing targets above the fold. */}
              <div className="hero-cta mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                <Link
                  to={slide.primaryTo}
                  className="btn-p"
                  style={{ fontSize: '0.875rem', padding: '9px 16px' }}
                >
                  {slide.primaryLabel}
                </Link>
                <Link
                  to={slide.secondaryTo}
                  className="hero-link text-sm font-medium underline underline-offset-4 transition-colors"
                >
                  {slide.secondaryLabel}
                </Link>
              </div>
            </div>
          </div>

        </div>

        {count > 1 && (
          <div
            className="hero-ctls absolute inset-x-0 bottom-6 z-20 flex items-center justify-between px-4 sm:bottom-8 sm:px-5 lg:px-6"
            onMouseEnter={() => setControlsPaused(true)}
            onMouseLeave={() => setControlsPaused(false)}
            onFocusCapture={() => setControlsPaused(true)}
            onBlurCapture={e => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setControlsPaused(false);
            }}
          >
            <button
              type="button"
              onClick={() => go(index - 1)}
              className="hero-ctl flex size-10 cursor-pointer items-center justify-center rounded-full border backdrop-blur-md transition-colors duration-200 sm:opacity-0 sm:group-hover/hero:opacity-100 sm:focus-visible:opacity-100"
              aria-label={t('home.hero.prev')}
            >
              <ChevronLeft className="size-5" aria-hidden />
            </button>

            <button
              type="button"
              onClick={() => go(index + 1)}
              className="hero-ctl flex size-10 cursor-pointer items-center justify-center rounded-full border backdrop-blur-md transition-colors duration-200 sm:opacity-0 sm:group-hover/hero:opacity-100 sm:focus-visible:opacity-100"
              aria-label={t('home.hero.next')}
            >
              <ChevronRight className="size-5" aria-hidden />
            </button>
          </div>
        )}
      </div>

    </section>
  );
}
