"use client";
import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./ScrollBanner.styled";
import { useInView } from "react-intersection-observer";
import { ScrollBannerColorVariant } from "@/_types/styledComponents";

export default function ScrollBanner({
    displayTextList,
    variant,
}: {
    displayTextList: string[];
    variant: ScrollBannerColorVariant;
}) {
    const [translateX, setTranslateX] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const { ref, inView } = useInView({
        threshold: 0.01,
        initialInView: true,
    });

    const [scrollBarLength, setScrollBarLength] = useState(0);

    useEffect(() => {
        setScrollBarLength(Math.round(window.innerWidth / displayTextList[0].length));
        // displayTextList is a literal defined inline by each caller, so it is a new
        // array every render - depending on it here would re-run this on every render.
        // Only its length matters and that never changes for a given banner.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        let frame: number | null = null;

        // This banner renders ~100 text spans. It previously stored window.scrollY in
        // state on every scroll event purely to re-trigger the translate calculation,
        // re-rendering all of them many times per frame. translateX is now derived
        // directly inside one rAF callback, and skipped entirely while off screen.
        function update() {
            frame = null;
            if (!containerRef.current) return;

            const containerY = containerRef.current.getBoundingClientRect().y;
            const containerYPositionPercentage = containerY / window.innerHeight;
            // value "50" is the max percentage of the translateX
            setTranslateX((1 - containerYPositionPercentage) * 50 * -1);
        }

        function onScroll() {
            if (frame === null) frame = requestAnimationFrame(update);
        }

        if (inView) {
            update();
            window.addEventListener("scroll", onScroll, { passive: true });
        }

        return () => {
            window.removeEventListener("scroll", onScroll);
            if (frame !== null) cancelAnimationFrame(frame);
        };
    }, [inView]);

    return (
        <Styled.Container ref={ref} $variant={variant}>
            <Styled.TextContainer ref={containerRef} $translateX={translateX}>
                {[...Array(scrollBarLength)].map((_, i) =>
                    displayTextList.map((displayText, index) => (
                        <Styled.Text key={index + i * displayTextList.length} $variant={variant}>
                            {displayText}
                        </Styled.Text>
                    ))
                )}
            </Styled.TextContainer>
        </Styled.Container>
    );
}
