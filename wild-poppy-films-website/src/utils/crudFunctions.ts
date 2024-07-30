import { films } from "@/data";
import { Film } from "@/_types/common";

export function getFilmBySlug(slug: string): Film {
    const foundFilm = films.find((film) => film.slug === slug);
    return foundFilm ?? films[0];
}
