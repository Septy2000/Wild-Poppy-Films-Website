"use client";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 1.25rem 8rem 1.25rem;
    background: ${({ theme }) => theme.colors.primary.poppy_red_light_1};

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding: 3rem 4rem 8rem 4rem;
    }
    overflow: hidden;
`;

export const Title = styled.h2`
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.secondary.core_green_light_2};
    align-self: flex-start;
`;

export const NewsContainer = styled.div`
    display: grid;

    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-top: 2rem;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
    }
`;
