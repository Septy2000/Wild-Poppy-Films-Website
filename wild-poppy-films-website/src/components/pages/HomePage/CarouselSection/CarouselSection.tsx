import React from "react";
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
    const carouselItems: StaticImageData[] = [
        Carousel_1_1,
        Carousel_2_1,
        Carousel_1_2,
        Carousel_2_2,
        Carousel_1_3,
        Carousel_2_3,
    ];

    return (
        <React.Fragment>
            <ScrollBanner displayTextList={scrollBannerDisplayTextList} variant="green" />
            <Styled.Container>
                {carouselItems.map((carouselItem, id) => (
                    <Styled.CarouselItem key={id} src={carouselItem} alt={`carousel_item_${id}`} />
                ))}
            </Styled.Container>
            <Styled.PoppyLogo />
        </React.Fragment>
    );
}
