import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export interface StackSegment {
  label: string;
  pct: number;
  color: string;
}

interface IndustryStackBarProps {
  segments: StackSegment[];
  dir?: 'ltr' | 'rtl';
}

export function IndustryStackBar({ segments, dir = 'ltr' }: IndustryStackBarProps) {
  const reduced = useReducedMotion();
  const total = segments.reduce((s, x) => s + x.pct, 0) || 1;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} dir={dir}>
      <div style={{
        width: '100%', height: 36, borderRadius: 8, overflow: 'hidden',
        display: 'flex', background: 'var(--color-surface-2)',
        border: '1px solid var(--color-border)',
      }}>
        {segments.map((s, i) => {
          const pctOfTotal = (s.pct / total) * 100;
          return (
            <motion.div
              key={i}
              initial={reduced ? false : { width: 0 }}
              whileInView={reduced ? undefined : { width: `${pctOfTotal}%` }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.1, delay: i * 0.12, ease: 'easeOut' }}
              style={{
                width: reduced ? `${pctOfTotal}%` : undefined,
                height: '100%',
                background: s.color,
                boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${s.color} 60%, white)`,
              }}
            />
          );
        })}
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: '0.6rem',
      }}>
        {segments.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem' }}>
            <span style={{ width: 10, height: 10, background: s.color, borderRadius: 2, flexShrink: 0 }} />
            <span style={{ color: 'var(--color-text)', flex: 1 }}>{s.label}</span>
            <span style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-display)', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>
              {s.pct}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
