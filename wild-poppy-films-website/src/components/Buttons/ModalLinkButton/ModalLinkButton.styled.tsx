"use client";
import styled from "styled-components";
import Link from "next/link";
import RightFwdIcon from "@/icons/navigation/right-fwd-icon.svg";

// Renders as a real <a href>. As a <div onClick> these nav items were invisible to
// crawlers and unreachable by keyboard. The `text-decoration: none` below was
// already here, suggesting this was always meant to be a link.
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

export const Label = styled.p`
    color: ${({ theme }) => theme.colors.neutral.neutral_1};
`;

export const RightFwdIconStyled = styled(RightFwdIcon)`
    path {
        fill: ${({ theme }) => theme.colors.neutral.neutral_1};
    }
`;
