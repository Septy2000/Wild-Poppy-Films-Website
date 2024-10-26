import { Film, News, TeamMember } from "./_types/common";
import { StaticImageData } from "next/image";

// "Ouroboria" images
import OuroboriaCover1 from "@/images/films/ouroboria/cover_1.png";
import OuroboriaCover2 from "@/images/films/ouroboria/cover_2.jpg";
import OuroboriaCover3 from "@/images/films/ouroboria/cover_3.jpg";
import OuroboriaGallery1 from "@/images/films/ouroboria/photo_1.jpg";

// "Cutezatorii" images
import CutezatoriiCover1 from "@/images/films/cutezatorii/cutezatorii_cover_1.png";
import CutezatoriiCover2 from "@/images/films/cutezatorii/cutezatorii_cover_2.jpeg";
import CutezatoriiCover3 from "@/images/films/cutezatorii/cutezatorii_cover_3.jpeg";
import CutezatoriiGallery1 from "@/images/films/cutezatorii/cutezatorii_gallery_1.jpeg";
import CutezatoriiGallery2 from "@/images/films/cutezatorii/cutezatorii_gallery_2.jpeg";
import CutezatoriiGallery3 from "@/images/films/cutezatorii/cutezatorii_gallery_3.jpeg";

// "Hello only ends in goodbye" images
import HoeigCover1 from "@/images/films/hello-only-ends-in-goodbye/hoeig_cover_1.jpeg";
import HoeigCover2 from "@/images/films/hello-only-ends-in-goodbye/hoieg_cover_2.jpeg";
import HoeigCover3 from "@/images/films/hello-only-ends-in-goodbye/hoieg_cover_3.jpeg";
import HoeigGallery1 from "@/images/films/hello-only-ends-in-goodbye/hoieg_gallery_1.jpeg";
import HoeigGallery2 from "@/images/films/hello-only-ends-in-goodbye/hoieg_gallery_2.jpeg";
import HoeigGallery3 from "@/images/films/hello-only-ends-in-goodbye/hoieg_gallery_3.jpeg";
// "I can hear the skylark soaring" images

// "It's not that deep" images
import ItsNotThatDeepCover1 from "@/images/films/its-not-that-deep/its_not_that_deep_cover_1.jpg";

// "Memoirs of a dying fish" images
import MemoirsOfADyingFishCover1 from "@/images/films/memoirs-of-a-dying-fish/memoirs_of_a_dying_fish_cover_1.jpg";

// "No names" images
import NoNamesCover1 from "@/images/films/no-names/no_names_cover_1.jpg";
import NoNamesCover2 from "@/images/films/no-names/no_names_cover_2.jpg";
import NoNamesGallery1 from "@/images/films/no-names/no_names_gallery_1.jpg";
import NoNamesGallery2 from "@/images/films/no-names/no_names_gallery_2.jpg";

// "The beast was I" images
import TheBeastWasICover1 from "@/images/films/the-beast-was-i/the_beast_was_i_cover_1.jpg";

// "Bird in space" images
import BirdInSpaceCover1 from "@/images/films/bird-in-space/bird_in_space_cover_1.jpg";
import BirdInSpaceCover2 from "@/images/films/bird-in-space/bird_in_space_cover_2.jpg";
import BirdInSpaceCover3 from "@/images/films/bird-in-space/bird_in_space_cover_3.jpg";
import BirdInSpaceGallery1 from "@/images/films/bird-in-space/bird_in_space_gallery_1.jpg";
import BirdInSpaceGallery2 from "@/images/films/bird-in-space/bird_in_space_gallery_2.jpg";

export const films: Film[] = [
    {
        slug: "cutezatorii",
        title: "CUTEZATORII",
        release_year: "2025",
        runtime: "15m",
        genre: "COMEDY",
        type: "SHORT FILM",
        status: "in_production",
        production: {
            writer: ["MIRUNA STRĂUȚ"],
            producer: ["DELIA DUMONT, DARIA POPESCO"],
            director: ["MIRUNA STRĂUȚ"],
            starring: ["MIRUNA STRĂUȚ"],
        },
        youtube_link: undefined,
        teaser_youtube_link: undefined,
        cover: CutezatoriiCover3,
        cover_small: CutezatoriiCover3,
        description: `In the midst of summer's end, a group of 12-year-olds from the Romanian countryside embark on a day-long quest in search of a missing fawn. The world of Cutezatorii is one solely inhabited by children - kids who act as adults and do adult things in the absence of their parents. `,
        gallery: [
            CutezatoriiCover2,
            CutezatoriiCover3,
            CutezatoriiGallery2,

            CutezatoriiGallery1,
            CutezatoriiGallery3,
            CutezatoriiCover1,
        ],
    },
    {
        slug: "ouroboria",
        title: "OUROBORIA",
        release_year: "2022",
        runtime: undefined,
        genre: "THRILLER, FOLK HORROR",
        type: "SHORT FILM",
        status: "available",
        production: {
            writer: ["MIRUNA STRĂUȚ"],
            producer: ["DARIA POPESCO"],
            director: ["MIRUNA STRĂUȚ"],
            starring: ["SILVANA MIHAI"],
        },
        youtube_link: undefined,
        teaser_youtube_link: "https://youtu.be/mTTX46K6cEQ?feature=shared",
        cover: OuroboriaCover1,
        cover_small: OuroboriaCover2,
        description: `Following his uncle's mysterious death, a young man returns to his childhood home in a secluded village from the Carpathians.`,
        gallery: [OuroboriaCover1, OuroboriaGallery1, OuroboriaCover3, OuroboriaCover2],
    },

    {
        slug: "no-names",
        title: "NO NAMES",
        release_year: "2024",
        runtime: undefined,
        genre: "ROMANTIC COMEDY",
        type: "SHORT FILM",
        status: "available",
        production: {
            writer: ["ARTEMIS ADAMANTOPOULOU"],
            producer: ["DARIA POPESCO"],
            director: ["ARTEMIS ADAMANTOPOULOU"],
            starring: ["ANA PÂRVU", "LUKE MOTT"],
        },
        youtube_link: undefined,
        teaser_youtube_link: undefined,
        cover: NoNamesCover2,
        cover_small: NoNamesCover2,
        description: `Boy and Girl meet outside an off-license in London and choose to talk to each other. In doing so, they start letting their guard down, giving in to this fun, incomplete interaction among strangers.Since it’s been released, `,
        gallery: [NoNamesCover2, NoNamesGallery1, NoNamesGallery2, NoNamesCover1],
    },
    {
        slug: "bird-in-space",
        title: "BIRD IN SPACE",
        release_year: "2025",
        runtime: "10m",
        genre: "DRAMA",
        type: "SHORT FILM",
        status: "coming_soon",
        production: {
            writer: ["ANA PARVU"],
            producer: ["DARIA POPESCO"],
            director: ["DELIA DUMONT"],
            starring: [""],
        },
        youtube_link: "",
        teaser_youtube_link: "",
        cover: BirdInSpaceCover1,
        cover_small: BirdInSpaceCover2,
        description: `When each messy hotel room tells a story, a young maid gets caught in her own game, once she falls in love with a mysterious guest`,
        gallery: [
            BirdInSpaceCover1,
            BirdInSpaceCover2,
            BirdInSpaceCover3,
            BirdInSpaceGallery1,
            BirdInSpaceGallery2,
        ],
    },
    {
        slug: "hello-only-ends-in-goodbye",
        title: "HELLO ONLY ENDS IN GOODBYE",
        release_year: "2024",
        runtime: "10m",
        genre: "COMEDY",
        type: "SHORT FILM",
        status: "in_production",
        production: {
            writer: ["ANA PÂRVU"],
            producer: ["DARIA POPESCO"],
            director: ["ANA PÂRVU"],
            starring: ["CRINA VICTORIA ENE", "ELIZA ACROSOAIE"],
        },
        youtube_link: undefined,
        teaser_youtube_link: undefined,
        cover: HoeigCover2,
        cover_small: HoeigCover2,
        description: `Camelia, an expat living in London has to reconsider the prejudices she holds against her own heritage after a chance encounter with a distressed young Romanian immigrant. Can she overcome these biases to help her?`,
        gallery: [
            HoeigCover2,
            HoeigCover3,
            HoeigGallery1,
            HoeigCover1,
            HoeigGallery2,
            HoeigGallery3,
        ],
    },
    {
        slug: "the-beast-was-i",
        title: "THE BEAST WAS I",
        release_year: "2025",
        runtime: "30m",
        genre: "DRAMA",
        type: "SHORT FILM",
        status: "in_production",
        production: {
            writer: ["MIRUNA STRĂUȚ"],
            producer: ["DARIA POPESCO"],
            director: ["MIRUNA STRĂUȚ"],
            starring: [],
        },
        youtube_link: "",
        teaser_youtube_link: "",
        cover: TheBeastWasICover1,
        cover_small: TheBeastWasICover1,
        description: `A story in three chapters, the film follows a broken father-son relationship across generations seemingly linked by a recurring dream, that still has a chance to heal through the unexpected intervention of a little girl.`,
        gallery: [TheBeastWasICover1],
    },
    {
        slug: "its-not-that-deep",
        title: "IT'S NOT THAT DEEP",
        release_year: "2025",
        runtime: "10m",
        genre: "DRAMA",
        type: "SHORT FILM",
        status: "in_production",
        production: {
            writer: ["ANA PARVU"],
            producer: ["DARIA POPESCO"],
            director: ["ANA PÂRVU"],
            starring: ["ANA PÂRVU"],
        },
        youtube_link: "",
        teaser_youtube_link: "",
        cover: ItsNotThatDeepCover1,
        cover_small: ItsNotThatDeepCover1,
        description: `The people we interact with are like products we consume. In time, they melt, they break down, get washed down the drains, and get flushed out into a sea of memories that will slowly erode our souls. It’s a self-fulfilling prophecy, a never-ending cycle of wanting, consuming and getting consumed. With each product we consume, little residue of grease will clog the pipes until we get choked up on our own addiction, on our own needs and wants. The consumer becomes the consumed.`,
        gallery: [ItsNotThatDeepCover1],
    },
    {
        slug: "memoirs-of-a-dying-fish",
        title: "MEMOIRS OF A DYING FISH",
        release_year: "2025",
        runtime: "10m",
        genre: "DRAMA",
        type: "SHORT FILM",
        status: "available",
        production: {
            writer: ["DARREN HUANG"],
            producer: ["MIRUNA STRAUT"],
            director: ["DARREN HUANG"],
            starring: [""],
        },
        youtube_link: "",
        teaser_youtube_link: "",
        cover: MemoirsOfADyingFishCover1,
        cover_small: MemoirsOfADyingFishCover1,
        description: `Alone, on the shore, he begins to remember`,
        gallery: [MemoirsOfADyingFishCover1],
    },

    // {
    //     slug: "i-can-hear-the-skylark-soaring",
    //     title: "I CAN HEAR THE SKYLARK SOARING",
    //     release_year: "2025",
    //     runtime: "15m",
    //     genre: "DRAMA",
    //     type: "SHORT FILM",
    //     status: "in_production",
    //     production: {
    //         writer: ["MIRUNA STRĂUȚ"],
    //         producer: ["DARIA POPESCO"],
    //         director: ["MIRUNA STRĂUȚ"],
    //         starring: ["MARA BUGARIN", "BOGDAN CAROL"],
    //     },
    //     youtube_link: "",
    //     teaser_youtube_link: "",
    //     cover: ,
    //     cover_small:,
    //     description: `A restless boy sneaks out in the middle of the night to bury a dead skylark, when he meets a weeping bride.`,
    //     gallery: [],
    // },
];

export const filmsNews: News[] = [
    {
        id: 1,
        content: `Ouroboria: A Romanian Folk Thriller That Will Keep You on the Edge of Your Seat...`,
        cover: OuroboriaCover1,
        hyperlink: "/films/ouroboria",
    },
];

export const companySocialLinks = {
    instagram: "https://www.instagram.com/wildpoppyfilms",
    x: undefined,
    tiktok: "https://www.tiktok.com/@wildpoppyfilms",
    facebook: undefined,
    youtube: "https://www.youtube.com/@ouroboria6003",
    linkedin: undefined,
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
        roles: ["PRODUCER"],
        location: "LONDON, UK \n AMSTERDAM, NL",
        socials: {
            imdb: "https://www.imdb.com/name/nm13309734",
            instagram: undefined,
        },
        icon: OuroboriaCover1,
        description: undefined,
    },
    {
        id: 2,
        name: "Delia Dumont",
        roles: ["DIRECTOR", "PRODUCER"],
        location: "NEW YORK CITY, USA",
        socials: {
            imdb: "https://www.imdb.com/name/nm15163093",
            instagram: "https://www.instagram.com/deliaadumont",
        },
        icon: OuroboriaCover1,
        description: undefined,
    },
    {
        id: 3,
        name: "Miruna Străuț",
        roles: ["DIRECTOR", "SCREENWRITER"],
        location: "NEW YORK CITY, USA",
        socials: {
            imdb: "https://www.imdb.com/name/nm14436894",
            instagram: undefined,
        },
        icon: OuroboriaCover1,
        description: undefined,
    },
    {
        id: 4,
        name: "Ana Pârvu",
        roles: ["PRODUCER", "SCREENWRITER"],
        location: "LONDON, UK",
        socials: {
            imdb: "https://www.imdb.com/name/nm10780910",
            instagram: "https://www.instagram.com/_anaparvu",
        },
        icon: OuroboriaCover1,
        description: undefined,
    },
];
