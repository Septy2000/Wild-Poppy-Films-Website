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
`;

export const GlassOverFrameStyled = styled(GlassOverFrame)`
    z-index: 1;
`;

export const ImageStyled = styled(Image)`
    object-fit: cover;
    width: 100%;
    height: 100vh;
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
    height: auto;
    bottom: 4rem;
    left: 1.25rem;
    align-items: flex-start;

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
    padding-bottom: 2rem;
    background: ${({ theme }) => theme.colors.neutral.neutral_14};
`;

export const DescriptionText = styled.p`
    font-size: 1rem;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.neutral.neutral_3};
`;

export const ProductionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0 1.25rem;
    padding-bottom: 3rem;
`;

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem 0;
`;

export const ProductionPairContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const CarouselSectionContainer = styled.div`
    padding-top: 2rem;
`;
export const Spacer = styled.div`
    height: 2rem;
    width: 100%;
`;

export const PlainText = styled.span`
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.neutral.neutral_14};
`;

export const PlainTextGreen = styled(PlainText)`
    color: ${({ theme }) => theme.colors.secondary.core_green};
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
