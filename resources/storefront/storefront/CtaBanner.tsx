import { StorefrontButtonLink } from '@/Components/storefront/StorefrontButton';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner() {
    return (
        <section id="contact" className="scroll-mt-[var(--storefront-header-total)] border-b border-storefront-border">
            <div className="storefront-section storefront-container">
                <div className="flex flex-col items-start gap-8 rounded-xl border border-storefront-border bg-storefront-primary p-10 text-storefront-primary-fg lg:flex-row lg:items-center lg:justify-between lg:p-14">
                    <div className="max-w-xl">
                        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                            Ouvrez un compte professionnel en quelques minutes.
                        </h2>
                        <p className="mt-4 text-pretty leading-relaxed text-storefront-primary-fg/70">
                            Soumettez vos informations societe et ICE. Apres validation : tarifs dedies, ligne de credit et acces au catalogue complet.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <StorefrontButtonLink
                            href="/inscription-b2b"
                            size="lg"
                            variant="secondary"
                            className="group bg-storefront-primary-fg text-storefront-primary hover:bg-storefront-primary-fg/90"
                        >
                            Demander un compte
                            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </StorefrontButtonLink>
                        <StorefrontButtonLink
                            href="/produits"
                            size="lg"
                            variant="outline"
                            className="border-storefront-primary-fg/30 bg-transparent text-storefront-primary-fg hover:bg-storefront-primary-fg/10"
                        >
                            Parcourir le catalogue
                        </StorefrontButtonLink>
                    </div>
                </div>
            </div>
        </section>
    );
}
