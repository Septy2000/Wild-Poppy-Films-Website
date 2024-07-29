import { StaticImageData } from "next/image";

export type HomeHeroFilm = {
    title: string;
    year: string;
    images: {
        mobile: StaticImageData[];
        desktop: StaticImageData[];
    };
};

export type FilmStatus = "available" | "in_production" | "coming_soon";
export type FilterOptions = "all" | "available" | "coming_soon";

export type Film = {
    id: number;
    slug: string;
    title: string;
    year: string;
    genre: string;
    type: string;
    status: FilmStatus;
    production: string[];
    writer?: string[];
    link?: string;
    cover?: StaticImageData[];
};
