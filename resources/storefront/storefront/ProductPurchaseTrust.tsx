import { RefreshCw, Shield, Truck } from 'lucide-react';

const items = [
    { icon: Truck, label: 'Livraison offerte des 2 000 MAD' },
    { icon: Shield, label: 'Conditions Net-30 disponibles' },
    { icon: RefreshCw, label: 'Stock Odoo en temps reel' },
];

export default function ProductPurchaseTrust() {
    return (
        <div className="mt-4 flex flex-col gap-2.5 border-t border-storefront-border pt-4 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
            {items.map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-xs text-storefront-muted">
                    <item.icon className="size-3.5 shrink-0" strokeWidth={1.75} aria-hidden />
                    <span>{item.label}</span>
                </div>
            ))}
        </div>
    );
}
