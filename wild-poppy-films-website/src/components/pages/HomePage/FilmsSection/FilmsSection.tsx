"use client";
import * as Styled from "./FilmsSection.styled";
import React, { forwardRef } from "react";
import ScrollBanner from "@/components/ScrollBanner/ScrollBanner";
import { films } from "@/data";
import FilmContainer from "@/components/pages/HomePage/FilmsSection/FilmContainer/FilmContainer";
import PrimaryButton from "@/components/Buttons/PrimaryButton/PrimaryButton";

const FilmsSection = forwardRef<HTMLDivElement>((props, ref) => {
    const scrollBannerDisplayTextList: string[] = ["blooming soon!"];
    const filmsCtaText = "view all";

    return (
        <Styled.Container ref={ref}>
            <ScrollBanner displayTextList={scrollBannerDisplayTextList} variant="black" />
            <Styled.FilmsContainer>
                {films.map((film, id) => (
                    <FilmContainer film={film} key={id} />
                ))}
            </Styled.FilmsContainer>
            <PrimaryButton href="/films">{filmsCtaText}</PrimaryButton>
        </Styled.Container>
    );
});
FilmsSection.displayName = "FilmsSection";
export default FilmsSection;
