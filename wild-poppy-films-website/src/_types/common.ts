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

export type Film = {
    title: string;
    year: string;
    genre?: string;
    production: string[];
    status: FilmStatus;
    link?: string;
    cover?: StaticImageData[];
};
