"use client";
import styled from "styled-components";
import RightFwdIcon from "@/icons/navigation/right-fwd-icon.svg";

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: "." "controls" "film-title-and-counter";
    user-select: none;
`;

export const MovieControlsContainer = styled.div`
    grid-area: controls;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        display: none;
    }
`;

export const MovieTitleAndCounterContainer = styled.div`
    grid-area: film-title-and-counter;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 20px;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding: 0 64px;
    }
`;

export const MovieTitleAndYearWrapper = styled.div`
    display: flex;

    @media (max-width: ${({ theme }) => theme.screen.desktop}) {
        flex-direction: column;
        align-items: start;
        height: 2rem;
        overflow: hidden;
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        flex-direction: row;
        width: 100%;
        justify-content: space-evenly;
    }
`;

export const MovieInstanceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding: 1.5rem 2rem;
    }
`;

export const MovieTitleAndYearContainer = styled.div<{ $movieIndex: number; $isSelected: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    word-wrap: normal;

    @media (max-width: ${({ theme }) => theme.screen.desktop}) {
        transition: transform 0.2s ease-in-out;
        transform: translateY(${({ $movieIndex }) => -100 * $movieIndex}%);
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        flex-direction: column;
        transition: opacity 0.2s, transform 0.2s;
        opacity: ${({ $isSelected }) => ($isSelected ? 1 : 0.6)};
        transform: ${({ $isSelected }) => ($isSelected ? "scale(1.1)" : "scale(1)")};
    }
`;

export const MovieTitle = styled.p`
    font-size: 24px;
    font-weight: 400;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.neutral.neutral_1};
    margin-right: 4px;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        margin: 0;
    }
`;

export const MovieYear = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.secondary.celadon_blue};
    opacity: 40%;
`;

export const ForwardIconStyled = styled(RightFwdIcon)<{ $isSelected: boolean }>`
    fill: ${({ theme }) => theme.colors.neutral.neutral_1};
    transition: opacity 0.2s;
    opacity: ${({ $isSelected }) => ($isSelected ? "1" : "0")};

    @media (max-width: ${({ theme }) => theme.screen.desktop}) {
        display: none;
    }

    transform: scale(1.5);
`;
