import { Film } from "@/_types/common";
import { absoluteUrl, siteConfig } from "@/config/site";

/**
 * schema.org descriptions of the company and its films. Google uses these to
 * decide whether the site is eligible for rich results.
 */

export function organizationSchema(): Record<string, unknown> {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        email: siteConfig.email,
        logo: absoluteUrl("/icon.png"),
        sameAs: Object.values(siteConfig.socials),
    };
}

export function filmSchema(film: Film): Record<string, unknown> {
    const toPeople = (names: string[]) => names.map((name) => ({ "@type": "Person", name }));

    return {
        "@context": "https://schema.org",
        "@type": "Movie",
        name: film.title,
        url: absoluteUrl(`/films/${film.slug}`),
        description: film.description.trim(),
        image: absoluteUrl(film.cover.src),
        genre: film.genre.split(",").map((genre) => genre.trim()),
        dateCreated: film.release_year,
        director: toPeople(film.production.director),
        producer: toPeople(film.production.producer),
        author: toPeople(film.production.writer),
        actor: toPeople(film.production.starring),
        ...(film.runtime ? { duration: isoDuration(film.runtime) } : {}),
        productionCompany: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
        },
    };
}

/** Converts a runtime like "15m" or "1h 30m" into an ISO 8601 duration ("PT15M"). */
function isoDuration(runtime: string): string | undefined {
    const hours = runtime.match(/(\d+)\s*h/i)?.[1];
    const minutes = runtime.match(/(\d+)\s*m/i)?.[1];

    if (!hours && !minutes) return undefined;

    return `PT${hours ? `${hours}H` : ""}${minutes ? `${minutes}M` : ""}`;
}
