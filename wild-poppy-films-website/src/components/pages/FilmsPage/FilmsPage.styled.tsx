"use client";
import styled from "styled-components";
import { generateSlideAnimation } from "@/utils/animationUtils";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin: 0 1.25rem 4rem 1.25rem;
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        margin: 4rem;
    }
`;

export const FilmsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    margin-bottom: 2rem;
`;

export const FilmsFilterContainer = styled.div<{ $animationDelay: number; $inView: boolean }>`
    display: flex;
    flex-direction: row;
    width: 17.5rem;

    opacity: 0;
    ${({ $animationDelay, $inView }) => $inView && generateSlideAnimation("Y", 1, $animationDelay)}
`;

export const TopFilmsPageControlsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    margin-bottom: 2rem;
`;

export const FilmsFilter = styled.button<{ $selected: boolean }>`
    border: ${({ theme }) => theme.colors.neutral.neutral_12} 1px solid;
    padding: 16px 0;
    min-width: 90px;
    width: 100%;
    &:first-child {
        border-radius: 8px 0 0 8px;
    }

    &:last-child {
        border-radius: 0 8px 8px 0;
    }

    &:hover {
        opacity: ${({ $selected }) => ($selected ? "none" : "60%")};
    }

    background: ${({ theme, $selected }) =>
        $selected ? theme.colors.secondary.core_green_light_2 : theme.colors.neutral.neutral_1};
`;
