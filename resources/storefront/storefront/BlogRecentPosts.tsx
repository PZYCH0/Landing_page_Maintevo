import { blogCategoryForIndex, formatBlogDate } from '@/lib/blogUtils';
import { storefrontImage } from '@/lib/storefront';
import { storefrontMedia } from '@/lib/storefrontMedia';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

export interface RecentPost {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    cover_image: string | null;
    published_at: string | null;
}

const fallbackImages = [
    storefrontMedia.categories.workwear.url,
    storefrontMedia.catalogFlipbook.url,
    storefrontMedia.printing.url,
    storefrontMedia.logistics.url,
    storefrontMedia.categories.blanks.url,
];

export default function BlogRecentPosts({ posts }: { posts: RecentPost[] }) {
    if (posts.length === 0) return null;

    return (
        <aside aria-labelledby="blog-recent-heading">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-storefront-muted">
                A lire aussi
            </p>
            <h2
                id="blog-recent-heading"
                className="mt-2 text-lg font-semibold tracking-tight text-storefront-fg"
            >
                Articles recents
            </h2>

            <ul className="mt-6 space-y-1">
                {posts.map((recent, i) => (
                    <li key={recent.id}>
                        <Link
                            href={`/blog/${recent.slug}`}
                            className="group flex cursor-pointer items-start gap-3.5 rounded-xl p-3 transition-colors duration-200 hover:bg-storefront-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storefront-fg/15"
                        >
                            <div className="size-[4.25rem] shrink-0 overflow-hidden rounded-lg bg-storefront-bg ring-1 ring-storefront-border transition-shadow duration-200 group-hover:ring-storefront-fg/20">
                                <img
                                    src={storefrontImage(recent.cover_image, fallbackImages[i % fallbackImages.length])}
                                    alt=""
                                    className="size-full object-cover"
                                />
                            </div>

                            <div className="min-w-0 flex-1 pt-0.5">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-storefront-muted">
                                    {blogCategoryForIndex(i)}
                                </p>
                                <p className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-storefront-fg">
                                    {recent.title}
                                </p>
                                {recent.excerpt && (
                                    <p className="mt-1 line-clamp-1 text-xs leading-relaxed text-storefront-muted">
                                        {recent.excerpt}
                                    </p>
                                )}
                                {recent.published_at && (
                                    <time
                                        dateTime={recent.published_at}
                                        className="mt-2 block text-[10px] font-medium uppercase tracking-[0.1em] text-storefront-muted/80"
                                    >
                                        {formatBlogDate(recent.published_at)}
                                    </time>
                                )}
                            </div>

                            <ArrowRight
                                className="mt-1 size-4 shrink-0 text-storefront-muted opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 motion-reduce:translate-x-0 motion-reduce:opacity-100"
                                aria-hidden
                            />
                        </Link>
                    </li>
                ))}
            </ul>

            <Link
                href="/blog"
                className="mt-5 inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-storefront-fg transition-colors duration-200 hover:text-storefront-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storefront-fg/15 focus-visible:ring-offset-2"
            >
                Voir tout le blog
                <ArrowRight className="size-3.5" aria-hidden />
            </Link>
        </aside>
    );
}
