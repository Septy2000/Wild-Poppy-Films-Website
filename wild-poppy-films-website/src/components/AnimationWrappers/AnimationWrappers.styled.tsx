"use client";
import styled from "styled-components";
import { generateSlideAnimation } from "@/utils/animationUtils";
import { ScrollIntoViewAnimationProps } from "@/_types/styledComponents";

export const AnimationWrapper = styled.div<ScrollIntoViewAnimationProps>`
    opacity: 0;
    ${({ $inView, $animationDelay }) => $inView && generateSlideAnimation("Y", 1, $animationDelay)}
`;

export const ScrollIntoViewAnimationWrapper = styled.div<ScrollIntoViewAnimationProps>`
    opacity: 0;
    ${({ $inView, $axis, $direction, $animationDelay }) =>
        $inView && generateSlideAnimation($axis, $direction, $animationDelay)}
`;
