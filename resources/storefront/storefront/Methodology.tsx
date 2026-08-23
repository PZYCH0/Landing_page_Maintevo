import { useStaggerReveal } from '@/Components/storefront/ScrollReveal';
import { Compass, Layers, Users } from 'lucide-react';

const pillars = [
    {
        tag: 'Why',
        icon: Compass,
        title: 'Un partenaire supply, pas une vitrine',
        body: 'Nous existons pour simplifier vos achats textile : tarifs previsibles, stock transparent et une equipe qui connait votre activite.',
    },
    {
        tag: 'What',
        icon: Layers,
        title: 'Blanks, workwear & impression',
        body: 'Catalogue premium, serigraphie et broderie — devis et suivi centralises dans un seul espace professionnel.',
    },
    {
        tag: 'Who',
        icon: Users,
        title: 'Marques, agences & revendeurs',
        body: 'Pense pour les commandes en volume : listes de prix dediees, credit client et workflows d approbation.',
    },
];

export default function Methodology() {
    const { ref, itemProps } = useStaggerReveal(100);

    return (
        <section id="methodologie" className="border-b border-storefront-border">
            <div className="storefront-section storefront-container">
                <div className="max-w-2xl">
                    <p className="text-sm font-medium text-storefront-muted">Notre methodologie</p>
                    <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-storefront-fg sm:text-4xl">
                        Why / What / Who
                    </h2>
                    <p className="mt-4 text-pretty leading-relaxed text-storefront-muted">
                        Chaque compte client est structure autour de trois questions. Cela garde notre process clair et vos achats previsibles.
                    </p>
                </div>

                <div
                    ref={ref}
                    className="mt-8 grid gap-px overflow-hidden rounded-xl border border-storefront-border bg-storefront-border sm:grid-cols-3"
                >
                    {pillars.map((pillar, i) => {
                        const reveal = itemProps(i);
                        return (
                        <div
                            key={pillar.tag}
                            className={`flex flex-col gap-4 bg-storefront-card p-8 ${reveal.className}`}
                            style={reveal.style}
                        >
                            <div className="flex items-center justify-between">
                                <span className="flex size-10 items-center justify-center rounded-lg bg-storefront-bg text-storefront-fg">
                                    <pillar.icon className="size-5" />
                                </span>
                                <span className="font-mono text-xs uppercase tracking-widest text-storefront-muted">
                                    {pillar.tag}
                                </span>
                            </div>
                            <h3 className="text-lg font-semibold tracking-tight text-storefront-fg">{pillar.title}</h3>
                            <p className="text-sm leading-relaxed text-storefront-muted">{pillar.body}</p>
                        </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
