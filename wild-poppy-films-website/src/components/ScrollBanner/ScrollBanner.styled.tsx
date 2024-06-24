"use client";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 48px;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.neutral.neutral_14};
    color: #fff;
`;

export const TextContainer = styled.div.attrs<{ $translateX: number }>((props) => ({
    style: {
        transform: `translateX(${props.$translateX}%)`,
    },
}))`
    display: flex;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
    will-change: transform;
    width: 200%;
    /* overflow: hidden; */
`;

export const Text = styled.span`
    color: ${({ theme }) => theme.colors.neutral.neutral_4};
    &:nth-child(3n) {
        color: ${({ theme }) => theme.colors.primary.poppy_red};
    }

    &::after {
        content: "\2014";
        margin: 0 4px;
    }

    font-family: Kagins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.22px;
`;
