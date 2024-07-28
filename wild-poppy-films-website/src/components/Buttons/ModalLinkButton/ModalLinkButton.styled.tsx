"use client";

import styled, { keyframes, css } from "styled-components";
import Link from "next/link";
import RightFwdIcon from "@/icons/navigation/right-fwd-icon.svg";
import { ModalLinkButtonStyledProps } from "@/_types/styledComponents";
import { generateSlideAnimation } from "@/utils/animationUtils";
import { AnimationProps } from "@/_types/styledComponents";

export const Container = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        opacity: 60%;
    }

    margin-right: 9px;
`;

export const Label = styled.p<ModalLinkButtonStyledProps & AnimationProps>`
    color: ${({ theme }) => theme.colors.neutral.neutral_1};
    // move the label outside of view to the left;
    ${({ $axis, $direction, $delay }) => generateSlideAnimation($axis, $direction, $delay)}
`;

export const RightFwdIconStyled = styled(RightFwdIcon)<ModalLinkButtonStyledProps & AnimationProps>`
    path {
        fill: ${({ theme }) => theme.colors.neutral.neutral_1};
    }
    ${({ $axis, $direction, $delay }) => generateSlideAnimation($axis, $direction, $delay)}
`;
