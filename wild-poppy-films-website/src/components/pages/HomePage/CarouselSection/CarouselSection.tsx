"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import * as Styled from "./CarouselSection.styled";
import { StaticImageData } from "next/image";
import ScrollBanner from "@/components/ScrollBanner/ScrollBanner";
import CutezatoriiCover1 from "@/images/films/cutezatorii/cutezatorii_cover_1.jpeg";

import OuroboriaCover2 from "@/images/films/ouroboria/cover_2.jpg";
import CutezatoriiCover2 from "@/images/films/cutezatorii/cutezatorii_cover_2.jpeg";
import HoeigCover1 from "@/images/films/hello-only-ends-in-goodbye/hoeig_cover_1.jpeg";
import NoNamesCover2 from "@/images/films/no-names/no_names_cover_2.jpg";
import BirdInSpaceCover1 from "@/images/films/bird-in-space/bird_in_space_cover_1.jpeg";

export default function CarouselSection() {
    const scrollBannerDisplayTextList: string[] = ["watch us bloom"];

    const leftCarouselItems: StaticImageData[] = [CutezatoriiCover1, HoeigCover1, NoNamesCover2];

    const rightCarouselItems: StaticImageData[] = [
        BirdInSpaceCover1,
        OuroboriaCover2,
        CutezatoriiCover2,
    ];

    const delayPerItem = 0.1;
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    return (
        <React.Fragment>
            <ScrollBanner displayTextList={scrollBannerDisplayTextList} variant="green" />
            <Styled.Container ref={ref}>
                <Styled.CarouselContainer>
                    <Styled.CarouselLeft>
                        {leftCarouselItems.map((carouselItem, index) => (
                            <Styled.CarouselItem
                                key={index}
                                src={carouselItem}
                                width={350}
                                height={350}
                                alt={`carousel_item_${index}`}
                                $axis="X"
                                $direction={-1}
                                $delay={(1 + index) * delayPerItem}
                                $inView={inView}
                            />
                        ))}
                    </Styled.CarouselLeft>
                    <Styled.CarouselRight>
                        {rightCarouselItems.map((carouselItem, index) => (
                            <Styled.CarouselItem
                                key={index}
                                src={carouselItem}
                                width={350}
                                height={350}
                                alt={`carousel_item_${index}`}
                                $axis="X"
                                $direction={1}
                                $delay={index * delayPerItem}
                                $inView={inView}
                            />
                        ))}
                    </Styled.CarouselRight>
                </Styled.CarouselContainer>
                <Styled.PoppyLogo />
            </Styled.Container>
        </React.Fragment>
    );
}
