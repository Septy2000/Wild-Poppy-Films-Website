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

/**
 * Renders as a <span> by default. The marquee repeats the page title ten times to
 * fill the scroll, and each copy used to be an <h1> - so every page shipped ten
 * competing top-level headings. TitleBuffer now promotes exactly one copy with
 * `as="h1"` and hides the rest from assistive tech. Styles are unchanged; the
 * explicit `display: inline-flex` means both elements render identically.
 */
export const Title = styled.span`
    position: relative;
    /* Was an <h1>, which is bold by user-agent default. Now that most copies render
       as <span>, the weight has to be stated explicitly or the marquee renders thin. */
    font-weight: bold;
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
