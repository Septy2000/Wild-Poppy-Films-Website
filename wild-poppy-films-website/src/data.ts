import { Film } from "./_types/common";

export const films: Film[] = [
    {
        id: 1,
        slug: "ouroboria",
        title: "Ouroboria",
        year: "2022",
        genre: "THRILLER",
        production: ["MIRUNA STRĂUȚ"],
        status: "coming_soon",
        type: "SHORT FILM",
        link: undefined,
        cover: undefined,
    },
    {
        id: 2,
        slug: "no-names",
        title: "No Names",
        year: "2023",
        genre: "DRAMA",
        production: ['ANA "BUJIE" PÂRVU'],
        status: "in_production",
        type: "SHORT FILM",
        link: undefined,
        cover: undefined,
    },
    {
        id: 3,
        slug: "the-switchboard-sonatta",
        title: "The Switchboard Sonatta",
        year: "2024",
        genre: "COMEDY",
        production: ["DELIA DUMONT", "DARIA POPESCO"],
        status: "available",
        type: "SHORT FILM",
        link: "https://www.youtube.com",
        cover: undefined,
    },
];
