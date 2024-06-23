import { HomeHeroContentOverlayProps } from "@/_types/components";
import * as Styled from "./HomeHeroContentOverlay.styled";

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
                <div>{`${movieIndex + 1} / ${moviesCount}`}</div>
            </Styled.MovieTitleAndCounterContainer>
        </Styled.Container>
    );
}
