"use client";
import React, { useState, useEffect } from "react";
import * as Styled from "./HomeHero.styled";
import HomeHeroContentOverlay from "@/components/pages/HomePage/HomeHero/HomeHeroContentOverlay/HomeHeroContentOverlay";
import { films } from "@/data";
import { Film } from "@/_types/common";

export default function HomeHero() {
    const homeHeroFilms: Film[] = films.slice(0, 4);
    const filmsCount = homeHeroFilms.length;
    const imagesPerFilm = 3;
    const contentCycleDurationMs = 3000;

    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    function showNextImage() {
        setCurrentImageIndex((currentIndex) => {
            if (currentIndex === imagesPerFilm - 1) {
                setCurrentMovieIndex((currentMovieIndex + 1) % filmsCount);
                return 0;
            }
            return currentIndex + 1;
        });
    }

    useEffect(() => {
        const intervalId = setInterval(showNextImage, contentCycleDurationMs);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentMovieIndex]);

    function showPreviousMovie() {
        setCurrentMovieIndex((currentMovieIndex - 1 + filmsCount) % filmsCount);
        setCurrentImageIndex(0);
    }

    function showNextMovie() {
        setCurrentMovieIndex((currentMovieIndex + 1) % filmsCount);
        setCurrentImageIndex(0);
    }

    function setMovieIndex(index: number) {
        setCurrentMovieIndex(index);
        setCurrentImageIndex(0);
    }

    return (
        <React.Fragment>
            <Styled.Container>
                <Styled.ContentContainer>
                    {homeHeroFilms.map((film) =>
                        film.gallery
                            .slice(0, imagesPerFilm)
                            .map((image, imageIndex) => (
                                <Styled.StyledImage
                                    width={1920}
                                    height={1080}
                                    key={`${film.title}-${imageIndex}`}
                                    src={image}
                                    alt={film.title}
                                    priority
                                    $imageIndex={
                                        currentImageIndex + currentMovieIndex * imagesPerFilm
                                    }
                                />
                            ))
                    )}
                </Styled.ContentContainer>
                <HomeHeroContentOverlay
                    films={homeHeroFilms}
                    currentMovieIndex={currentMovieIndex}
                    showNextMovie={showNextMovie}
                    showPreviousMovie={showPreviousMovie}
                    setCurrentMovieIndex={setMovieIndex}
                />
            </Styled.Container>
            <Styled.Spacer />
        </React.Fragment>
    );
}
