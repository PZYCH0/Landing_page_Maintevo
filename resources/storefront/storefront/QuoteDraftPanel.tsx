import QuantityStepper from '@/Components/storefront/QuantityStepper';
import { clientRoutes } from '@/lib/adminRoutes';
import { Link, router } from '@inertiajs/react';
import { FileText, Trash2 } from 'lucide-react';
import { useState } from 'react';

export interface QuoteCartItem {
    product_id: number;
    variant_id: number | null;
    product_name: string;
    product_slug: string;
    variant_label: string | null;
    sku: string;
    quantity: number;
}

export interface QuoteCartSummary {
    count: number;
    line_count: number;
    items: QuoteCartItem[];
}

export default function QuoteDraftPanel({
    quoteCart,
    variant = 'card',
    onProductClick,
    onFinalizeClick,
}: {
    quoteCart: QuoteCartSummary;
    variant?: 'card' | 'drawer';
    onProductClick?: () => void;
    onFinalizeClick?: () => void;
}) {
    const [updatingKey, setUpdatingKey] = useState<string | null>(null);

    if (quoteCart.items.length === 0) {
        return null;
    }

    const lineKey = (item: QuoteCartItem) => `${item.product_id}:${item.variant_id ?? 0}`;
    const isDrawer = variant === 'drawer';

    const updateQuantity = (item: QuoteCartItem, quantity: number) => {
        const key = lineKey(item);
        setUpdatingKey(key);
        router.put(
            clientRoutes.quoteCart.update,
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

    const removeItem = (item: QuoteCartItem) => {
        const key = lineKey(item);
        setUpdatingKey(key);
        router.delete(clientRoutes.quoteCart.destroy, {
            data: {
                product_id: item.product_id,
                variant_id: item.variant_id,
            },
            preserveScroll: true,
            onFinish: () => setUpdatingKey(null),
        });
    };

    return (
        <div className={isDrawer ? '' : 'rounded-xl border border-storefront-border bg-storefront-card p-5 shadow-sm'}>
            {!isDrawer && (
                <div className="mb-4 flex items-center gap-2">
                    <FileText className="size-4 text-storefront-fg" aria-hidden />
                    <h3 className="text-sm font-semibold text-storefront-fg">
                        Votre devis ({quoteCart.line_count} produit{quoteCart.line_count > 1 ? 's' : ''})
                    </h3>
                </div>
            )}

            <div className="space-y-4">
                {quoteCart.items.map((item) => {
                    const key = lineKey(item);
                    const busy = updatingKey === key;

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

                            <div className="mt-3">
                                <QuantityStepper
                                    value={item.quantity}
                                    onChange={(qty) => updateQuantity(item, qty)}
                                    min={1}
                                    disabled={busy}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={`border-t border-storefront-border pt-4 ${isDrawer ? 'mt-4' : 'mt-5'}`}>
                <p className="text-xs text-storefront-muted">
                    {quoteCart.count} unite{quoteCart.count > 1 ? 's' : ''} au total
                </p>
                <Link
                    href={clientRoutes.quotes.create}
                    onClick={onFinalizeClick}
                    className="mt-4 inline-flex h-9 w-full cursor-pointer items-center justify-center rounded-lg bg-storefront-primary px-4 text-sm font-medium text-storefront-primary-fg transition-colors hover:bg-storefront-primary/90"
                >
                    Finaliser la demande de devis
                </Link>
            </div>
        </div>
    );
}
