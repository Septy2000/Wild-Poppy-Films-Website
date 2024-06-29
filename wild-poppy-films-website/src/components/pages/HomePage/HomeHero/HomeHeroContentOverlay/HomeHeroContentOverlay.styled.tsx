"use client";
import styled from "styled-components";

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
`;

export const MovieTitleAndCounterContainer = styled.div`
    grid-area: film-title-and-counter;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 20px;
`;

export const MovieTitleAndYearWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    height: 2rem;
    overflow: hidden;
`;

export const MovieTitleAndYearContainer = styled.div<{ $movieIndex: number; $isSelected: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;

    transition: transform 0.2s ease-in-out;
    transform: translateY(${({ $movieIndex }) => -100 * $movieIndex}%);
`;

export const MovieTitle = styled.p`
    font-size: 24px;
    font-weight: 400;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.neutral.neutral_1};
    margin-right: 4px;
`;

export const MovieYear = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.secondary.celadon_blue};
    opacity: 40%;
`;
