import { Link } from '../LocaleLink';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

/* Ported from the storefront drop. Two things had to change:

   The original imports Link from '@inertiajs/react' and takes `href`. This
   app routes with react-router, so it takes `to` and renders a router Link —
   an <a href> here would reload the whole SPA on every hero click.

   The original also composes classes with cn() from '@/lib/storefront', which
   is tailwind-merge underneath. That is not installed, and a plain string join
   is not a substitute: without the merge, `bg-white` passed by a caller does
   not beat the variant's `bg-storefront-bg`, because conflicting utilities are
   resolved by their order in the generated stylesheet, not in the class
   string. Silently, and only for some pairs. Rather than take that risk the
   hero's two looks are variants in their own right, so nothing overrides
   anything. */

type Variant = 'default' | 'outline' | 'secondary' | 'ghost' | 'hero' | 'heroOutline';
type Size = 'sm' | 'default' | 'lg';

const variants: Record<Variant, string> = {
  default: 'bg-[var(--accent-2)] text-[var(--accent-2-on)] hover:bg-[var(--accent-2-hover)]',
  outline: 'border border-[var(--rule)] bg-[var(--bg)] text-[var(--ink)] hover:bg-[var(--bg-sunken)]',
  secondary: 'bg-[var(--bg-sunken)] text-[var(--ink)] hover:bg-[var(--rule)]',
  ghost: 'text-[var(--ink)] hover:bg-[var(--bg-sunken)]',
  /* On an image, not on the page: these two are deliberately fixed colours
     rather than theme tokens, because the ground behind them is a photograph
     in either theme. */
  hero: 'bg-white text-zinc-900 shadow-sm hover:bg-white/90',
  heroOutline: 'border border-white/40 bg-white/10 text-white hover:border-white hover:bg-white hover:text-zinc-900',
};

const sizes: Record<Size, string> = {
  sm: 'h-8 px-3 text-xs gap-1.5',
  default: 'h-9 px-4 text-sm gap-2',
  lg: 'h-11 px-5 text-sm gap-2',
};

const base =
  'inline-flex cursor-pointer items-center justify-center rounded-lg font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

export function StorefrontButton({
  variant = 'default',
  size = 'default',
  className = '',
  children,
  ...props
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function StorefrontButtonLink({
  to,
  variant = 'default',
  size = 'default',
  className = '',
  children,
  tabIndex,
}: BaseProps & { to: string; tabIndex?: number }) {
  return (
    <Link to={to} tabIndex={tabIndex} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </Link>
  );
}
