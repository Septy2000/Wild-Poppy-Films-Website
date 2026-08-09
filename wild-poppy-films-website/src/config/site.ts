/**
 * Single source of truth for anything that needs the public URL or the company's
 * identity: metadata, Open Graph cards, the sitemap and JSON-LD.
 *
 * Set NEXT_PUBLIC_SITE_URL in the Vercel project settings to override it.
 *
 * The host must be the www one: the apex domain 308-redirects to www, so an apex
 * canonical would point every page at a URL that redirects somewhere else.
 */
export const siteConfig = {
    name: "Wild Poppy Films",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.wildpoppyfilms.com",
    description:
        "Wild Poppy Films is an independent film production company making short films and documentaries out of London and New York.",
    email: "contact@wildpoppyfilms.com",
    locale: "en_GB",
    socials: {
        instagram: "https://www.instagram.com/wildpoppyfilms",
        tiktok: "https://www.tiktok.com/@wildpoppyfilms",
        youtube: "https://www.youtube.com/@ouroboria6003",
    },
} as const;

export function absoluteUrl(path: string): string {
    return new URL(path, siteConfig.url).toString();
}
