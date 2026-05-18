import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';

export interface Bar {
  label: string;
  value: number;
  color: string;
  highlight?: boolean;
}

interface HorizontalBarRaceProps {
  bars: Bar[];
  max?: number;
  unit?: string;
  decimals?: number;
  dir?: 'ltr' | 'rtl';
}

export function HorizontalBarRace({
  bars, max, unit = '', decimals = 0, dir = 'ltr',
}: HorizontalBarRaceProps) {
  const reduced = useReducedMotion();
  const m = max ?? Math.max(...bars.map(b => b.value));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} dir={dir}>
      {bars.map((b, i) => {
        const widthPct = (b.value / m) * 100;
        return (
          <div key={i}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
              marginBottom: '0.4rem', gap: '1rem',
            }}>
              <span style={{
                fontSize: '0.9rem', fontWeight: 600,
                color: b.highlight ? 'var(--color-primary)' : 'var(--color-text)',
              }}>{b.label}</span>
              <span style={{
                fontSize: '1.1rem',
                color: b.highlight ? 'var(--color-primary)' : 'var(--color-text)',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontVariantNumeric: 'tabular-nums',
              }}>
                <AnimatedCounter value={b.value} suffix={unit} decimals={decimals}
                  style={{ fontSize: 'inherit', color: 'inherit', fontWeight: 'inherit' }} />
              </span>
            </div>
            <div style={{
              width: '100%', height: 12, background: 'var(--color-surface-2)',
              borderRadius: 6, overflow: 'hidden', position: 'relative',
            }}>
              <motion.div
                initial={reduced ? false : { width: 0 }}
                whileInView={reduced ? undefined : { width: `${widthPct}%` }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.2, delay: i * 0.18, ease: 'easeOut' }}
                style={{
                  height: '100%',
                  background: b.highlight
                    ? `linear-gradient(90deg, ${b.color}, color-mix(in srgb, ${b.color} 70%, white))`
                    : b.color,
                  borderRadius: 6,
                  boxShadow: b.highlight ? `0 0 16px ${b.color}` : 'none',
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
