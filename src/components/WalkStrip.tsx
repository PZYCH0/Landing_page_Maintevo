import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Shot from './Shot';

export type WalkScreen = {
  src: string;
  label: string;
};

type Props = {
  screens: WalkScreen[];
  active: number;
  onSelect: (index: number) => void;
  groupLabel: string;
  prevLabel: string;
  nextLabel: string;
  status: string;
};

/* Deliberately quicker than the hero's 5500ms. A hero slide carries a
   heading, a subtitle and two buttons and has to be read; this carries one
   caption, and at four screens a slower cycle just feels stalled.

   Minus the 620ms slide, that leaves under three seconds at rest — short of
   the longest caption. Treating the caption as a label rather than as prose
   is the trade that was accepted here; if it starts to matter, shorten the
   caption rather than slowing the strip back down. */
const AUTO_MS = 3500;

/* Below this the gesture was a tap, not a flick. */
const FLICK = 24;

/**
 * The screens a request passes through, one at a time, advancing on its own.
 *
 * Every frame is the same shape — the ratio of a desktop capture — so the
 * strip never changes height as it moves and the steps beside it never
 * shift. Portrait phone captures are letterboxed rather than cropped: a
 * screenshot is evidence, and cropping one to fit throws away the part that
 * made it worth showing.
 *
 * It holds no index of its own. The caller owns which screen is current,
 * because the list of steps beside it selects screens too and the two must
 * agree.
 */
export default function WalkStrip({
  screens, active, onSelect, groupLabel, prevLabel, nextLabel, status,
}: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const downX = useRef<number | null>(null);
  const count = screens.length;

  const [held, setHeld] = useState(false);
  const [inView, setInView] = useState(false);
  const [tabLive, setTabLive] = useState(true);
  const [stilled, setStilled] = useState(false);

  /* Someone who asked the OS for less motion gets a strip that only ever
     moves when they move it. Tracked live, not read once, so changing the
     setting takes effect without a reload. */
  useEffect(() => {
    const q = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setStilled(q.matches);
    sync();
    q.addEventListener('change', sync);
    return () => q.removeEventListener('change', sync);
  }, []);

  /* A loop nobody can see is just work. Two separate reasons it might not
     be seen — scrolled past, or the tab put in the background — kept as two
     flags rather than one. Folding them together means whichever fires last
     overwrites what the other knew, and the strip comes back from a tab
     switch permanently stopped. */
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const sync = () => setTabLive(document.visibilityState === 'visible');
    sync();
    document.addEventListener('visibilitychange', sync);
    return () => document.removeEventListener('visibilitychange', sync);
  }, []);

  const running = !stilled && !held && inView && tabLive && count > 1;

  /* `active` in the dependencies is deliberate: moving the strip by hand
     restarts the count, so a screen you just chose is not taken away half a
     second later. */
  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => onSelect((active + 1) % count), AUTO_MS);
    return () => window.clearInterval(id);
  }, [running, active, count, onSelect]);

  const step = (delta: number) => onSelect((active + delta + count) % count);

  return (
    <div
      ref={rootRef}
      className="walk-strip"
      role="group"
      aria-roledescription="carousel"
      aria-label={groupLabel}
      onPointerEnter={() => setHeld(true)}
      onPointerLeave={() => setHeld(false)}
      onFocusCapture={() => setHeld(true)}
      onBlurCapture={e => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setHeld(false);
      }}
      onPointerDown={e => { downX.current = e.clientX; }}
      onPointerUp={e => {
        const from = downX.current;
        downX.current = null;
        if (from === null || Math.abs(from - e.clientX) < FLICK) return;
        step(from > e.clientX ? 1 : -1);
      }}
    >
      {/* The mount is the fixed part and the pictures move through it, so
          the plate sits outside the clip — otherwise the same overflow that
          makes the slide work would shear the shadow off its own frame. */}
      <div className="walk-strip-window">
        <div className="walk-strip-clip">
        <ul className="walk-strip-track" style={{ ['--walk-i' as string]: active }}>
          {screens.map((screen, i) => (
            <li
              key={screen.src}
              className="walk-strip-item"
              aria-hidden={i !== active ? true : undefined}
            >
              <Shot src={screen.src} label={screen.label} variant="desktop" bare eager={i === 0} />
            </li>
          ))}
        </ul>
        </div>
      </div>

      <div className="walk-strip-foot">
        <p className="walk-strip-caption">{screens[active]?.label}</p>
        <div className="walk-strip-nav">
          <button type="button" className="walk-ctl" aria-label={prevLabel} onClick={() => step(-1)}>
            <ChevronLeft size={16} aria-hidden="true" />
          </button>
          <button type="button" className="walk-ctl" aria-label={nextLabel} onClick={() => step(1)}>
            <ChevronRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Silent while it advances by itself — a caption announced every five
          seconds is noise. It speaks once the reader takes the wheel. */}
      <p className="walk-sr" aria-live={running ? 'off' : 'polite'}>{status}</p>
    </div>
  );
}
