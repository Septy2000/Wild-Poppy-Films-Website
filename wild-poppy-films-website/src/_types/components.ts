import { HomeHeroMovie } from "./common";

export interface ModalLinkButtonProps {
    label: string;
    link: string;
    translateX: number;
    isVisible: boolean;
    delay: number;
}

export interface HomeHeroContentOverlayProps {
    currentMovieIndex: number;
    movies: HomeHeroMovie[];
    showNextMovie: () => void;
    showPreviousMovie: () => void;
}
