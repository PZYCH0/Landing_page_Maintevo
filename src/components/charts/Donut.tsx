import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export interface DonutSegment {
  value: number;
  label: string;
  color: string;
}

interface DonutProps {
  segments: DonutSegment[];
  size?: number;
  thickness?: number;
  centerLabel?: string;
  centerValue?: string;
  dir?: 'ltr' | 'rtl';
}

export function Donut({
  segments, size = 220, thickness = 28,
  centerLabel, centerValue, dir = 'ltr',
}: DonutProps) {
  const reduced = useReducedMotion();
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;

  let offset = 0;
  const arcs = segments.map((seg, i) => {
    const pct = seg.value / total;
    const dash = pct * c;
    const node = (
      <motion.circle
        key={i}
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={seg.color}
        strokeWidth={thickness}
        strokeDasharray={`${dash} ${c - dash}`}
        strokeDashoffset={-offset}
        strokeLinecap="butt"
        initial={reduced ? false : { strokeDasharray: `0 ${c}` }}
        whileInView={reduced ? undefined : { strokeDasharray: `${dash} ${c - dash}` }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.2, delay: i * 0.2, ease: 'easeOut' }}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    );
    offset += dash;
    return node;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--color-surface-2)" strokeWidth={thickness} />
        {arcs}
        {centerValue && (
          <text x="50%" y="50%" textAnchor="middle" dy="-0.1em"
            style={{ fill: 'var(--color-text)', fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
            {centerValue}
          </text>
        )}
        {centerLabel && (
          <text x="50%" y="50%" textAnchor="middle" dy="1.4em"
            style={{ fill: 'var(--color-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {centerLabel}
          </text>
        )}
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }} dir={dir}>
        {segments.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--color-text)' }}>
            <span style={{ width: 12, height: 12, background: s.color, borderRadius: 3, flexShrink: 0 }} />
            <span style={{ flex: 1 }}>{s.label}</span>
            <span style={{ fontWeight: 700, fontFamily: 'var(--font-display)', fontVariantNumeric: 'tabular-nums' }}>
              {Math.round((s.value / total) * 100)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
