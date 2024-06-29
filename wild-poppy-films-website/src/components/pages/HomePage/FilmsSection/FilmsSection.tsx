"use client";
import * as Styled from "./FilmsSection.styled";
import React, { forwardRef } from "react";
import ScrollBanner from "@/components/ScrollBanner/ScrollBanner";
import { films } from "@/data";
import FilmContainer from "@/components/pages/HomePage/FilmsSection/FilmContainer/FilmContainer";

const FilmsSection = forwardRef<HTMLDivElement>((props, ref) => {
    const scrollBannerDisplayTextList: string[] = ["blooming soon!"];

    return (
        <Styled.Container ref={ref}>
            <ScrollBanner displayTextList={scrollBannerDisplayTextList} variant="black" />
            <Styled.FilmsContainer>
                {films.map((film, id) => (
                    <FilmContainer film={film} key={id} />
                ))}
            </Styled.FilmsContainer>
        </Styled.Container>
    );
});
FilmsSection.displayName = "FilmsSection";
export default FilmsSection;
