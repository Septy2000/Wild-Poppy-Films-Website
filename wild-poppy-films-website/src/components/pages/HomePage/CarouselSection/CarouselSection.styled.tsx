"use client";
import Image from "next/image";
import styled, { keyframes, css } from "styled-components";
import PoppyLogoSketch from "@/icons/logo/poppy-logo-sketch.svg";

export const Container = styled.div`
    overflow: hidden;
    padding: 48px 20px 120px 20px;
`;

export const CarouselContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 24px;
`;

export const CarouselLeft = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 28px;
    justify-items: flex-start;
    align-items: start;
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
`;

export const PoppyLogo = styled(PoppyLogoSketch)`
    position: relative;
    top: -8rem;
    right: -6rem;
    z-index: -1;
`;
