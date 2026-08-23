import { StorefrontButtonLink } from '@/Components/storefront/StorefrontButton';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        q: 'Qui peut ouvrir un compte professionnel ?',
        a: 'Revendeurs, marques, agences et entreprises avec ICE valide au Maroc. Apres validation, vous accedez aux tarifs B2B et a la ligne de credit negociee.',
    },
    {
        q: 'Comment fonctionnent les tarifs et listes de prix ?',
        a: 'Chaque client se voit attribuer une liste de prix (remise globale, prix fixes ou paliers par quantite). Les prix affiches apres connexion correspondent a votre grille contractuelle.',
    },
    {
        q: 'Puis-je commander sans compte ?',
        a: 'Le catalogue public est consultable. Pour passer commande, obtenir vos tarifs et suivre vos expeditions, un compte client actif est requis.',
    },
    {
        q: 'Proposez-vous la personnalisation (serigraphie, broderie) ?',
        a: 'Oui. Depuis votre espace client, soumettez une demande de devis avec quantites, technique souhaitee et fichiers logo. Notre equipe vous repond avec un devis formalise.',
    },
    {
        q: 'Le stock est-il synchronise en temps reel ?',
        a: 'Les niveaux de stock sont synchronises avec Odoo. En cas de rupture, vous pouvez vous inscrire sur liste d attente (backorder) depuis la fiche produit.',
    },
    {
        q: 'Quels sont les delais de livraison ?',
        a: 'Les delais varient selon le produit et le volume. Une fois la commande en preparation, vous recevez le suivi expedition dans votre espace client.',
    },
];

export default function FaqSection() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="border-b border-storefront-border bg-storefront-bg" aria-labelledby="faq">
            <div className="storefront-section storefront-container">
                <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
                    <div>
                        <p className="text-sm font-medium text-storefront-muted">FAQ</p>
                        <h2 id="faq" className="mt-3 text-balance text-3xl font-semibold tracking-tight text-storefront-fg sm:text-4xl">
                            Questions frequentes
                        </h2>
                        <p className="mt-4 leading-relaxed text-storefront-muted">
                            Tout ce qu il faut savoir avant d ouvrir votre compte ou de lancer votre premiere commande.
                        </p>
                        <div className="mt-8">
                            <StorefrontButtonLink href="/inscription-b2b">
                                Demander un compte
                            </StorefrontButtonLink>
                        </div>
                    </div>

                    <div className="divide-y divide-storefront-border rounded-xl border border-storefront-border bg-storefront-card">
                        {faqs.map((item, i) => {
                            const isOpen = open === i;
                            return (
                                <div key={item.q}>
                                    <button
                                        type="button"
                                        onClick={() => setOpen(isOpen ? null : i)}
                                        className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-storefront-bg"
                                        aria-expanded={isOpen}
                                    >
                                        <span className="text-sm font-medium text-storefront-fg">{item.q}</span>
                                        <ChevronDown
                                            className={`size-4 shrink-0 text-storefront-muted transition-transform duration-200 motion-reduce:transition-none ${isOpen ? 'rotate-180' : ''}`}
                                            aria-hidden
                                        />
                                    </button>
                                    {isOpen && (
                                        <p className="px-5 pb-4 text-sm leading-relaxed text-storefront-muted">{item.a}</p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
