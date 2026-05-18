import React from 'react';
import { motion } from 'motion/react';

interface ChartFrameProps {
  title?: string;
  source?: string;
  caption?: string;
  ariaLabel: string;
  children: React.ReactNode;
  dir?: 'ltr' | 'rtl';
  padded?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function ChartFrame({
  title, source, caption, ariaLabel, children,
  dir = 'ltr', padded = true, className = '', style,
}: ChartFrameProps) {
  return (
    <motion.figure
      role="img"
      aria-label={ariaLabel}
      dir={dir}
      className={`glass-card ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        padding: padded ? '1.5rem' : 0,
        margin: 0,
        borderRadius: 'var(--radius-md)',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      {title && (
        <h3 style={{
          fontSize: '0.95rem',
          fontWeight: 600,
          color: 'var(--color-text)',
          marginBottom: caption ? '0.25rem' : '1rem',
          textAlign: dir === 'rtl' ? 'right' : 'left',
          fontFamily: 'var(--font-display)',
          letterSpacing: '-0.01em',
        }}>{title}</h3>
      )}
      {caption && (
        <p style={{
          fontSize: '0.8rem',
          color: 'var(--color-muted)',
          marginBottom: '1rem',
          textAlign: dir === 'rtl' ? 'right' : 'left',
        }}>{caption}</p>
      )}
      <div style={{ width: '100%' }}>{children}</div>
      {source && (
        <figcaption style={{
          marginTop: '0.85rem',
          paddingTop: '0.6rem',
          borderTop: '1px dashed var(--color-border)',
          fontSize: '0.7rem',
          color: 'var(--color-muted)',
          textAlign: dir === 'rtl' ? 'right' : 'left',
          fontFamily: 'var(--font-mono)',
          letterSpacing: '0.02em',
        }}>
          {dir === 'rtl' ? `المصدر: ${source}` : `Source: ${source}`}
        </figcaption>
      )}
    </motion.figure>
  );
}
