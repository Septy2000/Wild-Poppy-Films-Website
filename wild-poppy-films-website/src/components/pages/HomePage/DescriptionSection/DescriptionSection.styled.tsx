"use client";
import styled from "styled-components";

export const Container = styled.div`
    padding: 3rem 1.25rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    // to be changed with actual image background
    background-color: ${({ theme }) => theme.colors.neutral.neutral_12};

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding: 7.5rem 8rem;
    }
`;

export const DescriptionContainer = styled.div`
    margin-bottom: 1.5rem;
    max-width: 47rem;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        margin-bottom: 4rem;
    }
`;

export const Description = styled.span`
    font-size: 1.25rem;
    line-height: 150%;
    letter-spacing: -0.22px;
    color: ${({ theme }) => theme.colors.neutral.neutral_1};

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        font-size: 2rem;
    }
`;

export const DescriptionGreen = styled(Description)`
    color: ${({ theme }) => theme.colors.secondary.core_green_light_2};
`;

export const CtaContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        justify-content: center;
    }
`;
