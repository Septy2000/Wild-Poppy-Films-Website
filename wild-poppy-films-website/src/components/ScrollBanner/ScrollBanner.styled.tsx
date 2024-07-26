"use client";
import styled from "styled-components";
import { ScrollBannerColorVariant } from "@/_types/styledComponents";

export const Container = styled.div<{ $variant: ScrollBannerColorVariant }>`
    display: flex;
    align-items: center;
    width: 100%;
    height: 5vh;
    overflow: hidden;
    background: ${({ theme, $variant }) => {
        switch ($variant) {
            case "black":
                return theme.colors.neutral.neutral_14;
            case "green":
                return theme.colors.secondary.core_green_light_2;
            case "red":
                return theme.colors.primary.poppy_red;
            default:
                return theme.colors.neutral.neutral_14;
        }
    }};
    color: #fff;
    padding: 1.25rem 0;
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
`;

export const Text = styled.span<{ $variant: ScrollBannerColorVariant }>`
    color: ${({ theme, $variant }) => {
        switch ($variant) {
            case "black":
                return theme.colors.neutral.neutral_4;
            case "green":
                return theme.colors.neutral.neutral_1;
            case "red":
                return theme.colors.neutral.neutral_4;
            default:
                return theme.colors.neutral.neutral_14;
        }
    }};
    &:nth-child(3n) {
        color: ${({ theme, $variant }) => {
            switch ($variant) {
                case "black":
                    return theme.colors.primary.poppy_red;
                case "green":
                    return theme.colors.primary.poppy_red;
                case "red":
                    return theme.colors.secondary.core_green_light_2;
                default:
                    return theme.colors.neutral.neutral_14;
            }
        }};
    }

    &::after {
        content: "\2014";
        margin: 0 4px;
    }

    font-family: Kagins;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.22px;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        font-size: 1.75rem;
    }
`;
