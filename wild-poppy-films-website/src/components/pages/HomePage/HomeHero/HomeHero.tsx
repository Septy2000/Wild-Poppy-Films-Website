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

    // The hero walks a flat sequence of frames - three stills per film, in order - so
    // one counter describes the whole state. Tracking the film and the still as two
    // pieces of state meant updating one from inside the other's updater, and made the
    // interval below depend on the film index, so it was torn down and rebuilt on
    // every advance.
    const totalFrames = filmsCount * imagesPerFilm;
    const [frame, setFrame] = useState(0);

    const currentMovieIndex = Math.floor(frame / imagesPerFilm);

    useEffect(() => {
        // Visitors who ask their OS for reduced motion get the first still, held.
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const intervalId = setInterval(
            () => setFrame((current) => (current + 1) % totalFrames),
            contentCycleDurationMs
        );

        return () => clearInterval(intervalId);
    }, [totalFrames]);

    const goToMovie = (movieIndex: number) =>
        setFrame((((movieIndex % filmsCount) + filmsCount) % filmsCount) * imagesPerFilm);

    function showPreviousMovie() {
        goToMovie(currentMovieIndex - 1);
    }

    function showNextMovie() {
        goToMovie(currentMovieIndex + 1);
    }

    return (
        <React.Fragment>
            <Styled.Container>
                <Styled.ContentContainer>
                    {homeHeroFilms.map((film, filmIndex) =>
                        film.gallery.slice(0, imagesPerFilm).map((image, imageIndex) => {
                            // Only the first frame is on screen at load. Marking all twelve
                            // `priority` emitted twelve high-priority preloads that competed
                            // with the one image the visitor actually sees.
                            //
                            // The rest stay eager rather than lazy: the hero advances on a
                            // 3s timer and they are translated, not scrolled, into view, so
                            // lazy loading would leave them blank when their turn came.
                            // fetchPriority="low" lets the browser fetch them in the
                            // background without delaying the first paint.
                            const isFirstFrame = filmIndex === 0 && imageIndex === 0;

                            return (
                                <Styled.StyledImage
                                    key={`${film.title}-${imageIndex}`}
                                    src={image}
                                    alt={`${film.title} - still ${imageIndex + 1}`}
                                    sizes="100vw"
                                    placeholder="blur"
                                    priority={isFirstFrame}
                                    loading={isFirstFrame ? undefined : "eager"}
                                    fetchPriority={isFirstFrame ? "high" : "low"}
                                    $imageIndex={frame}
                                />
                            );
                        })
                    )}
                </Styled.ContentContainer>
                <HomeHeroContentOverlay
                    films={homeHeroFilms}
                    currentMovieIndex={currentMovieIndex}
                    showNextMovie={showNextMovie}
                    showPreviousMovie={showPreviousMovie}
                    setCurrentMovieIndex={goToMovie}
                />
            </Styled.Container>
            <Styled.Spacer />
        </React.Fragment>
    );
}
