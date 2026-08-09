import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";
import { getAllFilmSlugs } from "@/utils/films";

/**
 * Film entries are derived from src/data.ts, so adding a film to that file also
 * adds it to the sitemap - there is no second list to keep in sync.
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    const staticRoutes: { path: string; priority: number }[] = [
        { path: "/", priority: 1 },
        { path: "/films", priority: 0.9 },
        { path: "/our-team", priority: 0.7 },
        { path: "/contact-us", priority: 0.6 },
        { path: "/support-us", priority: 0.6 },
    ];

    return [
        ...staticRoutes.map(({ path, priority }) => ({
            url: absoluteUrl(path),
            lastModified,
            changeFrequency: "monthly" as const,
            priority,
        })),
        ...getAllFilmSlugs().map((slug) => ({
            url: absoluteUrl(`/films/${slug}`),
            lastModified,
            changeFrequency: "monthly" as const,
            priority: 0.8,
        })),
    ];
}
