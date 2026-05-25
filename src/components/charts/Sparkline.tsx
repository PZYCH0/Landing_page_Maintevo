import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface SparklineProps {
  points: number[];
  color?: string;
  height?: number;
  width?: number;
}

export function Sparkline({
  points, color = 'var(--color-primary)', height = 36, width = 120,
}: SparklineProps) {
  const reduced = useReducedMotion();
  if (points.length < 2) return null;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const stepX = width / (points.length - 1);

  const coords = points.map((p, i) => [
    i * stepX,
    height - 2 - ((p - min) / range) * (height - 4),
  ] as const);

  const path = 'M ' + coords.map(([x, y]) => `${x.toFixed(2)} ${y.toFixed(2)}`).join(' L ');
  const area = `${path} L ${width} ${height} L 0 ${height} Z`;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
      <defs>
        <linearGradient id={`spark-fill-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.3} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#spark-fill-${color})`} />
      <motion.path
        d={path}
        fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
        initial={reduced ? false : { pathLength: 0 }}
        whileInView={reduced ? undefined : { pathLength: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
    </svg>
  );
}
