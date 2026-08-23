import QuoteDraftPanel, { type QuoteCartSummary } from '@/Components/storefront/QuoteDraftPanel';
import { Link, usePage } from '@inertiajs/react';
import { FileText, X } from 'lucide-react';
import { useEffect } from 'react';

export default function QuoteSideDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
    const quoteCart = (usePage().props as { quoteCart?: QuoteCartSummary }).quoteCart ?? {
        count: 0,
        line_count: 0,
        items: [],
    };

    useEffect(() => {
        if (!open) {
            return;
        }

        const previous = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.style.overflow = previous;
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [open, onClose]);

    return (
        <>
            <div
                className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
                    open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                }`}
                aria-hidden={!open}
            >
                <button
                    type="button"
                    className="absolute inset-0 cursor-pointer bg-storefront-primary/40 backdrop-blur-[2px]"
                    aria-label="Fermer le devis"
                    onClick={onClose}
                />
            </div>

            <aside
                className={`fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col border-l border-storefront-border bg-storefront-bg shadow-2xl transition-transform duration-300 ease-out ${
                    open ? 'translate-x-0' : 'translate-x-full'
                }`}
                aria-hidden={!open}
                aria-label="Mon devis en cours"
            >
                <div className="flex items-center justify-between border-b border-storefront-border px-5 py-4">
                    <div className="flex items-center gap-2">
                        <FileText className="size-5 text-storefront-fg" aria-hidden />
                        <div>
                            <h2 className="text-base font-semibold text-storefront-fg">Mon devis</h2>
                            <p className="text-xs text-storefront-muted">
                                {quoteCart.count > 0
                                    ? `${quoteCart.count} unite${quoteCart.count > 1 ? 's' : ''} — ${quoteCart.line_count} produit${quoteCart.line_count > 1 ? 's' : ''}`
                                    : 'Aucun produit ajoute'}
                            </p>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="cursor-pointer rounded-lg p-2 text-storefront-muted transition-colors hover:bg-storefront-card hover:text-storefront-fg"
                        aria-label="Fermer"
                    >
                        <X className="size-5" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-5 py-4">
                    {quoteCart.items.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                            <FileText className="size-10 text-storefront-muted/50" aria-hidden />
                            <p className="mt-4 text-sm font-medium text-storefront-fg">Votre devis est vide</p>
                            <p className="mt-1 text-sm text-storefront-muted">
                                Ajoutez des produits depuis le catalogue sans quitter la page.
                            </p>
                            <Link
                                href="/produits"
                                onClick={onClose}
                                className="mt-6 inline-flex h-9 cursor-pointer items-center justify-center rounded-lg border border-storefront-border bg-storefront-card px-4 text-sm font-medium text-storefront-fg transition-colors hover:bg-storefront-bg"
                            >
                                Parcourir le catalogue
                            </Link>
                        </div>
                    ) : (
                        <QuoteDraftPanel
                            quoteCart={quoteCart}
                            variant="drawer"
                            onProductClick={onClose}
                            onFinalizeClick={onClose}
                        />
                    )}
                </div>
            </aside>
        </>
    );
}
