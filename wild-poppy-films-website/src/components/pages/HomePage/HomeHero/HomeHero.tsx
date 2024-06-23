"use client";
import React, { useState, useEffect } from "react";
import * as Styled from "./HomeHero.styled";
import { HomeHeroMovie } from "@/_types/common";
import { GlassOverFrame } from "@/components/GlassOverFrame/GlassOverFrame.styled";
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
    const content: HomeHeroMovie[] = [
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

    function showNextImage() {
        const moviesCount = content.length;
        const imagesCountForCurrentMovie = content[currentMovieIndex].images.desktop.length;

        setCurrentImageIndex((currentIndex) => {
            if (currentIndex === imagesCountForCurrentMovie - 1) {
                setCurrentMovieIndex((currentMovieIndex + 1) % moviesCount);
                return 0;
            }
            return currentIndex + 1;
        });
    }

    function showPreviousMovie() {
        const moviesCount = content.length;

        setCurrentMovieIndex((currentMovieIndex - 1 + moviesCount) % moviesCount);
        setCurrentImageIndex(0);
    }

    function showNextMovie() {
        const moviesCount = content.length;

        setCurrentMovieIndex((currentMovieIndex + 1) % moviesCount);
        setCurrentImageIndex(0);
    }

    return (
        <Styled.Container>
            <Styled.ContentContainer>
                {content.map((movie) =>
                    movie.images.desktop.map((image, imageIndex) => (
                        <Styled.StyledImage
                            key={`${movie.title}-${imageIndex}`}
                            src={image}
                            alt={movie.title}
                            $imageIndex={
                                currentImageIndex + currentMovieIndex * movie.images.desktop.length
                            }
                        />
                    ))
                )}
            </Styled.ContentContainer>
            <GlassOverFrame />
        </Styled.Container>
    );
}
