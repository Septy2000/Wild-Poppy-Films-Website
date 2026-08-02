"use client";
import React from "react";
import { HomeHeroContentOverlayProps } from "@/_types/components";
import * as Styled from "./HomeHeroContentOverlay.styled";
import CircularProgress from "@/components/CircularCounter/CircularCounter";
import HomeHeroContentControlButton from "@/components/Buttons/HomeHeroContentControlButton/HomeHeroContentControlButton";
import { GlassOverFrame } from "@/components/GlassOverFrame/GlassOverFrame.styled";

export default function HomeHeroContentOverlay({
    currentMovieIndex,
    films,
    showNextMovie,
    showPreviousMovie,
    setCurrentMovieIndex,
}: HomeHeroContentOverlayProps) {
    return (
        <Styled.Container>
            <GlassOverFrame />
            <Styled.MovieControlsContainer>
                <HomeHeroContentControlButton onClick={showPreviousMovie} direction="left" />
                <HomeHeroContentControlButton onClick={showNextMovie} direction="right" />
            </Styled.MovieControlsContainer>
            <Styled.MovieTitleAndCounterContainer>
                <Styled.MovieTitleAndYearWrapper>
                    {films.map((film, index) => (
                        <Styled.MovieInstanceContainer
                            key={film.slug}
                            type="button"
                            onClick={() => setCurrentMovieIndex(index)}
                            aria-label={`Show ${film.title} (${film.release_year})`}
                            aria-current={index === currentMovieIndex}
                        >
                            <Styled.ForwardIconStyled
                                aria-hidden="true"
                                $isSelected={index === currentMovieIndex}
                            />
                            <Styled.MovieTitleAndYearContainer
                                $movieIndex={currentMovieIndex}
                                $isSelected={index === currentMovieIndex}
                            >
                                <Styled.MovieTitle>{film.title}</Styled.MovieTitle>
                                <Styled.MovieYear>{film.release_year}</Styled.MovieYear>
                            </Styled.MovieTitleAndYearContainer>
                        </Styled.MovieInstanceContainer>
                    ))}
                </Styled.MovieTitleAndYearWrapper>
                <CircularProgress currentIndex={currentMovieIndex + 1} total={films.length} />
            </Styled.MovieTitleAndCounterContainer>
        </Styled.Container>
    );
}
