"use client";
import { Film } from "@/_types/common";
import { useRouter } from "next/navigation";
import * as Styled from "./FilmPage.styled";
import React from "react";
import ReturnButton from "@/components/Buttons/ReturnButton/ReturnButton";
import GalleryDisplaySection from "@/components/pages/FilmPage/GalleryDisplaySection/GalleryDisplaySection";
import HeroSection from "@/components/pages/FilmPage/HeroSection/HeroSection";

export default function FilmPage({ film }: { film: Film }) {
    const router = useRouter();

    return (
        <Styled.Container>
            <Styled.ImageContainer>
                {/* Passing the imported image object rather than `.src` lets Next use the
                    real dimensions and generate the blur placeholder. This is the page's
                    LCP element, so it keeps `priority`. */}
                <Styled.ImageStyled
                    src={film.cover}
                    alt={`${film.title} - cover image`}
                    sizes="100vw"
                    placeholder="blur"
                    priority
                />
                <Styled.GlassOverFrameStyled />
                <Styled.ImageOverlay>
                    <ReturnButton text="FILMS" onClick={() => router.back()} />
                    <Styled.FilmTitle>{film.title}</Styled.FilmTitle>
                </Styled.ImageOverlay>
            </Styled.ImageContainer>
            <HeroSection film={film} />
            <GalleryDisplaySection gallery={film.gallery} filmTitle={film.title} />
            {/* The news section is switched off for now. Its components still live in
                ./NewsSection and its content in `filmsNews` (src/data.ts); re-enable by
                importing NewsSection and rendering it with those entries. */}
        </Styled.Container>
    );
}
