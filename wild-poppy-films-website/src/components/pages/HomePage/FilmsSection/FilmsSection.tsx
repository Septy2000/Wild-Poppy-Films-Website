"use client";
import * as Styled from "./FilmsSection.styled";
import React, { forwardRef } from "react";
import ScrollBanner from "@/components/ScrollBanner/ScrollBanner";
import { films } from "@/data";
import FilmContainer from "@/components/pages/HomePage/FilmsSection/FilmContainer/FilmContainer";
import PrimaryButton from "@/components/Buttons/PrimaryButton/PrimaryButton";
import { useInView } from "react-intersection-observer";
import { ScrollIntoViewAnimationWrapper } from "@/components/AnimationWrappers/AnimationWrappers.styled";

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
                        <ScrollIntoViewAnimationWrapper
                            key={film.slug}
                            $animationDelay={index * delayPerItem}
                            $axis="Y"
                            $direction={1}
                            $inView={inView}
                        >
                            <FilmContainer film={film} />
                        </ScrollIntoViewAnimationWrapper>
                    ))}
                </Styled.FilmsContainer>

                <Styled.CtaContainer>
                    <ScrollIntoViewAnimationWrapper
                        $animationDelay={films.length * delayPerItem}
                        $axis="Y"
                        $direction={1}
                        $inView={inView}
                    >
                        <PrimaryButton
                            href="/films?filter=coming_soon&page=1"
                            variant="red"
                            label={filmsCtaText}
                        />
                    </ScrollIntoViewAnimationWrapper>
                </Styled.CtaContainer>
            </Styled.Container>
        </div>
    );
});
FilmsSection.displayName = "FilmsSection";
export default FilmsSection;
