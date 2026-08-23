import { Minus, Plus } from 'lucide-react';

export default function QuantityStepper({
    value,
    onChange,
    min = 1,
    max,
    label = 'Quantite',
    disabled = false,
}: {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    label?: string;
    disabled?: boolean;
}) {
    const clamp = (next: number) => {
        let v = Math.max(min, next);
        if (max != null) {
            v = Math.min(max, v);
        }
        return v;
    };

    return (
        <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-medium text-storefront-fg">{label}</span>
            <div className="inline-flex items-center overflow-hidden rounded-lg border border-storefront-border bg-storefront-card">
                <button
                    type="button"
                    disabled={disabled || value <= min}
                    onClick={() => onChange(clamp(value - 1))}
                    className="flex size-9 cursor-pointer items-center justify-center text-storefront-muted transition-colors hover:bg-storefront-bg hover:text-storefront-fg disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Diminuer la quantite"
                >
                    <Minus className="size-4" />
                </button>
                <span className="min-w-[2.5rem] border-x border-storefront-border px-2 text-center text-sm font-semibold tabular-nums text-storefront-fg">
                    {value}
                </span>
                <button
                    type="button"
                    disabled={disabled || (max != null && value >= max)}
                    onClick={() => onChange(clamp(value + 1))}
                    className="flex size-9 cursor-pointer items-center justify-center text-storefront-muted transition-colors hover:bg-storefront-bg hover:text-storefront-fg disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Augmenter la quantite"
                >
                    <Plus className="size-4" />
                </button>
            </div>
        </div>
    );
}
