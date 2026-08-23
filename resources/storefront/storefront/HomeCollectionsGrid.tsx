import { useStaggerReveal } from '@/Components/storefront/ScrollReveal';
import { storefrontImage } from '@/lib/storefront';
import { storefrontMedia } from '@/lib/storefrontMedia';
import { Link } from '@inertiajs/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useEffect, useState, type CSSProperties } from 'react';

interface HomeCollection {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    image: string | null;
    url: string;
    is_featured: boolean;
}

const fallbackImages = [
    storefrontMedia.categories.blanks.url,
    storefrontMedia.categories.workwear.url,
    storefrontMedia.categories.summer.url,
];

function CollectionCard({
    collection,
    featured = false,
    fallbackIndex,
    className = '',
    style,
}: {
    collection: HomeCollection;
    featured?: boolean;
    fallbackIndex: number;
    className?: string;
    style?: CSSProperties;
}) {
    const fallback = fallbackImages[fallbackIndex % fallbackImages.length];
    const primary = storefrontImage(collection.image, fallback);
    const [imgSrc, setImgSrc] = useState(primary);

    useEffect(() => {
        setImgSrc(primary);
    }, [primary]);

    return (
        <Link
            href={collection.url}
            className={`group relative block overflow-hidden rounded-xl border border-storefront-border bg-storefront-fg shadow-sm transition-shadow duration-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storefront-fg focus-visible:ring-offset-2 ${
                featured
                    ? 'min-h-[280px] md:row-span-2 md:min-h-full'
                    : 'min-h-[200px] sm:min-h-[220px]'
            } ${className}`}
            style={style}
        >
            <img
                src={imgSrc}
                alt={collection.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                onError={() => {
                    if (imgSrc !== fallback) {
                        setImgSrc(fallback);
                    }
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-storefront-fg/80 via-storefront-fg/40 to-storefront-fg/10 transition-colors group-hover:from-storefront-fg/85 group-hover:via-storefront-fg/45" />
            <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 lg:p-8">
                <h3
                    className={`font-semibold tracking-tight text-storefront-primary-fg ${
                        featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
                    }`}
                >
                    {collection.name}
                </h3>
                {collection.description && (
                    <p className={`mt-2 max-w-md leading-relaxed text-storefront-primary-fg/85 ${featured ? 'text-sm sm:text-base' : 'text-sm'}`}>
                        {collection.description}
                    </p>
                )}
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-storefront-primary-fg opacity-0 transition-opacity group-hover:opacity-100">
                    Decouvrir
                    <ArrowRight className="size-4" aria-hidden />
                </span>
            </div>
        </Link>
    );
}

export default function HomeCollectionsGrid({ collections }: { collections: HomeCollection[] }) {
    const { ref, itemProps } = useStaggerReveal(120);

    if (collections.length === 0) return null;

    const featured = collections.find((c) => c.is_featured) ?? collections[0];
    const others = collections.filter((c) => c.id !== featured.id).slice(0, 2);

    return (
        <section id="collections" className="border-b border-storefront-border">
            <div className="storefront-section storefront-container">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div className="max-w-xl">
                        <p className="text-sm font-medium text-storefront-muted">Nos collections</p>
                        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-storefront-fg sm:text-4xl">
                            Explorez nos univers.
                        </h2>
                    </div>
                    <Link
                        href="/produits"
                        className="inline-flex shrink-0 cursor-pointer items-center gap-1 text-sm font-medium text-storefront-fg transition-colors hover:underline"
                    >
                        Voir tout le catalogue
                        <ArrowUpRight className="size-4" />
                    </Link>
                </div>

                <div ref={ref} className="mt-8 grid gap-5 md:grid-cols-2 md:grid-rows-2">
                    {(() => {
                        const reveal = itemProps(0);
                        return (
                            <CollectionCard
                                collection={featured}
                                featured
                                fallbackIndex={0}
                                className={reveal.className}
                                style={reveal.style}
                            />
                        );
                    })()}
                    {others.map((col, i) => {
                        const reveal = itemProps(i + 1);
                        return (
                            <CollectionCard
                                key={col.id}
                                collection={col}
                                fallbackIndex={i + 1}
                                className={reveal.className}
                                style={reveal.style}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
