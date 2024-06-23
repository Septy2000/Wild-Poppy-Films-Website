import { HomeHeroContentOverlayProps } from "@/_types/components";
import * as Styled from "./HomeHeroContentOverlay.styled";
import CircularProgress from "@/components/CircularCounter/CircularCounter";

export default function HomeHeroContentOverlay({
    movieTitle,
    movieYear,
    movieIndex,
    moviesCount,
    showNextMovie,
    showPreviousMovie,
}: HomeHeroContentOverlayProps) {
    return (
        <Styled.Container>
            <Styled.MovieControlsContainer>
                <Styled.MovieBackIcon onClick={showPreviousMovie} />
                <Styled.MovieForwardIcon onClick={showNextMovie} />
            </Styled.MovieControlsContainer>
            <Styled.MovieTitleAndCounterContainer>
                <Styled.MovieTitleContainer>
                    <Styled.MovieTitle>{movieTitle}</Styled.MovieTitle>
                    <Styled.MovieYear>{movieYear}</Styled.MovieYear>
                </Styled.MovieTitleContainer>
                <CircularProgress currentIndex={movieIndex + 1} total={moviesCount} />
            </Styled.MovieTitleAndCounterContainer>
        </Styled.Container>
    );
}
