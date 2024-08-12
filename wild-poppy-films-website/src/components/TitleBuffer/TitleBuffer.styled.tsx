"use client";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 12.5rem;
    display: flex;
    background: ${({ theme }) => theme.colors.neutral.neutral_14};
    overflow: hidden;
    user-select: none;
    position: relative;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        height: 20rem;
    }
`;

export const ScrollContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    animation: scroll 15s linear infinite;
    white-space: nowrap;
    height: 100%;

    @keyframes scroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
    }
`;

export const Title = styled.h1`
    position: relative;
    font-size: 12.5rem;
    display: inline-flex;
    align-items: center;
    line-height: 1.5rem;
    color: ${({ theme }) => theme.colors.primary_shaded.poppy_red};
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        font-size: 18rem;
    }

    &:before {
        content: " - ";
        display: inline-block;
        font-size: 12.5rem;
        color: ${({ theme }) => theme.colors.primary_shaded.poppy_red};
        @media (min-width: ${({ theme }) => theme.screen.desktop}) {
            font-size: 18rem;
        }
    }
`;

export const Description = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.secondary.core_green_light_2};
    position: absolute;
    left: 2rem;
    bottom: 2rem;
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        font-size: 2rem;
    }
`;
