"use client";
import Image from "next/image";
import styled, { keyframes, css } from "styled-components";
import PoppyLogoSketch from "@/icons/logo/poppy-logo-sketch.svg";

export const Container = styled.div`
    position: relative;
    padding: 3rem 1.25rem 7.5rem 1.25rem;

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

const slideIn = (initialX: number) => keyframes`
  from {
    transform: translateX(${initialX}px);
  }
  to {
    transform: translateX(0);
  }
`;

const slideAnimation = (translateX: number, delay: number) => css`
    transform: translateX(${translateX}px);
    animation: ${slideIn(translateX)} 0.2s ease-in-out forwards;
    animation-delay: ${delay}s;
`;

export const CarouselItem = styled(Image)<{ $translateX: number; $delay: number }>`
    width: 8rem;
    height: 8rem;
    margin-bottom: 1rem;

    ${({ $translateX, $delay }) => slideAnimation($translateX, $delay)}

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        margin: 0;
        width: 18.5rem;
        height: 18.5rem;
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
