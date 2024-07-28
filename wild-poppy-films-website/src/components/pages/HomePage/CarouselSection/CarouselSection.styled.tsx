"use client";
import Image from "next/image";
import styled from "styled-components";
import PoppyLogoSketch from "@/icons/logo/poppy-logo-sketch.svg";
import { generateSlideAnimation } from "@/utils/animationUtils";
import { AnimationProps } from "@/_types/styledComponents";

export const Container = styled.div`
    position: relative;
    padding: 3rem 1.25rem 7.5rem 1.25rem;
    overflow: hidden;
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding: 7.5rem 8rem;
    }
`;

export const CarouselContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        flex-direction: column;
        align-items: center;
    }
`;

export const CarouselLeft = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 28px;
    justify-items: flex-start;
    align-items: start;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        margin: 0;
        gap: 2rem;
        flex-direction: row;
        justify-items: center;
        align-items: center;
    }
`;

export const CarouselRight = styled(CarouselLeft)`
    margin-top: 0;
`;

export const CarouselItem = styled(Image)<{ $inView: boolean } & AnimationProps>`
    width: 8rem;
    height: 8rem;
    margin-bottom: 1rem;

    opacity: 0;
    ${({ $axis, $direction, $delay, $inView }) =>
        $inView && generateSlideAnimation($axis, $direction, $delay)}

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        margin: 0;
        width: 18.5rem;
        height: 18.5rem;

        ${({ $axis, $direction, $delay, $inView }) =>
            $inView && generateSlideAnimation($axis, Math.abs($direction) as 1 | -1, $delay)}
    }
`;

export const PoppyLogo = styled(PoppyLogoSketch)`
    position: absolute;
    top: 65%;
    right: -6rem;
    z-index: -1;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        right: -8rem;
        scale: 2;
    }
`;
