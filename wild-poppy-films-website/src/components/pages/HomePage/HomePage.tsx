"use client";
import React, { useRef } from "react";
import * as Styled from "./HomePage.styled";
import HomeHero from "@/components/pages/HomePage/HomeHero/HomeHero";
import FilmsSection from "@/components/pages/HomePage/FilmsSection/FilmsSection";
import ScrollDownArrowContainer from "@/components/pages/HomePage/HomeHero/ScrollDownArrowContainer/ScrollDownArrowContainer";
import DescriptionSection from "@/components/pages/HomePage/DescriptionSection/DescriptionSection";
import CarouselSection from "@/components/pages/HomePage/CarouselSection/CarouselSection";
import { VisuallyHidden } from "@/components/VisuallyHidden/VisuallyHidden.styled";

export default function HomePage() {
    const filmsSectionRef = useRef<HTMLDivElement>(null);

    return (
        <Styled.Container>
            {/* The home page expresses its identity through the hero imagery and the
                logo in the navbar, so there is no visible heading to promote. Search
                engines and screen readers still need one. */}
            <VisuallyHidden as="h1">
                Wild Poppy Films - independent film production
            </VisuallyHidden>
            <HomeHero />
            {/* The arrow scrolls to the films section. It used to receive the same ref
                object as FilmsSection and only read from it, which happened to work but
                read as though two components shared one ref. It now just gets told what
                to scroll to. */}
            <ScrollDownArrowContainer
                onScrollTo={() =>
                    filmsSectionRef.current?.scrollIntoView({ behavior: "smooth" })
                }
            />
            <FilmsSection ref={filmsSectionRef} />
            <DescriptionSection />
            <CarouselSection />
        </Styled.Container>
    );
}
