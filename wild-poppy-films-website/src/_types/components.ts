import { Film } from "./common";
import { PrimaryButtonColorVariant, SecondaryButtonVariant } from "./styledComponents";

export interface HomeHeroContentOverlayProps {
    currentMovieIndex: number;
    films: Film[];
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

export interface PaginationControlProps {
    numberOfPages: number;
    handlePageChange: (toPage: number) => void;
    currentPage: number;
}

export interface ButtonProps {
    label: string;
    onClick?: () => void;
}

export interface PrimaryButtonProps extends ButtonProps {
    variant?: PrimaryButtonColorVariant;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    /** When set, the control renders as a link rather than a button. */
    href?: string;
}

export interface SecondaryButtonProps extends ButtonProps {
    variant?: SecondaryButtonVariant;
    /** When set, the control renders as a link rather than a button. */
    href?: string;
    /** Opens `href` in a new tab with rel="noopener noreferrer". */
    external?: boolean;
}
