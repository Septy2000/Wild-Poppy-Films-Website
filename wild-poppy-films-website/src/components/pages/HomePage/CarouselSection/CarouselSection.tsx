"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import * as Styled from "./CarouselSection.styled";
import { StaticImageData } from "next/image";
import ScrollBanner from "@/components/ScrollBanner/ScrollBanner";
import Carousel_1_1 from "@/images/home-page/carousel/carousel-1-1.png";
import Carousel_1_2 from "@/images/home-page/carousel/carousel-1-2.png";
import Carousel_1_3 from "@/images/home-page/carousel/carousel-1-3.png";
import Carousel_2_1 from "@/images/home-page/carousel/carousel-2-1.png";
import Carousel_2_2 from "@/images/home-page/carousel/carousel-2-2.png";
import Carousel_2_3 from "@/images/home-page/carousel/carousel-2-3.png";

export default function CarouselSection() {
    const scrollBannerDisplayTextList: string[] = ["watch us bloom"];

    const leftCarouselItems: StaticImageData[] = [Carousel_1_1, Carousel_1_2, Carousel_1_3];

    const rightCarouselItems: StaticImageData[] = [Carousel_2_1, Carousel_2_2, Carousel_2_3];

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
