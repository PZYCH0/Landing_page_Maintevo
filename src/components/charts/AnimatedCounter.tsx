import React, { useEffect, useState } from 'react';
import { useInView, useMotionValue, useSpring, useReducedMotion } from 'motion/react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  style?: React.CSSProperties;
  className?: string;
}

export function AnimatedCounter({
  value, suffix = '', prefix = '', decimals = 0,
  duration = 1.6, style, className,
}: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, {
    duration: duration * 1000,
    bounce: 0,
  });
  const [display, setDisplay] = useState(reduced ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) { setDisplay(value); return; }
    mv.set(value);
  }, [inView, value, reduced, mv]);

  useEffect(() => {
    return spring.on('change', v => setDisplay(v));
  }, [spring]);

  const formatted = display.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span
      ref={ref}
      className={className}
      aria-live="polite"
      style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        letterSpacing: '-0.02em',
        fontVariantNumeric: 'tabular-nums',
        ...style,
      }}
    >
      {prefix}{formatted}{suffix}
    </span>
  );
}
