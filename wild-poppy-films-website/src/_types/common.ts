import { StaticImageData } from "next/image";

export type FilmStatus = "available" | "in_production" | "coming_soon";
export type FilterOptions = "all" | "available" | "coming_soon";

export type Film = {
    slug: string;
    title: string;
    release_year: string;
    runtime?: string;
    genre: string;
    type: string;
    status: FilmStatus;
    production: {
        writer: string[];
        producer: string[];
        director: string[];
        starring: string[];
    };
    youtube_link?: string;
    teaser_youtube_link?: string;
    cover: StaticImageData;
    cover_small: StaticImageData;
    description: string;
    gallery: StaticImageData[];
};

export type News = {
    id: number;
    content: string;
    cover: StaticImageData;
    hyperlink: string;
};

export type TeamMember = {
    id: number;
    name: string;
    roles: string[];
    location: string;
    socials: {
        imdb?: string;
        instagram?: string;
    };
    icon: StaticImageData;
    description?: string;
};
