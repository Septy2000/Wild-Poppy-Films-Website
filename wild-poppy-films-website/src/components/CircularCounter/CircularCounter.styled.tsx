import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 32px;
    height: 32px;
`;

export const CircleProgress = styled.circle`
    fill: none;
    stroke: ${({ theme }) => theme.colors.neutral.neutral_3};
    opacity: 60%;
    stroke-width: 4;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.2s ease-in-out;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
`;

export const Counter = styled.div`
    position: absolute;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.neutral.neutral_3};
    opacity: 60%;
`;
