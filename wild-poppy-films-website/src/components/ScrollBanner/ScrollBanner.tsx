import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./ScrollBanner.styled";
import { useInView } from "react-intersection-observer";

export default function ScrollBanner({ displayTextList }: { displayTextList: string[] }) {
    const containerY = useRef(0);
    const [currentScrollY, setCurrentScrollY] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const { ref, inView } = useInView({
        threshold: 0.01,
        initialInView: true,
    });

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (inView && containerRef.current) {
            const containerYPositionPercentage = containerY.current / window.innerHeight;
            // value "50" is the max percentage of the translateX
            setTranslateX((1 - containerYPositionPercentage) * 50 * -1);
        }
    }, [currentScrollY]);

    function handleScroll() {
        setCurrentScrollY(window.scrollY);
        if (containerRef.current) {
            containerY.current = containerRef.current.getBoundingClientRect().y;
        }
    }

    return (
        <Styled.Container ref={ref}>
            <Styled.TextContainer ref={containerRef} $translateX={translateX}>
                {[...Array(30)].map((_, i) =>
                    displayTextList.map((displayText, index) => (
                        <Styled.Text key={index + i * displayTextList.length}>
                            {displayText}
                        </Styled.Text>
                    ))
                )}
            </Styled.TextContainer>
        </Styled.Container>
    );
}
