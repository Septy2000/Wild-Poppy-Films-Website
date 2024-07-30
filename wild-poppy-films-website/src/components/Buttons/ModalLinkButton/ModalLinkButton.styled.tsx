"use client";

import styled from "styled-components";
import Link from "next/link";
import RightFwdIcon from "@/icons/navigation/right-fwd-icon.svg";
import { generateSlideAnimation } from "@/utils/animationUtils";
import { AnimationProps } from "@/_types/styledComponents";

export const Container = styled(Link)<AnimationProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    cursor: pointer;
    opacity: 0;
    ${({ $axis, $direction, $delay }) => generateSlideAnimation($axis, $direction, $delay)}
    &:hover {
        opacity: 60%;
    }

    margin-right: 9px;
`;

export const Label = styled.p`
    color: ${({ theme }) => theme.colors.neutral.neutral_1};
`;

export const RightFwdIconStyled = styled(RightFwdIcon)`
    path {
        fill: ${({ theme }) => theme.colors.neutral.neutral_1};
    }
`;
