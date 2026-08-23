import { Link } from '@inertiajs/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export default function StorefrontPagination({ links }: { links: PaginationLink[] }) {
    if (links.length <= 3) return null;

    return (
        <nav className="mt-10 flex items-center justify-center gap-2 border-t border-storefront-border pt-6" aria-label="Pagination">
            {links.map((link, i) => {
                const isPrev = link.label.includes('Previous') || link.label.includes('&laquo;');
                const isNext = link.label.includes('Next') || link.label.includes('&raquo;');

                if (!link.url) {
                    return (
                        <span key={i} className="px-3 py-1.5 text-sm text-storefront-muted opacity-40">
                            {isPrev ? <ChevronLeft className="size-4" /> : isNext ? <ChevronRight className="size-4" /> : null}
                        </span>
                    );
                }

                return (
                    <Link
                        key={i}
                        href={link.url}
                        className={`cursor-pointer rounded-lg px-3 py-1.5 text-sm transition-colors duration-200 ${
                            link.active
                                ? 'bg-storefront-primary text-storefront-primary-fg'
                                : 'border border-storefront-border text-storefront-muted hover:border-storefront-fg/20 hover:bg-storefront-card hover:text-storefront-fg'
                        }`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                );
            })}
        </nav>
    );
}
