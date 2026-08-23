import { useStaggerReveal } from '@/Components/storefront/ScrollReveal';
import { storefrontMedia } from '@/lib/storefrontMedia';
import { BookOpen, Package, Printer, ShieldCheck } from 'lucide-react';

const features = [
    {
        icon: Package,
        title: 'Catalogue premium',
        desc: 'Blanks, workwear et collections saisonnieres avec fiches produits, variantes couleur/taille et stock live.',
        image: storefrontMedia.logistics.url,
        alt: storefrontMedia.logistics.alt,
    },
    {
        icon: BookOpen,
        title: 'Flipbooks interactifs',
        desc: 'Parcourez vos catalogues comme un magazine digital avec hotspots cliquables vers les fiches produit.',
        image: storefrontMedia.catalogFlipbook.url,
        alt: storefrontMedia.catalogFlipbook.alt,
    },
    {
        icon: ShieldCheck,
        title: 'Tarifs B2B securises',
        desc: 'Listes de prix par client, remises par volume et controle du plafond de credit avant validation commande.',
        image: storefrontMedia.hero.url,
        alt: 'Gestion tarifaire professionnelle',
    },
    {
        icon: Printer,
        title: 'Devis impression',
        desc: 'Serigraphie, broderie et transfert — demandes de devis tracees de la maquette a la commande.',
        image: storefrontMedia.printing.url,
        alt: storefrontMedia.printing.alt,
    },
];

export default function PlatformFeatures() {
    const { ref, itemProps } = useStaggerReveal(100);

    return (
        <section className="border-b border-storefront-border bg-storefront-bg" aria-labelledby="platform-features">
            <div className="storefront-section storefront-container">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-medium text-storefront-muted">Plateforme tout-en-un</p>
                    <h2 id="platform-features" className="mt-3 text-balance text-3xl font-semibold tracking-tight text-storefront-fg sm:text-4xl">
                        Du catalogue a la facturation
                    </h2>
                    <p className="mt-4 text-pretty leading-relaxed text-storefront-muted">
                        Une experience pensee pour les acheteurs professionnels : moins de friction, plus de visibilite sur vos operations textile.
                    </p>
                </div>

                <div ref={ref} className="mt-8 grid gap-6 md:grid-cols-2">
                    {features.map((f, i) => {
                        const reveal = itemProps(i);
                        return (
                        <article
                            key={f.title}
                            className={`group overflow-hidden rounded-xl border border-storefront-border bg-storefront-card shadow-sm transition-shadow duration-200 hover:shadow-md ${reveal.className}`}
                            style={reveal.style}
                        >
                            <div className="relative aspect-[21/9] overflow-hidden border-b border-storefront-border">
                                <img
                                    src={f.image}
                                    alt={f.alt}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-storefront-fg/40 to-transparent" />
                                <span className="absolute bottom-4 left-4 flex size-10 items-center justify-center rounded-lg bg-storefront-card/95 text-storefront-fg shadow-sm">
                                    <f.icon className="size-5" strokeWidth={1.75} aria-hidden />
                                </span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold tracking-tight text-storefront-fg">{f.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-storefront-muted">{f.desc}</p>
                            </div>
                        </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
