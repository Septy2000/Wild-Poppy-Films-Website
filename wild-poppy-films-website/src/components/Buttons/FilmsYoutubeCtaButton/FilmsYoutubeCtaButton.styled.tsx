"use client";

import styled from "styled-components";
import Link from "next/link";
import RightFwdIcon from "@/icons/navigation/right-fwd-icon.svg";
import YoutubeIcon from "@/icons/social/yt-icon.svg";

export const Container = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        opacity: 60%;
    }

    padding: 10px 0;
    width: fit-content;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        width: fit-content;
        padding: 1rem 2rem;
        background: ${({ theme }) => theme.colors.neutral.neutral_1};
        border-radius: 0.5rem;
        align-self: end;
    }
`;
export const Label = styled.p`
    color: ${({ theme }) => theme.colors.primary.poppy_red};
`;

export const RightFwdIconStyled = styled(RightFwdIcon)`
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        display: none;
    }
    path {
        fill: ${({ theme }) => theme.colors.primary.poppy_red};
    }
`;

export const YoutubeIconStyled = styled(YoutubeIcon)`
    @media (max-width: ${({ theme }) => theme.screen.desktop}) {
        display: none;
    }
    path:first-of-type {
        fill: ${({ theme }) => theme.colors.primary.poppy_red};
    }

    path:last-of-type {
        fill: ${({ theme }) => theme.colors.neutral.neutral_1};
    }
`;
