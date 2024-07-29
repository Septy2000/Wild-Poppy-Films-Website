"use client";
import styled from "styled-components";

export const Container = styled.div`
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

export const FilmsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const FilmsFilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 280px;
    margin-bottom: 24px;
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
