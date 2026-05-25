import React from 'react';
import { AnimatedCounter } from './AnimatedCounter';

interface KpiTileProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  decimals?: number;
  trend?: 'up' | 'down';
  trendValue?: string;
  accent?: string;
}

export function KpiTile({
  icon, value, label, suffix = '', decimals = 0,
  trend, trendValue, accent = 'var(--color-primary)',
}: KpiTileProps) {
  return (
    <div style={{
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 12,
      padding: '0.85rem',
      display: 'flex', flexDirection: 'column', gap: '0.35rem',
      minWidth: 0,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        color: accent,
      }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 24, height: 24, borderRadius: 6,
          background: 'color-mix(in srgb, var(--color-primary) 18%, transparent)',
        }}>{icon}</span>
        {trend && trendValue && (
          <span style={{
            fontSize: '0.65rem', fontWeight: 700, color: trend === 'up' ? '#10B981' : '#EF4444',
            fontVariantNumeric: 'tabular-nums',
          }}>
            {trend === 'up' ? '▲' : '▼'} {trendValue}
          </span>
        )}
      </div>
      <AnimatedCounter
        value={value} suffix={suffix} decimals={decimals}
        style={{ fontSize: '1.5rem', color: 'var(--color-text)', lineHeight: 1.1 }}
      />
      <span style={{ fontSize: '0.7rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        {label}
      </span>
    </div>
  );
}
