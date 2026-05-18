import React from 'react';
import { motion } from 'motion/react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  label?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, label, centered = false }: SectionHeaderProps) {
  const scrollAnim = useScrollAnimation();
  
  return (
    <motion.div 
      {...scrollAnim}
      style={{
        textAlign: centered ? 'center' : 'left',
        marginBottom: '4rem',
        maxWidth: centered ? '800px' : '600px',
        marginInline: centered ? 'auto' : '0'
      }}
    >
      {label && (
        <span style={{
          color: 'var(--color-primary)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontWeight: 600,
          fontSize: '0.875rem',
          display: 'block',
          marginBottom: '1rem'
        }}>
          {label}
        </span>
      )}
      <h2 style={{
        fontSize: 'clamp(2rem, 3.5vw, 3rem)',
        marginBottom: '1.5rem'
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: '1.125rem',
          color: 'var(--color-muted)',
          lineHeight: 1.6
        }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
