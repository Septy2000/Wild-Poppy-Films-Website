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
        <React.Fragment>
            <ScrollBanner displayTextList={scrollBannerDisplayTextList} variant="black" />
            <Styled.Container ref={ref}>
                <Styled.FilmsContainer>
                    {films.map((film, id) => (
                        <FilmContainer film={film} key={id} />
                    ))}
                </Styled.FilmsContainer>
                <Styled.CtaContainer>
                    <PrimaryButton
                        href={{ pathname: "/films", query: { sort: "coming_soon" } }}
                        variant="red"
                    >
                        {filmsCtaText}
                    </PrimaryButton>
                </Styled.CtaContainer>
            </Styled.Container>
        </React.Fragment>
    );
});
FilmsSection.displayName = "FilmsSection";
export default FilmsSection;
