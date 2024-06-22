import { StaticImageData } from "next/image";

export type HomeHeroMovie = {
    title: string;
    year: string;
    images: {
        mobile: StaticImageData[];
        desktop: StaticImageData[];
    };
};
