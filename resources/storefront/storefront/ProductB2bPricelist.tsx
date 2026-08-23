import { formatMoney } from '@/Components/ui';
import { priceWithVat, tierIndexForQuantity } from '@/lib/pricingUtils';
import { Check } from 'lucide-react';

export interface PriceTier {
    min_quantity: number;
    max_quantity: number | null;
    unit_price: number;
    saving_percent: number | null;
    recommended: boolean;
}

function formatVolumeRange(min: number, max: number | null): string {
    if (max === null) {
        return `${min}+ unites`;
    }
    if (min === max) {
        return `${min} unite${min > 1 ? 's' : ''}`;
    }
    return `${min} – ${max} unites`;
}

function PriceWithTtc({ amountHt, vatRate, size = 'md' }: { amountHt: number; vatRate: number; size?: 'md' | 'lg' }) {
    const ttc = priceWithVat(amountHt, vatRate);

    return (
        <div className="text-right">
            <span className={size === 'lg' ? 'text-3xl font-semibold tracking-tight tabular-nums text-storefront-fg' : 'text-sm font-semibold tabular-nums text-storefront-fg'}>
                {formatMoney(amountHt)}
            </span>
            <span className="mt-0.5 block text-[11px] tabular-nums text-storefront-muted">
                {formatMoney(ttc)} TTC
            </span>
        </div>
    );
}

export default function ProductB2bPricelist({
    tiers,
    label,
    isClient,
    activeQuantity,
    vatRate = 20,
}: {
    tiers: PriceTier[];
    label: string;
    isClient: boolean;
    activeQuantity?: number;
    vatRate?: number;
}) {
    if (tiers.length === 0) return null;

    const activeTierIndex =
        activeQuantity != null && activeQuantity > 0 ? tierIndexForQuantity(tiers, activeQuantity) : -1;

    if (tiers.length === 1) {
        const tier = tiers[0];
        const isActive = activeTierIndex === 0;

        return (
            <div
                className={`rounded-xl border bg-storefront-card px-4 py-5 sm:px-5 ${
                    isActive ? 'border-storefront-fg ring-1 ring-storefront-fg/10' : 'border-storefront-border'
                }`}
            >
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h3 className="text-sm font-semibold text-storefront-fg">{label}</h3>
                        <p className="mt-1 text-xs text-storefront-muted">
                            {tier.max_quantity
                                ? formatVolumeRange(tier.min_quantity, tier.max_quantity)
                                : 'Toutes quantites'}
                        </p>
                    </div>
                    <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-storefront-muted">
                        HT / TTC
                    </span>
                </div>
                <div className="mt-4">
                    <PriceWithTtc amountHt={tier.unit_price} vatRate={vatRate} size="lg" />
                </div>
                {tier.saving_percent ? (
                    <p className="mt-2 text-sm text-emerald-700">
                        Remise contractuelle : -{tier.saving_percent}% vs prix catalogue
                    </p>
                ) : (
                    <p className="mt-2 text-sm text-storefront-muted">
                        {isClient ? 'Prix catalogue standard' : 'Prix catalogue public'}
                    </p>
                )}
                {!isClient && (
                    <p className="mt-4 border-t border-storefront-border pt-3 text-xs leading-relaxed text-storefront-muted">
                        Connectez-vous avec un compte B2B pour voir vos tarifs negocies.
                    </p>
                )}
            </div>
        );
    }

    return (
        <div className="overflow-hidden rounded-xl border border-storefront-border bg-storefront-card">
            <div className="flex items-center justify-between border-b border-storefront-border px-4 py-3 sm:px-5">
                <h3 className="text-sm font-semibold text-storefront-fg">{label}</h3>
                <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-storefront-muted">
                    HT / TTC
                </span>
            </div>

            <div className="divide-y divide-storefront-border">
                <div className="grid grid-cols-[1fr_auto_auto] gap-3 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-storefront-muted sm:px-5">
                    <span>Volume</span>
                    <span className="text-right">Prix unitaire</span>
                    <span className="w-16 text-right sm:w-20">Remise</span>
                </div>

                {tiers.map((tier, index) => {
                    const isActive = index === activeTierIndex;

                    return (
                        <div
                            key={`${tier.min_quantity}-${tier.max_quantity}`}
                            className={cnTierRow(isActive)}
                        >
                            <div className="flex items-center gap-2.5">
                                <span className="flex size-4 shrink-0 items-center justify-center" aria-hidden>
                                    {isActive && <Check className="size-4 text-storefront-fg" />}
                                </span>
                                <span
                                    className={`text-sm ${isActive ? 'font-medium text-storefront-fg' : 'text-storefront-muted'}`}
                                >
                                    {formatVolumeRange(tier.min_quantity, tier.max_quantity)}
                                </span>
                            </div>
                            <PriceWithTtc amountHt={tier.unit_price} vatRate={vatRate} />
                            <span className="w-16 text-right text-xs font-medium sm:w-20">
                                {tier.saving_percent ? (
                                    <span className="text-emerald-700">-{tier.saving_percent}%</span>
                                ) : (
                                    <span className="text-storefront-muted">—</span>
                                )}
                            </span>
                        </div>
                    );
                })}
            </div>

            {activeQuantity != null && activeQuantity > 0 && activeTierIndex >= 0 && (
                <p className="border-t border-storefront-border px-4 py-3 text-xs text-storefront-muted sm:px-5">
                    Palier actif pour <strong className="text-storefront-fg">{activeQuantity}</strong> unite
                    {activeQuantity > 1 ? 's' : ''} selectionnee{activeQuantity > 1 ? 's' : ''}.
                </p>
            )}
        </div>
    );
}

function cnTierRow(isActive: boolean): string {
    return [
        'grid grid-cols-[1fr_auto_auto] items-center gap-3 px-4 py-3.5 sm:px-5 transition-colors duration-200',
        isActive ? 'bg-storefront-bg' : '',
    ]
        .filter(Boolean)
        .join(' ');
}
