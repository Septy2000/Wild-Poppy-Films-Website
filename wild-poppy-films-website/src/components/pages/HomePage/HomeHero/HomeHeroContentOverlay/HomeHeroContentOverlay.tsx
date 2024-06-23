"use client";
import React from "react";
import { HomeHeroContentOverlayProps } from "@/_types/components";
import * as Styled from "./HomeHeroContentOverlay.styled";
import CircularProgress from "@/components/CircularCounter/CircularCounter";

export default function HomeHeroContentOverlay({
    currentMovieIndex,
    movies,
    showNextMovie,
    showPreviousMovie,
}: HomeHeroContentOverlayProps) {
    return (
        <Styled.Container>
            <Styled.MovieControlsContainer>
                <Styled.ControlIconContainer onClick={showPreviousMovie}>
                    <Styled.MovieBackIcon />
                </Styled.ControlIconContainer>
                <Styled.ControlIconContainer onClick={showNextMovie}>
                    <Styled.MovieForwardIcon />
                </Styled.ControlIconContainer>
            </Styled.MovieControlsContainer>
            <Styled.MovieTitleAndCounterContainer>
                <Styled.MovieTitleAndYearWrapper>
                    {movies.map((movie, index) => (
                        <Styled.MovieTitleAndYearContainer
                            key={index}
                            $movieIndex={currentMovieIndex}
                            $isSelected={index === currentMovieIndex}
                        >
                            <Styled.MovieTitle>{movie.title}</Styled.MovieTitle>
                            <Styled.MovieYear>{movie.year}</Styled.MovieYear>
                        </Styled.MovieTitleAndYearContainer>
                    ))}
                </Styled.MovieTitleAndYearWrapper>
                <CircularProgress currentIndex={currentMovieIndex + 1} total={movies.length} />
            </Styled.MovieTitleAndCounterContainer>
        </Styled.Container>
    );
}
