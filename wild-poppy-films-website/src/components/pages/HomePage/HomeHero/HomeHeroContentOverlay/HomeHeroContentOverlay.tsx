"use client";
import React from "react";
import { HomeHeroContentOverlayProps } from "@/_types/components";
import * as Styled from "./HomeHeroContentOverlay.styled";
import CircularProgress from "@/components/CircularCounter/CircularCounter";
import HomeHeroContentControlButton from "@/components/Buttons/HomeHeroContentControlButton/HomeHeroContentControlButton";

export default function HomeHeroContentOverlay({
    currentMovieIndex,
    films,
    showNextMovie,
    showPreviousMovie,
    setCurrentMovieIndex,
}: HomeHeroContentOverlayProps) {
    return (
        <Styled.Container>
            <Styled.MovieControlsContainer>
                <HomeHeroContentControlButton onClick={showPreviousMovie} direction="left" />
                <HomeHeroContentControlButton onClick={showNextMovie} direction="right" />
            </Styled.MovieControlsContainer>
            <Styled.MovieTitleAndCounterContainer>
                <Styled.MovieTitleAndYearWrapper>
                    {films.map((film, index) => (
                        <Styled.MovieInstanceContainer
                            key={index}
                            onClick={() => setCurrentMovieIndex(index)}
                        >
                            <Styled.ForwardIconStyled $isSelected={index === currentMovieIndex} />
                            <Styled.MovieTitleAndYearContainer
                                key={index}
                                $movieIndex={currentMovieIndex}
                                $isSelected={index === currentMovieIndex}
                            >
                                <Styled.MovieTitle>{film.title}</Styled.MovieTitle>
                                <Styled.MovieYear>{film.year}</Styled.MovieYear>
                            </Styled.MovieTitleAndYearContainer>
                        </Styled.MovieInstanceContainer>
                    ))}
                </Styled.MovieTitleAndYearWrapper>
                <CircularProgress currentIndex={currentMovieIndex + 1} total={films.length} />
            </Styled.MovieTitleAndCounterContainer>
        </Styled.Container>
    );
}
