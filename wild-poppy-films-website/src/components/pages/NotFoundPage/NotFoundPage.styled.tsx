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
    background: ${({ theme }) => theme.colors.neutral.neutral_14};

    width: 100%;
    max-width: 150rem;

    padding: 3rem 1.25rem 1.5rem 1.25rem;
    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        padding: 3rem 2.5rem 2.5rem 2.5rem;
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding: 15rem 4rem 4rem 4rem;
        justify-content: flex-start;
    }
`;

export const BannerWrapper = styled.div`
    background: ${({ theme }) => theme.colors.neutral.neutral_14};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 50vh;
    padding: 3rem 1.25rem;
    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        padding: 3rem 2.5rem.5rem 2.5rem;
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding: 7.5rem 4rem 7.5rem 4rem;
        gap: 3rem;
    }
`;

export const ContentWrapper = styled.div`
    width: 100%;
    max-width: 150rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem;
`;

export const Title = styled.h1`
    font-size: 1rem;
    font-weight: 400;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.primary.poppy_red_light_1};

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        font-size: 2rem;
    }
`;

export const Text = styled.p`
    font-size: 1rem;
    font-weight: 400;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.neutral.neutral_11};

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        font-size: 1.5rem;
    }
`;
