import { AdminModal } from '@/Components/AdminModal';
import CartOrderPanel, { type CartSummary } from '@/Components/storefront/CartOrderPanel';
import { Button, formatMoney } from '@/Components/ui';
import { clientRoutes } from '@/lib/adminRoutes';
import { priceWithVat } from '@/lib/pricingUtils';
import { Link, router, usePage } from '@inertiajs/react';
import { ShoppingBag, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function CartSideDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
    const { props } = usePage();
    const vatRate = (props as { defaultVatRate?: number }).defaultVatRate ?? 20;
    const cart = (props as { cart?: CartSummary }).cart ?? {
        count: 0,
        line_count: 0,
        items: [],
        subtotal_ht: 0,
    };

    const [showConfirm, setShowConfirm] = useState(false);
    const [checkoutProcessing, setCheckoutProcessing] = useState(false);

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

    const confirmCheckout = () => {
        const items = cart.items.map((item) => ({
            product_id: item.product_id,
            variant_id: item.variant_id,
            quantity: item.quantity,
        }));

        router.post(clientRoutes.orders.store, { items }, {
            onStart: () => setCheckoutProcessing(true),
            onFinish: () => setCheckoutProcessing(false),
            onSuccess: () => {
                setShowConfirm(false);
                onClose();
            },
        });
    };

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
                    aria-label="Fermer la commande"
                    onClick={onClose}
                />
            </div>

            <aside
                className={`fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col border-l border-storefront-border bg-storefront-bg shadow-2xl transition-transform duration-300 ease-out ${
                    open ? 'translate-x-0' : 'translate-x-full'
                }`}
                aria-hidden={!open}
                aria-label="Ma commande en cours"
            >
                <div className="flex items-center justify-between border-b border-storefront-border px-5 py-4">
                    <div className="flex items-center gap-2">
                        <ShoppingBag className="size-5 text-storefront-fg" aria-hidden />
                        <div>
                            <h2 className="text-base font-semibold text-storefront-fg">Ma commande</h2>
                            <p className="text-xs text-storefront-muted">
                                {cart.count > 0
                                    ? `${cart.count} unite${cart.count > 1 ? 's' : ''} — ${cart.line_count} produit${cart.line_count > 1 ? 's' : ''}`
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
                    {cart.items.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                            <ShoppingBag className="size-10 text-storefront-muted/50" aria-hidden />
                            <p className="mt-4 text-sm font-medium text-storefront-fg">Votre commande est vide</p>
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
                        <CartOrderPanel
                            cart={cart}
                            vatRate={vatRate}
                            variant="drawer"
                            onProductClick={onClose}
                            onCheckout={() => setShowConfirm(true)}
                            checkoutProcessing={checkoutProcessing}
                        />
                    )}
                </div>
            </aside>

            <AdminModal
                show={showConfirm}
                onClose={() => setShowConfirm(false)}
                title="Confirmer la commande"
                description={`${cart.count} unite(s) — ${cart.line_count} produit(s)`}
                footer={
                    <>
                        <Button type="button" variant="ghost" onClick={() => setShowConfirm(false)} disabled={checkoutProcessing}>
                            Annuler
                        </Button>
                        <Button type="button" onClick={confirmCheckout} disabled={checkoutProcessing}>
                            Confirmer la commande
                        </Button>
                    </>
                }
            >
                <div className="space-y-2 text-sm">
                    {cart.items.map((item) => (
                        <div
                            key={`${item.product_id}:${item.variant_id ?? 0}`}
                            className="flex justify-between gap-3 border-b border-gray-100 py-2"
                        >
                            <span className="text-gray-600">
                                {item.product_name}
                                {item.variant_label ? ` — ${item.variant_label}` : ''} × {item.quantity}
                            </span>
                            <span className="font-medium tabular-nums">{formatMoney(item.line_total)}</span>
                        </div>
                    ))}
                    <div className="flex justify-between pt-2 font-semibold">
                        <span>Total TTC</span>
                        <span className="tabular-nums">{formatMoney(priceWithVat(cart.subtotal_ht, vatRate))}</span>
                    </div>
                </div>
            </AdminModal>
        </>
    );
}
