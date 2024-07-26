"use client";
import styled from "styled-components";
import Image from "next/image";
import BackArrowIcon from "@/icons/navigation/left-fwd-icon.svg";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    border-radius: 16px;
    gap: 1rem;
    background: ${({ theme }) => theme.colors.neutral.neutral_1};
    cursor: pointer;
    // mobile
    padding: 0.75rem;
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.25), 22px 16px 8px 0px rgba(0, 0, 0, 0),
        14px 10px 7px 0px rgba(0, 0, 0, 0.01), 8px 6px 6px 0px rgba(0, 0, 0, 0.05),
        4px 3px 4px 0px rgba(0, 0, 0, 0.09), 1px 1px 2px 0px rgba(0, 0, 0, 0.1);

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        &::before {
            content: "";
            width: 48px;
            height: 48px;
            background-color: ${({ theme }) => theme.colors.neutral.neutral_2};
            border-radius: 50%;
            position: absolute;
            left: -64px;
            box-shadow: -2px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
        }
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding: 1.5rem;
        gap: 4rem;

        &:hover > svg {
            display: block;
        }
    }
`;

export const BackArrowIconStyled = styled(BackArrowIcon)`
    display: none;
    position: absolute;
    width: 36px;
    height: 48px;
    right: -96px; /* Adjust the positioning as needed */
    top: 50%;
    opacity: 0.6;
    transform: scale(2);
    path {
        fill: ${({ theme }) => theme.colors.neutral.neutral_9};
    }
`;

export const FilmImage = styled(Image)`
    object-fit: contain;
    border-radius: 4px;
    width: 96px;
    height: 96px;
    border-radius: 4px;
    background: black;
    flex-shrink: 0;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        width: 280px;
        height: 280px;
    }
`;

// to delete after importing images for each film
export const FilmImagePlaceholder = styled.div`
    width: 96px;
    height: 96px;
    border-radius: 4px;
    background: black;
    flex-shrink: 0;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        width: 280px;
        height: 280px;
    }
`;

export const FilmInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    margin-left: 16px;
`;

export const FilmTitleAndYearContainer = styled.div``;

export const FilmTitle = styled.span`
    color: ${({ theme }) => theme.colors.neutral.neutral_14};
    font-size: 1.25rem;
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        font-size: 2rem;
    }
`;

export const FilmYear = styled.span`
    color: ${({ theme }) => theme.colors.secondary_shaded.celadon_blue_dark_1};
    font-size: 0.75rem;
    margin-left: 4px;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        font-size: 1rem;
    }
`;

export const FilmDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        gap: 1rem;
    }
`;

export const FilmProductionContainer = styled.div``;

export const DefaultText = styled.span`
    color: ${({ theme }) => theme.colors.neutral.neutral_9};
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        font-size: 1.25rem;
    }
`;

export const ProductionText = styled(DefaultText)`
    color: ${({ theme }) => theme.colors.secondary.core_green};
`;
