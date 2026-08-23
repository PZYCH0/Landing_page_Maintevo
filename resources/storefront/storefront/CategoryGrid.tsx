import { useStaggerReveal } from '@/Components/storefront/ScrollReveal';
import { storefrontImage } from '@/lib/storefront';
import { storefrontMedia } from '@/lib/storefrontMedia';
import { Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';

interface Category {
    id: number;
    name: string;
    slug: string;
    products_count: number;
    image?: string | null;
}

const fallbackImages = [
    { url: storefrontMedia.categories.blanks.url, alt: storefrontMedia.categories.blanks.alt },
    { url: storefrontMedia.categories.workwear.url, alt: storefrontMedia.categories.workwear.alt },
    { url: storefrontMedia.categories.summer.url, alt: storefrontMedia.categories.summer.alt },
];

const fallbackDesc: Record<string, string> = {
    Blanks: 'T-shirts, sweats et polos premium prets a personnaliser.',
    Workwear: 'Vestes, pantalons et equipements professionnels durables.',
    'Summer Collection': 'Lin et coton legers pour les collections estivales.',
};

export default function CategoryGrid({ categories }: { categories: Category[] }) {
    const { ref, itemProps } = useStaggerReveal(120);

    if (categories.length === 0) return null;

    return (
        <section id="categories" className="border-b border-storefront-border">
            <div className="storefront-section storefront-container">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div className="max-w-xl">
                        <p className="text-sm font-medium text-storefront-muted">Acheter par categorie</p>
                        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-storefront-fg sm:text-4xl">
                            Organise comme vous achetez.
                        </h2>
                    </div>
                    <Link
                        href="/produits"
                        className="inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-storefront-fg transition-colors hover:underline"
                    >
                        Voir tout le catalogue
                        <ArrowUpRight className="size-4" />
                    </Link>
                </div>

                <div ref={ref} className="mt-8 grid gap-5 md:grid-cols-3">
                    {categories.slice(0, 3).map((cat, i) => {
                        const reveal = itemProps(i);
                        return (
                        <Link
                            key={cat.id}
                            href={`/produits?category=${cat.slug}`}
                            className={`group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-storefront-border bg-storefront-card shadow-sm transition-shadow duration-200 hover:shadow-md ${reveal.className}`}
                            style={reveal.style}
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={storefrontImage(cat.image, fallbackImages[i % fallbackImages.length].url)}
                                    alt={cat.image ? cat.name : fallbackImages[i % fallbackImages.length].alt}
                                    loading="lazy"
                                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                                />
                            </div>
                            <div className="flex flex-1 flex-col gap-1.5 p-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold tracking-tight text-storefront-fg">{cat.name}</h3>
                                    <span className="font-mono text-xs text-storefront-muted">{cat.products_count} refs</span>
                                </div>
                                <p className="text-sm leading-relaxed text-storefront-muted">
                                    {fallbackDesc[cat.name] ?? 'Decouvrez notre selection pour cette categorie.'}
                                </p>
                            </div>
                        </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
