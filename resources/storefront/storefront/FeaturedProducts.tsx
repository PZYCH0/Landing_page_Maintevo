import { useStaggerReveal } from '@/Components/storefront/ScrollReveal';
import { StorefrontButtonLink } from '@/Components/storefront/StorefrontButton';
import { formatMoney } from '@/Components/ui';
import { storefrontImage } from '@/lib/storefront';
import { productMediaUrl } from '@/lib/storefrontMedia';
import { Link } from '@inertiajs/react';

interface Product {
    id: number;
    name: string;
    slug: string;
    base_price: number;
    stock_qty?: number;
    thumb: string | null;
}

function StockBadge({ inStock }: { inStock: boolean }) {
    if (inStock) {
        return (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                En stock
            </span>
        );
    }
    return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700">
            <span className="size-1.5 rounded-full bg-amber-500" />
            Rupture / backorder
        </span>
    );
}

export default function FeaturedProducts({ products, showPrices = true }: { products: Product[]; showPrices?: boolean }) {
    const { ref, itemProps } = useStaggerReveal(70);

    if (products.length === 0) return null;

    return (
        <section id="products" className="border-b border-storefront-border">
            <div className="storefront-section storefront-container">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div className="max-w-xl">
                        <p className="text-sm font-medium text-storefront-muted">Produits mis en avant</p>
                        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-storefront-fg sm:text-4xl">
                            Tarifs pro, prets a commander.
                        </h2>
                    </div>
                    <p className="text-sm text-storefront-muted">Prix indicatifs HT — tarif client apres connexion</p>
                </div>

                <div ref={ref} className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {products.slice(0, 8).map((product, i) => {
                        const reveal = itemProps(i);
                        return (
                        <div
                            key={product.id}
                            className={`group flex flex-col overflow-hidden rounded-xl border border-storefront-border bg-storefront-card shadow-sm transition-shadow duration-200 hover:shadow-md ${reveal.className}`}
                            style={reveal.style}
                        >
                            <Link
                                href={`/produits/${product.slug}`}
                                className="relative block overflow-hidden border-b border-storefront-border bg-white"
                            >
                                <img
                                    src={storefrontImage(product.thumb, productMediaUrl(i))}
                                    alt={product.name}
                                    loading="lazy"
                                    className="aspect-square w-full bg-white object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                                />
                                <div className="absolute left-3 top-3">
                                    <StockBadge inStock={(product.stock_qty ?? 0) > 0} />
                                </div>
                            </Link>
                            <div className="flex flex-1 flex-col gap-3 p-5">
                                <div className="flex flex-1 flex-col gap-1">
                                    <Link
                                        href={`/produits/${product.slug}`}
                                        className="cursor-pointer text-sm font-medium leading-snug text-storefront-fg transition-colors hover:text-storefront-muted"
                                    >
                                        {product.name}
                                    </Link>
                                </div>
                                <div className="flex items-center justify-between">
                                    {showPrices && (
                                        <span className="text-base font-semibold tracking-tight text-storefront-fg">
                                            {formatMoney(product.base_price)}
                                        </span>
                                    )}
                                    <StorefrontButtonLink href={`/produits/${product.slug}`} size="sm" variant="outline" className="text-xs">
                                        Voir
                                    </StorefrontButtonLink>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
