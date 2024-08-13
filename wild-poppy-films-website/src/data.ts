import { Film, News, TeamMember } from "./_types/common";
import OuroboriaCover from "@/images/films/ouroboria/cover.png";

export const films: Film[] = [
    {
        id: 1,
        slug: "ouroboria",
        title: "OUROBORIA",
        release_year: "2022",
        runtime: "2h 30m",
        genre: "THRILLER",
        type: "SHORT FILM",
        status: "coming_soon",
        production: {
            writer: ["MIRUNA STRĂUȚ"],
            executive_producer: ["MIRUNA STRĂUȚ"],
            producer: ["MIRUNA STRĂUȚ"],
            director: ["MIRUNA STRĂUȚ"],
            starring: ["MIRUNA STRĂUȚ"],
            distributor: ["MIRUNA STRĂUȚ"],
        },
        youtube_link: undefined,
        teaser_youtube_link: "https://www.youtube.com",
        cover: OuroboriaCover,
        cover_small: OuroboriaCover,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        gallery: [OuroboriaCover, OuroboriaCover, OuroboriaCover, OuroboriaCover, OuroboriaCover],
    },
    {
        id: 2,
        slug: "no-names",
        title: "NO NAMES",
        release_year: "2023",
        runtime: "2h 30m",
        genre: "DRAMA",
        type: "SHORT FILM",
        status: "in_production",
        production: {
            writer: ["MIRUNA STRĂUȚ"],
            executive_producer: ["MIRUNA STRĂUȚ"],
            producer: ["MIRUNA STRĂUȚ"],
            director: ["MIRUNA STRĂUȚ"],
            starring: ["MIRUNA STRĂUȚ"],
            distributor: ["MIRUNA STRĂUȚ"],
        },
        youtube_link: undefined,
        teaser_youtube_link: undefined,
        cover: OuroboriaCover,
        cover_small: OuroboriaCover,
        description: `In the heart of Romania, a mother and her young son find themselves trapped in a remote village controlled by a malevolent cult. As they struggle to break free from the grip of the cult's ominous rituals and dark secrets, the duo must navigate the treacherous terrain and fight to reclaim their lives. This folk thriller combines elements of suspense, horror, and the indomitable power of a mother's love in the face of evil.`,
        gallery: [OuroboriaCover, OuroboriaCover, OuroboriaCover, OuroboriaCover, OuroboriaCover],
    },
    {
        id: 3,
        slug: "the-switchboard-sonatta",
        title: "THE SWITCHBOARD SONATTA",
        release_year: "2024",
        runtime: "2h 30m",
        genre: "COMEDY",
        type: "SHORT FILM",
        status: "available",
        production: {
            writer: ["MIRUNA STRĂUȚ"],
            executive_producer: ["MIRUNA STRĂUȚ"],
            producer: ["MIRUNA STRĂUȚ"],
            director: ["MIRUNA STRĂUȚ"],
            starring: ["MIRUNA STRĂUȚ"],
            distributor: ["MIRUNA STRĂUȚ"],
        },
        youtube_link: "https://www.youtube.com",
        teaser_youtube_link: "https://www.youtube.com",
        cover: OuroboriaCover,
        cover_small: OuroboriaCover,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        gallery: [OuroboriaCover, OuroboriaCover, OuroboriaCover, OuroboriaCover, OuroboriaCover],
    },
];

export const filmsNews: News[] = [
    {
        id: 1,
        content: `Ouroboria: A Romanian Folk Thriller That Will Keep You on the Edge of Your Seat...`,
        cover: OuroboriaCover,
        hyperlink: "/films/ouroboria",
    },
    {
        id: 2,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        cover: OuroboriaCover,
        hyperlink: "/films/no-names",
    },
    {
        id: 3,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        cover: OuroboriaCover,
        hyperlink: "/films/the-switchboard-sonatta",
    },
];

export const companySocialLinks = {
    instagram: "https://www.instagram.com",
    x: "https://www.x.com",
    facebook: "https://www.facebook.com",
    youtube: "https://www.youtube.com",
    linkedin: "https://www.linkedin.com",
};

export const defaultPagesLinks = {
    home: "/",
    films: "/films?page=1&filter=all",
    ourTeam: "/our-team",
    contact: "/contact-us",
    supportUs: "/support-us",
};

export const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Daria Popesco",
        roles: ["PRODUCER", "CO-FOUNDER"],
        location: "LONDON, UK",
        socials: {
            imdb: "https://www.imdb.com",
            instagram: "https://www.instagram.com",
        },
        icon: OuroboriaCover,
        description: `Daria has been captivating audiences with her unique storytelling style. Her films often explore themes of identity, belonging and human connection, and her work has been recognized at prestigious festivals around the world.`,
    },
    {
        id: 2,
        name: "Delia Dumont",
        roles: ["DIRECTOR", "CO-FOUNDER"],
        location: "NEW YORK CITY, USA",
        socials: {
            imdb: "https://www.imdb.com",
            instagram: "https://www.instagram.com",
        },
        icon: OuroboriaCover,
        description:
            "Delia has been captivating audiences with her unique storytelling style. Her films often explore themes of identity, belonging and human connection, and her work has been recognized at prestigious festivals around the world.",
    },
    {
        id: 3,
        name: "Miruna Străuț",
        roles: ["PRODUCER", "SCREENWRITER"],
        location: "NEW YORK CITY, USA",
        socials: {
            imdb: "https://www.imdb.com",
            instagram: "https://www.instagram.com",
        },
        icon: OuroboriaCover,
        description:
            "Miruna has been captivating audiences with her unique storytelling style. Her films often explore themes of identity, belonging and human connection, and her work has been recognized at prestigious festivals around the world.",
    },
    {
        id: 4,
        name: "Ana Pârvu",
        roles: ["ACTRESS", "SCREENWRITER"],
        location: "LONDON, UK",
        socials: {
            imdb: "https://www.imdb.com",
            instagram: "https://www.instagram.com",
        },
        icon: OuroboriaCover,
        description:
            "Ana has been captivating audiences with her unique storytelling style. Her films often explore themes of identity, belonging and human connection, and her work has been recognized at prestigious festivals around the world.",
    },
];
