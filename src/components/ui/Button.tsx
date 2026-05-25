import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { Link, LinkProps } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'white' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  to?: string;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  asLink, 
  to, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseClass = 'inline-flex items-center justify-center font-medium transition-all duration-300';
  
  const getBackground = () => {
    switch(variant) {
      case 'primary': return 'var(--color-primary)';
      case 'secondary': return 'var(--color-surface)';
      case 'white': return 'var(--color-surface-2)';
      case 'outline': return 'transparent';
      default: return 'transparent';
    }
  };

  const getColor = () => {
    switch(variant) {
      case 'primary': return '#FFFFFF';
      case 'secondary': return 'var(--color-text)';
      case 'white': return 'var(--color-text)';
      case 'outline': return 'var(--color-text)';
      default: return 'var(--color-primary)';
    }
  };

  const getBorder = () => {
    if (variant === 'secondary') return '1px solid var(--color-border)';
    if (variant === 'outline') return '1px solid var(--color-border)';
    return '1px solid transparent';
  };

  const getShadow = () => {
    if (variant === 'primary' || variant === 'white') return '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.2)';
    return 'none';
  };

  const sizes = {
    sm: '0.5rem 1rem',
    md: '0.75rem 1.5rem',
    lg: '1rem 2.25rem',
  };

  const borderRadiuses = {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-sm)',
    lg: 'var(--radius-sm)',
  };

  const componentStyle: React.CSSProperties = {
    backgroundColor: getBackground(),
    color: getColor(),
    borderRadius: borderRadiuses[size],
    padding: sizes[size],
    border: getBorder(),
    boxShadow: getShadow(),
    fontWeight: 600,
    ...props.style
  };

  if (asLink && to) {
    return (
      <Link to={to} className={`${baseClass} hover:opacity-90 ${className}`} style={componentStyle} onClick={props.onClick as any}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button 
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClass} hover:opacity-90 ${className}`}
      style={componentStyle}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
