import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Wrench, Calendar, Package, TrendingUp } from 'lucide-react';
import { KpiTile } from './KpiTile';
import { Gauge } from './Gauge';

interface HeroDashboardProps {
  labels: {
    kpiOpenWO: string;
    kpiPreventiveDue: string;
    kpiStockLow: string;
    kpiThisWeek: string;
    gaugeLabel: string;
    chartTitle: string;
    weekdays: string[]; // length 7
    statusLive: string;
  };
  dir?: 'ltr' | 'rtl';
}

// Illustrative weekly closed work orders — composite mock data.
const WEEKLY = [6, 8, 5, 11, 9, 13, 10];

export function HeroDashboard({ labels, dir = 'ltr' }: HeroDashboardProps) {
  const reduced = useReducedMotion();
  const max = Math.max(...WEEKLY);

  return (
    <div
      role="img"
      aria-label={`${labels.chartTitle}: ${labels.kpiOpenWO}, ${labels.kpiPreventiveDue}, ${labels.kpiStockLow}, ${labels.gaugeLabel}`}
      dir={dir}
      style={{
        background: 'linear-gradient(140deg, var(--color-surface) 0%, var(--color-surface-2) 100%)',
        border: '1px solid var(--color-border)',
        borderRadius: 20,
        padding: '1.25rem',
        boxShadow: '0 30px 60px -20px rgba(0,0,0,0.55)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* glow accents */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: -60, right: -60, width: 200, height: 200,
        background: 'radial-gradient(circle, var(--color-primary-glow), transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* status pill */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.5rem',
        marginBottom: '0.85rem',
      }}>
        <span style={{
          display: 'inline-block', width: 8, height: 8, borderRadius: '50%',
          background: '#10B981',
          boxShadow: '0 0 8px #10B981',
          animation: reduced ? undefined : 'cursor-blink 1.6s ease-in-out infinite',
        }} />
        <span style={{ fontSize: '0.7rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
          {labels.statusLive}
        </span>
      </div>

      {/* KPI grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '0.6rem',
        marginBottom: '1rem',
      }}>
        <KpiTile icon={<Wrench size={14} />} value={27} label={labels.kpiOpenWO} />
        <KpiTile icon={<Calendar size={14} />} value={8} label={labels.kpiPreventiveDue} />
        <KpiTile icon={<Package size={14} />} value={3} label={labels.kpiStockLow} accent="#EF4444" />
      </div>

      {/* Chart + Gauge row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
        gap: '0.8rem',
        alignItems: 'stretch',
      }}>
        {/* weekly bar chart */}
        <div style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 12,
          padding: '0.85rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {labels.kpiThisWeek}
            </span>
            <span style={{ display: 'inline-flex', gap: 4, alignItems: 'center', fontSize: '0.7rem', color: '#10B981', fontWeight: 700 }}>
              <TrendingUp size={12} /> +24%
            </span>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            alignItems: 'end',
            gap: 6,
            height: 80,
          }}>
            {WEEKLY.map((v, i) => {
              const h = (v / max) * 100;
              return (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, height: '100%' }}>
                  <div style={{ flex: 1, width: '100%', display: 'flex', alignItems: 'flex-end' }}>
                    <motion.div
                      initial={reduced ? false : { height: 0 }}
                      animate={reduced ? undefined : { height: `${h}%` }}
                      transition={{ duration: 1.1, delay: 0.5 + i * 0.08, ease: 'easeOut' }}
                      style={{
                        width: '100%',
                        height: reduced ? `${h}%` : undefined,
                        background: i === WEEKLY.length - 1
                          ? 'linear-gradient(180deg, var(--color-primary), color-mix(in srgb, var(--color-primary) 70%, white))'
                          : 'color-mix(in srgb, var(--color-primary) 45%, transparent)',
                        borderRadius: '3px 3px 0 0',
                        boxShadow: i === WEEKLY.length - 1 ? '0 0 12px var(--color-primary-glow)' : 'none',
                      }}
                    />
                  </div>
                  <span style={{ fontSize: '0.6rem', color: 'var(--color-muted)' }}>
                    {labels.weekdays[i]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* MTTR gauge */}
        <div style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 12,
          padding: '0.85rem',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
        }}>
          <Gauge value={72} max={100} label={labels.gaugeLabel} unit="%" size={120} color="var(--color-primary)" />
        </div>
      </div>
    </div>
  );
}
