"use client";
import React, { useState, useEffect } from "react";
import * as Styled from "./HomeHero.styled";
import { HomeHeroMovie } from "@/_types/common";
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

    useEffect(() => {
        const intervalImage = setInterval(() => {
            setCurrentImageIndex((prevImageIndex) => {
                if (prevImageIndex === content[currentMovieIndex].images.desktop.length - 1) {
                    return 0;
                }
                return prevImageIndex + 1;
            });
        }, contentCycleDurationMs);

        return () => clearInterval(intervalImage);
    }, [currentImageIndex]);

    useEffect(() => {
        if (currentImageIndex === 2) {
            const intervalMovie = setInterval(() => {
                setCurrentMovieIndex((prevMovieIndex) => {
                    if (prevMovieIndex === content.length - 1) {
                        return 0;
                    }
                    return prevMovieIndex + 1;
                });
            }, contentCycleDurationMs);
            return () => clearInterval(intervalMovie);
        }
    }, [currentImageIndex]);

    useEffect(() => {
        console.log("currentMovieIndex", currentMovieIndex);
        console.log("currentImageIndex", currentImageIndex);
    }, [currentMovieIndex, currentImageIndex]);

    return (
        <React.Fragment>
            <Styled.StyledImage
                src={content[currentMovieIndex].images.desktop[currentImageIndex]}
                alt={content[currentMovieIndex].title}
                priority
            />
        </React.Fragment>
    );
}
