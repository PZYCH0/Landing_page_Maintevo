import { cn } from '@/lib/storefront';
import { Link } from '@inertiajs/react';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'default' | 'outline' | 'secondary' | 'ghost';
type Size = 'sm' | 'default' | 'lg';

const variants: Record<Variant, string> = {
    default: 'bg-storefront-primary text-storefront-primary-fg hover:bg-storefront-primary/90',
    outline: 'border border-storefront-border bg-storefront-card text-storefront-fg hover:bg-storefront-bg',
    secondary: 'bg-storefront-bg text-storefront-fg hover:bg-storefront-border/50',
    ghost: 'text-storefront-fg hover:bg-storefront-bg',
};

const sizes: Record<Size, string> = {
    sm: 'h-8 px-3 text-xs gap-1.5',
    default: 'h-9 px-4 text-sm gap-2',
    lg: 'h-11 px-5 text-sm gap-2',
};

interface BaseProps {
    variant?: Variant;
    size?: Size;
    className?: string;
    children: ReactNode;
}

export function StorefrontButton({
    variant = 'default',
    size = 'default',
    className,
    children,
    ...props
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            type="button"
            className={cn(
                'inline-flex cursor-pointer items-center justify-center rounded-lg font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storefront-fg/20',
                variants[variant],
                sizes[size],
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
}

export function StorefrontButtonLink({
    href,
    variant = 'default',
    size = 'default',
    className,
    children,
}: BaseProps & { href: string }) {
    return (
        <Link
            href={href}
            className={cn(
                'inline-flex cursor-pointer items-center justify-center rounded-lg font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storefront-fg/20',
                variants[variant],
                sizes[size],
                className,
            )}
        >
            {children}
        </Link>
    );
}
