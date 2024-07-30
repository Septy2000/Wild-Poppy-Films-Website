"use client";
import styled from "styled-components";
import Image from "next/image";
import { GlassOverFrame } from "@/components/GlassOverFrame/GlassOverFrame.styled";
import { AnimationProps } from "@/_types/styledComponents";
import { generateSlideAnimation } from "@/utils/animationUtils";

export const MobileContainer = styled.div<{ $inView: boolean } & AnimationProps>`
    display: flex;
    position: relative;
    flex-direction: column;
    border-radius: 1rem;
    gap: 0.5rem;
    opacity: 0;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.neutral.neutral_1};
    box-shadow: ${({ theme }) => theme.box_shadow};
    ${({ $inView, $axis, $direction, $delay }) =>
        $inView && generateSlideAnimation($axis, $direction, $delay)}

    // mobile
    padding: 1rem;
    width: 18rem;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        display: none;
    }
`;

export const FilmImage = styled(Image)`
    width: 16rem;
    height: 12rem;
    border-radius: 0.25rem;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        border-radius: 1rem;
    }
`;

// to delete after importing images for each film
export const FilmImagePlaceholder = styled.div`
    width: 16rem;
    height: 12rem;
    border-radius: 0.25rem;
    background: black;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        border-radius: 1rem;
    }
`;

export const FilmInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        background: transparent;
    }
`;

export const FilmTitleAndYearContainer = styled.div`
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        background: transparent;
    }
`;

export const FilmTitle = styled.span`
    color: ${({ theme }) => theme.colors.neutral.neutral_14};
    font-size: 1.25rem;
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        color: ${({ theme }) => theme.colors.neutral.neutral_1};
        font-size: 2rem;
    }
`;

export const FilmYear = styled.span`
    color: ${({ theme }) => theme.colors.secondary_shaded.celadon_blue_dark_1};
    font-size: 0.75rem;
    margin-left: 4px;
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        color: ${({ theme }) => theme.colors.neutral.neutral_1};
    }
`;

export const FilmDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        background: transparent;
    }
`;

export const FilmProductionContainer = styled.div``;

export const DefaultText = styled.span`
    color: ${({ theme }) => theme.colors.neutral.neutral_9};
    font-size: 0.75rem;
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        color: ${({ theme }) => theme.colors.neutral.neutral_1};
        font-size: 1rem;
    }
`;

export const ProductionText = styled(DefaultText)`
    color: ${({ theme }) => theme.colors.secondary.core_green};
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
    }
`;

export const DesktopContainer = styled(MobileContainer)`
    display: none;
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        display: flex;
    }

    padding: 4rem;
    padding-top: 10rem;
    background: transparent;
    width: 40rem;
    height: 30rem;
    border-radius: 1rem;
    cursor: pointer;
    justify-content: space-between;
`;

export const BlockContainer = styled.div`
    display: block;
`;

export const GlassOverFrameStyled = styled(GlassOverFrame)`
    border-radius: 1rem;
    z-index: -1;
`;
