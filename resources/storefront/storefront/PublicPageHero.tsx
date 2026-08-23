import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';
import { type ReactNode } from 'react';

interface Breadcrumb {
    label: string;
    href?: string;
}

interface PublicPageHeroProps {
    eyebrow?: string;
    title: string;
    description?: string;
    breadcrumbs?: Breadcrumb[];
    children?: ReactNode;
    /** editorial = flat minimal header (blog, magazine pages) */
    variant?: 'default' | 'editorial';
}

export default function PublicPageHero({
    eyebrow,
    title,
    description,
    breadcrumbs,
    children,
    variant = 'default',
}: PublicPageHeroProps) {
    const isEditorial = variant === 'editorial';

    return (
        <div
            className={
                isEditorial
                    ? 'border-b border-storefront-border bg-storefront-bg'
                    : 'border-b border-storefront-border bg-gradient-to-b from-storefront-card to-storefront-bg'
            }
        >
            <div
                className={`storefront-container ${
                    isEditorial ? 'py-10 sm:py-12 lg:py-14' : 'storefront-section-compact'
                }`}
            >
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <nav
                        aria-label="Fil d'Ariane"
                        className={`mb-5 flex flex-wrap items-center gap-1.5 text-sm ${
                            isEditorial ? 'text-storefront-muted' : 'text-xs text-storefront-muted'
                        }`}
                    >
                        {breadcrumbs.map((crumb, i) => (
                            <span key={crumb.label} className="inline-flex items-center gap-1.5">
                                {i > 0 &&
                                    (isEditorial ? (
                                        <span className="text-storefront-muted/60" aria-hidden>
                                            &gt;
                                        </span>
                                    ) : (
                                        <ChevronRight className="size-3 opacity-50" aria-hidden />
                                    ))}
                                {crumb.href ? (
                                    <Link
                                        href={crumb.href}
                                        className="cursor-pointer transition-colors duration-200 hover:text-storefront-fg"
                                    >
                                        {crumb.label}
                                    </Link>
                                ) : (
                                    <span className="font-semibold text-storefront-fg">{crumb.label}</span>
                                )}
                            </span>
                        ))}
                    </nav>
                )}

                {eyebrow && (
                    <p
                        className={`font-medium text-storefront-muted ${
                            isEditorial ? 'text-sm tracking-wide' : 'text-sm'
                        }`}
                    >
                        {eyebrow}
                    </p>
                )}

                <h1
                    className={`text-balance tracking-tight text-storefront-fg ${
                        isEditorial
                            ? 'mt-2 text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]'
                            : 'mt-1 text-3xl font-semibold sm:text-4xl'
                    }`}
                >
                    {title}
                </h1>

                {description && (
                    <p
                        className={`max-w-2xl text-pretty leading-relaxed text-storefront-muted ${
                            isEditorial ? 'mt-4 text-base sm:text-lg' : 'mt-3 text-sm sm:text-base'
                        }`}
                    >
                        {description}
                    </p>
                )}

                {children && <div className="mt-6">{children}</div>}
            </div>
        </div>
    );
}
