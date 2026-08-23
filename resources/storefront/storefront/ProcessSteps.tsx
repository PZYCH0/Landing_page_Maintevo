import { useStaggerReveal } from '@/Components/storefront/ScrollReveal';
import { StorefrontButtonLink } from '@/Components/storefront/StorefrontButton';
import { ClipboardCheck, FileText, ShoppingCart, UserPlus } from 'lucide-react';

const steps = [
    {
        step: '01',
        icon: UserPlus,
        title: 'Demande de compte',
        desc: 'Renseignez ICE, coordonnees et besoins. Notre equipe valide votre dossier sous 48h ouvrables.',
    },
    {
        step: '02',
        icon: ClipboardCheck,
        title: 'Activation & tarifs',
        desc: 'Attribution d une liste de prix, plafond de credit et acces a l espace client securise.',
    },
    {
        step: '03',
        icon: ShoppingCart,
        title: 'Commande & stock',
        desc: 'Parcourez le catalogue, reservez le stock et suivez la preparation jusqu a l expedition.',
    },
    {
        step: '04',
        icon: FileText,
        title: 'Facturation',
        desc: 'Factures, paiements partiels et historique centralises — synchronisation comptable via Odoo.',
    },
];

export default function ProcessSteps() {
    const { ref, itemProps } = useStaggerReveal<HTMLOListElement>(90);

    return (
        <section className="border-b border-storefront-border bg-storefront-card" aria-labelledby="process-steps">
            <div className="storefront-section storefront-container">
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                    <div className="max-w-xl">
                        <p className="text-sm font-medium text-storefront-muted">Comment ca marche</p>
                        <h2 id="process-steps" className="mt-3 text-balance text-3xl font-semibold tracking-tight text-storefront-fg sm:text-4xl">
                            De l inscription a la livraison
                        </h2>
                        <p className="mt-4 text-pretty leading-relaxed text-storefront-muted">
                            Un parcours B2B clair en quatre etapes, sans aller-retour inutile entre emails et tableurs.
                        </p>
                    </div>
                    <StorefrontButtonLink href="/inscription-b2b" variant="outline">
                        Commencer maintenant
                    </StorefrontButtonLink>
                </div>

                <ol ref={ref} className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((s, i) => {
                        const reveal = itemProps(i);
                        return (
                        <li
                            key={s.step}
                            className={`relative flex flex-col gap-4 rounded-xl border border-storefront-border bg-storefront-bg p-6 transition-colors duration-200 hover:border-storefront-fg/20 ${reveal.className}`}
                            style={reveal.style}
                        >
                            <div className="flex items-center justify-between">
                                <span className="flex size-10 items-center justify-center rounded-lg border border-storefront-border bg-storefront-card text-storefront-fg">
                                    <s.icon className="size-5" strokeWidth={1.75} aria-hidden />
                                </span>
                                <span className="font-mono text-xs text-storefront-muted">{s.step}</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-storefront-fg">{s.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-storefront-muted">{s.desc}</p>
                            </div>
                        </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
}
