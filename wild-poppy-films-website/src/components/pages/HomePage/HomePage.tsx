"use client";
import React, { useRef } from "react";
import * as Styled from "./HomePage.styled";
import HomeHero from "@/components/pages/HomePage/HomeHero/HomeHero";
import FilmsSection from "@/components/pages/HomePage/FilmsSection/FilmsSection";
import ScrollDownArrowContainer from "@/components/pages/HomePage/HomeHero/ScrollDownArrowContainer/ScrollDownArrowContainer";
import DescriptionSection from "@/components/pages/HomePage/DescriptionSection/DescriptionSection";
import CarouselSection from "@/components/pages/HomePage/CarouselSection/CarouselSection";

export default function HomePage() {
    const filmsSectionRef = useRef<HTMLDivElement>(null);

    return (
        <Styled.Container>
            <HomeHero />
            <ScrollDownArrowContainer ref={filmsSectionRef} />
            <FilmsSection ref={filmsSectionRef} />
            <DescriptionSection />
            <CarouselSection />
        </Styled.Container>
    );
}
