import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';

interface GaugeProps {
  value: number;
  max?: number;
  label?: string;
  unit?: string;
  color?: string;
  size?: number;
  decimals?: number;
}

export function Gauge({
  value, max = 100, label, unit = '%', color, size = 180, decimals = 0,
}: GaugeProps) {
  const reduced = useReducedMotion();
  const c = color ?? 'var(--color-primary)';
  const stroke = 14;
  const r = (size - stroke) / 2;
  const circ = Math.PI * r;
  const pct = Math.min(Math.max(value / max, 0), 1);
  const dash = pct * circ;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
      <svg width={size} height={size / 2 + stroke}
        viewBox={`0 0 ${size} ${size / 2 + stroke}`}>
        <path
          d={`M ${stroke / 2} ${size / 2} A ${r} ${r} 0 0 1 ${size - stroke / 2} ${size / 2}`}
          fill="none" stroke="var(--color-surface-2)" strokeWidth={stroke} strokeLinecap="round"
        />
        <motion.path
          d={`M ${stroke / 2} ${size / 2} A ${r} ${r} 0 0 1 ${size - stroke / 2} ${size / 2}`}
          fill="none" stroke={c} strokeWidth={stroke} strokeLinecap="round"
          strokeDasharray={circ}
          initial={reduced ? false : { strokeDashoffset: circ }}
          whileInView={reduced ? undefined : { strokeDashoffset: circ - dash }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.3, ease: 'easeOut' }}
          style={{ strokeDashoffset: reduced ? circ - dash : undefined, filter: `drop-shadow(0 0 6px ${c})` }}
        />
      </svg>
      <div style={{ textAlign: 'center', marginTop: -size / 5 }}>
        <div style={{ color: 'var(--color-text)' }}>
          <AnimatedCounter value={value} suffix={unit} decimals={decimals}
            style={{ fontSize: '2.2rem' }} />
        </div>
        {label && (
          <div style={{ color: 'var(--color-muted)', fontSize: '0.8rem', marginTop: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {label}
          </div>
        )}
      </div>
    </div>
  );
}
