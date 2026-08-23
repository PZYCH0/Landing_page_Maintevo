export default function StockBadge({ inStock, quantity }: { inStock: boolean; quantity?: number }) {
    if (inStock) {
        return (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />
                En stock
                {quantity !== undefined && (
                    <span className="font-mono text-[11px] text-emerald-600/90">
                        · {quantity.toLocaleString('fr-FR')} unites
                    </span>
                )}
            </span>
        );
    }

    return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700">
            <span className="size-1.5 rounded-full bg-amber-500" aria-hidden />
            Rupture
        </span>
    );
}
