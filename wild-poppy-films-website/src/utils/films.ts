import { films } from "@/data";
import { Film } from "@/_types/common";

/**
 * Returns the film with the given slug, or undefined if there is no such film.
 * Callers rendering a route should pass undefined on to notFound() rather than
 * substituting another film - an unknown slug must 404, not silently show the
 * wrong page under a 200.
 */
export function getFilmBySlug(slug: string): Film | undefined {
    return films.find((film) => film.slug === slug);
}

export function getAllFilmSlugs(): string[] {
    return films.map((film) => film.slug);
}
