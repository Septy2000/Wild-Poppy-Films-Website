import { HomeHeroFilm } from "./common";

export interface ModalLinkButtonProps {
    label: string;
    link: string;
    translateX: number;
    isVisible: boolean;
    delay: number;
}

export interface HomeHeroContentOverlayProps {
    currentMovieIndex: number;
    films: HomeHeroFilm[];
    showNextMovie: () => void;
    showPreviousMovie: () => void;
}
