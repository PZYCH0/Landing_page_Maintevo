import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface RadialNode {
  label: string;
}

interface RadialHubProps {
  centerLabel: string;
  nodes: RadialNode[];
  size?: number;
  dir?: 'ltr' | 'rtl';
}

export function RadialHub({
  centerLabel, nodes, size = 320, dir = 'ltr',
}: RadialHubProps) {
  const reduced = useReducedMotion();
  const cx = size / 2;
  const cy = size / 2;
  const orbit = size / 2 - 56;
  const angleStep = (2 * Math.PI) / nodes.length;

  return (
    <>
      {/* Desktop / tablet: actual radial hub (SVG) */}
      <svg
        className="radial-hub-svg"
        width="100%" height={size}
        viewBox={`0 0 ${size} ${size}`}
        aria-hidden="true"
        style={{ display: 'block', maxWidth: size, margin: '0 auto' }}
      >
        {/* connection lines */}
        {nodes.map((_, i) => {
          const a = -Math.PI / 2 + i * angleStep;
          const x = cx + Math.cos(a) * orbit;
          const y = cy + Math.sin(a) * orbit;
          return (
            <motion.line
              key={`l-${i}`}
              x1={cx} y1={cy} x2={x} y2={y}
              stroke="var(--color-primary)"
              strokeWidth={1.5}
              strokeDasharray="4 4"
              initial={reduced ? false : { pathLength: 0, opacity: 0 }}
              whileInView={reduced ? undefined : { pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
            />
          );
        })}
        {/* outer ring */}
        <circle cx={cx} cy={cy} r={orbit} fill="none" stroke="var(--color-border)" strokeDasharray="2 6" />
        {/* center node */}
        <g>
          <circle cx={cx} cy={cy} r={44} fill="var(--color-primary)" filter="drop-shadow(0 0 20px var(--color-primary-glow))" />
          <text x={cx} y={cy} dy="0.35em" textAnchor="middle"
            style={{ fill: '#fff', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.9rem' }}>
            {centerLabel}
          </text>
        </g>
        {/* orbit nodes */}
        {nodes.map((n, i) => {
          const a = -Math.PI / 2 + i * angleStep;
          const x = cx + Math.cos(a) * orbit;
          const y = cy + Math.sin(a) * orbit;
          return (
            <motion.g
              key={`n-${i}`}
              initial={reduced ? false : { scale: 0, opacity: 0 }}
              whileInView={reduced ? undefined : { scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1, type: 'spring', bounce: 0.3 }}
              style={{ transformOrigin: `${x}px ${y}px` }}
            >
              <circle cx={x} cy={y} r={34}
                fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth={1.5} />
              <text x={x} y={y} dy="0.35em" textAnchor="middle"
                style={{ fill: 'var(--color-text)', fontWeight: 700, fontSize: '0.78rem' }}>
                {n.label}
              </text>
            </motion.g>
          );
        })}
      </svg>

      {/* Mobile: collapse to vertical list */}
      <div className="radial-hub-list" dir={dir}>
        <div className="radial-hub-list-center">{centerLabel}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {nodes.map((n, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              padding: '0.6rem 0.9rem',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--color-surface-2)',
              fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-text)',
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
              {n.label}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .radial-hub-list { display: none; }
        @media (max-width: 700px) {
          .radial-hub-svg { display: none !important; }
          .radial-hub-list { display: block; }
          .radial-hub-list-center {
            display: inline-block;
            padding: 0.55rem 1.1rem;
            margin-bottom: 1rem;
            background: var(--color-primary);
            color: #fff;
            border-radius: 100px;
            font-weight: 800;
            font-family: var(--font-display);
          }
        }
      `}</style>
    </>
  );
}
