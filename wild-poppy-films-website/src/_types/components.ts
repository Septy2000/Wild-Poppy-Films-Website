import { HomeHeroFilm } from "./common";
import { Film } from "./common";
import { ParsedUrlQuery } from "querystring";
import { PrimaryButtonColorVariant } from "./styledComponents";

export interface ModalLinkButtonProps {
    label: string;
    link: string;
    isVisible?: boolean;
    delay?: number;
    onClick?: () => void;
}

export interface HomeHeroContentOverlayProps {
    currentMovieIndex: number;
    films: HomeHeroFilm[];
    showNextMovie: () => void;
    showPreviousMovie: () => void;
    setCurrentMovieIndex: (index: number) => void;
}

export interface FilmComponentProps {
    film: Film;
    axis: "X" | "Y";
    direction: 1 | -1;
    delay: number;
    inView: boolean;
}

export interface PrimaryButtonProps {
    children: string;
    href:
        | {
              pathname: string;
              query?: ParsedUrlQuery;
          }
        | string;
    variant: PrimaryButtonColorVariant;
    animated?: boolean;
    axis?: "X" | "Y";
    direction?: 1 | -1;
    delay?: number;
    inView?: boolean;
}

export interface PaginationControlProps {
    numberOfPages: number;
    handlePageChange: (toPage: number) => void;
    currentPage: number;
}
