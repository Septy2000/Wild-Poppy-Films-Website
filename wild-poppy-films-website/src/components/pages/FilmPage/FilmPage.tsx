"use client";
import { Film, News } from "@/_types/common";
import { useRouter } from "next/navigation";
import * as Styled from "./FilmPage.styled";
import React from "react";
import ReturnButton from "@/components/Buttons/ReturnButton/ReturnButton";
import { filmsNews } from "@/data";
import NewsSection from "@/components/pages/FilmPage/NewsSection/NewsSection";
import GalleryDisplaySection from "@/components/pages/FilmPage/GalleryDisplaySection/GalleryDisplaySection";
import HeroSection from "@/components/pages/FilmPage/HeroSection/HeroSection";

export default function FilmPage({ film }: { film: Film }) {
    const router = useRouter();
    const shownNews: News[] = filmsNews.slice(0, 3);

    return (
        <Styled.Container>
            <Styled.ImageContainer>
                <Styled.ImageStyled
                    width={1500}
                    height={1500}
                    priority
                    src={film.cover.src}
                    alt={`${film.title}-cover`}
                />
                <Styled.GlassOverFrameStyled />
                <Styled.ImageOverlay>
                    <ReturnButton text="FILMS" onClick={() => router.back()} />
                    <Styled.FilmTitle>{film.title}</Styled.FilmTitle>
                </Styled.ImageOverlay>
            </Styled.ImageContainer>
            <HeroSection film={film} />
            <GalleryDisplaySection gallery={film.gallery} />
            {/* <NewsSection shownNews={shownNews} /> */}
        </Styled.Container>
    );
}
