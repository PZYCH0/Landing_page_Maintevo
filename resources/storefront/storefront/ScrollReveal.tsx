import { useScrollReveal } from '@/hooks/useScrollReveal';
import { type CSSProperties, type ElementType, type ReactNode } from 'react';

type RevealVariant = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in';

const variants: Record<RevealVariant, { idle: string; shown: string }> = {
    'fade-up': {
        idle: 'translate-y-8 opacity-0',
        shown: 'translate-y-0 opacity-100',
    },
    'fade-in': {
        idle: 'opacity-0',
        shown: 'opacity-100',
    },
    'slide-left': {
        idle: 'translate-y-8 opacity-0',
        shown: 'translate-y-0 opacity-100',
    },
    'slide-right': {
        idle: 'translate-y-8 opacity-0',
        shown: 'translate-y-0 opacity-100',
    },
    'scale-in': {
        idle: 'scale-[0.97] opacity-0',
        shown: 'scale-100 opacity-100',
    },
};

interface ScrollRevealProps {
    children: ReactNode;
    variant?: RevealVariant;
    delay?: number;
    className?: string;
    as?: ElementType;
}

export default function ScrollReveal({
    children,
    variant = 'fade-up',
    delay = 0,
    className = '',
    as: Tag = 'div',
}: ScrollRevealProps) {
    const { ref, visible } = useScrollReveal<HTMLElement>();
    const motion = variants[variant];

    return (
        <Tag
            ref={ref}
            className={`w-full overflow-x-clip motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
                visible ? motion.shown : motion.idle
            } ${className}`}
            style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
        >
            {children}
        </Tag>
    );
}

interface ScrollRevealStaggerProps {
    children: ReactNode;
    className?: string;
    staggerMs?: number;
    as?: ElementType;
}

export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(staggerMs = 80) {
    const { ref, visible } = useScrollReveal<T>();

    const itemProps = (index: number) => ({
        className: `storefront-reveal-item${visible ? ' is-visible' : ''}`,
        style: { transitionDelay: visible ? `${index * staggerMs}ms` : '0ms' } as CSSProperties,
    });

    return { ref, visible, itemProps };
}

export function ScrollRevealStagger({
    children,
    className = '',
    staggerMs = 80,
    as: Tag = 'div',
}: ScrollRevealStaggerProps) {
    const { ref, visible } = useScrollReveal<HTMLElement>();

    return (
        <Tag ref={ref} className={className}>
            {Array.isArray(children)
                ? children.map((child, i) => (
                      <div
                          key={i}
                          className={`motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out ${
                              visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                          } motion-safe:duration-500`}
                          style={{ transitionDelay: visible ? `${i * staggerMs}ms` : '0ms' }}
                      >
                          {child}
                      </div>
                  ))
                : children}
        </Tag>
    );
}
