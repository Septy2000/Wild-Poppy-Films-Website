"use client";
import styled from "styled-components";

/**
 * Hidden until focused. Lets keyboard users jump straight to the page content
 * instead of tabbing through the navigation on every page. Invisible to anyone
 * using a pointer.
 */
export const SkipLink = styled.a`
    position: absolute;
    left: -9999px;
    top: 0;
    z-index: 1000;

    &:focus {
        left: 1rem;
        top: 1rem;
        padding: 0.75rem 1.25rem;
        border-radius: 0.5rem;
        background: ${({ theme }) => theme.colors.neutral.neutral_14};
        color: ${({ theme }) => theme.colors.secondary.core_green_light_2};
        text-decoration: none;
        font-size: 1rem;
    }
`;
