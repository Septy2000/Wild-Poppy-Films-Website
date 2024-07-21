"use client";

import styled, { keyframes, css } from "styled-components";
import Link from "next/link";
import RightFwdIcon from "@/icons/navigation/right-fwd-icon.svg";
import { ModalLinkButtonStyledProps } from "@/_types/styledComponents";

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

    padding: 10px 0;
`;
export const Label = styled.p`
    color: ${({ theme }) => theme.colors.primary.poppy_red};
`;

export const RightFwdIconStyled = styled(RightFwdIcon)`
    path {
        fill: ${({ theme }) => theme.colors.primary.poppy_red};
    }
`;
