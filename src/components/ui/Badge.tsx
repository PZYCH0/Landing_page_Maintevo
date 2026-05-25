import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'outline';
  className?: string;
  style?: React.CSSProperties;
}

export function Badge({ children, variant = 'primary', className = '', style: customStyle = {} }: BadgeProps) {
  let style: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.25rem 0.75rem',
    borderRadius: '50px',
    fontSize: '0.875rem',
    fontWeight: 500,
    ...customStyle
  };

  if (variant === 'primary') {
    style = { ...style, color: 'var(--color-primary)', border: '1px solid var(--color-primary)' };
  } else if (variant === 'success') {
    style = { ...style, color: 'var(--color-success)', background: 'rgba(34, 197, 94, 0.15)', border: '1px solid rgba(34, 197, 94, 0.3)' };
  } else if (variant === 'outline') {
    style = { ...style, color: 'var(--color-text)', border: '1px solid var(--color-border)' };
  }

  return (
    <span style={style} className={className}>
      {children}
    </span>
  );
}
