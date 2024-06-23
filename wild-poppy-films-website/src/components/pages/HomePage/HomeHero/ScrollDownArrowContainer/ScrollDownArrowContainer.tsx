import * as Styled from "./ScrollDownArrowContainer.styled";
import React, { forwardRef, RefObject } from "react";

const ScrollDownArrowContainer = forwardRef<HTMLDivElement>((props, ref) => {
    const scrollToSection = () => {
        if (ref) {
            const elementRef = ref as RefObject<HTMLDivElement>;
            elementRef.current?.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <React.Fragment>
            <Styled.Container onClick={scrollToSection}>
                <Styled.StyledDownwardIcon />
            </Styled.Container>
            <Styled.Spacer />
        </React.Fragment>
    );
});
ScrollDownArrowContainer.displayName = "ScrollDownArrowContainer";
export default ScrollDownArrowContainer;
