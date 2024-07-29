"use client";
import styled from "styled-components";

export const Container = styled.div`
    width: 5rem;
    height: 1.5rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
    border-radius: 0px 0.25rem 0px 0.5rem;
    background: ${({ theme }) => theme.colors.neutral_shaded.neutral_9};
    padding: 0.25rem 0.5rem;
    align-content: center;
    text-align: center;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        top: 0;
        right: 0;

        padding: 0.5rem 1rem;
        width: 10rem;
        height: 3rem;

        border-radius: 0px 1rem 0 0.5rem;
    }
`;

export const Text = styled.p`
    color: ${({ theme }) => theme.colors.secondary.core_green_light_2};
    font-size: 0.5rem;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        font-size: 1rem;
    }
`;
