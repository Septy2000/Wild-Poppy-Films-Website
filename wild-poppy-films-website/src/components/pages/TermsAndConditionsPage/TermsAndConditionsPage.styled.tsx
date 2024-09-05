"use client";
import styled from "styled-components";

export const PageWrapper = styled.div`
    margin-top: ${({ theme }) => theme.navbar_height.mobile};
    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        margin-top: ${({ theme }) => theme.navbar_height.tablet};
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        margin-top: ${({ theme }) => theme.navbar_height.desktop};
    }
    overflow: hidden;
`;

export const Banner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: ${({ theme }) => theme.colors.neutral.neutral_14};

    padding: 3rem 1.25rem 1.5rem 1.25rem;
    gap: 4rem;
    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        padding: 3rem 2.5rem 2.5rem 2.5rem;
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding: 7.5rem 4rem 4rem 4rem;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    gap: 2rem;

    padding: 3rem 1.25rem;
    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        padding: 3rem 2.5rem.5rem 2.5rem;
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding: 7.5rem 4rem 7.5rem 4rem;
        gap: 3rem;
    }

    max-width: 150rem;
`;

export const ListItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const PageTitle = styled.h1`
    font-size: 1rem;
    font-weight: 400;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.primary.poppy_red_light_1};
`;

export const ContentTitle = styled.h2`
    font-size: 1rem;
    font-weight: 700;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.neutral.neutral_11};
`;

export const Text = styled.p`
    font-size: 1rem;
    font-weight: 400;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.neutral.neutral_11};
`;
