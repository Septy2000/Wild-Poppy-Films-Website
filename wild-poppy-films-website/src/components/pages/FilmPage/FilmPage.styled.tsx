"use client";
import { GlassOverFrame } from "@/components/GlassOverFrame/GlassOverFrame.styled";
import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div``;

export const ImageContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        height: 70vh;
    }
`;

export const GlassOverFrameStyled = styled(GlassOverFrame)`
    z-index: 1;
`;

export const ImageStyled = styled(Image)`
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100vh;
    display: block;
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        height: 70vh;
    }
`;

export const ImageOverlay = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    gap: 2rem;
    width: 100%;
    height: auto;
    bottom: 4rem;
    left: 1.25rem;
    align-items: flex-start;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        height: 70%;
        justify-content: space-between;
        left: 4rem;
    }
`;

export const FilmTitle = styled.h1`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.neutral.neutral_4};
`;
