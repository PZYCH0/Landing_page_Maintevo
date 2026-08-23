import { useLayoutEffect, useRef } from 'react';
import type { CSSProperties, ElementType, ReactNode } from 'react';

/* The stagger stops compounding after this many items: a table of eight
   rows should not make the reader wait out eight delays for its last one. */
const MAX_STEPS = 6;

/* How far below the fold a group starts moving. Slightly ahead of the
   viewport, so it is already settling by the time it is properly read. */
const LEAD = 80;

/* ── The sweep ────────────────────────────────────────────────────────
   One registry and one scroll listener for the whole page rather than an
   observer per group.

   This deliberately does not use IntersectionObserver. An observer only
   reports *changes* in intersection, so a group that goes from below the
   fold to above it inside a single frame — a fast flick, a hash link, a
   restored scroll position — is never reported at all, and its content
   stays hidden for good. Testing the rect directly has no such gap: the
   condition below is true both for a group coming into view and for one
   already scrolled past, so nothing can be skipped.
   ──────────────────────────────────────────────────────────────────── */

const pending = new Set<HTMLElement>();
let frame = 0;

function sweep() {
  frame = 0;
  const limit = window.innerHeight + LEAD;
  for (const group of pending) {
    if (group.getBoundingClientRect().top < limit) {
      group.classList.add('rv-in');
      pending.delete(group);
    }
  }
  if (pending.size === 0) {
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', schedule);
  }
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(sweep);
}

function register(group: HTMLElement) {
  if (pending.size === 0) {
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
  }
  pending.add(group);
  schedule();
}

type Props = {
  /** Element to render. The group is a plain wrapper, so it takes the
      semantic tag the layout already wanted — section, ol, div. */
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

/**
 * A staggered reveal group: every descendant carrying `.rv` rises into
 * place in document order, each one a step behind the one before it, as
 * the group reaches the fold.
 *
 * Two things beyond the sweep are deliberate:
 *
 * Nothing hides until script runs. The stylesheet leaves content visible
 * and this effect adds `rv-armed`; a reader whose JS never executes gets
 * the finished page rather than a blank one. `useLayoutEffect` puts that
 * class on before the first paint, so nothing flashes in and back out.
 *
 * Groups nest. Items are matched only to their nearest enclosing group,
 * so two columns each run their own sequence side by side instead of the
 * second queueing behind the first.
 */
export default function Reveal({ as: Tag = 'div', className, style, children }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const group = ref.current;
    if (!group) return;

    // Someone who asked the OS for less motion gets the page as it lands.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const items = Array.from(group.querySelectorAll<HTMLElement>('.rv'))
      .filter(el => el.closest('.rv-group') === group);
    items.forEach((el, i) => el.style.setProperty('--rv-i', String(Math.min(i, MAX_STEPS))));

    group.classList.add('rv-armed');
    register(group);

    return () => {
      pending.delete(group);
    };
  }, []);

  return (
    <Tag ref={ref} className={className ? `rv-group ${className}` : 'rv-group'} style={style}>
      {children}
    </Tag>
  );
}
