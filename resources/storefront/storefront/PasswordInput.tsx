import { cn } from '@/lib/storefront';
import { Eye, EyeOff } from 'lucide-react';
import { InputHTMLAttributes, useState } from 'react';

const baseClass =
    'h-11 w-full rounded-lg border border-storefront-border bg-white py-2 pl-3 pr-11 text-sm text-storefront-fg transition-colors focus:border-storefront-fg/30 focus:outline-none focus:ring-2 focus:ring-storefront-fg/10';

export default function PasswordInput({
    className,
    id,
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    const [visible, setVisible] = useState(false);

    return (
        <div className="relative">
            <input
                {...props}
                id={id}
                type={visible ? 'text' : 'password'}
                className={cn(baseClass, className)}
            />
            <button
                type="button"
                onClick={() => setVisible((current) => !current)}
                className="absolute right-2 top-1/2 inline-flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md text-storefront-muted transition-colors hover:bg-storefront-bg hover:text-storefront-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storefront-fg/20"
                aria-label={visible ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                aria-controls={id}
                aria-pressed={visible}
            >
                {visible ? <EyeOff className="size-4" aria-hidden /> : <Eye className="size-4" aria-hidden />}
            </button>
        </div>
    );
}
