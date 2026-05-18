import React from 'react';
import { AnimatedCounter } from './AnimatedCounter';

interface StatRibbonProps {
  value: number;
  suffix?: string;
  label: string;
  source?: string;
  decimals?: number;
  dir?: 'ltr' | 'rtl';
  accent?: string;
}

export function StatRibbon({
  value, suffix = '', label, source,
  decimals = 0, dir = 'ltr', accent,
}: StatRibbonProps) {
  const c = accent ?? 'var(--color-primary)';
  return (
    <div
      dir={dir}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.85rem',
        padding: '0.85rem 1rem',
        borderRadius: 'var(--radius-sm)',
        background: 'linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 14%, transparent), transparent)',
        borderInlineStart: `3px solid ${c}`,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <AnimatedCounter
          value={value} suffix={suffix} decimals={decimals}
          style={{ fontSize: '1.85rem', color: c, lineHeight: 1 }}
        />
        <span style={{ fontSize: '0.85rem', color: 'var(--color-text)', marginTop: '0.35rem', lineHeight: 1.3 }}>
          {label}
        </span>
        {source && (
          <span style={{
            fontSize: '0.65rem',
            color: 'var(--color-muted)',
            marginTop: '0.4rem',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.02em',
          }}>
            {dir === 'rtl' ? `المصدر: ${source}` : `Source: ${source}`}
          </span>
        )}
      </div>
    </div>
  );
}
