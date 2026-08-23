import { StorefrontButton, StorefrontButtonLink } from '@/Components/storefront/StorefrontButton';
import { FileText } from 'lucide-react';

export default function ProductQuoteOnlyCard({
    isClient,
    onAddToQuote,
    addingQuote = false,
}: {
    isClient: boolean;
    onAddToQuote?: () => void;
    addingQuote?: boolean;
}) {
    return (
        <div className="rounded-xl border border-storefront-border bg-storefront-card p-5">
            <div className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-storefront-bg text-storefront-fg">
                    <FileText className="size-5" aria-hidden />
                </span>
                <div>
                    <h3 className="text-sm font-semibold text-storefront-fg">Produit sur devis uniquement</h3>
                    <p className="mt-1 text-sm leading-relaxed text-storefront-muted">
                        Ce produit necessite une etude technique (personnalisation, volume, technique d&apos;impression).
                        La grille tarifaire n&apos;est pas affichee en ligne.
                    </p>
                </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
                {isClient ? (
                    <StorefrontButton type="button" size="sm" disabled={addingQuote} onClick={onAddToQuote}>
                        {addingQuote ? 'Ajout...' : 'Ajouter au devis'}
                    </StorefrontButton>
                ) : (
                    <>
                        <StorefrontButtonLink href="/login" variant="outline" size="sm">
                            Connexion
                        </StorefrontButtonLink>
                        <StorefrontButtonLink href="/inscription-b2b" size="sm">
                            Demander un compte B2B
                        </StorefrontButtonLink>
                    </>
                )}
            </div>
        </div>
    );
}
