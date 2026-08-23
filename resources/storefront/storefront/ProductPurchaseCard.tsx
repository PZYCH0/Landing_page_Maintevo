import QuantityStepper from '@/Components/storefront/QuantityStepper';
import ProductPurchaseTrust from '@/Components/storefront/ProductPurchaseTrust';
import { StorefrontButton, StorefrontButtonLink } from '@/Components/storefront/StorefrontButton';
import { formatMoney } from '@/Components/ui';
import { priceWithVat } from '@/lib/pricingUtils';

export default function ProductPurchaseCard({
    quantity,
    onQuantityChange,
    maxQuantity,
    unitPriceHt,
    vatRate,
    tierLabel,
    onAddToQuote,
    onAddToOrder,
    adding = false,
    addingQuote = false,
}: {
    quantity: number;
    onQuantityChange: (qty: number) => void;
    maxQuantity: number;
    unitPriceHt: number;
    vatRate: number;
    tierLabel?: string | null;
    onAddToQuote: () => void;
    onAddToOrder: () => void;
    adding?: boolean;
    addingQuote?: boolean;
}) {
    const lineTotalHt = unitPriceHt * quantity;
    const lineTotalTtc = priceWithVat(lineTotalHt, vatRate);

    return (
        <div className="rounded-xl border border-storefront-border bg-storefront-card p-5 shadow-sm">
            <QuantityStepper
                value={quantity}
                onChange={onQuantityChange}
                min={1}
                max={maxQuantity}
                disabled={adding}
            />

            <div className="mt-5 border-t border-storefront-border pt-4">
                <p className="text-sm text-storefront-muted">
                    {quantity} unite{quantity > 1 ? 's' : ''} × {formatMoney(unitPriceHt)} HT
                </p>
                <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
                    <div>
                        <p className="text-2xl font-semibold tracking-tight tabular-nums text-storefront-fg sm:text-3xl">
                            {formatMoney(lineTotalHt)} HT
                        </p>
                        <p className="mt-0.5 text-xs tabular-nums text-storefront-muted">
                            {formatMoney(lineTotalTtc)} TTC
                        </p>
                    </div>
                    {tierLabel ? (
                        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                            {tierLabel}
                        </span>
                    ) : null}
                </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <StorefrontButton
                    type="button"
                    className="w-full"
                    disabled={adding}
                    onClick={onAddToOrder}
                >
                    {adding ? 'Ajout...' : 'Ajouter a la commande'}
                </StorefrontButton>
                <StorefrontButton
                    type="button"
                    variant="outline"
                    className="w-full"
                    disabled={addingQuote}
                    onClick={onAddToQuote}
                >
                    {addingQuote ? 'Ajout...' : 'Ajouter au devis'}
                </StorefrontButton>
            </div>

            <ProductPurchaseTrust />
        </div>
    );
}
