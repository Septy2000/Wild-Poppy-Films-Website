export interface ModalLinkButtonProps {
    label: string;
    link: string;
    translateX: number;
    isVisible: boolean;
    delay: number;
}

export interface HomeHeroContentOverlayProps {
    movieTitle: string;
    movieYear: string;
    movieIndex: number;
    moviesCount: number;
    showNextMovie: () => void;
    showPreviousMovie: () => void;
}
