"use client";
import styled from "styled-components";
import DownwardIcon from "@/icons/navigation/downward-icon-mobile.svg";

// Rendered as a <button>, so it neutralises the user-agent button styles to keep
// looking exactly as it did when this was a <div onClick>.
export const Container = styled.div`
    border: none;
    font: inherit;
    color: inherit;

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.neutral.neutral_14};
    height: 10vh;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        display: none;
    }
`;

export const StyledDownwardIcon = styled(DownwardIcon)`
    width: 20px;
    height: 16px;
    path {
        fill: ${({ theme }) => theme.colors.neutral.neutral_9};
    }
`;

export const Spacer = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.colors.neutral.neutral_14};
    height: 100%;
`;
