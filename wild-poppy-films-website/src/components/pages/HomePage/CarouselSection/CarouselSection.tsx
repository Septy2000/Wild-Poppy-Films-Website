"use client";
import React, { useRef, useState, useEffect } from "react";
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

    const [translateX, setTranslateX] = useState(0);
    const [wasContainerInView, setWasContainerInView] = useState(false);
    const delayPerItem = 0.1;
    const selfRef = useRef<HTMLDivElement>(null);
    const { ref, inView } = useInView({
        threshold: 0.01,
    });

    useEffect(() => {
        if (inView && !wasContainerInView) {
            setWasContainerInView(true);
        }
    }, [inView, wasContainerInView]);

    useEffect(() => {
        if (selfRef.current) {
            const selfWidth = selfRef.current.offsetWidth;
            setTranslateX(selfWidth);
        }
    }, [selfRef]);
    return (
        <React.Fragment>
            <ScrollBanner displayTextList={scrollBannerDisplayTextList} variant="green" />
            <Styled.Container ref={selfRef}>
                <Styled.CarouselContainer ref={ref}>
                    <Styled.CarouselLeft>
                        {wasContainerInView &&
                            leftCarouselItems.map((carouselItem, index) => (
                                <Styled.CarouselItem
                                    key={index}
                                    src={carouselItem}
                                    alt={`carousel_item_${index}`}
                                    $translateX={-1 * translateX}
                                    $delay={index * delayPerItem}
                                />
                            ))}
                    </Styled.CarouselLeft>
                    <Styled.CarouselRight>
                        {wasContainerInView &&
                            rightCarouselItems.map((carouselItem, index) => (
                                <Styled.CarouselItem
                                    key={index}
                                    src={carouselItem}
                                    alt={`carousel_item_${index}`}
                                    $translateX={translateX}
                                    $delay={index * delayPerItem}
                                />
                            ))}
                    </Styled.CarouselRight>
                </Styled.CarouselContainer>
                <Styled.PoppyLogo />
            </Styled.Container>
        </React.Fragment>
    );
}
