import QuantityStepper from '@/Components/storefront/QuantityStepper';
import { StorefrontButton, StorefrontButtonLink } from '@/Components/storefront/StorefrontButton';
import { formatMoney } from '@/Components/ui';
import { clientRoutes } from '@/lib/adminRoutes';
import { priceWithVat } from '@/lib/pricingUtils';
import { Link, router } from '@inertiajs/react';
import { ShoppingBag, Trash2 } from 'lucide-react';
import { useState } from 'react';

export interface CartItem {
    product_id: number;
    variant_id: number | null;
    product_name: string;
    product_slug: string;
    variant_label: string | null;
    sku: string;
    quantity: number;
    unit_price: number;
    line_total: number;
    max_quantity: number;
}

export interface CartSummary {
    count: number;
    line_count: number;
    items: CartItem[];
    subtotal_ht: number;
}

export default function CartOrderPanel({
    cart,
    vatRate,
    onCheckout,
    checkoutProcessing = false,
    compact = false,
    variant = 'card',
    onProductClick,
}: {
    cart: CartSummary;
    vatRate: number;
    onCheckout?: () => void;
    checkoutProcessing?: boolean;
    compact?: boolean;
    variant?: 'card' | 'drawer';
    onProductClick?: () => void;
}) {
    const [updatingKey, setUpdatingKey] = useState<string | null>(null);

    if (cart.items.length === 0) {
        return variant === 'drawer' ? null : null;
    }

    const subtotalTtc = priceWithVat(cart.subtotal_ht, vatRate);
    const lineKey = (item: CartItem) => `${item.product_id}:${item.variant_id ?? 0}`;

    const updateQuantity = (item: CartItem, quantity: number) => {
        const key = lineKey(item);
        setUpdatingKey(key);
        router.put(
            clientRoutes.cart.update,
            {
                product_id: item.product_id,
                variant_id: item.variant_id,
                quantity,
            },
            {
                preserveScroll: true,
                onFinish: () => setUpdatingKey(null),
            },
        );
    };

    const removeItem = (item: CartItem) => {
        const key = lineKey(item);
        setUpdatingKey(key);
        router.delete(clientRoutes.cart.destroy, {
            data: {
                product_id: item.product_id,
                variant_id: item.variant_id,
            },
            preserveScroll: true,
            onFinish: () => setUpdatingKey(null),
        });
    };

    const isDrawer = variant === 'drawer';

    return (
        <div
            className={
                isDrawer
                    ? ''
                    : `rounded-xl border border-storefront-border bg-storefront-card ${compact ? 'p-4' : 'p-5 shadow-sm'}`
            }
        >
            {!isDrawer && (
                <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                        <ShoppingBag className="size-4 text-storefront-fg" aria-hidden />
                        <h3 className="text-sm font-semibold text-storefront-fg">
                            Votre commande ({cart.line_count} produit{cart.line_count > 1 ? 's' : ''})
                        </h3>
                    </div>
                    {!compact && (
                        <Link
                            href={clientRoutes.cart.index}
                            className="text-xs font-medium text-storefront-muted transition-colors hover:text-storefront-fg"
                        >
                            Voir tout
                        </Link>
                    )}
                </div>
            )}

            <div className="space-y-4">
                {cart.items.map((item) => {
                    const key = lineKey(item);
                    const busy = updatingKey === key || checkoutProcessing;

                    return (
                        <div key={key} className="rounded-lg border border-storefront-border/80 bg-storefront-bg/50 p-3">
                            <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                    <Link
                                        href={`/produits/${item.product_slug}`}
                                        onClick={onProductClick}
                                        className="truncate text-sm font-medium text-storefront-fg hover:underline"
                                    >
                                        {item.product_name}
                                    </Link>
                                    {item.variant_label ? (
                                        <p className="mt-0.5 text-xs text-storefront-muted">{item.variant_label}</p>
                                    ) : null}
                                    <p className="mt-0.5 font-mono text-[11px] text-storefront-muted">{item.sku}</p>
                                </div>
                                <button
                                    type="button"
                                    disabled={busy}
                                    onClick={() => removeItem(item)}
                                    className="shrink-0 cursor-pointer rounded-md p-1.5 text-storefront-muted transition-colors hover:bg-storefront-card hover:text-red-600 disabled:opacity-50"
                                    aria-label={`Retirer ${item.product_name}`}
                                >
                                    <Trash2 className="size-4" />
                                </button>
                            </div>

                            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <QuantityStepper
                                    value={item.quantity}
                                    onChange={(qty) => updateQuantity(item, qty)}
                                    min={1}
                                    max={item.max_quantity}
                                    disabled={busy}
                                />
                                <div className="text-right">
                                    <p className="text-sm font-semibold tabular-nums text-storefront-fg">
                                        {formatMoney(item.line_total)} HT
                                    </p>
                                    <p className="text-[11px] tabular-nums text-storefront-muted">
                                        {formatMoney(item.unit_price)} / unite
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={`border-t border-storefront-border pt-4 ${isDrawer ? 'sticky bottom-0 bg-storefront-bg' : 'mt-5'}`}>
                <div className="flex items-end justify-between gap-3">
                    <div>
                        <p className="text-xs text-storefront-muted">{cart.count} unite{cart.count > 1 ? 's' : ''} au total</p>
                        <p className="mt-1 text-xl font-semibold tabular-nums text-storefront-fg">
                            {formatMoney(cart.subtotal_ht)} HT
                        </p>
                        <p className="text-xs tabular-nums text-storefront-muted">{formatMoney(subtotalTtc)} TTC</p>
                    </div>
                </div>

                {onCheckout ? (
                    <StorefrontButton
                        type="button"
                        className="mt-4 w-full"
                        disabled={checkoutProcessing || updatingKey !== null}
                        onClick={onCheckout}
                    >
                        {checkoutProcessing ? 'Validation...' : 'Valider la commande'}
                    </StorefrontButton>
                ) : (
                    <StorefrontButtonLink href={clientRoutes.cart.index} className="w-full mt-4">
                        Valider la commande
                    </StorefrontButtonLink>
                )}
            </div>
        </div>
    );
}
