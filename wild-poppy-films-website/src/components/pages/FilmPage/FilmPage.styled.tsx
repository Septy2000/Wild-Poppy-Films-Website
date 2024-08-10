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

export const HeroFlexContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    background: ${({ theme }) => theme.colors.neutral.neutral_14};

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 8rem;
    }
`;

export const DescriptionContainer = styled.div`
    padding: 1.25rem;
    padding-bottom: 2rem;
    background: ${({ theme }) => theme.colors.neutral.neutral_14};

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding: 1.25rem 4rem;
    }
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

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding: 1.25rem 4rem 1.25rem 6rem;
        padding-right: 4rem;
    }
`;

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem 0;
    background-color: ${({ theme }) => theme.colors.neutral.neutral_1};
`;

export const ProductionPairContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
    }
`;

export const CarouselSectionContainer = styled.div``;

export const Spacer = styled.div`
    height: 2rem;
    width: 100%;
`;

export const PlainText = styled.span`
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.neutral.neutral_14};

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        color: ${({ theme }) => theme.colors.neutral.neutral_1};
    }
`;

export const PlainTextGreen = styled(PlainText)`
    color: ${({ theme }) => theme.colors.secondary.core_green};
`;

export const NewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 1.25rem 8rem 1.25rem;
    background: ${({ theme }) => theme.colors.primary.poppy_red_light_1};

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding: 3rem 4rem 8rem 4rem;
    }
`;

export const NewsContainerTitle = styled.h2`
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.secondary.core_green_light_2};
    align-self: flex-start;
`;

export const NewsWrapper = styled.div`
    display: grid;

    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-top: 2rem;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
    }
`;
