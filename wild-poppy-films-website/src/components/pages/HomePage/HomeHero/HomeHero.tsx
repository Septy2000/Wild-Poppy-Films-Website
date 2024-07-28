"use client";
import React, { useState, useEffect } from "react";
import * as Styled from "./HomeHero.styled";
import { HomeHeroFilm } from "@/_types/common";
import { GlassOverFrame } from "@/components/GlassOverFrame/GlassOverFrame.styled";
import HomeHeroContentOverlay from "@/components/pages/HomePage/HomeHero/HomeHeroContentOverlay/HomeHeroContentOverlay";
import useIsMobile from "@/hooks/useIsMobile";
// Images for content cycle

// Cutezatorii
import CutezatoriiDesktop1 from "@/images/home-page/hero/cutezatorii/cutezatorii-1-desktop.png";
import CutezatoriiDesktop2 from "@/images/home-page/hero/cutezatorii/cutezatorii-2-desktop.png";
import CutezatoriiDesktop3 from "@/images/home-page/hero/cutezatorii/cutezatorii-3-desktop.png";
import CutezatoriiMobile1 from "@/images/home-page/hero/cutezatorii/cutezatorii-1-mobile.png";
import CutezatoriiMobile2 from "@/images/home-page/hero/cutezatorii/cutezatorii-2-mobile.png";
import CutezatoriiMobile3 from "@/images/home-page/hero/cutezatorii/cutezatorii-3-mobile.png";

// Hoeig
import HoeigDesktop1 from "@/images/home-page/hero/hoeig/hoeig-1-desktop.png";
import HoeigDesktop2 from "@/images/home-page/hero/hoeig/hoeig-2-desktop.png";
import HoeigDesktop3 from "@/images/home-page/hero/hoeig/hoeig-3-desktop.png";
import HoeigMobile1 from "@/images/home-page/hero/hoeig/hoeig-1-mobile.png";
import HoeigMobile2 from "@/images/home-page/hero/hoeig/hoeig-2-mobile.png";
import HoeigMobile3 from "@/images/home-page/hero/hoeig/hoeig-3-mobile.png";

export default function HomeHero() {
    const films: HomeHeroFilm[] = [
        {
            title: "Cutezatorii",
            year: "2023",
            images: {
                mobile: [CutezatoriiMobile1, CutezatoriiMobile2, CutezatoriiMobile3],
                desktop: [CutezatoriiDesktop1, CutezatoriiDesktop2, CutezatoriiDesktop3],
            },
        },
        {
            title: "Hoeig",
            year: "2022",
            images: {
                mobile: [HoeigMobile1, HoeigMobile2, HoeigMobile3],
                desktop: [HoeigDesktop1, HoeigDesktop2, HoeigDesktop3],
            },
        },
        {
            title: "Cutezatorii",
            year: "2023",
            images: {
                mobile: [CutezatoriiMobile1, CutezatoriiMobile2, CutezatoriiMobile3],
                desktop: [CutezatoriiDesktop1, CutezatoriiDesktop2, CutezatoriiDesktop3],
            },
        },
        {
            title: "Hoeig",
            year: "2022",
            images: {
                mobile: [HoeigMobile1, HoeigMobile2, HoeigMobile3],
                desktop: [HoeigDesktop1, HoeigDesktop2, HoeigDesktop3],
            },
        },
    ];
    const contentCycleDurationMs = 3000;

    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const isMobile = useIsMobile();

    function showNextImage() {
        const moviesCount = films.length;
        const imagesCountForCurrentMovie = films[currentMovieIndex].images.desktop.length;

        setCurrentImageIndex((currentIndex) => {
            if (currentIndex === imagesCountForCurrentMovie - 1) {
                setCurrentMovieIndex((currentMovieIndex + 1) % moviesCount);
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
        const moviesCount = films.length;

        setCurrentMovieIndex((currentMovieIndex - 1 + moviesCount) % moviesCount);
        setCurrentImageIndex(0);
    }

    function showNextMovie() {
        const moviesCount = films.length;

        setCurrentMovieIndex((currentMovieIndex + 1) % moviesCount);
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
                    {films.map((film) =>
                        (isMobile ? film.images.mobile : film.images.desktop).map(
                            (image, imageIndex) => (
                                <Styled.StyledImage
                                    key={`${film.title}-${imageIndex}`}
                                    src={image}
                                    alt={film.title}
                                    priority
                                    $imageIndex={
                                        currentImageIndex +
                                        currentMovieIndex * film.images.desktop.length
                                    }
                                />
                            )
                        )
                    )}
                    <GlassOverFrame />
                </Styled.ContentContainer>
                <HomeHeroContentOverlay
                    films={films}
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
