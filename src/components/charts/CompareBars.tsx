import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';

interface CompareBarsProps {
  before: { label: string; value: number };
  after: { label: string; value: number };
  unit?: string;
  decimals?: number;
  dir?: 'ltr' | 'rtl';
  betterIsHigher?: boolean;
}

export function CompareBars({
  before, after, unit = '', decimals = 0,
  dir = 'ltr', betterIsHigher = true,
}: CompareBarsProps) {
  const reduced = useReducedMotion();
  const max = Math.max(before.value, after.value);
  const beforeIsBetter = betterIsHigher ? before.value > after.value : before.value < after.value;
  const beforeColor = beforeIsBetter ? 'var(--color-primary)' : 'var(--color-muted)';
  const afterColor = !beforeIsBetter ? 'var(--color-primary)' : 'var(--color-muted)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} dir={dir}>
      {[{ ...before, c: beforeColor, h: !beforeIsBetter }, { ...after, c: afterColor, h: beforeIsBetter }].map((b, i) => {
        const widthPct = (b.value / max) * 100;
        return (
          <div key={i}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: b.h ? 'var(--color-primary)' : 'var(--color-muted)' }}>
                {b.label}
              </span>
              <AnimatedCounter value={b.value} suffix={unit} decimals={decimals}
                style={{ fontSize: '1.05rem', color: b.h ? 'var(--color-primary)' : 'var(--color-text)' }} />
            </div>
            <div style={{ width: '100%', height: 10, background: 'var(--color-surface-2)', borderRadius: 5, overflow: 'hidden' }}>
              <motion.div
                initial={reduced ? false : { width: 0 }}
                whileInView={reduced ? undefined : { width: `${widthPct}%` }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.2, delay: i * 0.18, ease: 'easeOut' }}
                style={{
                  height: '100%',
                  background: b.c,
                  borderRadius: 5,
                  boxShadow: b.h ? `0 0 14px ${b.c}` : 'none',
                  width: reduced ? `${widthPct}%` : undefined,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
