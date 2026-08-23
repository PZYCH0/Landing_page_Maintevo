import { storefrontMedia } from '@/lib/storefrontMedia';
import { useStaggerReveal } from '@/Components/storefront/ScrollReveal';
import { Star } from 'lucide-react';

const testimonials = [
    {
        quote: 'Catalogue clair, tarifs B2B transparents et livraisons fiables. Notre equipe achete en quelques clics.',
        author: 'Karim Benali',
        role: 'Directeur achats',
        company: 'Atlas Workwear',
        avatar: storefrontMedia.testimonials[0],
    },
    {
        quote: 'Les catalogues flipbook et les devis personnalises nous font gagner un temps precieux sur les campagnes.',
        author: 'Sara El Amrani',
        role: 'Responsable marketing',
        company: 'Nova Brands',
        avatar: storefrontMedia.testimonials[1],
    },
    {
        quote: 'Suivi commandes, factures et reclamations centralises : exactement ce qu il nous fallait pour scaler.',
        author: 'Youssef Idrissi',
        role: 'Fondateur',
        company: 'Print & Co',
        avatar: storefrontMedia.testimonials[2],
    },
];

export default function TestimonialsSection() {
    const { ref, itemProps } = useStaggerReveal(100);

    return (
        <section className="border-b border-storefront-border" aria-labelledby="testimonials">
            <div className="storefront-section storefront-container">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-medium text-storefront-muted">Temoignages</p>
                    <h2 id="testimonials" className="mt-3 text-balance text-3xl font-semibold tracking-tight text-storefront-fg sm:text-4xl">
                        Ils nous font confiance
                    </h2>
                </div>

                <div ref={ref} className="mt-8 grid gap-5 md:grid-cols-3">
                    {testimonials.map((t, i) => {
                        const reveal = itemProps(i);
                        return (
                        <figure
                            key={t.author}
                            className={`flex flex-col rounded-xl border border-storefront-border bg-storefront-card p-6 shadow-sm transition-shadow duration-200 hover:shadow-md ${reveal.className}`}
                            style={reveal.style}
                        >
                            <div className="flex gap-0.5 text-amber-500" aria-label="5 etoiles sur 5">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} className="size-4 fill-current" aria-hidden />
                                ))}
                            </div>
                            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-storefront-muted">
                                « {t.quote} »
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-3 border-t border-storefront-border pt-4">
                                <img
                                    src={t.avatar}
                                    alt=""
                                    loading="lazy"
                                    className="size-10 rounded-full object-cover ring-2 ring-storefront-border"
                                />
                                <div>
                                    <p className="text-sm font-semibold text-storefront-fg">{t.author}</p>
                                    <p className="text-xs text-storefront-muted">
                                        {t.role} · {t.company}
                                    </p>
                                </div>
                            </figcaption>
                        </figure>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
