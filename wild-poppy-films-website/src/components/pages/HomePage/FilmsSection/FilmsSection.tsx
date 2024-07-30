"use client";
import * as Styled from "./FilmsSection.styled";
import React, { forwardRef } from "react";
import ScrollBanner from "@/components/ScrollBanner/ScrollBanner";
import { films } from "@/data";
import FilmContainer from "@/components/pages/HomePage/FilmsSection/FilmContainer/FilmContainer";
import PrimaryButton from "@/components/Buttons/PrimaryButton/PrimaryButton";
import { useInView } from "react-intersection-observer";

const FilmsSection = forwardRef<HTMLDivElement>((props, filmsSectionRef) => {
    const scrollBannerDisplayTextList: string[] = ["blooming soon!"];
    const filmsCtaText = "view all";

    const delayPerItem = 0.1;
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    // Filter out films that are not coming soon or in production, and take the first 3
    const filteredFilms = films
        .filter((film) => film.status === "coming_soon" || film.status === "in_production")
        .slice(0, 3);

    return (
        <div ref={filmsSectionRef}>
            <ScrollBanner displayTextList={scrollBannerDisplayTextList} variant="black" />
            <Styled.Container ref={ref} $inView={inView}>
                <Styled.FilmsContainer>
                    {filteredFilms.map((film, index) => (
                        <FilmContainer
                            axis={"Y"}
                            direction={1}
                            delay={index * delayPerItem}
                            film={film}
                            inView={inView}
                            key={index}
                        />
                    ))}
                </Styled.FilmsContainer>

                <Styled.CtaContainer>
                    <PrimaryButton
                        href={{ pathname: "/films", query: { page: "1", filter: "coming_soon" } }}
                        variant="red"
                        animated
                        axis="Y"
                        direction={1}
                        delay={films.length * delayPerItem}
                        inView={inView}
                    >
                        {filmsCtaText}
                    </PrimaryButton>
                </Styled.CtaContainer>
            </Styled.Container>
        </div>
    );
});
FilmsSection.displayName = "FilmsSection";
export default FilmsSection;
