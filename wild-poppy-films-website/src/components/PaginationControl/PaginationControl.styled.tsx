"use client";
import styled from "styled-components";
import SimpleArrowRight from "@/icons/navigation/simple-arrow-right.svg";
import SimpleArrowLeft from "@/icons/navigation/simple-arrow-left.svg";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const SimpleArrowRightStyled = styled(SimpleArrowRight)`
    path {
        fill: ${({ theme }) => theme.colors.neutral.neutral_14};
    }
`;

export const SimpleArrowLeftStyled = styled(SimpleArrowLeft)`
    path {
        fill: ${({ theme }) => theme.colors.neutral.neutral_14};
    }
`;

// Real <button>s: as <div>s these page controls could not be tabbed to or
// activated with Enter, and screen readers announced them as plain text.
export const PageNumberContainer = styled.button<{ $isSelected: boolean }>`
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    color: inherit;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    background: ${({ theme, $isSelected }) =>
        $isSelected ? theme.colors.secondary.core_green_light_2 : theme.colors.neutral.neutral_1};
    border-radius: 0.25rem;
    &:hover {
        opacity: 0.6;
    }

    &:active {
        transform: scale(0.95);
    }

    user-select: none;
    cursor: pointer;
`;

export const PageControlContainer = styled(PageNumberContainer)<{ $isInactive: boolean }>`
    opacity: ${({ $isInactive }) => ($isInactive ? "0.6" : "1")};
    background: ${({ theme }) => theme.colors.neutral.neutral_1};
`;

export const PageNumber = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.neutral.neutral_14};
`;
