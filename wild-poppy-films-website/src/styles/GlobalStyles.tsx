"use client";
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Helvetica", sans-serif, Arial;
    }

    html body {
        width: 100%;
        overflow-x: auto;
    }

    /*
     * Several controls reset their appearance with \`all: unset\`, which also removes
     * the browser's focus ring - so keyboard users had no way to see where they were.
     * :focus-visible only shows for keyboard/AT focus, never on mouse clicks, so this
     * is invisible to anyone using a pointer.
     */
    :focus-visible {
        outline: 3px solid ${({ theme }) => theme.colors.secondary.core_green_light_2};
        outline-offset: 3px;
        border-radius: 2px;
    }

    /*
     * Honour the OS "reduce motion" setting. The site leans heavily on marquees,
     * slide-ins and an auto-advancing hero, which can trigger nausea or migraines for
     * people with vestibular disorders. Content stays exactly where it is - only the
     * movement stops, and opacity is forced back to 1 so elements that animate in
     * don't get stranded invisible.
     */
    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
            opacity: 1 !important;
        }
    }
`;
export default GlobalStyles;
