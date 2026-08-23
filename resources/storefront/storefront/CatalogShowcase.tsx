import { StorefrontButtonLink } from '@/Components/storefront/StorefrontButton';
import { storefrontMedia } from '@/lib/storefrontMedia';
import { ArrowRight, MousePointerClick } from 'lucide-react';

const highlights = [
    'Navigation page par page fluide',
    'Hotspots produits cliquables',
    'Partage securise avec vos clients B2B',
];

export default function CatalogShowcase() {
    return (
        <section className="border-b border-storefront-border" aria-labelledby="catalog-showcase">
            <div className="storefront-section storefront-container">
                <div className="overflow-hidden rounded-2xl border border-storefront-border bg-storefront-card shadow-sm lg:grid lg:grid-cols-2">
                    <div className="relative min-h-[280px] lg:min-h-[480px]">
                        <img
                            src={storefrontMedia.catalogFlipbook.url}
                            alt={storefrontMedia.catalogFlipbook.alt}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-storefront-fg/25" />
                        <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-storefront-border/80 bg-storefront-card/95 p-4 backdrop-blur-sm sm:max-w-xs">
                            <p className="text-xs font-medium uppercase tracking-wide text-storefront-muted">Apercu flipbook</p>
                            <p className="mt-1 text-lg font-semibold text-storefront-fg">Collection Workwear 2026</p>
                            <p className="text-sm text-storefront-muted">48 pages · 120 references</p>
                            <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-storefront-fg">
                                <MousePointerClick className="size-3.5" aria-hidden />
                                Zones cliquables actives
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                        <p className="text-sm font-medium text-storefront-muted">Experience magazine</p>
                        <h2 id="catalog-showcase" className="mt-3 text-balance text-3xl font-semibold tracking-tight text-storefront-fg">
                            Catalogues numeriques immersifs
                        </h2>
                        <p className="mt-4 leading-relaxed text-storefront-muted">
                            Presentez vos collections comme un vrai lookbook : vos commerciaux et clients naviguent, zooment et accedent aux fiches produit en un clic.
                        </p>
                        <ul className="mt-6 space-y-3">
                            {highlights.map((item) => (
                                <li key={item} className="flex items-center gap-2.5 text-sm text-storefront-muted">
                                    <span className="size-1.5 shrink-0 rounded-full bg-storefront-fg" aria-hidden />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8">
                            <StorefrontButtonLink href="/catalogues" size="lg" className="group">
                                Parcourir les catalogues
                                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                            </StorefrontButtonLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
