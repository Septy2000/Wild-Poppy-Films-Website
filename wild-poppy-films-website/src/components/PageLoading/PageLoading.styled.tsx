"use client";
import styled from "styled-components";

/**
 * Holds vertical space while a client-rendered section streams in, so the page
 * doesn't collapse to a blank strip. Sits inside the page's own wrapper, so it
 * deliberately carries no navbar offset of its own.
 */
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
    background: ${({ theme }) => theme.colors.neutral.neutral_1};
`;

export const Petal = styled.span`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary.poppy_red};

    animation: pulse 1.2s ease-in-out infinite;

    @keyframes pulse {
        0%,
        100% {
            transform: scale(0.8);
            opacity: 0.5;
        }
        50% {
            transform: scale(1);
            opacity: 1;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        animation: none;
        opacity: 0.7;
    }
`;
