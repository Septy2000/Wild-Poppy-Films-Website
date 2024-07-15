"use client";
import styled from "styled-components";

export const GlassOverFrame = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 101%; // Fix problem for sub-pixel rendering where a small gap is visible at the bottom
    width: 100%;
    background: linear-gradient(
        to bottom,
        rgba(1, 7, 0, 0.25) 0%,
        rgba(1, 7, 0, 0.1) 30%,
        rgba(1, 7, 0, 0.15) 50%,
        rgba(1, 7, 0, 0.45) 70%,
        rgba(1, 7, 0, 1) 95%
    );
    pointer-events: none; /* Allow clicks to pass through to the image */
`;
