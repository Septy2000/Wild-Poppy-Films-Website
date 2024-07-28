import { HomeHeroFilm } from "./common";
import { Film } from "./common";

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
