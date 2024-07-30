"use client";
import { GlassOverFrame } from "@/components/GlassOverFrame/GlassOverFrame.styled";
import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div``;

export const ImageContainer = styled.div`
    width: 100%;
    height: 50vh;
    position: relative;
    overflow: hidden;
`;

export const GlassOverFrameStyled = styled(GlassOverFrame)`
    z-index: 1;
`;

export const ImageStyled = styled(Image)`
    object-fit: cover;
    width: 100%;
    height: 50vh;
    display: block;
    flex-grow: 0;
    flex-shrink: 0;
`;

export const ImageOverlay = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    gap: 2rem;
    width: 100%;
    height: 50vh;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        gap: 4rem;
    }
`;

export const FilmTitle = styled.h1`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.neutral.neutral_4};
`;

export const DescriptionContainer = styled.div`
    padding: 1.25rem;
`;

export const DescriptionText = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.neutral.neutral_3};
`;

export const ProductionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

export const ProductionPairContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const PlainText = styled.span`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.neutral.neutral_14};
`;

export const PlainTextGreen = styled(PlainText)`
    color: ${({ theme }) => theme.colors.secondary.core_green_light_2};
`;

export const NewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

export const NewsContainerTitle = styled.h2`
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.secondary.core_green_light_2};
`;
