"use client";
import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    gap: 8px;
    background: ${({ theme }) => theme.colors.neutral.neutral_1};
    margin-bottom: 16px;
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.25), 22px 16px 8px 0px rgba(0, 0, 0, 0),
        14px 10px 7px 0px rgba(0, 0, 0, 0.01), 8px 6px 6px 0px rgba(0, 0, 0, 0.05),
        4px 3px 4px 0px rgba(0, 0, 0, 0.09), 1px 1px 2px 0px rgba(0, 0, 0, 0.1);

    // mobile
    padding: 16px;
`;

export const FilmImage = styled(Image)`
    width: auto;
    height: 160px;
    object-fit: fill;
    border-radius: 4px;
`;

// to delete after importing images for each film
export const FilmImagePlaceholder = styled.div`
    width: auto;
    height: 160px;
    border-radius: 4px;
    background: black;
    flex-shrink: 0;
`;

export const FilmInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
`;

export const FilmTitleAndYearContainer = styled.div``;

export const FilmTitle = styled.span`
    color: ${({ theme }) => theme.colors.neutral.neutral_14};
    font-size: 20px;
`;

export const FilmYear = styled.span`
    color: ${({ theme }) => theme.colors.secondary_shaded.celadon_blue_dark_1};
    font-size: 10px;
    margin-left: 4px;
`;

export const FilmDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`;

export const FilmProductionContainer = styled.div``;

export const DefaultText = styled.span`
    color: ${({ theme }) => theme.colors.neutral.neutral_9};
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
`;

export const ProductionText = styled(DefaultText)`
    color: ${({ theme }) => theme.colors.secondary.core_green};
`;
